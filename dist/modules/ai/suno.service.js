'use strict';const _0x340a98=_0x5da6;(function(_0x4aab6c,_0x4201fe){const _0x323038=_0x5da6,_0xabcba7=_0x4aab6c();while(!![]){try{const _0x1ef5bd=-parseInt(_0x323038(0xe6))/0x1*(-parseInt(_0x323038(0xd0))/0x2)+-parseInt(_0x323038(0xee))/0x3*(-parseInt(_0x323038(0xb0))/0x4)+parseInt(_0x323038(0xa8))/0x5*(-parseInt(_0x323038(0xa2))/0x6)+parseInt(_0x323038(0x97))/0x7*(parseInt(_0x323038(0xe1))/0x8)+parseInt(_0x323038(0x91))/0x9+parseInt(_0x323038(0xec))/0xa+-parseInt(_0x323038(0xba))/0xb*(parseInt(_0x323038(0xcd))/0xc);if(_0x1ef5bd===_0x4201fe)break;else _0xabcba7['push'](_0xabcba7['shift']());}catch(_0x1173dc){_0xabcba7['push'](_0xabcba7['shift']());}}}(_0x15e2,0x1c9fc));function _0x5da6(_0x55dbe0,_0x3db7ed){const _0x15e2e5=_0x15e2();return _0x5da6=function(_0x5da63d,_0x136cdc){_0x5da63d=_0x5da63d-0x8d;let _0x2918ac=_0x15e2e5[_0x5da63d];return _0x2918ac;},_0x5da6(_0x55dbe0,_0x3db7ed);}var __decorate=this&&this[_0x340a98(0xe4)]||function(_0x5d2dd5,_0x2f89cd,_0x1c92df,_0x240f3c){const _0xc1f7ef=_0x340a98;var _0x1873fb=arguments['length'],_0x17e8b5=_0x1873fb<0x3?_0x2f89cd:_0x240f3c===null?_0x240f3c=Object[_0xc1f7ef(0xb2)](_0x2f89cd,_0x1c92df):_0x240f3c,_0x356e63;if(typeof Reflect===_0xc1f7ef(0xce)&&typeof Reflect['decorate']===_0xc1f7ef(0xc0))_0x17e8b5=Reflect['decorate'](_0x5d2dd5,_0x2f89cd,_0x1c92df,_0x240f3c);else{for(var _0x1e1b1a=_0x5d2dd5['length']-0x1;_0x1e1b1a>=0x0;_0x1e1b1a--)if(_0x356e63=_0x5d2dd5[_0x1e1b1a])_0x17e8b5=(_0x1873fb<0x3?_0x356e63(_0x17e8b5):_0x1873fb>0x3?_0x356e63(_0x2f89cd,_0x1c92df,_0x17e8b5):_0x356e63(_0x2f89cd,_0x1c92df))||_0x17e8b5;}return _0x1873fb>0x3&&_0x17e8b5&&Object[_0xc1f7ef(0xa4)](_0x2f89cd,_0x1c92df,_0x17e8b5),_0x17e8b5;},__metadata=this&&this['__metadata']||function(_0x4dc3fd,_0x47e360){const _0x3ded75=_0x340a98;if(typeof Reflect===_0x3ded75(0xce)&&typeof Reflect[_0x3ded75(0xcc)]===_0x3ded75(0xc0))return Reflect['metadata'](_0x4dc3fd,_0x47e360);};Object[_0x340a98(0xa4)](exports,_0x340a98(0xc1),{'value':!![]}),exports[_0x340a98(0xea)]=void 0x0;function _0x15e2(){const _0x2ad366=['音频生成成功，等待视频生成...','function','__esModule','padStart','localStorageStatus','Bearer\x20','上传音频文件失败:\x20','未能获取结果数据,\x20即将重试','上传图片文件失败:\x20','taskData格式错误','now',',\x20headers:\x20','fileInfo','metadata','444sCMAeO','object','log','1628cMgCSO','axios','UploadService','上传视频文件失败:\x20','globalConfigService','更新日志失败:\x20','isArray','Logger','生成失败','音乐生成失败','uploadFileFromUrl','轮询失败，重试次数:\x20','getDate','stringify','SUCCESS','getMonth','video_url','5032EGPCer','，payload:\x20',',\x20状态消息:\x20','__decorate','message','226ESFUAS','images/suno-music/','任务提交失败','updateChatLog','SunoService','查询生成结果时发生错误:','676850yRjkJF','taskData','627996WGCXxB','音乐生成中...','post','debug','歌词生成中','design:paramtypes','/task/suno/v1/submit/lyrics','video/suno-music/','error','uploadService','GlobalConfigService','join','1846881Eyasxf','任务提交结果，状态码:\x20','image_url','progress','answer','ChatLogService','427cePJGG','suno','pollSunoMusicResult','title','status','audio/suno-music/','查询生成结果时发生错误','/task/suno/v1/fetch/','chatLogService','LYRICS','音乐生成成功:\x20','12ZiNBOu','videoUrl','defineProperty','获取配置失败:\x20','default','length','43140ZLHpNr','开始生成音乐','轮询过程中发生错误:\x20','LumaService','taskId','轮询结果:\x20','audioUrl','get','4kEbDjO','任务提交成功,\x20任务ID:\x20','getOwnPropertyDescriptor','音乐已生成','push','getConfigs','Injectable','filter','查询超时，请稍后再试！','data','169477zFveVh','任务提交失败:\x20','map','../upload/upload.service','当前生成进度\x20'];_0x15e2=function(){return _0x2ad366;};return _0x15e2();}const common_1=require('@nestjs/common'),axios_1=require(_0x340a98(0xd1)),chatLog_service_1=require('../chatLog/chatLog.service'),globalConfig_service_1=require('../globalConfig/globalConfig.service'),upload_service_1=require(_0x340a98(0xbd));let SunoService=class SunoService{constructor(_0x3505e6,_0xd7b7cd,_0x248c65){const _0x413f12=_0x340a98;this[_0x413f12(0x9f)]=_0x3505e6,this[_0x413f12(0x8e)]=_0xd7b7cd,this[_0x413f12(0xd4)]=_0x248c65;}async[_0x340a98(0x98)](_0x3ff084){const _0x46f4ee=_0x340a98;var _0x27a2d4,_0x94fdf3,_0x12b90d;const {apiKey:_0x111418,proxyUrl:_0x192002,action:_0x2a4b2d,prompt:_0x2055d5,timeout:_0x2c4d24,assistantLogId:_0x4edf9d,taskData:_0x12960c,extraParam:_0x5cd1fc}=_0x3ff084;common_1[_0x46f4ee(0xd7)][_0x46f4ee(0xf1)]('SunoService:\x20'+JSON[_0x46f4ee(0xdd)](_0x3ff084),'SunoService');let _0x195b10={'text':'','fileInfo':'','taskId':'','taskData':'','status':0x2};common_1[_0x46f4ee(0xd7)][_0x46f4ee(0xcf)](_0x46f4ee(0xa9),_0x46f4ee(0xea));let _0x38d4e8=null,_0x28567c='',_0x5df07f={};const _0x28285c={'Authorization':_0x46f4ee(0xc4)+_0x111418};_0x2a4b2d===_0x46f4ee(0xa0)&&(_0x28567c=_0x192002+_0x46f4ee(0xf4),_0x5df07f={'prompt':_0x2055d5});if(_0x2a4b2d==='MUSIC'){_0x28567c=_0x192002+'/task/suno/v1/submit/music';try{_0x5df07f=JSON['parse'](_0x12960c);}catch(_0x286a2e){common_1[_0x46f4ee(0xd7)][_0x46f4ee(0x8d)]('解析taskData失败:\x20'+_0x286a2e['message'],_0x46f4ee(0xea));throw new Error(_0x46f4ee(0xc8));}}common_1['Logger'][_0x46f4ee(0xcf)]('正在准备发送请求到\x20'+_0x28567c+_0x46f4ee(0xe2)+JSON[_0x46f4ee(0xdd)](_0x5df07f)+_0x46f4ee(0xca)+JSON[_0x46f4ee(0xdd)](_0x28285c),_0x46f4ee(0xea));try{_0x38d4e8=await axios_1['default'][_0x46f4ee(0xf0)](_0x28567c,_0x5df07f,{'headers':_0x28285c}),common_1[_0x46f4ee(0xd7)]['debug'](_0x46f4ee(0x92)+_0x38d4e8[_0x46f4ee(0x9b)]+_0x46f4ee(0xe3)+_0x38d4e8['statusText']+',\x20数据:\x20'+JSON['stringify'](_0x38d4e8[_0x46f4ee(0xb9)]));}catch(_0x1828ed){common_1[_0x46f4ee(0xd7)]['error'](_0x46f4ee(0xbb)+_0x1828ed[_0x46f4ee(0xe5)],_0x46f4ee(0xea));throw new Error(_0x46f4ee(0xe8));}if((_0x27a2d4=_0x38d4e8===null||_0x38d4e8===void 0x0?void 0x0:_0x38d4e8[_0x46f4ee(0xb9)])===null||_0x27a2d4===void 0x0?void 0x0:_0x27a2d4[_0x46f4ee(0xb9)])_0x195b10[_0x46f4ee(0xac)]=(_0x94fdf3=_0x38d4e8===null||_0x38d4e8===void 0x0?void 0x0:_0x38d4e8[_0x46f4ee(0xb9)])===null||_0x94fdf3===void 0x0?void 0x0:_0x94fdf3[_0x46f4ee(0xb9)],common_1[_0x46f4ee(0xd7)][_0x46f4ee(0xcf)](_0x46f4ee(0xb1)+((_0x12b90d=_0x38d4e8===null||_0x38d4e8===void 0x0?void 0x0:_0x38d4e8[_0x46f4ee(0xb9)])===null||_0x12b90d===void 0x0?void 0x0:_0x12b90d[_0x46f4ee(0xb9)]),_0x46f4ee(0xea));else throw new Error(_0x46f4ee(0xc6));try{await this[_0x46f4ee(0x99)]({'proxyUrl':_0x192002,'apiKey':_0x111418,'taskId':_0x38d4e8[_0x46f4ee(0xb9)][_0x46f4ee(0xb9)],'timeout':_0x2c4d24,'prompt':_0x2055d5,'action':_0x2a4b2d,'onSuccess':async _0x2f2c24=>{const _0x488b27=_0x46f4ee;try{await this['chatLogService'][_0x488b27(0xe9)](_0x4edf9d,{'videoUrl':_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24[_0x488b27(0xa3)],'audioUrl':_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24['audioUrl'],'fileInfo':_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24['fileInfo'],'answer':(_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24[_0x488b27(0x95)])||_0x2055d5,'progress':'100%','status':0x3,'taskId':_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24[_0x488b27(0xac)],'taskData':_0x2f2c24===null||_0x2f2c24===void 0x0?void 0x0:_0x2f2c24[_0x488b27(0xed)]}),common_1['Logger'][_0x488b27(0xcf)]('音乐任务已完成',_0x488b27(0xea));}catch(_0x3abd30){common_1[_0x488b27(0xd7)][_0x488b27(0x8d)](_0x488b27(0xd5)+_0x3abd30['message'],_0x488b27(0xea));}},'onAudioSuccess':async _0x4391a0=>{const _0x243853=_0x46f4ee;try{await this[_0x243853(0x9f)][_0x243853(0xe9)](_0x4edf9d,{'videoUrl':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0['videoUrl'],'audioUrl':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0xae)],'fileInfo':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0xcb)],'answer':(_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0x95)])||_0x2055d5,'progress':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0x94)],'status':_0x4391a0[_0x243853(0x9b)],'taskId':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0xac)],'taskData':_0x4391a0===null||_0x4391a0===void 0x0?void 0x0:_0x4391a0[_0x243853(0xed)]}),common_1['Logger'][_0x243853(0xcf)](_0x243853(0xbf),'SunoService');}catch(_0x5daf20){common_1[_0x243853(0xd7)]['error'](_0x243853(0xd5)+_0x5daf20[_0x243853(0xe5)],_0x243853(0xea));}},'onGenerating':async _0x58c0eb=>{const _0x475d64=_0x46f4ee;try{await this['chatLogService'][_0x475d64(0xe9)](_0x4edf9d,{'videoUrl':_0x58c0eb===null||_0x58c0eb===void 0x0?void 0x0:_0x58c0eb['videoUrl'],'audioUrl':_0x58c0eb===null||_0x58c0eb===void 0x0?void 0x0:_0x58c0eb[_0x475d64(0xae)],'fileInfo':_0x58c0eb===null||_0x58c0eb===void 0x0?void 0x0:_0x58c0eb[_0x475d64(0xcb)],'answer':(_0x58c0eb===null||_0x58c0eb===void 0x0?void 0x0:_0x58c0eb['answer'])||_0x475d64(0xef),'progress':_0x58c0eb===null||_0x58c0eb===void 0x0?void 0x0:_0x58c0eb[_0x475d64(0x94)],'status':_0x58c0eb['status']}),common_1[_0x475d64(0xd7)][_0x475d64(0xcf)]('音乐生成中...','SunoService');}catch(_0x395939){common_1[_0x475d64(0xd7)][_0x475d64(0x8d)]('更新日志失败:\x20'+_0x395939[_0x475d64(0xe5)],_0x475d64(0xea));}},'onFailure':async _0x6a144a=>{const _0xfdafb8=_0x46f4ee;try{await this[_0xfdafb8(0x9f)][_0xfdafb8(0xe9)](_0x4edf9d,{'answer':_0xfdafb8(0xd9),'status':_0x6a144a[_0xfdafb8(0x9b)]}),common_1[_0xfdafb8(0xd7)]['log'](_0xfdafb8(0xd8),'SunoService');}catch(_0x5a4424){common_1['Logger'][_0xfdafb8(0x8d)]('更新日志失败:\x20'+_0x5a4424[_0xfdafb8(0xe5)],_0xfdafb8(0xea));}}});}catch(_0x5873bb){common_1[_0x46f4ee(0xd7)][_0x46f4ee(0x8d)](_0x46f4ee(0xeb),_0x5873bb[_0x46f4ee(0xe5)],_0x46f4ee(0xea));throw new Error(_0x46f4ee(0x9d));}return _0x195b10;}async[_0x340a98(0x99)](_0x593955){const _0x28d38a=_0x340a98,{proxyUrl:_0x4e1d5e,apiKey:_0x584773,taskId:_0x5edb3b,timeout:_0x51bec8,onSuccess:_0x3b06f1,onAudioSuccess:_0x744ef2,onFailure:_0x18f527,onGenerating:_0x50b69e,action:_0xa7409d}=_0x593955;let _0x540776={'videoUrl':'','audioUrl':'','fileInfo':'','drawId':'','taskData':'','status':0x2,'progress':0x0,'answer':''};const _0x41fcc8={'Authorization':_0x28d38a(0xc4)+_0x584773},_0xbb0841=_0x4e1d5e+_0x28d38a(0x9e)+_0x5edb3b,_0x4a451a=Date[_0x28d38a(0xc9)](),_0x349b65=0x1388;let _0x88e153=0x0;try{while(Date[_0x28d38a(0xc9)]()-_0x4a451a<_0x51bec8){await new Promise(_0x47ab38=>setTimeout(_0x47ab38,_0x349b65));try{const _0x524583=await axios_1[_0x28d38a(0xa6)][_0x28d38a(0xaf)](_0xbb0841,{'headers':_0x41fcc8}),_0x4b17ca=_0x524583[_0x28d38a(0xb9)][_0x28d38a(0xb9)];common_1[_0x28d38a(0xd7)][_0x28d38a(0xf1)](_0x28d38a(0xad)+JSON[_0x28d38a(0xdd)](_0x4b17ca),'SunoService');if(_0xa7409d==='LYRICS'){if(_0x4b17ca[_0x28d38a(0x9b)]===_0x28d38a(0xde)){_0x540776['taskId']=_0x4b17ca[_0x28d38a(0xb9)]['id'],_0x540776[_0x28d38a(0xed)]=JSON[_0x28d38a(0xdd)](_0x4b17ca[_0x28d38a(0xb9)]),_0x540776[_0x28d38a(0x95)]=_0x4b17ca[_0x28d38a(0xb9)]['text'],_0x3b06f1(_0x540776);return;}_0x540776['progress']=_0x4b17ca===null||_0x4b17ca===void 0x0?void 0x0:_0x4b17ca['progress'],_0x540776['answer']=_0x28d38a(0xf2),_0x540776[_0x28d38a(0x94)]&&_0x50b69e(_0x540776);}if(_0xa7409d==='MUSIC'){if(_0x4b17ca[_0x28d38a(0xb9)]){const _0x2b3c28=_0x4b17ca[_0x28d38a(0xb9)];_0x540776[_0x28d38a(0xed)]=JSON[_0x28d38a(0xdd)](_0x2b3c28);if(Array[_0x28d38a(0xd6)](_0x2b3c28)){const _0xc6e2ee=_0x2b3c28[_0x28d38a(0xbc)](_0x5ab311=>_0x5ab311['audio_url'])[_0x28d38a(0xb7)](_0x292f8f=>_0x292f8f),_0x321cf4=_0x2b3c28['map'](_0x510063=>_0x510063[_0x28d38a(0xe0)])[_0x28d38a(0xb7)](_0xce38f7=>_0xce38f7),_0x250e23=_0x2b3c28[_0x28d38a(0xbc)](_0x23ed0e=>_0x23ed0e[_0x28d38a(0x93)])[_0x28d38a(0xb7)](_0xdea46=>_0xdea46),_0x510f7e=_0x2b3c28[_0x28d38a(0xbc)](_0x5961da=>_0x5961da[_0x28d38a(0x9a)]),_0x247c26=_0x510f7e[_0x28d38a(0xa7)]>0x0?_0x510f7e[0x0]:_0x28d38a(0xb3);if(_0x4b17ca[_0x28d38a(0x9b)]==='SUCCESS'){let _0x5e6fa8=[],_0x40725d=[],_0x3d4c7f=[];try{const _0x36bf48=await this[_0x28d38a(0xd4)][_0x28d38a(0xb5)]([_0x28d38a(0xc3)]);if(Number(_0x36bf48)){const _0x4caa3a=new Date(),_0x3a4f11=_0x4caa3a['getFullYear'](),_0x365fa2=String(_0x4caa3a[_0x28d38a(0xdf)]()+0x1)[_0x28d38a(0xc2)](0x2,'0'),_0x2816ff=String(_0x4caa3a[_0x28d38a(0xdc)]())['padStart'](0x2,'0'),_0x45e42f=''+_0x3a4f11+_0x365fa2+'/'+_0x2816ff;for(const _0x1d986e of _0xc6e2ee){try{const _0x24d449=await this['uploadService'][_0x28d38a(0xda)]({'url':_0x1d986e,'dir':_0x28d38a(0x9c)+_0x45e42f});_0x5e6fa8['push'](_0x24d449);}catch(_0x42ab6c){common_1[_0x28d38a(0xd7)][_0x28d38a(0x8d)](_0x28d38a(0xc5)+_0x42ab6c[_0x28d38a(0xe5)],_0x28d38a(0xea)),_0x5e6fa8['push'](_0x1d986e);}}for(const _0x2e8233 of _0x321cf4){try{const _0x512c8c=await this[_0x28d38a(0x8e)][_0x28d38a(0xda)]({'url':_0x2e8233,'dir':_0x28d38a(0xf5)+_0x45e42f});_0x40725d[_0x28d38a(0xb4)](_0x512c8c);}catch(_0x326adf){common_1[_0x28d38a(0xd7)][_0x28d38a(0x8d)](_0x28d38a(0xd3)+_0x326adf[_0x28d38a(0xe5)],_0x28d38a(0xea)),_0x40725d['push'](_0x2e8233);}}for(const _0x57ba67 of _0x250e23){try{const _0xd86985=await this['uploadService'][_0x28d38a(0xda)]({'url':_0x57ba67,'dir':_0x28d38a(0xe7)+_0x45e42f});_0x3d4c7f[_0x28d38a(0xb4)](_0xd86985);}catch(_0x4a412c){common_1['Logger'][_0x28d38a(0x8d)](_0x28d38a(0xc7)+_0x4a412c[_0x28d38a(0xe5)],_0x28d38a(0xea)),_0x3d4c7f['push'](_0x57ba67);}}}else _0x5e6fa8=_0xc6e2ee,_0x40725d=_0x321cf4,_0x3d4c7f=_0x250e23;}catch(_0x54d850){common_1[_0x28d38a(0xd7)][_0x28d38a(0x8d)](_0x28d38a(0xa5)+_0x54d850[_0x28d38a(0xe5)],_0x28d38a(0xab)),_0x5e6fa8=_0xc6e2ee,_0x40725d=_0x321cf4,_0x3d4c7f=_0x250e23;}_0x540776[_0x28d38a(0xae)]=_0x5e6fa8[_0x28d38a(0x90)](','),_0x540776[_0x28d38a(0xa3)]=_0x40725d[_0x28d38a(0x90)](','),_0x540776[_0x28d38a(0xcb)]=_0x3d4c7f[_0x28d38a(0x90)](',');_0xc6e2ee[_0x28d38a(0xa7)]===0x2?(_0x540776[_0x28d38a(0x9b)]=0x3,_0x540776[_0x28d38a(0x95)]=_0x247c26):(_0x540776[_0x28d38a(0x9b)]=0x2,_0x540776[_0x28d38a(0x94)]=_0x4b17ca===null||_0x4b17ca===void 0x0?void 0x0:_0x4b17ca[_0x28d38a(0x94)],_0x540776['answer']=_0x28d38a(0xbe)+(_0x4b17ca===null||_0x4b17ca===void 0x0?void 0x0:_0x4b17ca['progress']));common_1[_0x28d38a(0xd7)][_0x28d38a(0xf1)](_0x28d38a(0xa1)+JSON['stringify'](_0x2b3c28),_0x28d38a(0xea)),_0x3b06f1(_0x540776);return;}else _0x540776[_0x28d38a(0xae)]=_0xc6e2ee[_0x28d38a(0x90)](','),_0x540776[_0x28d38a(0xa3)]=_0x321cf4['join'](','),_0x540776[_0x28d38a(0xcb)]=_0x250e23['join'](','),_0x540776[_0x28d38a(0x9b)]=0x2,_0x540776[_0x28d38a(0x94)]=_0x4b17ca===null||_0x4b17ca===void 0x0?void 0x0:_0x4b17ca[_0x28d38a(0x94)],_0x540776[_0x28d38a(0x95)]=_0x247c26,_0x744ef2(_0x540776);}}!_0x540776['audioUrl']&&_0x540776[_0x28d38a(0x94)]&&_0x540776[_0x28d38a(0x9b)]===0x2&&_0x50b69e(_0x540776);}}catch(_0x5669ae){_0x88e153++,common_1[_0x28d38a(0xd7)][_0x28d38a(0x8d)](_0x28d38a(0xdb)+_0x88e153,_0x28d38a(0xea));}}common_1['Logger']['error']('轮询超时，请稍后再试！',_0x28d38a(0xea)),_0x540776[_0x28d38a(0x9b)]=0x4,_0x18f527(_0x540776);throw new Error(_0x28d38a(0xb8));}catch(_0x4f8784){common_1[_0x28d38a(0xd7)][_0x28d38a(0x8d)](_0x28d38a(0xaa)+_0x4f8784,_0x28d38a(0xea)),_0x540776[_0x28d38a(0x9b)]=0x5,_0x18f527(_0x540776);}}};SunoService=__decorate([(0x0,common_1[_0x340a98(0xb6)])(),__metadata(_0x340a98(0xf3),[chatLog_service_1[_0x340a98(0x96)],upload_service_1[_0x340a98(0xd2)],globalConfig_service_1[_0x340a98(0x8f)]])],SunoService),exports['SunoService']=SunoService;