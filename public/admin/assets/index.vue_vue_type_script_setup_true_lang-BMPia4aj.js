
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import ae from"./HKbd-BX31b_hQ.js";import{d as le,r as h,n as K,f as ne,u as oe,aa as re,ag as ie,$ as U,a as ue,ah as N,ab as m,ai as J,g as f,z as S,w as u,b as r,i as l,aj as P,R as q,e as i,ak as ce,y as de,al as fe,D as pe,v as R,x as $,am as ve,an as he,c as b,s as A,F as G,h as O,A as T,ao as me,ap as ge,aq as xe,j as ye,V as Y,t as Q}from"./index-TOhlAu5k.js";import _e from"./index-Dn-xfNu4.js";import{_ as be}from"./item.vue_vue_type_script_setup_true_lang-DU2VJFwZ.js";const ke={class:"fixed inset-0"},we={class:"h-full flex items-end justify-center p-4 text-center lg-items-center"},Se={class:"flex flex-col overflow-y-auto rounded-xl bg-white shadow-xl dark-bg-stone-8"},Re={class:"flex items-center px-4 py-3","border-b":"~ solid stone-2 dark-stone-7"},Te=["onKeydown"],Ce=["data-index","onClick","onMouseover"],He={class:"flex flex-1 flex-col gap-1 truncate px-4 py-3","border-l":"~ solid stone-2 dark-stone-7"},Ie={class:"truncate text-base font-bold"},ze={key:1,flex:"center col","py-6":"","text-stone-5":""},De={key:0,class:"flex justify-between px-4 py-3","border-t":"~ solid stone-2 dark-stone-7"},Be={class:"flex gap-8"},Me={class:"inline-flex items-center gap-1 text-xs"},Ne={class:"inline-flex items-center gap-1 text-xs"},$e={key:0,class:"inline-flex items-center gap-1 text-xs"},Ke=le({name:"Search",__name:"index",setup(Fe){const W=h({enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}),X=K(()=>({enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95",enterTo:"opacity-100 translate-y-0 lg-scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 lg-scale-100",leaveTo:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95"})),Z=ne(),y=oe(),ee=re(),p=h(!1),v=h(""),C=h([]),o=h(-1),F=h(),H=h(),k=h([]);ie(()=>{k.value=[]});const g=K(()=>{let s=[];return s=C.value.filter(e=>{let a=!1;return e.title&&(typeof e.title=="function"?e.title().includes(v.value)&&(a=!0):e.title.includes(v.value)&&(a=!0)),e.path.includes(v.value)&&(a=!0),e.breadcrumb.some(n=>{var t;if(typeof n.title=="function"){if(n.title().includes(v.value))return!0}else if((t=n.title)!=null&&t.includes(v.value))return!0;return!1})&&(a=!0),a}),s});U(()=>p.value,s=>{s?(v.value="",o.value=-1,m("up",z),m("down",D),m("enter",B)):(m.unbind("up",z),m.unbind("down",D),m.unbind("enter",B))}),U(()=>g.value,()=>{o.value=-1,M()}),ue(()=>{N.on("global-search-toggle",()=>{p.value||I(),p.value=!p.value}),m("alt+s",s=>{y.settings.toolbar.navSearch&&y.settings.navSearch.enableHotkeys&&(s.preventDefault(),I(),p.value=!0)}),m("esc",s=>{y.settings.toolbar.navSearch&&y.settings.navSearch.enableHotkeys&&(s.preventDefault(),p.value=!1)}),I()});function I(){C.value=[],ee.allMenus.forEach(s=>{L(s.children)})}function te(s){var a;let e=!0;return(a=s.children)!=null&&a.every(n=>{var t;return((t=n.meta)==null?void 0:t.menu)===!1})&&(e=!1),e}function L(s,e,a,n){s.forEach(t=>{var d,c,x,_,V,E,j;if(((d=t.meta)==null?void 0:d.menu)!==!1){const w=xe(n)||[];t.children&&te(t)?(w.push({title:(c=t.meta)==null?void 0:c.title}),L(t.children,J(e,t.path),((x=t.meta)==null?void 0:x.icon)??a,w)):(w.push({title:(_=t.meta)==null?void 0:_.title}),C.value.push({path:J(e,t.path),icon:((V=t.meta)==null?void 0:V.icon)??a,title:(E=t.meta)==null?void 0:E.title,link:(j=t.meta)==null?void 0:j.link,breadcrumb:w}))}})}function z(){g.value.length&&(o.value-=1,o.value<0&&(o.value=g.value.length-1),M())}function D(){g.value.length&&(o.value+=1,o.value>g.value.length-1&&(o.value=0),M())}function B(){var s;o.value!==-1&&((s=k.value.find(e=>Number.parseInt(e.dataset.index)===o.value))==null||s.click())}function M(){var s,e;if(H.value){const a=H.value.osInstance().elements().content;let n=0;if(o.value!==-1){n=a.scrollTop;const t=((s=k.value.find(_=>Number.parseInt(_.dataset.index)===o.value))==null?void 0:s.offsetTop)??0,d=((e=k.value.find(_=>Number.parseInt(_.dataset.index)===o.value))==null?void 0:e.clientHeight)??0,c=a.scrollTop,x=a.clientHeight;t+d>c+x?n=t+d-x:t<=c&&(n=t)}a.scrollTo({top:n})}}function se(s,e){e?window.open(e,"_blank"):Z.push(s),p.value=!1}return(s,e)=>{const a=ye,n=ae;return f(),S(l(ge),{as:"template",show:l(p)},{default:u(()=>[r(l(me),{"initial-focus":l(F),class:"fixed inset-0 z-2000 flex",onClose:e[2]||(e[2]=t=>l(p)&&l(N).emit("global-search-toggle"))},{default:u(()=>[r(l(P),q({as:"template"},l(W)),{default:u(()=>e[3]||(e[3]=[i("div",{class:"fixed inset-0 bg-stone-200/75 backdrop-blur-sm transition-opacity dark-bg-stone-8/75"},null,-1)])),_:1},16),i("div",ke,[i("div",we,[r(l(P),q({as:"template"},l(X)),{default:u(()=>[r(l(ce),{class:"relative h-full max-h-4/5 w-full flex flex-col text-left lg-max-w-2xl"},{default:u(()=>[i("div",Se,[i("div",Re,[r(a,{name:"i-ep:search",size:18,class:"text-stone-5"}),de(i("input",{ref_key:"searchInputRef",ref:F,"onUpdate:modelValue":e[0]||(e[0]=t=>pe(v)?v.value=t:null),placeholder:"搜索页面，支持标题、URL模糊查询",class:"w-full border-0 rounded-md bg-transparent px-3 text-base text-dark dark-text-white focus-outline-none placeholder-stone-4 dark-placeholder-stone-5",onKeydown:[e[1]||(e[1]=R(t=>l(N).emit("global-search-toggle"),["esc"])),R($(z,["prevent"]),["up"]),R($(D,["prevent"]),["down"]),R($(B,["prevent"]),["enter"])]},null,40,Te),[[fe,l(v)]])]),r(l(ve),{class:"relative m-0 of-y-hidden"},{default:u(()=>[r(l(he),{ref_key:"searchResultRef",ref:H,options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"h-full"},{default:u(()=>[l(g).length>0?(f(!0),b(G,{key:0},A(l(g),(t,d)=>(f(),b("a",{ref_for:!0,ref_key:"searchResultItemRef",ref:k,key:t.path,class:Y(["flex cursor-pointer items-center",{"bg-stone-2/40 dark-bg-stone-7/40":d===l(o)}]),"data-index":d,onClick:c=>se(t.path,t.link),onMouseover:c=>o.value=d},[t.icon?(f(),S(a,{key:0,name:t.icon,size:20,class:Y(["basis-16 transition",{"scale-120 text-ui-primary":d===l(o)}])},null,8,["name","class"])):T("",!0),i("div",He,[i("div",Ie,Q((typeof t.title=="function"?t.title():t.title)??"[ 无标题 ]"),1),t.breadcrumb.length?(f(),S(_e,{key:0,class:"truncate"},{default:u(()=>[(f(!0),b(G,null,A(t.breadcrumb,(c,x)=>(f(),S(be,{key:x,class:"text-xs"},{default:u(()=>[O(Q((typeof c.title=="function"?c.title():c.title)??"[ 无标题 ]"),1)]),_:2},1024))),128))]),_:2},1024)):T("",!0)])],42,Ce))),128)):(f(),b("div",ze,[r(a,{name:"i-tabler:mood-empty",size:40}),e[4]||(e[4]=i("p",{"m-2":"","text-base":""}," 没有找到你想要的 ",-1))]))]),_:1},512)]),_:1}),l(y).mode==="pc"?(f(),b("div",De,[i("div",Be,[i("div",Me,[r(n,null,{default:u(()=>[r(a,{name:"i-ion:md-return-left",size:14})]),_:1}),e[5]||(e[5]=i("span",null,"访问",-1))]),i("div",Ne,[r(n,null,{default:u(()=>[r(a,{name:"i-ant-design:caret-up-filled",size:14})]),_:1}),r(n,null,{default:u(()=>[r(a,{name:"i-ant-design:caret-down-filled",size:14})]),_:1}),e[6]||(e[6]=i("span",null,"切换",-1))])]),l(y).settings.navSearch.enableHotkeys?(f(),b("div",$e,[r(n,null,{default:u(()=>e[7]||(e[7]=[O(" ESC ")])),_:1}),e[8]||(e[8]=i("span",null,"退出",-1))])):T("",!0)])):T("",!0)])]),_:1})]),_:1},16)])])]),_:1},8,["initial-focus"])]),_:1},8,["show"])}}});export{Ke as _};