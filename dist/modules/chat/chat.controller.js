'use strict';const _0x3ec69d=_0x2240;function _0x211b(){const _0x459382=['defineProperty','./dto/chatProcess.dto','function','aiPptService','design:type','design:returntype','length','6994379uhjbJf','chatService','getOwnPropertyDescriptor','返回语音数据流','number','chatmind','__metadata','mj-fy','__esModule','ppt-cover','ApiResponse','MindMap','pptCover','使用GPT对绘画描述词进行翻译和优化，使用PromptOptimization模型','ttsProcess','Res','2mmePTs','@nestjs/swagger','UseGuards','design:paramtypes','../globalConfig/globalConfig.service','PromptOptimization','JwtAuthGuard','GlobalConfigService','生成PPT封面','ApiTags','Body','ApiOperation','../ai/aiPPT','437274JBGrnl','chatProcess','与GPT进行同步对话，返回完整响应','prototype','Controller','chatgpt','返回优化后的绘画描述词','GPT同步对话','2524212ejTVyT','globalConfigService','ChatController','chat-mind','string','assign','274752MdANav','9SzRDDu','1568735wtpiWv','任务ID','object','将文本转换为语音','Post','metadata','ChatService','1748740YRAvnk','生成的文件信息','../../common/auth/jwtAuth.guard','状态码：1-进行中，2-完成，3-失败','返回思维导图数据','ChatProcessDto','__param','响应文本','chatProcessSync','decorate','返回完整的对话响应','ApiBearerAuth','AI\x20服务统一接口','tts-process','28362464WRWFmK','任务数据','Req'];_0x211b=function(){return _0x459382;};return _0x211b();}function _0x2240(_0xbab91b,_0x5773ef){const _0x211b96=_0x211b();return _0x2240=function(_0x224022,_0x44ec63){_0x224022=_0x224022-0x1c6;let _0x528075=_0x211b96[_0x224022];return _0x528075;},_0x2240(_0xbab91b,_0x5773ef);}(function(_0x288815,_0x5117f4){const _0x3a380a=_0x2240,_0x122b6e=_0x288815();while(!![]){try{const _0x205bca=-parseInt(_0x3a380a(0x1f6))/0x1*(parseInt(_0x3a380a(0x211))/0x2)+-parseInt(_0x3a380a(0x20b))/0x3+-parseInt(_0x3a380a(0x1ce))/0x4+-parseInt(_0x3a380a(0x1c7))/0x5+parseInt(_0x3a380a(0x203))/0x6+-parseInt(_0x3a380a(0x1e6))/0x7+parseInt(_0x3a380a(0x1dc))/0x8*(parseInt(_0x3a380a(0x1c6))/0x9);if(_0x205bca===_0x5117f4)break;else _0x122b6e['push'](_0x122b6e['shift']());}catch(_0x460774){_0x122b6e['push'](_0x122b6e['shift']());}}}(_0x211b,0xb791e));var __decorate=this&&this['__decorate']||function(_0x43d9aa,_0x404e7c,_0xc0fd2f,_0x37357d){const _0x37c5b1=_0x2240;var _0xce677f=arguments[_0x37c5b1(0x1e5)],_0x384249=_0xce677f<0x3?_0x404e7c:_0x37357d===null?_0x37357d=Object[_0x37c5b1(0x1e8)](_0x404e7c,_0xc0fd2f):_0x37357d,_0x2c459b;if(typeof Reflect===_0x37c5b1(0x1c9)&&typeof Reflect['decorate']===_0x37c5b1(0x1e1))_0x384249=Reflect[_0x37c5b1(0x1d7)](_0x43d9aa,_0x404e7c,_0xc0fd2f,_0x37357d);else{for(var _0x44dadf=_0x43d9aa[_0x37c5b1(0x1e5)]-0x1;_0x44dadf>=0x0;_0x44dadf--)if(_0x2c459b=_0x43d9aa[_0x44dadf])_0x384249=(_0xce677f<0x3?_0x2c459b(_0x384249):_0xce677f>0x3?_0x2c459b(_0x404e7c,_0xc0fd2f,_0x384249):_0x2c459b(_0x404e7c,_0xc0fd2f))||_0x384249;}return _0xce677f>0x3&&_0x384249&&Object[_0x37c5b1(0x1df)](_0x404e7c,_0xc0fd2f,_0x384249),_0x384249;},__metadata=this&&this[_0x3ec69d(0x1ec)]||function(_0x3baea0,_0x10f501){const _0x71c4d3=_0x3ec69d;if(typeof Reflect===_0x71c4d3(0x1c9)&&typeof Reflect['metadata']===_0x71c4d3(0x1e1))return Reflect[_0x71c4d3(0x1cc)](_0x3baea0,_0x10f501);},__param=this&&this[_0x3ec69d(0x1d4)]||function(_0x1bfbd5,_0x354cbb){return function(_0x17e429,_0xdcf1e8){_0x354cbb(_0x17e429,_0xdcf1e8,_0x1bfbd5);};};Object['defineProperty'](exports,_0x3ec69d(0x1ee),{'value':!![]}),exports[_0x3ec69d(0x20d)]=void 0x0;const swagger_1=require(_0x3ec69d(0x1f7)),jwtAuth_guard_1=require(_0x3ec69d(0x1d0)),chat_service_1=require('./chat.service'),common_1=require('@nestjs/common'),chatProcess_dto_1=require(_0x3ec69d(0x1e0)),aiPPT_1=require(_0x3ec69d(0x202)),globalConfig_service_1=require(_0x3ec69d(0x1fa));let ChatController=class ChatController{constructor(_0x2a95dc,_0x470488,_0x2510fb){const _0x29e519=_0x3ec69d;this['chatService']=_0x2a95dc,this[_0x29e519(0x20c)]=_0x470488,this[_0x29e519(0x1e2)]=_0x2510fb;}[_0x3ec69d(0x204)](_0x464c02,_0x9553b2,_0x4cd240){const _0x50cdc2=_0x3ec69d;return this['chatService'][_0x50cdc2(0x204)](_0x464c02,_0x9553b2,_0x4cd240);}['chatProcessSync'](_0x2bf39d,_0x281160){const _0xcd090=_0x3ec69d;return this[_0xcd090(0x1e7)][_0xcd090(0x204)](Object[_0xcd090(0x210)]({},_0x2bf39d),_0x281160);}async['mjFanyi'](_0x560749,_0x3d4a7c){const _0x3990c9=_0x3ec69d;return this['chatService'][_0x3990c9(0x204)](Object[_0x3990c9(0x210)](Object['assign']({},_0x560749),{'specialModel':_0x3990c9(0x1fb)}),_0x3d4a7c);}async[_0x3ec69d(0x1eb)](_0x1359e3,_0x4d5f04,_0x13b586){const _0x4c6370=_0x3ec69d;return this['chatService']['chatProcess'](Object[_0x4c6370(0x210)](Object[_0x4c6370(0x210)]({},_0x1359e3),{'specialModel':_0x4c6370(0x1f1)}),_0x4d5f04,_0x13b586);}['ttsProcess'](_0x3645d1,_0x5c2188,_0x305713){const _0x2166d7=_0x3ec69d;return this[_0x2166d7(0x1e7)][_0x2166d7(0x1f4)](_0x3645d1,_0x5c2188,_0x305713);}[_0x3ec69d(0x1f2)](_0x390f55){const _0x2bd349=_0x3ec69d;return this[_0x2bd349(0x1e2)]['pptCover'](_0x390f55);}};__decorate([(0x0,common_1[_0x3ec69d(0x1cb)])('chat-process'),(0x0,swagger_1['ApiOperation'])({'summary':_0x3ec69d(0x1da),'description':'统一处理各种\x20AI\x20服务的请求，支持：\x0a\x20\x20\x20\x201.\x20OpenAI\x20聊天\x0a\x20\x20\x20\x20\x20\x20\x20-\x20model:\x20gpt-3.5-turbo,\x20gpt-4\x0a\x20\x20\x20\x202.\x20Suno\x20AI\x20音乐生成\x0a\x20\x20\x20\x20\x20\x20\x20-\x20model:\x20suno-music\x0a\x20\x20\x20\x20\x20\x20\x20-\x20歌词生成：action=\x22LYRICS\x22\x0a\x20\x20\x20\x20\x20\x20\x20-\x20音乐生成：action=\x22MUSIC\x22,\x20需提供\x20customId\x0a\x20\x20\x20\x203.\x20Luma\x20视频生成\x0a\x20\x20\x20\x20\x20\x20\x20-\x20model:\x20luma-video\x0a\x20\x20\x20\x20\x20\x20\x20-\x20action=\x22CREATE\x22\x0a\x20\x20\x20\x20\x20\x20\x20-\x20支持\x20extraParam\x20和\x20fileInfo\x20参数\x0a\x20\x20\x20\x204.\x20Flux\x20绘图\x0a\x20\x20\x20\x20\x20\x20\x20-\x20model:\x20flux\x0a\x20\x20\x20\x20\x20\x20\x20-\x20支持\x20extraParam\x20参数\x0a\x20\x20\x20\x20\x20\x20\x20-\x20可选\x20options.groupId\x20参数\x0a\x20\x20\x20\x205.\x20Midjourney\x20绘图\x0a\x20\x20\x20\x20\x20\x20\x20-\x20支持四种速度模式：\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20midjourney:\x20默认速度\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20midjourney-fast:\x20快速模式\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20midjourney-relax:\x20放松模式\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20midjourney-turbo:\x20极速模式\x0a\x20\x20\x20\x20\x20\x20\x20-\x20action:\x20IMAGINE,\x20UPSCALE,\x20VARIATION,\x20ZOOM,\x20PAN,\x20DESCRIBE,\x20BLEND\x0a\x20\x20\x20\x20\x20\x20\x20-\x20支持\x20extraParam\x20和\x20fileInfo\x20参数\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20所有请求都支持流式响应，可实时获取生成进度。'}),(0x0,swagger_1[_0x3ec69d(0x1f0)])({'status':0xc8,'description':'返回对话响应流或任务结果','schema':{'properties':{'text':{'type':_0x3ec69d(0x20f),'description':_0x3ec69d(0x1d5)},'fileInfo':{'type':_0x3ec69d(0x20f),'description':_0x3ec69d(0x1cf)},'taskId':{'type':'string','description':_0x3ec69d(0x1c8)},'taskData':{'type':'string','description':_0x3ec69d(0x1dd)},'status':{'type':_0x3ec69d(0x1ea),'description':_0x3ec69d(0x1d1)}}}}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x3ec69d(0x1fc)]),(0x0,swagger_1[_0x3ec69d(0x1d9)])(),__param(0x0,(0x0,common_1[_0x3ec69d(0x200)])()),__param(0x1,(0x0,common_1[_0x3ec69d(0x1de)])()),__param(0x2,(0x0,common_1[_0x3ec69d(0x1f5)])()),__metadata('design:type',Function),__metadata(_0x3ec69d(0x1f9),[chatProcess_dto_1[_0x3ec69d(0x1d3)],Object,Object]),__metadata(_0x3ec69d(0x1e4),void 0x0)],ChatController[_0x3ec69d(0x206)],_0x3ec69d(0x204),null),__decorate([(0x0,common_1[_0x3ec69d(0x1cb)])('chat-sync'),(0x0,swagger_1[_0x3ec69d(0x201)])({'summary':_0x3ec69d(0x20a),'description':_0x3ec69d(0x205)}),(0x0,swagger_1['ApiResponse'])({'status':0xc8,'description':_0x3ec69d(0x1d8)}),(0x0,common_1[_0x3ec69d(0x1f8)])(jwtAuth_guard_1['JwtAuthGuard']),(0x0,swagger_1[_0x3ec69d(0x1d9)])(),__param(0x0,(0x0,common_1[_0x3ec69d(0x200)])()),__param(0x1,(0x0,common_1['Req'])()),__metadata(_0x3ec69d(0x1e3),Function),__metadata(_0x3ec69d(0x1f9),[chatProcess_dto_1['ChatProcessDto'],Object]),__metadata('design:returntype',void 0x0)],ChatController[_0x3ec69d(0x206)],_0x3ec69d(0x1d6),null),__decorate([(0x0,common_1[_0x3ec69d(0x1cb)])(_0x3ec69d(0x1ed)),(0x0,swagger_1[_0x3ec69d(0x201)])({'summary':'GPT描述词绘画翻译','description':_0x3ec69d(0x1f3)}),(0x0,swagger_1[_0x3ec69d(0x1f0)])({'status':0xc8,'description':_0x3ec69d(0x209)}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x3ec69d(0x1fc)]),(0x0,swagger_1[_0x3ec69d(0x1d9)])(),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0x3ec69d(0x1de)])()),__metadata(_0x3ec69d(0x1e3),Function),__metadata(_0x3ec69d(0x1f9),[chatProcess_dto_1[_0x3ec69d(0x1d3)],Object]),__metadata(_0x3ec69d(0x1e4),Promise)],ChatController[_0x3ec69d(0x206)],'mjFanyi',null),__decorate([(0x0,common_1['Post'])(_0x3ec69d(0x20e)),(0x0,swagger_1[_0x3ec69d(0x201)])({'summary':'Mind思维导图生成','description':'使用GPT生成思维导图，使用MindMap专用模型'}),(0x0,swagger_1[_0x3ec69d(0x1f0)])({'status':0xc8,'description':_0x3ec69d(0x1d2)}),(0x0,common_1[_0x3ec69d(0x1f8)])(jwtAuth_guard_1[_0x3ec69d(0x1fc)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x3ec69d(0x200)])()),__param(0x1,(0x0,common_1['Req'])()),__param(0x2,(0x0,common_1[_0x3ec69d(0x1f5)])()),__metadata(_0x3ec69d(0x1e3),Function),__metadata(_0x3ec69d(0x1f9),[chatProcess_dto_1[_0x3ec69d(0x1d3)],Object,Object]),__metadata(_0x3ec69d(0x1e4),Promise)],ChatController[_0x3ec69d(0x206)],_0x3ec69d(0x1eb),null),__decorate([(0x0,common_1[_0x3ec69d(0x1cb)])(_0x3ec69d(0x1db)),(0x0,swagger_1[_0x3ec69d(0x201)])({'summary':'TTS语音合成','description':_0x3ec69d(0x1ca)}),(0x0,swagger_1[_0x3ec69d(0x1f0)])({'status':0xc8,'description':_0x3ec69d(0x1e9)}),(0x0,common_1[_0x3ec69d(0x1f8)])(jwtAuth_guard_1[_0x3ec69d(0x1fc)]),(0x0,swagger_1[_0x3ec69d(0x1d9)])(),__param(0x0,(0x0,common_1[_0x3ec69d(0x200)])()),__param(0x1,(0x0,common_1[_0x3ec69d(0x1de)])()),__param(0x2,(0x0,common_1['Res'])()),__metadata(_0x3ec69d(0x1e3),Function),__metadata('design:paramtypes',[Object,Object,Object]),__metadata('design:returntype',void 0x0)],ChatController[_0x3ec69d(0x206)],'ttsProcess',null),__decorate([(0x0,common_1[_0x3ec69d(0x1cb)])(_0x3ec69d(0x1ef)),(0x0,swagger_1[_0x3ec69d(0x201)])({'summary':'PPT封面生成','description':_0x3ec69d(0x1fe)}),(0x0,swagger_1[_0x3ec69d(0x1f0)])({'status':0xc8,'description':'返回生成的PPT封面数据'}),(0x0,common_1[_0x3ec69d(0x1f8)])(jwtAuth_guard_1[_0x3ec69d(0x1fc)]),(0x0,swagger_1[_0x3ec69d(0x1d9)])(),__param(0x0,(0x0,common_1['Body'])()),__metadata(_0x3ec69d(0x1e3),Function),__metadata(_0x3ec69d(0x1f9),[Object]),__metadata(_0x3ec69d(0x1e4),void 0x0)],ChatController[_0x3ec69d(0x206)],_0x3ec69d(0x1f2),null),ChatController=__decorate([(0x0,swagger_1[_0x3ec69d(0x1ff)])('chatgpt'),(0x0,common_1[_0x3ec69d(0x207)])(_0x3ec69d(0x208)),__metadata(_0x3ec69d(0x1f9),[chat_service_1[_0x3ec69d(0x1cd)],globalConfig_service_1[_0x3ec69d(0x1fd)],aiPPT_1['AiPptService']])],ChatController),exports[_0x3ec69d(0x20d)]=ChatController;