'use strict';function _0x1c4f(_0x5c9148,_0x59d57b){const _0x50d87b=_0x50d8();return _0x1c4f=function(_0x1c4fdf,_0x5a5e43){_0x1c4fdf=_0x1c4fdf-0x1e1;let _0x92a92c=_0x50d87b[_0x1c4fdf];return _0x92a92c;},_0x1c4f(_0x5c9148,_0x59d57b);}const _0x35dcac=_0x1c4f;(function(_0xa585ed,_0x6750f7){const _0x23b1a5=_0x1c4f,_0x2de678=_0xa585ed();while(!![]){try{const _0x102a3d=parseInt(_0x23b1a5(0x1e3))/0x1*(parseInt(_0x23b1a5(0x203))/0x2)+-parseInt(_0x23b1a5(0x1fe))/0x3*(parseInt(_0x23b1a5(0x223))/0x4)+-parseInt(_0x23b1a5(0x202))/0x5+-parseInt(_0x23b1a5(0x1e4))/0x6*(-parseInt(_0x23b1a5(0x1e1))/0x7)+parseInt(_0x23b1a5(0x1fd))/0x8+parseInt(_0x23b1a5(0x1ea))/0x9*(-parseInt(_0x23b1a5(0x235))/0xa)+parseInt(_0x23b1a5(0x228))/0xb;if(_0x102a3d===_0x6750f7)break;else _0x2de678['push'](_0x2de678['shift']());}catch(_0x2b94c2){_0x2de678['push'](_0x2de678['shift']());}}}(_0x50d8,0x7b658));function _0x50d8(){const _0x40e413=['100%','视频生成中...','@nestjs/common','UploadService','GlobalConfigService','CogVideoService','getConfigs','生成失败',',\x20headers:\x20','ChatLogService','getOwnPropertyDescriptor','__decorate','now','Bearer\x20','statusText','default','25064NGkSPl','../chatLog/chatLog.service','chatLogService','未能获取结果数据,\x20即将重试',',\x20数据:\x20','11442662HMJGHl','decorate','request_id','/cogvideox/v4/async-result/','message','任务提交失败','Injectable','pollCogVideoResult','log','answer','/cogvideox/v4/videos/generations','查询生成结果时发生错误','视频生成中\x20（','158140zZtHho','task_status','design:paramtypes','debug','status','stringify','任务提交结果，状态码:\x20','video/cog/','__metadata','21MHeeXq','getFullYear','1yZhiVe','593850DOQHOy','updateChatLog','uploadService','CogService','正在准备发送请求到\x20','uploadFileFromUrl','18yhCLeZ','../upload/upload.service','，payload:\x20','轮询失败，重试次数:\x20','taskData','error','getDate','globalConfigService','视频生成成功','上传文件失败:\x20','object','videoUrl','url','cogVideo','fileInfo','localStorageStatus','axios','Lum\x20aService','cogvideox','555432SvgVUg','201mFInXE','video_result','查询超时，请稍后再试！','length','4964500XXdThS','1086372bymNTr','轮询超时，请稍后再试！','defineProperty','../globalConfig/globalConfig.service','data','查询生成结果时发生错误:','taskId','audioUrl','视频任务已完成','function','padStart','任务提交失败:\x20','image_url','SUCCESS','任务提交成功,\x20任务ID:\x20','Logger'];_0x50d8=function(){return _0x40e413;};return _0x50d8();}var __decorate=this&&this[_0x35dcac(0x21e)]||function(_0xd51d02,_0x4add71,_0x18b554,_0x16edf2){const _0x342cc3=_0x35dcac;var _0x17d715=arguments['length'],_0x16988c=_0x17d715<0x3?_0x4add71:_0x16edf2===null?_0x16edf2=Object[_0x342cc3(0x21d)](_0x4add71,_0x18b554):_0x16edf2,_0x2bb3da;if(typeof Reflect==='object'&&typeof Reflect[_0x342cc3(0x229)]===_0x342cc3(0x20c))_0x16988c=Reflect[_0x342cc3(0x229)](_0xd51d02,_0x4add71,_0x18b554,_0x16edf2);else{for(var _0x3a9fdd=_0xd51d02[_0x342cc3(0x201)]-0x1;_0x3a9fdd>=0x0;_0x3a9fdd--)if(_0x2bb3da=_0xd51d02[_0x3a9fdd])_0x16988c=(_0x17d715<0x3?_0x2bb3da(_0x16988c):_0x17d715>0x3?_0x2bb3da(_0x4add71,_0x18b554,_0x16988c):_0x2bb3da(_0x4add71,_0x18b554))||_0x16988c;}return _0x17d715>0x3&&_0x16988c&&Object[_0x342cc3(0x205)](_0x4add71,_0x18b554,_0x16988c),_0x16988c;},__metadata=this&&this[_0x35dcac(0x23d)]||function(_0xb59ba9,_0x2af362){const _0x1a96ca=_0x35dcac;if(typeof Reflect===_0x1a96ca(0x1f4)&&typeof Reflect['metadata']==='function')return Reflect['metadata'](_0xb59ba9,_0x2af362);};Object[_0x35dcac(0x205)](exports,'__esModule',{'value':!![]}),exports[_0x35dcac(0x218)]=void 0x0;const common_1=require(_0x35dcac(0x215)),axios_1=require(_0x35dcac(0x1fa)),chatLog_service_1=require(_0x35dcac(0x224)),globalConfig_service_1=require(_0x35dcac(0x206)),upload_service_1=require(_0x35dcac(0x1eb));let CogVideoService=class CogVideoService{constructor(_0x13bbba,_0x4f7ba9,_0x7e2f0c){const _0x2e9751=_0x35dcac;this['chatLogService']=_0x13bbba,this[_0x2e9751(0x1f1)]=_0x4f7ba9,this[_0x2e9751(0x1e6)]=_0x7e2f0c;}async[_0x35dcac(0x1f7)](_0x43ae2c){const _0x4655a8=_0x35dcac;var _0x23887a,_0x3c0449,_0x317d98;const {apiKey:_0x166260,proxyUrl:_0x4e2dac,fileInfo:_0x2ed351,prompt:_0xbf8e18,timeout:_0x4f64e9,assistantLogId:_0x367d81}=_0x43ae2c;let _0x4ea7b7={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x2c023b=null,_0x78404f='',_0x407361={};const _0x259001={'Authorization':_0x4655a8(0x220)+_0x166260};_0x78404f=_0x4e2dac+_0x4655a8(0x232),_0x407361={'model':_0x4655a8(0x1fc),'prompt':_0xbf8e18};_0x2ed351&&(_0x407361[_0x4655a8(0x20f)]=_0x2ed351);common_1['Logger'][_0x4655a8(0x230)](_0x4655a8(0x1e8)+_0x78404f+_0x4655a8(0x1ec)+JSON['stringify'](_0x407361)+_0x4655a8(0x21b)+JSON[_0x4655a8(0x23a)](_0x259001),_0x4655a8(0x1e7));try{_0x2c023b=await axios_1[_0x4655a8(0x222)]['post'](_0x78404f,_0x407361,{'headers':_0x259001}),common_1[_0x4655a8(0x212)][_0x4655a8(0x238)](_0x4655a8(0x23b)+_0x2c023b['status']+',\x20状态消息:\x20'+_0x2c023b[_0x4655a8(0x221)]+_0x4655a8(0x227)+JSON[_0x4655a8(0x23a)](_0x2c023b[_0x4655a8(0x207)]));}catch(_0x1b8a51){common_1[_0x4655a8(0x212)][_0x4655a8(0x1ef)](_0x4655a8(0x20e)+_0x1b8a51[_0x4655a8(0x22c)],_0x4655a8(0x1e7));throw new Error(_0x4655a8(0x22d));}if((_0x23887a=_0x2c023b===null||_0x2c023b===void 0x0?void 0x0:_0x2c023b['data'])===null||_0x23887a===void 0x0?void 0x0:_0x23887a['id'])_0x4ea7b7['taskId']=(_0x3c0449=_0x2c023b===null||_0x2c023b===void 0x0?void 0x0:_0x2c023b[_0x4655a8(0x207)])===null||_0x3c0449===void 0x0?void 0x0:_0x3c0449['id'],common_1[_0x4655a8(0x212)][_0x4655a8(0x230)](_0x4655a8(0x211)+((_0x317d98=_0x2c023b===null||_0x2c023b===void 0x0?void 0x0:_0x2c023b['data'])===null||_0x317d98===void 0x0?void 0x0:_0x317d98['id']),_0x4655a8(0x1e7));else throw new Error(_0x4655a8(0x226));try{await this[_0x4655a8(0x22f)]({'proxyUrl':_0x4e2dac,'apiKey':_0x166260,'taskId':_0x2c023b[_0x4655a8(0x207)]['id'],'timeout':_0x4f64e9,'prompt':_0xbf8e18,'onSuccess':async _0x567f3c=>{const _0x1cb22d=_0x4655a8;try{await this[_0x1cb22d(0x225)][_0x1cb22d(0x1e5)](_0x367d81,{'videoUrl':_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c[_0x1cb22d(0x1f5)],'audioUrl':_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c['audioUrl'],'fileInfo':_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c['fileInfo'],'answer':(_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c['answer'])||_0xbf8e18,'progress':_0x1cb22d(0x213),'status':0x3,'taskId':_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c['taskId'],'taskData':_0x567f3c===null||_0x567f3c===void 0x0?void 0x0:_0x567f3c[_0x1cb22d(0x1ee)]}),common_1[_0x1cb22d(0x212)][_0x1cb22d(0x230)](_0x1cb22d(0x20b),_0x1cb22d(0x1e7));}catch(_0x53594c){common_1['Logger'][_0x1cb22d(0x1ef)]('更新日志失败:\x20'+_0x53594c['message'],_0x1cb22d(0x1e7));}},'onGenerating':async _0x58f3f8=>{const _0x4cad25=_0x4655a8;try{await this[_0x4cad25(0x225)][_0x4cad25(0x1e5)](_0x367d81,{'videoUrl':_0x58f3f8===null||_0x58f3f8===void 0x0?void 0x0:_0x58f3f8[_0x4cad25(0x1f5)],'audioUrl':_0x58f3f8===null||_0x58f3f8===void 0x0?void 0x0:_0x58f3f8[_0x4cad25(0x20a)],'fileInfo':_0x58f3f8===null||_0x58f3f8===void 0x0?void 0x0:_0x58f3f8[_0x4cad25(0x1f8)],'answer':(_0x58f3f8===null||_0x58f3f8===void 0x0?void 0x0:_0x58f3f8[_0x4cad25(0x231)])||_0x4cad25(0x214),'progress':_0x58f3f8===null||_0x58f3f8===void 0x0?void 0x0:_0x58f3f8['progress'],'status':_0x58f3f8[_0x4cad25(0x239)]}),common_1[_0x4cad25(0x212)][_0x4cad25(0x230)](_0x4cad25(0x214),_0x4cad25(0x1e7));}catch(_0x2f7ca5){common_1[_0x4cad25(0x212)][_0x4cad25(0x1ef)]('更新日志失败:\x20'+_0x2f7ca5[_0x4cad25(0x22c)],_0x4cad25(0x1e7));}},'onFailure':async _0x36f138=>{const _0x194bab=_0x4655a8;try{await this[_0x194bab(0x225)][_0x194bab(0x1e5)](_0x367d81,{'answer':'视频生成失败','status':_0x36f138[_0x194bab(0x239)]}),common_1[_0x194bab(0x212)][_0x194bab(0x230)](_0x194bab(0x21a),_0x194bab(0x1fb));}catch(_0x1d6684){common_1[_0x194bab(0x212)][_0x194bab(0x1ef)]('更新日志失败:\x20'+_0x1d6684[_0x194bab(0x22c)],_0x194bab(0x1e7));}}});}catch(_0x223f19){common_1['Logger'][_0x4655a8(0x1ef)](_0x4655a8(0x208),_0x223f19[_0x4655a8(0x22c)],_0x4655a8(0x1e7));throw new Error(_0x4655a8(0x233));}return _0x4ea7b7;}async['pollCogVideoResult'](_0x3cd5d0){const _0x8344ae=_0x35dcac,{proxyUrl:_0x345248,apiKey:_0x794895,taskId:_0x2c6bde,timeout:_0xf2b5da,onSuccess:_0x4f4437,onFailure:_0x4a30c0,onGenerating:_0x5b94eb,prompt:_0xa1c953,action:_0xe5d3d2}=_0x3cd5d0;let _0xae7113={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x44bae6={'Authorization':_0x8344ae(0x220)+_0x794895},_0x37e566=_0x345248+_0x8344ae(0x22b)+_0x2c6bde,_0x86eed4=Date[_0x8344ae(0x21f)](),_0xe9ecec=0x493e0,_0x39a06a=0x1388;let _0x2a3786=0x0;try{while(Date[_0x8344ae(0x21f)]()-_0x86eed4<_0xf2b5da){await new Promise(_0x1db034=>setTimeout(_0x1db034,_0x39a06a));try{const _0x3bd028=await axios_1[_0x8344ae(0x222)]['get'](_0x37e566,{'headers':_0x44bae6}),_0x1cd80a=setInterval(()=>{const _0x315073=_0x8344ae,_0x33bdbc=Date['now']()-_0x86eed4;let _0x17886e=Math['floor'](_0x33bdbc/_0xe9ecec*0x64);if(_0x17886e>=0x63)_0x17886e=0x63;_0xae7113['answer']=_0x315073(0x234)+_0x17886e+'%）';},0x3e8),_0x5d8827=_0x3bd028['data'];common_1[_0x8344ae(0x212)][_0x8344ae(0x238)]('轮询结果:\x20'+JSON[_0x8344ae(0x23a)](_0x5d8827),_0x8344ae(0x1e7));if(_0x5d8827[_0x8344ae(0x236)]===_0x8344ae(0x210)){_0xae7113[_0x8344ae(0x209)]=_0x5d8827[_0x8344ae(0x22a)],_0xae7113[_0x8344ae(0x1ee)]=JSON['stringify'](_0x5d8827),common_1[_0x8344ae(0x212)][_0x8344ae(0x230)](_0x8344ae(0x1f2),_0x8344ae(0x1e7)),_0xae7113[_0x8344ae(0x1f8)]=_0x5d8827[_0x8344ae(0x1ff)][0x0][_0x8344ae(0x1f6)],common_1['Logger'][_0x8344ae(0x230)](_0xae7113[_0x8344ae(0x1f8)],_0x8344ae(0x1e7));try{const _0xae3cba=await this[_0x8344ae(0x1f1)][_0x8344ae(0x219)]([_0x8344ae(0x1f9)]);if(Number(_0xae3cba)){const _0x691012=new Date(),_0x1da9d5=_0x691012[_0x8344ae(0x1e2)](),_0x43cb80=String(_0x691012['getMonth']()+0x1)['padStart'](0x2,'0'),_0x374a59=String(_0x691012[_0x8344ae(0x1f0)]())[_0x8344ae(0x20d)](0x2,'0'),_0x3c748c=''+_0x1da9d5+_0x43cb80+'/'+_0x374a59;_0xae7113[_0x8344ae(0x1f8)]=await this[_0x8344ae(0x1e6)][_0x8344ae(0x1e9)]({'url':_0x5d8827[_0x8344ae(0x1ff)][0x0][_0x8344ae(0x1f6)],'dir':_0x8344ae(0x23c)+_0x3c748c});}}catch(_0x54756e){common_1[_0x8344ae(0x212)][_0x8344ae(0x1ef)](_0x8344ae(0x1f3)+_0x54756e[_0x8344ae(0x22c)],_0x8344ae(0x1e7));}_0xae7113[_0x8344ae(0x231)]='提示词:\x20\x22'+_0xa1c953+'\x22',_0x4f4437(_0xae7113),clearInterval(_0x1cd80a);return;}else _0x5b94eb(_0xae7113);if(_0xae7113['progress']){}}catch(_0x5784e7){_0x2a3786++,common_1[_0x8344ae(0x212)][_0x8344ae(0x1ef)](_0x8344ae(0x1ed)+_0x2a3786,_0x8344ae(0x1e7));}}common_1[_0x8344ae(0x212)]['error'](_0x8344ae(0x204),'CogService'),_0xae7113[_0x8344ae(0x239)]=0x4,_0x4a30c0(_0xae7113);throw new Error(_0x8344ae(0x200));}catch(_0x344a55){common_1['Logger'][_0x8344ae(0x1ef)]('轮询过程中发生错误:\x20'+_0x344a55,_0x8344ae(0x1e7)),_0xae7113[_0x8344ae(0x239)]=0x5,_0x4a30c0(_0xae7113);}}};CogVideoService=__decorate([(0x0,common_1[_0x35dcac(0x22e)])(),__metadata(_0x35dcac(0x237),[chatLog_service_1[_0x35dcac(0x21c)],globalConfig_service_1[_0x35dcac(0x217)],upload_service_1[_0x35dcac(0x216)]])],CogVideoService),exports[_0x35dcac(0x218)]=CogVideoService;