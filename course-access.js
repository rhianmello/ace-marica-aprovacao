/* AprovaAI — proteção dos ambientes pagos por curso/cargo. */
(function(){
  const script=document.currentScript;
  const courseSlug=script?.dataset?.course;
  const url='https://ztqtcbzjesrkuaijmylm.supabase.co';
  const key='sb_publishable_Lh0A_Ykm2h66ur3LojJKTQ_JdUVMK9d';
  const goLogin=()=>{sessionStorage.setItem('aprovaai_redirect',location.pathname.split('/').pop()||'concursos.html');location.replace('login.html')};
  const goCheckout=()=>location.replace('checkout.html?course='+encodeURIComponent(courseSlug||''));
  if(!courseSlug){document.body.innerHTML='<div style="padding:30px;font-family:Arial">Curso não configurado.</div>';return;}
  const sb=supabase.createClient(url,key);
  (async()=>{
    try{
      const {data:{user},error:userError}=await sb.auth.getUser();
      if(userError||!user){goLogin();return;}
      const {data:course,error:courseError}=await sb.from('courses').select('id,active').eq('slug',courseSlug).maybeSingle();
      if(courseError||!course||!course.active){document.body.innerHTML='<div style="padding:30px;font-family:Arial">Curso indisponível.</div>';return;}
      const {data:allowed,error:accessError}=await sb.rpc('has_course_access',{p_course_id:course.id});
      if(accessError||allowed!==true){goCheckout();return;}
      const dash=document.createElement('script');
      dash.src='./study-dashboard-clean.js';
      dash.onload=()=>{const r=document.createElement('script');r.src='./retention.js';document.body.appendChild(r)};
      document.body.appendChild(dash);
    }catch(e){
      console.error(e);
      goCheckout();
    }
  })();
})();
