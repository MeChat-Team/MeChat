'use strict';const _0x10838d=_0x5e30;(function(_0x2d3732,_0x21fe4d){const _0xc5cba0=_0x5e30,_0x5c28ee=_0x2d3732();while(!![]){try{const _0x476588=-parseInt(_0xc5cba0(0x72))/0x1+-parseInt(_0xc5cba0(0x74))/0x2+-parseInt(_0xc5cba0(0x9e))/0x3*(parseInt(_0xc5cba0(0x81))/0x4)+parseInt(_0xc5cba0(0xaa))/0x5+-parseInt(_0xc5cba0(0xb3))/0x6+parseInt(_0xc5cba0(0x88))/0x7*(-parseInt(_0xc5cba0(0xb5))/0x8)+parseInt(_0xc5cba0(0x8f))/0x9;if(_0x476588===_0x21fe4d)break;else _0x5c28ee['push'](_0x5c28ee['shift']());}catch(_0x469ce4){_0x5c28ee['push'](_0x5c28ee['shift']());}}}(_0xe399,0xdfda8));var __decorate=this&&this[_0x10838d(0x7a)]||function(_0x263096,_0x3e887b,_0x390539,_0x106685){const _0x3a91b9=_0x10838d;var _0x59c045=arguments['length'],_0x20db2f=_0x59c045<0x3?_0x3e887b:_0x106685===null?_0x106685=Object['getOwnPropertyDescriptor'](_0x3e887b,_0x390539):_0x106685,_0x3bdb26;if(typeof Reflect===_0x3a91b9(0x8c)&&typeof Reflect[_0x3a91b9(0xa5)]===_0x3a91b9(0xa9))_0x20db2f=Reflect[_0x3a91b9(0xa5)](_0x263096,_0x3e887b,_0x390539,_0x106685);else{for(var _0x525cc5=_0x263096[_0x3a91b9(0xb4)]-0x1;_0x525cc5>=0x0;_0x525cc5--)if(_0x3bdb26=_0x263096[_0x525cc5])_0x20db2f=(_0x59c045<0x3?_0x3bdb26(_0x20db2f):_0x59c045>0x3?_0x3bdb26(_0x3e887b,_0x390539,_0x20db2f):_0x3bdb26(_0x3e887b,_0x390539))||_0x20db2f;}return _0x59c045>0x3&&_0x20db2f&&Object[_0x3a91b9(0x98)](_0x3e887b,_0x390539,_0x20db2f),_0x20db2f;},__metadata=this&&this[_0x10838d(0x73)]||function(_0xe6ded8,_0x5e458c){const _0x21fd1a=_0x10838d;if(typeof Reflect==='object'&&typeof Reflect[_0x21fd1a(0x71)]===_0x21fd1a(0xa9))return Reflect[_0x21fd1a(0x71)](_0xe6ded8,_0x5e458c);};function _0x5e30(_0x3b9e5f,_0x2abba4){const _0xe399cf=_0xe399();return _0x5e30=function(_0x5e3071,_0x2d6e83){_0x5e3071=_0x5e3071-0x70;let _0x4c0468=_0xe399cf[_0x5e3071];return _0x4c0468;},_0x5e30(_0x3b9e5f,_0x2abba4);}function _0xe399(){const _0x58e9b5=['openaiBaseUrl','Injectable','Logger','delta','push','4jVGISb','signal','map','data:\x20[DONE]','stringify','POST','getConfigs','14wOtrqC','axios','__esModule','parse','object','message','default','44679429hkJIax','globalConfigService','全局模型调用成功,\x20返回结果:\x20','****','sanitizeOptionsForLogging','../globalConfig/globalConfig.service','slice','user','trim','defineProperty','assign','OpenAIChatService','startsWith','concat','isArray','4749897TxnpuU','error:\x20','chatFree','content','type','error','GlobalConfigService','decorate','gpt-3.5-turbo-0125','errMsg','headers','function','5062125omsEhs','image_url','end','system','addEventListener','messages','处理结束信号\x20[DONE]','data','application/json','7802700vJvPZs','length','6077576KoiAHp','请求配置:','Authorization','openaiBaseModel','design:paramtypes','ChatService','url','openAIChat','metadata','203598FBTdxr','__metadata','906322xVfzzR','answer','Bearer\x20','temperature','choices','log','__decorate','Error\x20parsing\x20line:'];_0xe399=function(){return _0x58e9b5;};return _0xe399();}Object['defineProperty'](exports,_0x10838d(0x8a),{'value':!![]}),exports['OpenAIChatService']=void 0x0;const utils_1=require('../../common/utils'),common_1=require('@nestjs/common'),axios_1=require(_0x10838d(0x89)),globalConfig_service_1=require(_0x10838d(0x94));let OpenAIChatService=class OpenAIChatService{constructor(_0x1c80b9){const _0x1d2830=_0x10838d;this[_0x1d2830(0x90)]=_0x1c80b9;}async[_0x10838d(0x70)](_0x5cebb5,_0x96d2fc){const _0x5a6e08=_0x10838d,{onFailure:_0x537106,onProgress:_0x30b684,apiKey:_0xef2ec4,model:_0xbcdc50,proxyUrl:_0x54a896,modelName:_0x52f68a,timeout:_0x12ed1a,chatId:_0x48d906,isFileUpload:_0x389aff,modelAvatar:_0x420f9c,temperature:_0x4b7a84,abortController:_0x3b0d46}=_0x96d2fc;let _0x456e21={'text':'','model':'','modelName':_0x52f68a,'chatId':_0x48d906,'answer':'','errMsg':'','modelAvatar':_0x420f9c};const _0x4c7b3c=Object[_0x5a6e08(0x99)]({'model':_0xbcdc50,'messages':_0x5cebb5},_0x389aff===0x2&&{'max_tokens':0x800});_0x4c7b3c['stream']=!![],_0x4c7b3c[_0x5a6e08(0x77)]=_0x4b7a84;const _0x106383={'method':_0x5a6e08(0x86),'url':_0x54a896+'/v1/chat/completions','responseType':'stream','timeout':_0x12ed1a,'headers':{'Content-Type':'application/json','Authorization':_0x5a6e08(0x76)+_0xef2ec4},'data':_0x4c7b3c},_0x2430f0=await this['sanitizeOptionsForLogging'](_0x106383);console['log']('请求配置:',JSON[_0x5a6e08(0x85)](_0x2430f0,null,0x2),_0x5a6e08(0xba)),console[_0x5a6e08(0x79)](_0x5a6e08(0xb6),JSON[_0x5a6e08(0x85)](_0x2430f0,null,0x2),_0x5a6e08(0xba));try{const _0x22414f=await(0x0,axios_1[_0x5a6e08(0x8e)])(_0x106383),_0x344659=_0x22414f[_0x5a6e08(0xb1)];let _0x5ebde3='';return await new Promise((_0x415de9,_0x3074dc)=>{const _0x91c70c=_0x5a6e08;_0x344659['on'](_0x91c70c(0xb1),_0x407ac7=>{_0x5ebde3+=_0x407ac7['toString']();let _0x5f1445=_0x5ebde3['split']('\x0a');_0x5ebde3=_0x5f1445['pop'](),_0x5f1445['forEach'](_0x38329d=>{const _0x312881=_0x5e30;var _0x33a065,_0xf5b9f7;if(_0x38329d[_0x312881(0x97)]()===_0x312881(0x84)){console[_0x312881(0x79)](_0x312881(0xb0)),_0x415de9(_0x456e21);return;}if(_0x38329d['startsWith']('data:\x20'))try{const _0x436534=_0x38329d[_0x312881(0x95)](0x6)[_0x312881(0x97)]();if(_0x436534){const _0x374f11=JSON[_0x312881(0x8b)](_0x436534),_0x414770=((_0xf5b9f7=(_0x33a065=_0x374f11[_0x312881(0x78)][0x0])===null||_0x33a065===void 0x0?void 0x0:_0x33a065[_0x312881(0x7f)])===null||_0xf5b9f7===void 0x0?void 0x0:_0xf5b9f7[_0x312881(0xa1)])||'';_0x456e21[_0x312881(0x75)]+=_0x414770,_0x30b684===null||_0x30b684===void 0x0?void 0x0:_0x30b684({'text':_0x414770,'answer':_0x456e21['answer']});}}catch(_0x3799b4){console[_0x312881(0xa3)](_0x312881(0x7b),_0x38329d,_0x3799b4);}});}),_0x344659['on'](_0x91c70c(0xac),()=>{_0x415de9(_0x456e21);}),_0x344659['on']('error',_0x4b558c=>{_0x3074dc(_0x4b558c);}),_0x3b0d46[_0x91c70c(0x82)][_0x91c70c(0xae)]('abort',()=>{_0x415de9(_0x456e21);});}),_0x456e21;}catch(_0x4d3642){return _0x456e21[_0x5a6e08(0xa7)]=(0x0,utils_1['handleError'])(_0x4d3642),common_1['Logger'][_0x5a6e08(0xa3)](_0x456e21[_0x5a6e08(0xa7)]),_0x537106(_0x456e21),_0x456e21;}}async[_0x10838d(0x93)](_0x108139){const _0x509a8e=_0x10838d,_0x595964=JSON['parse'](JSON[_0x509a8e(0x85)](_0x108139));if(_0x595964[_0x509a8e(0xa8)]&&_0x595964[_0x509a8e(0xa8)][_0x509a8e(0xb7)]){const _0x2af4f3=_0x595964['headers']['Authorization'];if(_0x2af4f3[_0x509a8e(0x9b)](_0x509a8e(0x76))){const _0x558e32=_0x2af4f3[_0x509a8e(0x95)](0x7);_0x558e32['length']>0xa&&(_0x595964[_0x509a8e(0xa8)][_0x509a8e(0xb7)]=_0x509a8e(0x76)+_0x558e32[_0x509a8e(0x95)](0x0,0x5)+_0x509a8e(0x92)+_0x558e32[_0x509a8e(0x95)](-0x4));}}return _0x595964[_0x509a8e(0xb1)]&&_0x595964[_0x509a8e(0xb1)][_0x509a8e(0xaf)]&&Array[_0x509a8e(0x9d)](_0x595964[_0x509a8e(0xb1)]['messages'])&&(_0x595964[_0x509a8e(0xb1)][_0x509a8e(0xaf)]=_0x595964['data'][_0x509a8e(0xaf)][_0x509a8e(0x83)](_0x4aff12=>{const _0x1a2d6a=_0x509a8e;return _0x4aff12[_0x1a2d6a(0xa1)]&&Array[_0x1a2d6a(0x9d)](_0x4aff12[_0x1a2d6a(0xa1)])&&(_0x4aff12[_0x1a2d6a(0xa1)]=_0x4aff12[_0x1a2d6a(0xa1)][_0x1a2d6a(0x83)](_0x4a0d7c=>{const _0x12a0f1=_0x1a2d6a;return _0x4a0d7c[_0x12a0f1(0xa2)]===_0x12a0f1(0xab)&&_0x4a0d7c[_0x12a0f1(0xab)]&&_0x4a0d7c[_0x12a0f1(0xab)][_0x12a0f1(0xbb)]&&(_0x4a0d7c[_0x12a0f1(0xab)]['url']='data:image/***;base64\x20...\x20...'),_0x4a0d7c;})),_0x4aff12;})),_0x595964;}async[_0x10838d(0xa0)](_0x3d612f,_0x1ca1b3,_0x14c581){const _0x4012c6=_0x10838d,{openaiBaseUrl:openaiBaseUrl='',openaiBaseKey:openaiBaseKey='',openaiBaseModel:_0x4e6665}=await this['globalConfigService'][_0x4012c6(0x87)](['openaiBaseKey',_0x4012c6(0x7c),_0x4012c6(0xb8)]),_0x164c19=openaiBaseKey,_0x994132=openaiBaseUrl;let _0x442849=[];_0x1ca1b3&&_0x442849[_0x4012c6(0x80)]({'role':_0x4012c6(0xad),'content':_0x1ca1b3});_0x14c581&&_0x14c581[_0x4012c6(0xb4)]>0x0?_0x442849=_0x442849[_0x4012c6(0x9c)](_0x14c581):_0x442849['push']({'role':_0x4012c6(0x96),'content':_0x3d612f});const _0x443748={'method':'POST','url':_0x994132+'/v1/chat/completions','headers':{'Content-Type':_0x4012c6(0xb2),'Authorization':'Bearer\x20'+_0x164c19},'data':{'model':_0x4e6665||_0x4012c6(0xa6),'messages':_0x442849}};try{const _0x3d25a3=await(0x0,axios_1[_0x4012c6(0x8e)])(_0x443748);return common_1[_0x4012c6(0x7e)][_0x4012c6(0x79)](_0x4012c6(0x91)+(_0x3d25a3===null||_0x3d25a3===void 0x0?void 0x0:_0x3d25a3[_0x4012c6(0xb1)]['choices'][0x0][_0x4012c6(0x8d)][_0x4012c6(0xa1)]),_0x4012c6(0xba)),_0x3d25a3===null||_0x3d25a3===void 0x0?void 0x0:_0x3d25a3[_0x4012c6(0xb1)][_0x4012c6(0x78)][0x0][_0x4012c6(0x8d)]['content'];}catch(_0x23c906){console[_0x4012c6(0x79)](_0x4012c6(0x9f),_0x23c906);}}};OpenAIChatService=__decorate([(0x0,common_1[_0x10838d(0x7d)])(),__metadata(_0x10838d(0xb9),[globalConfig_service_1[_0x10838d(0xa4)]])],OpenAIChatService),exports[_0x10838d(0x9a)]=OpenAIChatService;