'use strict';function _0x2221(){const _0x8383b0=['9ajGbxn','开始提交\x20Flux\x20绘图任务\x20','，payload:\x20','log','FluxDraw','UploadService','957116QjngBg','386626PviqeS','90kvczvQ','chatFree','answer','decorate','请求成功','object','GlobalConfigService','84wqUTDp','758134cQtYYa','getFullYear','930457fYPrgT','metadata','getMonth','绘制图片失败，此次绘画被拒绝了！','138vniYtD','error','stringify','draw\x20error:\x20','3imgPGT','default','url','length','11155NOyPyZ','__decorate','翻译失败:\x20','绘制图片失败，请稍后试试吧！','data','status','text','您的请求已被系统拒绝。您的提示可能存在一些非法的文本。','4890501eavndo','globalConfigService','defineProperty','axios','已开启连续绘画模式','__metadata','uploadFileFromUrl','------>\x20开始上传图片！！！','function','DrawService','This\x20request\x20has\x20been\x20blocked\x20by\x20our\x20content\x20filters','../globalConfig/globalConfig.service','3HErggO','图片上传成功，URL:\x20','Logger','padStart','getConfigs','application/json','fileInfo','ChatLogService','你是一个绘画提示词生成工具，请根据用户的要求，结合上下文，用一段文字，描述用户需要的绘画需求，不用包含任何礼貌性的寒暄,只需要场景的描述,可以适当联想','2021656iPeANi','OpenAIChatService','debug','},\x20模拟AI绘画机器人的语气，用中文回复，告诉用户已经画好了','FluxDrawService','绘制图片失败，请检查你的提示词是否有非法描述！','includes','参考上文，结合我的需求，给出绘画描述。我的需求是：','@nestjs/common','uploadService','design:paramtypes','openAIChatService','../upload/upload.service','size','chatLogService','getDate','\x20绘制成功','getOwnPropertyDescriptor'];_0x2221=function(){return _0x8383b0;};return _0x2221();}const _0xb65b7d=_0x446f;(function(_0x4238b3,_0x25ab27){const _0x579bf3=_0x446f,_0x73de2f=_0x4238b3();while(!![]){try{const _0x579983=-parseInt(_0x579bf3(0x1ac))/0x1*(-parseInt(_0x579bf3(0x181))/0x2)+-parseInt(_0x579bf3(0x194))/0x3*(-parseInt(_0x579bf3(0x180))/0x4)+-parseInt(_0x579bf3(0x198))/0x5*(parseInt(_0x579bf3(0x190))/0x6)+parseInt(_0x579bf3(0x1a0))/0x7+parseInt(_0x579bf3(0x1b5))/0x8*(parseInt(_0x579bf3(0x1c7))/0x9)+-parseInt(_0x579bf3(0x182))/0xa*(parseInt(_0x579bf3(0x18c))/0xb)+-parseInt(_0x579bf3(0x189))/0xc*(parseInt(_0x579bf3(0x18a))/0xd);if(_0x579983===_0x25ab27)break;else _0x73de2f['push'](_0x73de2f['shift']());}catch(_0x2119f4){_0x73de2f['push'](_0x73de2f['shift']());}}}(_0x2221,0x86372));var __decorate=this&&this[_0xb65b7d(0x199)]||function(_0x3f8d2c,_0x488fd6,_0x283f90,_0xea8f71){const _0x2456c9=_0xb65b7d;var _0x29eeca=arguments['length'],_0x51dcda=_0x29eeca<0x3?_0x488fd6:_0xea8f71===null?_0xea8f71=Object[_0x2456c9(0x1c6)](_0x488fd6,_0x283f90):_0xea8f71,_0x5223b3;if(typeof Reflect===_0x2456c9(0x187)&&typeof Reflect[_0x2456c9(0x185)]===_0x2456c9(0x1a8))_0x51dcda=Reflect[_0x2456c9(0x185)](_0x3f8d2c,_0x488fd6,_0x283f90,_0xea8f71);else{for(var _0x142146=_0x3f8d2c[_0x2456c9(0x197)]-0x1;_0x142146>=0x0;_0x142146--)if(_0x5223b3=_0x3f8d2c[_0x142146])_0x51dcda=(_0x29eeca<0x3?_0x5223b3(_0x51dcda):_0x29eeca>0x3?_0x5223b3(_0x488fd6,_0x283f90,_0x51dcda):_0x5223b3(_0x488fd6,_0x283f90))||_0x51dcda;}return _0x29eeca>0x3&&_0x51dcda&&Object[_0x2456c9(0x1a2)](_0x488fd6,_0x283f90,_0x51dcda),_0x51dcda;},__metadata=this&&this[_0xb65b7d(0x1a5)]||function(_0x9a17b9,_0x4a8506){const _0x1b4db5=_0xb65b7d;if(typeof Reflect===_0x1b4db5(0x187)&&typeof Reflect[_0x1b4db5(0x18d)]===_0x1b4db5(0x1a8))return Reflect[_0x1b4db5(0x18d)](_0x9a17b9,_0x4a8506);},FluxDrawService_1;function _0x446f(_0x4e5262,_0x52d9ae){const _0x2221ce=_0x2221();return _0x446f=function(_0x446fef,_0x1345ef){_0x446fef=_0x446fef-0x17d;let _0x2c0113=_0x2221ce[_0x446fef];return _0x2c0113;},_0x446f(_0x4e5262,_0x52d9ae);}Object[_0xb65b7d(0x1a2)](exports,'__esModule',{'value':!![]}),exports[_0xb65b7d(0x1b9)]=void 0x0;const common_1=require(_0xb65b7d(0x1bd)),axios_1=require(_0xb65b7d(0x1a3)),chatLog_service_1=require('../chatLog/chatLog.service'),globalConfig_service_1=require(_0xb65b7d(0x1ab)),upload_service_1=require(_0xb65b7d(0x1c1)),openaiChat_service_1=require('./openaiChat.service');let FluxDrawService=FluxDrawService_1=class FluxDrawService{constructor(_0x48721f,_0x450b65,_0x4d1e3e,_0x451c62){const _0x43f2a3=_0xb65b7d;this[_0x43f2a3(0x1be)]=_0x48721f,this[_0x43f2a3(0x1a1)]=_0x450b65,this[_0x43f2a3(0x1c3)]=_0x4d1e3e,this[_0x43f2a3(0x1c0)]=_0x451c62,this['logger']=new common_1[(_0x43f2a3(0x1ae))](FluxDrawService_1['name']);}async['fluxDraw'](_0x51fb5d,_0x39dbd9){const _0x2d5460=_0xb65b7d;var _0x2c46a6,_0xe784e6,_0x208e60,_0x3600ee;common_1[_0x2d5460(0x1ae)][_0x2d5460(0x17d)](_0x2d5460(0x1c8),_0x2d5460(0x1a9));const {apiKey:_0x2d8084,model:_0x2a03b4,proxyUrl:_0x55069d,prompt:_0x55e3f7,extraParam:_0x547b5f,timeout:_0x581388,onSuccess:_0x5c4c09,onFailure:_0x45bc76,groupId:_0x47eba8}=_0x51fb5d,_0x2e2f1a=await this['globalConfigService'][_0x2d5460(0x1b0)](['isDalleChat']);let _0x207a3;if(_0x2e2f1a==='1')try{common_1[_0x2d5460(0x1ae)]['log'](_0x2d5460(0x1a4),_0x2d5460(0x17e));const {messagesHistory:_0x4a615b}=await _0x39dbd9(_0x2d5460(0x1bc)+_0x55e3f7,{'groupId':_0x47eba8,'systemMessage':_0x2d5460(0x1b4),'maxModelTokens':0x1f40,'maxRounds':0x5,'fileInfo':''},this[_0x2d5460(0x1c3)]);_0x207a3=await this[_0x2d5460(0x1c0)]['chatFree'](_0x55e3f7,undefined,_0x4a615b);}catch(_0x1f7f1f){console[_0x2d5460(0x191)]('调用chatFree失败：',_0x1f7f1f),_0x207a3=_0x55e3f7;}else _0x207a3=_0x55e3f7;const _0x3d8c30=(_0x547b5f===null||_0x547b5f===void 0x0?void 0x0:_0x547b5f[_0x2d5460(0x1c2)])||'1024x1024';let _0x159e09={'answer':'','fileInfo':'','status':0x2};try{const _0x1ec0b2={'method':'POST','url':_0x55069d+'/v1/images/generations','timeout':_0x581388,'headers':{'Content-Type':_0x2d5460(0x1b1),'Authorization':'Bearer\x20'+_0x2d8084},'data':{'model':_0x2a03b4,'prompt':_0x207a3,'size':_0x3d8c30}};common_1['Logger']['log']('正在准备发送请求到\x20'+_0x1ec0b2[_0x2d5460(0x196)]+_0x2d5460(0x1c9)+JSON[_0x2d5460(0x192)](_0x1ec0b2[_0x2d5460(0x19c)])+',\x20headers:\x20'+JSON['stringify'](_0x1ec0b2['headers']),_0x2d5460(0x1b9));const _0x19876c=await(0x0,axios_1[_0x2d5460(0x195)])(_0x1ec0b2);common_1[_0x2d5460(0x1ae)][_0x2d5460(0x1b7)](_0x2d5460(0x186)+JSON[_0x2d5460(0x192)](_0x19876c[_0x2d5460(0x19c)][_0x2d5460(0x19c)][0x0])),common_1['Logger'][_0x2d5460(0x1b7)]('请求状态'+JSON[_0x2d5460(0x192)](_0x19876c[_0x2d5460(0x19d)]));const _0x274de3=_0x19876c['data'][_0x2d5460(0x19c)][0x0][_0x2d5460(0x196)];try{common_1['Logger'][_0x2d5460(0x17d)](_0x2d5460(0x1a7),_0x2d5460(0x1a9));const _0x328a35=new Date(),_0x2fce0d=_0x328a35[_0x2d5460(0x18b)](),_0x725f77=String(_0x328a35[_0x2d5460(0x18e)]()+0x1)[_0x2d5460(0x1af)](0x2,'0'),_0x8dd8bb=String(_0x328a35[_0x2d5460(0x1c4)]())[_0x2d5460(0x1af)](0x2,'0'),_0x44fe9b=''+_0x2fce0d+_0x725f77+'/'+_0x8dd8bb;_0x159e09['fileInfo']=await this['uploadService'][_0x2d5460(0x1a6)]({'url':_0x274de3,'dir':'images/dalle/'+_0x44fe9b}),common_1[_0x2d5460(0x1ae)]['log'](_0x2d5460(0x1ad)+_0x159e09[_0x2d5460(0x1b2)],'DrawService');}catch(_0x186f72){common_1[_0x2d5460(0x1ae)][_0x2d5460(0x191)]('上传图片过程中出现错误:\x20'+_0x186f72,_0x2d5460(0x1a9));}let _0x5a8a16;try{_0x5a8a16=await this['openAIChatService'][_0x2d5460(0x183)]('根据提示词{'+_0x207a3+_0x2d5460(0x1b8));}catch(_0x8da79){_0x5a8a16=_0x55e3f7+_0x2d5460(0x1c5),common_1[_0x2d5460(0x1ae)]['error'](_0x2d5460(0x19a),_0x8da79);}_0x159e09[_0x2d5460(0x184)]=_0x5a8a16,_0x159e09[_0x2d5460(0x19d)]=0x3,_0x5c4c09(_0x159e09);return;}catch(_0x1e7195){_0x159e09[_0x2d5460(0x19d)]=0x5,_0x45bc76(_0x159e09);const _0x2fc1e2=((_0x2c46a6=_0x1e7195===null||_0x1e7195===void 0x0?void 0x0:_0x1e7195['response'])===null||_0x2c46a6===void 0x0?void 0x0:_0x2c46a6[_0x2d5460(0x19d)])||0x1f4;console[_0x2d5460(0x17d)](_0x2d5460(0x193),JSON[_0x2d5460(0x192)](_0x1e7195),_0x2fc1e2);const _0xade42a=(_0x3600ee=(_0x208e60=(_0xe784e6=_0x1e7195===null||_0x1e7195===void 0x0?void 0x0:_0x1e7195['response'])===null||_0xe784e6===void 0x0?void 0x0:_0xe784e6['data'])===null||_0x208e60===void 0x0?void 0x0:_0x208e60[_0x2d5460(0x191)])===null||_0x3600ee===void 0x0?void 0x0:_0x3600ee['message'];if(_0x2fc1e2===0x1ad)return _0x159e09['text']='当前请求已过载、请稍等会儿再试试吧！',_0x159e09;if(_0x2fc1e2===0x190&&_0xade42a['includes'](_0x2d5460(0x1aa)))return _0x159e09[_0x2d5460(0x19e)]=_0x2d5460(0x19f),_0x159e09;if(_0x2fc1e2===0x190&&_0xade42a[_0x2d5460(0x1bb)]('Billing\x20hard\x20limit\x20has\x20been\x20reached'))return _0x159e09[_0x2d5460(0x19e)]='当前模型key已被封禁、已冻结当前调用Key、尝试重新对话试试吧！',_0x159e09;if(_0x2fc1e2===0x1f4)return _0x159e09[_0x2d5460(0x19e)]=_0x2d5460(0x1ba),_0x159e09;if(_0x2fc1e2===0x191)return _0x159e09[_0x2d5460(0x19e)]=_0x2d5460(0x18f),_0x159e09;return _0x159e09[_0x2d5460(0x19e)]=_0x2d5460(0x19b),_0x159e09;}}};FluxDrawService=FluxDrawService_1=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0xb65b7d(0x1bf),[upload_service_1[_0xb65b7d(0x17f)],globalConfig_service_1[_0xb65b7d(0x188)],chatLog_service_1[_0xb65b7d(0x1b3)],openaiChat_service_1[_0xb65b7d(0x1b6)]])],FluxDrawService),exports['FluxDrawService']=FluxDrawService;