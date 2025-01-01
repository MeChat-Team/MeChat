
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-FDL5yZdU.js";import{d as R,m as U,r as A,n as D,a as N,p as s,g as O,c as j,b as e,w as l,e as i,h as p,i as f,G as V,j as q,_ as $,k as x}from"./index-TOhlAu5k.js";import{a as C}from"./config-CFeX2CT3.js";const E=R({__name:"tencent",setup(H){const o=U({tencentCosStatus:"",cosSecretId:"",cosSecretKey:"",cosBucket:"",cosRegion:"",tencentCosAcceleratedDomain:""}),_=A();async function g(){const a=await C.queryConfig({keys:["cosSecretKey","cosBucket","cosRegion","cosSecretId","tencentCosStatus","tencentCosAcceleratedDomain"]});Object.assign(o,a.data)}function y(){var a;(a=_.value)==null||a.validate(async t=>{if(t){try{await C.setConfig({settings:b(o)}),V.success("变更配置信息成功")}catch{}g()}else V.error("请填写完整信息")})}function b(a){return Object.keys(a).map(t=>({configKey:t,configVal:a[t]}))}const m=D(()=>[{required:Number(o.tencentCosStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return N(()=>{g()}),(a,t)=>{const S=q,w=$,k=K,v=s("el-switch"),c=s("el-form-item"),r=s("el-col"),u=s("el-row"),d=s("el-input"),B=s("el-form"),I=s("el-card");return O(),j("div",null,[e(k,null,{title:l(()=>t[6]||(t[6]=[i("div",{class:"flex items-center gap-4"},"腾讯云COS参数设置",-1)])),content:l(()=>t[7]||(t[7]=[i("div",{class:"text-sm/6"},[i("div",null,[p(" 需前往腾讯云申请对象存储服务，更多配置及申请详见"),i("a",{href:"https://console.cloud.tencent.com/cos",target:"_blank"},"腾讯云COS"),p(" 。 ")])],-1)])),default:l(()=>[e(w,{outline:"",onClick:y},{default:l(()=>[e(S,{name:"i-ri:file-text-line"}),t[8]||(t[8]=p(" 保存设置 "))]),_:1})]),_:1}),e(I,{style:{margin:"20px"}},{default:l(()=>[e(B,{ref_key:"formRef",ref:_,model:o,"label-width":"120px"},{default:l(()=>[e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"启用状态",prop:"tencentCosStatus"},{default:l(()=>[e(v,{modelValue:o.tencentCosStatus,"onUpdate:modelValue":t[0]||(t[0]=n=>o.tencentCosStatus=n),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"SecretId",prop:"cosSecretId",rules:f(m)},{default:l(()=>[e(d,{modelValue:o.cosSecretId,"onUpdate:modelValue":t[1]||(t[1]=n=>o.cosSecretId=n),placeholder:"请填写SecretId",type:"password","show-password":"",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"SecretKey",prop:"cosSecretKey",rules:f(m)},{default:l(()=>[e(d,{modelValue:o.cosSecretKey,"onUpdate:modelValue":t[2]||(t[2]=n=>o.cosSecretKey=n),placeholder:"请填写SecretKey",type:"password","show-password":"",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"存储桶名称",prop:"cosBucket",rules:f(m)},{default:l(()=>[e(d,{modelValue:o.cosBucket,"onUpdate:modelValue":t[3]||(t[3]=n=>o.cosBucket=n),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"所属地域",prop:"cosRegion",rules:f(m)},{default:l(()=>[e(d,{modelValue:o.cosRegion,"onUpdate:modelValue":t[4]||(t[4]=n=>o.cosRegion=n),placeholder:"请填写所属地域(ap-guangzhou)",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(c,{label:"全球加速域名",prop:"tencentCosAcceleratedDomain"},{default:l(()=>[e(d,{modelValue:o.tencentCosAcceleratedDomain,"onUpdate:modelValue":t[5]||(t[5]=n=>o.tencentCosAcceleratedDomain=n),placeholder:"如您是国外服务器可开启全球加速域名得到更快响应速度、同理也会更高计费！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof x=="function"&&x(E);export{E as default};
