
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as P}from"./sub.vue_vue_type_script_setup_true_lang-B0kJ-CO6.js";import{r as S,_ as w}from"./item.vue_vue_type_script_setup_true_lang-MVc3MW5U.js";import{d as z,r as f,n as B,$ as y,a4 as I,m as b,g as i,c as p,F as k,s as J,V as q,i as M,z as C,A,E as $}from"./index-TOhlAu5k.js";const T=z({name:"MainMenu",__name:"index",props:{menu:{},value:{},accordion:{type:Boolean,default:!0},defaultOpeneds:{default:()=>[]},mode:{default:"vertical"},collapse:{type:Boolean,default:!1},showCollapseName:{type:Boolean,default:!1}},setup(O){const n=O,s=f(n.value),c=f({}),t=f({}),o=f(n.defaultOpeneds.slice(0)),E=f([]),v=B(()=>n.mode==="horizontal"||n.mode==="vertical"&&n.collapse);function _(e,l=[]){e.forEach(a=>{const u=a.path??JSON.stringify(a);if(a.children){const r=[...l,u];t.value[u]={index:u,indexPath:r,active:!1},_(a.children,r)}else c.value[u]={index:u,indexPath:l}})}const h=(e,l)=>{o.value.includes(e)||(n.accordion&&(o.value=o.value.filter(a=>l.includes(a))),o.value.push(e))},d=e=>{if(Array.isArray(e)){$(()=>{d(e.at(-1)),e.length>1&&d(e.slice(0,-1))});return}Object.keys(t.value).forEach(l=>{t.value[l].indexPath.includes(e)&&(o.value=o.value.filter(a=>a!==e))})};function g(e){var l,a;for(const u in t.value)t.value[u].active=!1;(l=t.value[e])==null||l.indexPath.forEach(u=>{t.value[u].active=!0}),(a=c.value[e])==null||a.indexPath.forEach(u=>{t.value[u].active=!0})}const x=e=>{(n.mode==="horizontal"||n.collapse)&&(o.value=[]),g(e)},N=(e,l)=>{o.value.includes(e)?d(e):h(e,l)};function m(){const e=s.value&&c.value[s.value];g(s.value),!(!e||n.collapse)&&e.indexPath.forEach(l=>{const a=t.value[l];a&&h(l,a.indexPath)})}return y(()=>n.menu,e=>{_(e),m()},{deep:!0,immediate:!0}),y(()=>n.value,e=>{c.value[e]||(s.value="");const l=c.value[e]||s.value&&c.value[s.value]||c.value[n.value];l?s.value=l.index:s.value=e,m()}),y(()=>n.collapse,e=>{e&&(o.value=[]),m()}),I(S,b({props:n,items:c,subMenus:t,activeIndex:s,openedMenus:o,mouseInMenu:E,isMenuPopup:v,openMenu:h,closeMenu:d,handleMenuItemClick:x,handleSubMenuClick:N})),(e,l)=>(i(),p("div",{class:q(["flex flex-col of-hidden transition-all",{"w-[200px]":!M(v)&&n.mode==="vertical","w-[64px]":M(v)&&n.mode==="vertical","h-[80px]":n.mode==="horizontal","flex-row! w-auto":M(v)&&n.mode==="horizontal"}])},[(i(!0),p(k,null,J(e.menu,a=>{var u,r;return i(),p(k,{key:a.path??JSON.stringify(a)},[((u=a.meta)==null?void 0:u.menu)!==!1?(i(),p(k,{key:0},[(r=a.children)!=null&&r.length?(i(),C(P,{key:0,menu:a,"unique-key":[a.path??JSON.stringify(a)]},null,8,["menu","unique-key"])):(i(),C(w,{key:1,item:a,"unique-key":[a.path??JSON.stringify(a)],onClick:j=>x(a.path??JSON.stringify(a))},null,8,["item","unique-key","onClick"]))],64)):A("",!0)],64)}),128))],2))}});export{T as _};