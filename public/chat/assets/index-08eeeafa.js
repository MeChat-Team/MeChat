import{k as P,c as y,r as a,e as U,o as $,w as q,S as p,W as r,a2 as e,V as m,K as o,l as k,a9 as E,aa as C,a8 as x,a4 as n,F as T,a7 as M,a6 as g,ac as F,R as d,U as R,j as K}from"./vue-cbfd7fa1.js";import{T as W}from"./TopBar-ac3bdc31.js";import{u as G,a as H,j as D}from"./index-bada37e0.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-e4d8aab3.js";import{u as J}from"./useBasicLayout-5485175e.js";import{M as O,T as Q}from"./appStore-ca261899.js";import{U as X}from"./UpSmall-cdfe7879.js";import{e as Y,E as L,p as Z}from"./naive-ui-8add5bf4.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import"./relative.vue_vue_type_script_setup_true_lang-f1704e45.js";import"./logo-63e5ee5a.js";import"./index-e53e2518.js";import"./menu-b9522a75.js";import"./vueuse-motion-6e187fab.js";const se={class:"flex justify-center h-full flex-col items-center"},le={class:"flex items-center font-semibold"},te={class:"flex w-full lign-center mb-6 mt-2 overflow-hidden"},oe={class:"border relative w-full flex flex-col rounded-xl h-[120px] py-3 pr-[14px] pl-[2px] radius-[20px]"},ae={class:"h-10 w-full flex py-[1px]"},ie={class:"flex-1"},re={key:0,style:{left:"0",top:"45px","z-index":"3"},class:"absolute border rounded-xl p-1 bg-[#ffffff] w-[190px] h-[120px]"},ne=["onClick"],de={class:"flex flex-col"},ce={class:"text-xs"},ue={class:"pt-[3px]"},fe={class:"flex justify-end items-end"},pe=["disabled"],xe={style:{"scrollbar-width":"none"},class:"flex-1 w-full mt-1 overflow-auto"},ve={style:{gap:"4px"},class:"flex-1 pb-4 flex flex-col w-full"},me=["src"],be={class:"flex flex-col justify-center"},he={class:"text-base font-semibold"},ge={class:"text-xs text-[#00000080] mt-1"},_e=P({__name:"index",setup(we){const _=G(),{isMobile:j}=J();y(()=>_.globalConfig.clientLogoPath),y(()=>_.globalConfig),a(),Y(),U({model:"",mode:"simple"}),a(),a([]);const w=a(null);async function z(){const t=await Q();w.value=t.data.data}const v=a(""),i=a(!1),c=a(!0),B=()=>{i.value?i.value=!0:setTimeout(()=>{i.value=!i.value},0)};H();const u=a(1),S=[{name:"简洁搜索",icon:"tabler:report-search",id:1,value:"simple"},{name:"深入搜索",icon:"hugeicons:folder-search",id:2,value:"deep"},{name:"研究搜索",icon:"hugeicons:global-search",id:3,value:"research"}],f=a({name:"简洁搜索",icon:"tabler:report-search",id:1,value:"simple"}),I=t=>{f.value=t,console.log("lafrom",f.value),u.value=t.id,i.value=!1},A=()=>{i.value=!1},N=async()=>{D.push({name:"SearchDetails",query:{keyword:v.value,mode:f.value.value}})};return $(async()=>{const t=await O();console.log("respresp",t),z()}),q(v,t=>{c.value=t.trim()==="",console.log("isDisabled",c.value)}),(t,s)=>{const V=F("click-outside");return d(),p("div",se,[r(W,{class:"px-4"}),e("div",{class:n([[o(j)?"w-full h9full px-4 py-5 pt-0":" w-full h9full px-6    rounded-lg"],"w-full max-w-[800px] flex-col flex justify-center items-center"])},[e("div",le,[r(o(L),{size:"16",class:"mr-2"},{default:m(()=>s[2]||(s[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.809 10.109c.26 0 .453-.188.49-.435.23-1.373.433-2.078.869-2.515.435-.436 1.137-.638 2.502-.868.25-.03.448-.23.448-.492a.49.49 0 0 0-.45-.491c-1.363-.232-2.065-.434-2.5-.87-.436-.438-.638-1.142-.869-2.513a.49.49 0 0 0-.49-.438.5.5 0 0 0-.494.436c-.23 1.372-.432 2.077-.868 2.514-.435.437-1.135.64-2.498.871a.49.49 0 0 0-.453.492c0 .266.204.458.45.49 1.366.23 2.066.428 2.501.862.436.435.638 1.14.869 2.524a.5.5 0 0 0 .493.433m.37 7.16a9.06 9.06 0 0 0 2.023-5.721c-.601.25-1.25.41-1.93.46a7.185 7.185 0 1 1-6.532-7.62c.153-.658.41-1.277.753-1.837a9.101 9.101 0 1 0 4.33 16.073l3.615 3.613a.954.954 0 0 0 1.348-.006.954.954 0 0 0 .007-1.348z","clip-rule":"evenodd"})],-1)])),_:1}),s[3]||(s[3]=e("span",{class:""}," AI 搜索 ",-1))]),e("div",te,[s[5]||(s[5]=e("span",{class:"relative text-2xl flex-1 text-center"},"实时资讯，丰富信源，整合搜索",-1)),e("div",{onClick:s[0]||(s[0]=l=>o(D).push("/")),class:"flex p-1 rounded-xl hover:bg-[#f5f5f5] h-6 w-6 items-center cursor-pointer"},[r(o(L),{size:"16",color:"#d0d0d0",class:"mr-2"},{default:m(()=>s[4]||(s[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10.586 12 8.464 9.879A1 1 0 1 1 9.88 8.464L12 10.586l2.121-2.122a1 1 0 0 1 1.415 1.415L13.414 12l2.122 2.121a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 1 1-1.415-1.415z"}),e("path",{fill:"currentColor",d:"M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12m20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})],-1)])),_:1})])]),e("div",oe,[k(e("textarea",{"onUpdate:modelValue":s[1]||(s[1]=l=>v.value=l),style:{"font-size":"15px"},class:"pl-4 w-full flex-1",placeholder:"搜索、提问或发消息"},null,512),[[E,v.value]]),e("div",ae,[e("div",ie,[e("div",{onClick:C(B,["prevent"]),style:{padding:"7px 10px 7px 12px"},class:"w-[125px] relative cursor-pointer ml-4 gap-1 rounded-xl border border-[#ebebeb] hover:bg-[#fafafa] flex items-center justify-center h-[38px]"},[r(o(b),{icon:f.value.icon,class:"pt-[1px] text-xl"},null,8,["icon"]),e("span",null,x(f.value.name),1),r(o(b),{class:n([[i.value?"rotate-180 ":"rotate-0"],"w-4 h-4 svg-icon"]),icon:"icon-park-outline:down"},null,8,["class"]),i.value?k((d(),p("div",re,[(d(),p(T,null,M(S,(l,h)=>e("div",{style:{padding:"8px 10px"},key:h,onClick:C(ye=>I(l),["stop"]),class:"hover:bg-[#f4f5f5] rounded-xl w-full gap-2 flex"},[r(o(b),{class:n([[u.value==l.id?"text-[#0066ff]":""],"pt-[3px] text-xl"]),icon:l.icon},null,8,["class","icon"]),e("div",de,[e("span",{class:n([[u.value==l.id?"text-[#0066ff]":""],"text-sm"])},x(l.name),3),e("span",ce,x(l.text),1)]),e("div",ue,[u.value==l.id?(d(),R(o(b),{key:0,class:n([[u.value==l.id?"text-[#0066ff]":""],"text-sm"]),icon:"proicons:checkmark"},null,8,["class"])):g("",!0)])],8,ne)),64))])),[[V,A]]):g("",!0)])]),e("div",fe,[r(o(Z),{disabled:!t.buttonDisabled,placement:"top",trigger:"hover"},{trigger:m(()=>[e("button",{disabled:c.value,type:"button",class:n([{"bg-primary-600 dark:bg-primary-700":!c.value,"bg-primary-300 dark:bg-gray-700":c.value},"flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white dark:bg-white dark:text-black dark:disabled:bg-[#676767] disabled:bg-[#D7D7D7]"]),onClick:N},[r(o(X),{size:"24"})],10,pe)]),default:m(()=>[s[6]||(s[6]=K(" 消息为空 "))]),_:1},8,["disabled"]),g("",!0)])]),s[7]||(s[7]=e("div",{class:"relative"},[e("div",{class:"div-1"})],-1))]),e("div",xe,[e("div",ve,[(d(!0),p(T,null,M(w.value,(l,h)=>(d(),p("div",{key:h,class:"flex w-full p-3 rounded-xl hover:bg-[#f5f5f5]"},[e("div",null,[e("img",{src:l.image,alt:"",class:"rounded-xl w-32 h-20 mr-5",srcset:""},null,8,me)]),e("div",be,[e("div",he,x(l.keyword),1),e("div",ge,x(l.keyword),1)])]))),128))])])],2)])}}});const Pe=ee(_e,[["__scopeId","data-v-df8dbed1"]]);export{Pe as default};