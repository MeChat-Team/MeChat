
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import u from"./index-B4jFZtdQ.js";import g from"./index-B8Sqn5Xi.js";import{d as h,u as f,n as c,r as p,a as _,T as y,$ as v,g as s,c as T,i as e,z as l,A as d,V as w,l as k}from"./index-TOhlAu5k.js";import"./index-DiAwnlh9.js";import"./useMainPage-BBnl-433.js";import"./leftSide.vue_vue_type_script_setup_true_lang-DEPsxDJf.js";import"./index-BCjwk9Be.js";import"./index-Dn-xfNu4.js";import"./item.vue_vue_type_script_setup_true_lang-DU2VJFwZ.js";import"./rightSide.vue_vue_type_script_setup_true_lang-cIbY_84A.js";import"./HDropdownMenu.vue_vue_type_script_setup_true_lang-9yYrQUu4.js";import"./index.vue_vue_type_script_setup_true_lang-HQUWLRSI.js";import"./HDropdown-BAsKGrKa.js";import"./HTabList.vue_vue_type_script_setup_true_lang-UVJ6ZYMS.js";import"./use-resolve-button-type-ByCRQ8qt.js";import"./index.vue_vue_type_script_setup_true_lang-DAdaaAY-.js";import"./index.vue_vue_type_script_setup_true_lang-plwfvUjd.js";import"./HKbd-BX31b_hQ.js";import"./index.vue_vue_type_script_setup_true_lang-Cr0P4F7T.js";const E=h({name:"Topbar",__name:"index",setup(S){const t=f(),a=c(()=>!(t.settings.menu.menuMode==="head"&&(!t.settings.toolbar.breadcrumb||t.settings.app.routeBaseOn==="filesystem"))),n=p(0),m=p(!1),b=c(()=>{const o=t.settings.tabbar.enable?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-tabbar-height")):0,r=a.value?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-toolbar-height")):0;return o+r});_(()=>{window.addEventListener("scroll",i)}),y(()=>{window.removeEventListener("scroll",i)});function i(){n.value=(document.documentElement||document.body).scrollTop}return v(n,(o,r)=>{m.value=t.settings.topbar.mode==="sticky"&&o>r&&o>b.value}),(o,r)=>(s(),T("div",{class:w(["topbar-container",{"has-tabbar":e(t).settings.tabbar.enable,"has-toolbar":e(a),[`topbar-${e(t).settings.topbar.mode}`]:!0,shadow:e(n),hide:e(m)}]),"data-fixed-calc-width":""},[e(t).settings.tabbar.enable?(s(),l(u,{key:0})):d("",!0),e(a)?(s(),l(g,{key:1})):d("",!0)],2))}}),G=k(E,[["__scopeId","data-v-a6c8b676"]]);export{G as default};