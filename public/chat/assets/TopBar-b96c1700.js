import{_ as g}from"./relative.vue_vue_type_script_setup_true_lang-6b4939d3.js";import{u as b}from"./useBasicLayout-259ce701.js";import{e as S,a as y,k,l as I}from"./index-024c691e.js";import{_ as N}from"./menu-c99e2e5c.js";import{k as B,c as r,R as n,S as i,a2 as o,W as l,V as z,K as f,a6 as u}from"./vue-24971718.js";import{e as M,n as V}from"./naive-ui-95c9585a.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const j={class:"flex h-14 pt-1 w-full items-center justify-between"},A={class:"h-11 px-1 flex justify-center items-center"},T={key:0,class:"w-7 h-7 flex justify-center hover:bg-[#f4f5f5] rounded-[10px] items-center"},H={class:"flex items-center"},$=B({__name:"TopBar",setup(R){const a=S(),c=r(()=>a.siderCollapsed);function p(){a.setSiderCollapsed(!1)}const{isMobile:m}=b(),v=y(),h=M(),t=k(),_=r(()=>t.isStreamIn!==void 0?t.isStreamIn:!1),x=r(()=>{var s;return Number((s=v.globalConfig)==null?void 0:s.isModelInherited)===1}),w=I();async function C(s){if(_.value){h.info("AI回复中，请稍后再试");return}t.setStreamIn(!1);try{if(s&&s>0)await t.addNewChatGroup(s);else{const{modelInfo:e}=t.activeConfig;if(e&&x.value&&t.activeGroupAppId===0){const d={modelInfo:e};await t.addNewChatGroup(0,d)}else await t.addNewChatGroup()}t.setUsingPlugin(null),m.value&&a.setSiderCollapsed(!0),w.push("/chat")}catch{}}return(s,e)=>(n(),i("div",j,[o("div",A,[c.value?(n(),i("div",T,[l(f(V),{class:"",onClick:p,size:"23"},{default:z(()=>e[1]||(e[1]=[o("svg",{t:"1735279906826",class:"icon",viewBox:"0 0 1088 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1466",width:"200",height:"200"},[o("path",{d:"M854.592 160c58.24 0 105.408 47.168 105.408 105.408v493.184c0 58.24-47.168 105.408-105.408 105.408H233.408C175.168 864 128 816.832 128 758.592V265.408c0-58.24 47.168-105.408 105.408-105.408h621.184z m-378.368 64H271.04C227.392 224 192 259.392 192 303.04v417.92c0 43.648 35.392 79.04 79.04 79.04h205.184v-576z m340.736 0H535.68v576h281.216c43.648 0 79.04-35.392 79.04-79.04v-417.92c0-43.648-35.392-79.04-79.04-79.04zM423.552 443.456v54.848h-158.08v-54.848h158.08z m0-146.304V352h-158.08v-54.848h158.08z","p-id":"1467"})],-1)])),_:1})])):u("",!0),c.value?(n(),i("div",{key:1,onClick:e[0]||(e[0]=d=>C()),class:"ml-3 cursor-pointer h-8 border border-[#c2d6f8] hover:border-[#bad2f8] hover:text-[#ffffff] text-xs text-[#0057ff] py-1.5 pl-2 pr-2.5 hover:bg-[#5a91fc] flex justify-between rounded-2xl"},[o("div",H,[l(f(N),{icon:"icon-park-outline:plus",class:"w-4 h-4 mr-1"}),e[2]||(e[2]=o("span",{class:""}," 新对话 ",-1))]),e[3]||(e[3]=o("div",{class:"flex items-center"},null,-1))])):u("",!0)]),l(g)]))}});const D=G($,[["__scopeId","data-v-7376ab21"]]);export{D as T};
