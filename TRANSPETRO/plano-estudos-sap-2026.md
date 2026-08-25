# TRANSPETRO 2026 — Plano de Estudos Prioritário
## Análise de Sistemas — SAP

> **Objetivo:** organizar o conteúdo da ênfase 6 — Análise de Sistemas - SAP em ordem estratégica de estudo para a prova da Fundação Cesgranrio.
>
> **Prova:** 29/11/2026  
> **Edital:** TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR-2026.4  
> **Prioridade 0–100:** estimativa estratégica para orientar o estudo. **Não representa peso oficial atribuído pela Cesgranrio.**

## 1. Ordem geral de estudo

| Ordem | Matéria / bloco | Prioridade | Motivo estratégico |
|---:|---|---:|---|
| 1 | ERP / SAP + processos funcionais | **100** | Núcleo da ênfase SAP e maior aderência ao cargo |
| 2 | FI / CO | **98** | Parte central do conteúdo funcional de SAP |
| 3 | Integrações entre módulos SAP | **98** | Tema transversal e com forte potencial para questões situacionais |
| 4 | MM / SD | **94** | Logística, compras, vendas e integração financeira |
| 5 | SAP-BI + informações gerenciais | **90** | Conteúdo explicitamente previsto no edital |
| 6 | Modelagem de Sistemas / Requisitos | **88** | Base forte de Análise de Sistemas |
| 7 | BPMN 2.0 / ARIS-EPC / processos | **88** | Conteúdo explícito e altamente compatível com questões de cenário |
| 8 | UML 2.5.1 / Processo Unificado | **84** | Conteúdo técnico clássico de análise e modelagem |
| 9 | ETL / Data Warehouse / Data Mart | **82** | Bloco importante de BI |
| 10 | OLAP / modelagem multidimensional | **80** | Complementa BI e pode ser cobrado conceitualmente |
| 11 | Gestão de Projetos / PMBOK 7 | **78** | Bloco específico relevante, mas posterior ao núcleo SAP |
| 12 | Scrum / Kanban / métodos ágeis | **76** | Parte do conteúdo de gestão de projetos |
| 13 | Mineração de dados | **72** | Conteúdo específico, porém menor que SAP e modelagem |
| 14 | Balanced Scorecard | **65** | Conteúdo explícito, mas de menor prioridade relativa |
| 15 | HCM | **62** | Deve ser estudado; menor prioridade estratégica que FI/CO/MM/SD |
| 16 | Report Writer / Report Painter | **60** | Tópico específico e relativamente pontual |
| 17 | Perfil de acesso / autorizações SAP | **58** | Conteúdo específico, bom para revisão direcionada |
| 18 | Português | **85** | 10 questões; não deixar para o final |
| 19 | Inglês | **80** | 10 questões; foco em interpretação |

---

# 2. BLOCO 1 — ERP / SAP / Processos Funcionais
## Prioridade: 100/100

### 2.1 ERP
- Conceito de ERP
- Objetivos
- Vantagens e desvantagens
- Integração empresarial
- Base de dados integrada
- Padronização de processos
- Processamento integrado
- Rastreabilidade
- Processos ponta a ponta
- Parametrização x customização
- Implantação de ERP
- Governança e controles

### 2.2 SAP ERP
- SAP ERP
- Versões e evolução do SAP ERP
- Conceitos gerais de arquitetura
- Transações e códigos de transação (T-Codes)
- Dados mestres x dados transacionais
- Processos integrados
- Configuração
- Testes
- Suporte
- Perfis de usuário
- Integrações

### 2.3 Estratégia de estudo
**Dominar primeiro:** conceito → processo → módulo → documento → integração → resultado financeiro/gerencial.

---

# 3. BLOCO 2 — FI / CO
## Prioridade: 98/100

> **Este é um dos blocos que deve receber maior atenção.**

## 3.1 FI — Financial Accounting

### FI-GL — General Ledger
- Razão geral
- Contabilidade financeira
- Plano de contas
- Lançamentos contábeis
- Documentos contábeis
- Débito e crédito
- Períodos contábeis
- Integração contábil

