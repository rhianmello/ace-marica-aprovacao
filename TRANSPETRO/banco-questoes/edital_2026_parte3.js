// AprovaAI Transpetro 2026 — carregador complementar
// Mantém a ordem de carregamento: específicos expandidos -> Português/Inglês.
(function(){
  var specific='./TRANSPETRO/banco-questoes/especificos_2026_expansao.js';
  var languages='./TRANSPETRO/banco-questoes/edital_2026_linguagens_gerado.js';
  if(document.readyState==='loading') {
    document.write('<script src="'+specific+'"></script>');
    document.write('<script src="'+languages+'"></script>');
  } else {
    var s=document.createElement('script');
    s.src=specific;
    s.onload=function(){
      var l=document.createElement('script');
      l.src=languages;
      document.head.appendChild(l);
    };
    document.head.appendChild(s);
  }
})();
