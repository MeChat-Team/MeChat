'use strict';const _0x274078=_0x1d3d;function _0x16aa(){const _0x5df2ee=['key','uploadFile','Logger','localStorageStatus','非法路径，禁止访问目录之外的位置','error:\x20','function','cosSecretId','decorate','cosBucket','150372XTrvdu','append','uploadFileByChevereto','https://$2','aliOssBucket','mime-types','others','174230EOxQSM','getBufferFromUrl','headers','bat','tencent','../../common/utils','getUploadConfig','Injectable','tencentCosStatus','writeFile','catch','getOwnPropertyDescriptor','请先前往后台配置上传图片的方式','文件已上传到本地存储。访问\x20URL:\x20','random','axios','url','startsWith','上传失败:\x20','ali\x20开始上传','basename','获取图片资源失败，请重新试试吧！','substring','当前已开启全球加速----------------->','acceleratedDomain','path','uploadFileByTencentCos','error','base64','../globalConfig/globalConfig.service','mkdir','globalConfigService','putObject','HttpException','exe','design:paramtypes','Chevereto\x20--->\x20res','dev/','siteUrl','defineProperty','tencentCosAcceleratedDomain','99sBsrgI','tencentCos','937554rcvJsn','replace','上传图片失败[Chevereto|buffer]\x20-->\x20','normalize','object','cheveretoStatus','ali','content-type','747595DfAxvL','promises','removeSpecialCharacters','上传图片失败[ali]','default','length','90340KHeJgv','put','cheveretoKey','UploadService','不允许上传此类型的文件','HttpStatus','__metadata','uploadFileToLocal','TRUE','__decorate','file/','uploadFileByAliOss','code','ISDEV','18kHEvNM','env','使用阿里云\x20OSS\x20上传文件','GlobalConfigService','join','log','@nestjs/common','文件保存失败:\x20','title','response','455392lHISCf','上传图片失败[Chevereto]','stringify','cosRegion','chevereto','5734GPJIjh','STANDARD','data','php','message','post','toString','get','使用腾讯云\x20COS\x20上传文件','未配置任何上传方式','file','endsWith','cos\x20->\x20err:\x20','public','formatUrl','文件已上传到阿里云\x20OSS。访问\x20URL:\x20','119WfKOKe','cwd','image','stream-to-buffer','BAD_REQUEST','getConfigs','使用本地存储上传文件','cheveretoUploadPath','aliOssAccessKeyId',',\x20阿里云:\x20','无法识别文件类型，请检查文件','includes','stream','Location','aliOssStatus'];_0x16aa=function(){return _0x5df2ee;};return _0x16aa();}(function(_0x4b69ce,_0x4a11b8){const _0x5d1f05=_0x1d3d,_0x439415=_0x4b69ce();while(!![]){try{const _0x5c6c3d=parseInt(_0x5d1f05(0x211))/0x1*(parseInt(_0x5d1f05(0x201))/0x2)+parseInt(_0x5d1f05(0x1d6))/0x3+parseInt(_0x5d1f05(0x22a))/0x4+parseInt(_0x5d1f05(0x1de))/0x5*(-parseInt(_0x5d1f05(0x1f2))/0x6)+-parseInt(_0x5d1f05(0x231))/0x7+-parseInt(_0x5d1f05(0x1fc))/0x8+-parseInt(_0x5d1f05(0x1d4))/0x9*(-parseInt(_0x5d1f05(0x1e4))/0xa);if(_0x5c6c3d===_0x4a11b8)break;else _0x439415['push'](_0x439415['shift']());}catch(_0x2a9463){_0x439415['push'](_0x439415['shift']());}}}(_0x16aa,0x3f8bf));function _0x1d3d(_0x1460a8,_0xcfbe04){const _0x16aadf=_0x16aa();return _0x1d3d=function(_0x1d3ded,_0x55a3ab){_0x1d3ded=_0x1d3ded-0x1b2;let _0x3b0419=_0x16aadf[_0x1d3ded];return _0x3b0419;},_0x1d3d(_0x1460a8,_0xcfbe04);}var __decorate=this&&this[_0x274078(0x1ed)]||function(_0x3d0465,_0x48ce3c,_0x3dbcb9,_0x206c1f){const _0x613ace=_0x274078;var _0x593cc2=arguments[_0x613ace(0x1e3)],_0x48c9b4=_0x593cc2<0x3?_0x48ce3c:_0x206c1f===null?_0x206c1f=Object[_0x613ace(0x1b6)](_0x48ce3c,_0x3dbcb9):_0x206c1f,_0x66d669;if(typeof Reflect===_0x613ace(0x1da)&&typeof Reflect[_0x613ace(0x228)]===_0x613ace(0x226))_0x48c9b4=Reflect[_0x613ace(0x228)](_0x3d0465,_0x48ce3c,_0x3dbcb9,_0x206c1f);else{for(var _0x200e46=_0x3d0465[_0x613ace(0x1e3)]-0x1;_0x200e46>=0x0;_0x200e46--)if(_0x66d669=_0x3d0465[_0x200e46])_0x48c9b4=(_0x593cc2<0x3?_0x66d669(_0x48c9b4):_0x593cc2>0x3?_0x66d669(_0x48ce3c,_0x3dbcb9,_0x48c9b4):_0x66d669(_0x48ce3c,_0x3dbcb9))||_0x48c9b4;}return _0x593cc2>0x3&&_0x48c9b4&&Object[_0x613ace(0x1d2)](_0x48ce3c,_0x3dbcb9,_0x48c9b4),_0x48c9b4;},__metadata=this&&this[_0x274078(0x1ea)]||function(_0x4aaf31,_0xb987cc){const _0x5bc7c6=_0x274078;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x5bc7c6(0x226))return Reflect['metadata'](_0x4aaf31,_0xb987cc);};Object[_0x274078(0x1d2)](exports,'__esModule',{'value':!![]}),exports[_0x274078(0x1e7)]=void 0x0;const utils_1=require(_0x274078(0x236)),common_1=require(_0x274078(0x1f8)),ALIOSS=require('ali-oss'),axios_1=require(_0x274078(0x1ba)),TENCENTCOS=require('cos-nodejs-sdk-v5'),FormData=require('form-data'),fs_1=require('fs'),mime=require(_0x274078(0x22f)),path=require(_0x274078(0x1c4)),streamToBuffer=require(_0x274078(0x214)),globalConfig_service_1=require(_0x274078(0x1c8)),blacklist=[_0x274078(0x1cd),'sh',_0x274078(0x234),'js',_0x274078(0x204),'py'];let UploadService=class UploadService{constructor(_0x3ca049){const _0x5c6c12=_0x274078;this[_0x5c6c12(0x1ca)]=_0x3ca049;}['onModuleInit'](){}async[_0x274078(0x221)](_0x1431e3,_0xdb9cbc=_0x274078(0x230)){const _0x4d5b43=_0x274078,{buffer:_0x1856bc,mimetype:_0x4398e7}=_0x1431e3;process['env'][_0x4d5b43(0x1f1)]===_0x4d5b43(0x1ec)&&(_0xdb9cbc=_0x4d5b43(0x1d0)+_0xdb9cbc);const _0x2cdf28=mime['extension'](_0x4398e7)||'';!_0x2cdf28&&common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1c6)](_0x4d5b43(0x21b),_0x4d5b43(0x1e7));if(blacklist[_0x4d5b43(0x21c)](_0x2cdf28['toLowerCase']())){common_1['Logger']['error'](_0x4d5b43(0x1e8),_0x4d5b43(0x1e7));throw new Error(_0x4d5b43(0x1e8));}const _0x44f2c6=new Date(),_0x9e914a=_0x44f2c6['getTime'](),_0x557b9f=Math[_0x4d5b43(0x1b9)]()['toString'](0x24)[_0x4d5b43(0x1c1)](0x2,0x6),_0xf62701=_0x9e914a+'_'+_0x557b9f+'.'+_0x2cdf28,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0,localStorageStatus:localStorageStatus=0x0}=await this[_0x4d5b43(0x1ca)][_0x4d5b43(0x216)](['tencentCosStatus',_0x4d5b43(0x21f),'cheveretoStatus',_0x4d5b43(0x223)]);common_1[_0x4d5b43(0x222)]['log']('上传配置状态\x20-\x20腾讯云:本地存储:\x20'+localStorageStatus+',\x20'+tencentCosStatus+_0x4d5b43(0x21a)+aliOssStatus+',\x20Chevereto:\x20'+cheveretoStatus,_0x4d5b43(0x1e7));if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus)&&!Number(localStorageStatus)){common_1[_0x4d5b43(0x222)]['error'](_0x4d5b43(0x20a),_0x4d5b43(0x1e7));throw new common_1['HttpException'](_0x4d5b43(0x1b7),common_1[_0x4d5b43(0x1e9)][_0x4d5b43(0x215)]);}try{if(Number(localStorageStatus)){common_1[_0x4d5b43(0x222)]['log'](_0x4d5b43(0x217),'UploadService');const _0x532d08=await this[_0x4d5b43(0x1eb)]({'filename':_0xf62701,'buffer':_0x1856bc,'dir':_0xdb9cbc});return common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1f7)](_0x4d5b43(0x1b8)+_0x532d08,'UploadService'),_0x532d08;}if(Number(tencentCosStatus)){common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1f7)](_0x4d5b43(0x209),_0x4d5b43(0x1e7));const _0x26c17b=await this[_0x4d5b43(0x1c5)]({'filename':_0xf62701,'buffer':_0x1856bc,'dir':_0xdb9cbc});return common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1f7)]('文件已上传到腾讯云\x20COS。访问\x20URL:\x20'+_0x26c17b,_0x4d5b43(0x1e7)),_0x26c17b;}if(Number(aliOssStatus)){common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1f7)](_0x4d5b43(0x1f4),_0x4d5b43(0x1e7));const _0x167a8c=await this[_0x4d5b43(0x1ef)]({'filename':_0xf62701,'buffer':_0x1856bc,'dir':_0xdb9cbc});return common_1[_0x4d5b43(0x222)][_0x4d5b43(0x1f7)](_0x4d5b43(0x210)+_0x167a8c,_0x4d5b43(0x1e7)),_0x167a8c;}if(Number(cheveretoStatus)){common_1['Logger'][_0x4d5b43(0x1f7)]('使用\x20Chevereto\x20上传文件',_0x4d5b43(0x1e7));const _0x48b0f3=await this[_0x4d5b43(0x22c)]({'filename':_0xf62701,'buffer':_0x1856bc[_0x4d5b43(0x207)](_0x4d5b43(0x1c7))});return common_1[_0x4d5b43(0x222)]['log']('文件已上传到\x20Chevereto。访问\x20URL:\x20'+_0x48b0f3,'UploadService'),_0x48b0f3;}}catch(_0x455099){common_1['Logger'][_0x4d5b43(0x1c6)](_0x4d5b43(0x1bd)+_0x455099['message'],'UploadService');throw _0x455099;}}async['getUploadType'](){const _0x55e8b0=_0x274078,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x55e8b0(0x1ca)][_0x55e8b0(0x216)]([_0x55e8b0(0x1b3),_0x55e8b0(0x21f),_0x55e8b0(0x1db)]);if(Number(tencentCosStatus))return _0x55e8b0(0x235);if(Number(aliOssStatus))return _0x55e8b0(0x1dc);if(Number(cheveretoStatus))return _0x55e8b0(0x200);}async['uploadFileFromUrl']({url:_0x25f27c,dir:dir=_0x274078(0x230)}){const _0x56f85d=_0x274078;process[_0x56f85d(0x1f3)][_0x56f85d(0x1f1)]===_0x56f85d(0x1ec)&&(dir=_0x56f85d(0x1d0)+dir);const {buffer:_0x3fa3e1,mimeType:_0x4ef6a2}=await this[_0x56f85d(0x232)](_0x25f27c);return await this[_0x56f85d(0x221)]({'buffer':_0x3fa3e1,'mimetype':_0x4ef6a2},dir);}async[_0x274078(0x1c5)]({filename:_0x4a9a56,buffer:_0x51ff1b,dir:_0x43afe0}){const _0x1ea592=_0x274078,{Bucket:_0x4caf60,Region:_0x5ed730,SecretId:_0x15675e,SecretKey:_0x277033}=await this[_0x1ea592(0x237)](_0x1ea592(0x235));this[_0x1ea592(0x1d5)]=new TENCENTCOS({'SecretId':_0x15675e,'SecretKey':_0x277033,'FileParallelLimit':0xa});try{return new Promise(async(_0x497fdc,_0x2a83d4)=>{const _0x2ab99f=_0x1ea592;this[_0x2ab99f(0x1d5)][_0x2ab99f(0x1cb)]({'Bucket':(0x0,utils_1[_0x2ab99f(0x1e0)])(_0x4caf60),'Region':(0x0,utils_1[_0x2ab99f(0x1e0)])(_0x5ed730),'Key':_0x43afe0+'/'+_0x4a9a56,'StorageClass':_0x2ab99f(0x202),'Body':_0x51ff1b},async(_0x19f310,_0x23cd76)=>{const _0x4d43f8=_0x2ab99f;if(_0x19f310)return console[_0x4d43f8(0x1f7)](_0x4d43f8(0x20d),_0x19f310),_0x2a83d4(_0x19f310);let _0x3fee31=_0x23cd76[_0x4d43f8(0x21e)][_0x4d43f8(0x1d7)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x4d43f8(0x22d));const {acceleratedDomain:_0xd53eea}=await this['getUploadConfig'](_0x4d43f8(0x235));return _0xd53eea&&(_0x3fee31=_0x3fee31['replace'](/^(https:\/\/[^/]+)(\/.*)$/,'https://'+_0xd53eea+'$2'),console[_0x4d43f8(0x1f7)]('当前已开启全球加速----------------->',_0x3fee31)),_0x497fdc(_0x3fee31);});});}catch(_0x52e679){console[_0x1ea592(0x1f7)](_0x1ea592(0x225),_0x52e679);throw new common_1[(_0x1ea592(0x1cc))]('上传图片失败[ten]',common_1['HttpStatus']['BAD_REQUEST']);}}async['uploadFileByAliOss']({filename:_0x57f163,buffer:_0x269943,dir:_0x2cff5e}){const _0x50b0f5=_0x274078,{region:_0x5b901e,bucket:_0x24674e,accessKeyId:_0x43e755,accessKeySecret:_0x936209}=await this['getUploadConfig'](_0x50b0f5(0x1dc)),_0xd211bf=new ALIOSS({'region':(0x0,utils_1[_0x50b0f5(0x1e0)])(_0x5b901e),'accessKeyId':_0x43e755,'accessKeySecret':_0x936209,'bucket':(0x0,utils_1[_0x50b0f5(0x1e0)])(_0x24674e)});try{return console[_0x50b0f5(0x1f7)](_0x50b0f5(0x1be)),new Promise((_0x3d21f4,_0x28a08c)=>{const _0x3e15e0=_0x50b0f5;_0xd211bf[_0x3e15e0(0x1e5)](_0x2cff5e+'/'+_0x57f163,_0x269943)['then'](async _0x213c3d=>{const _0x91413f=_0x3e15e0,{acceleratedDomain:_0x2148a5}=await this[_0x91413f(0x237)]('ali');_0x2148a5&&(_0x213c3d[_0x91413f(0x1bb)]=_0x213c3d[_0x91413f(0x1bb)][_0x91413f(0x1d7)](/^(https:\/\/[^/]+)(\/.*)$/,'https://'+_0x2148a5+'$2'),console[_0x91413f(0x1f7)](_0x91413f(0x1c2),_0x213c3d[_0x91413f(0x1bb)])),_0x3d21f4(_0x213c3d[_0x91413f(0x1bb)]);})[_0x3e15e0(0x1b5)](_0x36ed25=>{_0x28a08c(_0x36ed25);});});}catch(_0x5e8520){throw new common_1[(_0x50b0f5(0x1cc))](_0x50b0f5(0x1e1),common_1[_0x50b0f5(0x1e9)][_0x50b0f5(0x215)]);}}async['uploadFileToLocal']({filename:_0x260338,buffer:_0x30d288,dir:dir=_0x274078(0x230)}){const _0x10ab72=_0x274078,_0xe6ee2c=path[_0x10ab72(0x1d9)](dir)[_0x10ab72(0x1d7)](/^(\.\.(\/|\\|$))+/,''),_0xb3cd29=path[_0x10ab72(0x1bf)](_0x260338),_0xb35efa=process[_0x10ab72(0x212)](),_0x18439e=path[_0x10ab72(0x1f6)](_0xb35efa,'public',_0x10ab72(0x20b),_0xe6ee2c),_0x5195a3=path[_0x10ab72(0x1f6)](_0x18439e,_0xb3cd29);if(!_0x5195a3[_0x10ab72(0x1bc)](path[_0x10ab72(0x1f6)](_0xb35efa,_0x10ab72(0x20e),'file')))throw new Error(_0x10ab72(0x224));try{await fs_1[_0x10ab72(0x1df)][_0x10ab72(0x1c9)](_0x18439e,{'recursive':!![]});}catch(_0x382ba4){common_1['Logger'][_0x10ab72(0x1c6)]('创建目录失败:\x20'+_0x18439e,_0x382ba4);throw _0x382ba4;}try{await fs_1['promises'][_0x10ab72(0x1b4)](_0x5195a3,_0x30d288,{'mode':0x124});}catch(_0x2471f3){common_1[_0x10ab72(0x222)][_0x10ab72(0x1c6)](_0x10ab72(0x1f9)+_0x5195a3,_0x2471f3);throw _0x2471f3;}let _0x3e6933=_0x10ab72(0x1ee)+_0xe6ee2c+'/'+_0xb3cd29;const _0x2b092b=await this[_0x10ab72(0x1ca)][_0x10ab72(0x216)]([_0x10ab72(0x1d1)]);if(_0x2b092b){const _0x4d24ae=(0x0,utils_1[_0x10ab72(0x20f)])(_0x2b092b);_0x3e6933=_0x4d24ae+'/'+_0x3e6933;}return _0x3e6933;}async[_0x274078(0x22c)]({filename:filename='',buffer:_0x39fc59}){const _0x3dfd3c=_0x274078;var _0x498e98;const {key:_0xda7129,uploadPath:_0x3eba84}=await this[_0x3dfd3c(0x237)](_0x3dfd3c(0x200));let _0x4b0178=_0x3eba84[_0x3dfd3c(0x20c)]('/')?_0x3eba84['slice'](0x0,-0x1):_0x3eba84;const _0x32bcb7=new FormData(),_0x46b867=_0x39fc59[_0x3dfd3c(0x207)](_0x3dfd3c(0x1c7));_0x32bcb7[_0x3dfd3c(0x22b)]('source',_0x46b867),_0x32bcb7[_0x3dfd3c(0x22b)](_0x3dfd3c(0x220),_0xda7129),_0x32bcb7['append'](_0x3dfd3c(0x1fa),filename);try{const _0xb561fa=await axios_1[_0x3dfd3c(0x1e2)][_0x3dfd3c(0x206)](_0x4b0178,_0x32bcb7,{'headers':{'X-API-Key':_0xda7129}});if((_0xb561fa===null||_0xb561fa===void 0x0?void 0x0:_0xb561fa['status'])===0xc8)return _0xb561fa['data'][_0x3dfd3c(0x213)][_0x3dfd3c(0x1bb)];else console[_0x3dfd3c(0x1f7)](_0x3dfd3c(0x1cf),_0xb561fa===null||_0xb561fa===void 0x0?void 0x0:_0xb561fa[_0x3dfd3c(0x203)][_0x3dfd3c(0x1f0)],_0xb561fa===null||_0xb561fa===void 0x0?void 0x0:_0xb561fa[_0x3dfd3c(0x203)][_0x3dfd3c(0x1c6)][_0x3dfd3c(0x205)]),common_1[_0x3dfd3c(0x222)][_0x3dfd3c(0x1c6)](_0x3dfd3c(0x1fd),JSON[_0x3dfd3c(0x1fe)](_0xb561fa[_0x3dfd3c(0x203)]));}catch(_0x2f57de){console[_0x3dfd3c(0x1f7)](_0x3dfd3c(0x225),_0x2f57de);throw new common_1[(_0x3dfd3c(0x1cc))](_0x3dfd3c(0x1d8)+((_0x498e98=_0x2f57de[_0x3dfd3c(0x1fb)])===null||_0x498e98===void 0x0?void 0x0:_0x498e98[_0x3dfd3c(0x203)]['error'][_0x3dfd3c(0x205)]),common_1[_0x3dfd3c(0x1e9)][_0x3dfd3c(0x215)]);}}async[_0x274078(0x237)](_0x52ec85){const _0x47c0f8=_0x274078;if(_0x52ec85===_0x47c0f8(0x1dc)){const {aliOssRegion:_0x46f6f4,aliOssBucket:_0x53e377,aliOssAccessKeyId:_0x518773,aliOssAccessKeySecret:_0x4c73a5,aliOssAcceleratedDomain:_0x425b87}=await this[_0x47c0f8(0x1ca)][_0x47c0f8(0x216)](['aliOssRegion',_0x47c0f8(0x22e),_0x47c0f8(0x219),'aliOssAccessKeySecret',_0x47c0f8(0x1c3)]);return{'region':_0x46f6f4,'bucket':_0x53e377,'accessKeyId':_0x518773,'accessKeySecret':_0x4c73a5,'acceleratedDomain':_0x425b87};}if(_0x52ec85===_0x47c0f8(0x235)){const {cosBucket:_0x5b9a65,cosRegion:_0x4848c,cosSecretId:_0x100c04,cosSecretKey:_0x2a6074,tencentCosAcceleratedDomain:_0x50dc03}=await this[_0x47c0f8(0x1ca)][_0x47c0f8(0x216)]([_0x47c0f8(0x229),_0x47c0f8(0x1ff),_0x47c0f8(0x227),'cosSecretKey',_0x47c0f8(0x1d3)]);return{'Bucket':_0x5b9a65,'Region':_0x4848c,'SecretId':_0x100c04,'SecretKey':_0x2a6074,'acceleratedDomain':_0x50dc03};}if(_0x52ec85==='chevereto'){const {cheveretoKey:_0x6aa81b,cheveretoUploadPath:_0x4f83fd}=await this[_0x47c0f8(0x1ca)][_0x47c0f8(0x216)]([_0x47c0f8(0x1e6),_0x47c0f8(0x218)]);return{'key':_0x6aa81b,'uploadPath':_0x4f83fd};}}async[_0x274078(0x232)](_0x15a412){const _0x43ef66=_0x274078,_0x53eb12=await axios_1['default'][_0x43ef66(0x208)](_0x15a412,{'responseType':_0x43ef66(0x21d)}),_0x20900d=await new Promise((_0x5df0f3,_0x5dbbbd)=>{const _0x40242b=_0x43ef66;streamToBuffer(_0x53eb12[_0x40242b(0x203)],(_0x2e8c21,_0x4b5c98)=>{const _0x4cfda8=_0x40242b;_0x2e8c21?_0x5dbbbd(new common_1[(_0x4cfda8(0x1cc))](_0x4cfda8(0x1c0),common_1[_0x4cfda8(0x1e9)][_0x4cfda8(0x215)])):_0x5df0f3(_0x4b5c98);});}),_0x1d4708=_0x53eb12[_0x43ef66(0x233)][_0x43ef66(0x1dd)];return{'buffer':_0x20900d,'mimeType':_0x1d4708};}};UploadService=__decorate([(0x0,common_1[_0x274078(0x1b2)])(),__metadata(_0x274078(0x1ce),[globalConfig_service_1[_0x274078(0x1f5)]])],UploadService),exports['UploadService']=UploadService;