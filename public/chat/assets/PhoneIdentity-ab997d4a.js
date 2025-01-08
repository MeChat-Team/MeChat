import{k as q,r as o,c as N,R as w,S as k,a2 as s,W as x,K as l,a4 as C,V as B,l as i,a9 as u,ad as D,j as z,a8 as M,a6 as S}from"./vue-3af3b332.js";import{c as I,u as O,A as R}from"./index-bddf94e6.js";import{j as E}from"./user-c1113341.js";import{u as F}from"./useBasicLayout-2b2b4d99.js";import{V as G}from"./SliderCaptcha-f5abe94f.js";import{e as L,x as W}from"./naive-ui-7701070e.js";import{C as K}from"./Close-a99981ea.js";import"./vueuse-motion-b8c5571c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-3d816091.js";const H={key:0,class:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 py-6"},J={class:"flex-1 flex flex-col items-center"},Q={class:"mt-4 flex"},X={class:"mt-4 relative"},Y=["disabled","loading"],Z={class:"mt-4"},ee={class:"mt-2"},se={class:"mt-4"},te={class:"mt-2"},re={class:"mt-4"},ae={class:"mt-2"},oe={key:0,class:"flex items-center justify-between my-3"},le={class:"flex items-center"},ie={class:"ml-1 text-center text-sm text-gray-500 dark:text-gray-400"},be=q({__name:"PhoneIdentity",props:{visible:{type:Boolean}},setup(ne){const n=L(),{isMobile:c}=F(),d=o(!1),f=I(),v=o(!1),b=o(null),p=o(0),V=O(),g=N(()=>V.globalConfig),r=o({username:"",password:"",confirmPassword:"",phone:"",code:""}),P={phone:[{required:!0,message:"请输入手机号"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式错误"}],code:[{required:!0,message:"请输入验证码"}],username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"}],confirmPassword:[{required:!0,message:"请再次输入密码"},{validator(a,e){return e!==r.value.password?new Error("两次输入的密码不一致"):!0},trigger:"blur"}]},m=o(!0);function _(){m.value=!0,f.updateUserAgreementDialog(!0)}function A(){if(m.value===!1&&g.value.isAutoOpenAgreement==="1")return n.error(`请阅读并同意《${g.value.agreementTitle}》`);d.value=!1,E(r.value).then(a=>{a.code===200?(n.success("认证成功"),f.updatePhoneDialog(!1)):n.error(a.error)})}async function T(){var a;d.value=!1,(a=b.value)==null||a.validate(async e=>{if(!e)try{const{phone:t}=r.value,U={phone:t};let y;y=await R(U);const{success:j,message:$}=y;j?(n.success(y.data),p.value=60,h()):n.error($)}catch{}})}function h(){p.value>0&&setTimeout(()=>{p.value--,h()},1e3)}return(a,e)=>a.visible?(w(),k("div",H,[s("div",{class:C(["bg-white p-6 rounded-lg shadow-lg w-full max-h-[70vh] flex flex-col dark:bg-gray-900 dark:text-gray-400 relative",{"max-w-[95vw]":l(c),"max-w-xl":!l(c)}])},[x(l(K),{size:"18",class:"absolute top-3 right-3 cursor-pointer z-30",onClick:e[0]||(e[0]=t=>l(f).updatePhoneDialog(!1))}),s("div",J,[s("div",{class:C(["flex w-full flex-col h-full justify-center",l(c)?"px-5 py-5":"px-10 py-5"])},[x(l(W),{ref_key:"formRef",ref:b,model:r.value,rules:P,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging"},{default:B(()=>[e[12]||(e[12]=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("h2",{class:"mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300"}," 手机号绑定 ")],-1)),s("div",Q,[i(s("input",{id:"userPhone",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.value.phone=t),placeholder:"请输入手机号",class:"flex-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,512),[[u,r.value.phone]])]),s("div",X,[i(s("input",{id:"username",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>r.value.code=t),placeholder:"请输入验证码",class:"block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400 pl-3 pr-12"},null,512),[[u,r.value.code]]),s("button",{block:"",class:"absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center rounded-r-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:v.value,loading:v.value,onClick:e[3]||(e[3]=t=>d.value=!0)}," 发送验证码 ",8,Y)]),s("div",Z,[s("div",ee,[i(s("input",{id:"username",type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>r.value.username=t),placeholder:"请输入用户名",class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,512),[[u,r.value.username]])])]),s("div",se,[s("div",te,[i(s("input",{id:"password",type:"password","onUpdate:modelValue":e[5]||(e[5]=t=>r.value.password=t),placeholder:"请输入密码",class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,512),[[u,r.value.password]])])]),s("div",re,[s("div",ae,[i(s("input",{id:"confirmPassword",type:"password","onUpdate:modelValue":e[6]||(e[6]=t=>r.value.confirmPassword=t),placeholder:"请再次输入密码",class:"block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:focus:ring-gray-400"},null,512),[[u,r.value.confirmPassword]])])]),g.value.isAutoOpenAgreement==="1"?(w(),k("div",oe,[s("div",le,[i(s("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>m.value=t),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[D,m.value]]),s("p",ie,[e[11]||(e[11]=z(" 已阅读并同意 ")),s("a",{href:"#",class:"font-semibold leading-6 text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-600",onClick:_},"《"+M(g.value.agreementTitle)+"》",1)])])])):S("",!0),s("div",null,[s("button",{onClick:e[8]||(e[8]=t=>A()),type:"submit",class:"flex w-full my-5 justify-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," 提交认证 ")]),x(G,{show:d.value,onSuccess:e[9]||(e[9]=t=>T()),onClose:e[10]||(e[10]=t=>d.value=!1),class:"bg-red-500"},null,8,["show"])]),_:1},8,["model"])],2)])],2)])):S("",!0)}});export{be as default};