### FI-AP — Accounts Payable
- Contas a pagar
- Fornecedores
- Faturas
- Obrigações
- Pagamentos
- Fluxo de documentos
- Integração com compras/MM

### FI-AR — Accounts Receivable
- Contas a receber
- Clientes
- Faturamento
- Recebimentos
- Créditos
- Integração com vendas/SD

### TRM — Treasury and Risk Management
- Tesouraria
- Gestão financeira
- Liquidez
- Fluxo financeiro
- Operações de tesouraria

### FM — Funds Management
- Gestão orçamentária
- Controle de orçamento
- Disponibilidade orçamentária
- Compromissos

### BCS — Business Consolidation System
- Consolidação contábil
- Consolidação financeira
- Informações consolidadas

### Fluxo de caixa
- Entradas
- Saídas
- Liquidez
- Planejamento financeiro
- Relação com processos de contas a pagar/receber

## 3.2 CO — Controlling
- Controlling
- Centros de custo
- Custos
- Ordens internas
- Controle gerencial
- Planejamento e acompanhamento de custos
- Relação entre CO e FI
- Alocação/rateio de custos
- Informações para tomada de decisão

### Prioridade interna FI/CO
| Subtema | Prioridade |
|---|---:|
| FI-GL | **100** |
| FI-AP | **98** |
| FI-AR | **98** |
| CO | **98** |
| FM | **88** |
| TRM | **82** |
| BCS | **75** |
| Fluxo de caixa | **90** |

---

# 4. BLOCO 3 — Integração SAP
## Prioridade: 98/100

Estudar a integração como **processo de negócio**, não apenas como lista de módulos.

### Integrações prioritárias
- FI ↔ CO
- MM ↔ FI
- MM ↔ CO
- SD ↔ FI
- SD ↔ CO
- MM ↔ SD
- HCM ↔ FI/CO
- SAP-BI ↔ módulos transacionais

### Processos ponta a ponta
- Compra → recebimento → estoque → fatura → pagamento
- Venda → entrega → faturamento → recebimento
- Processo financeiro → contabilização → controle de custos
- Dados operacionais → BI → informação gerencial

### Como a Cesgranrio pode explorar
- Identificar qual módulo origina determinado dado
- Identificar consequência de uma operação em outro módulo
- Relacionar processo logístico a impacto financeiro
- Comparar dados mestres e transacionais
- Identificar o ponto de integração de um processo

---

# 5. BLOCO 4 — MM / SD
## Prioridade: 94/100

## MM — Materials Management
- Materiais
- Cadastro de materiais
- Fornecedores
- Requisição de compra
- Pedido de compra
- Recebimento
- Estoque
- Movimentações
- Compras
- MRP
- Integração MM-FI
- Integração MM-CO

## SD — Sales and Distribution
- Clientes
- Vendas
- Pedido de venda
- Entrega
- Faturamento
- Recebimento
- Integração SD-FI
- Integração SD-CO

---

# 6. BLOCO 5 — HCM
## Prioridade: 62/100

- Gestão de pessoas
- Dados de pessoal
- Estrutura organizacional
- Processos de RH
- Integração do HCM com outros processos SAP
- Configuração, teste e suporte do módulo

**Estratégia:** estudar depois de dominar FI/CO/MM/SD.

---

# 7. BLOCO 6 — SAP-BI e Informações Gerenciais
## Prioridade: 90/100

- Business Intelligence
- Informações gerenciais
- Planejamento estratégico
- Planejamento econômico-financeiro
- Indicadores
- Apoio à decisão
- Integração de dados SAP
- Relatórios gerenciais

### Ferramentas
- Report Writer
- Report Painter

---

# 8. BLOCO 7 — Perfil de Acesso SAP
## Prioridade: 58/100

- Usuários
- Perfis
- Autorizações
- Papéis
- Controle de acesso
- Segregação de funções
- Segurança de acesso ao SAP
- Desenho de perfil de acesso

---

# 9. BLOCO 8 — Modelagem de Sistemas de Informação
## Prioridade: 88/100

