'use strict';const _0x28a645=_0x2f19;function _0x2f19(_0x31a981,_0x1c5b5b){const _0x47454f=_0x4745();return _0x2f19=function(_0x2f199c,_0x4acc3a){_0x2f199c=_0x2f199c-0x1cf;let _0x497018=_0x47454f[_0x2f199c];return _0x497018;},_0x2f19(_0x31a981,_0x1c5b5b);}(function(_0x200be9,_0x46f58a){const _0x359f84=_0x2f19,_0x58c642=_0x200be9();while(!![]){try{const _0x31fb53=-parseInt(_0x359f84(0x1f0))/0x1*(parseInt(_0x359f84(0x1e7))/0x2)+-parseInt(_0x359f84(0x202))/0x3*(parseInt(_0x359f84(0x1e5))/0x4)+parseInt(_0x359f84(0x1f7))/0x5+parseInt(_0x359f84(0x1d0))/0x6*(parseInt(_0x359f84(0x1fa))/0x7)+parseInt(_0x359f84(0x1e4))/0x8*(parseInt(_0x359f84(0x20a))/0x9)+-parseInt(_0x359f84(0x203))/0xa+-parseInt(_0x359f84(0x1e9))/0xb*(parseInt(_0x359f84(0x1e1))/0xc);if(_0x31fb53===_0x46f58a)break;else _0x58c642['push'](_0x58c642['shift']());}catch(_0x2c3836){_0x58c642['push'](_0x58c642['shift']());}}}(_0x4745,0xa05c3));function _0x4745(){const _0x70462a=['__metadata','Logger','user','CACHE_DURATION','3rJevkq','append','error','function','Search\x20API\x20error:\x20','../chat/chat.service','design:paramtypes','1441145lMXvcq','GlobalConfigService','https://www.coderutil.com/api/resou/v1/toutiao','20258vcMGho','research','globalConfigService','chatProcess','Search\x20error:\x20','now','hotSearchAccessKey','decorate','21qVfDLK','2026390nPOZcr','hotSearchCache','message','chatService','setHeader','Hot\x20search\x20API\x20keys\x20not\x20configured','object','963imLnyK','results','length','/search','model','SearchService','../models/models.service','HTTP\x20error!\x20status:\x20','1668XPVmHZ','getConfigs','searchPlatformUrl','getCurrentModelKeyInfo','data','stringify','ChatService','defineProperty','search','\x20images','slice','searchWithExternalAPI','status','getOwnPropertyDescriptor','application/octet-stream;\x20charset=utf-8','searchParams','modelsService','1897248VNhNWx','../globalConfig/globalConfig.service','Model\x20key\x20not\x20found.\x20Please\x20check\x20your\x20model\x20configuration.','57248BKmAtc','462728hZyPBV','end','20734vZbZNG','fetchHotSearches','11eBqWFK','GET','json'];_0x4745=function(){return _0x70462a;};return _0x4745();}var __decorate=this&&this['__decorate']||function(_0x41dd24,_0xce7d3c,_0x50b941,_0x392f06){const _0x43c156=_0x2f19;var _0x1d2580=arguments[_0x43c156(0x20c)],_0x3e156b=_0x1d2580<0x3?_0xce7d3c:_0x392f06===null?_0x392f06=Object[_0x43c156(0x1dd)](_0xce7d3c,_0x50b941):_0x392f06,_0x72f63d;if(typeof Reflect===_0x43c156(0x209)&&typeof Reflect[_0x43c156(0x201)]===_0x43c156(0x1f3))_0x3e156b=Reflect[_0x43c156(0x201)](_0x41dd24,_0xce7d3c,_0x50b941,_0x392f06);else{for(var _0x3a0069=_0x41dd24[_0x43c156(0x20c)]-0x1;_0x3a0069>=0x0;_0x3a0069--)if(_0x72f63d=_0x41dd24[_0x3a0069])_0x3e156b=(_0x1d2580<0x3?_0x72f63d(_0x3e156b):_0x1d2580>0x3?_0x72f63d(_0xce7d3c,_0x50b941,_0x3e156b):_0x72f63d(_0xce7d3c,_0x50b941))||_0x3e156b;}return _0x1d2580>0x3&&_0x3e156b&&Object[_0x43c156(0x1d7)](_0xce7d3c,_0x50b941,_0x3e156b),_0x3e156b;},__metadata=this&&this[_0x28a645(0x1ec)]||function(_0x1fc056,_0x5e8a2d){const _0x2c1727=_0x28a645;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x2c1727(0x1f3))return Reflect['metadata'](_0x1fc056,_0x5e8a2d);};Object[_0x28a645(0x1d7)](exports,'__esModule',{'value':!![]}),exports['SearchService']=void 0x0;const common_1=require('@nestjs/common'),globalConfig_service_1=require(_0x28a645(0x1e2)),chat_service_1=require(_0x28a645(0x1f5)),models_service_1=require(_0x28a645(0x210));let SearchService=class SearchService{constructor(_0x5789f8,_0x407686,_0x13b5d1){const _0x4822cc=_0x28a645;this['globalConfigService']=_0x5789f8,this[_0x4822cc(0x206)]=_0x407686,this[_0x4822cc(0x1e0)]=_0x13b5d1,this[_0x4822cc(0x204)]=null,this[_0x4822cc(0x1ef)]=0xa*0x3c*0x3e8;}async['searchWithExternalAPI'](_0x42ebc6){const _0x452205=_0x28a645;try{const {searchPlatformUrl:_0x3d0ab5}=await this[_0x452205(0x1fc)][_0x452205(0x1d1)]([_0x452205(0x1d2)]),_0x4406e9=new URL(_0x3d0ab5+_0x452205(0x20d));_0x4406e9[_0x452205(0x1df)]['append']('q',_0x42ebc6),_0x4406e9['searchParams'][_0x452205(0x1f1)]('format',_0x452205(0x1eb));const _0xad64f7=await fetch(_0x4406e9['toString'](),{'method':_0x452205(0x1ea)});if(!_0xad64f7['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0xad64f7[_0x452205(0x1dc)]);const _0x3155f9=await _0xad64f7[_0x452205(0x1eb)]();return _0x3155f9[_0x452205(0x20b)]||[];}catch(_0x5bd2d7){common_1['Logger'][_0x452205(0x1f2)](_0x452205(0x1f4)+_0x5bd2d7['message'],_0x452205(0x20f));throw _0x5bd2d7;}}async[_0x28a645(0x1e8)](){const _0x94419d=_0x28a645,_0x5bf75a=await this[_0x94419d(0x1fc)]['getConfigs']([_0x94419d(0x200),'hotSearchSecretKey']),_0x276c69=_0x5bf75a===null||_0x5bf75a===void 0x0?void 0x0:_0x5bf75a[_0x94419d(0x200)],_0x24631a=_0x5bf75a===null||_0x5bf75a===void 0x0?void 0x0:_0x5bf75a['hotSearchSecretKey'];if(!_0x276c69||!_0x24631a)throw new Error(_0x94419d(0x208));const _0x5d872d=await fetch(_0x94419d(0x1f9),{'method':_0x94419d(0x1ea),'headers':{'access-key':_0x276c69,'secret-key':_0x24631a}});if(!_0x5d872d['ok'])throw new Error(_0x94419d(0x1cf)+_0x5d872d[_0x94419d(0x1dc)]);return await _0x5d872d[_0x94419d(0x1eb)]();}async['getHotSearches'](){const _0x5c307e=_0x28a645;try{const _0x28e6d3=Date[_0x5c307e(0x1ff)]();if(this[_0x5c307e(0x204)]&&_0x28e6d3-this[_0x5c307e(0x204)]['timestamp']<this[_0x5c307e(0x1ef)])return this['hotSearchCache'][_0x5c307e(0x1d4)];const _0x55c690=await this[_0x5c307e(0x1e8)]();return this['hotSearchCache']={'data':_0x55c690,'timestamp':_0x28e6d3},_0x55c690;}catch(_0x22b8b2){if(this[_0x5c307e(0x204)])return this['hotSearchCache'][_0x5c307e(0x1d4)];throw _0x22b8b2;}}async[_0x28a645(0x1d8)](_0x55ec61,_0x5b43bb,_0x1fc0a1){const _0x1f4aac=_0x28a645,{prompt:_0x385f72,model:_0x48fd03,mode:_0x5ec32f,parentMessageId:_0x17c658}=_0x55ec61;try{if(!_0x5b43bb[_0x1f4aac(0x1ee)])throw new Error('User\x20not\x20authenticated');_0x1fc0a1[_0x1f4aac(0x207)]('Content-type',_0x1f4aac(0x1de));if(_0x17c658){const _0x393b0e=await this['modelsService'][_0x1f4aac(0x1d3)](_0x48fd03);if(!_0x393b0e)throw new Error(_0x1f4aac(0x1e3));const _0x5ba61a=await this['chatService'][_0x1f4aac(0x1fd)]({'prompt':_0x385f72,'model':_0x393b0e[_0x1f4aac(0x20e)],'options':{'parentMessageId':_0x17c658,'usingNetwork':!![]}},_0x5b43bb,_0x1fc0a1);_0x5ba61a&&_0x5ba61a['id']&&_0x1fc0a1['write']('\x0a'+JSON[_0x1f4aac(0x1d5)]({'parentMessageId':_0x5ba61a['id']}));}else{const _0x57ba33=await this[_0x1f4aac(0x1db)](_0x385f72);_0x1fc0a1['write'](JSON['stringify']({'context':_0x57ba33[_0x1f4aac(0x1da)](0x0,0x14)}));if(_0x5ec32f==='deep'||_0x5ec32f===_0x1f4aac(0x1fb)){const _0x1048c3=await this['searchWithExternalAPI'](_0x385f72+_0x1f4aac(0x1d9));_0x1fc0a1['write']('\x0a'+JSON[_0x1f4aac(0x1d5)]({'images':_0x1048c3[_0x1f4aac(0x1da)](0x0,0x5)}));}}_0x1fc0a1[_0x1f4aac(0x1e6)]();}catch(_0x2b79f7){common_1[_0x1f4aac(0x1ed)][_0x1f4aac(0x1f2)](_0x1f4aac(0x1fe)+_0x2b79f7[_0x1f4aac(0x205)],_0x1f4aac(0x20f));throw _0x2b79f7;}}};SearchService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x28a645(0x1f6),[globalConfig_service_1[_0x28a645(0x1f8)],chat_service_1[_0x28a645(0x1d6)],models_service_1['ModelsService']])],SearchService),exports[_0x28a645(0x20f)]=SearchService;