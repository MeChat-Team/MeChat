'use strict';const _0x10996f=_0xfa20;(function(_0x558965,_0x4211f3){const _0x481ce2=_0xfa20,_0x1fe0af=_0x558965();while(!![]){try{const _0x4ac755=parseInt(_0x481ce2(0x8b))/0x1*(parseInt(_0x481ce2(0x93))/0x2)+parseInt(_0x481ce2(0x7a))/0x3*(-parseInt(_0x481ce2(0x73))/0x4)+-parseInt(_0x481ce2(0x7d))/0x5+-parseInt(_0x481ce2(0x92))/0x6*(parseInt(_0x481ce2(0x7e))/0x7)+-parseInt(_0x481ce2(0x9f))/0x8*(-parseInt(_0x481ce2(0x79))/0x9)+-parseInt(_0x481ce2(0xaa))/0xa*(parseInt(_0x481ce2(0x9b))/0xb)+-parseInt(_0x481ce2(0x8e))/0xc*(-parseInt(_0x481ce2(0xa5))/0xd);if(_0x4ac755===_0x4211f3)break;else _0x1fe0af['push'](_0x1fe0af['shift']());}catch(_0x523250){_0x1fe0af['push'](_0x1fe0af['shift']());}}}(_0x2a36,0x74898));function _0x2a36(){const _0x43e201=['revised_prompt','fileInfo','includes','length','1024x1024','OpenAIChatService','stringify','chatFree','getMonth','DrawService','../chatLog/chatLog.service','design:paramtypes','\x20绘制成功','size','decorate','data','getFullYear','4ADLPUl','绘制图片失败，此次绘画被拒绝了！','openAIChatService','name','isDalleChat','Billing\x20hard\x20limit\x20has\x20been\x20reached','3528153BifFXM','418062CCixIS','uploadService','images/dalle/','3062945iUpoUU','4473DQBIZB','图片上传成功，URL:\x20','您的请求已被系统拒绝。您的提示可能存在一些非法的文本。','draw\x20error:\x20','上传图片过程中出现错误:\x20','调用chatFree失败：','当前模型key已被封禁、已冻结当前调用Key、尝试重新对话试试吧！','Logger','getOwnPropertyDescriptor','answer','metadata','log','text','1405DwqeZJ','getDate','绘制图片失败，请稍后试试吧！','112188xJLqjm','Injectable','function','chatLogService','2556hrBeaE','74aFYSkU','参考上文，结合我的需求，给出绘画描述。我的需求是：','dalleDraw','padStart','开始提交\x20Dalle\x20绘图任务\x20','__esModule','response','},\x20模拟AI绘画机器人的语气，用中文回复，告诉用户已经画好了','242BlAdDX','绘制图片失败，请检查你的提示词是否有非法描述！','当前请求已过载、请稍等会儿再试试吧！','getConfigs','8xCDqqg','status','url','uploadFileFromUrl','error','__decorate','1781JdqRAz','defineProperty','@nestjs/common','This\x20request\x20has\x20been\x20blocked\x20by\x20our\x20content\x20filters','------>\x20开始上传图片！！！','101510xkTyOu','POST','message','object'];_0x2a36=function(){return _0x43e201;};return _0x2a36();}var __decorate=this&&this[_0x10996f(0xa4)]||function(_0x44aee9,_0x574526,_0x2142ce,_0x3accb9){const _0x223c3c=_0x10996f;var _0x47398c=arguments[_0x223c3c(0xb1)],_0x2df184=_0x47398c<0x3?_0x574526:_0x3accb9===null?_0x3accb9=Object[_0x223c3c(0x86)](_0x574526,_0x2142ce):_0x3accb9,_0x35cdb8;if(typeof Reflect===_0x223c3c(0xad)&&typeof Reflect[_0x223c3c(0x70)]===_0x223c3c(0x90))_0x2df184=Reflect[_0x223c3c(0x70)](_0x44aee9,_0x574526,_0x2142ce,_0x3accb9);else{for(var _0x3d4ead=_0x44aee9[_0x223c3c(0xb1)]-0x1;_0x3d4ead>=0x0;_0x3d4ead--)if(_0x35cdb8=_0x44aee9[_0x3d4ead])_0x2df184=(_0x47398c<0x3?_0x35cdb8(_0x2df184):_0x47398c>0x3?_0x35cdb8(_0x574526,_0x2142ce,_0x2df184):_0x35cdb8(_0x574526,_0x2142ce))||_0x2df184;}return _0x47398c>0x3&&_0x2df184&&Object[_0x223c3c(0xa6)](_0x574526,_0x2142ce,_0x2df184),_0x2df184;},__metadata=this&&this['__metadata']||function(_0xe00f36,_0x342afa){const _0x14ed95=_0x10996f;if(typeof Reflect===_0x14ed95(0xad)&&typeof Reflect[_0x14ed95(0x88)]===_0x14ed95(0x90))return Reflect[_0x14ed95(0x88)](_0xe00f36,_0x342afa);},OpenAIDrawService_1;Object[_0x10996f(0xa6)](exports,_0x10996f(0x98),{'value':!![]}),exports['OpenAIDrawService']=void 0x0;const common_1=require(_0x10996f(0xa7)),axios_1=require('axios'),chatLog_service_1=require(_0x10996f(0x6c)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),upload_service_1=require('../upload/upload.service'),openaiChat_service_1=require('./openaiChat.service');function _0xfa20(_0x16f5ee,_0x101aa4){const _0x2a36a7=_0x2a36();return _0xfa20=function(_0xfa2090,_0x437890){_0xfa2090=_0xfa2090-0x6c;let _0x1bd225=_0x2a36a7[_0xfa2090];return _0x1bd225;},_0xfa20(_0x16f5ee,_0x101aa4);}let OpenAIDrawService=OpenAIDrawService_1=class OpenAIDrawService{constructor(_0x3d3ae5,_0x247ea7,_0x463612,_0x4882f9){const _0x42be85=_0x10996f;this[_0x42be85(0x7b)]=_0x3d3ae5,this['globalConfigService']=_0x247ea7,this[_0x42be85(0x91)]=_0x463612,this[_0x42be85(0x75)]=_0x4882f9,this['logger']=new common_1['Logger'](OpenAIDrawService_1[_0x42be85(0x76)]);}async[_0x10996f(0x95)](_0x47dabc,_0x4b6044){const _0x2208de=_0x10996f;var _0x16bca9,_0x4f560b,_0x565310,_0x49eeed;common_1[_0x2208de(0x85)][_0x2208de(0x89)](_0x2208de(0x97),_0x2208de(0xb7));const {apiKey:_0x246bd8,model:_0x1fcf25,proxyUrl:_0x40a2e1,prompt:_0x23b3da,extraParam:_0xa143a1,timeout:_0x4fb87f,onSuccess:_0x279218,onFailure:_0x2fe6e7,groupId:_0x5ac98f}=_0x47dabc,_0x4d07e3=await this['globalConfigService'][_0x2208de(0x9e)]([_0x2208de(0x77)]);let _0x4c626d;if(_0x4d07e3==='1')try{common_1[_0x2208de(0x85)][_0x2208de(0x89)]('已开启连续绘画模式','DalleDraw');const {messagesHistory:_0x54395c}=await _0x4b6044(_0x2208de(0x94)+_0x23b3da,{'groupId':_0x5ac98f,'systemMessage':'你是一个绘画提示词生成工具，请根据用户的要求，结合上下文，用一段文字，描述用户需要的绘画需求，不用包含任何礼貌性的寒暄,只需要场景的描述,可以适当联想','maxModelTokens':0x1f40,'maxRounds':0x5,'fileInfo':''},this[_0x2208de(0x91)]);_0x4c626d=await this[_0x2208de(0x75)][_0x2208de(0xb5)](_0x23b3da,undefined,_0x54395c);}catch(_0x4d176e){console[_0x2208de(0xa3)](_0x2208de(0x83),_0x4d176e),_0x4c626d=_0x23b3da;}else _0x4c626d=_0x23b3da;const _0x2b7d47=(_0xa143a1===null||_0xa143a1===void 0x0?void 0x0:_0xa143a1[_0x2208de(0x6f)])||_0x2208de(0xb2);let _0x4adf1a={'answer':'','fileInfo':'','status':0x2};try{const _0x11edd3={'method':_0x2208de(0xab),'url':_0x40a2e1+'/v1/images/generations','timeout':_0x4fb87f,'headers':{'Content-Type':'application/json','Authorization':'Bearer\x20'+_0x246bd8},'data':{'model':_0x1fcf25,'prompt':_0x4c626d,'size':_0x2b7d47}},_0x43a5e4=await(0x0,axios_1['default'])(_0x11edd3),_0x1279f4=_0x43a5e4[_0x2208de(0x71)][_0x2208de(0x71)][0x0][_0x2208de(0xa1)];try{common_1[_0x2208de(0x85)][_0x2208de(0x89)](_0x2208de(0xa9),_0x2208de(0xb7));const _0x13742d=new Date(),_0x5ca0f5=_0x13742d[_0x2208de(0x72)](),_0x429920=String(_0x13742d[_0x2208de(0xb6)]()+0x1)['padStart'](0x2,'0'),_0x3f5f57=String(_0x13742d[_0x2208de(0x8c)]())[_0x2208de(0x96)](0x2,'0'),_0x479cf7=''+_0x5ca0f5+_0x429920+'/'+_0x3f5f57;_0x4adf1a[_0x2208de(0xaf)]=await this[_0x2208de(0x7b)][_0x2208de(0xa2)]({'url':_0x1279f4,'dir':_0x2208de(0x7c)+_0x479cf7}),common_1[_0x2208de(0x85)][_0x2208de(0x89)](_0x2208de(0x7f)+_0x4adf1a['fileInfo'],_0x2208de(0xb7));}catch(_0x337377){common_1[_0x2208de(0x85)][_0x2208de(0xa3)](_0x2208de(0x82)+_0x337377,_0x2208de(0xb7));}let _0x4af8af;try{_0x4af8af=await this['openAIChatService'][_0x2208de(0xb5)]('根据提示词{'+_0x43a5e4[_0x2208de(0x71)][_0x2208de(0x71)][0x0][_0x2208de(0xae)]+_0x2208de(0x9a));}catch(_0x587010){_0x4af8af=_0x23b3da+_0x2208de(0x6e),common_1[_0x2208de(0x85)]['error']('翻译失败:\x20',_0x587010);}_0x4adf1a[_0x2208de(0x87)]=_0x4af8af,_0x4adf1a['status']=0x3,_0x279218(_0x4adf1a);return;}catch(_0x277293){_0x4adf1a[_0x2208de(0xa0)]=0x5,_0x2fe6e7(_0x4adf1a);const _0x5a4acb=((_0x16bca9=_0x277293===null||_0x277293===void 0x0?void 0x0:_0x277293[_0x2208de(0x99)])===null||_0x16bca9===void 0x0?void 0x0:_0x16bca9[_0x2208de(0xa0)])||0x1f4;console[_0x2208de(0x89)](_0x2208de(0x81),JSON[_0x2208de(0xb4)](_0x277293),_0x5a4acb);const _0x722d2d=(_0x49eeed=(_0x565310=(_0x4f560b=_0x277293===null||_0x277293===void 0x0?void 0x0:_0x277293['response'])===null||_0x4f560b===void 0x0?void 0x0:_0x4f560b[_0x2208de(0x71)])===null||_0x565310===void 0x0?void 0x0:_0x565310[_0x2208de(0xa3)])===null||_0x49eeed===void 0x0?void 0x0:_0x49eeed[_0x2208de(0xac)];if(_0x5a4acb===0x1ad)return _0x4adf1a[_0x2208de(0x8a)]=_0x2208de(0x9d),_0x4adf1a;if(_0x5a4acb===0x190&&_0x722d2d[_0x2208de(0xb0)](_0x2208de(0xa8)))return _0x4adf1a['text']=_0x2208de(0x80),_0x4adf1a;if(_0x5a4acb===0x190&&_0x722d2d[_0x2208de(0xb0)](_0x2208de(0x78)))return _0x4adf1a['text']=_0x2208de(0x84),_0x4adf1a;if(_0x5a4acb===0x1f4)return _0x4adf1a[_0x2208de(0x8a)]=_0x2208de(0x9c),_0x4adf1a;if(_0x5a4acb===0x191)return _0x4adf1a[_0x2208de(0x8a)]=_0x2208de(0x74),_0x4adf1a;return _0x4adf1a[_0x2208de(0x8a)]=_0x2208de(0x8d),_0x4adf1a;}}};OpenAIDrawService=OpenAIDrawService_1=__decorate([(0x0,common_1[_0x10996f(0x8f)])(),__metadata(_0x10996f(0x6d),[upload_service_1['UploadService'],globalConfig_service_1['GlobalConfigService'],chatLog_service_1['ChatLogService'],openaiChat_service_1[_0x10996f(0xb3)]])],OpenAIDrawService),exports['OpenAIDrawService']=OpenAIDrawService;