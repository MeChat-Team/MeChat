'use strict';const _0x5b6174=_0xd71b;(function(_0x3cb858,_0x52bfd8){const _0x3938dd=_0xd71b,_0x329469=_0x3cb858();while(!![]){try{const _0x565ad9=parseInt(_0x3938dd(0xb5))/0x1*(parseInt(_0x3938dd(0xba))/0x2)+-parseInt(_0x3938dd(0xd2))/0x3+-parseInt(_0x3938dd(0x94))/0x4*(parseInt(_0x3938dd(0x91))/0x5)+-parseInt(_0x3938dd(0xca))/0x6*(parseInt(_0x3938dd(0xb7))/0x7)+parseInt(_0x3938dd(0xa5))/0x8*(parseInt(_0x3938dd(0xb3))/0x9)+-parseInt(_0x3938dd(0xbe))/0xa+parseInt(_0x3938dd(0xbd))/0xb;if(_0x565ad9===_0x52bfd8)break;else _0x329469['push'](_0x329469['shift']());}catch(_0x57dd4c){_0x329469['push'](_0x329469['shift']());}}}(_0x2f3f,0x189e0));function _0x2f3f(){const _0x52801d=['ChatService','parse','__decorate','65HyNBHd','error:\x20','/v1/chat/completions','41068ilBHVM','sanitizeOptionsForLogging','stringify','log','startsWith','design:paramtypes','system','concat','push','../../common/utils','forEach','addEventListener','defineProperty','type','getOwnPropertyDescriptor','end','url','8dxOZXz','gpt-3.5-turbo-0125','Logger','decorate','data:image/***;base64\x20...\x20...','OpenAIChatService','user','split','Injectable','message','object','data:\x20','****','application/json','831807BERwmH','axios','189mQuTLM','toString','7xNawBC','globalConfigService','default','1918AeqvRP','messages','content','3152413stnzVM','87450kyYTAO','全局模型调用成功,\x20返回结果:\x20','delta','data','slice','temperature','openaiBaseKey','Bearer\x20','__esModule','__metadata','headers','abort','751596sqhsBA','image_url','isArray','errMsg','Authorization','trim','openaiBaseUrl','../globalConfig/globalConfig.service','575829TwucGW','choices','openAIChat','Error\x20parsing\x20line:','请求配置:','POST','map','function','error','处理结束信号\x20[DONE]'];_0x2f3f=function(){return _0x52801d;};return _0x2f3f();}function _0xd71b(_0x1d1b24,_0x4f9511){const _0x2f3f25=_0x2f3f();return _0xd71b=function(_0xd71b06,_0x10c8f5){_0xd71b06=_0xd71b06-0x91;let _0x29185f=_0x2f3f25[_0xd71b06];return _0x29185f;},_0xd71b(_0x1d1b24,_0x4f9511);}var __decorate=this&&this[_0x5b6174(0xde)]||function(_0x36d53e,_0x59e077,_0x1dde50,_0x5ec185){const _0x35516b=_0x5b6174;var _0x3b04d5=arguments['length'],_0x53367a=_0x3b04d5<0x3?_0x59e077:_0x5ec185===null?_0x5ec185=Object[_0x35516b(0xa2)](_0x59e077,_0x1dde50):_0x5ec185,_0x507e9b;if(typeof Reflect===_0x35516b(0xaf)&&typeof Reflect[_0x35516b(0xa8)]===_0x35516b(0xd9))_0x53367a=Reflect[_0x35516b(0xa8)](_0x36d53e,_0x59e077,_0x1dde50,_0x5ec185);else{for(var _0x46c8d2=_0x36d53e['length']-0x1;_0x46c8d2>=0x0;_0x46c8d2--)if(_0x507e9b=_0x36d53e[_0x46c8d2])_0x53367a=(_0x3b04d5<0x3?_0x507e9b(_0x53367a):_0x3b04d5>0x3?_0x507e9b(_0x59e077,_0x1dde50,_0x53367a):_0x507e9b(_0x59e077,_0x1dde50))||_0x53367a;}return _0x3b04d5>0x3&&_0x53367a&&Object['defineProperty'](_0x59e077,_0x1dde50,_0x53367a),_0x53367a;},__metadata=this&&this[_0x5b6174(0xc7)]||function(_0x275011,_0x2435a9){const _0xb7e2f2=_0x5b6174;if(typeof Reflect===_0xb7e2f2(0xaf)&&typeof Reflect['metadata']===_0xb7e2f2(0xd9))return Reflect['metadata'](_0x275011,_0x2435a9);};Object[_0x5b6174(0xa0)](exports,_0x5b6174(0xc6),{'value':!![]}),exports[_0x5b6174(0xaa)]=void 0x0;const utils_1=require(_0x5b6174(0x9d)),common_1=require('@nestjs/common'),axios_1=require(_0x5b6174(0xb4)),globalConfig_service_1=require(_0x5b6174(0xd1));let OpenAIChatService=class OpenAIChatService{constructor(_0x17ddbb){const _0x4c3379=_0x5b6174;this[_0x4c3379(0xb8)]=_0x17ddbb;}async[_0x5b6174(0xd4)](_0x333f09,_0x1cbe58){const _0x3d47f4=_0x5b6174,{onFailure:_0x3795ed,onProgress:_0x178fee,apiKey:_0x3991c3,model:_0x2b0738,proxyUrl:_0x595bdc,modelName:_0x3badd8,timeout:_0x24ebbb,chatId:_0x22f2cc,isFileUpload:_0x13b9bb,modelAvatar:_0x245fcb,temperature:_0x53e059,abortController:_0x24fcf7}=_0x1cbe58;let _0x3dc2e3={'text':'','model':'','modelName':_0x3badd8,'chatId':_0x22f2cc,'answer':'','errMsg':'','modelAvatar':_0x245fcb};const _0x406284=Object['assign']({'model':_0x2b0738,'messages':_0x333f09},_0x13b9bb===0x2&&{'max_tokens':0x800});_0x406284['stream']=!![],_0x406284[_0x3d47f4(0xc3)]=_0x53e059;const _0x4360aa={'method':_0x3d47f4(0xd7),'url':_0x595bdc+'/v1/chat/completions','responseType':'stream','timeout':_0x24ebbb,'headers':{'Content-Type':'application/json','Authorization':_0x3d47f4(0xc5)+_0x3991c3},'data':_0x406284},_0x1800ae=await this[_0x3d47f4(0x95)](_0x4360aa);console[_0x3d47f4(0x97)](_0x3d47f4(0xd6),JSON[_0x3d47f4(0x96)](_0x1800ae,null,0x2),'ChatService'),console['log'](_0x3d47f4(0xd6),JSON[_0x3d47f4(0x96)](_0x1800ae,null,0x2),_0x3d47f4(0xdc));try{const _0x3bd899=await(0x0,axios_1[_0x3d47f4(0xb9)])(_0x4360aa),_0x25c12a=_0x3bd899[_0x3d47f4(0xc1)];let _0x4cf1cd='';return await new Promise((_0x1a47a3,_0x20ba1c)=>{const _0x29225a=_0x3d47f4;_0x25c12a['on'](_0x29225a(0xc1),_0x45b828=>{const _0x3aa641=_0x29225a;_0x4cf1cd+=_0x45b828[_0x3aa641(0xb6)]();let _0x8424c3=_0x4cf1cd[_0x3aa641(0xac)]('\x0a');_0x4cf1cd=_0x8424c3['pop'](),_0x8424c3[_0x3aa641(0x9e)](_0x43a2c4=>{const _0xc6df93=_0x3aa641;var _0x204cac,_0x3ebe27;if(_0x43a2c4['trim']()==='data:\x20[DONE]'){console[_0xc6df93(0x97)](_0xc6df93(0xdb)),_0x1a47a3(_0x3dc2e3);return;}if(_0x43a2c4['startsWith'](_0xc6df93(0xb0)))try{const _0x1b2969=_0x43a2c4[_0xc6df93(0xc2)](0x6)[_0xc6df93(0xcf)]();if(_0x1b2969){const _0x111421=JSON[_0xc6df93(0xdd)](_0x1b2969),_0x5f1604=((_0x3ebe27=(_0x204cac=_0x111421[_0xc6df93(0xd3)][0x0])===null||_0x204cac===void 0x0?void 0x0:_0x204cac[_0xc6df93(0xc0)])===null||_0x3ebe27===void 0x0?void 0x0:_0x3ebe27[_0xc6df93(0xbc)])||'';_0x3dc2e3['answer']+=_0x5f1604,_0x178fee===null||_0x178fee===void 0x0?void 0x0:_0x178fee({'text':_0x5f1604,'answer':_0x3dc2e3['answer']});}}catch(_0x1140fe){console[_0xc6df93(0xda)](_0xc6df93(0xd5),_0x43a2c4,_0x1140fe);}});}),_0x25c12a['on'](_0x29225a(0xa3),()=>{_0x1a47a3(_0x3dc2e3);}),_0x25c12a['on'](_0x29225a(0xda),_0x3a9b3e=>{_0x20ba1c(_0x3a9b3e);}),_0x24fcf7['signal'][_0x29225a(0x9f)](_0x29225a(0xc9),()=>{_0x1a47a3(_0x3dc2e3);});}),_0x3dc2e3;}catch(_0x5a668c){return _0x3dc2e3[_0x3d47f4(0xcd)]=(0x0,utils_1['handleError'])(_0x5a668c),common_1[_0x3d47f4(0xa7)][_0x3d47f4(0xda)](_0x3dc2e3['errMsg']),_0x3795ed(_0x3dc2e3),_0x3dc2e3;}}async[_0x5b6174(0x95)](_0x2aaebf){const _0x360f1a=_0x5b6174,_0xec3881=JSON['parse'](JSON['stringify'](_0x2aaebf));if(_0xec3881[_0x360f1a(0xc8)]&&_0xec3881[_0x360f1a(0xc8)]['Authorization']){const _0x49d2c3=_0xec3881[_0x360f1a(0xc8)]['Authorization'];if(_0x49d2c3[_0x360f1a(0x98)](_0x360f1a(0xc5))){const _0x5ec88b=_0x49d2c3[_0x360f1a(0xc2)](0x7);_0x5ec88b['length']>0xa&&(_0xec3881[_0x360f1a(0xc8)][_0x360f1a(0xce)]=_0x360f1a(0xc5)+_0x5ec88b[_0x360f1a(0xc2)](0x0,0x5)+_0x360f1a(0xb1)+_0x5ec88b[_0x360f1a(0xc2)](-0x4));}}return _0xec3881[_0x360f1a(0xc1)]&&_0xec3881['data'][_0x360f1a(0xbb)]&&Array[_0x360f1a(0xcc)](_0xec3881[_0x360f1a(0xc1)]['messages'])&&(_0xec3881['data'][_0x360f1a(0xbb)]=_0xec3881[_0x360f1a(0xc1)][_0x360f1a(0xbb)]['map'](_0x290591=>{const _0x425bab=_0x360f1a;return _0x290591[_0x425bab(0xbc)]&&Array[_0x425bab(0xcc)](_0x290591[_0x425bab(0xbc)])&&(_0x290591[_0x425bab(0xbc)]=_0x290591[_0x425bab(0xbc)][_0x425bab(0xd8)](_0x2b4cd8=>{const _0x19d80d=_0x425bab;return _0x2b4cd8[_0x19d80d(0xa1)]===_0x19d80d(0xcb)&&_0x2b4cd8[_0x19d80d(0xcb)]&&_0x2b4cd8[_0x19d80d(0xcb)][_0x19d80d(0xa4)]&&(_0x2b4cd8[_0x19d80d(0xcb)][_0x19d80d(0xa4)]=_0x19d80d(0xa9)),_0x2b4cd8;})),_0x290591;})),_0xec3881;}async['chatFree'](_0x203c90,_0x2728de,_0x5a039e){const _0x2e391a=_0x5b6174,{openaiBaseUrl:openaiBaseUrl='',openaiBaseKey:openaiBaseKey='',openaiBaseModel:_0x4feae3}=await this[_0x2e391a(0xb8)]['getConfigs']([_0x2e391a(0xc4),_0x2e391a(0xd0),'openaiBaseModel']),_0x329ec0=openaiBaseKey,_0x45d8eb=openaiBaseUrl;let _0x3c49ed=[];_0x2728de&&_0x3c49ed['push']({'role':_0x2e391a(0x9a),'content':_0x2728de});_0x5a039e&&_0x5a039e['length']>0x0?_0x3c49ed=_0x3c49ed[_0x2e391a(0x9b)](_0x5a039e):_0x3c49ed[_0x2e391a(0x9c)]({'role':_0x2e391a(0xab),'content':_0x203c90});const _0x15a747={'method':_0x2e391a(0xd7),'url':_0x45d8eb+_0x2e391a(0x93),'headers':{'Content-Type':_0x2e391a(0xb2),'Authorization':_0x2e391a(0xc5)+_0x329ec0},'data':{'model':_0x4feae3||_0x2e391a(0xa6),'messages':_0x3c49ed}};try{const _0x42116b=await(0x0,axios_1['default'])(_0x15a747);return common_1['Logger'][_0x2e391a(0x97)](_0x2e391a(0xbf)+(_0x42116b===null||_0x42116b===void 0x0?void 0x0:_0x42116b['data'][_0x2e391a(0xd3)][0x0]['message'][_0x2e391a(0xbc)]),_0x2e391a(0xdc)),_0x42116b===null||_0x42116b===void 0x0?void 0x0:_0x42116b[_0x2e391a(0xc1)]['choices'][0x0][_0x2e391a(0xae)][_0x2e391a(0xbc)];}catch(_0x1568cb){console[_0x2e391a(0x97)](_0x2e391a(0x92),_0x1568cb);}}};OpenAIChatService=__decorate([(0x0,common_1[_0x5b6174(0xad)])(),__metadata(_0x5b6174(0x99),[globalConfig_service_1['GlobalConfigService']])],OpenAIChatService),exports[_0x5b6174(0xaa)]=OpenAIChatService;