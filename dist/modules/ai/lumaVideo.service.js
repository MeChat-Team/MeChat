'use strict';const _0x1eeee1=_0x32d6;(function(_0x3e65aa,_0x1e5138){const _0x51569e=_0x32d6,_0x158c1e=_0x3e65aa();while(!![]){try{const _0x4dd573=-parseInt(_0x51569e(0x82))/0x1*(parseInt(_0x51569e(0xa5))/0x2)+-parseInt(_0x51569e(0x96))/0x3*(-parseInt(_0x51569e(0x8f))/0x4)+-parseInt(_0x51569e(0xbe))/0x5+parseInt(_0x51569e(0xcc))/0x6+parseInt(_0x51569e(0x78))/0x7*(parseInt(_0x51569e(0xb9))/0x8)+-parseInt(_0x51569e(0x80))/0x9+-parseInt(_0x51569e(0x88))/0xa;if(_0x4dd573===_0x1e5138)break;else _0x158c1e['push'](_0x158c1e['shift']());}catch(_0x348981){_0x158c1e['push'](_0x158c1e['shift']());}}}(_0x1154,0x9a3ea));function _0x1154(){const _0x40321a=['debug','872UlWiuF','stringify','Bearer\x20','padStart','prompt','100%','9682260yKtTXK','chatLogService','查询生成结果时发生错误:','data','视频生成失败','updateChatLog','正在准备发送请求到\x20','1052mGVUPZ','taskData','视频任务已完成','../globalConfig/globalConfig.service','floor',',\x20headers:\x20','UploadService','8886aMrjKc','视频生成中...','getDate','，payload:\x20','ChatLogService','design:paramtypes','生成失败','上传文件失败:\x20','../upload/upload.service','查询生成结果时发生错误','get','status','Lum\x20aService','axios','../chatLog/chatLog.service','906zZinew','decorate','log','LumaVideoService','getOwnPropertyDescriptor','更新日志失败:\x20','url','video/luma/','videoUrl','getMonth','metadata','message','video','视频生成中\x20（','pollLumaVideoResult','任务提交成功,\x20任务ID:\x20','progress','lumaVideo','state','completed','76280RhGjnI','error','uploadService','taskId','answer','78730nlSbWT','post','16:9','/luma/generations/','fileInfo','提示词:\x20\x22','default','__decorate','任务提交失败:\x20','defineProperty','getConfigs','__esModule','LumaService','function','2556774vUBxSg','size','@nestjs/common','任务提交失败','audioUrl','GlobalConfigService','679plcyfY','length','Logger','now','object','轮询结果:\x20','localStorageStatus','未能获取结果数据,\x20即将重试','1073304fJqlVl'];_0x1154=function(){return _0x40321a;};return _0x1154();}var __decorate=this&&this[_0x1eeee1(0xc5)]||function(_0x2f76f1,_0x1b4928,_0x4cacbc,_0xd4d385){const _0x47a602=_0x1eeee1;var _0x1b2c87=arguments[_0x47a602(0x79)],_0x450c66=_0x1b2c87<0x3?_0x1b4928:_0xd4d385===null?_0xd4d385=Object[_0x47a602(0xa9)](_0x1b4928,_0x4cacbc):_0xd4d385,_0x556359;if(typeof Reflect===_0x47a602(0x7c)&&typeof Reflect[_0x47a602(0xa6)]===_0x47a602(0xcb))_0x450c66=Reflect[_0x47a602(0xa6)](_0x2f76f1,_0x1b4928,_0x4cacbc,_0xd4d385);else{for(var _0x309e9a=_0x2f76f1[_0x47a602(0x79)]-0x1;_0x309e9a>=0x0;_0x309e9a--)if(_0x556359=_0x2f76f1[_0x309e9a])_0x450c66=(_0x1b2c87<0x3?_0x556359(_0x450c66):_0x1b2c87>0x3?_0x556359(_0x1b4928,_0x4cacbc,_0x450c66):_0x556359(_0x1b4928,_0x4cacbc))||_0x450c66;}return _0x1b2c87>0x3&&_0x450c66&&Object[_0x47a602(0xc7)](_0x1b4928,_0x4cacbc,_0x450c66),_0x450c66;},__metadata=this&&this['__metadata']||function(_0x3b8de8,_0x3a4d4b){const _0x413e75=_0x1eeee1;if(typeof Reflect===_0x413e75(0x7c)&&typeof Reflect[_0x413e75(0xaf)]===_0x413e75(0xcb))return Reflect[_0x413e75(0xaf)](_0x3b8de8,_0x3a4d4b);};Object[_0x1eeee1(0xc7)](exports,_0x1eeee1(0xc9),{'value':!![]}),exports[_0x1eeee1(0xa8)]=void 0x0;const common_1=require(_0x1eeee1(0x74)),axios_1=require(_0x1eeee1(0xa3)),chatLog_service_1=require(_0x1eeee1(0xa4)),globalConfig_service_1=require(_0x1eeee1(0x92)),upload_service_1=require(_0x1eeee1(0x9e));function _0x32d6(_0x533db4,_0x34e6de){const _0x1154e2=_0x1154();return _0x32d6=function(_0x32d6bb,_0x2aab49){_0x32d6bb=_0x32d6bb-0x73;let _0x25b184=_0x1154e2[_0x32d6bb];return _0x25b184;},_0x32d6(_0x533db4,_0x34e6de);}let LumaVideoService=class LumaVideoService{constructor(_0x50f678,_0x130e2c,_0x4aa33f){this['chatLogService']=_0x50f678,this['globalConfigService']=_0x130e2c,this['uploadService']=_0x4aa33f;}async[_0x1eeee1(0xb6)](_0x27079d){const _0x3504bd=_0x1eeee1;var _0x229e02,_0x7d4ad3,_0x3a4992;const {apiKey:_0x1fd53b,proxyUrl:_0x45506a,fileInfo:_0x3bc0ef,prompt:_0x3aa986,timeout:_0x529323,assistantLogId:_0x8a3f8e,extraParam:_0x51e7d3}=_0x27079d;let _0x128601={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x1a2a28=null,_0x44fb44='',_0x285e3c={};const _0x294674={'Authorization':_0x3504bd(0x84)+_0x1fd53b};_0x44fb44=_0x45506a+_0x3504bd(0xc1);const _0x75f2af=_0x51e7d3[_0x3504bd(0x73)]||_0x3504bd(0xc0);_0x285e3c={'user_prompt':_0x3aa986,'aspect_ratio':_0x75f2af,'expand_prompt':!![]};_0x3bc0ef&&(_0x285e3c['image_url']=_0x3bc0ef);common_1[_0x3504bd(0x7a)][_0x3504bd(0xa7)](_0x3504bd(0x8e)+_0x44fb44+_0x3504bd(0x99)+JSON[_0x3504bd(0x83)](_0x285e3c)+_0x3504bd(0x94)+JSON['stringify'](_0x294674),_0x3504bd(0xca));try{_0x1a2a28=await axios_1[_0x3504bd(0xc4)][_0x3504bd(0xbf)](_0x44fb44,_0x285e3c,{'headers':_0x294674});}catch(_0x22e1ec){common_1[_0x3504bd(0x7a)]['error'](_0x3504bd(0xc6)+_0x22e1ec['message'],_0x3504bd(0xca));throw new Error(_0x3504bd(0x75));}if((_0x229e02=_0x1a2a28===null||_0x1a2a28===void 0x0?void 0x0:_0x1a2a28[_0x3504bd(0x8b)])===null||_0x229e02===void 0x0?void 0x0:_0x229e02['id'])_0x128601[_0x3504bd(0xbc)]=(_0x7d4ad3=_0x1a2a28===null||_0x1a2a28===void 0x0?void 0x0:_0x1a2a28[_0x3504bd(0x8b)])===null||_0x7d4ad3===void 0x0?void 0x0:_0x7d4ad3['id'],common_1['Logger'][_0x3504bd(0xa7)](_0x3504bd(0xb4)+((_0x3a4992=_0x1a2a28===null||_0x1a2a28===void 0x0?void 0x0:_0x1a2a28['data'])===null||_0x3a4992===void 0x0?void 0x0:_0x3a4992['id']),_0x3504bd(0xca));else throw new Error(_0x3504bd(0x7f));try{await this[_0x3504bd(0xb3)]({'proxyUrl':_0x45506a,'apiKey':_0x1fd53b,'taskId':_0x1a2a28[_0x3504bd(0x8b)]['id'],'timeout':_0x529323,'prompt':_0x3aa986,'onSuccess':async _0x389ebc=>{const _0x1fccc2=_0x3504bd;try{await this['chatLogService'][_0x1fccc2(0x8d)](_0x8a3f8e,{'videoUrl':_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc[_0x1fccc2(0xad)],'audioUrl':_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc[_0x1fccc2(0x76)],'fileInfo':_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc[_0x1fccc2(0xc2)],'answer':(_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc['answer'])||_0x3aa986,'progress':_0x1fccc2(0x87),'status':0x3,'taskId':_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc['taskId'],'taskData':_0x389ebc===null||_0x389ebc===void 0x0?void 0x0:_0x389ebc[_0x1fccc2(0x90)]}),common_1[_0x1fccc2(0x7a)][_0x1fccc2(0xa7)](_0x1fccc2(0x91),_0x1fccc2(0xca));}catch(_0x3c481f){common_1[_0x1fccc2(0x7a)][_0x1fccc2(0xba)](_0x1fccc2(0xaa)+_0x3c481f[_0x1fccc2(0xb0)],_0x1fccc2(0xca));}},'onGenerating':async _0x42449c=>{const _0x505b91=_0x3504bd;try{await this[_0x505b91(0x89)]['updateChatLog'](_0x8a3f8e,{'videoUrl':_0x42449c===null||_0x42449c===void 0x0?void 0x0:_0x42449c[_0x505b91(0xad)],'audioUrl':_0x42449c===null||_0x42449c===void 0x0?void 0x0:_0x42449c[_0x505b91(0x76)],'fileInfo':_0x42449c===null||_0x42449c===void 0x0?void 0x0:_0x42449c[_0x505b91(0xc2)],'answer':(_0x42449c===null||_0x42449c===void 0x0?void 0x0:_0x42449c[_0x505b91(0xbd)])||_0x505b91(0x97),'progress':_0x42449c===null||_0x42449c===void 0x0?void 0x0:_0x42449c[_0x505b91(0xb5)],'status':_0x42449c['status']}),common_1[_0x505b91(0x7a)][_0x505b91(0xa7)](_0x505b91(0x97),_0x505b91(0xca));}catch(_0x1e9eff){common_1[_0x505b91(0x7a)]['error']('更新日志失败:\x20'+_0x1e9eff[_0x505b91(0xb0)],_0x505b91(0xca));}},'onFailure':async _0x14fb9b=>{const _0x52dd65=_0x3504bd;try{await this[_0x52dd65(0x89)]['updateChatLog'](_0x8a3f8e,{'answer':_0x52dd65(0x8c),'status':_0x14fb9b[_0x52dd65(0xa1)]}),common_1['Logger'][_0x52dd65(0xa7)](_0x52dd65(0x9c),_0x52dd65(0xa2));}catch(_0x500d16){common_1[_0x52dd65(0x7a)][_0x52dd65(0xba)]('更新日志失败:\x20'+_0x500d16[_0x52dd65(0xb0)],_0x52dd65(0xca));}}});}catch(_0x6697a4){common_1[_0x3504bd(0x7a)][_0x3504bd(0xba)](_0x3504bd(0x8a),_0x6697a4[_0x3504bd(0xb0)],'LumaService');throw new Error(_0x3504bd(0x9f));}return _0x128601;}async[_0x1eeee1(0xb3)](_0x1b9bfd){const _0x46ac4f=_0x1eeee1,{proxyUrl:_0x427d23,apiKey:_0x3c2890,taskId:_0xc43499,timeout:_0x563286,onSuccess:_0xf38f4f,onFailure:_0x23f8d8,onGenerating:_0x52d714,action:_0x24a65c}=_0x1b9bfd;let _0x48a118={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x1c3872={'Authorization':_0x46ac4f(0x84)+_0x3c2890},_0x353b7a=_0x427d23+_0x46ac4f(0xc1)+_0xc43499,_0x4e50d7=Date[_0x46ac4f(0x7b)](),_0x410e96=0x493e0,_0x5867d5=0x1388;let _0x3939b7=0x0;try{while(Date['now']()-_0x4e50d7<_0x563286){await new Promise(_0x1fcd32=>setTimeout(_0x1fcd32,_0x5867d5));try{const _0x50a2eb=await axios_1[_0x46ac4f(0xc4)][_0x46ac4f(0xa0)](_0x353b7a,{'headers':_0x1c3872}),_0x3bce46=setInterval(()=>{const _0x5bfb44=_0x46ac4f,_0x33503e=Date[_0x5bfb44(0x7b)]()-_0x4e50d7;let _0x43c84a=Math[_0x5bfb44(0x93)](_0x33503e/_0x410e96*0x64);if(_0x43c84a>=0x63)_0x43c84a=0x63;_0x48a118['answer']=_0x5bfb44(0xb2)+_0x43c84a+'%）';},0x3e8),_0x54eace=_0x50a2eb[_0x46ac4f(0x8b)];common_1[_0x46ac4f(0x7a)][_0x46ac4f(0x81)](_0x46ac4f(0x7d)+JSON[_0x46ac4f(0x83)](_0x54eace),_0x46ac4f(0xca));if(_0x54eace[_0x46ac4f(0xb7)]===_0x46ac4f(0xb8)){_0x48a118['taskId']=_0x54eace['id'],_0x48a118['taskData']=JSON[_0x46ac4f(0x83)](_0x54eace),_0x48a118['fileInfo']=_0x54eace[_0x46ac4f(0xb1)][_0x46ac4f(0xab)];try{const _0x5ca7c9=await this['globalConfigService'][_0x46ac4f(0xc8)]([_0x46ac4f(0x7e)]);if(Number(_0x5ca7c9)){const _0x186c5e=new Date(),_0x15b011=_0x186c5e['getFullYear'](),_0x3219e5=String(_0x186c5e[_0x46ac4f(0xae)]()+0x1)[_0x46ac4f(0x85)](0x2,'0'),_0x1c1921=String(_0x186c5e[_0x46ac4f(0x98)]())[_0x46ac4f(0x85)](0x2,'0'),_0xee761b=''+_0x15b011+_0x3219e5+'/'+_0x1c1921;_0x48a118['fileInfo']=await this[_0x46ac4f(0xbb)]['uploadFileFromUrl']({'url':_0x54eace[_0x46ac4f(0xb1)]['download_url'],'dir':_0x46ac4f(0xac)+_0xee761b});}}catch(_0x67e63d){common_1[_0x46ac4f(0x7a)][_0x46ac4f(0xba)](_0x46ac4f(0x9d)+_0x67e63d[_0x46ac4f(0xb0)],_0x46ac4f(0xca));}_0x48a118[_0x46ac4f(0xbd)]=_0x46ac4f(0xc3)+_0x54eace[_0x46ac4f(0x86)]+'\x22',_0xf38f4f(_0x48a118),clearInterval(_0x3bce46);return;}else _0x52d714(_0x48a118);if(_0x48a118[_0x46ac4f(0xb5)]){}}catch(_0x42d2c7){_0x3939b7++,common_1[_0x46ac4f(0x7a)][_0x46ac4f(0xba)]('轮询失败，重试次数:\x20'+_0x3939b7,'LumaService');}}common_1[_0x46ac4f(0x7a)][_0x46ac4f(0xba)]('轮询超时，请稍后再试！',_0x46ac4f(0xca)),_0x48a118[_0x46ac4f(0xa1)]=0x4,_0x23f8d8(_0x48a118);throw new Error('查询超时，请稍后再试！');}catch(_0x24c101){common_1[_0x46ac4f(0x7a)]['error']('轮询过程中发生错误:\x20'+_0x24c101,_0x46ac4f(0xca)),_0x48a118['status']=0x5,_0x23f8d8(_0x48a118);}}};LumaVideoService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x1eeee1(0x9b),[chatLog_service_1[_0x1eeee1(0x9a)],globalConfig_service_1[_0x1eeee1(0x77)],upload_service_1[_0x1eeee1(0x95)]])],LumaVideoService),exports[_0x1eeee1(0xa8)]=LumaVideoService;