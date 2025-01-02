
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{I as M,d as B,Q as E,n as A,g as w,z as I,R as ee,i as D,S as le,r as y,a as te,p as o,c as ue,b as l,w as u,e as p,h as s,B as ne,t as v,A as U,G as q,l as ae}from"./index-TOhlAu5k.js";const k={quertMenu:i=>M.get("menu/query",{params:i}),visibleMenu:i=>M.post("menu/visible",i),setMenu:i=>M.post("menu/setMenu",i),delMenu:i=>M.post("menu/delete",i)},z=B({__name:"index",props:{icon:{}},setup(i){const f=E(),b=A(()=>({class:f.class||"",style:f.style||"width: 2em, height: 2em"}));return(_,c)=>(w(),I(D(le),ee({icon:"icon"},b.value),null,16))}}),oe={class:"flex justify-between"},se={class:"flex items-center"},re={class:"flex items-center"},ie={class:"ml-2"},de={class:"dialog-footer"},me=B({__name:"index",setup(i){const f=y(1),b=y(),_=y(!1),c=y(0),J=y([]),n=y({menuTipText:"",menuIframeUrl:"",isJump:!1,isShow:!0,menuIcon:"",menuPath:"",order:1e3,isNeedAuth:!1,isSystem:!0}),F={menuTipText:[{required:!0,trigger:"blur",message:"请填写菜单名称"}],menuIframeUrl:[{required:!0,trigger:"blur",message:"请填写三方网页地址"}],isJump:[{required:!0,trigger:"blur",message:"请确认是否跳转"}],isShow:[{required:!0,trigger:"blur",message:"请确认是否打开菜单"}],menuIcon:[{required:!0,trigger:"blur",message:"请填写ICON图标"}],order:[{required:!0,trigger:"blur",message:"请填写排序ID"}],menuPath:[{required:!0,trigger:"blur",message:"请填写菜单路径"}],isSystem:[{required:!0,trigger:"blur",message:"请确认是否是系统内地址"}],isNeedAuth:[{required:!0,trigger:"blur",message:"请确认是否需要登录"}]},R=A(()=>c.value>0?"编辑菜单":"添加菜单"),j=A(()=>c.value>0?"确认修改":"确认添加");async function x(){const a=await k.quertMenu({menuPlatform:f.value});J.value=a.data}function G(a){a==null||a.resetFields(),c.value=0}async function L(a){const{id:e}=a;await k.visibleMenu({id:e}),q.success("操作成功！"),x()}async function O(a){await k.delMenu({id:a.id}),q.success("操作成功！"),x()}async function Q(){var a;(a=b.value)==null||a.resetFields(),c.value=0,_.value=!0}async function H(a){a&&await a.validate(async e=>{if(!e)return;const V={...n.value,id:c.value,menuPlatform:f.value};await k.setMenu(V),q.success("操作成功！"),a.resetFields(),_.value=!1,x()})}function K(a){const{id:e,menuTipText:V,menuIframeUrl:S,isJump:h,isShow:N,menuIcon:P,menuPath:d,order:r,isNeedAuth:g}=a;c.value=e,n.value={menuTipText:V,menuIframeUrl:S||"",isJump:h,isShow:N,menuIcon:P,menuPath:d||"",order:r,isNeedAuth:g,isSystem:!!d},_.value=!0}return te(()=>{x()}),(a,e)=>{const V=o("el-alert"),S=o("el-card"),h=o("el-radio-button"),N=o("el-radio-group"),P=o("el-icon"),d=o("el-button"),r=o("el-table-column"),g=o("el-tag"),W=o("el-table"),C=o("el-input"),m=o("el-form-item"),T=o("el-switch"),X=o("el-input-number"),Y=o("el-form"),Z=o("el-dialog");return w(),ue("div",null,[l(S,{class:"mb-4"},{header:u(()=>e[14]||(e[14]=[p("div",{class:"flex justify-between"},[p("span",{class:"font-bold"},"动态菜单配置说明")],-1)])),default:u(()=>[l(V,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"请至少配置一个、如果不配置默认设置对话页面、排序ID越小越靠前、PC和移动端是两套独立的设置、图标选择请在此处： https://icon-sets.iconify.design/ 找到或搜索到喜欢的图标之后可以复制下方的图标编号 例如material-symbols:chat-outline",type:"success"})]),_:1}),l(S,null,{header:u(()=>[p("div",oe,[e[18]||(e[18]=p("span",{class:"font-bold"},"客户端动态菜单设置",-1)),p("div",se,[l(N,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value=t),size:"large"},{default:u(()=>[l(h,{label:1},{default:u(()=>e[15]||(e[15]=[s("PC端")])),_:1}),l(h,{label:0},{default:u(()=>e[16]||(e[16]=[s("移动端")])),_:1})]),_:1},8,["modelValue"]),l(d,{type:"primary",size:"large",class:"ml-4",onClick:Q},{default:u(()=>[e[17]||(e[17]=s(" 添加菜单 ")),l(P,{class:"ml-2"},{default:u(()=>[l(D(ne))]),_:1})]),_:1})])])]),default:u(()=>[l(W,{data:J.value,style:{width:"100%"}},{default:u(()=>[l(r,{prop:"menuTipText",label:"菜单文本"}),l(r,{prop:"menuType",label:"菜单类型"},{default:u(t=>[l(g,{type:t.row.menuType?"success":"danger"},{default:u(()=>[s(v(t.row.menuType===0?"系统预设":"自定义菜单"),1)]),_:2},1032,["type"])]),_:1}),l(r,{prop:"isJump",label:"是否打开新窗口"},{default:u(t=>[l(g,{type:t.row.isJump?"success":"danger"},{default:u(()=>[s(v(t.row.isJump?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(r,{prop:"isShow",label:"是否显示菜单"},{default:u(t=>[l(g,{type:t.row.isShow?"success":"danger"},{default:u(()=>[s(v(t.row.isShow?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(r,{prop:"isNeedAuth",label:"是否需要登录访问"},{default:u(t=>[l(g,{type:t.row.isNeedAuth?"success":"danger"},{default:u(()=>[s(v(t.row.isNeedAuth?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),l(r,{prop:"menuIcon",label:"菜单图标"},{default:u(t=>[p("div",re,[l(z,{icon:t.row.menuIcon},null,8,["icon"]),p("span",ie,v(t.row.menuIcon),1)])]),_:1}),l(r,{prop:"menuPath",label:"菜单路径"}),l(r,{prop:"order",label:"排序",width:"80"}),l(r,{fixed:"right",label:"操作",width:"220"},{default:u(t=>[l(d,{type:"primary",size:"small",onClick:$=>K(t.row)},{default:u(()=>e[19]||(e[19]=[s("编辑")])),_:2},1032,["onClick"]),l(d,{type:"warning",size:"small",onClick:$=>L(t.row)},{default:u(()=>[s(v(t.row.isShow?"隐藏":"显示"),1)]),_:2},1032,["onClick"]),l(d,{type:"danger",size:"small",onClick:$=>O(t.row)},{default:u(()=>e[20]||(e[20]=[s("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),l(Z,{modelValue:_.value,"onUpdate:modelValue":e[12]||(e[12]=t=>_.value=t),title:R.value,width:"600px",onClose:e[13]||(e[13]=t=>G(b.value))},{footer:u(()=>[p("span",de,[l(d,{onClick:e[10]||(e[10]=t=>_.value=!1)},{default:u(()=>e[21]||(e[21]=[s("取消")])),_:1}),l(d,{type:"primary",onClick:e[11]||(e[11]=t=>H(b.value))},{default:u(()=>[s(v(j.value),1)]),_:1})])]),default:u(()=>[l(Y,{ref_key:"formRef",ref:b,model:n.value,rules:F,"label-width":"120px",class:"mt-4"},{default:u(()=>[l(m,{label:"菜单文本",prop:"menuTipText"},{default:u(()=>[l(C,{modelValue:n.value.menuTipText,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value.menuTipText=t),placeholder:"请输入菜单文本"},null,8,["modelValue"])]),_:1}),l(m,{label:"是否系统内地址",prop:"isSystem"},{default:u(()=>[l(T,{modelValue:n.value.isSystem,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value.isSystem=t)},null,8,["modelValue"])]),_:1}),n.value.isSystem?U("",!0):(w(),I(m,{key:0,label:"三方网页地址",prop:"menuIframeUrl"},{default:u(()=>[l(C,{modelValue:n.value.menuIframeUrl,"onUpdate:modelValue":e[3]||(e[3]=t=>n.value.menuIframeUrl=t),placeholder:"请输入三方网页地址"},null,8,["modelValue"])]),_:1})),n.value.isSystem?U("",!0):(w(),I(m,{key:1,label:"是否跳转",prop:"isJump"},{default:u(()=>[l(T,{modelValue:n.value.isJump,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value.isJump=t)},null,8,["modelValue"])]),_:1})),l(m,{label:"是否显示",prop:"isShow"},{default:u(()=>[l(T,{modelValue:n.value.isShow,"onUpdate:modelValue":e[5]||(e[5]=t=>n.value.isShow=t)},null,8,["modelValue"])]),_:1}),l(m,{label:"菜单图标",prop:"menuIcon"},{default:u(()=>[l(C,{modelValue:n.value.menuIcon,"onUpdate:modelValue":e[6]||(e[6]=t=>n.value.menuIcon=t),placeholder:"请输入图标代码"},{append:u(()=>[n.value.menuIcon?(w(),I(z,{key:0,icon:n.value.menuIcon},null,8,["icon"])):U("",!0)]),_:1},8,["modelValue"])]),_:1}),n.value.isSystem?(w(),I(m,{key:2,label:"系统路径",prop:"menuPath"},{default:u(()=>[l(C,{modelValue:n.value.menuPath,"onUpdate:modelValue":e[7]||(e[7]=t=>n.value.menuPath=t),placeholder:"请输入系统路径"},null,8,["modelValue"])]),_:1})):U("",!0),l(m,{label:"排序",prop:"order"},{default:u(()=>[l(X,{modelValue:n.value.order,"onUpdate:modelValue":e[8]||(e[8]=t=>n.value.order=t),min:1,max:1e4},null,8,["modelValue"])]),_:1}),l(m,{label:"是否登录访问权限",prop:"isNeedAuth"},{default:u(()=>[l(T,{modelValue:n.value.isNeedAuth,"onUpdate:modelValue":e[9]||(e[9]=t=>n.value.isNeedAuth=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}}),fe=ae(me,[["__scopeId","data-v-5b2a17bf"]]);export{fe as default};