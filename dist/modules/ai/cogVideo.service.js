'use strict';const _0x2a7318=_0x1bfb;(function(_0x1c3173,_0x2a270b){const _0x3b6a39=_0x1bfb,_0x58b742=_0x1c3173();while(!![]){try{const _0x21fd6e=-parseInt(_0x3b6a39(0x141))/0x1*(parseInt(_0x3b6a39(0x167))/0x2)+parseInt(_0x3b6a39(0x14c))/0x3+-parseInt(_0x3b6a39(0x13f))/0x4+-parseInt(_0x3b6a39(0x160))/0x5+-parseInt(_0x3b6a39(0x135))/0x6+-parseInt(_0x3b6a39(0x15d))/0x7+parseInt(_0x3b6a39(0x156))/0x8;if(_0x21fd6e===_0x2a270b)break;else _0x58b742['push'](_0x58b742['shift']());}catch(_0x3ba06b){_0x58b742['push'](_0x58b742['shift']());}}}(_0x50ed,0x7d565));var __decorate=this&&this[_0x2a7318(0x16f)]||function(_0x4a206e,_0x510794,_0x6db1cb,_0x28cb4a){const _0x12a77b=_0x2a7318;var _0x532865=arguments[_0x12a77b(0x12c)],_0x3ccda3=_0x532865<0x3?_0x510794:_0x28cb4a===null?_0x28cb4a=Object[_0x12a77b(0x126)](_0x510794,_0x6db1cb):_0x28cb4a,_0x5543d0;if(typeof Reflect===_0x12a77b(0x176)&&typeof Reflect['decorate']==='function')_0x3ccda3=Reflect[_0x12a77b(0x161)](_0x4a206e,_0x510794,_0x6db1cb,_0x28cb4a);else{for(var _0xf235fb=_0x4a206e[_0x12a77b(0x12c)]-0x1;_0xf235fb>=0x0;_0xf235fb--)if(_0x5543d0=_0x4a206e[_0xf235fb])_0x3ccda3=(_0x532865<0x3?_0x5543d0(_0x3ccda3):_0x532865>0x3?_0x5543d0(_0x510794,_0x6db1cb,_0x3ccda3):_0x5543d0(_0x510794,_0x6db1cb))||_0x3ccda3;}return _0x532865>0x3&&_0x3ccda3&&Object[_0x12a77b(0x154)](_0x510794,_0x6db1cb,_0x3ccda3),_0x3ccda3;},__metadata=this&&this[_0x2a7318(0x152)]||function(_0x3f54af,_0x42fdaf){const _0x2a8ee5=_0x2a7318;if(typeof Reflect===_0x2a8ee5(0x176)&&typeof Reflect['metadata']==='function')return Reflect['metadata'](_0x3f54af,_0x42fdaf);};function _0x50ed(){const _0x1f0ed7=['default','pollCogVideoResult',',\x20headers:\x20','__esModule','taskId','视频生成中...','任务提交成功,\x20任务ID:\x20','__decorate','getDate','message','cogvideox','CogVideoService',',\x20状态消息:\x20','轮询结果:\x20','object','task_status','url','CogService','cogVideo','更新日志失败:\x20','getOwnPropertyDescriptor','updateChatLog','audioUrl','answer','padStart','，payload:\x20','length','任务提交失败','status','chatLogService','data','debug','视频任务已完成','getConfigs','上传文件失败:\x20','6052878xyEdSn','100%','error','正在准备发送请求到\x20','globalConfigService','视频生成失败','../globalConfig/globalConfig.service','ChatLogService','Lum\x20aService','/cogvideox/v4/async-result/','3309248ARHGzz','任务提交失败:\x20','426526KUPSoR','getFullYear','localStorageStatus','image_url','videoUrl','Logger','getMonth','../upload/upload.service','轮询过程中发生错误:\x20','video_result','Bearer\x20','2698311LqQwzD','生成失败','SUCCESS','/cogvideox/v4/videos/generations','stringify','taskData','__metadata','floor','defineProperty','提示词:\x20\x22','30343024gohLCf','request_id','get','statusText','视频生成成功','log','uploadService','6869184durPCu','fileInfo','video/cog/','4674855QxVobl','decorate','now',',\x20数据:\x20','未能获取结果数据,\x20即将重试','uploadFileFromUrl','Injectable','2DwHekA'];_0x50ed=function(){return _0x1f0ed7;};return _0x50ed();}Object[_0x2a7318(0x154)](exports,_0x2a7318(0x16b),{'value':!![]}),exports[_0x2a7318(0x173)]=void 0x0;const common_1=require('@nestjs/common'),axios_1=require('axios'),chatLog_service_1=require('../chatLog/chatLog.service'),globalConfig_service_1=require(_0x2a7318(0x13b)),upload_service_1=require(_0x2a7318(0x148));let CogVideoService=class CogVideoService{constructor(_0x4fe704,_0x5ea76b,_0x2c15c1){const _0x51272b=_0x2a7318;this[_0x51272b(0x12f)]=_0x4fe704,this[_0x51272b(0x139)]=_0x5ea76b,this[_0x51272b(0x15c)]=_0x2c15c1;}async[_0x2a7318(0x17a)](_0xaf73f4){const _0x188234=_0x2a7318;var _0x19f6ee,_0x1c1543,_0x436dc0;const {apiKey:_0x591b65,proxyUrl:_0x3dd3b1,fileInfo:_0x5be1ff,prompt:_0x3c828a,timeout:_0x3e7d60,assistantLogId:_0x191080}=_0xaf73f4;let _0x778324={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2},_0x3d901a=null,_0x2f5f43='',_0x56c2eb={};const _0x55c876={'Authorization':_0x188234(0x14b)+_0x591b65};_0x2f5f43=_0x3dd3b1+_0x188234(0x14f),_0x56c2eb={'model':_0x188234(0x172),'prompt':_0x3c828a};_0x5be1ff&&(_0x56c2eb[_0x188234(0x144)]=_0x5be1ff);common_1['Logger'][_0x188234(0x15b)](_0x188234(0x138)+_0x2f5f43+_0x188234(0x12b)+JSON[_0x188234(0x150)](_0x56c2eb)+_0x188234(0x16a)+JSON[_0x188234(0x150)](_0x55c876),_0x188234(0x179));try{_0x3d901a=await axios_1[_0x188234(0x168)]['post'](_0x2f5f43,_0x56c2eb,{'headers':_0x55c876}),common_1[_0x188234(0x146)][_0x188234(0x131)]('任务提交结果，状态码:\x20'+_0x3d901a[_0x188234(0x12e)]+_0x188234(0x174)+_0x3d901a[_0x188234(0x159)]+_0x188234(0x163)+JSON['stringify'](_0x3d901a[_0x188234(0x130)]));}catch(_0x13a6c4){common_1[_0x188234(0x146)][_0x188234(0x137)](_0x188234(0x140)+_0x13a6c4['message'],_0x188234(0x179));throw new Error(_0x188234(0x12d));}if((_0x19f6ee=_0x3d901a===null||_0x3d901a===void 0x0?void 0x0:_0x3d901a[_0x188234(0x130)])===null||_0x19f6ee===void 0x0?void 0x0:_0x19f6ee['id'])_0x778324[_0x188234(0x16c)]=(_0x1c1543=_0x3d901a===null||_0x3d901a===void 0x0?void 0x0:_0x3d901a[_0x188234(0x130)])===null||_0x1c1543===void 0x0?void 0x0:_0x1c1543['id'],common_1[_0x188234(0x146)][_0x188234(0x15b)](_0x188234(0x16e)+((_0x436dc0=_0x3d901a===null||_0x3d901a===void 0x0?void 0x0:_0x3d901a[_0x188234(0x130)])===null||_0x436dc0===void 0x0?void 0x0:_0x436dc0['id']),_0x188234(0x179));else throw new Error(_0x188234(0x164));try{await this[_0x188234(0x169)]({'proxyUrl':_0x3dd3b1,'apiKey':_0x591b65,'taskId':_0x3d901a[_0x188234(0x130)]['id'],'timeout':_0x3e7d60,'prompt':_0x3c828a,'onSuccess':async _0x260673=>{const _0x2ea759=_0x188234;try{await this[_0x2ea759(0x12f)][_0x2ea759(0x127)](_0x191080,{'videoUrl':_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673[_0x2ea759(0x145)],'audioUrl':_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673[_0x2ea759(0x128)],'fileInfo':_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673['fileInfo'],'answer':(_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673['answer'])||_0x3c828a,'progress':_0x2ea759(0x136),'status':0x3,'taskId':_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673['taskId'],'taskData':_0x260673===null||_0x260673===void 0x0?void 0x0:_0x260673[_0x2ea759(0x151)]}),common_1[_0x2ea759(0x146)]['log'](_0x2ea759(0x132),_0x2ea759(0x179));}catch(_0x4ddda6){common_1[_0x2ea759(0x146)][_0x2ea759(0x137)](_0x2ea759(0x125)+_0x4ddda6[_0x2ea759(0x171)],_0x2ea759(0x179));}},'onGenerating':async _0x2fc9bd=>{const _0x4fad55=_0x188234;try{await this[_0x4fad55(0x12f)][_0x4fad55(0x127)](_0x191080,{'videoUrl':_0x2fc9bd===null||_0x2fc9bd===void 0x0?void 0x0:_0x2fc9bd[_0x4fad55(0x145)],'audioUrl':_0x2fc9bd===null||_0x2fc9bd===void 0x0?void 0x0:_0x2fc9bd[_0x4fad55(0x128)],'fileInfo':_0x2fc9bd===null||_0x2fc9bd===void 0x0?void 0x0:_0x2fc9bd[_0x4fad55(0x15e)],'answer':(_0x2fc9bd===null||_0x2fc9bd===void 0x0?void 0x0:_0x2fc9bd[_0x4fad55(0x129)])||_0x4fad55(0x16d),'progress':_0x2fc9bd===null||_0x2fc9bd===void 0x0?void 0x0:_0x2fc9bd['progress'],'status':_0x2fc9bd[_0x4fad55(0x12e)]}),common_1[_0x4fad55(0x146)][_0x4fad55(0x15b)](_0x4fad55(0x16d),_0x4fad55(0x179));}catch(_0x23dad8){common_1[_0x4fad55(0x146)][_0x4fad55(0x137)](_0x4fad55(0x125)+_0x23dad8[_0x4fad55(0x171)],_0x4fad55(0x179));}},'onFailure':async _0x59cd42=>{const _0x5cc9c5=_0x188234;try{await this[_0x5cc9c5(0x12f)][_0x5cc9c5(0x127)](_0x191080,{'answer':_0x5cc9c5(0x13a),'status':_0x59cd42[_0x5cc9c5(0x12e)]}),common_1[_0x5cc9c5(0x146)][_0x5cc9c5(0x15b)](_0x5cc9c5(0x14d),_0x5cc9c5(0x13d));}catch(_0x3f6e18){common_1[_0x5cc9c5(0x146)][_0x5cc9c5(0x137)](_0x5cc9c5(0x125)+_0x3f6e18[_0x5cc9c5(0x171)],_0x5cc9c5(0x179));}}});}catch(_0x2f8bf9){common_1[_0x188234(0x146)][_0x188234(0x137)]('查询生成结果时发生错误:',_0x2f8bf9[_0x188234(0x171)],_0x188234(0x179));throw new Error('查询生成结果时发生错误');}return _0x778324;}async[_0x2a7318(0x169)](_0x58c4a8){const _0x38b26=_0x2a7318,{proxyUrl:_0x58dc8e,apiKey:_0x1cae9f,taskId:_0x3ce465,timeout:_0x2c80b6,onSuccess:_0x291de8,onFailure:_0x8c592b,onGenerating:_0x41e19a,prompt:_0x45aa2a,action:_0x583a1d}=_0x58c4a8;let _0x3a51c1={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x47cdef={'Authorization':_0x38b26(0x14b)+_0x1cae9f},_0x32b11a=_0x58dc8e+_0x38b26(0x13e)+_0x3ce465,_0x23f2fc=Date[_0x38b26(0x162)](),_0x2275fc=0x493e0,_0x30ccc7=0x1388;let _0x59a3d5=0x0;try{while(Date[_0x38b26(0x162)]()-_0x23f2fc<_0x2c80b6){await new Promise(_0x540f42=>setTimeout(_0x540f42,_0x30ccc7));try{const _0x158342=await axios_1['default'][_0x38b26(0x158)](_0x32b11a,{'headers':_0x47cdef}),_0x4450da=setInterval(()=>{const _0x49fc5e=_0x38b26,_0xbcb79a=Date[_0x49fc5e(0x162)]()-_0x23f2fc;let _0x181844=Math[_0x49fc5e(0x153)](_0xbcb79a/_0x2275fc*0x64);if(_0x181844>=0x63)_0x181844=0x63;_0x3a51c1[_0x49fc5e(0x129)]='视频生成中\x20（'+_0x181844+'%）';},0x3e8),_0x578fe8=_0x158342['data'];common_1[_0x38b26(0x146)]['debug'](_0x38b26(0x175)+JSON[_0x38b26(0x150)](_0x578fe8),_0x38b26(0x179));if(_0x578fe8[_0x38b26(0x177)]===_0x38b26(0x14e)){_0x3a51c1[_0x38b26(0x16c)]=_0x578fe8[_0x38b26(0x157)],_0x3a51c1['taskData']=JSON[_0x38b26(0x150)](_0x578fe8),common_1[_0x38b26(0x146)]['log'](_0x38b26(0x15a),_0x38b26(0x179)),_0x3a51c1[_0x38b26(0x15e)]=_0x578fe8['video_result'][0x0][_0x38b26(0x178)],common_1[_0x38b26(0x146)]['log'](_0x3a51c1[_0x38b26(0x15e)],_0x38b26(0x179));try{const _0x54b28c=await this['globalConfigService'][_0x38b26(0x133)]([_0x38b26(0x143)]);if(Number(_0x54b28c)){const _0x3919ce=new Date(),_0x5b2db1=_0x3919ce[_0x38b26(0x142)](),_0x4d17e7=String(_0x3919ce[_0x38b26(0x147)]()+0x1)[_0x38b26(0x12a)](0x2,'0'),_0x4fb050=String(_0x3919ce[_0x38b26(0x170)]())[_0x38b26(0x12a)](0x2,'0'),_0x548f3d=''+_0x5b2db1+_0x4d17e7+'/'+_0x4fb050;_0x3a51c1[_0x38b26(0x15e)]=await this[_0x38b26(0x15c)][_0x38b26(0x165)]({'url':_0x578fe8[_0x38b26(0x14a)][0x0][_0x38b26(0x178)],'dir':_0x38b26(0x15f)+_0x548f3d});}}catch(_0x2600fa){common_1[_0x38b26(0x146)][_0x38b26(0x137)](_0x38b26(0x134)+_0x2600fa['message'],_0x38b26(0x179));}_0x3a51c1[_0x38b26(0x129)]=_0x38b26(0x155)+_0x45aa2a+'\x22',_0x291de8(_0x3a51c1),clearInterval(_0x4450da);return;}else _0x41e19a(_0x3a51c1);if(_0x3a51c1['progress']){}}catch(_0x30eb9a){_0x59a3d5++,common_1[_0x38b26(0x146)][_0x38b26(0x137)]('轮询失败，重试次数:\x20'+_0x59a3d5,_0x38b26(0x179));}}common_1[_0x38b26(0x146)][_0x38b26(0x137)]('轮询超时，请稍后再试！','CogService'),_0x3a51c1[_0x38b26(0x12e)]=0x4,_0x8c592b(_0x3a51c1);throw new Error('查询超时，请稍后再试！');}catch(_0x3f64d3){common_1[_0x38b26(0x146)]['error'](_0x38b26(0x149)+_0x3f64d3,'CogService'),_0x3a51c1[_0x38b26(0x12e)]=0x5,_0x8c592b(_0x3a51c1);}}};function _0x1bfb(_0x347dba,_0x1c0639){const _0x50ed50=_0x50ed();return _0x1bfb=function(_0x1bfb8b,_0xba15aa){_0x1bfb8b=_0x1bfb8b-0x125;let _0x16b616=_0x50ed50[_0x1bfb8b];return _0x16b616;},_0x1bfb(_0x347dba,_0x1c0639);}CogVideoService=__decorate([(0x0,common_1[_0x2a7318(0x166)])(),__metadata('design:paramtypes',[chatLog_service_1[_0x2a7318(0x13c)],globalConfig_service_1['GlobalConfigService'],upload_service_1['UploadService']])],CogVideoService),exports[_0x2a7318(0x173)]=CogVideoService;