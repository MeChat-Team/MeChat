'use strict';const _0x3c8811=_0x4e44;function _0x16c0(){const _0x2bffc5=['default','请求配置:','__metadata','__decorate','674468GVthla','type','image_url','Authorization','POST','decorate','****','ChatService','error','data:\x20[DONE]','design:paramtypes','Injectable','485415NxWHOd','errMsg','temperature','abort','function','isArray','3791010medPIy','messages','assign','32HOvGEF','choices','trim','../globalConfig/globalConfig.service','402102TVdeQd','forEach','content','map','40518CwzCCK','data:image/***;base64\x20...\x20...','gpt-3.5-turbo-0125','data','message','length','application/json','pop','stringify','parse','data:\x20','slice','toString','全局模型调用成功,\x20返回结果:\x20','concat','log','GlobalConfigService','5520TIQdLs','metadata','../../common/utils','url','push','defineProperty','globalConfigService','addEventListener','getConfigs','stream','Bearer\x20','chatFree','3NaIIrb','833276BlFEaO','sanitizeOptionsForLogging','Error\x20parsing\x20line:','处理结束信号\x20[DONE]','openAIChat','headers','split','error:\x20','object','__esModule','end','4264885dzsjMX','Logger','OpenAIChatService','system','startsWith'];_0x16c0=function(){return _0x2bffc5;};return _0x16c0();}(function(_0x255a37,_0x1da516){const _0x2986c7=_0x4e44,_0x553f26=_0x255a37();while(!![]){try{const _0x51325e=-parseInt(_0x2986c7(0xdc))/0x1+-parseInt(_0x2986c7(0xf5))/0x2+parseInt(_0x2986c7(0x116))/0x3*(parseInt(_0x2986c7(0x117))/0x4)+-parseInt(_0x2986c7(0xd3))/0x5+-parseInt(_0x2986c7(0xee))/0x6+parseInt(_0x2986c7(0xe8))/0x7*(parseInt(_0x2986c7(0xf1))/0x8)+parseInt(_0x2986c7(0xf9))/0x9*(parseInt(_0x2986c7(0x10a))/0xa);if(_0x51325e===_0x1da516)break;else _0x553f26['push'](_0x553f26['shift']());}catch(_0x5c7728){_0x553f26['push'](_0x553f26['shift']());}}}(_0x16c0,0x950a8));var __decorate=this&&this[_0x3c8811(0xdb)]||function(_0x38e963,_0x523544,_0x10cb81,_0x210c3a){const _0xdcec4e=_0x3c8811;var _0x8f2985=arguments[_0xdcec4e(0xfe)],_0x1799c0=_0x8f2985<0x3?_0x523544:_0x210c3a===null?_0x210c3a=Object['getOwnPropertyDescriptor'](_0x523544,_0x10cb81):_0x210c3a,_0xfff237;if(typeof Reflect===_0xdcec4e(0x11f)&&typeof Reflect[_0xdcec4e(0xe1)]==='function')_0x1799c0=Reflect['decorate'](_0x38e963,_0x523544,_0x10cb81,_0x210c3a);else{for(var _0x3ee58a=_0x38e963[_0xdcec4e(0xfe)]-0x1;_0x3ee58a>=0x0;_0x3ee58a--)if(_0xfff237=_0x38e963[_0x3ee58a])_0x1799c0=(_0x8f2985<0x3?_0xfff237(_0x1799c0):_0x8f2985>0x3?_0xfff237(_0x523544,_0x10cb81,_0x1799c0):_0xfff237(_0x523544,_0x10cb81))||_0x1799c0;}return _0x8f2985>0x3&&_0x1799c0&&Object['defineProperty'](_0x523544,_0x10cb81,_0x1799c0),_0x1799c0;},__metadata=this&&this[_0x3c8811(0xda)]||function(_0x142a5c,_0x3c6d49){const _0x470632=_0x3c8811;if(typeof Reflect==='object'&&typeof Reflect[_0x470632(0x10b)]===_0x470632(0xec))return Reflect[_0x470632(0x10b)](_0x142a5c,_0x3c6d49);};function _0x4e44(_0x1fccef,_0xce2ef5){const _0x16c00c=_0x16c0();return _0x4e44=function(_0x4e44b8,_0x5134f4){_0x4e44b8=_0x4e44b8-0xd3;let _0x48a8c1=_0x16c00c[_0x4e44b8];return _0x48a8c1;},_0x4e44(_0x1fccef,_0xce2ef5);}Object[_0x3c8811(0x10f)](exports,_0x3c8811(0x120),{'value':!![]}),exports[_0x3c8811(0xd5)]=void 0x0;const utils_1=require(_0x3c8811(0x10c)),common_1=require('@nestjs/common'),axios_1=require('axios'),globalConfig_service_1=require(_0x3c8811(0xf4));let OpenAIChatService=class OpenAIChatService{constructor(_0x2950ee){this['globalConfigService']=_0x2950ee;}async[_0x3c8811(0x11b)](_0x9992ba,_0x3a990e){const _0x5f3d22=_0x3c8811,{onFailure:_0x35d375,onProgress:_0x1cc4d1,apiKey:_0x7ca393,model:_0x38b231,proxyUrl:_0x21d4d6,modelName:_0x57191a,timeout:_0x25fa2c,chatId:_0x3139a7,isFileUpload:_0x880007,modelAvatar:_0x57d51c,temperature:_0x27c422,abortController:_0x2fc1bc}=_0x3a990e;let _0x21c96e={'text':'','model':'','modelName':_0x57191a,'chatId':_0x3139a7,'answer':'','errMsg':'','modelAvatar':_0x57d51c};const _0x414194=Object[_0x5f3d22(0xf0)]({'model':_0x38b231,'messages':_0x9992ba},_0x880007===0x2&&{'max_tokens':0x800});_0x414194['stream']=!![],_0x414194[_0x5f3d22(0xea)]=_0x27c422;const _0x5994d9={'method':_0x5f3d22(0xe0),'url':_0x21d4d6+'/v1/chat/completions','responseType':_0x5f3d22(0x113),'timeout':_0x25fa2c,'headers':{'Content-Type':_0x5f3d22(0xff),'Authorization':_0x5f3d22(0x114)+_0x7ca393},'data':_0x414194},_0x1df5aa=await this[_0x5f3d22(0x118)](_0x5994d9);console['log']('请求配置:',JSON['stringify'](_0x1df5aa,null,0x2),_0x5f3d22(0xe3)),console[_0x5f3d22(0x108)](_0x5f3d22(0xd9),JSON[_0x5f3d22(0x101)](_0x1df5aa,null,0x2),_0x5f3d22(0xe3));try{const _0x237e25=await(0x0,axios_1[_0x5f3d22(0xd8)])(_0x5994d9),_0x47ace3=_0x237e25[_0x5f3d22(0xfc)];let _0x82358c='';return await new Promise((_0x46fcde,_0x2f40e2)=>{const _0x3eb1e3=_0x5f3d22;_0x47ace3['on'](_0x3eb1e3(0xfc),_0x1fbb52=>{const _0x49acbb=_0x3eb1e3;_0x82358c+=_0x1fbb52[_0x49acbb(0x105)]();let _0x4b9487=_0x82358c[_0x49acbb(0x11d)]('\x0a');_0x82358c=_0x4b9487[_0x49acbb(0x100)](),_0x4b9487[_0x49acbb(0xf6)](_0x5578a9=>{const _0x2aee13=_0x49acbb;var _0x434476,_0x410a18;if(_0x5578a9[_0x2aee13(0xf3)]()===_0x2aee13(0xe5)){console[_0x2aee13(0x108)](_0x2aee13(0x11a)),_0x46fcde(_0x21c96e);return;}if(_0x5578a9['startsWith'](_0x2aee13(0x103)))try{const _0xb022c8=_0x5578a9[_0x2aee13(0x104)](0x6)['trim']();if(_0xb022c8){const _0x3719f8=JSON[_0x2aee13(0x102)](_0xb022c8),_0xf32e27=((_0x410a18=(_0x434476=_0x3719f8['choices'][0x0])===null||_0x434476===void 0x0?void 0x0:_0x434476['delta'])===null||_0x410a18===void 0x0?void 0x0:_0x410a18[_0x2aee13(0xf7)])||'';_0x21c96e['answer']+=_0xf32e27,_0x1cc4d1===null||_0x1cc4d1===void 0x0?void 0x0:_0x1cc4d1({'text':_0xf32e27,'answer':_0x21c96e['answer']});}}catch(_0x49ea0b){console[_0x2aee13(0xe4)](_0x2aee13(0x119),_0x5578a9,_0x49ea0b);}});}),_0x47ace3['on'](_0x3eb1e3(0x121),()=>{_0x46fcde(_0x21c96e);}),_0x47ace3['on'](_0x3eb1e3(0xe4),_0x665bed=>{_0x2f40e2(_0x665bed);}),_0x2fc1bc['signal'][_0x3eb1e3(0x111)](_0x3eb1e3(0xeb),()=>{_0x46fcde(_0x21c96e);});}),_0x21c96e;}catch(_0x5ae3ff){return _0x21c96e[_0x5f3d22(0xe9)]=(0x0,utils_1['handleError'])(_0x5ae3ff),common_1['Logger'][_0x5f3d22(0xe4)](_0x21c96e[_0x5f3d22(0xe9)]),_0x35d375(_0x21c96e),_0x21c96e;}}async['sanitizeOptionsForLogging'](_0x5adfd3){const _0xad8542=_0x3c8811,_0x20d474=JSON[_0xad8542(0x102)](JSON[_0xad8542(0x101)](_0x5adfd3));if(_0x20d474['headers']&&_0x20d474[_0xad8542(0x11c)][_0xad8542(0xdf)]){const _0x5aae23=_0x20d474[_0xad8542(0x11c)][_0xad8542(0xdf)];if(_0x5aae23[_0xad8542(0xd7)](_0xad8542(0x114))){const _0x3ef408=_0x5aae23['slice'](0x7);_0x3ef408[_0xad8542(0xfe)]>0xa&&(_0x20d474[_0xad8542(0x11c)][_0xad8542(0xdf)]=_0xad8542(0x114)+_0x3ef408[_0xad8542(0x104)](0x0,0x5)+_0xad8542(0xe2)+_0x3ef408[_0xad8542(0x104)](-0x4));}}return _0x20d474[_0xad8542(0xfc)]&&_0x20d474['data'][_0xad8542(0xef)]&&Array['isArray'](_0x20d474['data']['messages'])&&(_0x20d474[_0xad8542(0xfc)][_0xad8542(0xef)]=_0x20d474[_0xad8542(0xfc)][_0xad8542(0xef)][_0xad8542(0xf8)](_0xcd7267=>{const _0x2998e5=_0xad8542;return _0xcd7267[_0x2998e5(0xf7)]&&Array[_0x2998e5(0xed)](_0xcd7267[_0x2998e5(0xf7)])&&(_0xcd7267[_0x2998e5(0xf7)]=_0xcd7267[_0x2998e5(0xf7)][_0x2998e5(0xf8)](_0x476da4=>{const _0x4d4d35=_0x2998e5;return _0x476da4[_0x4d4d35(0xdd)]===_0x4d4d35(0xde)&&_0x476da4[_0x4d4d35(0xde)]&&_0x476da4[_0x4d4d35(0xde)][_0x4d4d35(0x10d)]&&(_0x476da4[_0x4d4d35(0xde)][_0x4d4d35(0x10d)]=_0x4d4d35(0xfa)),_0x476da4;})),_0xcd7267;})),_0x20d474;}async[_0x3c8811(0x115)](_0x5b9147,_0x15e5dd,_0x174c21){const _0x5af6a4=_0x3c8811,{openaiBaseUrl:openaiBaseUrl='',openaiBaseKey:openaiBaseKey='',openaiBaseModel:_0x3100d1}=await this[_0x5af6a4(0x110)][_0x5af6a4(0x112)](['openaiBaseKey','openaiBaseUrl','openaiBaseModel']),_0x52e719=openaiBaseKey,_0x1deb2e=openaiBaseUrl;let _0x451116=[];_0x15e5dd&&_0x451116[_0x5af6a4(0x10e)]({'role':_0x5af6a4(0xd6),'content':_0x15e5dd});_0x174c21&&_0x174c21[_0x5af6a4(0xfe)]>0x0?_0x451116=_0x451116[_0x5af6a4(0x107)](_0x174c21):_0x451116[_0x5af6a4(0x10e)]({'role':'user','content':_0x5b9147});const _0xe28ed9={'method':_0x5af6a4(0xe0),'url':_0x1deb2e+'/v1/chat/completions','headers':{'Content-Type':_0x5af6a4(0xff),'Authorization':_0x5af6a4(0x114)+_0x52e719},'data':{'model':_0x3100d1||_0x5af6a4(0xfb),'messages':_0x451116}};try{const _0x26ba18=await(0x0,axios_1[_0x5af6a4(0xd8)])(_0xe28ed9);return common_1[_0x5af6a4(0xd4)][_0x5af6a4(0x108)](_0x5af6a4(0x106)+(_0x26ba18===null||_0x26ba18===void 0x0?void 0x0:_0x26ba18['data'][_0x5af6a4(0xf2)][0x0][_0x5af6a4(0xfd)][_0x5af6a4(0xf7)]),'ChatService'),_0x26ba18===null||_0x26ba18===void 0x0?void 0x0:_0x26ba18[_0x5af6a4(0xfc)][_0x5af6a4(0xf2)][0x0][_0x5af6a4(0xfd)]['content'];}catch(_0x3f1572){console['log'](_0x5af6a4(0x11e),_0x3f1572);}}};OpenAIChatService=__decorate([(0x0,common_1[_0x3c8811(0xe7)])(),__metadata(_0x3c8811(0xe6),[globalConfig_service_1[_0x3c8811(0x109)]])],OpenAIChatService),exports['OpenAIChatService']=OpenAIChatService;