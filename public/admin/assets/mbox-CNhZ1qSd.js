
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

var o=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],l=["Date","Subject","Comments","Keywords","Resent-Date"],u=/^[ \t]/,d=/^From /,f=new RegExp("^("+o.join("|")+"): "),c=new RegExp("^("+l.join("|")+"): "),t=/^[^:]+:/,m=/^[^ ]+@[^ ]+/,p=/^.*?(?=[^ ]+?@[^ ]+)/,H=/^<.*?>/,v=/^.*?(?=<.*>)/;function h(e){return e==="Subject"?"header":"string"}function R(e,r){if(e.sol()){if(r.inSeparator=!1,r.inHeader&&e.match(u))return null;if(r.inHeader=!1,r.header=null,e.match(d))return r.inHeaders=!0,r.inSeparator=!0,"atom";var n,i=!1;return(n=e.match(c))||(i=!0)&&(n=e.match(f))?(r.inHeaders=!0,r.inHeader=!0,r.emailPermitted=i,r.header=n[1],"atom"):r.inHeaders&&(n=e.match(t))?(r.inHeader=!0,r.emailPermitted=!0,r.header=n[1],"atom"):(r.inHeaders=!1,e.skipToEnd(),null)}if(r.inSeparator)return e.match(m)?"link":(e.match(p)||e.skipToEnd(),"atom");if(r.inHeader){var a=h(r.header);if(r.emailPermitted){if(e.match(H))return a+" link";if(e.match(v))return a}return e.skipToEnd(),a}return e.skipToEnd(),null}const k={name:"mbox",startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:R,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:o.concat(l)}};export{k as mbox};
