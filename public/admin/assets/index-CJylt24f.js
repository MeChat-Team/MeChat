
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-Ddax1S58.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-FDL5yZdU.js";import{d as fe,r as b,m as k,a as ce,p as u,q as be,g as w,c as z,b as l,w as a,e as U,F as G,s as H,i as I,h as s,y as _e,z as j,t as p,L as M,G as D,k as J}from"./index-TOhlAu5k.js";import{k as K}from"./index-BE-LteFu.js";import{u as Q}from"./utcformatTime-Bq4gDWNx.js";const ge={class:"input-with-text"},we={class:"input-with-text"},ve={class:"input-with-text"},Ce=fe({__name:"index",setup(ye){const A=b(),R=b(0),y=b(!1),V=b(!1),v=b(!1),S=b(0),T=b(),g=k({status:"0",id:0}),m=k({model3Count:0,model4Count:0,drawMjCount:0}),i=k({username:"",email:"",status:"",phone:"",page:1,size:15}),W={0:"Inactive",1:"Active",2:"Banned",3:"Suspended"},X=k({model3Count:[{required:!0,message:"请填写调整的基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写调整的高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写调整的绘画积分额度",trigger:"blur"}]}),q=b([]);async function _(){try{V.value=!0;const n=await M.queryAllUser(i),{rows:t,count:C}=n.data;V.value=!1,R.value=C,q.value=t}catch{V.value=!1}}function Z(n){y.value=!0,g.status=n.status.toString(),g.id=n.id}function E(n){v.value=!0,S.value=n.id}async function ee(){(await M.updateUserStatus(g)).success&&D({type:"success",message:"变更用户状态成功！"}),y.value=!1,_()}function le(n){n==null||n.resetFields(),_()}async function te(n){const{id:t,email:C}=n;(await M.resetUserPassword({id:t})).success&&D({type:"success",message:`重置用户[${C}密码为初始密码为[123456]完成！`})}function ae(n){S.value=0,n==null||n.resetFields()}async function ne(n){n==null||n.validate(async t=>{t&&(await M.sendUserCrami({...m,userId:S.value}),D.success("调整成功！"),v.value=!1,_())})}return ce(()=>_()),(n,t)=>{const C=me,x=u("el-input"),d=u("el-form-item"),L=u("el-option"),N=u("el-select"),f=u("el-button"),$=u("el-form"),P=pe,oe=u("el-avatar"),r=u("el-table-column"),B=u("el-tag"),re=u("el-popconfirm"),se=u("el-table"),ue=u("el-pagination"),ie=u("el-row"),F=u("el-dialog"),h=u("el-input-number"),de=be("loading");return w(),z("div",null,[l(C,null,{title:a(()=>t[16]||(t[16]=[U("div",{class:"flex items-center gap-4"},"用户信息列表",-1)])),_:1}),l(P,null,{default:a(()=>[l($,{ref_key:"formRef",ref:A,inline:!0,model:i},{default:a(()=>[l(d,{label:"用户名称",prop:"username"},{default:a(()=>[l(x,{modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),placeholder:"用户姓名[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"用户邮箱",prop:"email"},{default:a(()=>[l(x,{modelValue:i.email,"onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e),placeholder:"用户邮箱[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"手机号码",prop:"phone"},{default:a(()=>[l(x,{modelValue:i.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>i.phone=e),placeholder:"手机号码[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"用户状态",prop:"status"},{default:a(()=>[l(N,{modelValue:i.status,"onUpdate:modelValue":t[3]||(t[3]=e=>i.status=e),placeholder:"请选择用户状态",style:{width:"160px"},clearable:""},{default:a(()=>[(w(!0),z(G,null,H(I(K),e=>(w(),j(L,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:a(()=>[l(f,{type:"primary",onClick:_},{default:a(()=>t[17]||(t[17]=[s(" 查询 ")])),_:1}),l(f,{onClick:t[4]||(t[4]=e=>le(A.value))},{default:a(()=>t[18]||(t[18]=[s(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(P,{style:{width:"100%"}},{default:a(()=>[_e((w(),j(se,{border:"",data:q.value,style:{width:"100%"},size:"large"},{default:a(()=>[l(r,{prop:"avatar",label:"用户头像",fixed:"",width:"120"},{default:a(e=>[l(oe,{src:e.row.avatar},null,8,["src"])]),_:1}),l(r,{fixed:"",prop:"username",label:"用户名称",width:"150"}),l(r,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),l(r,{prop:"phone",label:"用户手机号",width:"250",align:"left"},{default:a(e=>{var o;return[s(p(((o=e.row)==null?void 0:o.phone)||"未绑定手机号"),1)]}),_:1}),l(r,{prop:"realName",label:"真实姓名",width:"150",align:"center"},{default:a(e=>{var o;return[s(p(((o=e.row)==null?void 0:o.realName)||"未实名认证"),1)]}),_:1}),l(r,{prop:"idCard",label:"身份证号",width:"200",align:"center"},{default:a(e=>{var o;return[s(p(((o=e.row)==null?void 0:o.idCard)||"未实名认证"),1)]}),_:1}),l(r,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:a(({row:e})=>[l(B,{type:"success"},{default:a(()=>[s(p(W[e.status]),1)]),_:2},1024)]),_:1}),l(r,{prop:"balanceInfo.model3Count",label:"基础模型",width:"120",align:"center"}),l(r,{prop:"balanceInfo.model4Count",label:"高级模型",width:"120",align:"center"}),l(r,{prop:"balanceInfo.drawMjCount",label:"绘画余额",width:"120",align:"center"}),t[22]||(t[22]=s("expirationTime ")),l(r,{prop:"balanceInfo.drawMjCount",label:"会员到期时间",width:"170",align:"center"},{default:a(e=>[l(B,{type:"success"},{default:a(()=>{var o,c,Y,O;return[s(p((c=(o=e.row)==null?void 0:o.balanceInfo)!=null&&c.expirationTime?I(Q)(new Date((O=(Y=e.row)==null?void 0:Y.balanceInfo)==null?void 0:O.expirationTime).toString()):"非会员"),1)]}),_:2},1024)]),_:1}),l(r,{prop:"balanceInfo.memberModel3Count",label:"基础模型[会员]",width:"120",align:"center"}),l(r,{prop:"balanceInfo.memberModel4Count",label:"高级模型[会员]",width:"120",align:"center"}),l(r,{prop:"balanceInfo.memberDrawMjCount",label:"绘画余额[会员]",width:"120",align:"center"}),l(r,{prop:"balanceInfo.useModel3Count",label:"已用基础模型",width:"160",align:"center"},{default:a(e=>{var o,c;return[s(p(`${((o=e.row.balanceInfo)==null?void 0:o.useModel3Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel3Token)||0} Token`),1)]}),_:1}),l(r,{prop:"balanceInfo.useModel4Count",label:"已用高级模型",width:"160",align:"center"},{default:a(e=>{var o,c;return[s(p(`${((o=e.row.balanceInfo)==null?void 0:o.useModel4Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel4Token)||0} Token`),1)]}),_:1}),l(r,{prop:"balanceInfo.useDrawMjToken",label:"已用绘画积分",width:"160",align:"center"},{default:a(e=>{var o;return[s(p(`${((o=e.row.balanceInfo)==null?void 0:o.useDrawMjToken)||0} Token`),1)]}),_:1}),l(r,{prop:"createdAt",label:"注册时间",width:"200",align:"center"},{default:a(e=>[s(p(I(Q)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),l(r,{fixed:"right",label:"操作",width:"250",align:"center"},{default:a(e=>[l(f,{link:"",type:"primary",size:"small",onClick:o=>Z(e.row)},{default:a(()=>t[19]||(t[19]=[s(" 修改状态 ")])),_:2},1032,["onClick"]),l(re,{title:"确认重置此用户密码为【123456】?","confirm-button-text":"确认重置",onConfirm:o=>te(e.row)},{reference:a(()=>[l(f,{link:"",type:"danger"},{default:a(()=>t[20]||(t[20]=[s(" 重置密码 ")])),_:1})]),_:2},1032,["onConfirm"]),l(f,{link:"",type:"primary",size:"small",onClick:o=>E(e.row)},{default:a(()=>t[21]||(t[21]=[s(" 调整积分 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[de,V.value]]),l(ie,{class:"mt-5 flex justify-end"},{default:a(()=>[l(ue,{"current-page":i.page,"onUpdate:currentPage":t[5]||(t[5]=e=>i.page=e),"page-size":i.size,"onUpdate:pageSize":t[6]||(t[6]=e=>i.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:R.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),l(F,{modelValue:y.value,"onUpdate:modelValue":t[8]||(t[8]=e=>y.value=e),title:"变更用户状态",width:"500px"},{default:a(()=>[l($,{model:g,inline:!0},{default:a(()=>[l(d,{label:"用户状态","label-width":"90px"},{default:a(()=>[l(N,{modelValue:g.status,"onUpdate:modelValue":t[7]||(t[7]=e=>g.status=e),placeholder:"请选择用户状态",style:{width:"160px"},clearable:""},{default:a(()=>[(w(!0),z(G,null,H(I(K),e=>(w(),j(L,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:a(()=>[l(f,{type:"primary",onClick:ee},{default:a(()=>t[23]||(t[23]=[s(" 确认变更 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(F,{modelValue:v.value,"onUpdate:modelValue":t[14]||(t[14]=e=>v.value=e),title:"调整用户积分（赠送/扣除）",width:"450px",onClose:t[15]||(t[15]=e=>ae(T.value))},{footer:a(()=>[l(f,{onClick:t[12]||(t[12]=e=>v.value=!1)},{default:a(()=>t[24]||(t[24]=[s(" 取消 ")])),_:1}),l(f,{type:"primary",onClick:t[13]||(t[13]=e=>ne(T.value))},{default:a(()=>t[25]||(t[25]=[s(" 确认调整 ")])),_:1})]),default:a(()=>[l($,{ref_key:"cramiRef",ref:T,model:m,rules:X,"label-width":"100px"},{default:a(()=>[l(d,{label:"基础积分",prop:"modelLimits"},{default:a(()=>[U("div",ge,[l(h,{modelValue:m.model3Count,"onUpdate:modelValue":t[9]||(t[9]=e=>m.model3Count=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1}),l(d,{label:"高级积分",prop:"modelLimits"},{default:a(()=>[U("div",we,[l(h,{modelValue:m.model4Count,"onUpdate:modelValue":t[10]||(t[10]=e=>m.model4Count=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1}),l(d,{label:"绘画积分",prop:"modelLimits"},{default:a(()=>[U("div",ve,[l(h,{modelValue:m.drawMjCount,"onUpdate:modelValue":t[11]||(t[11]=e=>m.drawMjCount=e),max:99999,min:-99999,step:1,"step-strictly":"",class:"input-number",style:{"margin-right":"10px"}},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof J=="function"&&J(Ce);export{Ce as default};