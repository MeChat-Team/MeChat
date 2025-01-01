
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{d as u,u as f,r as d,o as x,a as _,c as p,b as s,e as n,w as m,f as v,_ as w,g,h as k,t as B,i as N,j as b,k as a}from"./index-TOhlAu5k.js";const h={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},S={class:"flex flex-col gap-4"},y=u({__name:"[...all]",setup(I){const l=v(),r=f(),e=d({inter:Number.NaN,countdown:5});x(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),_(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){l.push(r.settings.home.fullPath)}return(C,t)=>{const c=b,i=w;return g(),p("div",h,[s(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",S,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[s(i,{onClick:o},{default:m(()=>[k(B(N(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof a=="function"&&a(y);export{y as default};
