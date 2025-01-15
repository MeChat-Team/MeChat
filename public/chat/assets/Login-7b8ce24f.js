import{u as Z}from"./useBasicLayout-5485175e.js";import{u as ee,c as oe,t as s,v as ne,w as ie,x as ue}from"./index-bada37e0.js";import{k as te,r as n,c as f,R as l,S as c,a2 as e,U as V,V as q,a8 as r,K as a,l as _,a9 as B,a6 as y,W as G,ae as X,j as T,a4 as se,o as de,b as ge,n as ce}from"./vue-cbfd7fa1.js";import{V as me}from"./SliderCaptcha-a9ade843.js";import{e as le,w as J,o as fe,L as pe,M as ve,v as ye,P as xe}from"./naive-ui-8add5bf4.js";import{h as he,c as be,i as ke}from"./user-7b3c461f.js";import{C as we}from"./Close-713c54f1.js";import"./vueuse-motion-6e187fab.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-e53e2518.js";const _e={class:"flex w-full flex-col h-full justify-center"},Ce={class:"sm:mx-auto sm:w-full sm:max-w-sm"},Se={class:"mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},Le={class:"mt-4 flex"},Te=["placeholder"],Ae={key:0,class:"mt-4 relative"},Ne=["placeholder"],$e=["disabled","loading"],Ue={class:"rounded-lg"},Ve={class:"mt-4"},Ie=["placeholder"],Re={key:1,class:"flex items-center justify-between my-3"},Pe={class:"flex items-center"},je={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},Be={key:2,class:"text-center text-sm text-gray-500 dark:text-gray-400"},De={class:"mb-8 sm:mx-auto sm:w-full sm:max-w-sm"},ze={class:"text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},Me={class:"mt-4"},Oe={for:"username",class:"block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"},qe={class:"mt-2"},Ee=["placeholder"],We={class:"mt-4"},Ge={class:"mt-2"},Fe={for:"username",class:"block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"},Qe=["placeholder"],He={class:"flex items-center justify-between my-3"},Ke={key:0,class:"flex items-center justify-between my-3"},Ye={class:"flex items-center"},Je={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},Xe={key:0,class:"text-center text-sm text-gray-500 dark:text-gray-400"},Ze={key:0},et={class:"mt-4 relative"},tt=["placeholder"],st=["disabled","loading"],at={class:"mt-4 flex"},ot=["placeholder"],lt={key:0,class:"mt-0 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},rt=te({__name:"Email",emits:["changeLoginType"],setup(ae,{emit:C}){const A=C,m=n(null),w=le(),i=n(!0),p=n(!1),v=ee(),I=n(0),k=v.globalConfig.siteName,{isMobile:D}=Z(),b=n(!1),u=n(!1),N=oe(),$=f(()=>v.globalConfig),d=n({password:"",contact:"",captchaId:null,code:""}),x=n({username:"",password:"",contact:""}),R={username:[{required:!0,message:s("login.enterUsername"),trigger:"blur"},{min:2,max:30,message:s("login.usernameLength"),trigger:"blur"}],password:[{required:!0,message:s("login.enterPassword"),trigger:"blur"},{min:6,max:30,message:s("login.passwordLength"),trigger:"blur"}],email:[{required:!0,message:s("login.enterEmail"),trigger:"blur"},{type:"email",message:s("login.emailValid"),trigger:["blur","change"]}]},F=f(()=>Number(v.globalConfig.wechatRegisterStatus)===1),S=f(()=>Number(v.globalConfig.phoneLoginStatus)===1),E=f(()=>Number(v.globalConfig.noVerifyRegister)===1),L=f(()=>Number(v.globalConfig.emailLoginStatus)===1),U=n(!0);function M(){U.value=!0,N.updateUserAgreementDialog(!0)}const g=f(()=>{if(L.value&&S.value)return s("login.emailPhone");if(L.value)return s("login.email");if(S.value)return s("login.phone")}),h=f(()=>{if(L.value&&S.value)return s("login.enterEmailOrPhone");if(L.value)return s("login.enterEmail");if(S.value)return s("login.enterPhone")});function P(){I.value>0&&setTimeout(()=>{I.value--,P()},1e3)}async function j(){var z;u.value=!1,(z=m.value)==null||z.validate(async t=>{if(!t)try{const{contact:o,captchaId:H}=d.value,W={contact:o,captchaId:H};let O;O=await ne(W);const{success:K,message:Y}=O;K?(w.success(O.data),I.value=60,P()):w.error(Y)}catch{}})}function Q(){var z;if(U.value===!1&&$.value.isAutoOpenAgreement==="1")return w.error(`请阅读并同意《${$.value.agreementTitle}》`);(z=m.value)==null||z.validate(async t=>{if(!t)try{p.value=!0;const o=i.value?ie:ue,H=i.value?{username:x.value.username,password:x.value.password}:d.value,W=await o(H);p.value=!1;const{success:O,message:K}=W;if(!O)return w.error(K);if(i.value)w.success(s("login.loginSuccess")),v.setToken(W.data),v.getUserInfo(),v.setLoginDialog(!1);else{w.success(s("login.registrationSuccess"));const{contact:Y,password:re}=d.value;x.value.username=Y,x.value.password=re,i.value=!i.value}}catch{p.value=!1}})}return(z,t)=>(l(),c("div",{class:se(["flex w-full h-full justify-center",a(D)?"px-5 py-5":"px-10 py-5"])},[e("div",_e,[!i.value&&!b.value?(l(),V(a(J),{key:0,ref_key:"formRef",ref:m,model:d.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[e("div",Ce,[e("h2",Se,r(a(k))+" "+r(a(s)("login.registerTitle")),1)]),e("div",Le,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>d.value.contact=o),placeholder:a(s)("login.enterContact")+g.value,class:"flex-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Te),[[B,d.value.contact]])]),E.value?y("",!0):(l(),c("div",Ae,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>d.value.code=o),placeholder:a(s)("login.enterCode"),class:"block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400 pl-3 pr-12"},null,8,Ne),[[B,d.value.code]]),E.value?y("",!0):(l(),c("button",{key:0,block:"",class:"absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center rounded-r-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:p.value,loading:p.value,onClick:t[2]||(t[2]=o=>u.value=!0)},r(a(s)("login.sendVerificationCode")),9,$e))])),e("div",Ue,[G(me,{show:u.value,onSuccess:t[3]||(t[3]=o=>j()),onClose:t[4]||(t[4]=o=>u.value=!1),class:"bg-red-500"},null,8,["show"])]),e("div",Ve,[_(e("input",{id:"username",type:"password","onUpdate:modelValue":t[5]||(t[5]=o=>d.value.password=o),placeholder:a(s)("login.enterPassword"),class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Ie),[[B,d.value.password]])]),$.value.isAutoOpenAgreement==="1"?(l(),c("div",Re,[e("div",Pe,[_(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>U.value=o),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,U.value]]),e("p",je,[t[16]||(t[16]=T(" 已阅读并同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:M},"《"+r($.value.agreementTitle)+"》",1)])])])):y("",!0),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},r(a(s)("login.registerAccount")),1)]),L.value||S.value?(l(),c("p",Be,[T(r(a(s)("login.alreadyHaveAccount"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[7]||(t[7]=o=>i.value=!i.value)},r(a(s)("login.goToLogin")),1)])):y("",!0)]),_:1},8,["model"])):y("",!0),i.value&&!b.value?(l(),V(a(J),{key:1,size:"large",ref_key:"formRef",ref:m,model:x.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[e("div",De,[e("h2",ze,r(a(k))+" 登录 ",1)]),e("div",Me,[e("label",Oe,r(g.value),1),e("div",qe,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[8]||(t[8]=o=>x.value.username=o),placeholder:h.value,class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Ee),[[B,x.value.username]])])]),e("div",We,[e("div",Ge,[e("label",Fe,r(a(s)("login.password")),1),_(e("input",{id:"password",type:"password","onUpdate:modelValue":t[9]||(t[9]=o=>x.value.password=o),placeholder:a(s)("login.enterYourPassword"),class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,Qe),[[B,x.value.password]])])]),e("div",He,[$.value.isAutoOpenAgreement==="1"?(l(),c("div",Ke,[e("div",Ye,[_(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>U.value=o),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,U.value]]),e("p",Je,[t[17]||(t[17]=T(" 已阅读并同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:M},"《"+r($.value.agreementTitle)+"》",1)])])])):y("",!0)]),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},r(a(s)("login.loginAccount")),1)]),L.value||S.value?(l(),c("p",Xe,[T(r(a(s)("login.noAccount"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[11]||(t[11]=o=>i.value=!i.value)},r(a(s)("login.register")),1),F.value?(l(),c("div",Ze,[T(r(a(s)("login.orUse")),1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[12]||(t[12]=o=>A("changeLoginType","wechat"))},r(a(s)("login.scanLogin")),1)])):y("",!0)])):y("",!0)]),_:1},8,["model"])):y("",!0),b.value?(l(),V(a(J),{key:2,ref_key:"formRef",ref:m,model:d.value,rules:R,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:q(()=>[t[19]||(t[19]=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("h2",{class:"mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"}," 验证码登录 ")],-1)),e("div",et,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[13]||(t[13]=o=>d.value.contact=o),placeholder:a(s)("login.enterContact")+g.value,class:"block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400 pl-3 pr-12"},null,8,tt),[[B,d.value.contact]]),e("button",{block:"",class:"absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center rounded-r-md bg-primary-500 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:p.value,loading:p.value,onClick:j},r(a(s)("login.sendVerificationCode")),9,st)]),e("div",at,[_(e("input",{id:"username",type:"text","onUpdate:modelValue":t[14]||(t[14]=o=>d.value.code=o),placeholder:a(s)("login.enterCode"),class:"flex-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,8,ot),[[B,d.value.code]])]),e("div",null,[e("button",{onClick:Q,type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," 验证码登录 ")]),L.value||S.value?(l(),c("p",lt,[t[18]||(t[18]=T(" 继续使用密码登录？ ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:t[15]||(t[15]=o=>b.value=!b.value)},"返回")])):y("",!0)]),_:1},8,["model"])):y("",!0)])],2))}}),nt={class:"sm:mx-auto sm:w-full sm:max-w-sm"},it={class:"pt-5 pb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"},ut={key:3,class:"flex items-center justify-between mt-5"},dt={class:"flex items-center"},gt={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},ct={key:4,class:"mt-3 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},mt={key:5,class:"mt-10 mb-5 text-center text-sm text-gray-500 dark:text-gray-400"},ft=te({__name:"Wechat",emits:["changeLoginType"],setup(ae,{emit:C}){const A=n(),m=n(),w=C,i=n(""),p=n(""),v=n(!1),I=le(),k=ee(),D=n(),{isMobile:b}=Z(),u=f(()=>Number(k.globalConfig.phoneLoginStatus)===1),N=n(!0),$=oe();function d(){N.value=!0,$.updateUserAgreementDialog(!0)}const x=f(()=>k.globalConfig),R=f(()=>Number(k.globalConfig.emailLoginStatus)===1),F=f(()=>{if(R.value&&u.value)return s("login.emailPhone");if(R.value)return s("login.email");if(u.value)return s("login.phone")});function S(g){return new Promise((h,P)=>{const j=new Image;j.onload=()=>h(j),j.onerror=P,j.src=g})}async function E(){const h=await he({});h.success&&(p.value=h.data,U())}async function L(){if(!p.value)return;const g=await ke({sceneStr:p.value});g.data&&(clearInterval(A.value),I.success(s("login.loginSuccess")),k.setToken(g.data),k.getUserInfo(),k.setLoginDialog(!1))}async function U(){const g=await be({sceneStr:p.value});g.success&&(v.value=!0,await S(g.data),i.value=g.data,A.value=setInterval(()=>{L()},1e3))}function M(){var g;E(),(g=D.value)==null||g.reset()}return de(()=>{M(),m.value!==null&&clearInterval(m.value),m.value=setInterval(M,6e4)}),ge(()=>{A.value!==null&&clearInterval(A.value),m.value!==null&&clearInterval(m.value)}),(g,h)=>(l(),c("div",{class:se(["w-full h-full flex flex-col items-center",a(b)?"px-10 py-10":" py-10"])},[e("div",nt,[e("h2",it,r(a(s)("login.wechatLogin")),1)]),i.value&&(N.value||x.value.isAutoOpenAgreement!=="1")?(l(),V(a(fe),{key:0,"preview-disabled":"",class:"w-[220px] h-[220px] select-none",src:i.value},null,8,["src"])):(l(),V(a(pe),{key:1,height:"220px",width:"220px",animated:""})),i.value?y("",!0):(l(),V(a(ve),{key:2,size:"large",class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"})),x.value.isAutoOpenAgreement==="1"?(l(),c("div",ut,[e("div",dt,[_(e("input",{"onUpdate:modelValue":h[0]||(h[0]=P=>N.value=P),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[X,N.value]]),e("p",gt,[h[2]||(h[2]=T(" 扫码登录及代表同意 ")),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:d},"《"+r(x.value.agreementTitle)+"》",1)])])])):y("",!0),R.value||u.value?(l(),c("p",ct,[T(r(a(s)("login.wechatScanFailed"))+" ",1),e("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:h[1]||(h[1]=P=>w("changeLoginType","email"))},r(F.value),1)])):(l(),c("p",mt,r(a(s)("login.useWechatScan")),1))],2))}});const pt={key:0,class:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 py-6"},vt={key:0,class:"flex items-center justify-center h-[600px]"},yt={key:1,class:"flex-1 flex flex-col items-center"},At=te({__name:"Login",props:{visible:{type:Boolean}},setup(ae){const C=ee();n(!1),n(""),n("");const A=n(null),m=n(!0),w=n("email"),{isMobile:i}=Z(),p=f(()=>Number(C.globalConfig.emailLoginStatus)===1),v=f(()=>Number(C.globalConfig.wechatRegisterStatus)===1),I=f(()=>Number(C.globalConfig.phoneLoginStatus)===1),k=f(()=>!v.value&&!I.value&&!p.value);function D(b){b==="wechat"?m.value=!0:(m.value=!1,w.value=b,ce(()=>{var u;(u=A.value)==null||u.syncBarPosition()}))}return(b,u)=>b.visible?(l(),c("div",pt,[e("div",{class:se(["bg-white p-6 rounded-lg shadow-lg w-full max-h-[70vh] flex flex-col dark:bg-gray-900 dark:text-gray-400 relative",{"max-w-[95vw]":a(i),"max-w-xl":!a(i)}])},[G(a(we),{size:"18",class:"absolute top-3 right-3 cursor-pointer z-30",onClick:u[0]||(u[0]=N=>a(C).setLoginDialog(!1))}),k.value?(l(),c("div",vt,[G(a(xe),{size:"small",status:"403",title:"网站已经关闭注册通道",description:"请联系管理员开通吧"},{footer:q(()=>[G(a(ye),{size:"small",onClick:u[1]||(u[1]=N=>a(C).setLoginDialog(!1))},{default:q(()=>u[2]||(u[2]=[T(" 知道了 ")])),_:1})]),_:1})])):(l(),c("div",yt,[v.value&&m.value?(l(),V(ft,{key:0,onChangeLoginType:D})):(l(),V(rt,{key:1,onChangeLoginType:D}))]))],2)])):y("",!0)}});export{At as default};