'use strict';const _0x54996d=_0x1fc5;(function(_0x588f68,_0x3d455a){const _0x27ce5b=_0x1fc5,_0xa3e155=_0x588f68();while(!![]){try{const _0x5a1b53=-parseInt(_0x27ce5b(0x184))/0x1+-parseInt(_0x27ce5b(0x154))/0x2*(-parseInt(_0x27ce5b(0x15c))/0x3)+-parseInt(_0x27ce5b(0x1da))/0x4+parseInt(_0x27ce5b(0x1b4))/0x5*(parseInt(_0x27ce5b(0xfd))/0x6)+-parseInt(_0x27ce5b(0x157))/0x7+parseInt(_0x27ce5b(0x14e))/0x8+parseInt(_0x27ce5b(0x1e4))/0x9;if(_0x5a1b53===_0x3d455a)break;else _0xa3e155['push'](_0xa3e155['shift']());}catch(_0x4690de){_0xa3e155['push'](_0xa3e155['shift']());}}}(_0x534a,0x37e1d));var __decorate=this&&this[_0x54996d(0x14a)]||function(_0x317d81,_0x3b32b7,_0x6c20a1,_0x47c9d8){const _0x4c0cc7=_0x54996d;var _0x7807be=arguments['length'],_0x146654=_0x7807be<0x3?_0x3b32b7:_0x47c9d8===null?_0x47c9d8=Object[_0x4c0cc7(0x196)](_0x3b32b7,_0x6c20a1):_0x47c9d8,_0x40cab4;if(typeof Reflect==='object'&&typeof Reflect[_0x4c0cc7(0x12c)]===_0x4c0cc7(0xfa))_0x146654=Reflect[_0x4c0cc7(0x12c)](_0x317d81,_0x3b32b7,_0x6c20a1,_0x47c9d8);else{for(var _0x3b7f52=_0x317d81[_0x4c0cc7(0x1a9)]-0x1;_0x3b7f52>=0x0;_0x3b7f52--)if(_0x40cab4=_0x317d81[_0x3b7f52])_0x146654=(_0x7807be<0x3?_0x40cab4(_0x146654):_0x7807be>0x3?_0x40cab4(_0x3b32b7,_0x6c20a1,_0x146654):_0x40cab4(_0x3b32b7,_0x6c20a1))||_0x146654;}return _0x7807be>0x3&&_0x146654&&Object[_0x4c0cc7(0x176)](_0x3b32b7,_0x6c20a1,_0x146654),_0x146654;},__metadata=this&&this[_0x54996d(0x1eb)]||function(_0xa502d0,_0x136eb5){const _0xa2dfce=_0x54996d;if(typeof Reflect===_0xa2dfce(0xf6)&&typeof Reflect[_0xa2dfce(0x13d)]==='function')return Reflect[_0xa2dfce(0x13d)](_0xa502d0,_0x136eb5);},__param=this&&this[_0x54996d(0x162)]||function(_0x6a2017,_0x42d088){return function(_0x2d5199,_0x121c96){_0x42d088(_0x2d5199,_0x121c96,_0x6a2017);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['ChatService']=void 0x0;const utils_1=require(_0x54996d(0x182)),common_1=require(_0x54996d(0x130)),typeorm_1=require('@nestjs/typeorm'),axios_1=require(_0x54996d(0x1ba)),typeorm_2=require(_0x54996d(0x144)),aiPPT_1=require('../ai/aiPPT'),cogVideo_service_1=require('../ai/cogVideo.service'),fluxDraw_service_1=require('../ai/fluxDraw.service'),lumaVideo_service_1=require(_0x54996d(0x1aa)),midjourneyDraw_service_1=require('../ai/midjourneyDraw.service'),openaiChat_service_1=require(_0x54996d(0x11c)),openaiDraw_service_1=require(_0x54996d(0xfe)),stableDiffusion_service_1=require('../ai/stableDiffusion.service'),suno_service_1=require(_0x54996d(0x12e)),app_entity_1=require(_0x54996d(0x19c)),autoreply_service_1=require(_0x54996d(0x13b)),badWords_service_1=require(_0x54996d(0x146)),chatGroup_service_1=require(_0x54996d(0x1bf)),chatLog_service_1=require(_0x54996d(0x10d)),config_entity_1=require(_0x54996d(0x15d)),globalConfig_service_1=require(_0x54996d(0x1e9)),models_service_1=require('../models/models.service'),plugin_entity_1=require(_0x54996d(0x128)),upload_service_1=require(_0x54996d(0x18b)),user_service_1=require('../user/user.service'),userBalance_service_1=require(_0x54996d(0x159));function _0x534a(){const _0x5d4cbf=['ModelsService','typeorm','dalleDraw','../badWords/badWords.service','chatFree','includes','正在尝试转换URL为Base64:\x20','__decorate','StableDiffusionService','模型切换错误，请检查全局模型配置！','saveChatLog','1764552ZzmeZk','发生错误:','以下是我提供给你的知识库：【','midjourneyService','base64','trim','22038JgQVvi','usePlugin','使用文件解析:\x20','382991zAMoas','from','../userBalance/userBalance.service','openaiTemperature','parse','24tBuNRW','../globalConfig/config.entity','getConfigs','成功转换URL为Base64:\x20','user','/v1/audio/speech','__param','使用全局预设:\x20','https://api.openai.com','data','isGeneratePromptReference','preset','modelInfo','提交成功，歌曲生成中','chatProcess','新对话','ChatGroupService','aiPPT','UserService','errMsg','findOne','systemPreMessage','GlobalConfigService','}，生成三个更进入一步的提问，用{}包裹每个问题，不需要分行，不需要其他任何内容，单个提问不超过30个字','chatHistory','abort','defineProperty','TTSService','saveUseLog','get','stable-diffusion','调用\x20chatFree\x20出错:\x20','cogVideoService','您提交的信息中包含违规的内容，我们已对您的账户进行标记，请合规使用！','content-type','all','记录:','任务提交失败，不执行扣费','../../common/utils','midjourney','274636OYgcFC','ceil','返回原始链接:\x20','openAIChatService','role','luma-video','updateTime','../upload/upload.service','更新标题名称为:\x20','binary','pluginImg','ChatService','】，在回答问题之前，先检索知识库内有没有相关的内容，尽量使用知识库中获取到的信息来回答我的问题，以知识库中的为准。','join','deductFromBalance','BAD_REQUEST','TTS\x20请求或上传过程失败:','getTokenCount','getOwnPropertyDescriptor','queryUserBalance','openAIDrawService','AppEntity','getDate','log','../app/app.entity','configEntity','生成中','isSystemPlugin','default','系统消息超过最大长度，将被截断','tts-1','100%','headers','lumaVideo','openaiBaseKey','POST','chat-error\x20<----------------------------------------->','length','../ai/lumaVideo.service','gpts','根据用户提问{','globalConfigService','使用插件预设:\x20','design:paramtypes','text','stringify','checkAutoReply','未找到当前模型key，切换至全局模型','15qdNhjP','插件调用成功\x20返回结果:\x20','使用应用预设:\x20','openaiBaseUrl','sdxl','update','axios','InjectRepository','checkModelLimits','checkBadWords','isMjTranslate','../chatGroup/chatGroup.service','ConfigEntity','config','updateChatTitle','pluginKey','UPSCALE','onyx','content','write','AutoreplyService','PluginService','audio/openai/','固定模型、使用应用预设:\x20','fileInfo','buildMessageFromParentMessageId','application/json','ttsProcess','SunoService','badWordsService','}以及\x20AI\x20的回答{','isAIReplyEnabled','data:','checkUserStatus','绘图失败','生成失败','TTS\x20请求获取成功','audio/mpeg','185908QBfGLn','\x20模型:\x20','toISOString','userService','answer','validateBalance','repeat','getGroupInfoFromId','push','status','560871hGRGuA','flux','stableDiffusionService','system','split','../globalConfig/globalConfig.service','arraybuffer','__metadata','cog-video','mjTranslatePrompt','Logger','AiPptService','ChatLogService','pluginEntity','isConvertToBase64','处理请求时发生错误','openaiVoice','forEach','object','getCurrentModelKeyInfo','model','image_url','function','checkUserCertification','padStart','467358ZiqRUY','../ai/openaiDraw.service','HttpStatus','isSensitiveWordFilter','splice','开始生成PPT','appEntity','创意\x20AI','chatGroupService','modelsService','ai-ppt','slice','openaiTimeout','uploadFile','then','uploadService','../chatLog/chatLog.service','setHeader','PluginEntity','\x20回复出错，本次不扣除积分','TOO_MANY_REQUESTS','isArray','绘制中','toString','dall-e-3','userBalanceService','replace','插件调用错误:\x20','title','parameters','formatUrl','../ai/openaiChat.service','openAIChat','更新对话组标题失败:\x20','getClientIp','\x20消耗token:\x20','HttpException','updateChatLog','assign','chatLogService','}，给这个对话取一个名字，不超过10个字','assistant','开始\x20TTS\x20请求:','../plugin/plugin.entity','发生未知错误，请稍后再试','用户ID:\x20','\x20模型名称:\x20','decorate','提交成功，视频生成中','../ai/suno.service','IMAGINE','@nestjs/common','CogVideoService','midjourneyDraw','配置解析错误！','send','fluxDrawService','end','pluginUrl','error','debug','userBalance','../autoreply/autoreply.service','convertUrlToBase64','metadata','Repository','你当前使用的应用已被下架、请删除当前对话开启新的对话吧！','aiPptService','Bearer\x20','error:\x20'];_0x534a=function(){return _0x5d4cbf;};return _0x534a();}function _0x1fc5(_0x494271,_0x33d034){const _0x534a04=_0x534a();return _0x1fc5=function(_0x1fc5a0,_0x117a13){_0x1fc5a0=_0x1fc5a0-0xef;let _0x30ff36=_0x534a04[_0x1fc5a0];return _0x30ff36;},_0x1fc5(_0x494271,_0x33d034);}let ChatService=class ChatService{constructor(_0x530d57,_0x3d32bb,_0x617119,_0x1c7854,_0x4f4f42,_0x5c85c0,_0x3cf39c,_0x717eb5,_0x294f4e,_0x590bdc,_0x16b82a,_0x4791c6,_0x3bd4d9,_0x2840f6,_0x24ea77,_0x3d9578,_0x529594,_0x150d7f,_0x17cb7b,_0x463f31,_0x3c4e07){const _0x37dc66=_0x54996d;this[_0x37dc66(0x19d)]=_0x530d57,this['appEntity']=_0x3d32bb,this[_0x37dc66(0xf1)]=_0x617119,this['sunoService']=_0x1c7854,this[_0x37dc66(0x187)]=_0x4f4f42,this[_0x37dc66(0x124)]=_0x5c85c0,this['midjourneyService']=_0x3cf39c,this[_0x37dc66(0x1e6)]=_0x717eb5,this[_0x37dc66(0x116)]=_0x294f4e,this[_0x37dc66(0x1dd)]=_0x590bdc,this[_0x37dc66(0x10c)]=_0x16b82a,this[_0x37dc66(0x1d1)]=_0x4791c6,this['autoreplyService']=_0x3bd4d9,this[_0x37dc66(0x1ad)]=_0x2840f6,this['chatGroupService']=_0x24ea77,this[_0x37dc66(0x106)]=_0x3d9578,this[_0x37dc66(0x198)]=_0x529594,this['lumaVideoService']=_0x150d7f,this[_0x37dc66(0x17c)]=_0x17cb7b,this[_0x37dc66(0x135)]=_0x463f31,this[_0x37dc66(0x140)]=_0x3c4e07;}async[_0x54996d(0x16a)](_0x35df80,_0x2c578e,_0x2a6be6){const _0xf4a91c=_0x54996d;await this[_0xf4a91c(0x116)][_0xf4a91c(0xfb)](_0x2c578e[_0xf4a91c(0x160)]['id']);const {options:options={},usingPluginId:_0x437800,appId:appId=null,specialModel:_0xdbc15a,prompt:_0x276143,fileInfo:_0x4ee470,extraParam:_0x559048,model:_0xb38a40,drawId:_0x9b9cc9,customId:_0x516ec9,action:_0x55f55f,modelName:_0x553e73,modelAvatar:_0x2ea9dc}=_0x35df80;let _0x26eceb;if(_0xdbc15a)_0x26eceb=await this[_0xf4a91c(0x103)]['findOne']({'where':{'des':_0xdbc15a,'isSystemReserved':!![]}});else{if(appId){_0x26eceb=await this['appEntity'][_0xf4a91c(0x170)]({'where':{'id':appId,'status':(0x0,typeorm_2['In'])([0x1,0x3,0x4,0x5])}});if(!_0x26eceb)throw new common_1[(_0xf4a91c(0x121))](_0xf4a91c(0x13f),common_1[_0xf4a91c(0xff)][_0xf4a91c(0x193)]);}}const {groupId:_0x48d7c2,fileParsing:_0x58fc2e}=options,{openaiTimeout:_0x527504,openaiBaseUrl:_0x39bc89,openaiBaseKey:_0x2db8bd,systemPreMessage:_0x9b304f,isMjTranslate:_0x27b785,mjTranslatePrompt:_0x3a94d0,openaiTemperature:_0x387c4c,openaiBaseModel:_0x4f7d01,isGeneratePromptReference:_0x1bebc5,isConvertToBase64:_0x298d8c,isSensitiveWordFilter:_0x25a867}=await this[_0xf4a91c(0x1ad)][_0xf4a91c(0x15e)]([_0xf4a91c(0x109),_0xf4a91c(0x1b7),_0xf4a91c(0x1a6),_0xf4a91c(0x171),_0xf4a91c(0x1be),_0xf4a91c(0x1ed),_0xf4a91c(0x15a),'openaiBaseModel',_0xf4a91c(0x166),_0xf4a91c(0xf2),_0xf4a91c(0x100)]);await this[_0xf4a91c(0x1dd)][_0xf4a91c(0x1d5)](_0x2c578e['user']),_0x2a6be6&&_0x2a6be6[_0xf4a91c(0x10e)]('Content-type','application/octet-stream;\x20charset=utf-8');if(_0x25a867==='1'){const _0x257fb7=await this[_0xf4a91c(0x1d1)][_0xf4a91c(0x1bd)](_0x276143,_0x2c578e['user']['id']);if(_0x257fb7[_0xf4a91c(0x1a9)]>0x0){const _0x29469f=_0xf4a91c(0x17d);throw new common_1[(_0xf4a91c(0x121))](_0x29469f,common_1['HttpStatus'][_0xf4a91c(0x193)]);}}const _0x1b417e=await this['autoreplyService'][_0xf4a91c(0x1b2)](_0x276143);let _0x5a690d=null,_0x40914c='',_0x5bca83='';_0x2a6be6&&_0x2a6be6[_0xf4a91c(0x1e3)](0xc8);let _0x5d5769=null;const _0x4765b1=(0x0,utils_1[_0xf4a91c(0x11f)])(_0x2c578e);let _0x470060,_0x4e0a2e='',_0x39f79a;_0x437800&&(_0x39f79a=await this[_0xf4a91c(0xf1)][_0xf4a91c(0x170)]({'where':{'id':_0x437800}}));if(_0x26eceb){const {isGPTs:_0xccde00,gizmoID:_0xd9a58d,name:_0x232be1,isFixedModel:_0x5e2b3b,appModel:_0x20e838,coverImg:_0x5ddc01}=_0x26eceb;_0x4e0a2e=_0x5ddc01,_0x40914c=_0x232be1;if(_0xccde00)_0x5a690d=await this['modelsService']['getCurrentModelKeyInfo'](_0xf4a91c(0x1ab)),_0x5a690d[_0xf4a91c(0xf8)]='gpt-4-gizmo-'+_0xd9a58d;else!_0xccde00&&_0x5e2b3b&&_0x20e838?(_0x26eceb[_0xf4a91c(0x167)]&&(_0x5bca83=_0x26eceb['preset']),_0x5a690d=await this[_0xf4a91c(0x106)]['getCurrentModelKeyInfo'](_0x20e838),_0x5a690d[_0xf4a91c(0xf8)]=_0x20e838,_0x58fc2e&&(_0x5bca83=_0x5bca83+'以下是我提供给你的知识库：【'+_0x58fc2e+_0xf4a91c(0x190)),common_1[_0xf4a91c(0x1ee)]['log'](_0xf4a91c(0x1cb)+_0x5bca83,_0xf4a91c(0x18f))):(_0x26eceb[_0xf4a91c(0x167)]&&(_0x5bca83=_0x26eceb[_0xf4a91c(0x167)]),_0x5a690d=await this[_0xf4a91c(0x106)][_0xf4a91c(0xf7)](_0xb38a40),_0x58fc2e&&(_0x5bca83=_0x5bca83+'以下是我提供给你的知识库：【'+_0x58fc2e+'】，在回答问题之前，先检索知识库内有没有相关的内容，尽量使用知识库中获取到的信息来回答我的问题，以知识库中的为准。'),common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x1b6)+_0x5bca83,_0xf4a91c(0x18f)));}else{const _0x17fa9e=await this[_0xf4a91c(0x105)][_0xf4a91c(0x1e1)](_0x48d7c2);if(_0x39f79a&&_0x39f79a[_0xf4a91c(0x19f)]===0x0){let _0x20538e='';try{_0x20538e=await this[_0xf4a91c(0x155)](_0x276143,_0x39f79a[_0xf4a91c(0x11a)]),common_1['Logger'][_0xf4a91c(0x19b)]('插件返回结果:\x20'+_0x20538e,_0xf4a91c(0x18f));}catch(_0x22dff2){_0x20538e=_0x276143,common_1['Logger'][_0xf4a91c(0x138)](_0xf4a91c(0x118)+_0x22dff2);}_0x5bca83=_0x20538e,_0x5a690d=await this['modelsService'][_0xf4a91c(0xf7)](_0xb38a40),common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x1ae)+_0x5bca83,'ChatService');}else{if(_0x58fc2e)_0x5bca83=_0xf4a91c(0x150)+_0x58fc2e+_0xf4a91c(0x190),_0x5a690d=await this[_0xf4a91c(0x106)][_0xf4a91c(0xf7)](_0xb38a40),common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x156)+_0x5bca83,_0xf4a91c(0x18f));else{const _0x57ee11=new Date()[_0xf4a91c(0x1dc)]()[_0xf4a91c(0x1e8)]('T')[0x0];_0x5bca83=_0x9b304f+('\x0a\x20Current\x20date:\x20'+_0x57ee11),_0x5a690d=await this[_0xf4a91c(0x106)][_0xf4a91c(0xf7)](_0xb38a40),common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x163)+_0x5bca83,_0xf4a91c(0x18f));}}}if(!_0x5a690d){common_1['Logger'][_0xf4a91c(0x139)](_0xf4a91c(0x1b3),_0xf4a91c(0x18f)),_0x5a690d=await this[_0xf4a91c(0x106)][_0xf4a91c(0xf7)](_0x4f7d01);const _0x1f76c9=await this[_0xf4a91c(0x105)][_0xf4a91c(0x1e1)](_0x48d7c2);let _0x547503=_0x1f76c9[_0xf4a91c(0x1c1)];try{const _0x441fc9=JSON[_0xf4a91c(0x15b)](_0x1f76c9[_0xf4a91c(0x1c1)]);_0x441fc9['modelInfo']&&(_0x441fc9[_0xf4a91c(0x168)]['modelName']=_0x5a690d['modelName'],_0x441fc9[_0xf4a91c(0x168)]['model']=_0x5a690d['model'],_0x547503=JSON[_0xf4a91c(0x1b1)](_0x441fc9));}catch(_0x3ec911){common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x139)](_0xf4a91c(0x14c),_0xf4a91c(0x18f));throw new common_1[(_0xf4a91c(0x121))](_0xf4a91c(0x133),common_1[_0xf4a91c(0xff)]['BAD_REQUEST']);}await this[_0xf4a91c(0x105)][_0xf4a91c(0x1b9)]({'groupId':_0x48d7c2,'title':_0x1f76c9[_0xf4a91c(0x119)],'isSticky':![],'config':_0x547503,'fileUrl':''},_0x2c578e);}const {deduct:_0x2f3be8,isTokenBased:_0x1836c9,tokenFeeRatio:_0x31f42c,deductType:_0x262a53,key:_0x513383,id:_0x3d87a4,maxRounds:_0x1edfdc,proxyUrl:_0x1bf3e6,maxModelTokens:_0x5ea811,timeout:_0x77f927,model:_0x4becc5,isFileUpload:_0x1e74d4,keyType:_0x3970bd}=_0x5a690d;if(await this[_0xf4a91c(0x124)][_0xf4a91c(0x1bc)](_0x2c578e[_0xf4a91c(0x160)],_0x4becc5))throw new common_1['HttpException']('1\x20小时内对话次数过多，请切换模型或稍后再试！',common_1[_0xf4a91c(0xff)][_0xf4a91c(0x111)]);if(_0x27b785==='1'&&_0x55f55f===_0xf4a91c(0x12f)&&_0xb38a40===_0xf4a91c(0x183)){const [_0x5eb191,_0x2a47af]=_0x276143[_0xf4a91c(0x1e8)](/(?= --)/),_0x37e5d6=/(https?:\/\/[^\s]+)/g,_0x34e9c9=_0x5eb191['match'](_0x37e5d6)||[];let _0x2ec056=_0x5eb191[_0xf4a91c(0x117)](_0x37e5d6,'')['trim']();const _0x20ae75=await this[_0xf4a91c(0x187)][_0xf4a91c(0x147)](_0x2ec056,_0x3a94d0||'Translate\x20any\x20given\x20phrase\x20from\x20any\x20language\x20into\x20English.\x20For\x20instance,\x20when\x20I\x20input\x20\x27{可爱的熊猫}\x27,\x20you\x20should\x20output\x20\x27{cute\x20panda}\x27,\x20with\x20no\x20period\x20at\x20the\x20end.'),_0x2d17d2=[..._0x34e9c9,_0x20ae75]['join']('\x20')[_0xf4a91c(0x153)]();_0x470060=_0x2a47af?''+_0x2d17d2+_0x2a47af:_0x2d17d2,_0x1e74d4==='1'&&_0x4ee470&&(_0x470060=_0x4ee470+'\x20'+_0x470060);}else _0x470060=_0x1e74d4==='1'&&_0x4ee470?_0x4ee470+'\x20'+_0x276143:_0x276143;await this[_0xf4a91c(0x116)][_0xf4a91c(0x1df)](_0x2c578e,_0x262a53,_0x2f3be8);const _0x5d2ff5=_0x553e73,_0x3fa618=(0x0,utils_1[_0xf4a91c(0x11b)])(_0x1bf3e6||_0x39bc89||_0xf4a91c(0x164)),_0x23590b=_0x513383||_0x2db8bd,_0x4520e2=(_0x77f927||_0x527504||0x12c)*0x3e8,_0x15920d=Number(_0x387c4c)||0x1;if(_0x48d7c2){const _0x5afde1=await this[_0xf4a91c(0x105)]['getGroupInfoFromId'](_0x48d7c2);this['updateChatTitle'](_0x48d7c2,_0x5afde1,_0x3970bd,_0x276143,_0x2c578e),await this[_0xf4a91c(0x105)][_0xf4a91c(0x18a)](_0x48d7c2);}const _0x5a0de2=await this[_0xf4a91c(0x124)]['saveChatLog']({'appId':appId,'curIp':_0x4765b1,'userId':_0x2c578e[_0xf4a91c(0x160)]['id'],'type':_0x3970bd?_0x3970bd:0x1,'prompt':_0x276143,'fileInfo':_0x4ee470?_0x4ee470:null,'answer':'','promptTokens':0x0,'completionTokens':0x0,'totalTokens':0x0,'model':_0x4becc5,'modelName':'我','role':'user','groupId':_0x48d7c2?_0x48d7c2:null}),_0x2ddf0f=await this[_0xf4a91c(0x124)][_0xf4a91c(0x14d)]({'appId':appId?appId:null,'action':_0x55f55f?_0x55f55f:null,'curIp':_0x4765b1,'userId':_0x2c578e[_0xf4a91c(0x160)]['id'],'type':_0x3970bd?_0x3970bd:0x1,'prompt':_0x276143,'fileInfo':null,'answer':'','progress':'0%','promptTokens':0x0,'completionTokens':0x0,'totalTokens':0x0,'model':_0x4becc5,'modelName':_0x5d2ff5,'role':_0xf4a91c(0x126),'groupId':_0x48d7c2?_0x48d7c2:null,'status':0x2,'modelAvatar':(_0x39f79a===null||_0x39f79a===void 0x0?void 0x0:_0x39f79a[_0xf4a91c(0x18e)])||_0x4e0a2e||_0x2ea9dc||'','pluginParam':(_0x39f79a===null||_0x39f79a===void 0x0?void 0x0:_0x39f79a[_0xf4a91c(0x11a)])?_0x39f79a[_0xf4a91c(0x11a)]:_0x3970bd===0x2?_0x4becc5:null}),_0x2248e3=_0x5a0de2['id'],_0x4d0566=_0x2ddf0f['id'];if(_0x1b417e[_0xf4a91c(0x1de)]&&_0x2a6be6){if(_0x1b417e[_0xf4a91c(0x1d3)]===0x0){const _0xadc2f8=_0x1b417e[_0xf4a91c(0x1de)][_0xf4a91c(0x1e8)](''),_0x25bf86=_0x1f0f41=>{const _0x35e8d1=_0xf4a91c;if(_0x1f0f41<_0xadc2f8[_0x35e8d1(0x1a9)]){const _0x741ef9={'text':_0xadc2f8[_0x1f0f41]};_0x2a6be6[_0x35e8d1(0x1c7)](JSON['stringify'](_0x741ef9)+'\x0a'),setTimeout(()=>_0x25bf86(_0x1f0f41+0x1),0xa);}else _0x2a6be6[_0x35e8d1(0x136)]();};_0x25bf86(0x0),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0x1b417e['answer']});return;}else _0x5bca83=_0x5bca83+_0x1b417e[_0xf4a91c(0x1de)];}const {messagesHistory:_0x1e6e7e}=await this[_0xf4a91c(0x1cd)](_0x276143,{'groupId':_0x48d7c2,'systemMessage':_0x5bca83,'maxModelTokens':_0x5ea811,'maxRounds':_0x1edfdc,'isConvertToBase64':_0x298d8c,'fileInfo':_0x4ee470,'model':_0x4becc5,'isFileUpload':_0x1e74d4},this[_0xf4a91c(0x124)]);let _0x2e3903=_0x55f55f!==_0xf4a91c(0x1c4)&&_0x4becc5===_0xf4a91c(0x183)?_0x2f3be8*0x4:_0x2f3be8;const _0x2174b7=new AbortController();try{if(_0x2a6be6){_0x2a6be6['on']('close',()=>{const _0x5cbf15=_0xf4a91c;_0x2174b7[_0x5cbf15(0x175)]();});let _0x394776,_0x1ed1e1=!![];try{if((_0x4becc5===_0xf4a91c(0x115)||_0x4becc5==='midjourney'||_0x4becc5==='ai-ppt'||_0x4becc5==='suno-music'||_0x4becc5===_0xf4a91c(0x189)||_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x17a))||_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x1ec))||_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x1e5)))&&_0x3970bd===0x2){if(_0x4becc5===_0xf4a91c(0x115))_0x394776=this[_0xf4a91c(0x198)][_0xf4a91c(0x145)]({'prompt':_0x276143,'extraParam':_0x559048,'apiKey':_0x23590b,'proxyUrl':_0x3fa618,'model':_0x4becc5,'timeout':_0x4520e2,'modelName':_0x5d2ff5,'groupId':_0x48d7c2,'onSuccess':async _0x2336c5=>{const _0x3eaddd=_0xf4a91c;await this[_0x3eaddd(0x124)][_0x3eaddd(0x122)](_0x4d0566,{'fileInfo':_0x2336c5===null||_0x2336c5===void 0x0?void 0x0:_0x2336c5['fileInfo'],'answer':(_0x2336c5===null||_0x2336c5===void 0x0?void 0x0:_0x2336c5[_0x3eaddd(0x1de)])||_0x276143,'progress':_0x3eaddd(0x1a3),'status':_0x2336c5[_0x3eaddd(0x1e3)]});},'onFailure':async _0x36582c=>{const _0x1f442f=_0xf4a91c;await this[_0x1f442f(0x124)][_0x1f442f(0x122)](_0x4d0566,{'answer':_0x1f442f(0x1d6),'status':_0x36582c[_0x1f442f(0x1e3)]});}},this['buildMessageFromParentMessageId']),await this[_0xf4a91c(0x124)]['updateChatLog'](_0x4d0566,{'answer':'绘制中'});else{if(_0x4becc5===_0xf4a91c(0x107))common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x102),'DrawService'),_0x394776=this[_0xf4a91c(0x140)][_0xf4a91c(0x16d)]({'usePrompt':_0x470060,'prompt':_0x276143,'apiKey':_0x23590b,'proxyUrl':_0x3fa618,'model':_0x4becc5,'modelName':_0x5d2ff5,'drawId':_0x9b9cc9,'customId':_0x516ec9,'action':_0x55f55f,'timeout':_0x4520e2,'assistantLogId':_0x4d0566,'extraParam':_0x559048,'fileInfo':_0x4ee470}),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0xf4a91c(0x19e)});else{if(_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x1e5)))_0x394776=this['fluxDrawService']['fluxDraw']({'prompt':_0x276143,'extraParam':_0x559048,'apiKey':_0x23590b,'proxyUrl':_0x3fa618,'model':_0x4becc5,'timeout':_0x4520e2,'modelName':_0x5d2ff5,'groupId':_0x48d7c2,'onSuccess':async _0x120eec=>{const _0x137b11=_0xf4a91c;await this['chatLogService'][_0x137b11(0x122)](_0x4d0566,{'fileInfo':_0x120eec===null||_0x120eec===void 0x0?void 0x0:_0x120eec[_0x137b11(0x1cc)],'answer':(_0x120eec===null||_0x120eec===void 0x0?void 0x0:_0x120eec[_0x137b11(0x1de)])||_0x276143,'progress':_0x137b11(0x1a3),'status':_0x120eec[_0x137b11(0x1e3)]});},'onFailure':async _0x4c85dc=>{const _0x31be1b=_0xf4a91c;await this['chatLogService'][_0x31be1b(0x122)](_0x4d0566,{'answer':_0x31be1b(0x1d6),'status':_0x4c85dc[_0x31be1b(0x1e3)]});}},this['buildMessageFromParentMessageId']),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0xf4a91c(0x113)});else{if(_0x4becc5[_0xf4a91c(0x148)]('suno-music'))_0x394776=this['sunoService']['suno']({'assistantLogId':_0x4d0566,'apiKey':_0x23590b,'action':_0x55f55f,'prompt':_0x276143,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'taskData':_0x516ec9}),await this['chatLogService'][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0xf4a91c(0x169)});else{if(_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x189)))_0x394776=this['lumaVideoService'][_0xf4a91c(0x1a5)]({'fileInfo':_0x4ee470,'extraParam':_0x559048,'assistantLogId':_0x4d0566,'apiKey':_0x23590b,'action':_0x55f55f,'prompt':_0x276143,'model':_0x4becc5,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'taskData':_0x516ec9,'onGenerate':async _0x3cff4=>{const _0x30ca6d=_0xf4a91c;await this['chatLogService'][_0x30ca6d(0x122)](_0x4d0566,{'fileInfo':_0x3cff4===null||_0x3cff4===void 0x0?void 0x0:_0x3cff4[_0x30ca6d(0x1cc)],'answer':(_0x3cff4===null||_0x3cff4===void 0x0?void 0x0:_0x3cff4[_0x30ca6d(0x1de)])||_0x276143,'status':0x2});},'onSuccess':async _0x3f1dce=>{const _0x2f0cd3=_0xf4a91c;await this[_0x2f0cd3(0x124)][_0x2f0cd3(0x122)](_0x4d0566,{'fileInfo':_0x3f1dce===null||_0x3f1dce===void 0x0?void 0x0:_0x3f1dce['fileInfo'],'answer':(_0x3f1dce===null||_0x3f1dce===void 0x0?void 0x0:_0x3f1dce['answer'])||_0x276143,'progress':_0x2f0cd3(0x1a3),'status':0x3});},'onFailure':async _0x2f4442=>{const _0x4a6a94=_0xf4a91c;await this[_0x4a6a94(0x124)][_0x4a6a94(0x122)](_0x4d0566,{'answer':_0x2f4442[_0x4a6a94(0x16f)],'status':0x4});}}),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0xf4a91c(0x12d)});else{if(_0x4becc5[_0xf4a91c(0x148)](_0xf4a91c(0x1ec)))_0x394776=this[_0xf4a91c(0x17c)]['cogVideo']({'fileInfo':_0x4ee470,'extraParam':_0x559048,'assistantLogId':_0x4d0566,'apiKey':_0x23590b,'action':_0x55f55f,'prompt':_0x276143,'model':_0x4becc5,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'taskData':_0x516ec9,'onGenerate':async _0x32a665=>{const _0x311cd1=_0xf4a91c;await this[_0x311cd1(0x124)]['updateChatLog'](_0x4d0566,{'fileInfo':_0x32a665===null||_0x32a665===void 0x0?void 0x0:_0x32a665[_0x311cd1(0x1cc)],'answer':(_0x32a665===null||_0x32a665===void 0x0?void 0x0:_0x32a665[_0x311cd1(0x1de)])||_0x276143,'status':0x2});},'onSuccess':async _0x250d33=>{const _0x360b71=_0xf4a91c;await this[_0x360b71(0x124)][_0x360b71(0x122)](_0x4d0566,{'fileInfo':_0x250d33===null||_0x250d33===void 0x0?void 0x0:_0x250d33[_0x360b71(0x1cc)],'answer':(_0x250d33===null||_0x250d33===void 0x0?void 0x0:_0x250d33[_0x360b71(0x1de)])||_0x276143,'progress':_0x360b71(0x1a3),'status':0x3});},'onFailure':async _0x34b517=>{const _0x9ce783=_0xf4a91c;await this[_0x9ce783(0x124)]['updateChatLog'](_0x4d0566,{'answer':_0x34b517[_0x9ce783(0x16f)],'status':0x4});}}),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0xf4a91c(0x12d)});else _0x4becc5[_0xf4a91c(0x148)]('stable-diffusion')?(_0x394776=this[_0xf4a91c(0x1e6)][_0xf4a91c(0x1b8)]({'chatId':_0x4d0566,'maxModelTokens':_0x5ea811,'apiKey':_0x23590b,'model':_0x4becc5,'modelName':_0x5d2ff5,'modelType':_0x3970bd,'prompt':_0x276143,'fileInfo':_0x4ee470,'isFileUpload':_0x1e74d4,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'onSuccess':async _0xe8c74=>{const _0x503a79=_0xf4a91c;await this[_0x503a79(0x124)][_0x503a79(0x122)](_0x4d0566,{'fileInfo':_0xe8c74===null||_0xe8c74===void 0x0?void 0x0:_0xe8c74[_0x503a79(0x1cc)],'answer':(_0xe8c74===null||_0xe8c74===void 0x0?void 0x0:_0xe8c74[_0x503a79(0x1de)])||_0x276143,'progress':_0x503a79(0x1a3),'status':0x3});},'onFailure':async _0x5a7693=>{const _0x103ce7=_0xf4a91c;await this[_0x103ce7(0x124)][_0x103ce7(0x122)](_0x4d0566,{'answer':_0x103ce7(0x1d7),'status':0x4});}}),await this[_0xf4a91c(0x124)]['updateChatLog'](_0x4d0566,{'answer':_0xf4a91c(0x113)})):(_0x394776=await this[_0xf4a91c(0x151)][_0xf4a91c(0x132)]({'usePrompt':_0x470060,'prompt':_0x276143,'apiKey':_0x23590b,'proxyUrl':_0x3fa618,'model':_0x4becc5,'modelName':_0x5d2ff5,'drawId':_0x9b9cc9,'customId':_0x516ec9,'action':_0x55f55f,'fileInfo':_0x4ee470,'timeout':_0x4520e2,'assistantLogId':_0x4d0566,'pluginName':_0x39f79a}),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'answer':_0x394776['answer'],'status':_0x394776[_0xf4a91c(0x1e3)]}));}}}}}_0x394776[_0xf4a91c(0x1e3)]!==0x5?(await this[_0xf4a91c(0x106)]['saveUseLog'](_0x3d87a4,0x1),await this['userBalanceService'][_0xf4a91c(0x192)](_0x2c578e[_0xf4a91c(0x160)]['id'],_0x262a53,_0x2e3903)):common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)](_0xf4a91c(0x181),_0xf4a91c(0x18f));const _0x45ae36=await this[_0xf4a91c(0x116)][_0xf4a91c(0x197)](_0x2c578e[_0xf4a91c(0x160)]['id']);return _0x394776[_0xf4a91c(0x13a)]=Object['assign']({},_0x45ae36),_0x394776['text']=_0x394776[_0xf4a91c(0x1de)],_0x394776[_0xf4a91c(0x1e3)]=_0x394776[_0xf4a91c(0x1e3)]||0x2,_0x394776['model']=_0xb38a40,_0x394776['modelName']=_0x553e73,_0x2a6be6[_0xf4a91c(0x1c7)]('\x0a'+JSON[_0xf4a91c(0x1b1)](_0x394776));}else{_0x394776=await this['openAIChatService']['openAIChat'](_0x1e6e7e,{'chatId':_0x4d0566,'maxModelTokens':_0x5ea811,'apiKey':_0x23590b,'model':_0x4becc5,'modelName':_0x5d2ff5,'temperature':_0x15920d,'modelType':_0x3970bd,'prompt':_0x276143,'fileInfo':_0x4ee470,'isFileUpload':_0x1e74d4,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'modelAvatar':_0x2ea9dc,'onProgress':_0x521c93=>{const _0x38edb9=_0xf4a91c;_0x2a6be6[_0x38edb9(0x1c7)](_0x1ed1e1?JSON[_0x38edb9(0x1b1)](_0x521c93):'\x0a'+JSON[_0x38edb9(0x1b1)](_0x521c93)),_0x1ed1e1=![];},'onFailure':async _0x346155=>{const _0x7d5edf=_0xf4a91c;await this[_0x7d5edf(0x124)][_0x7d5edf(0x122)](_0x4d0566,{'answer':_0x346155[_0x7d5edf(0x16f)],'status':0x4});},'abortController':_0x2174b7});if(_0x394776[_0xf4a91c(0x16f)])return common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x138)](_0xf4a91c(0x12a)+_0x2c578e[_0xf4a91c(0x160)]['id']+_0xf4a91c(0x12b)+_0x5d2ff5+_0xf4a91c(0x1db)+_0xb38a40+_0xf4a91c(0x110),_0xf4a91c(0x18f)),_0x2a6be6['write']('\x0a'+JSON[_0xf4a91c(0x1b1)](_0x394776));let _0x13ed0e='';_0x1e6e7e[_0xf4a91c(0xf5)](_0x1dc43b=>{const _0x465e04=_0xf4a91c;_0x13ed0e+=_0x1dc43b[_0x465e04(0x1c6)]+'\x20';});const _0x246022=await(0x0,utils_1[_0xf4a91c(0x195)])(_0x13ed0e),_0x1bcade=await(0x0,utils_1[_0xf4a91c(0x195)])(_0x394776['answer']);await this['chatLogService']['updateChatLog'](_0x2248e3,{'promptTokens':_0x246022,'completionTokens':_0x1bcade,'totalTokens':_0x246022+_0x1bcade});let _0x3cc8f6=_0x394776[_0xf4a91c(0x1de)];if(_0x25a867==='1'){const _0xab3bc=await this[_0xf4a91c(0x1d1)][_0xf4a91c(0x1bd)](_0x394776[_0xf4a91c(0x1de)],_0x2c578e[_0xf4a91c(0x160)]['id']);if(_0xab3bc[_0xf4a91c(0x1a9)]>0x0){const _0xb9b20=new RegExp(_0xab3bc[_0xf4a91c(0x191)]('|'),'gi');_0x3cc8f6=_0x3cc8f6[_0xf4a91c(0x117)](_0xb9b20,_0xb70a2a=>'*'[_0xf4a91c(0x1e0)](_0xb70a2a['length']));}}await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'fileInfo':_0x394776===null||_0x394776===void 0x0?void 0x0:_0x394776[_0xf4a91c(0x1cc)],'answer':_0x3cc8f6,'promptTokens':_0x246022,'completionTokens':_0x1bcade,'totalTokens':_0x246022+_0x1bcade,'status':0x3});try{if(_0x1bebc5==='1'){const _0x5a6594=await this[_0xf4a91c(0x187)]['chatFree']('根据用户提问{'+_0x276143+_0xf4a91c(0x1d2)+_0x394776[_0xf4a91c(0x1de)]+_0xf4a91c(0x173));await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'promptReference':_0x5a6594});}}catch(_0x20f80f){common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x138)](_0xf4a91c(0x17b)+_0x20f80f);}_0x1836c9===!![]&&(_0x2e3903=_0x2f3be8*Math[_0xf4a91c(0x185)]((_0x246022+_0x1bcade)/_0x31f42c));await this['userBalanceService'][_0xf4a91c(0x192)](_0x2c578e['user']['id'],_0x262a53,_0x2e3903,_0x246022+_0x1bcade),await this['modelsService'][_0xf4a91c(0x178)](_0x3d87a4,_0x246022+_0x1bcade),common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x19b)]('用户ID:\x20'+_0x2c578e[_0xf4a91c(0x160)]['id']+_0xf4a91c(0x12b)+_0x5d2ff5+'\x20模型:\x20'+_0xb38a40+_0xf4a91c(0x120)+(_0x246022+_0x1bcade)+',\x20消耗积分：\x20'+_0x2e3903,_0xf4a91c(0x18f));const _0x916619=await this[_0xf4a91c(0x116)][_0xf4a91c(0x197)](_0x2c578e[_0xf4a91c(0x160)]['id']);return _0x394776[_0xf4a91c(0x13a)]=Object[_0xf4a91c(0x123)]({},_0x916619),_0x2a6be6['write']('\x0a'+JSON[_0xf4a91c(0x1b1)](_0x394776));}}catch(_0x415712){common_1[_0xf4a91c(0x1ee)]['error'](_0xf4a91c(0x14f),_0x415712),await this[_0xf4a91c(0x124)][_0xf4a91c(0x122)](_0x4d0566,{'status':0x5}),_0x394776={'error':_0xf4a91c(0xf3)};}}else return _0x5d5769=await this['openAIChatService'][_0xf4a91c(0x11d)](_0x1e6e7e,{'chatId':_0x4d0566,'maxModelTokens':_0x5ea811,'apiKey':_0x23590b,'model':_0x4becc5,'modelName':_0x5d2ff5,'modelType':_0x3970bd,'temperature':_0x15920d,'prompt':_0x276143,'fileInfo':_0x4ee470,'isFileUpload':_0x1e74d4,'timeout':_0x4520e2,'proxyUrl':_0x3fa618,'abortController':_0x2174b7}),await this['userBalanceService']['deductFromBalance'](_0x2c578e[_0xf4a91c(0x160)]['id'],_0x262a53,_0x2e3903),_0x5d5769[_0xf4a91c(0x1de)];}catch(_0x3026b2){common_1[_0xf4a91c(0x1ee)][_0xf4a91c(0x138)](_0xf4a91c(0x1a8),_0x23590b,_0x3026b2);if(_0x2a6be6)return _0x2a6be6['write'](_0xf4a91c(0x129));else throw new common_1['HttpException'](_0xf4a91c(0x129),common_1[_0xf4a91c(0xff)][_0xf4a91c(0x193)]);}finally{_0x2a6be6&&_0x2a6be6[_0xf4a91c(0x136)]();}}async[_0x54996d(0x155)](_0x5eae94,_0x1e6cdb){const _0x4793a4=_0x54996d,{pluginUrl:_0x2d8460,pluginKey:_0x547efb}=await this[_0x4793a4(0x1ad)][_0x4793a4(0x15e)]([_0x4793a4(0x137),_0x4793a4(0x1c3)]),_0x4768cf=_0x547efb,_0x2df536=_0x2d8460,_0x459cd2={'method':'POST','url':_0x2df536+'/plugins/'+_0x1e6cdb,'headers':{'Content-Type':_0x4793a4(0x1ce),'Authorization':_0x4793a4(0x141)+_0x4768cf},'data':{'prompt':_0x5eae94}};try{const _0x197029=await(0x0,axios_1[_0x4793a4(0x1a0)])(_0x459cd2);return common_1[_0x4793a4(0x1ee)][_0x4793a4(0x19b)](_0x4793a4(0x1b5)+JSON[_0x4793a4(0x1b1)](_0x197029[_0x4793a4(0x165)],null,0x2),_0x4793a4(0x1c9)),_0x197029[_0x4793a4(0x165)][_0x4793a4(0x1b0)];}catch(_0x41373e){common_1[_0x4793a4(0x1ee)][_0x4793a4(0x138)](_0x4793a4(0x142),_0x41373e);}}async[_0x54996d(0x1c2)](_0x592bc5,_0x19789f,_0x2048ed,_0x5e6313,_0x321c3f){const _0x4c10ce=_0x54996d;if((_0x19789f===null||_0x19789f===void 0x0?void 0x0:_0x19789f[_0x4c10ce(0x119)])===_0x4c10ce(0x16b)){let _0x5c66a6;if(_0x2048ed===0x1)try{_0x5c66a6=await this[_0x4c10ce(0x187)]['chatFree'](_0x4c10ce(0x1ac)+_0x5e6313+_0x4c10ce(0x125)),_0x5c66a6[_0x4c10ce(0x1a9)]>0xf&&(_0x5c66a6=_0x5c66a6[_0x4c10ce(0x108)](0x0,0xf));}catch(_0x543ec9){common_1[_0x4c10ce(0x1ee)][_0x4c10ce(0x138)](_0x4c10ce(0x17b)+_0x543ec9),_0x5c66a6=_0x5e6313['slice'](0x0,0xa);}else _0x5c66a6=_0x4c10ce(0x104);this[_0x4c10ce(0x105)][_0x4c10ce(0x1b9)]({'groupId':_0x592bc5,'title':_0x5c66a6,'isSticky':![],'config':'','fileUrl':''},_0x321c3f)[_0x4c10ce(0x10b)](()=>common_1[_0x4c10ce(0x1ee)]['log'](_0x4c10ce(0x18c)+_0x5c66a6,'ChatService'))['catch'](_0x125b02=>common_1['Logger'][_0x4c10ce(0x138)](_0x4c10ce(0x11e)+_0x125b02));}}async['buildMessageFromParentMessageId'](_0x1e40b8,_0x80991e,_0x29eea2){const _0x190156=_0x54996d;let {systemMessage:systemMessage='',fileInfo:_0x42080a,groupId:_0x2f8434,maxRounds:maxRounds=0x5,maxModelTokens:maxModelTokens=0x1f40,isFileUpload:isFileUpload=0x0,isConvertToBase64:_0x402da1}=_0x80991e;systemMessage['length']>maxModelTokens&&(common_1[_0x190156(0x1ee)]['log'](_0x190156(0x1a1),_0x190156(0x18f)),systemMessage=systemMessage[_0x190156(0x108)](0x0,maxModelTokens));let _0x5f1dca=[];systemMessage&&_0x5f1dca['push']({'role':_0x190156(0x1e7),'content':systemMessage});if(_0x2f8434){const _0x3ed75f=await _0x29eea2[_0x190156(0x174)](_0x2f8434,maxRounds);let _0x2afc49=null;for(const _0x25ac0e of _0x3ed75f){try{let _0xb75f6f;if((isFileUpload===0x2||isFileUpload===0x3)&&_0x25ac0e[_0x190156(0x1cc)]&&_0x25ac0e[_0x190156(0x188)]===_0x190156(0x160)){const _0x586b21=await Promise[_0x190156(0x17f)](_0x25ac0e[_0x190156(0x1cc)]['split'](',')['map'](async _0x7dd4ad=>({'type':_0x190156(0xf9),'image_url':{'url':_0x402da1==='1'?await this['convertUrlToBase64'](_0x7dd4ad[_0x190156(0x153)]()):_0x7dd4ad[_0x190156(0x153)]()}})));_0xb75f6f=[{'type':_0x190156(0x1b0),'text':_0x25ac0e[_0x190156(0x1b0)]},..._0x586b21];}else isFileUpload===0x1&&_0x25ac0e[_0x190156(0x1cc)]&&_0x25ac0e[_0x190156(0x188)]===_0x190156(0x160)?_0xb75f6f=_0x25ac0e[_0x190156(0x1cc)]+'\x0a'+_0x25ac0e[_0x190156(0x1b0)]:_0xb75f6f=_0x25ac0e[_0x190156(0x1b0)];if(_0x25ac0e[_0x190156(0x188)]===_0x190156(0x160))_0x2afc49={'role':_0x25ac0e[_0x190156(0x188)],'content':_0xb75f6f};else{if(_0x25ac0e[_0x190156(0x188)]==='assistant'){const _0xdf9ea5=Array[_0x190156(0x112)](_0xb75f6f)?JSON['stringify'](_0xb75f6f):_0xb75f6f;_0x2afc49&&_0xdf9ea5[_0x190156(0x153)]()!==''&&(_0x5f1dca[_0x190156(0x1e2)](_0x2afc49),_0x5f1dca[_0x190156(0x1e2)]({'role':_0x25ac0e[_0x190156(0x188)],'content':_0xb75f6f}),_0x2afc49=null);}}}catch(_0xc11a43){common_1['Logger'][_0x190156(0x138)]('处理历史记录时出错:',_0xc11a43,_0x190156(0x180),JSON[_0x190156(0x1b1)](_0x25ac0e,null,0x2));}}}let _0x5e0ec0;if((isFileUpload===0x2||isFileUpload===0x3)&&_0x42080a){const _0x18c9df=await Promise[_0x190156(0x17f)](_0x42080a[_0x190156(0x1e8)](',')['map'](async _0x5e7764=>({'type':_0x190156(0xf9),'image_url':{'url':_0x402da1==='1'?await this[_0x190156(0x13c)](_0x5e7764['trim']()):_0x5e7764['trim']()}})));_0x5e0ec0=[{'type':_0x190156(0x1b0),'text':_0x1e40b8},..._0x18c9df];}else isFileUpload===0x1&&_0x42080a?_0x5e0ec0=_0x42080a+'\x0a'+_0x1e40b8:_0x5e0ec0=_0x1e40b8;_0x5f1dca[_0x190156(0x1e2)]({'role':'user','content':_0x5e0ec0});let _0x2247de=await(0x0,utils_1['getTokenCount'])(_0x5f1dca),_0x12c80d;maxModelTokens<0x1f40?_0x12c80d=0xfa0:_0x12c80d=maxModelTokens-0xfa0;while(_0x2247de>_0x12c80d){if(_0x5f1dca[_0x190156(0x1a9)]===0x2&&_0x5f1dca[0x0][_0x190156(0x188)]===_0x190156(0x1e7)&&_0x5f1dca[0x1]['role']===_0x190156(0x160))break;let _0x57c058=![];for(let _0x375e07=0x0;_0x375e07<_0x5f1dca['length'];_0x375e07++){if(_0x5f1dca[_0x375e07][_0x190156(0x188)]!==_0x190156(0x1e7)&&_0x5f1dca[_0x375e07+0x1]&&_0x5f1dca[_0x375e07+0x1][_0x190156(0x188)]===_0x190156(0x126)){_0x5f1dca[_0x190156(0x101)](_0x375e07,0x2),_0x57c058=!![];break;}}if(!_0x57c058)for(let _0x1d78a3=0x0;_0x1d78a3<_0x5f1dca['length'];_0x1d78a3++){if(_0x5f1dca[_0x1d78a3][_0x190156(0x188)]===_0x190156(0x160)){_0x5f1dca['splice'](_0x1d78a3,0x1);break;}}_0x2247de=await(0x0,utils_1[_0x190156(0x195)])(_0x5f1dca);if(_0x5f1dca[_0x190156(0x1a9)]<=0x2)break;}return{'messagesHistory':_0x5f1dca,'round':_0x5f1dca[_0x190156(0x1a9)]};}async[_0x54996d(0x13c)](_0x5495ee){const _0x365ea4=_0x54996d;try{console[_0x365ea4(0x19b)](_0x365ea4(0x149)+_0x5495ee);const _0x5c3c1e=await axios_1[_0x365ea4(0x1a0)][_0x365ea4(0x179)](_0x5495ee,{'responseType':'arraybuffer'}),_0x46d244=Buffer[_0x365ea4(0x158)](_0x5c3c1e[_0x365ea4(0x165)],_0x365ea4(0x18d));console[_0x365ea4(0x19b)]('成功获取图片，正在转换为Base64:\x20'+_0x5495ee);const _0x3e8c9f=_0x365ea4(0x1d4)+_0x5c3c1e[_0x365ea4(0x1a4)][_0x365ea4(0x17e)]+';base64,'+_0x46d244[_0x365ea4(0x114)](_0x365ea4(0x152));return console['log'](_0x365ea4(0x15f)+_0x5495ee),_0x3e8c9f;}catch(_0x3739c3){return console[_0x365ea4(0x138)]('转换URL为Base64时发生错误:',_0x3739c3),console['warn'](_0x365ea4(0x186)+_0x5495ee),_0x5495ee;}}async[_0x54996d(0x1cf)](_0x5b07ef,_0x3c8895,_0x4663f7){const _0x202ee1=_0x54996d,{chatId:_0x39f1bd,prompt:_0xd3fbe5}=_0x5b07ef,_0xf8825a=await this[_0x202ee1(0x106)][_0x202ee1(0xf7)](_0x202ee1(0x1a2)),{openaiTimeout:_0x54446f,openaiBaseUrl:_0x5f51c2,openaiBaseKey:_0x55fd48,openaiVoice:_0x35cb25}=await this[_0x202ee1(0x1ad)]['getConfigs']([_0x202ee1(0x109),_0x202ee1(0x1b7),_0x202ee1(0x1a6),_0x202ee1(0xf4)]),{key:_0x338291,proxyUrl:_0xec9366,deduct:_0x291373,deductType:_0x468598,timeout:_0x3c144d}=_0xf8825a,_0x296153=_0x338291||_0x55fd48,_0x200cf9=(0x0,utils_1[_0x202ee1(0x11b)])(_0xec9366||_0x5f51c2),_0x52293e=(_0x3c144d||_0x54446f)*0x3e8;await this[_0x202ee1(0x116)][_0x202ee1(0x1df)](_0x3c8895,_0x468598,_0x291373),common_1['Logger']['log'](_0x202ee1(0x127),_0xd3fbe5,'TTSService');const _0x4cf6a2={'method':_0x202ee1(0x1a7),'url':_0x200cf9+_0x202ee1(0x161),'headers':{'Content-Type':_0x202ee1(0x1ce),'Authorization':_0x202ee1(0x141)+_0x296153},'responseType':_0x202ee1(0x1ea),'timeout':_0x52293e,'data':{'model':'tts-1','input':_0xd3fbe5,'voice':_0x35cb25||_0x202ee1(0x1c5)}};try{const _0x5d3ff8=await(0x0,axios_1['default'])(_0x4cf6a2);common_1[_0x202ee1(0x1ee)][_0x202ee1(0x19b)](_0x202ee1(0x1d8),'TTSService');const _0x3c5ed=Buffer['from'](_0x5d3ff8[_0x202ee1(0x165)]),_0x385070=new Date(),_0x294583=_0x385070['getFullYear'](),_0x51f582=String(_0x385070['getMonth']()+0x1)[_0x202ee1(0xfc)](0x2,'0'),_0x254bcb=String(_0x385070[_0x202ee1(0x19a)]())['padStart'](0x2,'0'),_0x55357d=''+_0x294583+_0x51f582+'/'+_0x254bcb,_0x4afc9e=await this['uploadService'][_0x202ee1(0x10a)]({'buffer':_0x3c5ed,'mimetype':_0x202ee1(0x1d9)},_0x202ee1(0x1ca)+_0x55357d);await Promise[_0x202ee1(0x17f)]([this[_0x202ee1(0x124)][_0x202ee1(0x122)](_0x39f1bd,{'ttsUrl':_0x4afc9e}),this[_0x202ee1(0x116)][_0x202ee1(0x192)](_0x3c8895[_0x202ee1(0x160)]['id'],_0x468598,_0x291373)]),_0x4663f7['status'](0xc8)[_0x202ee1(0x134)]({'ttsUrl':_0x4afc9e});}catch(_0x43adfb){common_1['Logger'][_0x202ee1(0x138)](_0x202ee1(0x194),_0x43adfb,_0x202ee1(0x177)),_0x4663f7[_0x202ee1(0x1e3)](0x1f4)['send']({'error':'Failed\x20to\x20process\x20TTS\x20request'});}}};ChatService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x54996d(0x1bb)])(config_entity_1[_0x54996d(0x1c0)])),__param(0x1,(0x0,typeorm_1[_0x54996d(0x1bb)])(app_entity_1[_0x54996d(0x199)])),__param(0x2,(0x0,typeorm_1[_0x54996d(0x1bb)])(plugin_entity_1[_0x54996d(0x10f)])),__metadata(_0x54996d(0x1af),[typeorm_2[_0x54996d(0x13e)],typeorm_2[_0x54996d(0x13e)],typeorm_2['Repository'],suno_service_1[_0x54996d(0x1d0)],openaiChat_service_1['OpenAIChatService'],chatLog_service_1[_0x54996d(0xf0)],midjourneyDraw_service_1['MidjourneyService'],stableDiffusion_service_1[_0x54996d(0x14b)],userBalance_service_1['UserBalanceService'],user_service_1[_0x54996d(0x16e)],upload_service_1['UploadService'],badWords_service_1['BadWordsService'],autoreply_service_1[_0x54996d(0x1c8)],globalConfig_service_1[_0x54996d(0x172)],chatGroup_service_1[_0x54996d(0x16c)],models_service_1[_0x54996d(0x143)],openaiDraw_service_1['OpenAIDrawService'],lumaVideo_service_1['LumaVideoService'],cogVideo_service_1[_0x54996d(0x131)],fluxDraw_service_1['FluxDrawService'],aiPPT_1[_0x54996d(0xef)]])],ChatService),exports['ChatService']=ChatService;