- Conceito de sistema de informação
- Tipos de sistemas
- Características
- Tecnologias
- Ciclos de vida
- Processos de desenvolvimento

## Requisitos
- Requisitos funcionais
- Requisitos não funcionais
- Características dos requisitos
- Elicitação
- Análise
- Especificação
- Validação
- Gerenciamento
- Técnicas de elicitação
- Rastreabilidade
- Regras de negócio

---

# 10. BLOCO 9 — Processos de Negócio / BPMN / ARIS-EPC
## Prioridade: 88/100

## BPMN 2.0
- Eventos de início
- Eventos intermediários
- Eventos de fim
- Tarefas
- Subprocessos
- Gateways
- Gateway exclusivo
- Gateway paralelo
- Gateway inclusivo
- Fluxo de sequência
- Fluxo de mensagem
- Pools
- Lanes
- Objetos de dados
- Associações
- Colaboração

## ARIS-EPC
- Eventos
- Funções
- Regras
- Conectores AND
- Conectores OR
- Conectores XOR
- Fluxos
- Organização
- Dados

## Relação com SAP
- AS-IS
- TO-BE
- Automatização
- Workflow
- Aprovação
- Exceções
- Integração entre processos

---

# 11. BLOCO 10 — UML / Processo Unificado
## Prioridade: 84/100

### UML 2.5.1
- Casos de uso
- Classes
- Objetos
- Sequência
- Atividades
- Estados
- Componentes
- Implantação
- Associação
- Agregação
- Composição
- Generalização
- Dependência
- Multiplicidade

### Processo Unificado
- Iniciação
- Elaboração
- Construção
- Transição
- Iterações
- Casos de uso
- Arquitetura
- Riscos

---

# 12. BLOCO 11 — BI / ETL / DW / Data Mart
## Prioridade: 82/100

### ETL
- Extração
- Transformação
- Carga
- Staging
- Limpeza
- Padronização
- Validação
- Integração
- Deduplicação
- Metadados

### Data Warehouse
- Conceito
- Dados históricos
- Integração
- Orientação por assunto
- Não volatilidade
- Dimensão temporal

### Data Mart
- Conceito
- Escopo departamental
- Data Mart dependente
- Data Mart independente
- Relação com Data Warehouse

---

# 13. BLOCO 12 — OLAP
## Prioridade: 80/100

- OLAP
- Modelagem multidimensional
- Fatos
- Dimensões
- Medidas
- Granularidade
- Star Schema
- Snowflake Schema
- Drill-down
- Drill-up
- Drill-across
- Slice
- Dice
- Pivotagem

---

# 14. BLOCO 13 — Mineração de Dados
## Prioridade: 72/100

- Conceitos de Data Mining
- Classificação
- Agrupamento/clusterização
- Algoritmos de mineração
- Identificação de padrões
- Avaliação dos resultados

**Foco:** saber diferenciar classificação de agrupamento e reconhecer o objetivo de cada técnica.

---

# 15. BLOCO 14 — Balanced Scorecard
## Prioridade: 65/100

- Conceito
- Finalidade
- Perspectiva financeira
- Clientes
- Processos internos
- Aprendizado e crescimento
- Objetivos estratégicos
- Indicadores
- Metas
- Relações de causa e efeito
- Mapa estratégico

---

# 16. BLOCO 15 — Gestão de Projetos
## Prioridade: 78/100

### PMBOK 7
- Princípios
- Sistema de entrega de valor
- Governança
- Stakeholders
- Equipe
- Planejamento
- Trabalho do projeto
- Entrega
- Medição
- Incerteza
- Riscos
- Tailoring
- Qualidade
- Complexidade
- Adaptabilidade
- Mudança

### Ágil
- Manifesto Ágil
- Scrum
- Product Owner
- Scrum Master
- Developers
- Product Goal
- Sprint Goal
- Product Backlog
- Sprint Backlog
- Increment
- Definition of Done
- Sprint Planning
- Daily Scrum
- Sprint Review
- Retrospective
- Kanban
- WIP
- Lead time
- Cycle time
- Throughput

