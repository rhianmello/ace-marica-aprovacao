// AprovaAI Transpetro 2026 — carregador da matriz de Linguagens
// Carrega o banco de Português e Inglês sem quebrar o HTML da página.
(function(){
  var src='./TRANSPETRO/banco-questoes/edital_2026_linguagens_gerado.js';
  if(document.readyState==='loading') {
    document.write('<script src="'+src+'"></script>');
  } else {
    var s=document.createElement('script');
    s.src=src;
    document.head.appendChild(s);
  }
})();
