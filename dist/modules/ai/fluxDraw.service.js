'use strict';function _0x3364(){const _0x4bd4bb=['chatFree','application/json','Injectable','/v1/images/generations','getFullYear','当前模型key已被封禁、已冻结当前调用Key、尝试重新对话试试吧！','name','metadata','data','\x20绘制成功','开始提交\x20Flux\x20绘图任务\x20','openAIChatService','log','FluxDrawService','请求状态','，payload:\x20','参考上文，结合我的需求，给出绘画描述。我的需求是：','Logger','POST','error','stringify','text','chatLogService','绘制图片失败，请检查你的提示词是否有非法描述！','globalConfigService','./openaiChat.service','Billing\x20hard\x20limit\x20has\x20been\x20reached','绘制图片失败，此次绘画被拒绝了！','getMonth','This\x20request\x20has\x20been\x20blocked\x20by\x20our\x20content\x20filters','UploadService','GlobalConfigService','fileInfo','debug','response','DrawService','2164340KGbCdG','2487192souxMz','FluxDraw','design:paramtypes','answer','../upload/upload.service','@nestjs/common','../chatLog/chatLog.service','getDate','uploadService','fluxDraw','图片上传成功，URL:\x20','defineProperty','根据提示词{','7ZHJSJR','default','6FVlAhT','翻译失败:\x20','padStart','24IwStOX','includes','1298520vIToXd','13872331wGxSja','size','1024x1024','__metadata','324462JEzPeF','function','上传图片过程中出现错误:\x20','已开启连续绘画模式','url','},\x20模拟AI绘画机器人的语气，用中文回复，告诉用户已经画好了','headers','object','------>\x20开始上传图片！！！','images/dalle/','412939LTgwIT','axios','2009696zyozDO','正在准备发送请求到\x20','20ACjILR','uploadFileFromUrl','decorate','isDalleChat','ChatLogService','绘制图片失败，请稍后试试吧！','当前请求已过载、请稍等会儿再试试吧！','status','9wFiHAV'];_0x3364=function(){return _0x4bd4bb;};return _0x3364();}const _0xa09031=_0x36e3;(function(_0x4c172a,_0x1a6730){const _0x49cbd0=_0x36e3,_0x35c7bd=_0x4c172a();while(!![]){try{const _0x28bd43=-parseInt(_0x49cbd0(0xa1))/0x1+parseInt(_0x49cbd0(0x8d))/0x2*(-parseInt(_0x49cbd0(0x97))/0x3)+-parseInt(_0x49cbd0(0xa3))/0x4+-parseInt(_0x49cbd0(0xa5))/0x5*(parseInt(_0x49cbd0(0x92))/0x6)+parseInt(_0x49cbd0(0x8b))/0x7*(parseInt(_0x49cbd0(0xd3))/0x8)+parseInt(_0x49cbd0(0xad))/0x9*(-parseInt(_0x49cbd0(0xd2))/0xa)+parseInt(_0x49cbd0(0x93))/0xb*(parseInt(_0x49cbd0(0x90))/0xc);if(_0x28bd43===_0x1a6730)break;else _0x35c7bd['push'](_0x35c7bd['shift']());}catch(_0x2d24d9){_0x35c7bd['push'](_0x35c7bd['shift']());}}}(_0x3364,0x7cce2));var __decorate=this&&this['__decorate']||function(_0x1ccf75,_0x13b568,_0xdbc989,_0x194fe0){const _0x49bac8=_0x36e3;var _0x20f010=arguments['length'],_0x164aaf=_0x20f010<0x3?_0x13b568:_0x194fe0===null?_0x194fe0=Object['getOwnPropertyDescriptor'](_0x13b568,_0xdbc989):_0x194fe0,_0x13aa2b;if(typeof Reflect===_0x49bac8(0x9e)&&typeof Reflect[_0x49bac8(0xa7)]==='function')_0x164aaf=Reflect[_0x49bac8(0xa7)](_0x1ccf75,_0x13b568,_0xdbc989,_0x194fe0);else{for(var _0xf36676=_0x1ccf75['length']-0x1;_0xf36676>=0x0;_0xf36676--)if(_0x13aa2b=_0x1ccf75[_0xf36676])_0x164aaf=(_0x20f010<0x3?_0x13aa2b(_0x164aaf):_0x20f010>0x3?_0x13aa2b(_0x13b568,_0xdbc989,_0x164aaf):_0x13aa2b(_0x13b568,_0xdbc989))||_0x164aaf;}return _0x20f010>0x3&&_0x164aaf&&Object[_0x49bac8(0x89)](_0x13b568,_0xdbc989,_0x164aaf),_0x164aaf;},__metadata=this&&this[_0xa09031(0x96)]||function(_0x5af263,_0x83976a){const _0x454bb4=_0xa09031;if(typeof Reflect===_0x454bb4(0x9e)&&typeof Reflect['metadata']===_0x454bb4(0x98))return Reflect[_0x454bb4(0xb5)](_0x5af263,_0x83976a);},FluxDrawService_1;Object[_0xa09031(0x89)](exports,'__esModule',{'value':!![]}),exports[_0xa09031(0xbb)]=void 0x0;const common_1=require(_0xa09031(0xd8)),axios_1=require(_0xa09031(0xa2)),chatLog_service_1=require(_0xa09031(0xd9)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),upload_service_1=require(_0xa09031(0xd7)),openaiChat_service_1=require(_0xa09031(0xc7));function _0x36e3(_0x4ff108,_0x510321){const _0x33648f=_0x3364();return _0x36e3=function(_0x36e3f6,_0x444039){_0x36e3f6=_0x36e3f6-0x86;let _0x4aa6a2=_0x33648f[_0x36e3f6];return _0x4aa6a2;},_0x36e3(_0x4ff108,_0x510321);}let FluxDrawService=FluxDrawService_1=class FluxDrawService{constructor(_0x497efe,_0x51f984,_0x37239f,_0x2fd3cb){const _0x5e6b4d=_0xa09031;this[_0x5e6b4d(0x86)]=_0x497efe,this[_0x5e6b4d(0xc6)]=_0x51f984,this[_0x5e6b4d(0xc4)]=_0x37239f,this['openAIChatService']=_0x2fd3cb,this['logger']=new common_1[(_0x5e6b4d(0xbf))](FluxDrawService_1[_0x5e6b4d(0xb4)]);}async[_0xa09031(0x87)](_0x3eb2a5,_0x6e14d5){const _0x475594=_0xa09031;var _0x443459,_0x50b1ba,_0x574361,_0x2795ad;common_1[_0x475594(0xbf)][_0x475594(0xba)](_0x475594(0xb8),_0x475594(0xd1));const {apiKey:_0x11433c,model:_0x36b71d,proxyUrl:_0x373f18,prompt:_0x420d25,extraParam:_0x2dc568,timeout:_0x626c9b,onSuccess:_0x5b273e,onFailure:_0x2876c3,groupId:_0x49a6c6}=_0x3eb2a5,_0x1b7f14=await this['globalConfigService']['getConfigs']([_0x475594(0xa8)]);let _0x1e2b2f;if(_0x1b7f14==='1')try{common_1[_0x475594(0xbf)][_0x475594(0xba)](_0x475594(0x9a),_0x475594(0xd4));const {messagesHistory:_0x58cb01}=await _0x6e14d5(_0x475594(0xbe)+_0x420d25,{'groupId':_0x49a6c6,'systemMessage':'你是一个绘画提示词生成工具，请根据用户的要求，结合上下文，用一段文字，描述用户需要的绘画需求，不用包含任何礼貌性的寒暄,只需要场景的描述,可以适当联想','maxModelTokens':0x1f40,'maxRounds':0x5,'fileInfo':''},this[_0x475594(0xc4)]);_0x1e2b2f=await this[_0x475594(0xb9)][_0x475594(0xae)](_0x420d25,undefined,_0x58cb01);}catch(_0x445c24){console[_0x475594(0xc1)]('调用chatFree失败：',_0x445c24),_0x1e2b2f=_0x420d25;}else _0x1e2b2f=_0x420d25;const _0x26a6b5=(_0x2dc568===null||_0x2dc568===void 0x0?void 0x0:_0x2dc568[_0x475594(0x94)])||_0x475594(0x95);let _0x39d7be={'answer':'','fileInfo':'','status':0x2};try{const _0x2597d9={'method':_0x475594(0xc0),'url':_0x373f18+_0x475594(0xb1),'timeout':_0x626c9b,'headers':{'Content-Type':_0x475594(0xaf),'Authorization':'Bearer\x20'+_0x11433c},'data':{'model':_0x36b71d,'prompt':_0x1e2b2f,'size':_0x26a6b5}};common_1[_0x475594(0xbf)][_0x475594(0xba)](_0x475594(0xa4)+_0x2597d9[_0x475594(0x9b)]+_0x475594(0xbd)+JSON[_0x475594(0xc2)](_0x2597d9[_0x475594(0xb6)])+',\x20headers:\x20'+JSON[_0x475594(0xc2)](_0x2597d9[_0x475594(0x9d)]),_0x475594(0xbb));const _0x4ba64d=await(0x0,axios_1[_0x475594(0x8c)])(_0x2597d9);common_1['Logger']['debug']('请求成功'+JSON[_0x475594(0xc2)](_0x4ba64d[_0x475594(0xb6)][_0x475594(0xb6)][0x0])),common_1[_0x475594(0xbf)][_0x475594(0xcf)](_0x475594(0xbc)+JSON['stringify'](_0x4ba64d['status']));const _0x5de9bc=_0x4ba64d[_0x475594(0xb6)][_0x475594(0xb6)][0x0]['url'];try{common_1[_0x475594(0xbf)][_0x475594(0xba)](_0x475594(0x9f),_0x475594(0xd1));const _0x204cda=new Date(),_0xbe69b7=_0x204cda[_0x475594(0xb2)](),_0x492058=String(_0x204cda[_0x475594(0xca)]()+0x1)[_0x475594(0x8f)](0x2,'0'),_0x2ee663=String(_0x204cda[_0x475594(0xda)]())[_0x475594(0x8f)](0x2,'0'),_0x9ceb83=''+_0xbe69b7+_0x492058+'/'+_0x2ee663;_0x39d7be[_0x475594(0xce)]=await this[_0x475594(0x86)][_0x475594(0xa6)]({'url':_0x5de9bc,'dir':_0x475594(0xa0)+_0x9ceb83}),common_1[_0x475594(0xbf)][_0x475594(0xba)](_0x475594(0x88)+_0x39d7be[_0x475594(0xce)],_0x475594(0xd1));}catch(_0x2f090d){common_1[_0x475594(0xbf)][_0x475594(0xc1)](_0x475594(0x99)+_0x2f090d,_0x475594(0xd1));}let _0x5e2847;try{_0x5e2847=await this[_0x475594(0xb9)][_0x475594(0xae)](_0x475594(0x8a)+_0x1e2b2f+_0x475594(0x9c));}catch(_0xdf8ee5){_0x5e2847=_0x420d25+_0x475594(0xb7),common_1[_0x475594(0xbf)]['error'](_0x475594(0x8e),_0xdf8ee5);}_0x39d7be[_0x475594(0xd6)]=_0x5e2847,_0x39d7be[_0x475594(0xac)]=0x3,_0x5b273e(_0x39d7be);return;}catch(_0x4ceeac){_0x39d7be[_0x475594(0xac)]=0x5,_0x2876c3(_0x39d7be);const _0x2db1ef=((_0x443459=_0x4ceeac===null||_0x4ceeac===void 0x0?void 0x0:_0x4ceeac['response'])===null||_0x443459===void 0x0?void 0x0:_0x443459[_0x475594(0xac)])||0x1f4;console[_0x475594(0xba)]('draw\x20error:\x20',JSON[_0x475594(0xc2)](_0x4ceeac),_0x2db1ef);const _0x26ad0d=(_0x2795ad=(_0x574361=(_0x50b1ba=_0x4ceeac===null||_0x4ceeac===void 0x0?void 0x0:_0x4ceeac[_0x475594(0xd0)])===null||_0x50b1ba===void 0x0?void 0x0:_0x50b1ba['data'])===null||_0x574361===void 0x0?void 0x0:_0x574361[_0x475594(0xc1)])===null||_0x2795ad===void 0x0?void 0x0:_0x2795ad['message'];if(_0x2db1ef===0x1ad)return _0x39d7be[_0x475594(0xc3)]=_0x475594(0xab),_0x39d7be;if(_0x2db1ef===0x190&&_0x26ad0d['includes'](_0x475594(0xcb)))return _0x39d7be[_0x475594(0xc3)]='您的请求已被系统拒绝。您的提示可能存在一些非法的文本。',_0x39d7be;if(_0x2db1ef===0x190&&_0x26ad0d[_0x475594(0x91)](_0x475594(0xc8)))return _0x39d7be['text']=_0x475594(0xb3),_0x39d7be;if(_0x2db1ef===0x1f4)return _0x39d7be[_0x475594(0xc3)]=_0x475594(0xc5),_0x39d7be;if(_0x2db1ef===0x191)return _0x39d7be[_0x475594(0xc3)]=_0x475594(0xc9),_0x39d7be;return _0x39d7be[_0x475594(0xc3)]=_0x475594(0xaa),_0x39d7be;}}};FluxDrawService=FluxDrawService_1=__decorate([(0x0,common_1[_0xa09031(0xb0)])(),__metadata(_0xa09031(0xd5),[upload_service_1[_0xa09031(0xcc)],globalConfig_service_1[_0xa09031(0xcd)],chatLog_service_1[_0xa09031(0xa9)],openaiChat_service_1['OpenAIChatService']])],FluxDrawService),exports[_0xa09031(0xbb)]=FluxDrawService;