import{c as a}from"./appStore-c2d454ab.js";import{A as e}from"./index-0db41f00.js";const i=e("app-cat-store",{state:()=>({catId:0,mineApps:[]}),actions:{setCatId(t){this.catId=t},async queryMineApps(){var s;const t=await a();this.mineApps=((s=t==null?void 0:t.data)==null?void 0:s.rows)||[]}}});export{i as u};