'use strict';const _0x377ffe=_0x25a9;(function(_0x3970f6,_0x70a504){const _0x53c454=_0x25a9,_0x3d2f4e=_0x3970f6();while(!![]){try{const _0x3ca970=-parseInt(_0x53c454(0x134))/0x1*(-parseInt(_0x53c454(0xff))/0x2)+parseInt(_0x53c454(0xee))/0x3*(-parseInt(_0x53c454(0x148))/0x4)+-parseInt(_0x53c454(0x130))/0x5+parseInt(_0x53c454(0xe7))/0x6+-parseInt(_0x53c454(0xfd))/0x7+parseInt(_0x53c454(0x11d))/0x8+parseInt(_0x53c454(0x112))/0x9;if(_0x3ca970===_0x70a504)break;else _0x3d2f4e['push'](_0x3d2f4e['shift']());}catch(_0x4ca666){_0x3d2f4e['push'](_0x3d2f4e['shift']());}}}(_0x1456,0xa390c));var __decorate=this&&this[_0x377ffe(0xf1)]||function(_0x109e4d,_0x55dc42,_0x3b93e7,_0x21ae41){const _0x3ed2eb=_0x377ffe;var _0x1a55bf=arguments[_0x3ed2eb(0x114)],_0x4cd568=_0x1a55bf<0x3?_0x55dc42:_0x21ae41===null?_0x21ae41=Object[_0x3ed2eb(0x132)](_0x55dc42,_0x3b93e7):_0x21ae41,_0x54383e;if(typeof Reflect===_0x3ed2eb(0xf9)&&typeof Reflect['decorate']==='function')_0x4cd568=Reflect[_0x3ed2eb(0xfc)](_0x109e4d,_0x55dc42,_0x3b93e7,_0x21ae41);else{for(var _0x1a535e=_0x109e4d[_0x3ed2eb(0x114)]-0x1;_0x1a535e>=0x0;_0x1a535e--)if(_0x54383e=_0x109e4d[_0x1a535e])_0x4cd568=(_0x1a55bf<0x3?_0x54383e(_0x4cd568):_0x1a55bf>0x3?_0x54383e(_0x55dc42,_0x3b93e7,_0x4cd568):_0x54383e(_0x55dc42,_0x3b93e7))||_0x4cd568;}return _0x1a55bf>0x3&&_0x4cd568&&Object[_0x3ed2eb(0xf5)](_0x55dc42,_0x3b93e7,_0x4cd568),_0x4cd568;},__metadata=this&&this['__metadata']||function(_0x227bd2,_0x8d2b92){const _0x1907a2=_0x377ffe;if(typeof Reflect===_0x1907a2(0xf9)&&typeof Reflect['metadata']===_0x1907a2(0x14c))return Reflect[_0x1907a2(0x13b)](_0x227bd2,_0x8d2b92);};function _0x25a9(_0x652c33,_0x3893c5){const _0x1456cb=_0x1456();return _0x25a9=function(_0x25a9ef,_0x378c74){_0x25a9ef=_0x25a9ef-0xe6;let _0x14c0bd=_0x1456cb[_0x25a9ef];return _0x14c0bd;},_0x25a9(_0x652c33,_0x3893c5);}function _0x1456(){const _0x1983be=['绘制中！绘制进度','当前任务类型:\x20','/mj/submit/action','246dLSfDD','application/x-www-form-urlencoded','updateChatLog','__decorate','now','绘图失败','mjNotSaveImg','defineProperty','getConfigs','GlobalConfigService','uploadService','object','stringify','/mj/submit/imagine','decorate','9152598lMKgJX','上传成功\x20URL:\x20','730HowSQh','getMonth','未能获取结果数据,\x20即将重试','IMAGINE','绘画任务提交成功,\x20绘画ID:\x20','SUCCESS','default','images/midjourney/','../models/models.service','正在准备发送请求到\x20','不保存图片，使用\x20URL:\x20','port','data','\x20MidjourneyService','arrayBuffer','PICREADER','HttpStatus','轮询过程中发生错误:\x20','imageUrl','14011434MWLtBn','当前绘制进度\x20','length','buttons','绘画超时，请稍后再试！','result','finalPrompt','design:paramtypes','ChatLogService','pollMjDrawingResult','使用代理替换后的\x20URL:\x20','3932976fnEDAk','modelsService',',\x20headers:\x20','/mj/submit/describe','key','uploadFileFromUrl','/mj/submit/modal','answer','state','error','protocol','../chatLog/chatLog.service','hostname','ModelsService','DESCRIBE','Logger','globalConfigService','getMidjourneyModelByPlugin','BAD_REQUEST','3846850TavcmS','padStart','getOwnPropertyDescriptor','from','3282tYYArV','MidjourneyService','getDate','chatLogService','midjourney','绘制成功,\x20获取到的URL:\x20','@nestjs/common','metadata','status','drawId','mjNotUseProxy','data:image/png;base64,','catch','存储图片失败，使用原始/代理图片链接\x20','查询结果:\x20','绘制中','/fetch','log','../upload/upload.service','超过\x20','40184IcNwZt','fileInfo','__esModule','getFullYear','function','Injectable','blob','progress','debug','post','收到响应:\x20','绘画失败:\x20','1945452tuIbrD','UploadService','properties','customId'];_0x1456=function(){return _0x1983be;};return _0x1456();}Object['defineProperty'](exports,_0x377ffe(0x14a),{'value':!![]}),exports[_0x377ffe(0x135)]=void 0x0;const common_1=require(_0x377ffe(0x13a)),axios_1=require('axios'),chatLog_service_1=require(_0x377ffe(0x128)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),upload_service_1=require(_0x377ffe(0x146)),models_service_1=require(_0x377ffe(0x107));let MidjourneyService=class MidjourneyService{constructor(_0x549396,_0x4e84e1,_0x23aa14,_0x10ba7e){const _0x313626=_0x377ffe;this['uploadService']=_0x549396,this[_0x313626(0x12d)]=_0x4e84e1,this[_0x313626(0x137)]=_0x23aa14,this[_0x313626(0x11e)]=_0x10ba7e;}async['midjourneyDraw'](_0x4398d5){const _0x9097f=_0x377ffe;var _0x497f65,_0x1a9c68,_0x59b2f6,_0x33b767;const {id:_0x300519,apiKey:_0x15283e,proxyUrl:_0xc83885,action:_0x40d4d5,drawId:_0x2d7894,prompt:_0x31dba7,usePrompt:_0x25fa3b,customId:_0x59fe82,timeout:_0x1d6601,fileInfo:_0x417cc8,assistantLogId:_0x355155,pluginName:_0x484860}=_0x4398d5;let _0x17293b={'text':'','fileInfo':'','drawId':'','customId':'','status':0x2};const _0x15e483=this['getMidjourneyModelByPlugin'](_0x484860),_0x410279=await this['modelsService']['getModelConfigByName'](_0x15e483),_0x3fcf4a=(_0x410279===null||_0x410279===void 0x0?void 0x0:_0x410279[_0x9097f(0x121)])||_0x15283e;let _0x2a599d,_0x598818=0x0,_0x26db9e='';const _0x1a57ce={'mj-api-secret':_0x3fcf4a};common_1[_0x9097f(0x12c)][_0x9097f(0x150)](_0x9097f(0xec)+_0x40d4d5,_0x9097f(0x135));while(_0x598818<0x3){let _0x9189cb={};try{if(_0x40d4d5===_0x9097f(0x102))_0x26db9e=_0xc83885+_0x9097f(0xfb),_0x9189cb={'prompt':_0x25fa3b};else{if(_0x40d4d5===_0x9097f(0x12b)){_0x26db9e=_0xc83885+_0x9097f(0x120);if(_0x417cc8){const _0x329f7d=await fetch(_0x417cc8),_0x24aa54=await _0x329f7d[_0x9097f(0x14e)](),_0x1078e1=Buffer[_0x9097f(0x133)](await _0x24aa54[_0x9097f(0x10d)]()),_0x4126bc=_0x1078e1['toString']('base64');_0x9189cb={'base64':_0x9097f(0x13f)+_0x4126bc};}else return;}else _0x40d4d5===_0x9097f(0x10e)?(_0x26db9e=_0xc83885+'/mj/submit/action',_0x9189cb={'taskId':_0x2d7894,'customId':_0x59fe82},_0x2a599d=await axios_1[_0x9097f(0x105)]['post'](_0x26db9e,_0x9189cb,{'headers':_0x1a57ce}),(_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x13c)])===0xc8&&((_0x497f65=_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x10b)])===null||_0x497f65===void 0x0?void 0x0:_0x497f65[_0x9097f(0x117)])&&(_0x26db9e=_0xc83885+_0x9097f(0x123),_0x9189cb={'taskId':(_0x1a9c68=_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x10b)])===null||_0x1a9c68===void 0x0?void 0x0:_0x1a9c68[_0x9097f(0x117)]})):(_0x26db9e=_0xc83885+_0x9097f(0xed),_0x9189cb={'taskId':_0x2d7894,'customId':_0x59fe82});}common_1[_0x9097f(0x12c)][_0x9097f(0x145)](_0x9097f(0x108)+_0x26db9e+'，payload:\x20'+JSON[_0x9097f(0xfa)](_0x9189cb)+_0x9097f(0x11f)+JSON[_0x9097f(0xfa)](_0x1a57ce),_0x9097f(0x135)),_0x2a599d=await axios_1[_0x9097f(0x105)][_0x9097f(0x151)](_0x26db9e,_0x9189cb,{'headers':_0x1a57ce});if((_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x13c)])===0xc8&&((_0x59b2f6=_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x10b)])===null||_0x59b2f6===void 0x0?void 0x0:_0x59b2f6[_0x9097f(0x117)])){common_1['Logger'][_0x9097f(0x150)](_0x9097f(0x152)+JSON[_0x9097f(0xfa)](_0x2a599d[_0x9097f(0x10b)]),'MidjourneyService'),_0x17293b[_0x9097f(0x13d)]=(_0x33b767=_0x2a599d===null||_0x2a599d===void 0x0?void 0x0:_0x2a599d[_0x9097f(0x10b)])===null||_0x33b767===void 0x0?void 0x0:_0x33b767[_0x9097f(0x117)],_0x17293b[_0x9097f(0x125)]=0x2,_0x17293b[_0x9097f(0x124)]='绘画任务提交成功',common_1[_0x9097f(0x12c)]['log'](_0x9097f(0x103)+_0x2a599d[_0x9097f(0x10b)][_0x9097f(0x117)],_0x9097f(0x135));break;}else throw new Error(_0x9097f(0x101));}catch(_0x257f36){_0x598818++,_0x598818>=0x3&&(_0x17293b[_0x9097f(0x124)]='任务提交失败，请检查提示词后重试',_0x17293b[_0x9097f(0x13c)]=0x5,common_1[_0x9097f(0x12c)][_0x9097f(0x145)]('绘画任务提交失败,\x20请检查后台配置或者稍后重试!\x20'+_0x257f36,'MidjourneyService'));}}return this[_0x9097f(0x11b)]({'proxyUrl':_0xc83885,'apiKey':_0x3fcf4a,'drawId':_0x17293b[_0x9097f(0x13d)],'timeout':_0x1d6601,'prompt':_0x31dba7,'onSuccess':async _0x351e8f=>{const _0xba8ef1=_0x9097f;await this[_0xba8ef1(0x137)][_0xba8ef1(0xf0)](_0x355155,{'fileInfo':_0x351e8f===null||_0x351e8f===void 0x0?void 0x0:_0x351e8f[_0xba8ef1(0x149)],'answer':(_0x351e8f===null||_0x351e8f===void 0x0?void 0x0:_0x351e8f[_0xba8ef1(0x124)])||_0x31dba7,'progress':'100%','status':0x3,'drawId':_0x351e8f===null||_0x351e8f===void 0x0?void 0x0:_0x351e8f['drawId'],'customId':_0x351e8f===null||_0x351e8f===void 0x0?void 0x0:_0x351e8f[_0xba8ef1(0xea)]}),common_1[_0xba8ef1(0x12c)][_0xba8ef1(0x145)]('绘图成功！','MidjourneyService');},'onDrawing':async _0x130148=>{const _0x3e48a2=_0x9097f;await this[_0x3e48a2(0x137)][_0x3e48a2(0xf0)](_0x355155,{'answer':(_0x130148===null||_0x130148===void 0x0?void 0x0:_0x130148['answer'])||_0x3e48a2(0x143),'progress':_0x130148===null||_0x130148===void 0x0?void 0x0:_0x130148['progress'],'status':0x2}),common_1[_0x3e48a2(0x12c)][_0x3e48a2(0x145)](_0x3e48a2(0xeb)+(_0x130148===null||_0x130148===void 0x0?void 0x0:_0x130148[_0x3e48a2(0x14f)]),_0x3e48a2(0x135));},'onFailure':async _0x20a207=>{const _0x270679=_0x9097f;await this['chatLogService'][_0x270679(0xf0)](_0x355155,{'answer':'绘图失败','status':_0x20a207[_0x270679(0x13c)]}),common_1[_0x270679(0x12c)]['log'](_0x270679(0xf3),_0x270679(0x135));}})[_0x9097f(0x140)](_0xb7fc5b=>{const _0x314736=_0x9097f;common_1[_0x314736(0x12c)][_0x314736(0x126)]('查询绘图结果时发生错误:',_0xb7fc5b,'MidjourneyService');}),_0x17293b;}async[_0x377ffe(0x11b)](_0x1cb06b){const _0x3799c1=_0x377ffe,{proxyUrl:_0x518e16,apiKey:_0x3c9737,drawId:_0x435017,timeout:_0x474ae2,onSuccess:_0x70e1b0,prompt:_0x38b903,onFailure:_0x3c5b48,onDrawing:_0x33931c}=_0x1cb06b,{mjNotSaveImg:_0x8ff134,mjProxyImgUrl:_0xfff3bb,mjNotUseProxy:_0x406d7e}=await this[_0x3799c1(0x12d)][_0x3799c1(0xf6)]([_0x3799c1(0xf4),'mjProxyImgUrl',_0x3799c1(0x13e)]);let _0x380450={'fileInfo':'','drawId':'','customId':'','status':0x2,'progress':0x0,'answer':''};const _0x95cd11=Date['now'](),_0x2d5e15=0x1388;let _0x251dd2=0x0;try{while(Date[_0x3799c1(0xf2)]()-_0x95cd11<_0x474ae2){await new Promise(_0x4a2a4c=>setTimeout(_0x4a2a4c,_0x2d5e15));try{const _0x1fcedf={'Content-Type':_0x3799c1(0xef),'mj-api-secret':_0x3c9737},_0x3a6954=_0x518e16+'/mj/task/'+_0x435017+_0x3799c1(0x144),_0x45570f=await axios_1[_0x3799c1(0x105)]['get'](_0x3a6954,{'headers':_0x1fcedf}),_0x14debc=_0x45570f[_0x3799c1(0x10b)];common_1[_0x3799c1(0x12c)][_0x3799c1(0x150)](_0x3799c1(0x142)+JSON[_0x3799c1(0xfa)](_0x14debc),_0x3799c1(0x135));if(_0x14debc[_0x3799c1(0x13c)]===_0x3799c1(0x104)){common_1['Logger'][_0x3799c1(0x145)](_0x3799c1(0x139)+_0x14debc[_0x3799c1(0x111)],_0x3799c1(0x135));let _0x5bd282=_0x14debc[_0x3799c1(0x111)];const _0x1ce922=_0x406d7e==='0'&&_0xfff3bb;let _0x31198e='';if(_0x1ce922){const _0x2d2c27=new URL(_0xfff3bb),_0x471794=new URL(_0x14debc[_0x3799c1(0x111)]);_0x471794[_0x3799c1(0x127)]=_0x2d2c27[_0x3799c1(0x127)],_0x471794['hostname']=_0x2d2c27[_0x3799c1(0x129)],_0x471794[_0x3799c1(0x10a)]=_0x2d2c27[_0x3799c1(0x10a)]?_0x2d2c27[_0x3799c1(0x10a)]:'',_0x5bd282=_0x471794['toString'](),_0x31198e=_0x3799c1(0x11c)+_0x5bd282,common_1['Logger'][_0x3799c1(0x145)](_0x31198e,_0x3799c1(0x135));}if(_0x8ff134!=='1'){try{common_1[_0x3799c1(0x12c)][_0x3799c1(0x145)]('------>\x20开始上传图片！！！',_0x3799c1(0x135));const _0xbadea8=new Date(),_0x747c49=_0xbadea8[_0x3799c1(0x14b)](),_0x37d2b6=String(_0xbadea8[_0x3799c1(0x100)]()+0x1)[_0x3799c1(0x131)](0x2,'0'),_0x5aeec5=String(_0xbadea8[_0x3799c1(0x136)]())[_0x3799c1(0x131)](0x2,'0'),_0x2ddc32=''+_0x747c49+_0x37d2b6+'/'+_0x5aeec5;_0x5bd282=await this[_0x3799c1(0xf8)][_0x3799c1(0x122)]({'url':_0x5bd282,'dir':_0x3799c1(0x106)+_0x2ddc32}),_0x31198e=_0x3799c1(0xfe)+_0x5bd282;}catch(_0x2632ef){common_1['Logger'][_0x3799c1(0x126)]('存储图片失败，使用原始/代理图片链接'),_0x31198e=_0x3799c1(0x141)+_0x5bd282;}common_1[_0x3799c1(0x12c)][_0x3799c1(0x145)](_0x31198e,'MidjourneyService');}else _0x31198e=_0x3799c1(0x109)+_0x5bd282,common_1[_0x3799c1(0x12c)][_0x3799c1(0x145)](_0x31198e,_0x3799c1(0x135));_0x380450['fileInfo']=_0x5bd282,_0x380450[_0x3799c1(0x13d)]=_0x14debc['id'],_0x380450[_0x3799c1(0xea)]=JSON[_0x3799c1(0xfa)](_0x14debc[_0x3799c1(0x115)]),_0x380450[_0x3799c1(0x124)]=_0x38b903+'\x0a'+(_0x14debc['finalPrompt']||_0x14debc[_0x3799c1(0xe9)][_0x3799c1(0x118)]||''),_0x70e1b0(_0x380450);return;}_0x380450[_0x3799c1(0x14f)]=_0x14debc===null||_0x14debc===void 0x0?void 0x0:_0x14debc['progress'],_0x380450[_0x3799c1(0x124)]=_0x3799c1(0x113)+(_0x14debc===null||_0x14debc===void 0x0?void 0x0:_0x14debc[_0x3799c1(0x14f)]),_0x380450['progress']&&_0x33931c(_0x380450);}catch(_0x52db10){_0x251dd2++,common_1[_0x3799c1(0x12c)][_0x3799c1(0x126)](_0x3799c1(0x110)+_0x52db10,_0x3799c1(0x135));}}common_1['Logger']['error'](_0x3799c1(0x147)+_0x95cd11/0x3e8+'\x20s\x20未完成绘画,\x20请稍后再试!\x20MidjourneyService'),_0x380450['status']=0x4,_0x3c5b48(_0x380450);throw new common_1['HttpException'](_0x3799c1(0x116),common_1[_0x3799c1(0x10f)][_0x3799c1(0x12f)]);}catch(_0x466467){common_1['Logger'][_0x3799c1(0x126)](_0x3799c1(0xe6)+_0x466467+_0x3799c1(0x10c)),_0x380450[_0x3799c1(0x13c)]=0x5,_0x3c5b48(_0x380450);}}[_0x377ffe(0x12e)](_0x28c65a){const _0x44c3d9=_0x377ffe;return _0x44c3d9(0x138);}};MidjourneyService=__decorate([(0x0,common_1[_0x377ffe(0x14d)])(),__metadata(_0x377ffe(0x119),[upload_service_1[_0x377ffe(0xe8)],globalConfig_service_1[_0x377ffe(0xf7)],chatLog_service_1[_0x377ffe(0x11a)],models_service_1[_0x377ffe(0x12a)]])],MidjourneyService),exports['MidjourneyService']=MidjourneyService;