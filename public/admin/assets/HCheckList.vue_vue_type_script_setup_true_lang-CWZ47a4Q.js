
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{d as u,at as n,au as m,$ as b,g as a,c as t,F as o,s as p,V as _,z as g,h,t as f,j as v}from"./index-TOhlAu5k.js";const k={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark-bg-stone-7"},y=["disabled","onClick"],B=u({__name:"HCheckList",props:n({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,l=m(i,"modelValue");return b(l,s=>{r("change",s)}),(s,x)=>{const c=v;return a(),t("div",k,[(a(!0),t(o,null,p(s.options,e=>(a(),t("button",{key:e.value,disabled:s.disabled||e.disabled,class:_(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled-cursor-not-allowed disabled-opacity-50 hover-not-disabled-bg-ui-primary hover-not-disabled-text-ui-text",{"text-ui-text bg-ui-primary":l.value===e.value}]),onClick:C=>l.value=e.value},[e.icon?(a(),g(c,{key:0,name:e.icon},null,8,["name"])):(a(),t(o,{key:1},[h(f(e.label),1)],64))],10,y))),128))])}}});export{B as _};
