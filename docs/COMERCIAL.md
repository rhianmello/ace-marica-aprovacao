# ProvaNorte — ativação comercial

## O que já está no repositório

- Marca de venda: **ProvaNorte**.
- Cursos independentes: ACE Maricá, Transpetro e Inspetor de Elétrica.
- Preço configurado: **R$ 19,90 por curso/cargo**.
- Acesso: **1 ano** após a confirmação do pagamento.
- Compra vinculada somente ao curso escolhido.
- Liberação automática quando `purchases.status` muda para `paid`.
- Cancelamento/reembolso bloqueia somente o curso daquela compra.
- Limite de **2 dispositivos ativos** por usuário.
- Simulado grátis de 3 questões, sem cadastro.
- Retenção com sequência, ponto fraco, progresso e próxima meta.

## 1. Banco de dados

Execute `docs/commercial-access.sql` uma vez no Supabase SQL Editor.

Depois confira:

```sql
select id, name, slug, active, price_cents
from public.courses
order by id;
```

Os slugs usados pelo front-end são:

- `ace-marica`
- `transpetro`
- `inspetor-eletrica`

## 2. Mercado Pago

A integração usa Checkout Pro. A preferência é criada no servidor e o comprador é redirecionado para o Mercado Pago.

Crie uma aplicação no Mercado Pago e configure estes secrets nas Edge Functions do Supabase:

- `MP_ACCESS_TOKEN` — Access Token da aplicação Mercado Pago.
- `MP_WEBHOOK_SECRET` — chave secreta exibida na configuração de Webhooks.
- `SUPABASE_SERVICE_ROLE_KEY` — chave de servidor do projeto. **Nunca coloque essa chave em HTML, JavaScript do navegador ou GitHub Pages.**

As funções estão em:

- `supabase/functions/create-payment/index.ts`
- `supabase/functions/payment-webhook/index.ts`

O `payment-webhook` está configurado sem JWT porque é chamado pelo Mercado Pago; a autenticidade deve ser validada pela assinatura `x-signature` e pelo secret do webhook.

## 3. Deploy das Edge Functions

Com o Supabase CLI instalado e autenticado:

```bash
supabase functions deploy create-payment
supabase functions deploy payment-webhook
```

Defina os secrets antes do uso em produção:

```bash
supabase secrets set MP_ACCESS_TOKEN="SEU_ACCESS_TOKEN"
supabase secrets set MP_WEBHOOK_SECRET="SEU_WEBHOOK_SECRET"
supabase secrets set SUPABASE_SERVICE_ROLE_KEY="SUA_SERVICE_ROLE_KEY"
```

## 4. Webhook

O checkout envia `notification_url` para:

`https://ztqtcbzjesrkuaijmylm.supabase.co/functions/v1/payment-webhook`

O Mercado Pago deve enviar eventos de pagamento. A função consulta o pagamento diretamente na API do Mercado Pago, confere o `external_reference`, confere o valor e só então atualiza `purchases`.

## 5. Fluxo final

1. Aluno escolhe o curso.
2. ProvaNorte cria `purchases` como `pending`.
3. Edge Function cria a preferência no Mercado Pago.
4. Aluno paga no Mercado Pago.
5. Mercado Pago chama o webhook.
6. Webhook muda a compra para `paid`.
7. Trigger libera somente aquele curso por 1 ano.
8. `pagamento.html` identifica a confirmação e mostra o acesso.

## 6. Segurança antes da primeira venda

Os ambientes de curso já verificam matrícula antes de carregar o dashboard. Porém, **os bancos de questões que estão em arquivos públicos do GitHub ainda podem ser acessados diretamente por URL**. Isso não é proteção suficiente para um produto pago.

Antes de comercializar em escala, migrar o conteúdo pago para tabelas com RLS, Storage privado ou uma Edge Function que entregue questões somente para usuários autorizados. O simulador grátis pode continuar usando uma amostra pública separada.
