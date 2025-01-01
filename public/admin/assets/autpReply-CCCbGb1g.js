
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-Ddax1S58.js";import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang-FDL5yZdU.js";import{I as A,d as ne,m as z,r as _,n as se,a as ue,p as n,q as re,g as R,c as O,b as t,w as a,e as v,h as d,v as ie,x as pe,F as de,s as me,i as u,y as fe,z as j,t as F,D as _e,G as V,E as ye,j as ce,_ as ge,k as M}from"./index-TOhlAu5k.js";import{b as ve,Q as be}from"./index-BE-LteFu.js";const x={queryAutoReply:i=>A.get("autoreply/query",{params:i}),delAutoReply:i=>A.post("autoreply/del",i),addAutoReply:i=>A.post("autoreply/add",i),updateAutoReply:i=>A.post("autoreply/update",i)},we={class:"dialog-footer"},Ae=ne({__name:"autpReply",setup(i){const r=z({prompt:"",status:void 0,page:1,size:10}),m=_(!1),b=_(!1),c=_(0),$=_(0),S=_(),k=_(),s=z({status:1,prompt:"",answer:"",isAIReplyEnabled:1}),P=z({status:[{required:!0,message:"请选择开启状态",trigger:"change"}],prompt:[{required:!0,message:"请填写预设问题",trigger:"blur"}],answer:[{required:!0,message:"请填写回复答案",trigger:"blur"}],isAIReplyEnabled:[{required:!0,message:"请选择是否开启AI回复",trigger:"change"}]}),q=_([]);async function p(){try{b.value=!0;const o=await x.queryAutoReply(r),{rows:e,count:g}=o.data;b.value=!1,$.value=g,q.value=e}catch{b.value=!1}}async function K(o){await x.delAutoReply({id:o}),V.success("删除自定义知识库成功"),await p()}function Q(o){o==null||o.resetFields(),p()}function H(o){c.value=o.id;const{status:e,prompt:g,answer:C,isAIReplyEnabled:I}=o;m.value=!0,ye(()=>{Object.assign(s,{status:e,prompt:g,answer:C,isAIReplyEnabled:I})})}const T=se(()=>c.value!==0);function L(o){o==null||o.resetFields(),c.value=0}async function G(o){o==null||o.validate(async e=>{if(!e){V.warning("请按规则填写所有信息！");return}c.value===0?(await x.addAutoReply(s),V.success("添加自定义知识库成功")):(await x.updateAutoReply({id:c.value,...s}),V.success("更新自定义知识库成功")),m.value=!1,p()})}return ue(()=>{p()}),(o,e)=>{const g=ce,C=ge,I=oe,U=n("el-input"),f=n("el-form-item"),E=n("el-option"),J=n("el-select"),y=n("el-button"),D=n("el-form"),N=ae,w=n("el-table-column"),W=n("el-tag"),X=n("el-popconfirm"),Y=n("el-table"),Z=n("el-pagination"),h=n("el-row"),B=n("el-switch"),ee=n("el-dialog"),te=re("loading");return R(),O("div",null,[t(I,null,{title:a(()=>e[14]||(e[14]=[v("div",{class:"flex items-center gap-4"},"自定义知识库说明",-1)])),content:a(()=>e[15]||(e[15]=[v("div",{class:"text-sm/6"},[v("div",null," 自定义知识库会根据用户提问中的关键词匹配知识库的内容作为预设。同一知识库支持多个关键词，多个关键词用空格隔开。 "),v("div",null,"默认开启 AI 回复，关闭后将直接回复预设答案。")],-1)])),default:a(()=>[t(C,{outline:"",onClick:e[0]||(e[0]=l=>m.value=!0)},{default:a(()=>[t(g,{name:"i-ri:file-text-line"}),e[16]||(e[16]=d(" 添加知识库 "))]),_:1})]),_:1}),t(N,null,{default:a(()=>[t(D,{ref_key:"formRef",ref:S,inline:!0,model:r},{default:a(()=>[t(f,{label:"关键词",prop:"prompt"},{default:a(()=>[t(U,{modelValue:r.prompt,"onUpdate:modelValue":e[1]||(e[1]=l=>r.prompt=l),placeholder:"关键词[模糊搜索]",onKeydown:ie(pe(p,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),t(f,{label:"启用状态",prop:"status"},{default:a(()=>[t(J,{modelValue:r.status,"onUpdate:modelValue":e[2]||(e[2]=l=>r.status=l),placeholder:"请选择启用状态",clearable:"",style:{width:"160px"}},{default:a(()=>[(R(!0),O(de,null,me(u(ve),l=>(R(),j(E,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(f,null,{default:a(()=>[t(y,{type:"primary",onClick:p},{default:a(()=>e[17]||(e[17]=[d(" 查询 ")])),_:1}),t(y,{onClick:e[3]||(e[3]=l=>Q(u(S)))},{default:a(()=>e[18]||(e[18]=[d(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(N,{style:{width:"100%"}},{default:a(()=>[fe((R(),j(Y,{border:"",data:u(q),style:{width:"100%"},size:"large"},{default:a(()=>[t(w,{prop:"prompt",label:"关键词"}),t(w,{prop:"answer",label:"知识库"}),t(w,{prop:"status",label:"状态",width:"120"},{default:a(l=>[t(W,{type:l.row.status===1?"success":"danger"},{default:a(()=>[d(F(u(be)[l.row.status]),1)]),_:2},1032,["type"])]),_:1}),t(w,{fixed:"right",label:"操作",width:"200"},{default:a(l=>[t(y,{link:"",type:"primary",size:"small",onClick:le=>H(l.row)},{default:a(()=>e[19]||(e[19]=[d(" 编辑 ")])),_:2},1032,["onClick"]),t(X,{"confirm-button-text":"确认删除","cancel-button-text":"放弃",type:"danger",width:"230px","icon-color":"red",title:"确定删除次条知识库？",onConfirm:le=>K(l.row.id)},{reference:a(()=>[t(y,{link:"",type:"danger",size:"small"},{default:a(()=>e[20]||(e[20]=[d(" 删除 ")])),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[te,u(b)]]),t(h,{class:"mt-5 flex justify-end"},{default:a(()=>[t(Z,{"current-page":r.page,"onUpdate:currentPage":e[4]||(e[4]=l=>r.page=l),"page-size":r.size,"onUpdate:pageSize":e[5]||(e[5]=l=>r.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:u($),onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),t(ee,{modelValue:u(m),"onUpdate:modelValue":e[12]||(e[12]=l=>_e(m)?m.value=l:null),title:`${u(T)?"编辑":"添加"}知识库`,width:"600px",onClose:e[13]||(e[13]=l=>L(u(k)))},{footer:a(()=>[v("span",we,[t(y,{onClick:e[10]||(e[10]=l=>m.value=!1)},{default:a(()=>e[21]||(e[21]=[d("取消")])),_:1}),t(y,{type:"primary",onClick:e[11]||(e[11]=l=>G(u(k)))},{default:a(()=>[d(F(`${u(T)?"更新":"新增"}知识库 `),1)]),_:1})])]),default:a(()=>[t(D,{ref_key:"formAutoReplyRef",ref:k,"label-position":"right","label-width":"80px",model:s,rules:P},{default:a(()=>[t(f,{label:"开启状态",prop:"status"},{default:a(()=>[t(B,{modelValue:s.status,"onUpdate:modelValue":e[6]||(e[6]=l=>s.status=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),t(f,{label:"AI回复",prop:"isAIReplyEnabled"},{default:a(()=>[t(B,{modelValue:s.isAIReplyEnabled,"onUpdate:modelValue":e[7]||(e[7]=l=>s.isAIReplyEnabled=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),t(f,{label:"关键词",prop:"prompt"},{default:a(()=>[t(U,{modelValue:s.prompt,"onUpdate:modelValue":e[8]||(e[8]=l=>s.prompt=l),type:"textarea",rows:5,placeholder:"请填写关键词，多个关键词用空格隔开"},null,8,["modelValue"])]),_:1}),t(f,{label:"知识库",prop:"answer"},{default:a(()=>[t(U,{modelValue:s.answer,"onUpdate:modelValue":e[9]||(e[9]=l=>s.answer=l),type:"textarea",rows:5,placeholder:"请填写匹配的知识库内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof M=="function"&&M(Ae);export{Ae as default};
