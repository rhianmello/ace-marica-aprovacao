import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path
from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
QUESTIONS = ROOT / "ace_marica_questoes_seed.json"
REPORT = ROOT / "ia_explicacoes_relatorio.json"
BATCH_SIZE = int(os.getenv("AI_EXPLANATION_BATCH", "10"))
GENERIC = re.compile(r"^Gabarito\s+[A-E]\s+extra[ií]do da p[aá]gina final", re.I)
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])


def clean_text(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def question_prompt(q):
    alternatives = q.get("alternativas", {})
    alt_text = "\n".join(f"{k}) {v}" for k, v in alternatives.items())
    return f"""Você é o revisor pedagógico de uma plataforma brasileira de concursos.

Analise a questão abaixo. Sua missão NÃO é criar uma nova questão. É validar o gabarito fornecido e escrever uma explicação didática.

Disciplina: {q.get('disciplina','')}
Assunto: {q.get('assunto','')}
Enunciado: {q.get('enunciado','')}
Alternativas:
{alt_text}
Gabarito informado: {q.get('gabarito','')}
Fonte informada: {q.get('fonte','')}

Use pesquisa na web. Priorize fontes oficiais e normativas: leis e atos oficiais, Ministério da Saúde, secretarias de saúde, órgãos públicos, manuais técnicos oficiais e legislação consolidada. Para matérias não jurídicas, priorize fontes institucionais ou acadêmicas confiáveis.

Regras:
1. Não invente fatos, leis, datas ou referências.
2. Se o gabarito informado estiver compatível com fontes confiáveis, mantenha-o.
3. Se houver evidência forte de que o gabarito informado está errado, NÃO corrija silenciosamente: marque precisa_revisao=true e informe gabarito_sugerido.
4. Se a questão estiver estruturalmente quebrada (por exemplo, o comando virou uma alternativa), marque precisa_revisao=true.
5. A explicação deve ensinar por que a alternativa correta é correta e, quando útil, por que as principais alternativas estão erradas.
6. Não use a frase 'gabarito extraído da página final'.
7. Só marque validada quando o gabarito e a estrutura forem compatíveis com a pesquisa.
8. Retorne SOMENTE um JSON válido com exatamente estas chaves:
{{
  "explicacao": "texto didático",
  "gabarito_verificado": "A",
  "gabarito_sugerido": "",
  "precisa_revisao": false,
  "fontes": ["https://...", "https://..."]
}}
Use gabarito_sugerido vazio quando não houver divergência. Em fontes, inclua somente URLs que realmente tenham sido usadas na pesquisa.
"""


def enrich(q):
    response = client.responses.create(
        model=os.getenv("OPENAI_MODEL", "gpt-5.6-luna"),
        tools=[{"type": "web_search"}],
        input=question_prompt(q),
    )
    raw = response.output_text.strip()
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        repair = client.responses.create(
            model=os.getenv("OPENAI_MODEL", "gpt-5.6-luna"),
            input=("Converta o texto abaixo em JSON válido sem alterar seu conteúdo factual. "
                   "Use as chaves explicacao, gabarito_verificado, gabarito_sugerido, "
                   "precisa_revisao e fontes.\n" + raw),
    )
        data = json.loads(repair.output_text)

    q["explicacao"] = clean_text(data.get("explicacao"))
    q["gabarito_verificado"] = clean_text(data.get("gabarito_verificado")) or q.get("gabarito")
    q["gabarito_sugerido"] = clean_text(data.get("gabarito_sugerido"))
    q["precisa_revisao"] = bool(data.get("precisa_revisao", False))
    q["status_ia"] = "revisao" if q["precisa_revisao"] else "validada"
    q["fontes_ia"] = data.get("fontes", []) if isinstance(data.get("fontes", []), list) else []
    q["explicacao_ia_atualizada_em"] = datetime.now(timezone.utc).isoformat()
    return q


def main():
    data = json.loads(QUESTIONS.read_text(encoding="utf-8"))
    targets = []
    for idx, q in enumerate(data):
        exp = clean_text(q.get("explicacao"))
        if not exp or GENERIC.search(exp) or q.get("precisa_revisao"):
            targets.append((idx, q))
    targets = targets[:BATCH_SIZE]

    report = {"processadas": 0, "validadas": 0, "revisao": 0, "erros": []}
    for idx, q in targets:
        try:
            enrich(q)
            report["processadas"] += 1
            report["revisao" if q.get("precisa_revisao") else "validadas"] += 1
        except Exception as exc:
            report["erros"].append({"indice": idx, "erro": str(exc)})

    QUESTIONS.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
