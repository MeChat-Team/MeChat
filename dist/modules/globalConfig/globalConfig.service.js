'use strict';function _0x5665(_0x1e9250,_0x51e613){const _0xae457c=_0xae45();return _0x5665=function(_0x566536,_0x4cc754){_0x566536=_0x566536-0x1c0;let _0x3a4da0=_0xae457c[_0x566536];return _0x3a4da0;},_0x5665(_0x1e9250,_0x51e613);}const _0x27891a=_0x5665;(function(_0x824e01,_0x286094){const _0x3313f8=_0x5665,_0x592ce5=_0x824e01();while(!![]){try{const _0x47dd13=parseInt(_0x3313f8(0x1fa))/0x1+parseInt(_0x3313f8(0x24d))/0x2*(parseInt(_0x3313f8(0x261))/0x3)+-parseInt(_0x3313f8(0x205))/0x4*(parseInt(_0x3313f8(0x1d0))/0x5)+-parseInt(_0x3313f8(0x233))/0x6+parseInt(_0x3313f8(0x256))/0x7+-parseInt(_0x3313f8(0x1e1))/0x8+parseInt(_0x3313f8(0x228))/0x9;if(_0x47dd13===_0x286094)break;else _0x592ce5['push'](_0x592ce5['shift']());}catch(_0x1fa0e8){_0x592ce5['push'](_0x592ce5['shift']());}}}(_0xae45,0xe7f7b));var __decorate=this&&this[_0x27891a(0x220)]||function(_0x594b0a,_0x15819a,_0x12c28c,_0x32c97f){const _0x37f6ba=_0x27891a;var _0x3fd944=arguments['length'],_0x37769a=_0x3fd944<0x3?_0x15819a:_0x32c97f===null?_0x32c97f=Object[_0x37f6ba(0x279)](_0x15819a,_0x12c28c):_0x32c97f,_0x1fbd04;if(typeof Reflect===_0x37f6ba(0x206)&&typeof Reflect['decorate']===_0x37f6ba(0x24a))_0x37769a=Reflect[_0x37f6ba(0x20b)](_0x594b0a,_0x15819a,_0x12c28c,_0x32c97f);else{for(var _0x1e0a4c=_0x594b0a['length']-0x1;_0x1e0a4c>=0x0;_0x1e0a4c--)if(_0x1fbd04=_0x594b0a[_0x1e0a4c])_0x37769a=(_0x3fd944<0x3?_0x1fbd04(_0x37769a):_0x3fd944>0x3?_0x1fbd04(_0x15819a,_0x12c28c,_0x37769a):_0x1fbd04(_0x15819a,_0x12c28c))||_0x37769a;}return _0x3fd944>0x3&&_0x37769a&&Object[_0x37f6ba(0x276)](_0x15819a,_0x12c28c,_0x37769a),_0x37769a;},__metadata=this&&this[_0x27891a(0x244)]||function(_0x51195c,_0x1d51cf){const _0x21ebcd=_0x27891a;if(typeof Reflect===_0x21ebcd(0x206)&&typeof Reflect['metadata']===_0x21ebcd(0x24a))return Reflect[_0x21ebcd(0x1d8)](_0x51195c,_0x1d51cf);},__param=this&&this['__param']||function(_0x430f47,_0x11faa4){return function(_0x4c6b27,_0x5f0a98){_0x11faa4(_0x4c6b27,_0x5f0a98,_0x430f47);};};Object['defineProperty'](exports,_0x27891a(0x235),{'value':!![]}),exports[_0x27891a(0x25d)]=void 0x0;const utils_1=require(_0x27891a(0x25c)),baseRequest_1=require(_0x27891a(0x268)),common_1=require('@nestjs/common'),typeorm_1=require('@nestjs/typeorm'),axios_1=require(_0x27891a(0x21e)),fs=require('fs'),typeorm_2=require(_0x27891a(0x22c)),chatLog_entity_1=require(_0x27891a(0x1ca)),models_service_1=require(_0x27891a(0x1ed)),config_entity_1=require(_0x27891a(0x1f8)),packageJsonContent=fs[_0x27891a(0x1cb)](_0x27891a(0x213),_0x27891a(0x27b)),packageJson=JSON[_0x27891a(0x272)](packageJsonContent),version=packageJson[_0x27891a(0x222)];console[_0x27891a(0x223)](_0x27891a(0x1d1),version);let GlobalConfigService=class GlobalConfigService{constructor(_0x365d5c,_0xc3f010,_0x595a9a){const _0x2d1489=_0x27891a;this['configEntity']=_0x365d5c,this[_0x2d1489(0x229)]=_0xc3f010,this[_0x2d1489(0x232)]=_0x595a9a,this[_0x2d1489(0x1db)]={};}async['onModuleInit'](){const _0x2b9cfc=_0x27891a;await this[_0x2b9cfc(0x26b)](),await this[_0x2b9cfc(0x1d5)]();}async[_0x27891a(0x1cc)](_0x36a06c){const _0x475f2c=_0x27891a;if(_0x36a06c[_0x475f2c(0x26f)]===0x0)return;if(_0x36a06c['includes'](_0x475f2c(0x1fc))&&_0x36a06c[_0x475f2c(0x26f)]===0x1)return this['wechatAccessToken'];if(_0x36a06c[_0x475f2c(0x219)](_0x475f2c(0x1c7))&&_0x36a06c[_0x475f2c(0x26f)]===0x1)return this['wechatJsapiTicket'];if(_0x36a06c[_0x475f2c(0x26f)]===0x1)return this[_0x475f2c(0x1db)][_0x36a06c[0x0]];else{const _0x5457d8={};return _0x36a06c[_0x475f2c(0x1e7)](_0x158487=>_0x5457d8[_0x158487]=this['globalConfigs'][_0x158487]),_0x5457d8;}}async[_0x27891a(0x26b)](){const _0x58da46=_0x27891a,_0x5694a9=await this[_0x58da46(0x1e2)][_0x58da46(0x27d)]();this[_0x58da46(0x1db)]=_0x5694a9['reduce']((_0x5b8aab,_0x26ae2c)=>{const _0x93d3c3=_0x58da46;return _0x5b8aab[_0x26ae2c[_0x93d3c3(0x277)]]=_0x26ae2c['configVal'],_0x5b8aab;},{}),this[_0x58da46(0x269)]();}async['initBaiduSensitive'](_0x3e788a=!![]){const _0x20645c=_0x27891a,{baiduTextApiKey:_0x47473c,baiduTextSecretKey:_0x1e5ecd}=await this[_0x20645c(0x1cc)]([_0x20645c(0x243),'baiduTextSecretKey']);if(!_0x47473c||!_0x1e5ecd)return;const _0x520c60={'Content-Type':'application/json','Accept':_0x20645c(0x22b)},_0x3fc7b6=_0x20645c(0x230)+_0x47473c+'&client_secret='+_0x1e5ecd+_0x20645c(0x1f7);try{const _0x4cf3da=await axios_1[_0x20645c(0x250)][_0x20645c(0x237)](_0x3fc7b6,{'headers':_0x520c60});this[_0x20645c(0x1db)][_0x20645c(0x241)]=_0x4cf3da[_0x20645c(0x239)][_0x20645c(0x23b)];}catch(_0x2b7866){if(_0x3e788a){}else throw new common_1[(_0x20645c(0x21f))](_0x2b7866[_0x20645c(0x203)][_0x20645c(0x239)][_0x20645c(0x283)],common_1[_0x20645c(0x26c)]['BAD_REQUEST']);}}async[_0x27891a(0x27e)](_0x19f512=![]){const _0x565f0f=_0x27891a,{wechatOfficialAppId:_0x480e89,wechatOfficialAppSecret:_0x5f11b5}=await this['getConfigs']([_0x565f0f(0x1ea),_0x565f0f(0x1f2)]);if(!_0x480e89||!_0x5f11b5)return common_1[_0x565f0f(0x1cd)]['error'](_0x565f0f(0x25b),_0x565f0f(0x251));this['wechatAccessToken']=await this[_0x565f0f(0x257)](_0x480e89,_0x5f11b5,_0x19f512),this['wechatJsapiTicket']=await this[_0x565f0f(0x28a)](this[_0x565f0f(0x1fc)]),common_1['Logger'][_0x565f0f(0x223)](_0x565f0f(0x1ec)+this[_0x565f0f(0x1fc)],'OfficialService');}async[_0x27891a(0x257)](_0x549c5e,_0x3e6e93,_0x2aaca0=![]){const _0x47f992=_0x27891a;if(process['env']['ISDEV']==='TRUE'){this[_0x47f992(0x1fc)]='';return;}const _0x1b9e44=(0x0,utils_1['formatUrl'])(process['env'][_0x47f992(0x208)]||_0x47f992(0x275)),{data:{errmsg:_0x32ae2b,access_token:_0x703ba8}}=await axios_1['default'][_0x47f992(0x265)](_0x1b9e44+_0x47f992(0x282)+_0x549c5e+'&secret='+_0x3e6e93);if(_0x32ae2b){if(_0x2aaca0)common_1[_0x47f992(0x1cd)]['error'](_0x47f992(0x210)+_0x32ae2b,_0x47f992(0x251));else throw new common_1[(_0x47f992(0x21f))](_0x47f992(0x1c5),common_1[_0x47f992(0x26c)]['BAD_REQUEST']);return'';}return _0x703ba8;}async[_0x27891a(0x28a)](_0x43451c){const _0x40bcb7=_0x27891a;var _0x157521;if(process[_0x40bcb7(0x253)][_0x40bcb7(0x22e)]===_0x40bcb7(0x264)){this['wechatJsapiTicket']='';return;}const _0x21afc5=(0x0,utils_1[_0x40bcb7(0x259)])(process[_0x40bcb7(0x253)]['weChatApiUrl']||_0x40bcb7(0x275)),_0x1d290a=await axios_1[_0x40bcb7(0x250)][_0x40bcb7(0x265)](_0x21afc5+_0x40bcb7(0x1dc)+_0x43451c+_0x40bcb7(0x231));return(_0x157521=_0x1d290a===null||_0x1d290a===void 0x0?void 0x0:_0x1d290a[_0x40bcb7(0x239)])===null||_0x157521===void 0x0?void 0x0:_0x157521[_0x40bcb7(0x24f)];}async[_0x27891a(0x1e0)](_0x9e1b87){const _0x12f0ee=_0x27891a,{role:_0x281e65}=_0x9e1b87[_0x12f0ee(0x28c)];return this['globalConfigs'];}async[_0x27891a(0x288)](_0x117793,_0x43395f){const _0xe1a636=_0x27891a,_0x493614=[_0xe1a636(0x1f1),'registerSendModel3Count',_0xe1a636(0x1d9),_0xe1a636(0x211),'firstRegisterSendStatus',_0xe1a636(0x221),_0xe1a636(0x217),_0xe1a636(0x209),_0xe1a636(0x1f6),'clientHomePath',_0xe1a636(0x1d2),_0xe1a636(0x26d),_0xe1a636(0x23f),'isUseWxLogin',_0xe1a636(0x1fb),_0xe1a636(0x286),_0xe1a636(0x281),'buyCramiAddress',_0xe1a636(0x252),_0xe1a636(0x1eb),'payEpayChannel','payMpayChannel',_0xe1a636(0x238),_0xe1a636(0x280),'payHupiStatus',_0xe1a636(0x1d6),_0xe1a636(0x1d4),'payLtzfStatus',_0xe1a636(0x25a),_0xe1a636(0x23a),_0xe1a636(0x1ce),'salesSeniorRatio',_0xe1a636(0x24b),_0xe1a636(0x218),'filingNumber',_0xe1a636(0x226),_0xe1a636(0x274),_0xe1a636(0x20c),_0xe1a636(0x234),_0xe1a636(0x20e),_0xe1a636(0x23e),_0xe1a636(0x242),_0xe1a636(0x1c8),_0xe1a636(0x24e),'pluginFirst',_0xe1a636(0x28b),_0xe1a636(0x202),_0xe1a636(0x23c),'isVerifyEmail',_0xe1a636(0x204),_0xe1a636(0x1c4),'isHideDefaultPreset',_0xe1a636(0x1dd),_0xe1a636(0x270),_0xe1a636(0x267),'isHidePlugin','model3Name',_0xe1a636(0x1ff),_0xe1a636(0x1fe),_0xe1a636(0x1e4),'noVerifyRegister',_0xe1a636(0x27c),_0xe1a636(0x21a),_0xe1a636(0x240),_0xe1a636(0x1c6),_0xe1a636(0x26e)],_0xf2d5c6=await this[_0xe1a636(0x1e2)][_0xe1a636(0x27d)]({'where':{'configKey':(0x0,typeorm_2['In'])(_0x493614)}}),{domain:_0x344b74}=_0x117793,_0x5844b8=this['globalConfigs']['domain'];_0x5844b8!==_0x344b74&&(this[_0xe1a636(0x258)]({'configKey':_0xe1a636(0x21d),'configVal':_0x344b74,'status':0x1}),await this[_0xe1a636(0x26b)]());const _0x5e33c2=_0xf2d5c6[_0xe1a636(0x1ef)]((_0x34d5f7,_0x1add00)=>{const _0x46317a=_0xe1a636;return _0x34d5f7[_0x1add00[_0x46317a(0x277)]]=_0x1add00[_0x46317a(0x216)],_0x34d5f7;},{}),{wechatOfficialAppId:_0x797f77,wechatOfficialAppSecret:_0x320d45}=await this[_0xe1a636(0x1cc)]([_0xe1a636(0x1ea),_0xe1a636(0x1f2)]),_0x4012e7=!!(_0x797f77&&_0x320d45);return Object[_0xe1a636(0x1cf)](Object[_0xe1a636(0x1cf)]({},_0x5e33c2),{'isUseWxLogin':_0x4012e7});}async[_0x27891a(0x212)](_0x4a45b8,_0x3c4573){const _0x31e01b=_0x27891a,{role:_0x1f15ab}=_0x3c4573[_0x31e01b(0x28c)],{keys:_0x10212e}=_0x4a45b8,_0x16b93f=await this[_0x31e01b(0x1e2)]['find']({'where':{'configKey':(0x0,typeorm_2['In'])(_0x10212e)}});return _0x1f15ab!==_0x31e01b(0x1df)&&_0x16b93f[_0x31e01b(0x1e7)](_0xba0362=>{const _0x3d01bd=_0x31e01b;if(_0xba0362[_0x3d01bd(0x277)]['includes']('mj')||_0xba0362[_0x3d01bd(0x277)]['includes'](_0x3d01bd(0x1c9))||_0xba0362['configKey'][_0x3d01bd(0x219)](_0x3d01bd(0x1f9))||_0xba0362[_0x3d01bd(0x277)]['includes'](_0x3d01bd(0x201))||_0xba0362[_0x3d01bd(0x277)][_0x3d01bd(0x219)]('baidu')||_0xba0362[_0x3d01bd(0x277)][_0x3d01bd(0x219)](_0x3d01bd(0x271))||_0xba0362['configKey']['includes']('tencent')||_0xba0362[_0x3d01bd(0x277)][_0x3d01bd(0x219)]('pay')||_0xba0362[_0x3d01bd(0x277)]['includes']('wechat')||_0xba0362[_0x3d01bd(0x277)][_0x3d01bd(0x219)](_0x3d01bd(0x246))||_0xba0362[_0x3d01bd(0x277)]==='openaiBaseUrl'){const _0x2f3f81=[_0x3d01bd(0x1fd),_0x3d01bd(0x1f5)];if(_0x2f3f81[_0x3d01bd(0x219)](_0xba0362['configKey']))return _0xba0362['configVal']=(0x0,utils_1[_0x3d01bd(0x227)])(_0xba0362[_0x3d01bd(0x216)],_0x3d01bd(0x262));const _0x2b57da=[_0x3d01bd(0x280),'payHupiStatus','mjProxy',_0x3d01bd(0x1c3)];!_0x2b57da['includes'](_0xba0362[_0x3d01bd(0x277)])&&!_0xba0362['configKey'][_0x3d01bd(0x219)](_0x3d01bd(0x21c))&&(_0xba0362['configVal']=(0x0,utils_1['hideString'])(_0xba0362[_0x3d01bd(0x216)]));}}),_0x16b93f[_0x31e01b(0x1ef)]((_0x4dee62,_0x4742fa)=>{const _0xc0023e=_0x31e01b;return _0x4dee62[_0x4742fa['configKey']]=_0x4742fa[_0xc0023e(0x216)],_0x4dee62;},{});}async[_0x27891a(0x284)](_0x3a10d1){const _0x268085=_0x27891a;try{const {settings:_0x3abbaa}=_0x3a10d1;for(const _0x52889b of _0x3abbaa){await this[_0x268085(0x258)](_0x52889b);}await this['initGetAllConfig']();const _0x24c7eb=_0x3abbaa[_0x268085(0x207)](_0x5abbf1=>_0x5abbf1[_0x268085(0x277)]);return(_0x24c7eb[_0x268085(0x219)](_0x268085(0x243))||_0x24c7eb['includes'](_0x268085(0x22d)))&&await this[_0x268085(0x269)](![]),(_0x24c7eb[_0x268085(0x219)]('wechatOfficialAppId')||_0x24c7eb[_0x268085(0x219)]('wechatOfficialAppSecret'))&&await this[_0x268085(0x27e)](),_0x268085(0x1d3);}catch(_0x3a8bd0){console[_0x268085(0x223)](_0x268085(0x289),_0x3a8bd0);}}async[_0x27891a(0x258)](_0x2a4185){const _0x4ae966=_0x27891a;if(_0x2a4185['configKey']==_0x4ae966(0x266)){const _0x583b4b=_0x2a4185[_0x4ae966(0x263)],_0x12f57f=await(0x0,baseRequest_1[_0x4ae966(0x224)])({'method':_0x4ae966(0x237),'url':_0x4ae966(0x273),'data':{'domain':_0x583b4b,'authCode':_0x2a4185[_0x4ae966(0x216)]}});if(_0x12f57f[_0x4ae966(0x25e)]===0x7)throw new common_1[(_0x4ae966(0x21f))](_0x4ae966(0x214),common_1[_0x4ae966(0x26c)][_0x4ae966(0x1e5)]);}try{const {configKey:_0x33a593,configVal:_0x446987,status:status=0x1}=_0x2a4185,_0x45d754=await this[_0x4ae966(0x1e2)][_0x4ae966(0x260)]({'where':{'configKey':_0x33a593}});return _0x45d754?await this[_0x4ae966(0x1e2)][_0x4ae966(0x25f)]({'configKey':_0x33a593},{'configVal':_0x446987,'status':status}):await this[_0x4ae966(0x1e2)][_0x4ae966(0x236)]({'configKey':_0x33a593,'configVal':_0x446987,'status':status}),await this[_0x4ae966(0x26b)](),_0x4ae966(0x1d3);}catch(_0x52ac34){console[_0x4ae966(0x223)](_0x4ae966(0x289),_0x52ac34);throw new common_1[(_0x4ae966(0x21f))](_0x4ae966(0x21b),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x27891a(0x27f)](){const _0x1f2bfc=_0x27891a;return await this[_0x1f2bfc(0x1cc)]([_0x1f2bfc(0x27c),'noticeTitle']);}async[_0x27891a(0x20d)](){const _0x335ccc=_0x27891a,{payHupiStatus:payHupiStatus=0x0,payEpayStatus:payEpayStatus=0x0,payWechatStatus:payWechatStatus=0x0,payMpayStatus:payMpayStatus=0x0,payLtzfStatus:payLtzfStatus=0x0}=await this['getConfigs'](['payHupiStatus','payEpayStatus','payMpayStatus',_0x335ccc(0x1d6),_0x335ccc(0x1c3)]);if([payHupiStatus,payEpayStatus,payWechatStatus,payMpayStatus,payLtzfStatus][_0x335ccc(0x200)](_0x35db09=>_0x35db09===0x0))throw new common_1[(_0x335ccc(0x21f))](_0x335ccc(0x215),common_1['HttpStatus']['BAD_REQUEST']);if(Number(payWechatStatus)===0x1)return _0x335ccc(0x245);if(Number(payEpayStatus)===0x1)return _0x335ccc(0x285);if(Number(payMpayStatus)===0x1)return _0x335ccc(0x22a);if(Number(payHupiStatus)===0x1)return _0x335ccc(0x22f);if(Number(payLtzfStatus)===0x1)return'ltzf';}async[_0x27891a(0x254)](){const _0xdb6aed=_0x27891a,{siteName:_0x3204bf,registerBaseUrl:_0x2a6ed4,domain:_0x56d1f1}=await this[_0xdb6aed(0x1cc)]([_0xdb6aed(0x1fb),_0xdb6aed(0x1c2),_0xdb6aed(0x21d)]);return{'siteName':_0x3204bf,'registerBaseUrl':_0x2a6ed4,'domain':_0x56d1f1};}async[_0x27891a(0x20a)](){const _0x2b357a=_0x27891a,{phoneLoginStatus:_0x142e22,aliPhoneAccessKeyId:_0x1459db,aliPhoneAccessKeySecret:_0x1e222d,aliPhoneSignName:_0x121330,aliPhoneTemplateCode:_0xce740f}=await this[_0x2b357a(0x1cc)]([_0x2b357a(0x274),_0x2b357a(0x255),_0x2b357a(0x23d),_0x2b357a(0x1de),_0x2b357a(0x278)]);if(Number(_0x142e22)!==0x1)throw new common_1[(_0x2b357a(0x21f))]('手机验证码功能暂未开放!',common_1['HttpStatus'][_0x2b357a(0x1e5)]);return{'accessKeyId':_0x1459db,'accessKeySecret':_0x1e222d,'SignName':_0x121330,'TemplateCode':_0xce740f};}async[_0x27891a(0x1da)](){const _0x2008b9=_0x27891a,_0x58cc05=await this[_0x2008b9(0x1cc)]([_0x2008b9(0x1ee),_0x2008b9(0x1c0),_0x2008b9(0x247),'emailPass']);return _0x58cc05;}[_0x27891a(0x1f4)](){const _0x2f18e5=_0x27891a;return process[_0x2f18e5(0x253)][_0x2f18e5(0x1e3)]||_0x2f18e5(0x249);}async['getSignatureGiftConfig'](){const _0x18cdc6=_0x27891a,{signInStatus:signInStatus=0x0,signInModel3Count:signInModel3Count=0x0,signInModel4Count:signInModel4Count=0x0,signInMjDrawToken:signInMjDrawToken=0x0}=await this[_0x18cdc6(0x1cc)]([_0x18cdc6(0x20e),'signInModel3Count','signInModel4Count','signInMjDrawToken']);if(Number(signInStatus)!==0x1)throw new common_1['HttpException'](_0x18cdc6(0x225),common_1['HttpStatus'][_0x18cdc6(0x1e5)]);return{'model3Count':Number(signInModel3Count),'model4Count':Number(signInModel4Count),'drawMjCount':Number(signInMjDrawToken)};}async[_0x27891a(0x1d7)](){const _0x5ba27c=_0x27891a,_0x51a5d1='',_0x2061f7=await fetch(_0x51a5d1,{}),_0x3f337e=await _0x2061f7[_0x5ba27c(0x248)](),{success:success=!![],message:_0x3a897f}=_0x3f337e;common_1['Logger'][_0x5ba27c(0x1c1)]('感谢您使用AIWeb，祝您使用愉快~');}async[_0x27891a(0x1e8)](){const _0x53700c=_0x27891a,{baiduTextStatus:baiduTextStatus=0x0,baiduTextAccessToken:_0x5b64d4}=await this[_0x53700c(0x1cc)]([_0x53700c(0x1f0),_0x53700c(0x241)]);if(Number(baiduTextStatus)===0x1)return{'useType':_0x53700c(0x287),'baiduTextAccessToken':_0x5b64d4};return null;}async[_0x27891a(0x1d5)](){const _0x3eacde=_0x27891a,_0x5a35ef=[{'configKey':_0x3eacde(0x1e9),'configVal':'60','public':0x0,'encrypt':0x0,'remark':'第三方应用认证码过期时间（秒）'}];for(const _0xf4c28a of _0x5a35ef){const _0x5db61c=await this['configEntity'][_0x3eacde(0x260)]({'where':{'configKey':_0xf4c28a['configKey']}});!_0x5db61c&&(await this[_0x3eacde(0x1e2)][_0x3eacde(0x236)](_0xf4c28a),this[_0x3eacde(0x1db)][_0xf4c28a[_0x3eacde(0x277)]]=_0xf4c28a[_0x3eacde(0x216)],common_1[_0x3eacde(0x1cd)]['log'](_0x3eacde(0x1f3)+_0xf4c28a[_0x3eacde(0x277)]+'='+_0xf4c28a[_0x3eacde(0x216)],'GlobalConfigService'));}}};GlobalConfigService=__decorate([(0x0,common_1[_0x27891a(0x28d)])(),__param(0x0,(0x0,typeorm_1[_0x27891a(0x27a)])(config_entity_1[_0x27891a(0x1e6)])),__param(0x1,(0x0,typeorm_1[_0x27891a(0x27a)])(chatLog_entity_1[_0x27891a(0x26a)])),__metadata('design:paramtypes',[typeorm_2[_0x27891a(0x20f)],typeorm_2['Repository'],models_service_1[_0x27891a(0x24c)]])],GlobalConfigService),exports[_0x27891a(0x25d)]=GlobalConfigService;function _0xae45(){const _0x2af83b=['isHideTts','请配置正确的秘钥、当前秘钥检测不通过！','agreementInfo','wechatJsapiTicket','signInMjDrawToken','Key','./../chatLog/chatLog.entity','readFileSync','getConfigs','Logger','salesBaseRatio','assign','525kclhuf','\x20current\x20use\x20version\x20in\x20------>:\x20','clientLogoPath','设置完成！','payMpayStatus','initDefaultConfigs','payWechatStatus','auth','metadata','registerSendModel4Count','getEmailConfig','globalConfigs','/cgi-bin/ticket/getticket?access_token=','isHideModel3Point','aliPhoneSignName','super','queryAllConfig','8773160TgPavi','configEntity','NAMESPACE','isModelInherited','BAD_REQUEST','ConfigEntity','forEach','getSensitiveConfig','thirdPartyAuthExpir','wechatOfficialAppId','baiduCode','wechat\x20refresh\x20access_token\x20\x20==>\x20','./../models/models.service','emailHost','reduce','baiduTextStatus','registerSendStatus','wechatOfficialAppSecret','已添加默认配置:\x20','getNamespace','payWeChatPrivateKey','firstRregisterSendDrawMjCount','&grant_type=client_credentials','./config.entity','gpt','863963yEERkj','siteName','wechatAccessToken','payWeChatPublicKey','drawMjName','model4Name','every','cos','mjHideNotBlock','response','showWatermark','31264vVYrMQ','object','map','weChatApiUrl','firstRregisterSendModel4Count','getPhoneVerifyConfig','decorate','wechatRegisterStatus','queryPayType','signInStatus','Repository','获取微信access_token失败、错误信息：','registerSendDrawMjCount','queryConfig','package.json','域名与授权码不匹配！','支付功能暂未开放!','configVal','firstRregisterSendModel3Count','companyName','includes','homeHtml','设置配置信息错误！','Status','domain','axios','HttpException','__decorate','firstRegisterSendRank','version','log','baseRequest','签到功能暂未开放!','emailLoginStatus','hideString','24883974HelEwR','chatLogEntity','mpay','application/json','typeorm','baiduTextSecretKey','ISDEV','hupi','https://aip.baidubce.com/oauth/2.0/token?client_id=','&type=jsapi','modelsService','6004638lgOTRE','wechatSilentLoginStatus','__esModule','save','post','payEpayApiPayUrl','data','isShowAppCatIcon','access_token','mjHideWorkIn','aliPhoneAccessKeySecret','signInModel3Count','drawingStyles','isAutoOpenAgreement','baiduTextAccessToken','signInModel4Count','baiduTextApiKey','__metadata','wechat','mjProxyImgUrl','emailUser','json','AIWeb','function','salesAllowDrawMoney','ModelsService','351396vrzxct','appMenuHeaderTips','ticket','default','OfficialService','mindDefaultData','env','getAuthInfo','aliPhoneAccessKeyId','445830xraAly','fetchBaseAccessToken','createOrUpdate','formatUrl','isAutoOpenNotice','还未配置微信的appId和secret、配置后才可进行微信扫码登录！！！','../../common/utils','GlobalConfigService','code','update','findOne','3zHgpeG','隐私内容、非超级管理员无权查看','url','TRUE','get','rocketAiKey','isHideDrawMjPoint','../../common/utils/baseRequest','initBaiduSensitive','ChatLogEntity','initGetAllConfig','HttpStatus','clientFavoIconPath','agreementTitle','length','isHideModel4Point','ali','parse','http://authorization.nodeai.cn/api/domainAuth/checkDomain/mechat','phoneLoginStatus','https://api.weixin.qq.com','defineProperty','configKey','aliPhoneTemplateCode','getOwnPropertyDescriptor','InjectRepository','utf-8','noticeInfo','find','getWechatAccessToken','queryNotice','payEpayStatus','siteRobotName','/cgi-bin/token?grant_type=client_credential&appid=','error_description','setConfig','epay','robotAvatar','baidu','queryFrontConfig','error:\x20','fetchJsapiTicket','mjUseBaiduFy','user','Injectable','emailPort','debug','registerBaseUrl','payLtzfStatus'];_0xae45=function(){return _0x2af83b;};return _0xae45();}