'use strict';const _0x21fe86=_0x1cec;(function(_0x3fe7a7,_0x254e91){const _0x32cd12=_0x1cec,_0x87ebcc=_0x3fe7a7();while(!![]){try{const _0x5c7bd2=parseInt(_0x32cd12(0x158))/0x1*(parseInt(_0x32cd12(0x121))/0x2)+parseInt(_0x32cd12(0x12c))/0x3+-parseInt(_0x32cd12(0x134))/0x4*(parseInt(_0x32cd12(0x139))/0x5)+-parseInt(_0x32cd12(0x150))/0x6+parseInt(_0x32cd12(0x12e))/0x7+-parseInt(_0x32cd12(0x163))/0x8+parseInt(_0x32cd12(0x15e))/0x9;if(_0x5c7bd2===_0x254e91)break;else _0x87ebcc['push'](_0x87ebcc['shift']());}catch(_0x291995){_0x87ebcc['push'](_0x87ebcc['shift']());}}}(_0x24f1,0x1ed2c));var __decorate=this&&this[_0x21fe86(0x157)]||function(_0x32cfba,_0x1a76e6,_0x5ae6ad,_0x137394){const _0x500ba9=_0x21fe86;var _0x3defd6=arguments['length'],_0x502d01=_0x3defd6<0x3?_0x1a76e6:_0x137394===null?_0x137394=Object[_0x500ba9(0x159)](_0x1a76e6,_0x5ae6ad):_0x137394,_0x1e19f8;if(typeof Reflect===_0x500ba9(0x11c)&&typeof Reflect['decorate']===_0x500ba9(0x117))_0x502d01=Reflect[_0x500ba9(0x127)](_0x32cfba,_0x1a76e6,_0x5ae6ad,_0x137394);else{for(var _0x4783d0=_0x32cfba[_0x500ba9(0x122)]-0x1;_0x4783d0>=0x0;_0x4783d0--)if(_0x1e19f8=_0x32cfba[_0x4783d0])_0x502d01=(_0x3defd6<0x3?_0x1e19f8(_0x502d01):_0x3defd6>0x3?_0x1e19f8(_0x1a76e6,_0x5ae6ad,_0x502d01):_0x1e19f8(_0x1a76e6,_0x5ae6ad))||_0x502d01;}return _0x3defd6>0x3&&_0x502d01&&Object[_0x500ba9(0x172)](_0x1a76e6,_0x5ae6ad,_0x502d01),_0x502d01;},__metadata=this&&this[_0x21fe86(0x14d)]||function(_0x4ae20c,_0x2455d9){const _0x42cf2a=_0x21fe86;if(typeof Reflect===_0x42cf2a(0x11c)&&typeof Reflect[_0x42cf2a(0x147)]===_0x42cf2a(0x117))return Reflect[_0x42cf2a(0x147)](_0x4ae20c,_0x2455d9);};Object[_0x21fe86(0x172)](exports,_0x21fe86(0x15a),{'value':!![]}),exports[_0x21fe86(0x137)]=void 0x0;function _0x24f1(){const _0x1dcd88=['stringify','查询超时，请稍后再试！','getDate','fileInfo','/cogvideox/v4/videos/generations','defineProperty','status','function','视频生成失败','轮询过程中发生错误:\x20','../globalConfig/globalConfig.service','UploadService','object','videoUrl','Injectable','answer','padStart','176146VdUFQG','length','@nestjs/common','log','getConfigs','get','decorate','视频生成成功','100%','ChatLogService',',\x20headers:\x20','407166ObRHws','default','823942WFjQic','任务提交失败:\x20','轮询失败，重试次数:\x20','视频任务已完成','/cogvideox/v4/async-result/','任务提交成功,\x20任务ID:\x20','4QVcWuf','updateChatLog',',\x20数据:\x20','CogVideoService','轮询结果:\x20','727095VYUavb','uploadService','../upload/upload.service','debug','cogVideo','audioUrl','axios','video_result','，payload:\x20','正在准备发送请求到\x20','更新日志失败:\x20','uploadFileFromUrl','error','Logger','metadata','design:paramtypes','生成失败','上传文件失败:\x20','now','taskId','__metadata','chatLogService','request_id','464514trgEWz','提示词:\x20\x22','floor',',\x20状态消息:\x20','任务提交结果，状态码:\x20','未能获取结果数据,\x20即将重试','image_url','__decorate','1NgWotS','getOwnPropertyDescriptor','__esModule','globalConfigService','Lum\x20aService','视频生成中...','231426BYErcE','CogService','data','getFullYear','url','145000piLBlB','localStorageStatus','message','Bearer\x20','taskData','视频生成中\x20（','任务提交失败','pollCogVideoResult','progress','SUCCESS'];_0x24f1=function(){return _0x1dcd88;};return _0x24f1();}const common_1=require(_0x21fe86(0x123)),axios_1=require(_0x21fe86(0x13f)),chatLog_service_1=require('../chatLog/chatLog.service'),globalConfig_service_1=require(_0x21fe86(0x11a)),upload_service_1=require(_0x21fe86(0x13b));let CogVideoService=class CogVideoService{constructor(_0x4899ec,_0xfe2c9,_0x86b4c6){const _0x10bed3=_0x21fe86;this[_0x10bed3(0x14e)]=_0x4899ec,this[_0x10bed3(0x15b)]=_0xfe2c9,this[_0x10bed3(0x13a)]=_0x86b4c6;}async[_0x21fe86(0x13d)](_0x1b597f){const _0x20cfaa=_0x21fe86;var _0xec2e21,_0x3bfb2c,_0x3d1b69;const {apiKey:_0x50923d,proxyUrl:_0x11a679,fileInfo:_0x14592e,prompt:_0xa2643,timeout:_0x1407b0,assistantLogId:_0x4939a1}=_0x1b597f;let _0x54a93b={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x329c0c=null,_0x4a438e='',_0x3d3c61={};const _0x2b7cc7={'Authorization':_0x20cfaa(0x166)+_0x50923d};_0x4a438e=_0x11a679+_0x20cfaa(0x171),_0x3d3c61={'model':'cogvideox','prompt':_0xa2643};_0x14592e&&(_0x3d3c61[_0x20cfaa(0x156)]=_0x14592e);common_1[_0x20cfaa(0x146)][_0x20cfaa(0x124)](_0x20cfaa(0x142)+_0x4a438e+_0x20cfaa(0x141)+JSON[_0x20cfaa(0x16d)](_0x3d3c61)+_0x20cfaa(0x12b)+JSON[_0x20cfaa(0x16d)](_0x2b7cc7),_0x20cfaa(0x15f));try{_0x329c0c=await axios_1[_0x20cfaa(0x12d)]['post'](_0x4a438e,_0x3d3c61,{'headers':_0x2b7cc7}),common_1[_0x20cfaa(0x146)][_0x20cfaa(0x13c)](_0x20cfaa(0x154)+_0x329c0c[_0x20cfaa(0x116)]+_0x20cfaa(0x153)+_0x329c0c['statusText']+_0x20cfaa(0x136)+JSON['stringify'](_0x329c0c[_0x20cfaa(0x160)]));}catch(_0xbec2fd){common_1[_0x20cfaa(0x146)][_0x20cfaa(0x145)](_0x20cfaa(0x12f)+_0xbec2fd[_0x20cfaa(0x165)],'CogService');throw new Error(_0x20cfaa(0x169));}if((_0xec2e21=_0x329c0c===null||_0x329c0c===void 0x0?void 0x0:_0x329c0c[_0x20cfaa(0x160)])===null||_0xec2e21===void 0x0?void 0x0:_0xec2e21['id'])_0x54a93b['taskId']=(_0x3bfb2c=_0x329c0c===null||_0x329c0c===void 0x0?void 0x0:_0x329c0c[_0x20cfaa(0x160)])===null||_0x3bfb2c===void 0x0?void 0x0:_0x3bfb2c['id'],common_1[_0x20cfaa(0x146)][_0x20cfaa(0x124)](_0x20cfaa(0x133)+((_0x3d1b69=_0x329c0c===null||_0x329c0c===void 0x0?void 0x0:_0x329c0c[_0x20cfaa(0x160)])===null||_0x3d1b69===void 0x0?void 0x0:_0x3d1b69['id']),_0x20cfaa(0x15f));else throw new Error(_0x20cfaa(0x155));try{await this[_0x20cfaa(0x16a)]({'proxyUrl':_0x11a679,'apiKey':_0x50923d,'taskId':_0x329c0c[_0x20cfaa(0x160)]['id'],'timeout':_0x1407b0,'prompt':_0xa2643,'onSuccess':async _0x35105e=>{const _0x14dc57=_0x20cfaa;try{await this[_0x14dc57(0x14e)][_0x14dc57(0x135)](_0x4939a1,{'videoUrl':_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e[_0x14dc57(0x11d)],'audioUrl':_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e[_0x14dc57(0x13e)],'fileInfo':_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e[_0x14dc57(0x170)],'answer':(_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e[_0x14dc57(0x11f)])||_0xa2643,'progress':_0x14dc57(0x129),'status':0x3,'taskId':_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e[_0x14dc57(0x14c)],'taskData':_0x35105e===null||_0x35105e===void 0x0?void 0x0:_0x35105e['taskData']}),common_1[_0x14dc57(0x146)][_0x14dc57(0x124)](_0x14dc57(0x131),_0x14dc57(0x15f));}catch(_0xa98058){common_1['Logger'][_0x14dc57(0x145)](_0x14dc57(0x143)+_0xa98058[_0x14dc57(0x165)],_0x14dc57(0x15f));}},'onGenerating':async _0x3b3652=>{const _0xc9f5e2=_0x20cfaa;try{await this[_0xc9f5e2(0x14e)][_0xc9f5e2(0x135)](_0x4939a1,{'videoUrl':_0x3b3652===null||_0x3b3652===void 0x0?void 0x0:_0x3b3652[_0xc9f5e2(0x11d)],'audioUrl':_0x3b3652===null||_0x3b3652===void 0x0?void 0x0:_0x3b3652[_0xc9f5e2(0x13e)],'fileInfo':_0x3b3652===null||_0x3b3652===void 0x0?void 0x0:_0x3b3652[_0xc9f5e2(0x170)],'answer':(_0x3b3652===null||_0x3b3652===void 0x0?void 0x0:_0x3b3652[_0xc9f5e2(0x11f)])||_0xc9f5e2(0x15d),'progress':_0x3b3652===null||_0x3b3652===void 0x0?void 0x0:_0x3b3652['progress'],'status':_0x3b3652[_0xc9f5e2(0x116)]}),common_1[_0xc9f5e2(0x146)][_0xc9f5e2(0x124)]('视频生成中...',_0xc9f5e2(0x15f));}catch(_0x40eb69){common_1[_0xc9f5e2(0x146)][_0xc9f5e2(0x145)](_0xc9f5e2(0x143)+_0x40eb69['message'],_0xc9f5e2(0x15f));}},'onFailure':async _0x466ff1=>{const _0x4e5f68=_0x20cfaa;try{await this[_0x4e5f68(0x14e)][_0x4e5f68(0x135)](_0x4939a1,{'answer':_0x4e5f68(0x118),'status':_0x466ff1['status']}),common_1[_0x4e5f68(0x146)][_0x4e5f68(0x124)](_0x4e5f68(0x149),_0x4e5f68(0x15c));}catch(_0x50de07){common_1[_0x4e5f68(0x146)][_0x4e5f68(0x145)](_0x4e5f68(0x143)+_0x50de07['message'],_0x4e5f68(0x15f));}}});}catch(_0x930add){common_1[_0x20cfaa(0x146)][_0x20cfaa(0x145)]('查询生成结果时发生错误:',_0x930add[_0x20cfaa(0x165)],_0x20cfaa(0x15f));throw new Error('查询生成结果时发生错误');}return _0x54a93b;}async[_0x21fe86(0x16a)](_0x109372){const _0xe1a03=_0x21fe86,{proxyUrl:_0x29ee3b,apiKey:_0x2909c7,taskId:_0x509396,timeout:_0x27c084,onSuccess:_0x35546a,onFailure:_0x31e8e4,onGenerating:_0x375abf,prompt:_0x34c95d,action:_0xae27db}=_0x109372;let _0x21dac1={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x54da66={'Authorization':_0xe1a03(0x166)+_0x2909c7},_0x3da23b=_0x29ee3b+_0xe1a03(0x132)+_0x509396,_0x312e27=Date['now'](),_0x176ef0=0x493e0,_0x2a7dc6=0x1388;let _0x514042=0x0;try{while(Date[_0xe1a03(0x14b)]()-_0x312e27<_0x27c084){await new Promise(_0x2ec416=>setTimeout(_0x2ec416,_0x2a7dc6));try{const _0x420317=await axios_1[_0xe1a03(0x12d)][_0xe1a03(0x126)](_0x3da23b,{'headers':_0x54da66}),_0x5e7ff1=setInterval(()=>{const _0x4da825=_0xe1a03,_0x21dfc7=Date[_0x4da825(0x14b)]()-_0x312e27;let _0x4ee6ae=Math[_0x4da825(0x152)](_0x21dfc7/_0x176ef0*0x64);if(_0x4ee6ae>=0x63)_0x4ee6ae=0x63;_0x21dac1[_0x4da825(0x11f)]=_0x4da825(0x168)+_0x4ee6ae+'%）';},0x3e8),_0x43e481=_0x420317[_0xe1a03(0x160)];common_1[_0xe1a03(0x146)]['debug'](_0xe1a03(0x138)+JSON[_0xe1a03(0x16d)](_0x43e481),_0xe1a03(0x15f));if(_0x43e481['task_status']===_0xe1a03(0x16c)){_0x21dac1[_0xe1a03(0x14c)]=_0x43e481[_0xe1a03(0x14f)],_0x21dac1[_0xe1a03(0x167)]=JSON[_0xe1a03(0x16d)](_0x43e481),common_1[_0xe1a03(0x146)]['log'](_0xe1a03(0x128),_0xe1a03(0x15f)),_0x21dac1[_0xe1a03(0x170)]=_0x43e481[_0xe1a03(0x140)][0x0]['url'],common_1[_0xe1a03(0x146)][_0xe1a03(0x124)](_0x21dac1[_0xe1a03(0x170)],_0xe1a03(0x15f));try{const _0x4c08dd=await this[_0xe1a03(0x15b)][_0xe1a03(0x125)]([_0xe1a03(0x164)]);if(Number(_0x4c08dd)){const _0x214903=new Date(),_0x5381c7=_0x214903[_0xe1a03(0x161)](),_0x27a630=String(_0x214903['getMonth']()+0x1)['padStart'](0x2,'0'),_0x5b2040=String(_0x214903[_0xe1a03(0x16f)]())[_0xe1a03(0x120)](0x2,'0'),_0x3e91e3=''+_0x5381c7+_0x27a630+'/'+_0x5b2040;_0x21dac1[_0xe1a03(0x170)]=await this[_0xe1a03(0x13a)][_0xe1a03(0x144)]({'url':_0x43e481[_0xe1a03(0x140)][0x0][_0xe1a03(0x162)],'dir':'video/cog/'+_0x3e91e3});}}catch(_0x503c01){common_1[_0xe1a03(0x146)][_0xe1a03(0x145)](_0xe1a03(0x14a)+_0x503c01[_0xe1a03(0x165)],_0xe1a03(0x15f));}_0x21dac1['answer']=_0xe1a03(0x151)+_0x34c95d+'\x22',_0x35546a(_0x21dac1),clearInterval(_0x5e7ff1);return;}else _0x375abf(_0x21dac1);if(_0x21dac1[_0xe1a03(0x16b)]){}}catch(_0x88d285){_0x514042++,common_1[_0xe1a03(0x146)][_0xe1a03(0x145)](_0xe1a03(0x130)+_0x514042,'CogService');}}common_1[_0xe1a03(0x146)][_0xe1a03(0x145)]('轮询超时，请稍后再试！',_0xe1a03(0x15f)),_0x21dac1[_0xe1a03(0x116)]=0x4,_0x31e8e4(_0x21dac1);throw new Error(_0xe1a03(0x16e));}catch(_0x348702){common_1[_0xe1a03(0x146)][_0xe1a03(0x145)](_0xe1a03(0x119)+_0x348702,_0xe1a03(0x15f)),_0x21dac1['status']=0x5,_0x31e8e4(_0x21dac1);}}};function _0x1cec(_0x117b7e,_0x103dcc){const _0x24f18c=_0x24f1();return _0x1cec=function(_0x1cec48,_0x27422b){_0x1cec48=_0x1cec48-0x116;let _0x218e88=_0x24f18c[_0x1cec48];return _0x218e88;},_0x1cec(_0x117b7e,_0x103dcc);}CogVideoService=__decorate([(0x0,common_1[_0x21fe86(0x11e)])(),__metadata(_0x21fe86(0x148),[chatLog_service_1[_0x21fe86(0x12a)],globalConfig_service_1['GlobalConfigService'],upload_service_1[_0x21fe86(0x11b)]])],CogVideoService),exports[_0x21fe86(0x137)]=CogVideoService;