import{b as N,c as I,d as j}from"./user-337d128a.js";import{c as D,u as M}from"./index-d0602d6a.js";import{k,R as l,S as R,a2 as s,r as i,U as c,V as w,K as o,W as p,j as h,a6 as V}from"./vue-cbfd7fa1.js";import{e as W,E as $,K as A,o as G,L,M as O,O as U}from"./naive-ui-8add5bf4.js";import"./vueuse-motion-6e187fab.js";const P={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Q=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144"},null,-1),z=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 144L144 368"},null,-1),E=[Q,z],K=k({name:"CloseOutline",render:function(d,a){return l(),R("svg",P,E)}}),T={class:"p-5 bg-white rounded-lg shadow-md dark:bg-slate-800 relative"},q={class:"text-center font-bold text-sm py-5 dark:text-gray-400"},F={class:"inline-block text-red-500"},H={class:"my-4 flex justify-center relative"},te=k({__name:"BindWx",props:{visible:{type:Boolean}},setup(g){const d=D();let a;const v=i(),y=M(),u=i(!1),n=i(""),r=i(""),x=W();async function m(){const e=await N();e.success&&(r.value=e.data,_())}async function _(){const e=await I({sceneStr:r.value});e.success&&(u.value=!0,n.value=e.data,a=setInterval(()=>{b()},1e3))}async function b(){if(!r.value)return;const e=await j({sceneStr:r.value});if(e.data){clearInterval(a);const{status:t,msg:f}=e.data;t?x.success(f):x.error(f),y.getUserInfo(),d.updateBindwxDialog(!1)}}function S(){var e;clearInterval(a),m(),(e=v.value)==null||e.reset()}function B(){m()}function C(){clearInterval(a),n.value="",r.value="",u.value=!1}return(e,t)=>(l(),c(o(U),{show:e.visible,style:{width:"90%","max-width":"700px"},"on-after-enter":B,"on-after-leave":C},{default:w(()=>[s("div",T,[s("div",{class:"absolute top-3 right-3 cursor-pointer",onClick:t[0]||(t[0]=f=>o(d).updateBindwxDialog(!1))},[p(o($),{size:"20",color:"#0e7a0d"},{default:w(()=>[p(o(K))]),_:1})]),t[3]||(t[3]=s("div",{class:"flex items-start justify-start text-xl font-bold mb-5 dark:text-gray-300"},[s("span",{class:"ml-2"},"绑定微信账户")],-1)),s("div",q,[s("p",null,[t[1]||(t[1]=h(" 请在 ")),s("span",F,[p(o(A),{ref_key:"countdownRef",ref:v,active:u.value,duration:120*1e3,"on-finish":S},null,8,["active"])]),t[2]||(t[2]=h(" 时间内完成绑定 "))])]),s("div",H,[n.value?(l(),c(o(G),{key:0,"preview-disabled":"",width:"230",src:n.value},null,8,["src"])):(l(),c(o(L),{key:1,height:"230px",width:"230px"})),n.value?V("",!0):(l(),c(o(O),{key:2,size:"large",class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}))]),t[4]||(t[4]=s("span",{class:"block text-center text-base py-4 dark:text-gray-400"}," 打开微信扫码绑定账户 ",-1))])]),_:1},8,["show"]))}});export{te as default};
