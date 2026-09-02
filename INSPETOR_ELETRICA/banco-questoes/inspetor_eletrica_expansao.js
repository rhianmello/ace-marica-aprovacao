/* Expansão autoral de reforço. As questões abaixo não reproduzem provas oficiais. */
(function(){
const Q=[];
function add(id,disc,assunto,sub,en,alts,g,exp,prova){Q.push({id,disciplina:disc,assunto,subassunto:sub,enunciado:en,alternativas:{A:alts[0],B:alts[1],C:alts[2],D:alts[3],E:alts[4]},gabarito:g,explicacao:exp,tipo:'inedita',fonte:'Autorais AprovaAI — reforço baseado no edital PROMINP/Cesgranrio',prova});}
let n=1;const q=(d,a,s,e,o,g,x,p)=>add('IEX-'+String(n++).padStart(3,'0'),d,a,s,e,o,g,x,p);
// PORTUGUÊS — interpretação e vocabulário
const pt=[
['Tema','Um texto que descreve etapas de uma inspeção tem como tema central:',['A sequência e o conteúdo da inspeção','A cor da instalação','A idade do inspetor','A marca do computador','O tamanho da sala'],'A','O tema deve representar o assunto central desenvolvido.'],
['Inferência','Se um procedimento exige registrar resultados após o ensaio, pode-se inferir que o registro serve para:',['Documentar a evidência do ensaio','Eliminar a necessidade de ensaio','Substituir qualquer norma','Evitar identificação do equipamento','Impedir rastreabilidade'],'A','O registro documenta a execução e seus resultados.'],
['Vocabulário','Em “o equipamento apresentou desempenho satisfatório”, satisfatório significa, no contexto:',['Adequado ao esperado','Necessariamente perfeito','Defeituoso','Inexistente','Proibido'],'A','O contexto indica desempenho considerado adequado.'],
['Conectivo','Na frase “o teste foi repetido porque o primeiro resultado era inconclusivo”, “porque” indica:',['Causa ou motivo','Conclusão','Oposição','Comparação','Condição'],'A','A oração introduz a causa da repetição.'],
['Conectivo','Na frase “o ensaio foi concluído, portanto o relatório foi emitido”, “portanto” introduz:',['Conclusão','Causa','Oposição','Condição','Finalidade'],'A','“Portanto” marca conclusão.'],
['Coesão','Em um texto técnico, repetir a identificação do equipamento ao longo das etapas favorece:',['Rastreabilidade e clareza','Ambiguidade','Contradição','Ausência de referência','Redução do conteúdo técnico'],'A','A identificação consistente melhora a rastreabilidade.'],
['Interpretação','Quando uma questão pede a informação “de acordo com o texto”, a resposta deve:',['Ser sustentada pelo texto','Vir de conhecimento externo apenas','Contradizer o texto','Ser opinião pessoal','Ignorar trechos relevantes'],'A','A pergunta exige evidência textual.'],
['Vocabulário','“A inspeção foi postergada” significa que ela foi:',['Adiada','Cancelada definitivamente','Antecipada','Duplicada','Concluída'],'A','Postergar é adiar.'],
['Interpretação','Uma conclusão válida de um texto deve:',['Ser compatível com as informações apresentadas','Ser sempre uma opinião do leitor','Não considerar o título','Ignorar relações lógicas','Depender de informação inventada'],'A','Conclusões devem respeitar as evidências do texto.'],
['Vocabulário','“Conforme procedimento” indica, no contexto técnico, que a ação segue:',['Uma instrução ou procedimento estabelecido','Uma opinião casual','Uma medida aleatória','Uma hipótese sem registro','Uma regra inexistente'],'A','A expressão remete a procedimento previamente estabelecido.']];
pt.forEach(x=>q('Português','Compreensão e interpretação',x[0],x[1],x[2],x[3],x[4],'Prova 1 - Básica Geral'));
// MATEMÁTICA
const mat=[
['Regra de três','Uma equipe inspeciona 12 equipamentos em 3 horas. Mantido o ritmo, em 5 horas inspecionará:',['15','18','20','24','30'],'C','12/3=4 equipamentos por hora; 4×5=20.'],
['Porcentagem','Uma taxa de 8% aplicada a R$ 250 corresponde a:',['R$ 10','R$ 15','R$ 20','R$ 25','R$ 30'],'C','0,08×250=20.'],
['Média','As medições 10, 12, 14 e 16 têm média:',['11','12','13','14','15'],'C','A soma é 52; 52/4=13.'],
['Função afim','Na função f(x)=3x−2, f(4) vale:',['8','10','12','14','16'],'B','3×4−2=10.'],
['Função quadrática','As raízes de x²−5x+6=0 são:',['1 e 6','2 e 3','−2 e −3','0 e 6','1 e 5'],'B','Fatorando: (x−2)(x−3)=0.'],
['Sistema linear','No sistema x+y=7 e x−y=1, x vale:',['2','3','4','5','6'],'C','Somando: 2x=8; x=4.'],
['Trigonometria','Em triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, senθ vale:',['0,2','0,4','0,6','0,8','1,0'],'C','senθ=3/5=0,6.'],
['Geometria plana','A área de um triângulo de base 10 cm e altura 6 cm é:',['20','25','30','40','60'],'C','A=(10×6)/2=30 cm².'],
['Geometria espacial','O volume de um cilindro é calculado por:',['πr²h','2πr','πd','r²+h','4πr²'],'A','Volume do cilindro: πr²h.'],
['Geometria analítica','A distância entre os pontos (0,0) e (3,4) é:',['3','4','5','7','12'],'C','Pelo teorema de Pitágoras, d=5.']];
mat.forEach(x=>q('Matemática',x[0],x[1],x[1],x[2],x[3],x[4],'Prova 1 - Básica Geral'));
// FÍSICA
const fis=[
['Newton','Uma força resultante de 20 N aplicada a uma massa de 5 kg produz aceleração de:',['2','4','5','10','25'],'B','a=F/m=20/5=4 m/s².'],
['Energia','Um corpo de 2 kg movendo-se a 3 m/s possui energia cinética de:',['3 J','6 J','9 J','12 J','18 J'],'C','Ec=mv²/2=2×9/2=9 J.'],
['Equilíbrio','Para um corpo permanecer em equilíbrio translacional, a soma das forças deve ser:',['Zero','Máxima','Negativa','Positiva','Igual à massa'],'A','Equilíbrio translacional exige resultante de forças nula.'],
['Pressão','Uma força de 100 N distribuída em 2 m² produz pressão de:',['20 Pa','50 Pa','100 Pa','200 Pa','500 Pa'],'B','P=F/A=100/2=50 Pa.'],
['Velocidade','Um equipamento percorre 120 m em 10 s. A velocidade média é:',['6','10','12','20','120'],'C','v=120/10=12 m/s.'],
['Aceleração','A velocidade passa de 5 para 25 m/s em 4 s. A aceleração média é:',['4','5','6','10','20'],'B','a=(25−5)/4=5 m/s².'],
['Eletrostática','A unidade SI de carga elétrica é:',['Volt','Ampère','Ohm','Coulomb','Watt'],'D','Carga elétrica é medida em coulomb.'],
['Eletromagnetismo','O campo magnético em torno de um condutor retilíneo percorrido por corrente depende da:',['Corrente e geometria/distância do ponto','Somente da massa','Somente da temperatura','Somente da pressão','Somente da cor do condutor'],'A','O campo depende da corrente e da posição/geometria do sistema.'],
['Radiação','A luz visível é uma forma de:',['Radiação eletromagnética','Onda exclusivamente mecânica','Corrente contínua','Pressão hidrostática','Movimento circular uniforme'],'A','A luz é radiação eletromagnética.'],
['Térmica','A dilatação térmica ocorre quando a dimensão de um material varia principalmente devido à:',['Variação de temperatura','Variação de massa somente','Cor','Frequência da rede','Pressão atmosférica apenas'],'A','Materiais, em geral, variam de dimensão com a temperatura.']];
fis.forEach(x=>q('Física',x[0],x[1],x[1],x[2],x[3],x[4],'Prova 1 - Básica Geral'));
// QUALIDADE / METROLOGIA / SEGURANÇA
const esp=[
['Inspeção de Qualidade','Recebimento','No recebimento de um equipamento elétrico, a inspeção deve comparar o material recebido com:',['Requisitos especificados, documentos e identificação','A preferência pessoal do inspetor','A cor da embalagem apenas','O preço sem especificação','Nenhum documento'],'A','O recebimento verifica conformidade com requisitos e documentação aplicável.','Prova 2 - Específica Geral'],
['Inspeção de Qualidade','Não conformidade','Uma não conformidade registrada deve permitir:',['Identificar o requisito não atendido e a evidência','Excluir o histórico','Ocultar o responsável','Substituir o procedimento sem análise','Impedir rastreabilidade'],'A','O registro deve ser objetivo e rastreável.','Prova 2 - Específica Geral'],
['ISO 9001','Processos','A abordagem de processos busca:',['Gerenciar atividades inter-relacionadas para alcançar resultados','Eliminar registros','Dispensar clientes','Substituir inspeção por opinião','Evitar indicadores'],'A','A abordagem de processos relaciona entradas, atividades, saídas e controles.','Prova 2 - Específica Geral'],
['Metrologia','Precisão','Precisão está mais associada à:',['Concordância entre resultados de medições repetidas','Proximidade obrigatória do valor verdadeiro','Unidade SI','Temperatura','Escala gráfica'],'A','Precisão se relaciona à dispersão dos resultados.','Prova 2 - Específica Geral'],
['Metrologia','Exatidão','Exatidão de medição está associada à:',['Proximidade entre o resultado e o valor de referência','Quantidade de algarismos apenas','Cor do instrumento','Tempo de inspeção','Tamanho da bancada'],'A','Exatidão é relacionada à proximidade do valor de referência.','Prova 2 - Específica Geral'],
['Metrologia','SI','A unidade SI de comprimento é:',['Metro','Litro','Quilograma','Segundo','Ampère'],'A','A unidade de comprimento é o metro.','Prova 2 - Específica Geral'],
['Segurança','EPI','Óculos de proteção são classificados como:',['EPI','EPC','Instrumento de medição','Material de consumo','Dispositivo de comando'],'A','Óculos de proteção protegem diretamente o trabalhador e são EPI.','Prova 2 - Específica Geral'],
['Segurança','Risco elétrico','Uma fonte de choque elétrico deve ser tratada como:',['Perigo que requer controle e medidas de proteção','Situação sem risco','Falha exclusivamente mecânica','Condição aceitável sem avaliação','Problema apenas documental'],'A','Choque elétrico é um perigo que exige avaliação e controle.','Prova 2 - Específica Geral'],
['Eletrotécnica','Circuito série','Em um circuito série, a corrente é:',['A mesma em todos os elementos ideais em série','Nula em todos os elementos','Maior no primeiro sempre','Menor no último sempre','Independente da fonte'],'A','A corrente é comum a todos os elementos em série.','Prova 3 - Elétrica N1'],
['Eletrotécnica','Potência','A potência ativa em um resistor ideal é dada por:',['P=VI=I²R=V²/R','P=V/R','P=I/R','P=R/V','P=V+I'],'A','As formas são equivalentes para elemento puramente resistivo.','Prova 3 - Elétrica N1'],
['Eletrotécnica','CA','A frequência angular de uma senoide de frequência f é:',['ω=2πf','ω=f/2π','ω=π/f','ω=1/f','ω=f²'],'A','A relação fundamental é ω=2πf.','Prova 3 - Elétrica N1'],
['Eletrotécnica','Potência CA','Em uma carga indutiva, o fator de potência é tipicamente:',['Atrasado','Adiantado','Sempre unitário','Sempre zero','Negativo obrigatoriamente'],'A','Carga indutiva tende a apresentar corrente atrasada em relação à tensão.','Prova 3 - Elétrica N1'],
['Máquinas e dispositivos BT','Transformador','A relação de transformação ideal depende da relação entre:',['Número de espiras e tensões','Área da sala','Temperatura ambiente apenas','Resistência de aterramento','Velocidade do rotor'],'A','No transformador ideal, V1/V2=N1/N2.','Prova 3 - Elétrica N1'],
['Máquinas e dispositivos BT','Motor','O escorregamento de um motor de indução é necessário porque:',['Permite existir diferença de velocidade entre campo e rotor para indução','Elimina corrente do rotor','Torna a velocidade zero','Substitui a alimentação','Desliga o estator'],'A','Sem escorregamento, não haveria indução sustentando o torque no motor de indução.','Prova 3 - Elétrica N1'],
['Máquinas e dispositivos BT','Proteção','Um DR pode atuar diante de:',['Corrente diferencial/residual incompatível com o equilíbrio esperado','Somente sobrecorrente de curto','Somente sobretensão','Somente temperatura','Somente perda de fase'],'A','O DR é voltado à detecção de corrente residual/diferencial.','Prova 3 - Elétrica N1'],
['Medições elétricas','Multímetro','Ao medir resistência com um multímetro, uma fonte externa conectada ao circuito pode:',['Interferir na medição e danificar o instrumento, conforme as condições','Melhorar sempre a precisão','Ser obrigatória','Substituir o ohmímetro','Não produzir qualquer efeito'],'A','Medições de resistência exigem circuito adequadamente desenergizado.','Prova 3 - Elétrica N1'],
['Medições elétricas','Megômetro','Antes de um ensaio de resistência de isolamento, deve-se:',['Desenergizar, isolar o circuito e seguir procedimento de segurança','Energizar em máxima tensão','Curto-circuitar a instalação permanentemente','Retirar todas as identificações','Ignorar o procedimento'],'A','O ensaio exige isolamento da fonte e procedimento seguro.','Prova 3 - Elétrica N1'],
['Medições elétricas','Aterramento','Um ensaio de resistência de aterramento deve considerar:',['Método de ensaio, conexões, condições do sistema e instrumento adequado','Somente a cor do cabo','Somente a tensão nominal','Somente a potência do motor','Nenhum procedimento'],'A','A confiabilidade da medição depende do método e das condições do sistema.','Prova 3 - Elétrica N1'],
['Desenho técnico','Unifilar','No diagrama unifilar, a simbologia permite:',['Representar de modo simplificado os circuitos elétricos','Eliminar a identificação dos circuitos','Mostrar somente a arquitetura civil','Substituir todas as especificações','Dispensar legendas'],'A','O unifilar é uma representação simplificada baseada em simbologia.','Prova 3 - Elétrica N1'],
['Desenho técnico','Identificação','A identificação de cabos e equipamentos em desenhos serve principalmente para:',['Correlacionar o desenho com o elemento físico e outros documentos','Apenas decorar a prancha','Eliminar testes','Substituir a inspeção','Impedir rastreabilidade'],'A','A identificação conecta documentação, montagem e elemento físico.','Prova 3 - Elétrica N1']];
esp.forEach(x=>q(x[0],x[0],x[1],x[2],x[3],x[4],x[5],x[6]));
window.INSPETOR_ELETRICA_EXPANSAO_BANK=Q;
})();