/* ProvaNorte — proteção dos ambientes pagos por curso/cargo. */
(function(){
  const script=document.currentScript;
  const courseSlug=script?.dataset?.course;
  const url='https://ztqtcbzjesrkuaijmylm.supabase.co';
  const key='sb_publishable_Lh0A_Ykm2h66ur3LojJKTQ_JdUVMK9d'.replace('VKMK9d','VKMK9d');
  const goLogin=()=>{sessionStorage.setItem('aprovaai_redirect',location.pathname.split('/').pop()||'concursos.html');location.replace('login.html')};
  const goCheckout=()=>location.replace('checkout.html?course='+encodeURIComponent(courseSlug||''));
  const blocked=(text)=>{document.body.innerHTML='<div style="min-height:100vh;display:grid;place-items:center;background:#0d1014;color:#fff;font-family:Arial;padding:24px;text-align:center"><div><h2>🔒 Limite de dispositivos atingido</h2><p style="color:#a6adb7;max-width:520px">'+text+'</p><a href="concursos.html" style="display:inline-block;padding:11px 15px;border-radius:9px;background:#e4c64a;color:#111;font-weight:800;text-decoration:none">Voltar</a></div></div>'};
  if(!courseSlug){document.body.innerHTML='<div style="padding:30px;font-family:Arial">Curso não configurado.</div>';return;}
  const sb=supabase.createClient(url,'sb_publishable_Lh0A_Ykm2h66ur3LojJKTQ_JdUVMK9d');
  (async()=>{
    try{
      const {data:{user},error:userError}=await sb.auth.getUser();
      if(userError||!user){goLogin();return;}
      const {data:course,error:courseError}=await sb.from('courses').select('id,active').eq('slug',courseSlug).maybeSingle();
      if(courseError||!course||!course.active){document.body.innerHTML='<div style="padding:30px;font-family:Arial">Curso indisponível.</div>';return;}
      const {data:allowed,error:accessError}=await sb.rpc('has_course_access',{p_course_id:course.id});
      if(accessError||allowed!==true){goCheckout();return;}
      const deviceKey='provanorte_device_'+user.id;
      let deviceId=localStorage.getItem(deviceKey);
      if(!deviceId){deviceId=crypto.randomUUID();localStorage.setItem(deviceKey,deviceId)}
      const deviceName=(navigator.platform||'Dispositivo')+' / '+(navigator.userAgent.includes('Mobile')?'Mobile':'Desktop');
      const {data:deviceAllowed,error:deviceError}=await sb.rpc('register_device',{p_device_id:deviceId,p_device_name:deviceName,p_user_agent:navigator.userAgent});
      if(deviceError||deviceAllowed!==true){blocked('Sua conta já possui 2 dispositivos ativos. Para entrar neste dispositivo, revogue um dos dispositivos atuais no suporte/painel administrativo.') ;return;}
      const brand=document.createElement('script');brand.src='./brand.js';document.body.appendChild(brand);
      const dash=document.createElement('script');dash.src='./study-dashboard-clean.js';
      dash.onload=()=>{const r=document.createElement('script');r.src='./retention.js';document.body.appendChild(r)};
      document.body.appendChild(dash);
    }catch(e){console.error(e);goCheckout();}
  })();
})();
