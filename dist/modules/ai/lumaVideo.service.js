'use strict';const _0x4d41c3=_0x83a8;function _0x83a8(_0x39b850,_0x534368){const _0x190440=_0x1904();return _0x83a8=function(_0x83a8ef,_0x401ddb){_0x83a8ef=_0x83a8ef-0x14b;let _0x3cf0d6=_0x190440[_0x83a8ef];return _0x3cf0d6;},_0x83a8(_0x39b850,_0x534368);}(function(_0x47a27b,_0x4f7dea){const _0x51a519=_0x83a8,_0x301a4f=_0x47a27b();while(!![]){try{const _0x5e8d82=parseInt(_0x51a519(0x17c))/0x1+-parseInt(_0x51a519(0x159))/0x2+-parseInt(_0x51a519(0x170))/0x3+-parseInt(_0x51a519(0x156))/0x4*(-parseInt(_0x51a519(0x183))/0x5)+parseInt(_0x51a519(0x189))/0x6+-parseInt(_0x51a519(0x14f))/0x7*(-parseInt(_0x51a519(0x194))/0x8)+-parseInt(_0x51a519(0x17f))/0x9*(parseInt(_0x51a519(0x15f))/0xa);if(_0x5e8d82===_0x4f7dea)break;else _0x301a4f['push'](_0x301a4f['shift']());}catch(_0x1c4300){_0x301a4f['push'](_0x301a4f['shift']());}}}(_0x1904,0xa8531));function _0x1904(){const _0x196b93=['download_url','answer','5012652TOftds','lumaVideo','轮询过程中发生错误:\x20','design:paramtypes','视频生成中\x20（','Bearer\x20','提示词:\x20\x22','status','getOwnPropertyDescriptor','taskId','floor','9387800KkXJsm','，payload:\x20','Logger','taskData','getFullYear','length','message','localStorageStatus','生成失败','pollLumaVideoResult','videoUrl','__decorate','getMonth','../upload/upload.service','getConfigs','defineProperty','7eFRkCD','LumaVideoService','查询生成结果时发生错误:','__esModule','globalConfigService','default','轮询超时，请稍后再试！','28AakmdI','LumaService','GlobalConfigService','879084rmurGE','progress','任务提交失败:\x20','function','fileInfo','log','1503820KKkNoR','uploadService','视频生成中...','image_url',',\x20headers:\x20','视频任务已完成','post','data','轮询失败，重试次数:\x20','轮询结果:\x20','video','查询生成结果时发生错误','__metadata','updateChatLog','chatLogService','../chatLog/chatLog.service','查询超时，请稍后再试！','31041LWFzKc','now','url','metadata','未能获取结果数据,\x20即将重试','error','decorate','audioUrl','stringify','视频生成失败','任务提交成功,\x20任务ID:\x20','ChatLogService','976381stGJqK','更新日志失败:\x20','@nestjs/common','153EPNfyb','padStart','Lum\x20aService','axios','507530pawzCX','正在准备发送请求到\x20','prompt','uploadFileFromUrl'];_0x1904=function(){return _0x196b93;};return _0x1904();}var __decorate=this&&this[_0x4d41c3(0x19f)]||function(_0x5a0d1f,_0x3c7043,_0x1719fd,_0x23ce7d){const _0x5641d2=_0x4d41c3;var _0x276b8f=arguments['length'],_0x4d78d3=_0x276b8f<0x3?_0x3c7043:_0x23ce7d===null?_0x23ce7d=Object[_0x5641d2(0x191)](_0x3c7043,_0x1719fd):_0x23ce7d,_0x1455c6;if(typeof Reflect==='object'&&typeof Reflect[_0x5641d2(0x176)]===_0x5641d2(0x15c))_0x4d78d3=Reflect[_0x5641d2(0x176)](_0x5a0d1f,_0x3c7043,_0x1719fd,_0x23ce7d);else{for(var _0x153501=_0x5a0d1f[_0x5641d2(0x199)]-0x1;_0x153501>=0x0;_0x153501--)if(_0x1455c6=_0x5a0d1f[_0x153501])_0x4d78d3=(_0x276b8f<0x3?_0x1455c6(_0x4d78d3):_0x276b8f>0x3?_0x1455c6(_0x3c7043,_0x1719fd,_0x4d78d3):_0x1455c6(_0x3c7043,_0x1719fd))||_0x4d78d3;}return _0x276b8f>0x3&&_0x4d78d3&&Object[_0x5641d2(0x14e)](_0x3c7043,_0x1719fd,_0x4d78d3),_0x4d78d3;},__metadata=this&&this[_0x4d41c3(0x16b)]||function(_0x5b39df,_0x21a463){const _0x4f1248=_0x4d41c3;if(typeof Reflect==='object'&&typeof Reflect[_0x4f1248(0x173)]===_0x4f1248(0x15c))return Reflect[_0x4f1248(0x173)](_0x5b39df,_0x21a463);};Object['defineProperty'](exports,_0x4d41c3(0x152),{'value':!![]}),exports[_0x4d41c3(0x150)]=void 0x0;const common_1=require(_0x4d41c3(0x17e)),axios_1=require(_0x4d41c3(0x182)),chatLog_service_1=require(_0x4d41c3(0x16e)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),upload_service_1=require(_0x4d41c3(0x14c));let LumaVideoService=class LumaVideoService{constructor(_0x4d7bc7,_0x4e254c,_0x136639){const _0x31b81a=_0x4d41c3;this[_0x31b81a(0x16d)]=_0x4d7bc7,this[_0x31b81a(0x153)]=_0x4e254c,this[_0x31b81a(0x160)]=_0x136639;}async[_0x4d41c3(0x18a)](_0x57c287){const _0x39033d=_0x4d41c3;var _0xc4f965,_0x216adc,_0x328346;const {apiKey:_0x363660,proxyUrl:_0x13e631,fileInfo:_0x253241,prompt:_0x1fdb3f,timeout:_0x9d3573,assistantLogId:_0x4a5f41,extraParam:_0x30b7f4}=_0x57c287;let _0x3ff8a8={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x1b5b18=null,_0x35634c='',_0x779ad4={};const _0x409cc5={'Authorization':_0x39033d(0x18e)+_0x363660};_0x35634c=_0x13e631+'/luma/generations/';const _0x20ae20=_0x30b7f4['size']||'16:9';_0x779ad4={'user_prompt':_0x1fdb3f,'aspect_ratio':_0x20ae20,'expand_prompt':!![]};_0x253241&&(_0x779ad4[_0x39033d(0x162)]=_0x253241);common_1['Logger'][_0x39033d(0x15e)](_0x39033d(0x184)+_0x35634c+_0x39033d(0x195)+JSON[_0x39033d(0x178)](_0x779ad4)+_0x39033d(0x163)+JSON['stringify'](_0x409cc5),'LumaService');try{_0x1b5b18=await axios_1[_0x39033d(0x154)][_0x39033d(0x165)](_0x35634c,_0x779ad4,{'headers':_0x409cc5});}catch(_0x1eadd7){common_1[_0x39033d(0x196)][_0x39033d(0x175)](_0x39033d(0x15b)+_0x1eadd7[_0x39033d(0x19a)],'LumaService');throw new Error('任务提交失败');}if((_0xc4f965=_0x1b5b18===null||_0x1b5b18===void 0x0?void 0x0:_0x1b5b18[_0x39033d(0x166)])===null||_0xc4f965===void 0x0?void 0x0:_0xc4f965['id'])_0x3ff8a8[_0x39033d(0x192)]=(_0x216adc=_0x1b5b18===null||_0x1b5b18===void 0x0?void 0x0:_0x1b5b18[_0x39033d(0x166)])===null||_0x216adc===void 0x0?void 0x0:_0x216adc['id'],common_1['Logger'][_0x39033d(0x15e)](_0x39033d(0x17a)+((_0x328346=_0x1b5b18===null||_0x1b5b18===void 0x0?void 0x0:_0x1b5b18[_0x39033d(0x166)])===null||_0x328346===void 0x0?void 0x0:_0x328346['id']),_0x39033d(0x157));else throw new Error(_0x39033d(0x174));try{await this[_0x39033d(0x19d)]({'proxyUrl':_0x13e631,'apiKey':_0x363660,'taskId':_0x1b5b18[_0x39033d(0x166)]['id'],'timeout':_0x9d3573,'prompt':_0x1fdb3f,'onSuccess':async _0x576ee0=>{const _0x35d423=_0x39033d;try{await this[_0x35d423(0x16d)][_0x35d423(0x16c)](_0x4a5f41,{'videoUrl':_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0[_0x35d423(0x19e)],'audioUrl':_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0[_0x35d423(0x177)],'fileInfo':_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0[_0x35d423(0x15d)],'answer':(_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0[_0x35d423(0x188)])||_0x1fdb3f,'progress':'100%','status':0x3,'taskId':_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0[_0x35d423(0x192)],'taskData':_0x576ee0===null||_0x576ee0===void 0x0?void 0x0:_0x576ee0['taskData']}),common_1['Logger'][_0x35d423(0x15e)](_0x35d423(0x164),_0x35d423(0x157));}catch(_0x1b4ffe){common_1[_0x35d423(0x196)][_0x35d423(0x175)](_0x35d423(0x17d)+_0x1b4ffe[_0x35d423(0x19a)],_0x35d423(0x157));}},'onGenerating':async _0x1cae5d=>{const _0x66bdeb=_0x39033d;try{await this[_0x66bdeb(0x16d)][_0x66bdeb(0x16c)](_0x4a5f41,{'videoUrl':_0x1cae5d===null||_0x1cae5d===void 0x0?void 0x0:_0x1cae5d[_0x66bdeb(0x19e)],'audioUrl':_0x1cae5d===null||_0x1cae5d===void 0x0?void 0x0:_0x1cae5d[_0x66bdeb(0x177)],'fileInfo':_0x1cae5d===null||_0x1cae5d===void 0x0?void 0x0:_0x1cae5d['fileInfo'],'answer':(_0x1cae5d===null||_0x1cae5d===void 0x0?void 0x0:_0x1cae5d[_0x66bdeb(0x188)])||_0x66bdeb(0x161),'progress':_0x1cae5d===null||_0x1cae5d===void 0x0?void 0x0:_0x1cae5d[_0x66bdeb(0x15a)],'status':_0x1cae5d[_0x66bdeb(0x190)]}),common_1[_0x66bdeb(0x196)][_0x66bdeb(0x15e)]('视频生成中...','LumaService');}catch(_0x186337){common_1[_0x66bdeb(0x196)]['error'](_0x66bdeb(0x17d)+_0x186337['message'],_0x66bdeb(0x157));}},'onFailure':async _0x58b8d6=>{const _0x151a3d=_0x39033d;try{await this[_0x151a3d(0x16d)][_0x151a3d(0x16c)](_0x4a5f41,{'answer':_0x151a3d(0x179),'status':_0x58b8d6[_0x151a3d(0x190)]}),common_1[_0x151a3d(0x196)][_0x151a3d(0x15e)](_0x151a3d(0x19c),_0x151a3d(0x181));}catch(_0x49bfc9){common_1[_0x151a3d(0x196)][_0x151a3d(0x175)](_0x151a3d(0x17d)+_0x49bfc9['message'],_0x151a3d(0x157));}}});}catch(_0x46b568){common_1[_0x39033d(0x196)][_0x39033d(0x175)](_0x39033d(0x151),_0x46b568['message'],_0x39033d(0x157));throw new Error(_0x39033d(0x16a));}return _0x3ff8a8;}async['pollLumaVideoResult'](_0x23d6d3){const _0x1d5512=_0x4d41c3,{proxyUrl:_0x333a76,apiKey:_0x3e01fd,taskId:_0x2155bb,timeout:_0x299acf,onSuccess:_0x2a686a,onFailure:_0x5ed8e8,onGenerating:_0x3ff598,action:_0x13b34b}=_0x23d6d3;let _0x1948c6={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x283d9b={'Authorization':_0x1d5512(0x18e)+_0x3e01fd},_0x19d08f=_0x333a76+'/luma/generations/'+_0x2155bb,_0x9c7dd0=Date[_0x1d5512(0x171)](),_0x3ebfc2=0x493e0,_0x243989=0x1388;let _0x3163d3=0x0;try{while(Date[_0x1d5512(0x171)]()-_0x9c7dd0<_0x299acf){await new Promise(_0x3e1774=>setTimeout(_0x3e1774,_0x243989));try{const _0x1f5336=await axios_1[_0x1d5512(0x154)]['get'](_0x19d08f,{'headers':_0x283d9b}),_0x5d69f7=setInterval(()=>{const _0x41890d=_0x1d5512,_0x563490=Date[_0x41890d(0x171)]()-_0x9c7dd0;let _0x4183bc=Math[_0x41890d(0x193)](_0x563490/_0x3ebfc2*0x64);if(_0x4183bc>=0x63)_0x4183bc=0x63;_0x1948c6[_0x41890d(0x188)]=_0x41890d(0x18d)+_0x4183bc+'%）';},0x3e8),_0x4f276a=_0x1f5336['data'];common_1[_0x1d5512(0x196)]['debug'](_0x1d5512(0x168)+JSON[_0x1d5512(0x178)](_0x4f276a),'LumaService');if(_0x4f276a['state']==='completed'){_0x1948c6[_0x1d5512(0x192)]=_0x4f276a['id'],_0x1948c6[_0x1d5512(0x197)]=JSON['stringify'](_0x4f276a),_0x1948c6[_0x1d5512(0x15d)]=_0x4f276a['video'][_0x1d5512(0x172)];try{const _0xad117d=await this['globalConfigService'][_0x1d5512(0x14d)]([_0x1d5512(0x19b)]);if(Number(_0xad117d)){const _0x3a4642=new Date(),_0x39055b=_0x3a4642[_0x1d5512(0x198)](),_0x5b23ad=String(_0x3a4642[_0x1d5512(0x14b)]()+0x1)['padStart'](0x2,'0'),_0xed2de6=String(_0x3a4642['getDate']())[_0x1d5512(0x180)](0x2,'0'),_0x199486=''+_0x39055b+_0x5b23ad+'/'+_0xed2de6;_0x1948c6['fileInfo']=await this[_0x1d5512(0x160)][_0x1d5512(0x186)]({'url':_0x4f276a[_0x1d5512(0x169)][_0x1d5512(0x187)],'dir':'video/luma/'+_0x199486});}}catch(_0x2c29d7){common_1[_0x1d5512(0x196)][_0x1d5512(0x175)]('上传文件失败:\x20'+_0x2c29d7[_0x1d5512(0x19a)],_0x1d5512(0x157));}_0x1948c6[_0x1d5512(0x188)]=_0x1d5512(0x18f)+_0x4f276a[_0x1d5512(0x185)]+'\x22',_0x2a686a(_0x1948c6),clearInterval(_0x5d69f7);return;}else _0x3ff598(_0x1948c6);if(_0x1948c6[_0x1d5512(0x15a)]){}}catch(_0x5831e3){_0x3163d3++,common_1[_0x1d5512(0x196)][_0x1d5512(0x175)](_0x1d5512(0x167)+_0x3163d3,_0x1d5512(0x157));}}common_1[_0x1d5512(0x196)][_0x1d5512(0x175)](_0x1d5512(0x155),_0x1d5512(0x157)),_0x1948c6[_0x1d5512(0x190)]=0x4,_0x5ed8e8(_0x1948c6);throw new Error(_0x1d5512(0x16f));}catch(_0x2df3b3){common_1[_0x1d5512(0x196)][_0x1d5512(0x175)](_0x1d5512(0x18b)+_0x2df3b3,_0x1d5512(0x157)),_0x1948c6[_0x1d5512(0x190)]=0x5,_0x5ed8e8(_0x1948c6);}}};LumaVideoService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x4d41c3(0x18c),[chatLog_service_1[_0x4d41c3(0x17b)],globalConfig_service_1[_0x4d41c3(0x158)],upload_service_1['UploadService']])],LumaVideoService),exports[_0x4d41c3(0x150)]=LumaVideoService;