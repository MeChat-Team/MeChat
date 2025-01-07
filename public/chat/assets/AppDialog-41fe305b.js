import{k as W,r as u,c as k,w as E,o as K,R as r,U as w,V as S,S as o,a2 as s,a4 as p,K as l,a8 as f,W as m,l as O,a9 as H,a6 as y,F as b,a7 as C,A as J,aa as X,z as Y}from"./vue-3af3b332.js";import{f as Z,b as ee,a as ae}from"./appStore-c2d454ab.js";import{c as te,t as A,j as se}from"./index-0db41f00.js";import{t as re,S as le}from"./main-9659b9e9.js";import{u as oe}from"./useBasicLayout-2b2b4d99.js";import{e as ne}from"./naive-ui-5201514a.js";import{u as ie}from"./index-010716d7.js";import{L as ce}from"./Left-bfcf8660.js";import{R as de}from"./Right-e4aa9d5c.js";import{C as ue}from"./Close-a99981ea.js";import{S as pe}from"./Star-53088522.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";import"./vueuse-motion-b8c5571c.js";import"./index-3d816091.js";const ge={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},ye={class:"flex justify-between items-start mb-2"},he={class:"relative flex flex-1 w-full"},me={for:"search-field",class:"sr-only"},ve={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},xe=["placeholder"],_e={key:1,class:"relative",style:{"max-width":"60%",margin:"auto"}},ke=["onClick"],we={key:0,class:"flex justify-between items-start my-1 h-14",style:{"max-width":"100%"}},be=["onClick"],Ce={class:"w-full flex flex-grow my-2 items-start"},Ae=["onClick"],Ie={key:0,class:"flex-shrink-0 dark:ring-gray-400 rounded-full"},ze=["src"],Le={class:"text-white text-sm"},Se={class:"flex-grow flex flex-col"},Me={class:"flex items-center font-medium text-base text-gray-600 dark:text-gray-400 my-1"},Be={class:"line-clamp-1 overflow-hidden text-ellipsis block flex-grow whitespace-nowrap"},je={class:"text-xs line-clamp-2 text-gray-500 dark:text-gray-400 my-1"},Ne=W({__name:"AppDialog",props:{visible:{type:Boolean}},setup(M){const B=M,{isMobile:n}=oe(),j=te();function I(){j.updateAppDialog(!1)}const N=ne(),v=ie(),h=u(""),D=k(()=>v.catId),i=u([]),x=u([]),R=k(()=>v.mineApps),_=u([]),c=u(0);function z(e){return R.value.some(t=>t.appId===e.id)}async function V(){var t;const e=await Z();i.value=(t=e==null?void 0:e.data)==null?void 0:t.rows.map(a=>(a.loading=!1,a)),x.value=i.value}const $=k(()=>{if(h.value){const e=h.value.toLowerCase();return i.value.filter(t=>re.match(t.name,e))}return c.value===0?i.value:i.value.filter(e=>e.catId===c.value)});async function q(e){e.loading=!0;try{const t=await ee({appId:e.id});N.success(t.data),await v.queryMineApps(),e.loading=!1}catch{e.loading=!1}}async function F(e){const t=Number(e.id);I(),se.replace({path:"/chat",query:{appId:t}})}async function Q(){var a;const e=await ae(),t={id:0,name:A("app.allCategories")};_.value=[t,...(a=e==null?void 0:e.data)==null?void 0:a.rows]}function L(e){c.value=e}E(D,e=>{e?x.value=i.value.filter(t=>t.catId===e):x.value=i.value});function G(){const e=["bg-blue-300","bg-red-300","bg-green-300","bg-yellow-300","bg-purple-300","bg-pink-300"];return e[Math.floor(Math.random()*e.length)]}const d=u(null);function P(){d.value&&d.value.scrollBy({left:-100,behavior:"smooth"})}function T(){d.value&&d.value.scrollBy({left:100,behavior:"smooth"})}return K(()=>{Q(),V()}),(e,t)=>(r(),w(Y,{name:"modal-fade"},{default:S(()=>[B.visible?(r(),o("div",ge,[s("div",{class:p(["bg-white dark:bg-gray-900 shadow-lg flex flex-col",[l(n)?"w-full h-full px-2 py-5":"w-[80vw] min-h-[60vh] max-h-[80vh] p-6 rounded-lg"]])},[s("div",ye,[s("div",{class:p(["mx-1 flex rounded-xl shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary-500 text-gray-900 placeholder:text-gray-400 border-0 bg-transparent resize-none dark:focus:ring-gray-600 dark:ring-gray-600 dark:bg-gray-800",[l(n)?"w-full mr-8":"w-[40%]"]])},[s("div",he,[s("label",me,f(l(A)("app.searchAppNameQuickFind")),1),s("div",ve,[m(l(le),{theme:"outline",size:"24",class:"text-gray-400"})]),O(s("input",{id:"search-field","onUpdate:modelValue":t[0]||(t[0]=a=>h.value=a),class:"z-1 w-full rounded-xl dark:bg-gray-800 pr-3 py-2 font-normal outline-0 delay-100 text-base pl-12 dark:text-gray-400",placeholder:l(A)("app.searchAppNameQuickFind"),type:"search",name:"search"},null,8,xe),[[H,h.value]])])],2),l(n)?y("",!0):(r(),w(l(ce),{key:0,size:"18",class:"text-gray-500 py-3 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",onClick:P})),l(n)?y("",!0):(r(),o("div",_e,[s("div",{ref_key:"scrollContainer",ref:d,class:"flex justify-between items-center scrollbar-hide overflow-x-auto",style:{"max-width":"95%",margin:"auto"}},[(r(!0),o(b,null,C(_.value,(a,g)=>(r(),o("div",{key:g,onClick:U=>L(a.id),class:p([{"bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-gray-400":c.value===a.id,"text-gray-500":c.value!==a.id},"cursor-pointer whitespace-nowrap rounded-full px-4 py-2 flex-none"])},f(a.name),11,ke))),128))],512)])),l(n)?y("",!0):(r(),w(l(de),{key:2,size:"18",class:"text-gray-500 py-3 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",onClick:T})),m(l(ue),{size:"18",class:"text-gray-500 py-3 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ml-3",onClick:I})]),l(n)?(r(),o("div",we,[s("div",{ref_key:"scrollContainer",ref:d,class:"flex justify-between items-center overflow-x-auto scrollbar-hide"},[(r(!0),o(b,null,C(_.value,(a,g)=>(r(),o("div",{key:g,onClick:U=>L(a.id),class:p([{"bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-gray-400":c.value===a.id,"text-gray-500":c.value!==a.id},"cursor-pointer whitespace-nowrap rounded-full px-4 py-2 flex-none"])},f(a.name),11,be))),128))],512)])):y("",!0),s("div",Ce,[m(J,{name:"list",tag:"div",class:p(["w-full grid overflow-y-auto",[l(n)?"grid-cols-1  max-h-[85vh]":"h-[60vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-3"]]),style:{"align-content":"start"}},{default:S(()=>[(r(!0),o(b,null,C($.value,a=>(r(),o("div",{key:a.id,onClick:g=>F(a),class:"custom-card cursor-pointer h-[7rem] flex items-center gap-5 rounded-xl bg-gray-50 px-3 py-3 mx-2 mb-3 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"},[a.coverImg?(r(),o("div",Ie,[s("img",{src:a.coverImg,class:"rounded-full w-16 h-16",alt:"app-image"},null,8,ze)])):(r(),o("div",{key:1,class:p([G(),"flex-shrink-0  dark:ring-gray-400 rounded-full w-16 h-16 flex items-center justify-center"])},[s("span",Le,f(a.name.slice(0,3)),1)],2)),s("div",Se,[s("div",Me,[s("span",Be,f(a.name),1),m(l(pe),{theme:z(a)?"filled":"outline",size:"20",fill:z(a)?"#fde68a":"#e5e7eb",class:"cursor-pointer",onClick:X(g=>q(a),["stop"])},null,8,["theme","fill","onClick"])]),s("span",je,f(a.des),1)])],8,Ae))),128))]),_:1},8,["class"])])],2)])):y("",!0)]),_:1}))}});const Oe=fe(Ne,[["__scopeId","data-v-3044efeb"]]);export{Oe as default};
