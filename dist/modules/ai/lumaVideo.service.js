'use strict';const _0x2ff321=_0x15b1;function _0x15b1(_0x211ab4,_0x3fe6e1){const _0x3bd3f7=_0x3bd3();return _0x15b1=function(_0x15b1c4,_0x12c05d){_0x15b1c4=_0x15b1c4-0x1cf;let _0x2f7ed1=_0x3bd3f7[_0x15b1c4];return _0x2f7ed1;},_0x15b1(_0x211ab4,_0x3fe6e1);}(function(_0x207e41,_0x83285){const _0x15773c=_0x15b1,_0x303f1c=_0x207e41();while(!![]){try{const _0x2ea6c5=-parseInt(_0x15773c(0x1d1))/0x1*(parseInt(_0x15773c(0x213))/0x2)+-parseInt(_0x15773c(0x1df))/0x3*(-parseInt(_0x15773c(0x214))/0x4)+parseInt(_0x15773c(0x215))/0x5+parseInt(_0x15773c(0x222))/0x6+parseInt(_0x15773c(0x1de))/0x7*(-parseInt(_0x15773c(0x211))/0x8)+-parseInt(_0x15773c(0x220))/0x9*(-parseInt(_0x15773c(0x1d7))/0xa)+-parseInt(_0x15773c(0x225))/0xb*(parseInt(_0x15773c(0x1f5))/0xc);if(_0x2ea6c5===_0x83285)break;else _0x303f1c['push'](_0x303f1c['shift']());}catch(_0xa10dee){_0x303f1c['push'](_0x303f1c['shift']());}}}(_0x3bd3,0x92907));var __decorate=this&&this[_0x2ff321(0x228)]||function(_0x57aa81,_0x45856c,_0x3a812c,_0x4a22bd){const _0x7125bb=_0x2ff321;var _0x1a6c65=arguments['length'],_0x59165d=_0x1a6c65<0x3?_0x45856c:_0x4a22bd===null?_0x4a22bd=Object[_0x7125bb(0x1e5)](_0x45856c,_0x3a812c):_0x4a22bd,_0x215091;if(typeof Reflect===_0x7125bb(0x1db)&&typeof Reflect[_0x7125bb(0x223)]==='function')_0x59165d=Reflect[_0x7125bb(0x223)](_0x57aa81,_0x45856c,_0x3a812c,_0x4a22bd);else{for(var _0x1d5a2b=_0x57aa81['length']-0x1;_0x1d5a2b>=0x0;_0x1d5a2b--)if(_0x215091=_0x57aa81[_0x1d5a2b])_0x59165d=(_0x1a6c65<0x3?_0x215091(_0x59165d):_0x1a6c65>0x3?_0x215091(_0x45856c,_0x3a812c,_0x59165d):_0x215091(_0x45856c,_0x3a812c))||_0x59165d;}return _0x1a6c65>0x3&&_0x59165d&&Object[_0x7125bb(0x1e4)](_0x45856c,_0x3a812c,_0x59165d),_0x59165d;},__metadata=this&&this['__metadata']||function(_0x479f3e,_0x3e8a9b){const _0x93fc52=_0x2ff321;if(typeof Reflect===_0x93fc52(0x1db)&&typeof Reflect[_0x93fc52(0x208)]===_0x93fc52(0x212))return Reflect[_0x93fc52(0x208)](_0x479f3e,_0x3e8a9b);};Object[_0x2ff321(0x1e4)](exports,_0x2ff321(0x219),{'value':!![]}),exports[_0x2ff321(0x1da)]=void 0x0;const common_1=require(_0x2ff321(0x1ec)),axios_1=require('axios'),chatLog_service_1=require(_0x2ff321(0x1fe)),globalConfig_service_1=require(_0x2ff321(0x1f2)),upload_service_1=require(_0x2ff321(0x1cf));function _0x3bd3(){const _0x26449c=['151164hBYXTD','log','7007862QrcPdg','decorate','/luma/generations/','728002vAcIOo','completed','get','__decorate','../upload/upload.service','audioUrl','10dwWzTI','GlobalConfigService','uploadService','查询超时，请稍后再试！','任务提交成功,\x20任务ID:\x20','更新日志失败:\x20','30ZNDYTm',',\x20headers:\x20','video/luma/','LumaVideoService','object','视频生成中\x20（','轮询过程中发生错误:\x20','7bewCey','17184wstMMX','videoUrl','视频生成中...','getFullYear','Logger','defineProperty','getOwnPropertyDescriptor','video','error','正在准备发送请求到\x20','100%','taskData','download_url','@nestjs/common','轮询失败，重试次数:\x20','padStart','ChatLogService','globalConfigService','，payload:\x20','../globalConfig/globalConfig.service','now','fileInfo','72lOPXLV','轮询超时，请稍后再试！','status','查询生成结果时发生错误','url','上传文件失败:\x20','getMonth','getDate','查询生成结果时发生错误:','../chatLog/chatLog.service','getConfigs','message','生成失败','16:9','updateChatLog','Injectable','progress','Bearer\x20','taskId','metadata','answer','LumaService','state','default','stringify','post','UploadService','uploadFileFromUrl','8100056SZOfQX','function','152830CpgScP','304UEQBIH','5601915OxRlZS','data','design:paramtypes','任务提交失败:\x20','__esModule','image_url','pollLumaVideoResult','chatLogService','floor','任务提交失败','视频任务已完成'];_0x3bd3=function(){return _0x26449c;};return _0x3bd3();}let LumaVideoService=class LumaVideoService{constructor(_0x29395c,_0x174787,_0x484e81){const _0x472414=_0x2ff321;this[_0x472414(0x21c)]=_0x29395c,this[_0x472414(0x1f0)]=_0x174787,this[_0x472414(0x1d3)]=_0x484e81;}async['lumaVideo'](_0x292624){const _0x242027=_0x2ff321;var _0x3deb3f,_0x54a418,_0x40c890;const {apiKey:_0x2b458b,proxyUrl:_0x44e6cb,fileInfo:_0x5c745d,prompt:_0x1cc4cb,timeout:_0x5c4dec,assistantLogId:_0x31860a,extraParam:_0x1e8188}=_0x292624;let _0x32569e={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x459379=null,_0x1916e9='',_0x549186={};const _0x47d146={'Authorization':_0x242027(0x206)+_0x2b458b};_0x1916e9=_0x44e6cb+_0x242027(0x224);const _0xf8be18=_0x1e8188['size']||_0x242027(0x202);_0x549186={'user_prompt':_0x1cc4cb,'aspect_ratio':_0xf8be18,'expand_prompt':!![]};_0x5c745d&&(_0x549186[_0x242027(0x21a)]=_0x5c745d);common_1[_0x242027(0x1e3)][_0x242027(0x221)](_0x242027(0x1e8)+_0x1916e9+_0x242027(0x1f1)+JSON[_0x242027(0x20d)](_0x549186)+_0x242027(0x1d8)+JSON[_0x242027(0x20d)](_0x47d146),'LumaService');try{_0x459379=await axios_1[_0x242027(0x20c)][_0x242027(0x20e)](_0x1916e9,_0x549186,{'headers':_0x47d146});}catch(_0x422748){common_1['Logger'][_0x242027(0x1e7)](_0x242027(0x218)+_0x422748[_0x242027(0x200)],_0x242027(0x20a));throw new Error(_0x242027(0x21e));}if((_0x3deb3f=_0x459379===null||_0x459379===void 0x0?void 0x0:_0x459379[_0x242027(0x216)])===null||_0x3deb3f===void 0x0?void 0x0:_0x3deb3f['id'])_0x32569e[_0x242027(0x207)]=(_0x54a418=_0x459379===null||_0x459379===void 0x0?void 0x0:_0x459379[_0x242027(0x216)])===null||_0x54a418===void 0x0?void 0x0:_0x54a418['id'],common_1[_0x242027(0x1e3)][_0x242027(0x221)](_0x242027(0x1d5)+((_0x40c890=_0x459379===null||_0x459379===void 0x0?void 0x0:_0x459379[_0x242027(0x216)])===null||_0x40c890===void 0x0?void 0x0:_0x40c890['id']),_0x242027(0x20a));else throw new Error('未能获取结果数据,\x20即将重试');try{await this[_0x242027(0x21b)]({'proxyUrl':_0x44e6cb,'apiKey':_0x2b458b,'taskId':_0x459379[_0x242027(0x216)]['id'],'timeout':_0x5c4dec,'prompt':_0x1cc4cb,'onSuccess':async _0xaceef6=>{const _0x1ac3fd=_0x242027;try{await this[_0x1ac3fd(0x21c)]['updateChatLog'](_0x31860a,{'videoUrl':_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6['videoUrl'],'audioUrl':_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6['audioUrl'],'fileInfo':_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6[_0x1ac3fd(0x1f4)],'answer':(_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6[_0x1ac3fd(0x209)])||_0x1cc4cb,'progress':_0x1ac3fd(0x1e9),'status':0x3,'taskId':_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6['taskId'],'taskData':_0xaceef6===null||_0xaceef6===void 0x0?void 0x0:_0xaceef6['taskData']}),common_1['Logger'][_0x1ac3fd(0x221)](_0x1ac3fd(0x21f),'LumaService');}catch(_0x10b17d){common_1[_0x1ac3fd(0x1e3)]['error'](_0x1ac3fd(0x1d6)+_0x10b17d[_0x1ac3fd(0x200)],_0x1ac3fd(0x20a));}},'onGenerating':async _0x2a709f=>{const _0x391c2f=_0x242027;try{await this[_0x391c2f(0x21c)]['updateChatLog'](_0x31860a,{'videoUrl':_0x2a709f===null||_0x2a709f===void 0x0?void 0x0:_0x2a709f[_0x391c2f(0x1e0)],'audioUrl':_0x2a709f===null||_0x2a709f===void 0x0?void 0x0:_0x2a709f[_0x391c2f(0x1d0)],'fileInfo':_0x2a709f===null||_0x2a709f===void 0x0?void 0x0:_0x2a709f[_0x391c2f(0x1f4)],'answer':(_0x2a709f===null||_0x2a709f===void 0x0?void 0x0:_0x2a709f[_0x391c2f(0x209)])||_0x391c2f(0x1e1),'progress':_0x2a709f===null||_0x2a709f===void 0x0?void 0x0:_0x2a709f[_0x391c2f(0x205)],'status':_0x2a709f[_0x391c2f(0x1f7)]}),common_1['Logger'][_0x391c2f(0x221)]('视频生成中...',_0x391c2f(0x20a));}catch(_0x5655e1){common_1[_0x391c2f(0x1e3)][_0x391c2f(0x1e7)]('更新日志失败:\x20'+_0x5655e1['message'],_0x391c2f(0x20a));}},'onFailure':async _0x58d49d=>{const _0x508e0b=_0x242027;try{await this[_0x508e0b(0x21c)][_0x508e0b(0x203)](_0x31860a,{'answer':'视频生成失败','status':_0x58d49d[_0x508e0b(0x1f7)]}),common_1[_0x508e0b(0x1e3)]['log'](_0x508e0b(0x201),'Lum\x20aService');}catch(_0x3d5487){common_1[_0x508e0b(0x1e3)][_0x508e0b(0x1e7)](_0x508e0b(0x1d6)+_0x3d5487[_0x508e0b(0x200)],'LumaService');}}});}catch(_0x2830aa){common_1[_0x242027(0x1e3)][_0x242027(0x1e7)](_0x242027(0x1fd),_0x2830aa[_0x242027(0x200)],_0x242027(0x20a));throw new Error(_0x242027(0x1f8));}return _0x32569e;}async[_0x2ff321(0x21b)](_0x3b6288){const _0x3a96c6=_0x2ff321,{proxyUrl:_0x4e630e,apiKey:_0x51b862,taskId:_0x8c413a,timeout:_0x12af54,onSuccess:_0x1a79dd,onFailure:_0x375148,onGenerating:_0x5f1149,action:_0x1f186a}=_0x3b6288;let _0x255a41={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x52c265={'Authorization':_0x3a96c6(0x206)+_0x51b862},_0x5ce4c8=_0x4e630e+'/luma/generations/'+_0x8c413a,_0x3508d2=Date[_0x3a96c6(0x1f3)](),_0x347fb9=0x493e0,_0x41e924=0x1388;let _0x37a8a4=0x0;try{while(Date[_0x3a96c6(0x1f3)]()-_0x3508d2<_0x12af54){await new Promise(_0x5e8481=>setTimeout(_0x5e8481,_0x41e924));try{const _0x4091ec=await axios_1['default'][_0x3a96c6(0x227)](_0x5ce4c8,{'headers':_0x52c265}),_0x29e568=setInterval(()=>{const _0x292c1b=_0x3a96c6,_0x4c62ac=Date[_0x292c1b(0x1f3)]()-_0x3508d2;let _0x5d3240=Math[_0x292c1b(0x21d)](_0x4c62ac/_0x347fb9*0x64);if(_0x5d3240>=0x63)_0x5d3240=0x63;_0x255a41[_0x292c1b(0x209)]=_0x292c1b(0x1dc)+_0x5d3240+'%）';},0x3e8),_0x1625fb=_0x4091ec['data'];common_1['Logger']['debug']('轮询结果:\x20'+JSON[_0x3a96c6(0x20d)](_0x1625fb),_0x3a96c6(0x20a));if(_0x1625fb[_0x3a96c6(0x20b)]===_0x3a96c6(0x226)){_0x255a41[_0x3a96c6(0x207)]=_0x1625fb['id'],_0x255a41[_0x3a96c6(0x1ea)]=JSON[_0x3a96c6(0x20d)](_0x1625fb),_0x255a41[_0x3a96c6(0x1f4)]=_0x1625fb[_0x3a96c6(0x1e6)][_0x3a96c6(0x1f9)];try{const _0x391b97=await this[_0x3a96c6(0x1f0)][_0x3a96c6(0x1ff)](['localStorageStatus']);if(Number(_0x391b97)){const _0x5c3380=new Date(),_0x524af1=_0x5c3380[_0x3a96c6(0x1e2)](),_0x279cc2=String(_0x5c3380[_0x3a96c6(0x1fb)]()+0x1)[_0x3a96c6(0x1ee)](0x2,'0'),_0x1eb37d=String(_0x5c3380[_0x3a96c6(0x1fc)]())[_0x3a96c6(0x1ee)](0x2,'0'),_0xae28=''+_0x524af1+_0x279cc2+'/'+_0x1eb37d;_0x255a41[_0x3a96c6(0x1f4)]=await this['uploadService'][_0x3a96c6(0x210)]({'url':_0x1625fb[_0x3a96c6(0x1e6)][_0x3a96c6(0x1eb)],'dir':_0x3a96c6(0x1d9)+_0xae28});}}catch(_0x2a0793){common_1['Logger'][_0x3a96c6(0x1e7)](_0x3a96c6(0x1fa)+_0x2a0793[_0x3a96c6(0x200)],_0x3a96c6(0x20a));}_0x255a41[_0x3a96c6(0x209)]='提示词:\x20\x22'+_0x1625fb['prompt']+'\x22',_0x1a79dd(_0x255a41),clearInterval(_0x29e568);return;}else _0x5f1149(_0x255a41);if(_0x255a41[_0x3a96c6(0x205)]){}}catch(_0x383fee){_0x37a8a4++,common_1[_0x3a96c6(0x1e3)][_0x3a96c6(0x1e7)](_0x3a96c6(0x1ed)+_0x37a8a4,'LumaService');}}common_1[_0x3a96c6(0x1e3)][_0x3a96c6(0x1e7)](_0x3a96c6(0x1f6),'LumaService'),_0x255a41[_0x3a96c6(0x1f7)]=0x4,_0x375148(_0x255a41);throw new Error(_0x3a96c6(0x1d4));}catch(_0x39ceff){common_1[_0x3a96c6(0x1e3)][_0x3a96c6(0x1e7)](_0x3a96c6(0x1dd)+_0x39ceff,_0x3a96c6(0x20a)),_0x255a41[_0x3a96c6(0x1f7)]=0x5,_0x375148(_0x255a41);}}};LumaVideoService=__decorate([(0x0,common_1[_0x2ff321(0x204)])(),__metadata(_0x2ff321(0x217),[chatLog_service_1[_0x2ff321(0x1ef)],globalConfig_service_1[_0x2ff321(0x1d2)],upload_service_1[_0x2ff321(0x20f)]])],LumaVideoService),exports['LumaVideoService']=LumaVideoService;