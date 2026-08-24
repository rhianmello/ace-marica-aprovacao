# AprovaAI — explicações inteligentes

O banco de questões pode receber explicações pedagógicas por IA em uma etapa de pré-processamento. A IA pesquisa fontes online, valida o gabarito informado e grava a explicação no próprio JSON. O aluno não chama a IA ao responder a questão.

## Fluxo

1. A automação seleciona questões sem explicação, com explicação genérica ou marcadas para revisão.
2. A OpenAI Responses API é chamada no backend do GitHub Actions com a ferramenta de pesquisa web.
3. A IA retorna explicação, gabarito verificado, possível gabarito sugerido, status e URLs de fontes.
4. Questões com divergência de gabarito ou estrutura quebrada recebem `precisa_revisao: true` e não devem ser consideradas validadas.
5. O JSON é salvo no repositório.
6. O GitHub Pages publica o banco atualizado.

## Segurança

A chave da OpenAI **não deve** ser colocada no `index.html`, no JSON ou em qualquer arquivo público. Configure-a em:

`Settings → Secrets and variables → Actions → New repository secret`

Nome do segredo:

`OPENAI_API_KEY`

## Execução

A automação pode ser executada manualmente em:

`Actions → Enriquecer explicações das questões → Run workflow`

Por padrão, processa 10 questões por execução. Isso limita custo e permite revisão gradual do banco.

Também existe uma execução diária programada no workflow. O limite pode ser alterado em `AI_EXPLANATION_BATCH`.

## Status gravados em cada questão

- `status_ia: validada` — explicação e gabarito considerados compatíveis com a pesquisa.
- `status_ia: revisao` — divergência ou problema estrutural; exige revisão humana.
- `gabarito_verificado` — gabarito que a IA considerou compatível com as fontes.
- `gabarito_sugerido` — preenchido quando existe possível divergência.
- `fontes_ia` — URLs usadas pela pesquisa.
- `explicacao_ia_atualizada_em` — data/hora da última revisão.

## Regra principal

A IA **não pode trocar silenciosamente o gabarito de uma prova**. Se o material original e a pesquisa externa divergirem, a questão deve ficar marcada para revisão.
