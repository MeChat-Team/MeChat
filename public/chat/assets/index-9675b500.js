import{k as K,r as x,c,w as W,i as j,o as X,R as o,S as d,a2 as a,K as l,W as f,V as u,U as y,a6 as g,j as A,a8 as w,a4 as C,z as Y,F as Z,a7 as ee}from"./vue-3af3b332.js";import{d as te}from"./appStore-6d0a84c7.js";import{d as se,e as ae,j as le,m as oe,F as re}from"./index-bddf94e6.js";import{u as ie}from"./useBasicLayout-2b2b4d99.js";import{_ as ne}from"./relative.vue_vue_type_script_setup_true_lang-3d21a283.js";import{_ as I}from"./index.vue_vue_type_script_setup_true_lang-a9071417.js";import{v as S}from"./naive-ui-7701070e.js";import{S as B,g as F,M as ce,b as de}from"./menu-9d7b0f63.js";import{R as ue}from"./Right-e4aa9d5c.js";import{C as fe}from"./CheckOne-a3b77e50.js";import"./vueuse-motion-b8c5571c.js";import"./logo-63e5ee5a.js";import"./index-3d816091.js";const me={class:"sticky top-0 left-0 right-0 z-30 dark:border-neutral-800 h-14 select-none"},ve={class:"relative flex items-center justify-center min-w-0 h-full"},pe={class:"flex w-full h-full items-center px-4"},ye={key:0,class:"flex items-center pr-2"},he={key:0,class:"flex items-center justify-center"},xe={class:"flex justify-between items-center h-full w-full"},ge={class:"py-1"},we={class:"flex items-center"},_e={class:"py-1"},ke=["onClick"],be={class:"w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden select-none"},Ce=["src"],Me={key:1,class:"text-sm font-medium select-none"},ze={class:"flex flex-col flex-1 select-none"},Ne={href:"#",class:"text-sm select-none"},Te={key:0,class:"text-xs text-gray-400 line-clamp-1 max-w-60 mr-2 select-none"},je={class:"ml-auto"},Ae={key:1,class:"w-4 h-4"},Ie={class:"flex items-center h-full font-semibold"},Qe=K({__name:"index",emits:["export","toggleUsingContext","clear","scrollBtn"],setup(Se,{emit:Be}){const M=se(),m=ae(),z=x([]),N=x(null);c(()=>m.groupList);const k=c(()=>M.siderCollapsed),V=c(()=>m.active),h=c(()=>m.currentPlugin),{isMobile:p}=ie(),b=x(!1),n=c(()=>m.getChatByGroupInfo());c(()=>m.chatList);const v=c(()=>{var e;const t=(e=n.value)==null?void 0:e.config;if(!t)return{};try{return JSON.parse(t)}catch{return{}}}),H=c(()=>{var t,e;return String(((e=(t=v==null?void 0:v.value)==null?void 0:t.modelInfo)==null?void 0:e.model)??"")}),L=c(()=>{var t;return((t=n==null?void 0:n.value)==null?void 0:t.appId)||0});let U=x({}),D=x([]);W(L,t=>{t?P(t):N.value=null},{immediate:!0});async function P(t){const e=await te({id:t});N.value=e.data}const $=c(()=>{var t,e,s,r;return((t=n==null?void 0:n.value)==null?void 0:t.appId)&&(((e=v.value.modelInfo)==null?void 0:e.isFixedModel)===1||((s=v.value.modelInfo)==null?void 0:s.isGPTs)===1)||h.value&&((r=h==null?void 0:h.value)==null?void 0:r.deductType)!==0});j("createNewChatGroup",()=>Promise.resolve());function O(){M.setSiderCollapsed(!k.value)}function G(){le.push("/ModelMenu")}async function q(t){var T;const{modelInfo:e,fileInfo:s}=m.activeConfig,{isGPTs:r,isFixedModel:_,modelName:i}=e,Q={modelInfo:{keyType:t.keyType,modelName:((T=n==null?void 0:n.value)!=null&&T.appId?i:t.label)||"",model:t.value,deductType:t.deductType,deduct:t.deduct,isFileUpload:t.isFileUpload,modelAvatar:t.modelAvatar||"",isGPTs:r,isFixedModel:_},fileInfo:s||{}},E={groupId:V.value,config:JSON.stringify(Q)};await oe(E),await m.queryMyGroup()}async function R(){const t=await re();if(!t.success)return;const{modelMaps:e,modelTypeList:s}=t.data;U.value=e,D.value=s;const _=Object.values(e).flat().filter(i=>i.keyType===1||i.modelName===v.value.modelInfo.modelName);z.value=_.map(i=>({label:i.modelName,value:i.model,deductType:i.deductType,keyType:i.keyType,deduct:i.deduct,isFileUpload:i.isFileUpload,modelAvatar:i.modelAvatar,modelDescription:i.modelDescription}))}const J=j("createNewChatGroup",()=>Promise.resolve());return X(()=>{setTimeout(()=>{R()},500)}),(t,e)=>(o(),d("header",me,[a("div",ve,[a("div",pe,[k.value?(o(),d("div",ye,[a("button",{class:"flex items-center justify-center w-5 h-full dark:text-gray-400 text-gray-500",onClick:O},[l(p)?(o(),y(l(S),{key:1,class:"text-[#262626]",size:"24"},{default:u(()=>e[5]||(e[5]=[a("svg",{t:"1735279906826",class:"icon",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1466",width:"200",height:"200"},[a("path",{d:"M854.592 160c58.24 0 105.408 47.168 105.408 105.408v493.184c0 58.24-47.168 105.408-105.408 105.408H233.408C175.168 864 128 816.832 128 758.592V265.408c0-58.24 47.168-105.408 105.408-105.408h621.184z m-378.368 64H271.04C227.392 224 192 259.392 192 303.04v417.92c0 43.648 35.392 79.04 79.04 79.04h205.184v-576z m340.736 0H535.68v576h281.216c43.648 0 79.04-35.392 79.04-79.04v-417.92c0-43.648-35.392-79.04-79.04-79.04zM423.552 443.456v54.848h-158.08v-54.848h158.08z m0-146.304V352h-158.08v-54.848h158.08z","p-id":"1467"})],-1)])),_:1})):(o(),d("div",he,[f(l(S),{class:"text-[#262626]",size:"23"},{default:u(()=>e[4]||(e[4]=[a("svg",{t:"1735279906826",class:"icon",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1466",width:"200",height:"200"},[a("path",{d:"M854.592 160c58.24 0 105.408 47.168 105.408 105.408v493.184c0 58.24-47.168 105.408-105.408 105.408H233.408C175.168 864 128 816.832 128 758.592V265.408c0-58.24 47.168-105.408 105.408-105.408h621.184z m-378.368 64H271.04C227.392 224 192 259.392 192 303.04v417.92c0 43.648 35.392 79.04 79.04 79.04h205.184v-576z m340.736 0H535.68v576h281.216c43.648 0 79.04-35.392 79.04-79.04v-417.92c0-43.648-35.392-79.04-79.04-79.04zM423.552 443.456v54.848h-158.08v-54.848h158.08z m0-146.304V352h-158.08v-54.848h158.08z","p-id":"1467"})],-1)])),_:1})]))])])):g("",!0),a("div",xe,[$.value?(o(),y(l(F),{key:0,as:"div",class:"relative flex-1 flex ele-drag items-center justify-between h-full"},{default:u(()=>[a("div",null,[a("div",ge,[f(l(B),{class:"inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 text-gray-700"},{default:u(()=>{var s,r;return[A(w(((s=h.value)==null?void 0:s.pluginName)||((r=n.value)==null?void 0:r.title)||"新对话"),1)]}),_:1})])])]),_:1})):(o(),y(l(F),{key:1,as:"div",class:"relative flex-1 flex ele-drag items-center h-full justify-between"},{default:u(()=>[a("div",null,[a("div",{class:C([[l(p)?"w-56":"w-60"],"py-1 flex items-center"])},[f(l(B),{class:C([[l(p)?"text-xs px-1 py-2":"text-sm px-3 py-2"],"inline-flex justify-center gap-x-1.5 rounded-md font-semibold hover:bg-gray-50 dark:hover:bg-gray-750 dark:text-gray-400 text-gray-500"]),onMouseover:e[0]||(e[0]=s=>b.value=!0),onMouseleave:e[1]||(e[1]=s=>b.value=!1)},{default:u(()=>{var s,r;return[A(w(((r=(s=v.value)==null?void 0:s.modelInfo)==null?void 0:r.modelName)||"新对话")+" ",1),b.value||l(p)?(o(),y(l(ue),{key:0,size:"20",class:C(["justify-center items-center",{"text-base font-bold":l(p),"text-sm":!l(p)}])},null,8,["class"])):g("",!0)]}),_:1},8,["class"]),k.value?(o(),d("div",{key:0,onClick:e[2]||(e[2]=s=>l(J)()),class:"ml-1 h-8 w-20 border border-[#c2d6f8] hover:border-[#bad2f8] hover:text-[#ffffff] text-xs text-[#0057ff] py-1.5 pl-2 pr-2.5 hover:bg-[#5a91fc] flex justify-between rounded-2xl"},[a("div",we,[f(l(I),{icon:"icon-park-outline:plus",class:"w-4 h-4 mr-1"}),e[6]||(e[6]=a("span",{class:""}," 新对话 ",-1))]),e[7]||(e[7]=a("div",{class:"flex items-center"},null,-1))])):g("",!0)],2)]),f(Y,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:u(()=>[f(l(ce),{class:"absolute top-full z-10 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-750 dark:text-gray-400 text-gray-900 overflow-y-auto",style:{maxHeight:"60vh"}},{default:u(()=>[a("div",_e,[(o(!0),d(Z,null,ee(z.value,(s,r)=>(o(),y(l(de),{key:r},{default:u(()=>[a("div",{class:"flex items-center space-x-4 mx-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md select-none",onClick:_=>q(s)},[a("div",be,[s.modelAvatar?(o(),d("img",{key:0,src:s.modelAvatar,alt:"app cover",class:"w-full h-full object-cover"},null,8,Ce)):(o(),d("span",Me,w(s.label.charAt(0)),1))]),a("div",ze,[a("a",Ne,w(s.label),1),s.modelDescription?(o(),d("div",Te,w(s.modelDescription),1)):g("",!0)]),a("div",je,[H.value===s.value?(o(),y(l(fe),{key:0,theme:"filled",size:"16",class:"dark:text-gray-500"})):(o(),d("div",Ae))])],8,ke)]),_:2},1024))),128)),a("div",{onClick:G,class:"flex justify-between items-center space-x-4 mx-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md select-none"},[e[8]||(e[8]=a("div",null,"模型更多",-1)),f(l(I),{icon:"icon-park-outline:right",class:"w-4 h-4 mr-2"})])])]),_:1})]),_:1})]),_:1})),a("div",Ie,[f(ne)]),g("",!0)])])])]))}});export{Qe as default};
