'use strict';const _0x33fb8d=_0x2e40;(function(_0x5dff2d,_0x4dc4d7){const _0x2bff5b=_0x2e40,_0x4b9b01=_0x5dff2d();while(!![]){try{const _0x4ab276=parseInt(_0x2bff5b(0x148))/0x1*(parseInt(_0x2bff5b(0x119))/0x2)+parseInt(_0x2bff5b(0x108))/0x3+parseInt(_0x2bff5b(0x15f))/0x4+-parseInt(_0x2bff5b(0x12d))/0x5*(parseInt(_0x2bff5b(0x110))/0x6)+-parseInt(_0x2bff5b(0x117))/0x7+parseInt(_0x2bff5b(0x10a))/0x8+-parseInt(_0x2bff5b(0x118))/0x9;if(_0x4ab276===_0x4dc4d7)break;else _0x4b9b01['push'](_0x4b9b01['shift']());}catch(_0x37b9b8){_0x4b9b01['push'](_0x4b9b01['shift']());}}}(_0x41e4,0x7c3ae));function _0x2e40(_0x6ec215,_0x4e25b4){const _0x41e469=_0x41e4();return _0x2e40=function(_0x2e4027,_0x14d5d6){_0x2e4027=_0x2e4027-0xe9;let _0x261b35=_0x41e469[_0x2e4027];return _0x261b35;},_0x2e40(_0x6ec215,_0x4e25b4);}var __decorate=this&&this[_0x33fb8d(0x12f)]||function(_0x2b3800,_0x2a0422,_0x117bbc,_0x8ade26){const _0x152ef5=_0x33fb8d;var _0x16b9c8=arguments['length'],_0xa73b28=_0x16b9c8<0x3?_0x2a0422:_0x8ade26===null?_0x8ade26=Object[_0x152ef5(0x12b)](_0x2a0422,_0x117bbc):_0x8ade26,_0x42c28e;if(typeof Reflect==='object'&&typeof Reflect[_0x152ef5(0x102)]===_0x152ef5(0x10c))_0xa73b28=Reflect[_0x152ef5(0x102)](_0x2b3800,_0x2a0422,_0x117bbc,_0x8ade26);else{for(var _0xaad600=_0x2b3800[_0x152ef5(0x125)]-0x1;_0xaad600>=0x0;_0xaad600--)if(_0x42c28e=_0x2b3800[_0xaad600])_0xa73b28=(_0x16b9c8<0x3?_0x42c28e(_0xa73b28):_0x16b9c8>0x3?_0x42c28e(_0x2a0422,_0x117bbc,_0xa73b28):_0x42c28e(_0x2a0422,_0x117bbc))||_0xa73b28;}return _0x16b9c8>0x3&&_0xa73b28&&Object['defineProperty'](_0x2a0422,_0x117bbc,_0xa73b28),_0xa73b28;},__metadata=this&&this[_0x33fb8d(0x111)]||function(_0x1e0066,_0x362309){const _0x3b598b=_0x33fb8d;if(typeof Reflect==='object'&&typeof Reflect[_0x3b598b(0x144)]===_0x3b598b(0x10c))return Reflect[_0x3b598b(0x144)](_0x1e0066,_0x362309);};Object[_0x33fb8d(0x103)](exports,_0x33fb8d(0x137),{'value':!![]}),exports[_0x33fb8d(0x120)]=void 0x0;const utils_1=require(_0x33fb8d(0xf0)),common_1=require(_0x33fb8d(0xea)),ALIOSS=require(_0x33fb8d(0xfa)),axios_1=require(_0x33fb8d(0x132)),TENCENTCOS=require(_0x33fb8d(0xf9)),FormData=require(_0x33fb8d(0xfc)),fs_1=require('fs'),mime=require(_0x33fb8d(0xef)),path=require(_0x33fb8d(0x15b)),streamToBuffer=require(_0x33fb8d(0x109)),globalConfig_service_1=require(_0x33fb8d(0x127)),blacklist=[_0x33fb8d(0x11a),'sh',_0x33fb8d(0x14e),'js',_0x33fb8d(0x115),'py'];let UploadService=class UploadService{constructor(_0x139b87){const _0x29e8d8=_0x33fb8d;this[_0x29e8d8(0x11f)]=_0x139b87;}['onModuleInit'](){}async[_0x33fb8d(0x134)](_0x414dbe,_0x260e8a='others'){const _0x13e597=_0x33fb8d,{buffer:_0xc48797,mimetype:_0x4b4f38}=_0x414dbe;process[_0x13e597(0x106)][_0x13e597(0x168)]===_0x13e597(0x158)&&(_0x260e8a=_0x13e597(0x141)+_0x260e8a);const _0x567b5b=mime[_0x13e597(0x140)](_0x4b4f38)||'';!_0x567b5b&&common_1[_0x13e597(0x142)]['error'](_0x13e597(0x146),_0x13e597(0x120));if(blacklist[_0x13e597(0xf3)](_0x567b5b[_0x13e597(0x122)]())){common_1[_0x13e597(0x142)]['error'](_0x13e597(0x130),_0x13e597(0x120));throw new Error('不允许上传此类型的文件');}const _0x2237c6=new Date(),_0x458ead=_0x2237c6[_0x13e597(0x107)](),_0x27417c=Math[_0x13e597(0x162)]()[_0x13e597(0xf6)](0x24)['substring'](0x2,0x6),_0x612fc9=_0x458ead+'_'+_0x27417c+'.'+_0x567b5b,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0,localStorageStatus:localStorageStatus=0x0}=await this[_0x13e597(0x11f)][_0x13e597(0xe9)]([_0x13e597(0x14a),_0x13e597(0xf4),'cheveretoStatus',_0x13e597(0x160)]);common_1[_0x13e597(0x142)]['log'](_0x13e597(0x152)+localStorageStatus+',\x20'+tencentCosStatus+_0x13e597(0x11c)+aliOssStatus+',\x20Chevereto:\x20'+cheveretoStatus,_0x13e597(0x120));if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus)&&!Number(localStorageStatus)){common_1['Logger']['error'](_0x13e597(0x100),_0x13e597(0x120));throw new common_1[(_0x13e597(0xf7))](_0x13e597(0x104),common_1[_0x13e597(0x149)]['BAD_REQUEST']);}try{if(Number(localStorageStatus)){common_1[_0x13e597(0x142)][_0x13e597(0xf2)](_0x13e597(0xf5),_0x13e597(0x120));const _0x3e315c=await this[_0x13e597(0x105)]({'filename':_0x612fc9,'buffer':_0xc48797,'dir':_0x260e8a});return common_1['Logger']['log'](_0x13e597(0x150)+_0x3e315c,'UploadService'),_0x3e315c;}if(Number(tencentCosStatus)){common_1[_0x13e597(0x142)][_0x13e597(0xf2)](_0x13e597(0x112),_0x13e597(0x120));const _0x4e0209=await this['uploadFileByTencentCos']({'filename':_0x612fc9,'buffer':_0xc48797,'dir':_0x260e8a});return common_1[_0x13e597(0x142)][_0x13e597(0xf2)](_0x13e597(0x12c)+_0x4e0209,_0x13e597(0x120)),_0x4e0209;}if(Number(aliOssStatus)){common_1[_0x13e597(0x142)][_0x13e597(0xf2)]('使用阿里云\x20OSS\x20上传文件',_0x13e597(0x120));const _0x2f8854=await this[_0x13e597(0x126)]({'filename':_0x612fc9,'buffer':_0xc48797,'dir':_0x260e8a});return common_1[_0x13e597(0x142)]['log'](_0x13e597(0x16b)+_0x2f8854,_0x13e597(0x120)),_0x2f8854;}if(Number(cheveretoStatus)){common_1[_0x13e597(0x142)][_0x13e597(0xf2)](_0x13e597(0x101),_0x13e597(0x120));const _0x1357e7=await this[_0x13e597(0xff)]({'filename':_0x612fc9,'buffer':_0xc48797['toString'](_0x13e597(0x14f))});return common_1['Logger'][_0x13e597(0xf2)](_0x13e597(0x13e)+_0x1357e7,_0x13e597(0x120)),_0x1357e7;}}catch(_0x4a7e89){common_1[_0x13e597(0x142)][_0x13e597(0x157)](_0x13e597(0x124)+_0x4a7e89[_0x13e597(0x154)],_0x13e597(0x120));throw _0x4a7e89;}}async['getUploadType'](){const _0x279ac4=_0x33fb8d,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x279ac4(0x11f)][_0x279ac4(0xe9)]([_0x279ac4(0x14a),_0x279ac4(0xf4),'cheveretoStatus']);if(Number(tencentCosStatus))return'tencent';if(Number(aliOssStatus))return _0x279ac4(0x11d);if(Number(cheveretoStatus))return'chevereto';}async['uploadFileFromUrl']({url:_0x496fca,dir:dir=_0x33fb8d(0xeb)}){const _0x31bdbe=_0x33fb8d;process[_0x31bdbe(0x106)][_0x31bdbe(0x168)]===_0x31bdbe(0x158)&&(dir=_0x31bdbe(0x141)+dir);const {buffer:_0x5707e3,mimeType:_0x4e0c39}=await this[_0x31bdbe(0x14b)](_0x496fca);return await this[_0x31bdbe(0x134)]({'buffer':_0x5707e3,'mimetype':_0x4e0c39},dir);}async[_0x33fb8d(0xfd)]({filename:_0x825dae,buffer:_0x2a678d,dir:_0x344ede}){const _0x3f4d67=_0x33fb8d,{Bucket:_0x9f8bd9,Region:_0x4ccea9,SecretId:_0x9c8878,SecretKey:_0x27b874}=await this[_0x3f4d67(0x12e)](_0x3f4d67(0xee));this[_0x3f4d67(0x151)]=new TENCENTCOS({'SecretId':_0x9c8878,'SecretKey':_0x27b874,'FileParallelLimit':0xa});try{return new Promise(async(_0x1c7ce9,_0x2f78af)=>{const _0x408920=_0x3f4d67;this[_0x408920(0x151)][_0x408920(0x10f)]({'Bucket':(0x0,utils_1[_0x408920(0x163)])(_0x9f8bd9),'Region':(0x0,utils_1[_0x408920(0x163)])(_0x4ccea9),'Key':_0x344ede+'/'+_0x825dae,'StorageClass':_0x408920(0x165),'Body':_0x2a678d},async(_0x10edcd,_0x4a3a38)=>{const _0x39a0e1=_0x408920;if(_0x10edcd)return console[_0x39a0e1(0xf2)](_0x39a0e1(0x13c),_0x10edcd),_0x2f78af(_0x10edcd);let _0x22ed19=_0x4a3a38[_0x39a0e1(0x156)][_0x39a0e1(0x10e)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x39a0e1(0x13f));const {acceleratedDomain:_0x12f889}=await this['getUploadConfig'](_0x39a0e1(0xee));return _0x12f889&&(_0x22ed19=_0x22ed19[_0x39a0e1(0x10e)](/^(https:\/\/[^/]+)(\/.*)$/,'https://'+_0x12f889+'$2'),console[_0x39a0e1(0xf2)](_0x39a0e1(0xec),_0x22ed19)),_0x1c7ce9(_0x22ed19);});});}catch(_0x4fcee7){console[_0x3f4d67(0xf2)](_0x3f4d67(0x135),_0x4fcee7);throw new common_1[(_0x3f4d67(0xf7))](_0x3f4d67(0x153),common_1[_0x3f4d67(0x149)][_0x3f4d67(0x143)]);}}async[_0x33fb8d(0x126)]({filename:_0x59379c,buffer:_0x4ae353,dir:_0x5d90ae}){const _0x19577b=_0x33fb8d,{region:_0x5e05f0,bucket:_0x1766ad,accessKeyId:_0x510fe9,accessKeySecret:_0x1b9903}=await this[_0x19577b(0x12e)](_0x19577b(0x11d)),_0x1c649c=new ALIOSS({'region':(0x0,utils_1['removeSpecialCharacters'])(_0x5e05f0),'accessKeyId':_0x510fe9,'accessKeySecret':_0x1b9903,'bucket':(0x0,utils_1[_0x19577b(0x163)])(_0x1766ad)});try{return console['log'](_0x19577b(0x159)),new Promise((_0x551f48,_0x48c18b)=>{const _0x197f31=_0x19577b;_0x1c649c['put'](_0x5d90ae+'/'+_0x59379c,_0x4ae353)[_0x197f31(0x128)](async _0x56cdbb=>{const _0x58af42=_0x197f31,{acceleratedDomain:_0x5ec2b2}=await this[_0x58af42(0x12e)](_0x58af42(0x11d));_0x5ec2b2&&(_0x56cdbb[_0x58af42(0xf1)]=_0x56cdbb[_0x58af42(0xf1)][_0x58af42(0x10e)](/^(https:\/\/[^/]+)(\/.*)$/,_0x58af42(0x155)+_0x5ec2b2+'$2'),console[_0x58af42(0xf2)](_0x58af42(0xec),_0x56cdbb[_0x58af42(0xf1)])),_0x551f48(_0x56cdbb[_0x58af42(0xf1)]);})[_0x197f31(0x114)](_0x21a31d=>{_0x48c18b(_0x21a31d);});});}catch(_0x48780e){throw new common_1[(_0x19577b(0xf7))]('上传图片失败[ali]',common_1[_0x19577b(0x149)][_0x19577b(0x143)]);}}async[_0x33fb8d(0x105)]({filename:_0x3ca6c4,buffer:_0x2d31c9,dir:dir=_0x33fb8d(0xeb)}){const _0x492167=_0x33fb8d,_0x2631ab=path['normalize'](dir)['replace'](/^(\.\.(\/|\\|$))+/,''),_0x114967=path['basename'](_0x3ca6c4),_0x188e1f=process['cwd'](),_0x4c0ead=path[_0x492167(0xfb)](_0x188e1f,_0x492167(0x13a),_0x492167(0xf8),_0x2631ab),_0x497853=path['join'](_0x4c0ead,_0x114967);if(!_0x497853['startsWith'](path[_0x492167(0xfb)](_0x188e1f,_0x492167(0x13a),'file')))throw new Error(_0x492167(0x11e));try{await fs_1[_0x492167(0x169)][_0x492167(0x14d)](_0x4c0ead,{'recursive':!![]});}catch(_0xf0dd6b){common_1['Logger'][_0x492167(0x157)](_0x492167(0x129)+_0x4c0ead,_0xf0dd6b);throw _0xf0dd6b;}try{await fs_1[_0x492167(0x169)][_0x492167(0x16c)](_0x497853,_0x2d31c9,{'mode':0x124});}catch(_0x2065dd){common_1[_0x492167(0x142)][_0x492167(0x157)]('文件保存失败:\x20'+_0x497853,_0x2065dd);throw _0x2065dd;}let _0x2c2d85='file/'+_0x2631ab+'/'+_0x114967;const _0x30ca01=await this[_0x492167(0x11f)][_0x492167(0xe9)]([_0x492167(0x138)]);if(_0x30ca01){const _0x28b0b5=(0x0,utils_1['formatUrl'])(_0x30ca01);_0x2c2d85=_0x28b0b5+'/'+_0x2c2d85;}return _0x2c2d85;}async[_0x33fb8d(0xff)]({filename:filename='',buffer:_0x308636}){const _0x3e3d98=_0x33fb8d;var _0x19f04a;const {key:_0x112e98,uploadPath:_0x1ffe87}=await this[_0x3e3d98(0x12e)]('chevereto');let _0x1f17fd=_0x1ffe87[_0x3e3d98(0x136)]('/')?_0x1ffe87[_0x3e3d98(0x145)](0x0,-0x1):_0x1ffe87;const _0x31fea6=new FormData(),_0x39195e=_0x308636[_0x3e3d98(0xf6)](_0x3e3d98(0x14f));_0x31fea6[_0x3e3d98(0x14c)]('source',_0x39195e),_0x31fea6['append'](_0x3e3d98(0x15e),_0x112e98),_0x31fea6[_0x3e3d98(0x14c)](_0x3e3d98(0x16a),filename);try{const _0x1d865c=await axios_1[_0x3e3d98(0x167)]['post'](_0x1f17fd,_0x31fea6,{'headers':{'X-API-Key':_0x112e98}});if((_0x1d865c===null||_0x1d865c===void 0x0?void 0x0:_0x1d865c['status'])===0xc8)return _0x1d865c[_0x3e3d98(0x139)][_0x3e3d98(0x10b)][_0x3e3d98(0xf1)];else console[_0x3e3d98(0xf2)](_0x3e3d98(0x10d),_0x1d865c===null||_0x1d865c===void 0x0?void 0x0:_0x1d865c['data']['code'],_0x1d865c===null||_0x1d865c===void 0x0?void 0x0:_0x1d865c['data'][_0x3e3d98(0x157)][_0x3e3d98(0x154)]),common_1[_0x3e3d98(0x142)][_0x3e3d98(0x157)](_0x3e3d98(0x11b),JSON[_0x3e3d98(0x166)](_0x1d865c[_0x3e3d98(0x139)]));}catch(_0x556536){console[_0x3e3d98(0xf2)](_0x3e3d98(0x135),_0x556536);throw new common_1[(_0x3e3d98(0xf7))]('上传图片失败[Chevereto|buffer]\x20-->\x20'+((_0x19f04a=_0x556536['response'])===null||_0x19f04a===void 0x0?void 0x0:_0x19f04a['data'][_0x3e3d98(0x157)]['message']),common_1['HttpStatus'][_0x3e3d98(0x143)]);}}async[_0x33fb8d(0x12e)](_0x1503be){const _0x2a698e=_0x33fb8d;if(_0x1503be==='ali'){const {aliOssRegion:_0x2c4e6f,aliOssBucket:_0x31de6e,aliOssAccessKeyId:_0x316da1,aliOssAccessKeySecret:_0x110802,aliOssAcceleratedDomain:_0x475dac}=await this[_0x2a698e(0x11f)]['getConfigs'](['aliOssRegion',_0x2a698e(0x164),_0x2a698e(0x13d),'aliOssAccessKeySecret',_0x2a698e(0x15c)]);return{'region':_0x2c4e6f,'bucket':_0x31de6e,'accessKeyId':_0x316da1,'accessKeySecret':_0x110802,'acceleratedDomain':_0x475dac};}if(_0x1503be===_0x2a698e(0xee)){const {cosBucket:_0x22bb4e,cosRegion:_0x144244,cosSecretId:_0x4fdd79,cosSecretKey:_0x11f529,tencentCosAcceleratedDomain:_0x1c1ded}=await this[_0x2a698e(0x11f)][_0x2a698e(0xe9)]([_0x2a698e(0x121),_0x2a698e(0xfe),_0x2a698e(0x116),_0x2a698e(0x123),_0x2a698e(0x113)]);return{'Bucket':_0x22bb4e,'Region':_0x144244,'SecretId':_0x4fdd79,'SecretKey':_0x11f529,'acceleratedDomain':_0x1c1ded};}if(_0x1503be===_0x2a698e(0x15d)){const {cheveretoKey:_0x35b114,cheveretoUploadPath:_0x118f09}=await this[_0x2a698e(0x11f)][_0x2a698e(0xe9)]([_0x2a698e(0x161),_0x2a698e(0x15a)]);return{'key':_0x35b114,'uploadPath':_0x118f09};}}async[_0x33fb8d(0x14b)](_0x3bcc60){const _0x90d766=_0x33fb8d,_0x4735f8=await axios_1['default'][_0x90d766(0xed)](_0x3bcc60,{'responseType':_0x90d766(0x13b)}),_0x2c5fbb=await new Promise((_0x231116,_0x55e269)=>{streamToBuffer(_0x4735f8['data'],(_0x2d7d21,_0x336e08)=>{const _0x50bbcc=_0x2e40;_0x2d7d21?_0x55e269(new common_1[(_0x50bbcc(0xf7))](_0x50bbcc(0x147),common_1[_0x50bbcc(0x149)][_0x50bbcc(0x143)])):_0x231116(_0x336e08);});}),_0x4dd691=_0x4735f8['headers'][_0x90d766(0x133)];return{'buffer':_0x2c5fbb,'mimeType':_0x4dd691};}};UploadService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x33fb8d(0x12a),[globalConfig_service_1[_0x33fb8d(0x131)]])],UploadService),exports[_0x33fb8d(0x120)]=UploadService;function _0x41e4(){const _0x5a75fd=['使用\x20Chevereto\x20上传文件','decorate','defineProperty','请先前往后台配置上传图片的方式','uploadFileToLocal','env','getTime','2242641boenhJ','stream-to-buffer','6397040eFXEDO','image','function','Chevereto\x20--->\x20res','replace','putObject','6CljHCR','__metadata','使用腾讯云\x20COS\x20上传文件','tencentCosAcceleratedDomain','catch','php','cosSecretId','156254riKGaA','10852956AkVasF','871778yJGXEH','exe','上传图片失败[Chevereto]',',\x20阿里云:\x20','ali','非法路径，禁止访问目录之外的位置','globalConfigService','UploadService','cosBucket','toLowerCase','cosSecretKey','上传失败:\x20','length','uploadFileByAliOss','../globalConfig/globalConfig.service','then','创建目录失败:\x20','design:paramtypes','getOwnPropertyDescriptor','文件已上传到腾讯云\x20COS。访问\x20URL:\x20','2052445kIrqNl','getUploadConfig','__decorate','不允许上传此类型的文件','GlobalConfigService','axios','content-type','uploadFile','error:\x20','endsWith','__esModule','siteUrl','data','public','stream','cos\x20->\x20err:\x20','aliOssAccessKeyId','文件已上传到\x20Chevereto。访问\x20URL:\x20','https://$2','extension','dev/','Logger','BAD_REQUEST','metadata','slice','无法识别文件类型，请检查文件','获取图片资源失败，请重新试试吧！','1pbxswQ','HttpStatus','tencentCosStatus','getBufferFromUrl','append','mkdir','bat','base64','文件已上传到本地存储。访问\x20URL:\x20','tencentCos','上传配置状态\x20-\x20腾讯云:本地存储:\x20','上传图片失败[ten]','message','https://','Location','error','TRUE','ali\x20开始上传','cheveretoUploadPath','path','acceleratedDomain','chevereto','key','657900UBMAhi','localStorageStatus','cheveretoKey','random','removeSpecialCharacters','aliOssBucket','STANDARD','stringify','default','ISDEV','promises','title','文件已上传到阿里云\x20OSS。访问\x20URL:\x20','writeFile','getConfigs','@nestjs/common','others','当前已开启全球加速----------------->','get','tencent','mime-types','../../common/utils','url','log','includes','aliOssStatus','使用本地存储上传文件','toString','HttpException','file','cos-nodejs-sdk-v5','ali-oss','join','form-data','uploadFileByTencentCos','cosRegion','uploadFileByChevereto','未配置任何上传方式'];_0x41e4=function(){return _0x5a75fd;};return _0x41e4();}