---

# 17. BLOCO 16 — Português
## Prioridade: 85/100

**10 questões na prova.**

- Compreensão de textos
- Coesão
- Coerência
- Significação das palavras
- Ortografia
- Tempos e modos verbais
- Classes de palavras
- Coordenação
- Subordinação
- Pontuação
- Concordância verbal e nominal
- Regência verbal e nominal
- Crase
- Colocação pronominal

**Prioridade prática:** interpretação + coesão + sintaxe + regência/crase/concordância.

---

# 18. BLOCO 17 — Inglês
## Prioridade: 80/100

**10 questões na prova.**

- Compreensão de texto escrito
- Ideia principal
- Informações específicas
- Inferência
- Vocabulário em contexto
- Conectores
- Pronomes
- Tempos verbais
- Modal verbs
- Estruturas condicionais

**Prioridade prática:** interpretação. Não transformar o estudo em curso completo de inglês.

---

# 19. Ciclo recomendado de estudo

## Fase 1 — Núcleo SAP
1. ERP
2. FI
3. CO
4. MM
5. SD
6. Integrações SAP
7. SAP-BI
8. Report Writer / Painter
9. Autorizações
10. HCM

## Fase 2 — Análise de Sistemas
11. Requisitos
12. Sistemas de Informação
13. BPMN 2.0
14. ARIS-EPC
15. UML
16. Processo Unificado

## Fase 3 — Dados
17. ETL
18. Data Warehouse
19. Data Mart
20. OLAP
21. Mineração de dados

## Fase 4 — Gestão
22. PMBOK 7
23. Scrum
24. Kanban
25. BSC

## Fase 5 — Gerais
26. Português
27. Inglês

---

# 20. Regra de distribuição das questões do banco

Para cada bloco de questões, priorizar:

- **50% SAP/ERP/integrações**
- **20% Análise de Sistemas/modelagem/processos**
- **15% BI/dados/mineração**
- **10% Gestão de Projetos/Agile/BSC**
- **5% revisão de tópicos fracos**

Nas revisões, aumentar automaticamente a participação de assuntos com maior índice de erro.

---

# 21. Regra específica para FI/CO

Como FI/CO é prioridade **98/100**, o banco deve conter questões progressivas:

### Nível 1 — Conceito
Identificação do módulo e finalidade.

### Nível 2 — Processo
Sequência de operações dentro do SAP.

### Nível 3 — Integração
Consequência de uma operação FI/CO em MM, SD ou outro módulo.

### Nível 4 — Cenário
Situação empresarial com escolha da solução/processo correto.

### Nível 5 — Cesgranrio
Questões com alternativas próximas, exigindo distinção entre conceitos e análise do cenário.

---

# 22. Observação importante sobre SAP PM

A experiência profissional do candidato em **SAP PM** é uma vantagem para compreender integração e processos de manutenção, mas o conteúdo programático específico publicado para a ênfase SAP deve ser seguido pelo edital.

Portanto:

- **Não substituir FI/CO/MM/SD por SAP PM.**
- Usar SAP PM como conhecimento de apoio para entender integração de processos.
- Dar prioridade ao conteúdo efetivamente listado no edital.

---

# 23. Meta de banco de questões

| Bloco | Meta |
|---|---:|
| SAP / ERP / FI / CO / MM / SD / integração | **500+** |
| Modelagem / Requisitos / UML / Processo Unificado | **300+** |
| BPMN / ARIS-EPC / Processos | **200+** |
| DW / Data Mart / ETL / OLAP | **250+** |
| PMBOK / Scrum / Kanban | **250+** |
| Mineração de dados | **100+** |
| BSC | **100+** |
| Português | **150+** |
| Inglês | **150+** |
| **Meta geral** | **2.000+** |

---

## Fonte

Conteúdo programático baseado no **Edital nº 04 — TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR-2026.4**, ênfase 6 — Análise de Sistemas - SAP. A priorização de 0–100 é uma estratégia de estudo e não constitui peso oficial da prova.
