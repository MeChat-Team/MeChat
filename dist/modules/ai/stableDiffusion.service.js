'use strict';const _0x288695=_0x303f;(function(_0x3c2a04,_0x386ae4){const _0x59f5f6=_0x303f,_0x1ce63b=_0x3c2a04();while(!![]){try{const _0x34ede8=parseInt(_0x59f5f6(0x1d5))/0x1+parseInt(_0x59f5f6(0x1e2))/0x2+parseInt(_0x59f5f6(0x1cc))/0x3*(-parseInt(_0x59f5f6(0x1d0))/0x4)+parseInt(_0x59f5f6(0x1fc))/0x5+parseInt(_0x59f5f6(0x1e4))/0x6*(parseInt(_0x59f5f6(0x1f6))/0x7)+parseInt(_0x59f5f6(0x1ff))/0x8*(-parseInt(_0x59f5f6(0x1dd))/0x9)+-parseInt(_0x59f5f6(0x1d9))/0xa;if(_0x34ede8===_0x386ae4)break;else _0x1ce63b['push'](_0x1ce63b['shift']());}catch(_0x1507c1){_0x1ce63b['push'](_0x1ce63b['shift']());}}}(_0x433d,0x62f54));var __decorate=this&&this[_0x288695(0x1fb)]||function(_0x3fcc6a,_0x5c8589,_0x1b3d39,_0x2fe6bf){const _0xd08d13=_0x288695;var _0x86e116=arguments[_0xd08d13(0x1f1)],_0x50d5cd=_0x86e116<0x3?_0x5c8589:_0x2fe6bf===null?_0x2fe6bf=Object[_0xd08d13(0x1d8)](_0x5c8589,_0x1b3d39):_0x2fe6bf,_0xf97d4d;if(typeof Reflect===_0xd08d13(0x1e1)&&typeof Reflect[_0xd08d13(0x1f0)]==='function')_0x50d5cd=Reflect[_0xd08d13(0x1f0)](_0x3fcc6a,_0x5c8589,_0x1b3d39,_0x2fe6bf);else{for(var _0x5810c5=_0x3fcc6a[_0xd08d13(0x1f1)]-0x1;_0x5810c5>=0x0;_0x5810c5--)if(_0xf97d4d=_0x3fcc6a[_0x5810c5])_0x50d5cd=(_0x86e116<0x3?_0xf97d4d(_0x50d5cd):_0x86e116>0x3?_0xf97d4d(_0x5c8589,_0x1b3d39,_0x50d5cd):_0xf97d4d(_0x5c8589,_0x1b3d39))||_0x50d5cd;}return _0x86e116>0x3&&_0x50d5cd&&Object[_0xd08d13(0x1e6)](_0x5c8589,_0x1b3d39,_0x50d5cd),_0x50d5cd;},__metadata=this&&this[_0x288695(0x1d6)]||function(_0x1d53b8,_0x4e5ac7){const _0x2d2e20=_0x288695;if(typeof Reflect===_0x2d2e20(0x1e1)&&typeof Reflect[_0x2d2e20(0x1d1)]==='function')return Reflect[_0x2d2e20(0x1d1)](_0x1d53b8,_0x4e5ac7);},StableDiffusionService_1;function _0x303f(_0x33bdb6,_0x520865){const _0x433d11=_0x433d();return _0x303f=function(_0x303f2d,_0x95f62f){_0x303f2d=_0x303f2d-0x1c6;let _0x347f1c=_0x433d11[_0x303f2d];return _0x347f1c;},_0x303f(_0x33bdb6,_0x520865);}function _0x433d(){const _0x465295=['uploadFileFromUrl','getFullYear','268544eProOe','/v1/chat/completions','__esModule','GlobalConfigService','没有找到链接','content','POST','No\x20choices\x20returned.','788745hWnaRA','padStart','uploadService','getMonth','8RuflsK','metadata','sdxl','开始处理','message','394189ZFTXDw','__metadata','No\x20link\x20found.','getOwnPropertyDescriptor','3476420XLWiur','处理内容','找到链接','application/json','63HgmwCq','\x20绘制成功','error','API响应接收','object','883880JInLPi','images/stable-diffusion/','42KQSoQW','fileInfo','defineProperty','上传文件失败:\x20','data','log','getDate','answer','Logger','../globalConfig/globalConfig.service','StableDiffusionService','localStorageStatus','decorate','length','globalConfigService','../upload/upload.service','name','user','241619GLGaDD','default','choices','Injectable','服务器错误，请求失败：','__decorate','2180160QtETMG'];_0x433d=function(){return _0x465295;};return _0x433d();}Object['defineProperty'](exports,_0x288695(0x1c6),{'value':!![]}),exports[_0x288695(0x1ee)]=void 0x0;const common_1=require('@nestjs/common'),axios_1=require('axios'),globalConfig_service_1=require(_0x288695(0x1ed)),upload_service_1=require(_0x288695(0x1f3));let StableDiffusionService=StableDiffusionService_1=class StableDiffusionService{constructor(_0x4815d3,_0x3ee76c){const _0x12a345=_0x288695;this[_0x12a345(0x1ce)]=_0x4815d3,this[_0x12a345(0x1f2)]=_0x3ee76c,this['logger']=new common_1[(_0x12a345(0x1ec))](StableDiffusionService_1[_0x12a345(0x1f4)]);}async[_0x288695(0x1d2)](_0x467ad8){const _0x72f450=_0x288695,{onSuccess:_0x25ff3c,onFailure:_0xc9efb1,apiKey:_0x2a6976,model:_0xf2ff33,proxyUrl:_0xf33efd,modelName:_0x4ea36b,timeout:_0x4a7504,chatId:_0x2dffb1,prompt:_0x91fe7a}=_0x467ad8;let _0x7e87c5={'answer':'','model':_0xf2ff33,'modelName':_0x4ea36b,'chatId':_0x2dffb1,'fileInfo':'','status':0x2};console[_0x72f450(0x1e9)](_0x72f450(0x1d3),{'model':_0xf2ff33,'modelName':_0x4ea36b,'prompt':_0x91fe7a});const _0x784f7f={'method':_0x72f450(0x1ca),'url':_0xf33efd+_0x72f450(0x200),'timeout':_0x4a7504,'headers':{'Content-Type':_0x72f450(0x1dc),'Authorization':'Bearer\x20'+_0x2a6976},'data':{'model':_0xf2ff33,'messages':[{'role':_0x72f450(0x1f5),'content':_0x91fe7a}]}};try{const _0x772810=await(0x0,axios_1[_0x72f450(0x1f7)])(_0x784f7f);console['log'](_0x72f450(0x1e0),_0x772810['data']);if(_0x772810[_0x72f450(0x1e8)]['choices']&&_0x772810[_0x72f450(0x1e8)][_0x72f450(0x1f8)][_0x72f450(0x1f1)]>0x0){const _0x14c3d9=_0x772810['data']['choices'][0x0],_0x405b9a=_0x14c3d9[_0x72f450(0x1d4)][_0x72f450(0x1c9)];console[_0x72f450(0x1e9)](_0x72f450(0x1da),_0x405b9a);const _0x43c796=/\]\((https?:\/\/[^\)]+)\)/,_0xf05a53=_0x405b9a['match'](_0x43c796);if(_0xf05a53&&_0xf05a53[0x1]){_0x7e87c5[_0x72f450(0x1e5)]=_0xf05a53[0x1];try{const _0x206568=await this[_0x72f450(0x1f2)]['getConfigs']([_0x72f450(0x1ef)]);if(Number(_0x206568)){const _0x310bf0=new Date(),_0x35154c=_0x310bf0[_0x72f450(0x1fe)](),_0x970fae=String(_0x310bf0[_0x72f450(0x1cf)]()+0x1)[_0x72f450(0x1cd)](0x2,'0'),_0x3d82d6=String(_0x310bf0[_0x72f450(0x1ea)]())['padStart'](0x2,'0'),_0x59573a=''+_0x35154c+_0x970fae+'/'+_0x3d82d6;_0x7e87c5[_0x72f450(0x1e5)]=await this[_0x72f450(0x1ce)][_0x72f450(0x1fd)]({'url':_0x7e87c5[_0x72f450(0x1e5)],'dir':_0x72f450(0x1e3)+_0x59573a});}}catch(_0x274898){common_1[_0x72f450(0x1ec)][_0x72f450(0x1df)](_0x72f450(0x1e7)+_0x274898[_0x72f450(0x1d4)],_0x72f450(0x1ee));}console['log'](_0x72f450(0x1db),_0xf05a53[0x1]);}else console[_0x72f450(0x1e9)](_0x72f450(0x1c8));_0x7e87c5[_0x72f450(0x1eb)]=_0x91fe7a+_0x72f450(0x1de);if(_0x7e87c5['fileInfo']){_0x25ff3c(_0x7e87c5);return;}else _0xc9efb1(_0x72f450(0x1d7));}else _0xc9efb1(_0x72f450(0x1cb));}catch(_0x43be1b){common_1[_0x72f450(0x1ec)][_0x72f450(0x1df)](_0x72f450(0x1fa),_0x43be1b);}}};StableDiffusionService=StableDiffusionService_1=__decorate([(0x0,common_1[_0x288695(0x1f9)])(),__metadata('design:paramtypes',[upload_service_1['UploadService'],globalConfig_service_1[_0x288695(0x1c7)]])],StableDiffusionService),exports[_0x288695(0x1ee)]=StableDiffusionService;