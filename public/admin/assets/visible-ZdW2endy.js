
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-BTce45WY.js";import{d as N,m as j,r as y,a as I,p as o,g as R,c as $,b as e,w as l,h as d,i as b,J as V,e as a,G as h,j as A,_ as E,k}from"./index-nGFMSQGw.js";import{a as w}from"./config-CYXO1pNF.js";const M=a("div",{class:"flex items-center gap-4"},"插件应用基础配置",-1),O=a("div",{class:"text-sm/6"},[a("div",null," 插件基础配置，包括插件地址、插件 Key、隐藏插件、插件优先显示等。 "),a("div",null,[d(" 插件项目"),a("a",{href:"https://github.com/vastxie/99AIPlugin",target:"_blank"},"开源地址"),d(" ，可自行部署，欢迎共同维护。 ")])],-1),S=a("div",{style:{width:"250px"}},[a("p",null,"开启后，将隐藏插件功能")],-1),G=a("div",{style:{width:"250px"}},[a("p",null,"开启后，对话页默认优先显示插件")],-1),J=N({__name:"visible",setup(T){const n=j({pluginUrl:"",pluginKey:"",siteRobotName:"",pluginFirst:"1",isHidePlugin:"0"}),U=y({pluginUrl:[{required:!0,trigger:"blur",message:"请填写插件地址"}],pluginKey:[{required:!0,trigger:"blur",message:"请填写插件key"}]}),p=y();async function _(){const i=await w.queryConfig({keys:["pluginUrl","pluginKey","pluginFirst","isHidePlugin"]});Object.assign(n,i.data)}function K(){var i;(i=p.value)==null||i.validate(async t=>{if(t){try{await w.setConfig({settings:C(n)}),h.success("变更配置信息成功")}catch{}_()}else h.error("请填写完整信息")})}function C(i){return Object.keys(i).map(t=>({configKey:t,configVal:i[t]}))}return I(()=>{_()}),(i,t)=>{const m=A,H=E,P=B,f=o("el-input"),u=o("el-form-item"),r=o("el-col"),c=o("el-row"),g=o("el-switch"),v=o("el-icon"),x=o("el-tooltip"),q=o("el-form"),F=o("el-card");return R(),$("div",null,[e(P,null,{title:l(()=>[M]),content:l(()=>[O]),default:l(()=>[e(H,{outline:"",onClick:K},{default:l(()=>[e(m,{name:"i-ri:file-text-line"}),d(" 保存设置 ")]),_:1})]),_:1}),e(F,{style:{margin:"20px"}},{default:l(()=>[e(q,{ref_key:"formRef",ref:p,rules:U.value,model:n,"label-width":"150px"},{default:l(()=>[e(c,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"插件地址",prop:"pluginUrl"},{default:l(()=>[e(f,{modelValue:n.pluginUrl,"onUpdate:modelValue":t[0]||(t[0]=s=>n.pluginUrl=s),placeholder:"插件地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"插件 Key",prop:"pluginKey"},{default:l(()=>[e(f,{modelValue:n.pluginKey,"onUpdate:modelValue":t[1]||(t[1]=s=>n.pluginKey=s),placeholder:"插件 Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"隐藏插件",prop:"isHidePlugin"},{default:l(()=>[e(g,{modelValue:n.isHidePlugin,"onUpdate:modelValue":t[2]||(t[2]=s=>n.isHidePlugin=s),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[S]),default:l(()=>[e(v,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(b(V))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"插件优先显示",prop:"pluginFirst"},{default:l(()=>[e(g,{modelValue:n.pluginFirst,"onUpdate:modelValue":t[3]||(t[3]=s=>n.pluginFirst=s),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[G]),default:l(()=>[e(v,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(b(V))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof k=="function"&&k(J);export{J as default};