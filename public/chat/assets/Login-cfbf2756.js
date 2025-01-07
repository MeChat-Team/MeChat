import{u as Z}from"./useBasicLayout-2b2b4d99.js";import{u as ee,c as oe,t as s,s as ne,v as ie,w as ue}from"./index-0db41f00.js";import{k as te,r as n,c as f,R as l,S as c,U as V,V as q,a2 as e,a8 as r,K as a,l as _,a9 as B,a6 as y,W,ad as X,j as T,a4 as se,o as de,b as ge,n as ce}from"./vue-3af3b332.js";import{V as me}from"./SliderCaptcha-f5abe94f.js";import{e as le,v as J,o as fe,F as pe,G as ve,t as ye,I as xe}from"./naive-ui-5201514a.js";import{h as he,c as be,i as ke}from"./user-333b21c3.js";import{C as we}from"./Close-a99981ea.js";import"./vueuse-motion-b8c5571c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3d816091.js";const _e={class:"sm:mx-auto sm:w-full sm:max-w-sm"},Ce={class:"mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},Se={class:"mt-4 flex"},Le=["placeholder"],Te={key:0,class:"mt-4 relative"},Ae=["placeholder"],Ne=["disabled","loading"],$e={class:"rounded-lg"},Ue={class:"mt-4"},Ve=["placeholder"],Ie={key:1,class:"flex items-center justify-between my-3"},Re={class:"flex items-center"},Pe={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},je={key:2,class:"text-center text-sm text-gray-500 dark:text-gray-400"},Be={class:"mb-8 sm:mx-auto sm:w-full sm:max-w-sm"},De={class:"text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},ze={class:"mt-4"},Me={for:"username",class:"block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"},Oe={class:"mt-2"},qe=["placeholder"],Ee={class:"mt-4"},Ge={class:"mt-2"},We={for:"username",class:"block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"},Fe=["placeholder"],Qe={class:"flex items-center justify-between my-3"},He={key:0,class:"flex items-center justify-between my-3"},Ke={class:"flex items-center"},Ye={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},Je={key:0,class:"text-center text-sm text-gray-500 dark:text-gray-400"},Xe={key:0},Ze={class:"mt-4 relative"},et=["placeholder"],tt=["disabled","loading"],st={class:"mt-4 flex"},at=["placeholder"],ot={key:0,class:"mt-0 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},lt=te({__name:"Email",emits:["changeLoginType"],setup(ae,{emit:C}){const A=C,m=n(null),w=le(),i=n(!0),p=n(!1),v=ee(),I=n(0),k=v.globalConfig.siteName,{isMobile:D}=Z(),b=n(!1),u=n(!1),N=oe(),$=f(()=>v.globalConfig),d=n({password:"",contact:"",captchaId:null,code:""}),x=n({username:"",password:"",contact:""}),R={username:[{required:!0,message:s("login.enterUsername"),trigger:"blur"},{min:2,max:30,message:s("login.usernameLength"),trigger:"blur"}],password:[{required:!0,message:s("login.enterPassword"),trigger:"blur"},{min:6,max:30,message:s("login.passwordLength"),trigger:"blur"}],email:[{required:!0,message:s("login.enterEmail"),trigger:"blur"},{type:"email",message:s("login.emailValid"),trigger:["blur","change"]}]},F=f(()=>Number(v.globalConfig.wechatRegisterStatus)===1),S=f(()=>Number(v.globalConfig.phoneLoginStatus)===1),E=f(()=>Number(v.globalConfig.noVerifyRegister)===1),L=f(()=>Number(v.globalConfig.emailLoginStatus)===1),U=n(!0);function M(){U.value=!0,N.updateUserAgreementDialog(!0)}const g=f(()=>{if(L.value&&S.value)return s("login.emailPhone");if(L.value)return s("login.email");if(S.value)return s("login.phone")}),h=f(()=>{if(L.value&&S.value)return s("login.enterEmailOrPhone");if(L.value)return s("login.enterEmail");if(S.value)return s("login.enterPhone")});function P(){I.value>0&&setTimeout(()=>{I.value--,P()},1e3)}async function j(){var z;u.value=!1,(z=m.value)==null||z.validate(async t=>{if(!t)try{const{contact:o,captchaId:H}=d.value,G={contact:o,captchaId:H};let O;O=await ne(G);const{success:K,message:Y}=O;K?(w.success(O.data),I.value=60,P()):w.error(Y)}catch{}})}function Q(){var z;if(U.value===!1&&$.value.isAutoOpenAgreement==="1")return w.error(`请阅读并同意《${$.value.agreementTitle}》`);(z=m.value)==null||z.validate(async t=>{if(!t)try{p.value=!0;const o=i.value?ie:ue,H=i.value?{username:x.value.username,password:x.value.password}:d.value,G=await o(H);p.value=!1;const{success:O,message:K}=G;if(!O)return w.error(K);if(i.value)w.success(s("login.loginSuccess")),v.setToken(G.data),v.getUserInfo(),v.setLoginDialog(!1);else{w.success(s("login.registrationSuccess"));const{contact:Y,password:re}=d.value;x.value.username=Y,x.value.password=re,i.value=!i.value}}catch{p.value=!1}})}return(z,t)=>(l(),c("div",{class:se(["flex w-full flex-col h-full justify-center",a(D)?"px-5 py-5":"px-10 py-5"])},[!i.value&&!b.value?(l(),V(a(J),{key:0,ref_key:"formRef",ref:m,model:d.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[e("div",_e,[e("h2",Ce,r(a(k))+" "+r(a(s)("login.registerTitle")),1)]),e("div",Se,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>d.value.contact=o),placeholder:a(s)("login.enterContact")+g.value,class:"flex-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Le),[[B,d.value.contact]])]),E.value?y("",!0):(l(),c("div",Te,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>d.value.code=o),placeholder:a(s)("login.enterCode"),class:"block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400 pl-3 pr-12"},null,8,Ae),[[B,d.value.code]]),E.value?y("",!0):(l(),c("button",{key:0,block:"",class:"absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center rounded-r-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:p.value,loading:p.value,onClick:t[2]||(t[2]=o=>u.value=!0)},r(a(s)("login.sendVerificationCode")),9,Ne))])),e("div",$e,[W(me,{show:u.value,onSuccess:t[3]||(t[3]=o=>j()),onClose:t[4]||(t[4]=o=>u.value=!1),class:"bg-red-500"},null,8,["show"])]),e("div",Ue,[_(e("input",{id:"username",type:"password","onUpdate:modelValue":t[5]||(t[5]=o=>d.value.password=o),placeholder:a(s)("login.enterPassword"),class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Ve),[[B,d.value.password]])]),$.value.isAutoOpenAgreement==="1"?(l(),c("div",Ie,[e("div",Re,[_(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>U.value=o),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,U.value]]),e("p",Pe,[t[16]||(t[16]=T(" 已阅读并同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:M},"《"+r($.value.agreementTitle)+"》",1)])])])):y("",!0),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},r(a(s)("login.registerAccount")),1)]),L.value||S.value?(l(),c("p",je,[T(r(a(s)("login.alreadyHaveAccount"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[7]||(t[7]=o=>i.value=!i.value)},r(a(s)("login.goToLogin")),1)])):y("",!0)]),_:1},8,["model"])):y("",!0),i.value&&!b.value?(l(),V(a(J),{key:1,size:"large",ref_key:"formRef",ref:m,model:x.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[e("div",Be,[e("h2",De,r(a(k))+" 登录 ",1)]),e("div",ze,[e("label",Me,r(g.value),1),e("div",Oe,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[8]||(t[8]=o=>x.value.username=o),placeholder:h.value,class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,qe),[[B,x.value.username]])])]),e("div",Ee,[e("div",Ge,[e("label",We,r(a(s)("login.password")),1),_(e("input",{id:"password",type:"password","onUpdate:modelValue":t[9]||(t[9]=o=>x.value.password=o),placeholder:a(s)("login.enterYourPassword"),class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Fe),[[B,x.value.password]])])]),e("div",Qe,[$.value.isAutoOpenAgreement==="1"?(l(),c("div",He,[e("div",Ke,[_(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>U.value=o),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,U.value]]),e("p",Ye,[t[17]||(t[17]=T(" 已阅读并同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:M},"《"+r($.value.agreementTitle)+"》",1)])])])):y("",!0)]),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},r(a(s)("login.loginAccount")),1)]),L.value||S.value?(l(),c("p",Je,[T(r(a(s)("login.noAccount"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[11]||(t[11]=o=>i.value=!i.value)},r(a(s)("login.register")),1),F.value?(l(),c("div",Xe,[T(r(a(s)("login.orUse")),1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[12]||(t[12]=o=>A("changeLoginType","wechat"))},r(a(s)("login.scanLogin")),1)])):y("",!0)])):y("",!0)]),_:1},8,["model"])):y("",!0),b.value?(l(),V(a(J),{key:2,ref_key:"formRef",ref:m,model:d.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[t[19]||(t[19]=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("h2",{class:"mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"}," 验证码登录 ")],-1)),e("div",Ze,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[13]||(t[13]=o=>d.value.contact=o),placeholder:a(s)("login.enterContact")+g.value,class:"block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400 pl-3 pr-12"},null,8,et),[[B,d.value.contact]]),e("button",{block:"",class:"absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center rounded-r-md bg-primary-500 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:p.value,loading:p.value,onClick:j},r(a(s)("login.sendVerificationCode")),9,tt)]),e("div",st,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[14]||(t[14]=o=>d.value.code=o),placeholder:a(s)("login.enterCode"),class:"flex-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,at),[[B,d.value.code]])]),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," 验证码登录 ")]),L.value||S.value?(l(),c("p",ot,[t[18]||(t[18]=T(" 继续使用密码登录？ ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[15]||(t[15]=o=>b.value=!b.value)},"返回")])):y("",!0)]),_:1},8,["model"])):y("",!0)],2))}}),rt={class:"sm:mx-auto sm:w-full sm:max-w-sm"},nt={class:"pt-5 pb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},it={key:3,class:"flex items-center justify-between mt-5"},ut={class:"flex items-center"},dt={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},gt={key:4,class:"mt-3 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},ct={key:5,class:"mt-10 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},mt=te({__name:"Wechat",emits:["changeLoginType"],setup(ae,{emit:C}){const A=n(),m=n(),w=C,i=n(""),p=n(""),v=n(!1),I=le(),k=ee(),D=n(),{isMobile:b}=Z(),u=f(()=>Number(k.globalConfig.phoneLoginStatus)===1),N=n(!0),$=oe();function d(){N.value=!0,$.updateUserAgreementDialog(!0)}const x=f(()=>k.globalConfig),R=f(()=>Number(k.globalConfig.emailLoginStatus)===1),F=f(()=>{if(R.value&&u.value)return s("login.emailPhone");if(R.value)return s("login.email");if(u.value)return s("login.phone")});function S(g){return new Promise((h,P)=>{const j=new Image;j.onload=()=>h(j),j.onerror=P,j.src=g})}async function E(){const h=await he({});h.success&&(p.value=h.data,U())}async function L(){if(!p.value)return;const g=await ke({sceneStr:p.value});g.data&&(clearInterval(A.value),I.success(s("login.loginSuccess")),k.setToken(g.data),k.getUserInfo(),k.setLoginDialog(!1))}async function U(){const g=await be({sceneStr:p.value});g.success&&(v.value=!0,await S(g.data),i.value=g.data,A.value=setInterval(()=>{L()},1e3))}function M(){var g;E(),(g=D.value)==null||g.reset()}return de(()=>{M(),m.value!==null&&clearInterval(m.value),m.value=setInterval(M,6e4)}),ge(()=>{A.value!==null&&clearInterval(A.value),m.value!==null&&clearInterval(m.value)}),(g,h)=>(l(),c("div",{class:se(["w-full h-full flex flex-col items-center",a(b)?"px-10 py-10":" py-10"])},[e("div",rt,[e("h2",nt,r(a(s)("login.wechatLogin")),1)]),i.value&&(N.value||x.value.isAutoOpenAgreement!=="1")?(l(),V(a(fe),{key:0,"preview-disabled":"",class:"w-[220px] h-[220px] select-none",src:i.value},null,8,["src"])):(l(),V(a(pe),{key:1,height:"220px",width:"220px",animated:""})),i.value?y("",!0):(l(),V(a(ve),{key:2,size:"large",class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"})),x.value.isAutoOpenAgreement==="1"?(l(),c("div",it,[e("div",ut,[_(e("input",{"onUpdate:modelValue":h[0]||(h[0]=P=>N.value=P),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,N.value]]),e("p",dt,[h[2]||(h[2]=T(" 扫码登录及代表同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:d},"《"+r(x.value.agreementTitle)+"》",1)])])])):y("",!0),R.value||u.value?(l(),c("p",gt,[T(r(a(s)("login.wechatScanFailed"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:h[1]||(h[1]=P=>w("changeLoginType","email"))},r(F.value),1)])):(l(),c("p",ct,r(a(s)("login.useWechatScan")),1))],2))}});const ft={key:0,class:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 py-6"},pt={key:0,class:"flex items-center justify-center h-[600px]"},vt={key:1,class:"flex-1 flex flex-col items-center"},Tt=te({__name:"Login",props:{visible:{type:Boolean}},setup(ae){const C=ee();n(!1),n(""),n("");const A=n(null),m=n(!0),w=n("email"),{isMobile:i}=Z(),p=f(()=>Number(C.globalConfig.emailLoginStatus)===1),v=f(()=>Number(C.globalConfig.wechatRegisterStatus)===1),I=f(()=>Number(C.globalConfig.phoneLoginStatus)===1),k=f(()=>!v.value&&!I.value&&!p.value);function D(b){b==="wechat"?m.value=!0:(m.value=!1,w.value=b,ce(()=>{var u;(u=A.value)==null||u.syncBarPosition()}))}return(b,u)=>b.visible?(l(),c("div",ft,[e("div",{class:se(["bg-white p-6 rounded-lg shadow-lg w-full max-h-[70vh] flex flex-col dark:bg-gray-900 dark:text-gray-400 relative",{"max-w-[95vw]":a(i),"max-w-xl":!a(i)}])},[W(a(we),{size:"18",class:"absolute top-3 right-3 cursor-pointer z-30",onClick:u[0]||(u[0]=N=>a(C).setLoginDialog(!1))}),k.value?(l(),c("div",pt,[W(a(xe),{size:"small",status:"403",title:"网站已经关闭注册通道",description:"请联系管理员开通吧"},{footer:q(()=>[W(a(ye),{size:"small",onClick:u[1]||(u[1]=N=>a(C).setLoginDialog(!1))},{default:q(()=>u[2]||(u[2]=[T(" 知道了 ")])),_:1})]),_:1})])):(l(),c("div",vt,[v.value&&m.value?(l(),V(mt,{key:0,onChangeLoginType:D})):(l(),V(lt,{key:1,onChangeLoginType:D}))]))],2)])):y("",!0)}});export{Tt as default};
