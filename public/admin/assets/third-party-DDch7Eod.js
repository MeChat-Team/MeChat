
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{H as g,G as d,d as y,r as u,K as h,p as b,g as m,c as p,e as s,t as f,b as w,w as k,h as C,l as I}from"./index-TOhlAu5k.js";const c=g.create({baseURL:"/api",timeout:3e4,headers:{"Content-Type":"application/json;charset=utf-8"}});c.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t},t=>Promise.reject(t));c.interceptors.response.use(t=>{const e=t.data;return e.success?t.data:(d.error(e.message||"请求失败"),Promise.reject(new Error(e.message||"请求失败")))},t=>{var r,n;const e=((n=(r=t.response)==null?void 0:r.data)==null?void 0:n.message)||t.message;return d.error(e),Promise.reject(t)});const i=t=>t.then(e=>e.data),j={get(t,e){return i(c.get(t,e))},post(t,e,r){return i(c.post(t,e,r))},put(t,e,r){return i(c.put(t,e,r))},delete(t,e){return i(c.delete(t,e))}};function B(){return j.post("/verification/third-party/generate")}const P={class:"flex-col justify-center items-center min-h-full p-4"},E={class:"w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"},N={key:0,class:"mb-6"},T={class:"text-center mb-4"},V={class:"text-4xl font-mono font-bold tracking-wider text-primary"},q={class:"text-sm text-gray-500 mt-2"},z={key:1,class:"text-center mb-6"},R={class:"flex justify-center"},S=y({__name:"third-party",setup(t){const e=u(""),r=u(0),n=u(0);let a=null;async function v(){try{const l=await B();e.value=l.code,r.value=l.id,n.value=60,x(),d.success("验证码已生成")}catch(l){d.error(l.message||"生成验证码失败")}}function x(){a&&clearInterval(a),a=setInterval(()=>{n.value>0?n.value--:(e.value="",r.value=0,a&&(clearInterval(a),a=null))},1e3)}return h(()=>{a&&clearInterval(a)}),(l,o)=>{const _=b("el-button");return m(),p("div",P,[s("div",E,[o[2]||(o[2]=s("h2",{class:"text-2xl font-bold mb-6 text-center"},"第三方应用认证",-1)),e.value?(m(),p("div",N,[s("div",T,[o[0]||(o[0]=s("p",{class:"text-gray-600 mb-2"},"您的验证码是：",-1)),s("div",V,f(e.value),1),s("p",q," 验证码将在 "+f(n.value)+" 秒后失效 ",1)])])):(m(),p("div",z,o[1]||(o[1]=[s("p",{class:"text-gray-600"},"点击下方按钮生成验证码",-1)]))),s("div",R,[w(_,{type:"primary",size:"large",disabled:!!e.value,onClick:v},{default:k(()=>[C(f(e.value?"验证码已生成":"生成验证码"),1)]),_:1},8,["disabled"])]),o[3]||(o[3]=s("div",{class:"mt-6 text-sm text-gray-500"},[s("p",{class:"text-center"},"请在第三方应用中输入此验证码完成认证")],-1))])])}}}),A=I(S,[["__scopeId","data-v-7a62e3c0"]]);export{A as default};
