'use strict';const _0x5d8c95=_0x5036;function _0x5036(_0x3b24e8,_0x63437f){const _0x522cd4=_0x522c();return _0x5036=function(_0x5036a8,_0x3c08c9){_0x5036a8=_0x5036a8-0xa4;let _0x3efc65=_0x522cd4[_0x5036a8];return _0x3efc65;},_0x5036(_0x3b24e8,_0x63437f);}(function(_0x5ae13e,_0x5c7902){const _0x4c5961=_0x5036,_0x1a841e=_0x5ae13e();while(!![]){try{const _0x1348e2=parseInt(_0x4c5961(0xc8))/0x1+-parseInt(_0x4c5961(0xe8))/0x2*(-parseInt(_0x4c5961(0xce))/0x3)+parseInt(_0x4c5961(0xcc))/0x4+parseInt(_0x4c5961(0xb5))/0x5*(parseInt(_0x4c5961(0xef))/0x6)+-parseInt(_0x4c5961(0xee))/0x7+parseInt(_0x4c5961(0xde))/0x8*(-parseInt(_0x4c5961(0xea))/0x9)+-parseInt(_0x4c5961(0xd0))/0xa;if(_0x1348e2===_0x5c7902)break;else _0x1a841e['push'](_0x1a841e['shift']());}catch(_0x585952){_0x1a841e['push'](_0x1a841e['shift']());}}}(_0x522c,0x73e8e));var __decorate=this&&this[_0x5d8c95(0xbb)]||function(_0x84212e,_0x34ddf5,_0x4ab53f,_0x4a9ff8){const _0x132213=_0x5d8c95;var _0x425261=arguments[_0x132213(0xa4)],_0x422281=_0x425261<0x3?_0x34ddf5:_0x4a9ff8===null?_0x4a9ff8=Object['getOwnPropertyDescriptor'](_0x34ddf5,_0x4ab53f):_0x4a9ff8,_0x1bad7e;if(typeof Reflect===_0x132213(0xa6)&&typeof Reflect[_0x132213(0xc2)]===_0x132213(0xcb))_0x422281=Reflect['decorate'](_0x84212e,_0x34ddf5,_0x4ab53f,_0x4a9ff8);else{for(var _0x544271=_0x84212e[_0x132213(0xa4)]-0x1;_0x544271>=0x0;_0x544271--)if(_0x1bad7e=_0x84212e[_0x544271])_0x422281=(_0x425261<0x3?_0x1bad7e(_0x422281):_0x425261>0x3?_0x1bad7e(_0x34ddf5,_0x4ab53f,_0x422281):_0x1bad7e(_0x34ddf5,_0x4ab53f))||_0x422281;}return _0x425261>0x3&&_0x422281&&Object['defineProperty'](_0x34ddf5,_0x4ab53f,_0x422281),_0x422281;},__metadata=this&&this['__metadata']||function(_0x2ed17f,_0x42977d){const _0x4b1654=_0x5d8c95;if(typeof Reflect===_0x4b1654(0xa6)&&typeof Reflect[_0x4b1654(0xdc)]===_0x4b1654(0xcb))return Reflect[_0x4b1654(0xdc)](_0x2ed17f,_0x42977d);};Object[_0x5d8c95(0xe2)](exports,_0x5d8c95(0xb7),{'value':!![]}),exports[_0x5d8c95(0xc9)]=void 0x0;const utils_1=require(_0x5d8c95(0xc6)),common_1=require(_0x5d8c95(0xa7)),axios_1=require(_0x5d8c95(0xb3)),globalConfig_service_1=require(_0x5d8c95(0xdf));let OpenAIChatService=class OpenAIChatService{constructor(_0x3f824e){this['globalConfigService']=_0x3f824e;}async['openAIChat'](_0x4494b2,_0x4c6274){const _0x5c737b=_0x5d8c95,{onFailure:_0x1a8e2f,onProgress:_0x2ee0ed,apiKey:_0x191b34,model:_0x22efaf,proxyUrl:_0x68f30,modelName:_0x375914,timeout:_0xdba48c,chatId:_0x170b52,isFileUpload:_0x47043c,modelAvatar:_0x508426,temperature:_0x4f30c7,abortController:_0x82a388}=_0x4c6274;let _0x5bb459={'text':'','model':'','modelName':_0x375914,'chatId':_0x170b52,'answer':'','errMsg':'','modelAvatar':_0x508426};const _0x5b80d7=Object[_0x5c737b(0xf0)]({'model':_0x22efaf,'messages':_0x4494b2},_0x47043c===0x2&&{'max_tokens':0x800});_0x5b80d7[_0x5c737b(0xc4)]=!![],_0x5b80d7[_0x5c737b(0xb6)]=_0x4f30c7;const _0x1d9bf7={'method':'POST','url':_0x68f30+_0x5c737b(0xd4),'responseType':_0x5c737b(0xc4),'timeout':_0xdba48c,'headers':{'Content-Type':'application/json','Authorization':_0x5c737b(0xac)+_0x191b34},'data':_0x5b80d7},_0x730d8f=await this['sanitizeOptionsForLogging'](_0x1d9bf7);console['log'](_0x5c737b(0xd7),JSON[_0x5c737b(0xaa)](_0x730d8f,null,0x2),_0x5c737b(0xb9)),console['log'](_0x5c737b(0xd7),JSON['stringify'](_0x730d8f,null,0x2),_0x5c737b(0xb9));try{const _0x3c0282=await(0x0,axios_1[_0x5c737b(0xb0)])(_0x1d9bf7),_0x521a32=_0x3c0282['data'];let _0xafa935='';return await new Promise((_0x17b3bd,_0x487776)=>{const _0x54b382=_0x5c737b;_0x521a32['on'](_0x54b382(0xd2),_0x2482c4=>{const _0x29c11f=_0x54b382;_0xafa935+=_0x2482c4[_0x29c11f(0xca)]();let _0x43192e=_0xafa935['split']('\x0a');_0xafa935=_0x43192e[_0x29c11f(0xe5)](),_0x43192e['forEach'](_0x3a638d=>{const _0x55f13d=_0x29c11f;var _0x4e25f1,_0x4ddb6b;if(_0x3a638d[_0x55f13d(0xc5)]()===_0x55f13d(0xbf)){console[_0x55f13d(0xeb)]('处理结束信号\x20[DONE]'),_0x17b3bd(_0x5bb459);return;}if(_0x3a638d['startsWith'](_0x55f13d(0xdd)))try{const _0x47441c=_0x3a638d[_0x55f13d(0xbc)](0x6)[_0x55f13d(0xc5)]();if(_0x47441c){const _0x54140d=JSON[_0x55f13d(0xcd)](_0x47441c),_0x44de1e=((_0x4ddb6b=(_0x4e25f1=_0x54140d['choices'][0x0])===null||_0x4e25f1===void 0x0?void 0x0:_0x4e25f1[_0x55f13d(0xa8)])===null||_0x4ddb6b===void 0x0?void 0x0:_0x4ddb6b['content'])||'';_0x5bb459['answer']+=_0x44de1e,_0x2ee0ed===null||_0x2ee0ed===void 0x0?void 0x0:_0x2ee0ed({'text':_0x44de1e,'answer':_0x5bb459[_0x55f13d(0xae)]});}}catch(_0x1403ee){console['error']('Error\x20parsing\x20line:',_0x3a638d,_0x1403ee);}});}),_0x521a32['on'](_0x54b382(0xba),()=>{_0x17b3bd(_0x5bb459);}),_0x521a32['on'](_0x54b382(0xc7),_0x1ee588=>{_0x487776(_0x1ee588);}),_0x82a388[_0x54b382(0xd9)][_0x54b382(0xab)]('abort',()=>{_0x17b3bd(_0x5bb459);});}),_0x5bb459;}catch(_0x5a882a){return _0x5bb459['errMsg']=(0x0,utils_1['handleError'])(_0x5a882a),common_1[_0x5c737b(0xd5)]['error'](_0x5bb459[_0x5c737b(0xda)]),_0x1a8e2f(_0x5bb459),_0x5bb459;}}async[_0x5d8c95(0xa5)](_0xb813cc){const _0x12af8e=_0x5d8c95,_0x17b48e=JSON[_0x12af8e(0xcd)](JSON['stringify'](_0xb813cc));if(_0x17b48e[_0x12af8e(0xd3)]&&_0x17b48e['headers'][_0x12af8e(0xe6)]){const _0x2f3d7e=_0x17b48e[_0x12af8e(0xd3)][_0x12af8e(0xe6)];if(_0x2f3d7e['startsWith']('Bearer\x20')){const _0x1ce2ed=_0x2f3d7e['slice'](0x7);_0x1ce2ed[_0x12af8e(0xa4)]>0xa&&(_0x17b48e[_0x12af8e(0xd3)][_0x12af8e(0xe6)]=_0x12af8e(0xac)+_0x1ce2ed[_0x12af8e(0xbc)](0x0,0x5)+_0x12af8e(0xe3)+_0x1ce2ed[_0x12af8e(0xbc)](-0x4));}}return _0x17b48e[_0x12af8e(0xd2)]&&_0x17b48e[_0x12af8e(0xd2)][_0x12af8e(0xed)]&&Array['isArray'](_0x17b48e['data'][_0x12af8e(0xed)])&&(_0x17b48e['data']['messages']=_0x17b48e[_0x12af8e(0xd2)][_0x12af8e(0xed)]['map'](_0x1b6bdf=>{const _0x284a8f=_0x12af8e;return _0x1b6bdf['content']&&Array[_0x284a8f(0xec)](_0x1b6bdf['content'])&&(_0x1b6bdf[_0x284a8f(0xb8)]=_0x1b6bdf[_0x284a8f(0xb8)][_0x284a8f(0xbd)](_0x5b0742=>{const _0x4f65bf=_0x284a8f;return _0x5b0742[_0x4f65bf(0xb2)]==='image_url'&&_0x5b0742[_0x4f65bf(0xc1)]&&_0x5b0742['image_url'][_0x4f65bf(0xd8)]&&(_0x5b0742[_0x4f65bf(0xc1)][_0x4f65bf(0xd8)]=_0x4f65bf(0xd1)),_0x5b0742;})),_0x1b6bdf;})),_0x17b48e;}async[_0x5d8c95(0xd6)](_0x4d1c89,_0x5f0b0f,_0x2c0980){const _0x533e50=_0x5d8c95,{openaiBaseUrl:openaiBaseUrl='',openaiBaseKey:openaiBaseKey='',openaiBaseModel:_0x3ddf96}=await this['globalConfigService'][_0x533e50(0xb4)]([_0x533e50(0xc0),_0x533e50(0xc3),_0x533e50(0xcf)]),_0x5e49ba=openaiBaseKey,_0x3a04f=openaiBaseUrl;let _0x3757e1=[];_0x5f0b0f&&_0x3757e1[_0x533e50(0xf1)]({'role':_0x533e50(0xdb),'content':_0x5f0b0f});_0x2c0980&&_0x2c0980[_0x533e50(0xa4)]>0x0?_0x3757e1=_0x3757e1[_0x533e50(0xbe)](_0x2c0980):_0x3757e1[_0x533e50(0xf1)]({'role':_0x533e50(0xe1),'content':_0x4d1c89});const _0xca0410={'method':_0x533e50(0xb1),'url':_0x3a04f+'/v1/chat/completions','headers':{'Content-Type':_0x533e50(0xe0),'Authorization':'Bearer\x20'+_0x5e49ba},'data':{'model':_0x3ddf96||'gpt-3.5-turbo-0125','messages':_0x3757e1}};try{const _0x3cc912=await(0x0,axios_1[_0x533e50(0xb0)])(_0xca0410);return common_1[_0x533e50(0xd5)]['log'](_0x533e50(0xe7)+(_0x3cc912===null||_0x3cc912===void 0x0?void 0x0:_0x3cc912[_0x533e50(0xd2)][_0x533e50(0xe9)][0x0][_0x533e50(0xa9)][_0x533e50(0xb8)]),'ChatService'),_0x3cc912===null||_0x3cc912===void 0x0?void 0x0:_0x3cc912['data'][_0x533e50(0xe9)][0x0][_0x533e50(0xa9)]['content'];}catch(_0x31375e){console['log']('error:\x20',_0x31375e);}}};OpenAIChatService=__decorate([(0x0,common_1[_0x5d8c95(0xad)])(),__metadata(_0x5d8c95(0xe4),[globalConfig_service_1[_0x5d8c95(0xaf)]])],OpenAIChatService),exports[_0x5d8c95(0xc9)]=OpenAIChatService;function _0x522c(){const _0x1eef7=['user','defineProperty','****','design:paramtypes','pop','Authorization','全局模型调用成功,\x20返回结果:\x20','2ZnqXxV','choices','18LiYaUZ','log','isArray','messages','566041SNnUhZ','30954qEaNFu','assign','push','length','sanitizeOptionsForLogging','object','@nestjs/common','delta','message','stringify','addEventListener','Bearer\x20','Injectable','answer','GlobalConfigService','default','POST','type','axios','getConfigs','610CZKGlC','temperature','__esModule','content','ChatService','end','__decorate','slice','map','concat','data:\x20[DONE]','openaiBaseKey','image_url','decorate','openaiBaseUrl','stream','trim','../../common/utils','error','374988RaUHtu','OpenAIChatService','toString','function','447424JhASIz','parse','1218381miaqvP','openaiBaseModel','852640QiKXBj','data:image/***;base64\x20...\x20...','data','headers','/v1/chat/completions','Logger','chatFree','请求配置:','url','signal','errMsg','system','metadata','data:\x20','3525904KgdmtX','../globalConfig/globalConfig.service','application/json'];_0x522c=function(){return _0x1eef7;};return _0x522c();}