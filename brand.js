(()=>{
  const BRAND='ProvaNorte';
  const replace=()=>{
    document.title=document.title.replace(/AprovaAI|Aprova AI/gi,BRAND);
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(n=>{if(/AprovaAI|Aprova AI/i.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(/AprovaAI|Aprova AI/gi,BRAND)});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',replace);else replace();
  new MutationObserver(replace).observe(document.documentElement,{subtree:true,childList:true});
})();
