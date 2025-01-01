
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-FDL5yZdU.js";import{d as C,m as N,r as c,a as q,p as o,g as G,c as R,b as e,w as l,e as s,h as _,G as g,j,_ as B,k as H}from"./index-TOhlAu5k.js";import{a as x}from"./config-CFeX2CT3.js";const $=C({__name:"hupijiao",setup(E){const t=N({payHupiStatus:"",payHupiAppId:"",payHupiSecret:"",payHupiGatewayUrl:"",payHupiNotifyUrl:"",payHupiReturnUrl:""}),U=c({payHupiStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payHupiSecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payHupiGatewayUrl:[{required:!0,trigger:"blur",message:"请填写网关"}],payHupiAppId:[{required:!0,trigger:"blur",message:"请填写Appid"}],payHupiNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}]}),m=c();async function f(){const u=await x.queryConfig({keys:["payHupiSecret","payHupiNotifyUrl","payHupiGatewayUrl","payHupiReturnUrl","payHupiAppId","payHupiStatus"]});Object.assign(t,u.data)}function V(){var u;(u=m.value)==null||u.validate(async a=>{if(a){try{await x.setConfig({settings:b(t)}),g.success("变更配置信息成功")}catch{}f()}else g.error("请填写完整信息")})}function b(u){return Object.keys(u).map(a=>({configKey:a,configVal:u[a]}))}return q(()=>{f()}),(u,a)=>{const y=j,w=B,S=k,v=o("el-switch"),r=o("el-form-item"),n=o("el-col"),i=o("el-row"),d=o("el-input"),A=o("el-form"),I=o("el-card");return G(),R("div",null,[e(S,null,{title:l(()=>a[6]||(a[6]=[s("div",{class:"flex items-center gap-4"},"虎皮椒支付设置",-1)])),content:l(()=>a[7]||(a[7]=[s("div",{class:"text-sm/6"},[s("div",null,[s("a",{href:"https://www.xunhupay.com/",target:"_blank"},"虎皮椒支付"),_(" 为第三方支付，接入请购买微信渠道。 ")]),s("div",null,"支付通知地址为： https://您的域名/api/pay/notify。")],-1)])),default:l(()=>[e(w,{outline:"",onClick:V},{default:l(()=>[e(y,{name:"i-ri:file-text-line"}),a[8]||(a[8]=_(" 保存设置 "))]),_:1})]),_:1}),e(I,{style:{margin:"20px"}},{default:l(()=>[e(A,{ref_key:"formRef",ref:m,rules:U.value,model:t,"label-width":"120px"},{default:l(()=>[e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"启用当前支付",prop:"payHupiAppId"},{default:l(()=>[e(v,{modelValue:t.payHupiStatus,"onUpdate:modelValue":a[0]||(a[0]=p=>t.payHupiStatus=p),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付AppId",prop:"payHupiAppId"},{default:l(()=>[e(d,{modelValue:t.payHupiAppId,"onUpdate:modelValue":a[1]||(a[1]=p=>t.payHupiAppId=p),placeholder:"请填写AppId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付网关地址",prop:"payHupiGatewayUrl"},{default:l(()=>[e(d,{modelValue:t.payHupiGatewayUrl,"onUpdate:modelValue":a[2]||(a[2]=p=>t.payHupiGatewayUrl=p),placeholder:"请填写支付网关地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"Secret秘钥",prop:"payHupiSecret"},{default:l(()=>[e(d,{modelValue:t.payHupiSecret,"onUpdate:modelValue":a[3]||(a[3]=p=>t.payHupiSecret=p),placeholder:"请填写支付秘钥",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付通知地址",prop:"payHupiSecret"},{default:l(()=>[e(d,{modelValue:t.payHupiNotifyUrl,"onUpdate:modelValue":a[4]||(a[4]=p=>t.payHupiNotifyUrl=p),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付回调地址",prop:"payHupiSecret"},{default:l(()=>[e(d,{modelValue:t.payHupiReturnUrl,"onUpdate:modelValue":a[5]||(a[5]=p=>t.payHupiReturnUrl=p),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof H=="function"&&H($);export{$ as default};
