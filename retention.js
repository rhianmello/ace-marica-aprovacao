/* Preparação inteligente — camada de retenção do ambiente de estudos. */
(function(){
  const C=window.STUDY_CONFIG||{};
  const KEY=C.historyKey||('aprovaai_'+(C.slug||'curso')+'_history');
  const esc=s=>String(s??'').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]));
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return []}}
  function latest(hist){const m=new Map();hist.forEach(x=>{const k=x.id||x.question;if(k&&(!m.has(k)||x.ts>m.get(k).ts))m.set(k,x)});return [...m.values()]}
  function streak(hist){const days=new Set(hist.filter(x=>x.ts).map(x=>{const d=new Date(x.ts);return d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()}));let n=0,d=new Date();d.setHours(0,0,0,0);while(days.has(d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate())){n++;d.setDate(d.getDate()-1)}return n}
  function weak(hist){const m={};hist.forEach(x=>{const g=x.group||x.disciplina||x.assunto||'Conhecimentos';m[g]??={r:0,a:0};m[g].r++;if(x.ok)m[g].a++});return Object.entries(m).filter(([,v])=>v.r>=2).map(([g,v])=>({g,p:Math.round(v.a/v.r*100),r:v.r})).sort((a,b)=>a.p-b.p)[0]}
  let busy=false;
  function inject(){
    if(busy)return;
    const home=document.getElementById('home'); if(!home)return;
    busy=true;
    let box=document.getElementById('retention-card');
    if(!box){box=document.createElement('div');box.id='retention-card';box.className='panel';home.appendChild(box)}
    const hist=latest(read()), today=hist.filter(x=>{const d=new Date(x.ts),n=new Date();return d.toDateString()===n.toDateString()});
    const s=streak(hist), w=weak(hist), total=hist.length, pct=total?Math.round(hist.filter(x=>x.ok).length/total*100):0;
    const next=total<50?50:total<100?100:total<250?250:500, remaining=Math.max(0,next-total);
    box.innerHTML=`<div class="progress-row"><div><h2>🔥 Continue sua evolução</h2><div class="panel-sub">O objetivo é manter constância, não estudar tudo de uma vez.</div></div><span class="badge">${s?`${s} ${s===1?'DIA':'DIAS'} SEGUIDOS`:'COMECE HOJE'}</span></div><div class="quick-grid"><div class="focus-card"><strong>${today.length?'✅ Meta de hoje iniciada':'🎯 Sua missão de hoje'}</strong><div class="focus-meta">${today.length?`${today.length} questões respondidas hoje.`:'Responda pelo menos 10 questões para iniciar sua sequência.'}</div><button class="btn" onclick="window.studyStartTodayQuestions?.()">${today.length?'Continuar':'Começar agora'}</button></div><div class="focus-card"><strong>${w?'🔴 Reforço recomendado':'📈 Próximo marco'}</strong><div class="focus-meta">${w?`${esc(w.g)} — ${w.p}% de aproveitamento em ${w.r} questões.`:`Faltam ${remaining} questões para chegar a ${next}.`}</div><button class="btn secondary" onclick="${w?"window.studyStartWeak?.()":"window.studyShow?.('questions')"}">${w?'Treinar ponto fraco':'Ver questões'}</button></div><div class="focus-card"><strong>📊 Seu momento</strong><div class="focus-meta">${total} questões consolidadas • ${pct}% de aproveitamento.</div><div class="progress"><i style="width:${Math.min(100,Math.round(total/next*100))}%"></i></div></div></div>`;
    setTimeout(()=>busy=false,50);
  }
  let tries=0;const timer=setInterval(()=>{if(document.getElementById('home')){inject();clearInterval(timer)}else if(++tries>40)clearInterval(timer)},250);
  const obs=new MutationObserver(()=>{if(document.getElementById('home')&&!document.getElementById('retention-card'))inject()});obs.observe(document.body,{childList:true,subtree:true});
})();
