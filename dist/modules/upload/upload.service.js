'use strict';function _0x4b0d(){const _0x5a413e=['508921yZumIF','globalConfigService','使用\x20Chevereto\x20上传文件','cheveretoUploadPath','design:paramtypes','UploadService','文件已上传到\x20Chevereto。访问\x20URL:\x20','object','endsWith','uploadFileFromUrl','https://','文件已上传到阿里云\x20OSS。访问\x20URL:\x20',',\x20阿里云:\x20','../../common/utils','headers','获取图片资源失败，请重新试试吧！','aliOssAccessKeyId','uploadFile','defineProperty','bat','append','当前已开启全球加速----------------->','base64','file/','substring','ali-oss','../globalConfig/globalConfig.service','path','getOwnPropertyDescriptor','HttpStatus','aliOssRegion','使用腾讯云\x20COS\x20上传文件','tencent','uploadFileByTencentCos','log','title','cos-nodejs-sdk-v5','removeSpecialCharacters','上传图片失败[Chevereto]','status','get','无法识别文件类型，请检查文件','uploadFileByChevereto','aliOssAccessKeySecret','非法路径，禁止访问目录之外的位置','then','writeFile','join','上传图片失败[Chevereto|buffer]\x20-->\x20','onModuleInit','Injectable','env','url','uploadFileToLocal','HttpException','file','mime-types','上传图片失败[ten]','getConfigs','TRUE','getBufferFromUrl','上传图片失败[ali]','extension','php','getUploadType','decorate','GlobalConfigService','文件保存失败:\x20','axios','767420ZLovbK','cheveretoStatus','includes','length','error','请先前往后台配置上传图片的方式','使用阿里云\x20OSS\x20上传文件','tencentCosStatus','formatUrl','startsWith','1121408ZWYxPa','cosSecretId','STANDARD','data','message','chevereto','content-type','ISDEV',',\x20Chevereto:\x20','public','code','promises','post','71975ktObdn','上传配置状态\x20-\x20腾讯云:本地存储:\x20','getUploadConfig','未配置任何上传方式','dev/','cosSecretKey','__decorate','上传失败:\x20','form-data','metadata','getTime','ali','BAD_REQUEST','562458htghiS','cwd','localStorageStatus','使用本地存储上传文件','replace','@nestjs/common','不允许上传此类型的文件','944061mGWsgn','image','5150061MACMEE','__esModule','response','https://$2','siteUrl','aliOssStatus','source','normalize','tencentCos','cheveretoKey','Chevereto\x20--->\x20res','toString','function','slice','cosBucket','cos\x20->\x20err:\x20','others','创建目录失败:\x20','Logger','basename','random','default','uploadFileByAliOss','acceleratedDomain','put'];_0x4b0d=function(){return _0x5a413e;};return _0x4b0d();}const _0x56527e=_0x530a;(function(_0xf17128,_0x59171a){const _0x21861e=_0x530a,_0x26dd1a=_0xf17128();while(!![]){try{const _0x48a67c=parseInt(_0x21861e(0x177))/0x1+parseInt(_0x21861e(0x1c6))/0x2+parseInt(_0x21861e(0x15c))/0x3+-parseInt(_0x21861e(0x1bc))/0x4+-parseInt(_0x21861e(0x148))/0x5+-parseInt(_0x21861e(0x155))/0x6+-parseInt(_0x21861e(0x15e))/0x7;if(_0x48a67c===_0x59171a)break;else _0x26dd1a['push'](_0x26dd1a['shift']());}catch(_0x5be307){_0x26dd1a['push'](_0x26dd1a['shift']());}}}(_0x4b0d,0x551b4));var __decorate=this&&this[_0x56527e(0x14e)]||function(_0x1d92b2,_0x38dcbd,_0x282e6c,_0x2adb9a){const _0x337687=_0x56527e;var _0x213a02=arguments[_0x337687(0x1bf)],_0x2eb513=_0x213a02<0x3?_0x38dcbd:_0x2adb9a===null?_0x2adb9a=Object[_0x337687(0x193)](_0x38dcbd,_0x282e6c):_0x2adb9a,_0x7f698c;if(typeof Reflect==='object'&&typeof Reflect[_0x337687(0x1b8)]===_0x337687(0x16a))_0x2eb513=Reflect['decorate'](_0x1d92b2,_0x38dcbd,_0x282e6c,_0x2adb9a);else{for(var _0x230222=_0x1d92b2[_0x337687(0x1bf)]-0x1;_0x230222>=0x0;_0x230222--)if(_0x7f698c=_0x1d92b2[_0x230222])_0x2eb513=(_0x213a02<0x3?_0x7f698c(_0x2eb513):_0x213a02>0x3?_0x7f698c(_0x38dcbd,_0x282e6c,_0x2eb513):_0x7f698c(_0x38dcbd,_0x282e6c))||_0x2eb513;}return _0x213a02>0x3&&_0x2eb513&&Object[_0x337687(0x189)](_0x38dcbd,_0x282e6c,_0x2eb513),_0x2eb513;},__metadata=this&&this['__metadata']||function(_0x539ed3,_0x37813c){const _0x2f0ba0=_0x56527e;if(typeof Reflect===_0x2f0ba0(0x17e)&&typeof Reflect[_0x2f0ba0(0x151)]===_0x2f0ba0(0x16a))return Reflect[_0x2f0ba0(0x151)](_0x539ed3,_0x37813c);};Object[_0x56527e(0x189)](exports,_0x56527e(0x15f),{'value':!![]}),exports[_0x56527e(0x17c)]=void 0x0;const utils_1=require(_0x56527e(0x184)),common_1=require(_0x56527e(0x15a)),ALIOSS=require(_0x56527e(0x190)),axios_1=require(_0x56527e(0x1bb)),TENCENTCOS=require(_0x56527e(0x19b)),FormData=require(_0x56527e(0x150)),fs_1=require('fs'),mime=require(_0x56527e(0x1af)),path=require(_0x56527e(0x192)),streamToBuffer=require('stream-to-buffer'),globalConfig_service_1=require(_0x56527e(0x191)),blacklist=['exe','sh',_0x56527e(0x18a),'js',_0x56527e(0x1b6),'py'];let UploadService=class UploadService{constructor(_0x325c89){this['globalConfigService']=_0x325c89;}[_0x56527e(0x1a8)](){}async[_0x56527e(0x188)](_0x31410f,_0xcb44ad=_0x56527e(0x16e)){const _0x463a2d=_0x56527e,{buffer:_0x26b508,mimetype:_0x2642a1}=_0x31410f;process[_0x463a2d(0x1aa)][_0x463a2d(0x1cd)]===_0x463a2d(0x1b2)&&(_0xcb44ad=_0x463a2d(0x14c)+_0xcb44ad);const _0x435e24=mime[_0x463a2d(0x1b5)](_0x2642a1)||'';!_0x435e24&&common_1['Logger'][_0x463a2d(0x1c0)](_0x463a2d(0x1a0),'UploadService');if(blacklist[_0x463a2d(0x1be)](_0x435e24['toLowerCase']())){common_1[_0x463a2d(0x170)]['error'](_0x463a2d(0x15b),'UploadService');throw new Error(_0x463a2d(0x15b));}const _0x39e92a=new Date(),_0x2dd537=_0x39e92a[_0x463a2d(0x152)](),_0x1213d1=Math[_0x463a2d(0x172)]()[_0x463a2d(0x169)](0x24)[_0x463a2d(0x18f)](0x2,0x6),_0x50f846=_0x2dd537+'_'+_0x1213d1+'.'+_0x435e24,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0,localStorageStatus:localStorageStatus=0x0}=await this[_0x463a2d(0x178)]['getConfigs']([_0x463a2d(0x1c3),_0x463a2d(0x163),_0x463a2d(0x1bd),_0x463a2d(0x157)]);common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x149)+localStorageStatus+',\x20'+tencentCosStatus+_0x463a2d(0x183)+aliOssStatus+_0x463a2d(0x143)+cheveretoStatus,_0x463a2d(0x17c));if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus)&&!Number(localStorageStatus)){common_1[_0x463a2d(0x170)][_0x463a2d(0x1c0)](_0x463a2d(0x14b),'UploadService');throw new common_1[(_0x463a2d(0x1ad))](_0x463a2d(0x1c1),common_1['HttpStatus'][_0x463a2d(0x154)]);}try{if(Number(localStorageStatus)){common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x158),'UploadService');const _0x1af4ca=await this[_0x463a2d(0x1ac)]({'filename':_0x50f846,'buffer':_0x26b508,'dir':_0xcb44ad});return common_1['Logger'][_0x463a2d(0x199)]('文件已上传到本地存储。访问\x20URL:\x20'+_0x1af4ca,_0x463a2d(0x17c)),_0x1af4ca;}if(Number(tencentCosStatus)){common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x196),'UploadService');const _0x411e0a=await this[_0x463a2d(0x198)]({'filename':_0x50f846,'buffer':_0x26b508,'dir':_0xcb44ad});return common_1[_0x463a2d(0x170)][_0x463a2d(0x199)]('文件已上传到腾讯云\x20COS。访问\x20URL:\x20'+_0x411e0a,_0x463a2d(0x17c)),_0x411e0a;}if(Number(aliOssStatus)){common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x1c2),_0x463a2d(0x17c));const _0x424f69=await this[_0x463a2d(0x174)]({'filename':_0x50f846,'buffer':_0x26b508,'dir':_0xcb44ad});return common_1['Logger'][_0x463a2d(0x199)](_0x463a2d(0x182)+_0x424f69,'UploadService'),_0x424f69;}if(Number(cheveretoStatus)){common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x179),_0x463a2d(0x17c));const _0x331e7c=await this[_0x463a2d(0x1a1)]({'filename':_0x50f846,'buffer':_0x26b508[_0x463a2d(0x169)](_0x463a2d(0x18d))});return common_1[_0x463a2d(0x170)][_0x463a2d(0x199)](_0x463a2d(0x17d)+_0x331e7c,'UploadService'),_0x331e7c;}}catch(_0x30144d){common_1['Logger'][_0x463a2d(0x1c0)](_0x463a2d(0x14f)+_0x30144d[_0x463a2d(0x1ca)],_0x463a2d(0x17c));throw _0x30144d;}}async[_0x56527e(0x1b7)](){const _0x4ecda0=_0x56527e,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x4ecda0(0x178)]['getConfigs'](['tencentCosStatus',_0x4ecda0(0x163),'cheveretoStatus']);if(Number(tencentCosStatus))return _0x4ecda0(0x197);if(Number(aliOssStatus))return _0x4ecda0(0x153);if(Number(cheveretoStatus))return'chevereto';}async[_0x56527e(0x180)]({url:_0x36bb1f,dir:dir=_0x56527e(0x16e)}){const _0x5d9e46=_0x56527e;process[_0x5d9e46(0x1aa)][_0x5d9e46(0x1cd)]===_0x5d9e46(0x1b2)&&(dir='dev/'+dir);const {buffer:_0x1538e4,mimeType:_0x3c5e5d}=await this[_0x5d9e46(0x1b3)](_0x36bb1f);return await this['uploadFile']({'buffer':_0x1538e4,'mimetype':_0x3c5e5d},dir);}async[_0x56527e(0x198)]({filename:_0x29d29b,buffer:_0x1701f8,dir:_0x8c78af}){const _0x390ff7=_0x56527e,{Bucket:_0x37f436,Region:_0xf224fa,SecretId:_0x386c8a,SecretKey:_0x53efbe}=await this[_0x390ff7(0x14a)](_0x390ff7(0x197));this['tencentCos']=new TENCENTCOS({'SecretId':_0x386c8a,'SecretKey':_0x53efbe,'FileParallelLimit':0xa});try{return new Promise(async(_0x3cb255,_0x29121a)=>{const _0x2313e2=_0x390ff7;this[_0x2313e2(0x166)]['putObject']({'Bucket':(0x0,utils_1[_0x2313e2(0x19c)])(_0x37f436),'Region':(0x0,utils_1['removeSpecialCharacters'])(_0xf224fa),'Key':_0x8c78af+'/'+_0x29d29b,'StorageClass':_0x2313e2(0x1c8),'Body':_0x1701f8},async(_0x34ca61,_0x1109e9)=>{const _0x49c61f=_0x2313e2;if(_0x34ca61)return console[_0x49c61f(0x199)](_0x49c61f(0x16d),_0x34ca61),_0x29121a(_0x34ca61);let _0x21f9dc=_0x1109e9['Location']['replace'](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x49c61f(0x161));const {acceleratedDomain:_0x2581e6}=await this[_0x49c61f(0x14a)]('tencent');return _0x2581e6&&(_0x21f9dc=_0x21f9dc[_0x49c61f(0x159)](/^(https:\/\/[^/]+)(\/.*)$/,'https://'+_0x2581e6+'$2'),console['log'](_0x49c61f(0x18c),_0x21f9dc)),_0x3cb255(_0x21f9dc);});});}catch(_0x40aecb){console[_0x390ff7(0x199)]('error:\x20',_0x40aecb);throw new common_1[(_0x390ff7(0x1ad))](_0x390ff7(0x1b0),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x56527e(0x174)]({filename:_0x153a1a,buffer:_0x31f7e9,dir:_0x245357}){const _0x37c98c=_0x56527e,{region:_0x26fba9,bucket:_0x8f0141,accessKeyId:_0x523a55,accessKeySecret:_0x29e48e}=await this[_0x37c98c(0x14a)](_0x37c98c(0x153)),_0x1b6df8=new ALIOSS({'region':(0x0,utils_1['removeSpecialCharacters'])(_0x26fba9),'accessKeyId':_0x523a55,'accessKeySecret':_0x29e48e,'bucket':(0x0,utils_1[_0x37c98c(0x19c)])(_0x8f0141)});try{return console[_0x37c98c(0x199)]('ali\x20开始上传'),new Promise((_0x30b1b2,_0x22af24)=>{const _0x3063e0=_0x37c98c;_0x1b6df8[_0x3063e0(0x176)](_0x245357+'/'+_0x153a1a,_0x31f7e9)[_0x3063e0(0x1a4)](async _0x38fdb9=>{const _0x149a3f=_0x3063e0,{acceleratedDomain:_0x270f84}=await this[_0x149a3f(0x14a)](_0x149a3f(0x153));_0x270f84&&(_0x38fdb9['url']=_0x38fdb9[_0x149a3f(0x1ab)][_0x149a3f(0x159)](/^(https:\/\/[^/]+)(\/.*)$/,_0x149a3f(0x181)+_0x270f84+'$2'),console[_0x149a3f(0x199)](_0x149a3f(0x18c),_0x38fdb9['url'])),_0x30b1b2(_0x38fdb9[_0x149a3f(0x1ab)]);})['catch'](_0x4872b5=>{_0x22af24(_0x4872b5);});});}catch(_0x521042){throw new common_1[(_0x37c98c(0x1ad))](_0x37c98c(0x1b4),common_1['HttpStatus'][_0x37c98c(0x154)]);}}async[_0x56527e(0x1ac)]({filename:_0x2442ad,buffer:_0xf2ac49,dir:dir='others'}){const _0x17d356=_0x56527e,_0x35bf6c=path[_0x17d356(0x165)](dir)[_0x17d356(0x159)](/^(\.\.(\/|\\|$))+/,''),_0x4e2218=path[_0x17d356(0x171)](_0x2442ad),_0x3d8900=process[_0x17d356(0x156)](),_0x5d2a84=path[_0x17d356(0x1a6)](_0x3d8900,'public',_0x17d356(0x1ae),_0x35bf6c),_0x3cf3d4=path[_0x17d356(0x1a6)](_0x5d2a84,_0x4e2218);if(!_0x3cf3d4[_0x17d356(0x1c5)](path[_0x17d356(0x1a6)](_0x3d8900,_0x17d356(0x144),_0x17d356(0x1ae))))throw new Error(_0x17d356(0x1a3));try{await fs_1[_0x17d356(0x146)]['mkdir'](_0x5d2a84,{'recursive':!![]});}catch(_0x406e12){common_1['Logger']['error'](_0x17d356(0x16f)+_0x5d2a84,_0x406e12);throw _0x406e12;}try{await fs_1[_0x17d356(0x146)][_0x17d356(0x1a5)](_0x3cf3d4,_0xf2ac49,{'mode':0x124});}catch(_0x535ab0){common_1[_0x17d356(0x170)][_0x17d356(0x1c0)](_0x17d356(0x1ba)+_0x3cf3d4,_0x535ab0);throw _0x535ab0;}let _0x5145aa=_0x17d356(0x18e)+_0x35bf6c+'/'+_0x4e2218;const _0x16bac8=await this['globalConfigService'][_0x17d356(0x1b1)]([_0x17d356(0x162)]);if(_0x16bac8){const _0x36e672=(0x0,utils_1[_0x17d356(0x1c4)])(_0x16bac8);_0x5145aa=_0x36e672+'/'+_0x5145aa;}return _0x5145aa;}async[_0x56527e(0x1a1)]({filename:filename='',buffer:_0x35dc34}){const _0x1d0d9f=_0x56527e;var _0x3676d0;const {key:_0x2c38dd,uploadPath:_0x385d00}=await this[_0x1d0d9f(0x14a)](_0x1d0d9f(0x1cb));let _0x1ddf14=_0x385d00[_0x1d0d9f(0x17f)]('/')?_0x385d00[_0x1d0d9f(0x16b)](0x0,-0x1):_0x385d00;const _0x591729=new FormData(),_0x338a25=_0x35dc34[_0x1d0d9f(0x169)](_0x1d0d9f(0x18d));_0x591729[_0x1d0d9f(0x18b)](_0x1d0d9f(0x164),_0x338a25),_0x591729['append']('key',_0x2c38dd),_0x591729[_0x1d0d9f(0x18b)](_0x1d0d9f(0x19a),filename);try{const _0x2a3596=await axios_1['default'][_0x1d0d9f(0x147)](_0x1ddf14,_0x591729,{'headers':{'X-API-Key':_0x2c38dd}});if((_0x2a3596===null||_0x2a3596===void 0x0?void 0x0:_0x2a3596[_0x1d0d9f(0x19e)])===0xc8)return _0x2a3596['data'][_0x1d0d9f(0x15d)]['url'];else console['log'](_0x1d0d9f(0x168),_0x2a3596===null||_0x2a3596===void 0x0?void 0x0:_0x2a3596[_0x1d0d9f(0x1c9)][_0x1d0d9f(0x145)],_0x2a3596===null||_0x2a3596===void 0x0?void 0x0:_0x2a3596[_0x1d0d9f(0x1c9)][_0x1d0d9f(0x1c0)][_0x1d0d9f(0x1ca)]),common_1[_0x1d0d9f(0x170)]['error'](_0x1d0d9f(0x19d),JSON['stringify'](_0x2a3596[_0x1d0d9f(0x1c9)]));}catch(_0x38cc12){console[_0x1d0d9f(0x199)]('error:\x20',_0x38cc12);throw new common_1['HttpException'](_0x1d0d9f(0x1a7)+((_0x3676d0=_0x38cc12[_0x1d0d9f(0x160)])===null||_0x3676d0===void 0x0?void 0x0:_0x3676d0[_0x1d0d9f(0x1c9)][_0x1d0d9f(0x1c0)][_0x1d0d9f(0x1ca)]),common_1[_0x1d0d9f(0x194)][_0x1d0d9f(0x154)]);}}async[_0x56527e(0x14a)](_0x4dfdb5){const _0x51ed86=_0x56527e;if(_0x4dfdb5===_0x51ed86(0x153)){const {aliOssRegion:_0x115807,aliOssBucket:_0x1196c5,aliOssAccessKeyId:_0x28b311,aliOssAccessKeySecret:_0xf6b5a2,aliOssAcceleratedDomain:_0x34c1d4}=await this['globalConfigService']['getConfigs']([_0x51ed86(0x195),'aliOssBucket',_0x51ed86(0x187),_0x51ed86(0x1a2),_0x51ed86(0x175)]);return{'region':_0x115807,'bucket':_0x1196c5,'accessKeyId':_0x28b311,'accessKeySecret':_0xf6b5a2,'acceleratedDomain':_0x34c1d4};}if(_0x4dfdb5===_0x51ed86(0x197)){const {cosBucket:_0x8e137c,cosRegion:_0x29d6ee,cosSecretId:_0x54fcf4,cosSecretKey:_0x116026,tencentCosAcceleratedDomain:_0x5526fb}=await this[_0x51ed86(0x178)][_0x51ed86(0x1b1)]([_0x51ed86(0x16c),'cosRegion',_0x51ed86(0x1c7),_0x51ed86(0x14d),'tencentCosAcceleratedDomain']);return{'Bucket':_0x8e137c,'Region':_0x29d6ee,'SecretId':_0x54fcf4,'SecretKey':_0x116026,'acceleratedDomain':_0x5526fb};}if(_0x4dfdb5==='chevereto'){const {cheveretoKey:_0x37ff07,cheveretoUploadPath:_0x301627}=await this['globalConfigService']['getConfigs']([_0x51ed86(0x167),_0x51ed86(0x17a)]);return{'key':_0x37ff07,'uploadPath':_0x301627};}}async[_0x56527e(0x1b3)](_0x6b584d){const _0x3093c7=_0x56527e,_0x2e695a=await axios_1[_0x3093c7(0x173)][_0x3093c7(0x19f)](_0x6b584d,{'responseType':'stream'}),_0x22c320=await new Promise((_0x1f2b9d,_0x16fd0d)=>{const _0x2a97f5=_0x3093c7;streamToBuffer(_0x2e695a[_0x2a97f5(0x1c9)],(_0x4d97d7,_0x5237ff)=>{const _0x2d4304=_0x2a97f5;_0x4d97d7?_0x16fd0d(new common_1[(_0x2d4304(0x1ad))](_0x2d4304(0x186),common_1['HttpStatus'][_0x2d4304(0x154)])):_0x1f2b9d(_0x5237ff);});}),_0x1eb01c=_0x2e695a[_0x3093c7(0x185)][_0x3093c7(0x1cc)];return{'buffer':_0x22c320,'mimeType':_0x1eb01c};}};function _0x530a(_0x44beaa,_0x6033ce){const _0x4b0db0=_0x4b0d();return _0x530a=function(_0x530adc,_0x31d21e){_0x530adc=_0x530adc-0x143;let _0x1d2b81=_0x4b0db0[_0x530adc];return _0x1d2b81;},_0x530a(_0x44beaa,_0x6033ce);}UploadService=__decorate([(0x0,common_1[_0x56527e(0x1a9)])(),__metadata(_0x56527e(0x17b),[globalConfig_service_1[_0x56527e(0x1b9)]])],UploadService),exports[_0x56527e(0x17c)]=UploadService;