// Banco curado da Transpetro — Análise de Sistemas/SAP.
// Questões autorais de treino; não são questões oficiais da Cesgranrio.
(function(){
/* Carrega os bancos temáticos antes da inicialização do transpetro.html. */
['./TRANSPETRO/banco-questoes/terca_engenharia_bpmn.js','./TRANSPETRO/banco-questoes/quinta_sexta_sabado.js'].forEach(src=>document.write('<script src="'+src+'"><\/script>'));
const F=[
['SAP PM','Ordem de manutenção','Uma ordem de manutenção é usada para planejar, executar e controlar trabalho em ativos técnicos.','planejar, executar e controlar o trabalho de manutenção','registrar somente clientes','substituir o cadastro de materiais','emitir somente notas fiscais','criar usuários SAP','A','SAP Help Portal — Maintenance Order'],
['SAP PM','IW31/IW32/IW33','No SAP GUI tradicional, IW31, IW32 e IW33 estão associados respectivamente a criar, alterar e exibir ordens de manutenção.','criar, alterar e exibir ordens de manutenção','criar, alterar e exibir notificações','criar, alterar e exibir equipamentos','criar, alterar e exibir materiais','criar, alterar e exibir fornecedores','A','SAP Help Portal — Maintenance Order'],
['SAP PM','IW21/IW22/IW23','No SAP GUI tradicional, IW21, IW22 e IW23 estão associados respectivamente a criar, alterar e exibir notificações.','criar, alterar e exibir notificações','criar, alterar e exibir ordens','criar, alterar e exibir equipamentos','criar, alterar e exibir locais de instalação','criar, alterar e exibir materiais','A','SAP Help Portal — Maintenance Notification'],
['SAP PM','IW38','A transação IW38 é tradicionalmente utilizada para seleção/listagem de:','ordens de manutenção','notificações de manutenção','materiais','clientes','fornecedores','A','SAP Help / SAP GUI transaction references'],
['SAP PM','IW39','A transação IW39 é tradicionalmente associada à seleção/listagem de:','ordens de manutenção','notificações','equipamentos','materiais','projetos','A','SAP Help / SAP GUI transaction references'],
['SAP PM','Notificação','Uma notificação pode registrar uma ocorrência, problema ou necessidade de manutenção.','ocorrência, problema ou necessidade de manutenção','somente pagamento','somente venda','somente folha de pagamento','somente usuários','A','SAP Help Portal — Maintenance Notification'],
['SAP PM','Referência da notificação','Uma notificação de manutenção pode ter como objeto de referência:','equipamento ou local de instalação','somente cliente','somente centro de custo','somente fornecedor','somente projeto','A','SAP Help Portal — Maintenance Notification'],
['SAP PM','Histórico','Os dados de uma notificação de manutenção são relevantes para:','histórico, avaliação e planejamento futuro','somente impressão','somente criação de usuários','somente faturamento SD','somente folha de pagamento','A','SAP Help Portal — Maintenance Notification'],
['SAP PM','Objeto técnico','Um equipamento no SAP PM representa:','um objeto técnico individualizável','um plano de contas','um cliente','um pedido de compra','um projeto inteiro','A','SAP Help Portal — Technical Objects'],
['SAP PM','Local de instalação','Um local de instalação representa:','uma posição funcional na estrutura técnica','um documento financeiro','uma senha','um cliente','um pedido de compra','A','SAP Help Portal — Technical Objects'],
['SAP PM','Lista de objetos','A object list de uma ordem pode incluir:','equipamentos, locais de instalação e outros objetos técnicos','somente usuários','somente clientes','somente fornecedores','somente contas contábeis','A','SAP Help Portal — Working with the Object List'],
['SAP PM','Operações','As operações de uma ordem de manutenção servem para:','detalhar e planejar o trabalho a ser executado','registrar apenas clientes','criar contas bancárias','substituir equipamentos','criar usuários','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Suboperações','Suboperações em uma ordem são usadas para:','detalhar o trabalho dentro de uma operação','substituir o cabeçalho da ordem','criar um novo módulo SAP','registrar somente impostos','excluir materiais','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Materiais','Operações de manutenção podem conter:','materiais de estoque, não estoque e serviços conforme o processo','somente clientes','somente contas','somente usuários','somente documentos fiscais','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Datas','Uma ordem de manutenção pode conter:','datas de início e fim planejadas','somente data de criação','somente data de pagamento','somente data fiscal','nenhuma informação temporal','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Capacidade','No planejamento de manutenção, operações podem conter:','requisitos de capacidade','somente impostos','somente clientes','somente contratos','somente dados de RH','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Custos','Uma ordem de manutenção pode permitir análise de:','custos planejados e reais','somente vendas','somente folha','somente estoque físico','somente impostos','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Centro de trabalho','O main work center de uma ordem identifica:','o centro de trabalho responsável pela execução da tarefa','o cliente','o fornecedor','o banco de dados','o plano de contas','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Grupo de planejamento','O maintenance planner group identifica:','grupo responsável por planejar e processar tarefas de manutenção','grupo de clientes','grupo de fornecedores','grupo fiscal','grupo de vendas','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Planta de manutenção','A maintenance plant identifica:','a planta onde os objetos técnicos estão instalados','o cliente da ordem','o fornecedor do material','o banco de dados','o centro de custo somente','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Planta de planejamento','A maintenance planning plant é usada para:','planejar e preparar tarefas de manutenção','emitir notas fiscais','controlar clientes','gerenciar usuários','criar projetos financeiros','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Tipo de ordem','O tipo de ordem de manutenção serve para:','diferenciar ordens conforme sua finalidade','identificar usuários','substituir o equipamento','definir senha','criar fornecedores','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Tipo de atividade','Maintenance activity type pode categorizar:','tipos de atividade como reparos e inspeções','usuários','clientes','documentos fiscais','interfaces','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Planejamento','Uma ordem pode ter indicador de planejamento que distingue:','ordens planejadas, imediatas ou não planejadas conforme configuração','usuários internos','clientes','fornecedores','relatórios','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Revisão','Em manutenção, uma revision pode representar:','um período de parada planejada de uma planta ou parte dela','uma versão de software','um cliente','um documento fiscal','uma senha','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Programação','A programação da ordem determina:','quando as operações de manutenção devem ocorrer','qual usuário será criado','qual cliente será faturado','qual fornecedor será eliminado','qual módulo será instalado','A','SAP Help Portal — Maintenance Order'],
['SAP PM','Forward scheduling','Forward scheduling calcula datas:','a partir de uma data inicial em direção ao futuro','sempre a partir da data final','somente pelo custo','somente pelo estoque','somente pela prioridade financeira','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Backward scheduling','Backward scheduling calcula datas:','a partir de uma data final em direção ao passado','somente a partir da data de criação','somente pelo custo','somente pelo estoque','somente pelo cliente','A','SAP Help Portal — Maintenance Order API'],
['SAP PM','Notificação para ordem','Uma ordem pode ser criada a partir de:','uma notificação de manutenção','somente uma fatura','somente um pedido de venda','somente uma folha de pagamento','somente um usuário','A','SAP Help Portal — Manage Maintenance Notifications and Orders'],
['SAP PM','Notificação vinculada','Quando uma ordem é criada para uma única notificação, a notificação pode se tornar:','a notificação de cabeçalho da ordem','um cliente','um fornecedor','um centro de custo','um material','A','SAP Help Portal — Manage Maintenance Notifications and Orders']
];
const S=[
(s,e)=>`Considerando o SAP PM e o tema ${s}, assinale a alternativa correta. ${e}`,
(s,e)=>`Em uma prova de Análise de Sistemas, qual afirmação sobre ${s} está correta? ${e}`,
(s,e)=>`Durante o planejamento de manutenção, qual alternativa descreve corretamente ${s}? ${e}`,
(s,e)=>`Em um ambiente SAP S/4HANA, qual opção está correta sobre ${s}? ${e}`,
(s,e)=>`Assinale a alternativa correta a respeito de ${s} no contexto de manutenção. ${e}`,
(s,e)=>`Uma equipe de manutenção utiliza SAP PM. Sobre ${s}, é correto afirmar que: ${e}`,
(s,e)=>`Em um cenário empresarial integrado, qual alternativa representa corretamente ${s}? ${e}`,
(s,e)=>`Para fins de integração e manutenção, qual afirmação sobre ${s} é correta? ${e}`,
(s,e)=>`Considere um processo de manutenção corporativo. Sobre ${s}, assinale a correta. ${e}`,
(s,e)=>`Na análise funcional de SAP PM, qual alternativa está correta sobre ${s}? ${e}`
];
const L=['A','B','C','D','E'],Q=[];
F.forEach((f,i)=>{const [assunto,sub,e,A,B,C,D,E,g,fonte]=f,opts=[A,B,C,D,E];S.forEach((st,v)=>{const sh=(i+v)%5,arr=opts.slice(sh).concat(opts.slice(0,sh)),alts={A:arr[0],B:arr[1],C:arr[2],D:arr[3],E:arr[4]},gb=L[arr.indexOf(A)];Q.push({id:`TP-SAPPM-${String(Q.length+1).padStart(4,'0')}`,assunto,subassunto:sub,dificuldade:v>=7?'dificil':v>=4?'medio':'facil',enunciado:st(sub,e),alternativas:alts,gabarito:gb,explicacao:`A alternativa ${gb} está correta: ${A}.`,fonte});});});
window.TRANSPETRO_CURADO=Q.concat(window.TRANSPETRO_TERCA||[],window.TRANSPETRO_EXTRA_DIAS||[]);
})();