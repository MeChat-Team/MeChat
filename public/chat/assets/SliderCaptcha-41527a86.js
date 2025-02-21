import{S as z,U as S,a3 as h,I as d,H as u,a8 as m,aa as v}from"./vue-edf88119.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII=";const X={props:{canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:40},range:{type:Number,default:10},imgs:{type:Array},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},data(){return{mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:null,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1,resetSvg:M}},mounted(){document.body.appendChild(this.$el),document.addEventListener("mousemove",this.onRangeMouseMove,!1),document.addEventListener("mouseup",this.onRangeMouseUp,!1),document.addEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.addEventListener("touchend",this.onRangeMouseUp,!1),this.show&&(document.body.classList.add("vue-puzzle-overflow"),this.reset())},beforeDestroy(){clearTimeout(this.timer1),document.body.removeChild(this.$el),document.removeEventListener("mousemove",this.onRangeMouseMove,!1),document.removeEventListener("mouseup",this.onRangeMouseUp,!1),document.removeEventListener("touchmove",this.onRangeMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onRangeMouseUp,!1)},watch:{show(t){t?(document.body.classList.add("vue-puzzle-overflow"),this.reset()):(this.isSubmting=!1,this.isSuccess=!1,this.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))}},computed:{styleWidth(){const t=this.startWidth+this.newX-this.startX;return t<this.sliderBaseSize?this.sliderBaseSize:t>this.canvasWidth?this.canvasWidth:t},puzzleBaseSize(){return Math.round(Math.max(Math.min(this.puzzleScale,2),.2)*52.5+6)},sliderBaseSize(){return Math.max(Math.min(Math.round(this.sliderSize),Math.round(this.canvasWidth*.5)),10)}},methods:{onClose(){!this.mouseDown&&!this.isSubmting&&(clearTimeout(this.timer1),this.$emit("close"))},onCloseMouseDown(){this.closeDown=!0},onCloseMouseUp(){this.closeDown&&this.onClose(),this.closeDown=!1},onRangeMouseDown(t){this.isCanSlide&&(this.mouseDown=!0,this.startWidth=this.$refs["range-slider"].clientWidth,this.newX=t.clientX||t.changedTouches[0].clientX,this.startX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseMove(t){this.mouseDown&&(t.preventDefault(),this.newX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseUp(){this.mouseDown&&(this.mouseDown=!1,this.submit())},init(t){if(this.loading&&!t)return;this.loading=!0,this.isCanSlide=!1;const e=this.$refs.canvas1,a=this.$refs.canvas2,l=this.$refs.canvas3,s=e.getContext("2d"),i=a.getContext("2d"),n=l.getContext("2d"),p=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,r=document.createElement("img");if(s.fillStyle="rgba(255,255,255,1)",n.fillStyle="rgba(255,255,255,1)",s.clearRect(0,0,this.canvasWidth,this.canvasHeight),i.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.pinX=this.getRandom(this.puzzleBaseSize,this.canvasWidth-this.puzzleBaseSize-20),this.pinY=this.getRandom(20,this.canvasHeight-this.puzzleBaseSize-20),r.crossOrigin="anonymous",r.onload=()=>{const[o,c,g,f]=this.makeImgSize(r);s.save(),this.paintBrick(s),s.closePath(),p?(s.clip(),s.save(),s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.restore()):(s.shadowOffsetX=0,s.shadowOffsetY=0,s.shadowColor="#000",s.shadowBlur=3,s.fill(),s.clip()),s.drawImage(r,o,c,g,f),n.fillRect(0,0,this.canvasWidth,this.canvasHeight),n.drawImage(r,o,c,g,f),s.globalCompositeOperation="source-atop",this.paintBrick(s),s.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),this.puzzleBaseSize*1.2,0,Math.PI*2,!0),s.closePath(),s.shadowColor="rgba(255, 255, 255, .8)",s.shadowOffsetX=-1,s.shadowOffsetY=-1,s.shadowBlur=Math.min(Math.ceil(8*this.puzzleScale),12),s.fillStyle="#ffffaa",s.fill();const w=s.getImageData(this.pinX-3,this.pinY-20,this.pinX+this.puzzleBaseSize+5,this.pinY+this.puzzleBaseSize+5);i.putImageData(w,0,this.pinY-20),s.restore(),s.clearRect(0,0,this.canvasWidth,this.canvasHeight),s.save(),this.paintBrick(s),s.globalAlpha=.8,s.fillStyle="#ffffff",s.fill(),s.restore(),s.save(),s.globalCompositeOperation="source-atop",this.paintBrick(s),s.arc(this.pinX+Math.ceil(this.puzzleBaseSize/2),this.pinY+Math.ceil(this.puzzleBaseSize/2),this.puzzleBaseSize*1.2,0,Math.PI*2,!0),s.shadowColor="#000",s.shadowOffsetX=2,s.shadowOffsetY=2,s.shadowBlur=16,s.fill(),s.restore(),s.save(),s.globalCompositeOperation="destination-over",s.drawImage(r,o,c,g,f),s.restore(),this.loading=!1,this.isCanSlide=!0},r.onerror=()=>{this.init(!0)},!t&&this.imgs&&this.imgs.length){let o=this.getRandom(0,this.imgs.length-1);o===this.imgIndex&&(o===this.imgs.length-1?o=0:o++),this.imgIndex=o,r.src=this.imgs[o]}else r.src=this.makeImgWithCanvas()},getRandom(t,e){return Math.ceil(Math.random()*(e-t)+t)},makeImgSize(t){const e=t.width/t.height,a=this.canvasWidth/this.canvasHeight;let l=0,s=0,i=0,n=0;return e>a?(n=this.canvasHeight,i=e*n,s=0,l=(this.canvasWidth-i)/2):(i=this.canvasWidth,n=i/e,l=0,s=(this.canvasHeight-n)/2),[l,s,i,n]},paintBrick(t){const e=Math.ceil(15*this.puzzleScale);t.beginPath(),t.moveTo(this.pinX,this.pinY),t.lineTo(this.pinX+e,this.pinY),t.arcTo(this.pinX+e,this.pinY-e/2,this.pinX+e+e/2,this.pinY-e/2,e/2),t.arcTo(this.pinX+e+e,this.pinY-e/2,this.pinX+e+e,this.pinY,e/2),t.lineTo(this.pinX+e+e+e,this.pinY),t.lineTo(this.pinX+e+e+e,this.pinY+e),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e,this.pinX+e+e+e+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e+e+e+e/2,this.pinY+e+e,this.pinX+e+e+e,this.pinY+e+e,e/2),t.lineTo(this.pinX+e+e+e,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e+e),t.lineTo(this.pinX,this.pinY+e+e),t.arcTo(this.pinX+e/2,this.pinY+e+e,this.pinX+e/2,this.pinY+e+e/2,e/2),t.arcTo(this.pinX+e/2,this.pinY+e,this.pinX,this.pinY+e,e/2),t.lineTo(this.pinX,this.pinY)},makeImgWithCanvas(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.canvasWidth,t.height=this.canvasHeight,e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.fillRect(0,0,this.canvasWidth,this.canvasHeight);for(let a=0;a<12;a++)if(e.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,e.strokeStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,this.getRandom(0,2)>1)e.save(),e.rotate(this.getRandom(-90,90)*Math.PI/180),e.fillRect(this.getRandom(-20,t.width-20),this.getRandom(-20,t.height-20),this.getRandom(10,t.width/2+10),this.getRandom(10,t.height/2+10)),e.restore();else{e.beginPath();const l=this.getRandom(-Math.PI,Math.PI);e.arc(this.getRandom(0,t.width),this.getRandom(0,t.height),this.getRandom(10,t.height/2+10),l,l+Math.PI*1.5),e.closePath(),e.fill()}return t.toDataURL("image/png")},submit(){this.isSubmting=!0;const t=Math.abs(this.pinX-(this.styleWidth-this.sliderBaseSize)+(this.puzzleBaseSize-this.sliderBaseSize)*((this.styleWidth-this.sliderBaseSize)/(this.canvasWidth-this.sliderBaseSize))-3);t<this.range?(this.infoText=this.successText,this.infoBoxFail=!1,this.infoBoxShow=!0,this.isCanSlide=!1,this.isSuccess=!0,clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.isSubmting=!1,this.$emit("success",t)},800)):(this.infoText=this.failText,this.infoBoxFail=!0,this.infoBoxShow=!0,this.isCanSlide=!1,this.$emit("fail",t),clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.isSubmting=!1,this.reset()},800))},resetState(){this.infoBoxFail=!1,this.infoBoxShow=!1,this.isCanSlide=!1,this.isSuccess=!1,this.startWidth=this.sliderBaseSize,this.startX=0,this.newX=0},reset(){this.isSubmting||(this.resetState(),this.init())}}},y=["width","height"],x=["width","height"],R=["width","height"],C=["src"],T={class:"auth-control_"},Y={class:"range-text"};function b(t,e,a,l,s,i){return z(),S("div",{class:u(["vue-puzzle-vcode",{show_:a.show}]),onMousedown:e[5]||(e[5]=(...n)=>i.onCloseMouseDown&&i.onCloseMouseDown(...n)),onMouseup:e[6]||(e[6]=(...n)=>i.onCloseMouseUp&&i.onCloseMouseUp(...n)),onTouchstart:e[7]||(e[7]=(...n)=>i.onCloseMouseDown&&i.onCloseMouseDown(...n)),onTouchend:e[8]||(e[8]=(...n)=>i.onCloseMouseUp&&i.onCloseMouseUp(...n))},[h("div",{class:"vue-auth-box_ rounded-lg bg-white dark:bg-gray-800",onMousedown:e[3]||(e[3]=v(()=>{},["stop"])),onTouchstart:e[4]||(e[4]=v(()=>{},["stop"]))},[h("div",{class:"auth-body_",style:d(`height: ${a.canvasHeight}px`)},[h("canvas",{ref:"canvas1",width:a.canvasWidth,height:a.canvasHeight,style:d(`width:${a.canvasWidth}px;height:${a.canvasHeight}px`)},null,12,y),h("canvas",{ref:"canvas3",class:u(["auth-canvas3_",{show:s.isSuccess}]),width:a.canvasWidth,height:a.canvasHeight,style:d(`width:${a.canvasWidth}px;height:${a.canvasHeight}px`)},null,14,x),h("canvas",{width:i.puzzleBaseSize,class:"auth-canvas2_",height:a.canvasHeight,ref:"canvas2",style:d(`width:${i.puzzleBaseSize}px;height:${a.canvasHeight}px;transform:translateX(${i.styleWidth-i.sliderBaseSize-(i.puzzleBaseSize-i.sliderBaseSize)*((i.styleWidth-i.sliderBaseSize)/(a.canvasWidth-i.sliderBaseSize))}px)`)},null,12,R),h("div",{class:u(["loading-box_",{hide_:!s.loading}])},e[9]||(e[9]=[h("div",{class:"loading-gif_"},[h("span"),h("span"),h("span"),h("span"),h("span")],-1)]),2),h("div",{class:u(["info-box_",{show:s.infoBoxShow},{fail:s.infoBoxFail}])},m(s.infoText),3),h("div",{class:u(["flash_",{show:s.isSuccess}]),style:d(`transform: translateX(${s.isSuccess?`${a.canvasWidth+a.canvasHeight*.578}px`:`-${a.canvasHeight*.578}px`}) skew(-30deg, 0);`)},null,6),h("img",{class:"reset_",onClick:e[0]||(e[0]=(...n)=>i.reset&&i.reset(...n)),src:s.resetSvg},null,8,C)],4),h("div",T,[h("div",{class:"range-box bg-gray-100 dark:bg-gray-700",style:d(`height:${i.sliderBaseSize}px`)},[h("div",Y,m(a.sliderText),1),h("div",{class:"range-slider",ref:"range-slider",style:d(`width:${i.styleWidth}px`)},[h("div",{class:u(["range-btn",{isDown:s.mouseDown}]),style:d(`width:${i.sliderBaseSize}px`),onMousedown:e[1]||(e[1]=n=>i.onRangeMouseDown(n)),onTouchstart:e[2]||(e[2]=n=>i.onRangeMouseDown(n))},e[10]||(e[10]=[h("div",null,null,-1),h("div",null,null,-1),h("div",null,null,-1)]),38)],4)],4)])],32)],34)}const A=B(X,[["render",b]]);export{A as V};
