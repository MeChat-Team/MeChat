'use strict';const _0x1a8223=_0x1983;(function(_0x40ef34,_0x1ecd11){const _0x1eb775=_0x1983,_0x1fbb41=_0x40ef34();while(!![]){try{const _0x3bd92d=-parseInt(_0x1eb775(0x1af))/0x1*(parseInt(_0x1eb775(0x1ce))/0x2)+-parseInt(_0x1eb775(0x1dc))/0x3*(parseInt(_0x1eb775(0x1c1))/0x4)+-parseInt(_0x1eb775(0x1b4))/0x5+parseInt(_0x1eb775(0x1c6))/0x6*(-parseInt(_0x1eb775(0x1df))/0x7)+-parseInt(_0x1eb775(0x1bc))/0x8+parseInt(_0x1eb775(0x1b3))/0x9*(parseInt(_0x1eb775(0x1c0))/0xa)+-parseInt(_0x1eb775(0x1ad))/0xb*(-parseInt(_0x1eb775(0x1b8))/0xc);if(_0x3bd92d===_0x1ecd11)break;else _0x1fbb41['push'](_0x1fbb41['shift']());}catch(_0x1cfaa0){_0x1fbb41['push'](_0x1fbb41['shift']());}}}(_0x537a,0x2ad01));function _0x537a(){const _0x181db6=['826VHTubh','stream','rxjs','end','design:paramtypes','apiBaseUrl','AipptService','HttpService','get','next','length','mergeMap','DOCMEE_API_URL','complete','490551FfiZOO','no-cache','object','9793ZSzMmn','Failed\x20to\x20parse\x20SSE\x20data:','prompt','decorate','__metadata','Failed\x20to\x20parse\x20remaining\x20SSE\x20data:','httpService','/ppt/generateContent','configService','keep-alive','error','data','text/event-stream','pipe','11goBEMN','outlineMarkdown','474lwmbry','@nestjs/common','pop','data:\x20','9kVFtcV','866090yKUCsQ','trim','post','apiToken','11879208QryGxM','asyncPptInfo','function','generateOutline','2101872RyloEj','metadata','/ppt/asyncPptInfo','ConfigService','324210uHuesW','4aMibLi','templateId','__decorate','getOwnPropertyDescriptor','parse','222nHGMaw','split','map','handleSSEStream','destroy','defineProperty','rxjs/operators','slice'];_0x537a=function(){return _0x181db6;};return _0x537a();}var __decorate=this&&this[_0x1a8223(0x1c3)]||function(_0x5e9fca,_0x33e39d,_0x413c66,_0x57f5db){const _0x1a5e2e=_0x1a8223;var _0x55e6e1=arguments[_0x1a5e2e(0x1d8)],_0x5cd74d=_0x55e6e1<0x3?_0x33e39d:_0x57f5db===null?_0x57f5db=Object[_0x1a5e2e(0x1c4)](_0x33e39d,_0x413c66):_0x57f5db,_0x38dd65;if(typeof Reflect===_0x1a5e2e(0x1de)&&typeof Reflect[_0x1a5e2e(0x1a2)]===_0x1a5e2e(0x1ba))_0x5cd74d=Reflect[_0x1a5e2e(0x1a2)](_0x5e9fca,_0x33e39d,_0x413c66,_0x57f5db);else{for(var _0x17238c=_0x5e9fca[_0x1a5e2e(0x1d8)]-0x1;_0x17238c>=0x0;_0x17238c--)if(_0x38dd65=_0x5e9fca[_0x17238c])_0x5cd74d=(_0x55e6e1<0x3?_0x38dd65(_0x5cd74d):_0x55e6e1>0x3?_0x38dd65(_0x33e39d,_0x413c66,_0x5cd74d):_0x38dd65(_0x33e39d,_0x413c66))||_0x5cd74d;}return _0x55e6e1>0x3&&_0x5cd74d&&Object[_0x1a5e2e(0x1cb)](_0x33e39d,_0x413c66,_0x5cd74d),_0x5cd74d;},__metadata=this&&this[_0x1a8223(0x1a3)]||function(_0x1312e8,_0x3c066f){const _0x122db6=_0x1a8223;if(typeof Reflect===_0x122db6(0x1de)&&typeof Reflect['metadata']==='function')return Reflect[_0x122db6(0x1bd)](_0x1312e8,_0x3c066f);};Object[_0x1a8223(0x1cb)](exports,'__esModule',{'value':!![]}),exports[_0x1a8223(0x1d4)]=void 0x0;function _0x1983(_0x1b4295,_0x3082d4){const _0x537a41=_0x537a();return _0x1983=function(_0x19836f,_0x26eeed){_0x19836f=_0x19836f-0x1a1;let _0x1f7d59=_0x537a41[_0x19836f];return _0x1f7d59;},_0x1983(_0x1b4295,_0x3082d4);}const common_1=require(_0x1a8223(0x1b0)),rxjs_1=require(_0x1a8223(0x1d0)),config_1=require('@nestjs/config'),axios_1=require('@nestjs/axios'),operators_1=require(_0x1a8223(0x1cc));let AipptService=class AipptService{constructor(_0x8edace,_0x75441){const _0x34ff6e=_0x1a8223;this[_0x34ff6e(0x1a7)]=_0x8edace,this[_0x34ff6e(0x1a5)]=_0x75441,this[_0x34ff6e(0x1b7)]=this[_0x34ff6e(0x1a7)][_0x34ff6e(0x1d6)]('DOCMEE_API_TOKEN'),this[_0x34ff6e(0x1d3)]=this[_0x34ff6e(0x1a7)]['get'](_0x34ff6e(0x1da));}[_0x1a8223(0x1c9)](_0x1a380e){return new rxjs_1['Observable'](_0x2620a7=>{const _0x4650b9=_0x1983;let _0x50f02a='';return _0x1a380e['on']('data',_0x55e242=>{const _0x321f78=_0x1983;_0x50f02a+=_0x55e242['toString']();const _0x34c86c=_0x50f02a[_0x321f78(0x1c7)]('\x0a');_0x50f02a=_0x34c86c[_0x321f78(0x1b1)]()||'';for(const _0x1f965c of _0x34c86c){if(_0x1f965c[_0x321f78(0x1b5)]()&&_0x1f965c['startsWith'](_0x321f78(0x1b2)))try{const _0x1cb0b3=JSON[_0x321f78(0x1c5)](_0x1f965c['slice'](0x6));_0x2620a7[_0x321f78(0x1d7)](_0x1cb0b3);}catch(_0x1e34aa){console[_0x321f78(0x1a9)](_0x321f78(0x1e0),_0x1e34aa);}}}),_0x1a380e['on'](_0x4650b9(0x1d1),()=>{const _0x51f408=_0x4650b9;if(_0x50f02a[_0x51f408(0x1b5)]())try{const _0x4a2c0a=JSON[_0x51f408(0x1c5)](_0x50f02a[_0x51f408(0x1cd)](0x6));_0x2620a7[_0x51f408(0x1d7)](_0x4a2c0a);}catch(_0x3456b3){console[_0x51f408(0x1a9)](_0x51f408(0x1a4),_0x3456b3);}_0x2620a7[_0x51f408(0x1db)]();}),_0x1a380e['on']('error',_0x179eae=>{const _0x54f5f4=_0x4650b9;_0x2620a7[_0x54f5f4(0x1a9)](_0x179eae);}),()=>{const _0x41f48f=_0x4650b9;_0x1a380e[_0x41f48f(0x1ca)]();};});}[_0x1a8223(0x1bb)](_0x4fccba){const _0x3d354c=_0x1a8223,_0x56c59b=this[_0x3d354c(0x1d3)]+'/ppt/generateOutline',_0x1d1396={'stream':!![],'length':_0x4fccba[_0x3d354c(0x1d8)],'lang':_0x4fccba['lang'],'prompt':_0x4fccba['prompt'],'subject':_0x4fccba['subject'],'dataUrl':_0x4fccba['dataUrl']};return this[_0x3d354c(0x1a5)]['post'](_0x56c59b,_0x1d1396,{'headers':{'Authorization':this[_0x3d354c(0x1b7)],'Accept':_0x3d354c(0x1ab),'Cache-Control':_0x3d354c(0x1dd),'Connection':_0x3d354c(0x1a8)},'responseType':_0x3d354c(0x1cf)})[_0x3d354c(0x1ac)]((0x0,operators_1[_0x3d354c(0x1c8)])(_0x2c68ec=>_0x2c68ec[_0x3d354c(0x1aa)]),(0x0,operators_1['mergeMap'])(_0x341ed6=>this[_0x3d354c(0x1c9)](_0x341ed6)));}['generateContent'](_0x2dc070){const _0x23ef6c=_0x1a8223,_0x1112ca=this[_0x23ef6c(0x1d3)]+_0x23ef6c(0x1a6);return this[_0x23ef6c(0x1a5)][_0x23ef6c(0x1b6)](_0x1112ca,{'templateId':_0x2dc070[_0x23ef6c(0x1c2)],'outlineMarkdown':_0x2dc070[_0x23ef6c(0x1ae)],'asyncGenPptx':!![],'prompt':_0x2dc070[_0x23ef6c(0x1a1)],'dataUrl':_0x2dc070['dataUrl']},{'headers':{'Authorization':this[_0x23ef6c(0x1b7)],'Accept':_0x23ef6c(0x1ab),'Cache-Control':_0x23ef6c(0x1dd),'Connection':_0x23ef6c(0x1a8)},'responseType':_0x23ef6c(0x1cf)})[_0x23ef6c(0x1ac)]((0x0,operators_1['map'])(_0x74bafd=>_0x74bafd[_0x23ef6c(0x1aa)]),(0x0,operators_1[_0x23ef6c(0x1d9)])(_0x9dbe78=>this[_0x23ef6c(0x1c9)](_0x9dbe78)));}async[_0x1a8223(0x1b9)](_0x5b1082){const _0x725ba1=_0x1a8223,_0x222c94=this[_0x725ba1(0x1d3)]+_0x725ba1(0x1be),_0x6c0bc3=await this[_0x725ba1(0x1a5)]['get'](_0x222c94,{'params':{'pptId':_0x5b1082},'headers':{'Authorization':this['apiToken']}})['toPromise']();return _0x6c0bc3['data'];}};AipptService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x1a8223(0x1d2),[config_1[_0x1a8223(0x1bf)],axios_1[_0x1a8223(0x1d5)]])],AipptService),exports[_0x1a8223(0x1d4)]=AipptService;