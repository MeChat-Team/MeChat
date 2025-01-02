
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-Ddax1S58.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-FDL5yZdU.js";import{d as fe,r as f,m as M,n as T,a as ge,p as u,q as ce,g as C,c as S,b as e,w as t,e as v,h as d,F as _e,s as be,i as k,y as ve,z as h,t as U,B as ye,G as y,E as we,j as Ve,_ as Ce,k as D}from"./index-TOhlAu5k.js";import{A as I}from"./package-BOFbsru1.js";import{i as ke,I as Ue}from"./index-BE-LteFu.js";import{u as Ie}from"./utcformatTime-Bq4gDWNx.js";const xe={class:"mr-5 flex justify-end"},Me=fe({__name:"package",setup(qe){const B=f(`/api/upload/file?dir=${encodeURIComponent("system/others")}`),q=f(),z=f(0),b=f(!1),w=f(!1),m=M({name:"",page:1,size:10,status:""}),V=f(),g=f(0),o=M({name:null,des:null,coverImg:null,price:null,order:null,status:null,weight:null,days:null,model3Count:null,model4Count:null,drawMjCount:null}),F=M({name:[{required:!0,message:"请填写套餐名称",trigger:"blur"}],des:[{required:!0,message:"请填写套餐的详细描述",trigger:"blur"}],deductionType:[{required:!0,message:"请选择扣费形式",trigger:"change"}],coverImg:[{required:!0,message:"请填写或上传封面图地址",trigger:"blur"}],price:[{required:!0,message:"请填写套餐价格",trigger:"blur"}],order:[{required:!0,message:"请填写套餐排序",trigger:"blur"}],status:[{required:!0,message:"请选择套餐开启状态",trigger:"change"}],days:[{required:!0,message:"请填写套餐有效期天数",trigger:"blur"}],model3Count:[{required:!0,message:"请填写套餐中基础模型可使用次数",trigger:"blur"}],model4Count:[{required:!0,message:"请填写套餐中高级模型可使用次数",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写套餐中抽奖次数",trigger:"blur"}]}),A=f([]);async function c(){try{w.value=!0;const n=await I.queryAllPackage(m);w.value=!1;const{rows:l,count:x}=n.data;z.value=x,A.value=l}catch{w.value=!1}}function N(n){n==null||n.resetFields(),c()}const R=n=>{if(["image/png","image/jpeg","image/gif","image/webp"].includes(n.type)){if(n.size/1024>2e3)return y.error("当前限制文件最大不超过 2000KB!"),!1}else return y.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1;return!0},G=(n,l)=>{o.coverImg=n.data};async function O(n){await I.delPackage({id:n}),y({type:"success",message:"删除套餐成功！"}),c()}function Y(n){g.value=n.id,we(()=>{Object.assign(o,n),o==null||delete o.createdAt,o==null||delete o.updatedAt,o==null||delete o.deletedAt,o==null||delete o.id}),b.value=!0}const H=T(()=>g.value?"更新套餐":"新增套餐"),K=T(()=>g.value?"确认更新":"确认新增");function L(){var n;g.value=0,b.value=!0,(n=V.value)==null||n.resetFields()}function J(n){g.value=0,n==null||n.resetFields()}async function W(n){n==null||n.validate(async l=>{l&&(g.value?(await I.updatePackage({id:g.value,...o}),y({type:"success",message:"更新套餐成功！"})):(await I.createPackage(o),y({type:"success",message:"创建新的套餐成功！"})),b.value=!1,c())})}return ge(()=>{c()}),(n,l)=>{const x=Ve,Q=Ce,X=me,Z=u("el-option"),E=u("el-select"),r=u("el-form-item"),_=u("el-button"),P=u("el-form"),$=pe,s=u("el-table-column"),ee=u("el-image"),le=u("el-tag"),te=u("el-popconfirm"),ae=u("el-table"),oe=u("el-pagination"),j=u("el-row"),i=u("el-input"),p=u("el-col"),ne=u("el-switch"),ue=u("el-icon"),re=u("el-upload"),se=u("el-dialog"),de=ce("loading");return C(),S("div",null,[e(X,null,{title:t(()=>l[19]||(l[19]=[v("div",{class:"flex items-center gap-4"},"套餐设置",-1)])),content:t(()=>l[20]||(l[20]=[v("div",{class:"text-sm/6"},[v("div",null," 套餐分为不限时套餐和限时套餐。不限时充值积分永不过期，限时套餐在规定时间未使用完毕将清空剩余积分。 "),v("div",null," 如果充值的套餐等级高于或等于当前套餐等级，则叠加充值额度并延长会员到期时间。 "),v("div",null," 如果充值的套餐等级低于当前套餐等级，则只叠加充值额度，不延长会员到期时间也不改变会员等级。 "),d(" 请仔细阅读以上内容并合理配置，套餐有效时间设为-1即为不限时套餐。 ")],-1)])),default:t(()=>[e(Q,{outline:"",onClick:L},{default:t(()=>[e(x,{name:"ic:baseline-plus"}),l[21]||(l[21]=d(" 创建套餐 "))]),_:1})]),_:1}),e($,null,{default:t(()=>[e(P,{ref_key:"formRef",ref:q,inline:!0,model:m},{default:t(()=>[e(r,{label:"套餐状态",prop:"status"},{default:t(()=>[e(E,{modelValue:m.status,"onUpdate:modelValue":l[0]||(l[0]=a=>m.status=a),placeholder:"请选择套餐状态",clearable:"",style:{width:"160px"}},{default:t(()=>[(C(!0),S(_e,null,be(k(ke),a=>(C(),h(Z,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(_,{type:"primary",onClick:c},{default:t(()=>l[22]||(l[22]=[d(" 查询 ")])),_:1}),e(_,{onClick:l[1]||(l[1]=a=>N(q.value))},{default:t(()=>l[23]||(l[23]=[d(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e($,{style:{width:"100%"}},{default:t(()=>[ve((C(),h(ae,{border:"",data:A.value,style:{width:"100%"},size:"large"},{default:t(()=>[e(s,{fixed:"",prop:"name",label:"套餐名称",width:"150"}),e(s,{prop:"order",label:"排序ID",align:"center",width:"100"}),e(s,{prop:"coverImg",label:"套餐封面",width:"150",align:"center"},{default:t(a=>[e(ee,{style:{height:"50px"},src:a.row.coverImg,fit:"fill"},null,8,["src"])]),_:1}),e(s,{prop:"price",label:"套餐价格",width:"100",align:"center"}),e(s,{prop:"weight",label:"套餐等级",width:"100",align:"center"}),e(s,{prop:"status",label:"套餐状态",width:"100"},{default:t(a=>[e(le,{type:"info"},{default:t(()=>[d(U(k(Ue)[a.row.status]),1)]),_:2},1024)]),_:1}),e(s,{prop:"days",label:"套餐有效期",width:"120"},{default:t(a=>[d(U(a.row.days>0?`${a.row.days}天`:"永久"),1)]),_:1}),e(s,{prop:"model3Count",label:"基础模型额度",width:"100"}),e(s,{prop:"model4Count",label:"高级模型额度",width:"100"}),e(s,{prop:"drawMjCount",label:"绘画额度",width:"100"}),e(s,{prop:"des",label:"套餐描述",width:"300"}),e(s,{prop:"createdAt",label:"创建时间",width:"200"},{default:t(a=>[d(U(k(Ie)(a.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(s,{fixed:"right",label:"操作",width:"200"},{default:t(a=>[e(_,{link:"",type:"primary",size:"small",onClick:ie=>Y(a.row)},{default:t(()=>l[24]||(l[24]=[d(" 修改套餐 ")])),_:2},1032,["onClick"]),e(te,{title:"确认删除此套餐么?",width:"200","icon-color":"red",onConfirm:ie=>O(a.row)},{reference:t(()=>[e(_,{link:"",type:"danger",size:"small"},{default:t(()=>l[25]||(l[25]=[d(" 删除套餐 ")])),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[de,w.value]]),e(j,{class:"mt-5 flex justify-end"},{default:t(()=>[e(oe,{"current-page":m.page,"onUpdate:currentPage":l[2]||(l[2]=a=>m.page=a),"page-size":m.size,"onUpdate:pageSize":l[3]||(l[3]=a=>m.size=a),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:z.value,onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(se,{modelValue:b.value,"onUpdate:modelValue":l[17]||(l[17]=a=>b.value=a),"close-on-click-modal":!1,title:H.value,width:"970",onClose:l[18]||(l[18]=a=>J(V.value))},{footer:t(()=>[v("span",xe,[e(_,{onClick:l[15]||(l[15]=a=>b.value=!1)},{default:t(()=>l[26]||(l[26]=[d("取消")])),_:1}),e(_,{type:"primary",onClick:l[16]||(l[16]=a=>W(V.value))},{default:t(()=>[d(U(K.value),1)]),_:1})])]),default:t(()=>[e(P,{ref_key:"formPackageRef",ref:V,"label-position":"right","label-width":"120px",model:o,rules:F},{default:t(()=>[e(j,null,{default:t(()=>[e(p,{span:11},{default:t(()=>[e(r,{label:"套餐详细名称",prop:"name"},{default:t(()=>[e(i,{modelValue:o.name,"onUpdate:modelValue":l[4]||(l[4]=a=>o.name=a),placeholder:"请填写套餐名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:3,offset:2},{default:t(()=>[e(r,{label:"套餐开启状态",prop:"status"},{default:t(()=>[e(ne,{modelValue:o.status,"onUpdate:modelValue":l[5]||(l[5]=a=>o.status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:7,offset:1},{default:t(()=>[e(r,{label:"套餐等级",prop:"status"},{default:t(()=>[e(i,{modelValue:o.weight,"onUpdate:modelValue":l[6]||(l[6]=a=>o.weight=a),modelModifiers:{number:!0},type:"number",placeholder:"设置套餐等级"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11},{default:t(()=>[e(r,{label:"设置套餐价格",prop:"price"},{default:t(()=>[e(i,{modelValue:o.price,"onUpdate:modelValue":l[7]||(l[7]=a=>o.price=a),modelModifiers:{number:!0},placeholder:"请填写套餐价格(￥)最多两位小数",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11,offset:2},{default:t(()=>[e(r,{label:"套餐有效时间",prop:"days"},{default:t(()=>[e(i,{modelValue:o.days,"onUpdate:modelValue":l[8]||(l[8]=a=>o.days=a),modelModifiers:{number:!0},type:"number",placeholder:"自卡密生成之日有效天数、-1为永久"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:9},{default:t(()=>[e(r,{label:"设置套餐封面",prop:"coverImg"},{default:t(()=>[e(i,{modelValue:o.coverImg,"onUpdate:modelValue":l[9]||(l[9]=a=>o.coverImg=a),class:"flex-1",placeholder:"填写封面地址或点击上传"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:2},{default:t(()=>[e(re,{class:"avatar-uploader",action:B.value,"show-file-list":!1,"on-success":G,"before-upload":R},{default:t(()=>[e(_,null,{default:t(()=>[e(ue,null,{default:t(()=>[e(k(ye))]),_:1})]),_:1})]),_:1},8,["action"])]),_:1}),e(p,{span:11,offset:2},{default:t(()=>[e(r,{label:"设置套餐排序",prop:"order"},{default:t(()=>[e(i,{modelValue:o.order,"onUpdate:modelValue":l[10]||(l[10]=a=>o.order=a),modelModifiers:{number:!0},type:"number",placeholder:"排序数字越大越靠前|套餐权重等级则反之"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11},{default:t(()=>[e(r,{label:"设置套餐描述",prop:"des"},{default:t(()=>[e(i,{modelValue:o.des,"onUpdate:modelValue":l[11]||(l[11]=a=>o.des=a),type:"textarea",placeholder:"请填写套餐详细介绍信息、用于对外展示、建议控制套餐价格字数以便于用户端对齐格式...",rows:6},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:11,offset:2},{default:t(()=>[e(r,{label:"基础模型积分",prop:"model3Count"},{default:t(()=>[e(i,{modelValue:o.model3Count,"onUpdate:modelValue":l[12]||(l[12]=a=>o.model3Count=a),modelModifiers:{number:!0},type:"number",placeholder:"基础模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"高级模型积分",prop:"model4Count"},{default:t(()=>[e(i,{modelValue:o.model4Count,"onUpdate:modelValue":l[13]||(l[13]=a=>o.model4Count=a),modelModifiers:{number:!0},type:"number",placeholder:"高级模型积分"},null,8,["modelValue"])]),_:1}),e(r,{label:"绘画模型积分",prop:"drawMjCount"},{default:t(()=>[e(i,{modelValue:o.drawMjCount,"onUpdate:modelValue":l[14]||(l[14]=a=>o.drawMjCount=a),modelModifiers:{number:!0},type:"number",placeholder:"绘画模型积分"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof D=="function"&&D(Me);export{Me as default};