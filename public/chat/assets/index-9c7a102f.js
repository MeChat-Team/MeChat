function n(t){const o={origin:!0,...t};let e;o.origin?e=document.createElement("textarea"):e=document.createElement("input"),e.setAttribute("readonly","readonly"),e.value=o.text,document.body.appendChild(e),e.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(e)}const c=t=>{new RegExp("^(http|https)://").test(t)&&window.open(t)};export{n as c,c as o};
