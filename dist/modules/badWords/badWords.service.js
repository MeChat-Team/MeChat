'use strict';const _0x2d4e77=_0x5a83;(function(_0x539db8,_0xb7167f){const _0x1d154d=_0x5a83,_0x51cae8=_0x539db8();while(!![]){try{const _0x59c71e=parseInt(_0x1d154d(0x1b2))/0x1*(-parseInt(_0x1d154d(0x1b1))/0x2)+parseInt(_0x1d154d(0x1ff))/0x3+parseInt(_0x1d154d(0x1c3))/0x4+parseInt(_0x1d154d(0x200))/0x5*(parseInt(_0x1d154d(0x20d))/0x6)+-parseInt(_0x1d154d(0x1cf))/0x7+parseInt(_0x1d154d(0x206))/0x8+parseInt(_0x1d154d(0x1fa))/0x9*(parseInt(_0x1d154d(0x1c8))/0xa);if(_0x59c71e===_0xb7167f)break;else _0x51cae8['push'](_0x51cae8['shift']());}catch(_0x57e170){_0x51cae8['push'](_0x51cae8['shift']());}}}(_0x52c6,0xac610));function _0x5a83(_0x4aeb7e,_0x76fb26){const _0x52c6b7=_0x52c6();return _0x5a83=function(_0x5a830a,_0x1b8d8d){_0x5a830a=_0x5a830a-0x1a7;let _0x22d22e=_0x52c6b7[_0x5a830a];return _0x22d22e;},_0x5a83(_0x4aeb7e,_0x76fb26);}var __decorate=this&&this['__decorate']||function(_0x31789a,_0x3bb834,_0x5566d1,_0x5ba7f5){const _0x119d57=_0x5a83;var _0x2aa1f4=arguments['length'],_0x2c140c=_0x2aa1f4<0x3?_0x3bb834:_0x5ba7f5===null?_0x5ba7f5=Object[_0x119d57(0x1f2)](_0x3bb834,_0x5566d1):_0x5ba7f5,_0x26eb0a;if(typeof Reflect==='object'&&typeof Reflect[_0x119d57(0x1ec)]==='function')_0x2c140c=Reflect[_0x119d57(0x1ec)](_0x31789a,_0x3bb834,_0x5566d1,_0x5ba7f5);else{for(var _0x5b81dd=_0x31789a[_0x119d57(0x1d1)]-0x1;_0x5b81dd>=0x0;_0x5b81dd--)if(_0x26eb0a=_0x31789a[_0x5b81dd])_0x2c140c=(_0x2aa1f4<0x3?_0x26eb0a(_0x2c140c):_0x2aa1f4>0x3?_0x26eb0a(_0x3bb834,_0x5566d1,_0x2c140c):_0x26eb0a(_0x3bb834,_0x5566d1))||_0x2c140c;}return _0x2aa1f4>0x3&&_0x2c140c&&Object['defineProperty'](_0x3bb834,_0x5566d1,_0x2c140c),_0x2c140c;},__metadata=this&&this[_0x2d4e77(0x1fd)]||function(_0x2bfbe5,_0x47da4a){const _0x287a16=_0x2d4e77;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x287a16(0x1fe))return Reflect[_0x287a16(0x1d5)](_0x2bfbe5,_0x47da4a);},__param=this&&this[_0x2d4e77(0x1b4)]||function(_0x3e0089,_0x2fc8fc){return function(_0x4515e9,_0x49cd2d){_0x2fc8fc(_0x4515e9,_0x49cd2d,_0x3e0089);};};function _0x52c6(){const _0x18fe36=['删除敏感词成功','自定义检测','userId','6yMhDRD','289709BSesJF','stringify','__param','BAD_REQUEST','extractContent','findOne','checkBadWordsByConfig','design:paramtypes','find','baiduTextAccessToken','findAndCount','application/x-www-form-urlencoded','forEach','@nestjs/typeorm','badWords','avatar','createQueryBuilder','119208qdLQPp','updateBadWords','Repository','where','post','30TwiVLb','InjectRepository','delete','affected','HttpStatus','queryBadWords','敏感词不存在,请检查您的提交信息','9738372QBjUko','status','length','百度云检测','DESC','./badWords.entity','metadata','Injectable','violationLogEntity','baidu','default','application/json','更新敏感词成功','的信息、我们已对您账号进行标记、请合规使用！','百度文本检测出现错误、请查看配置信息:\x20','customSensitiveWords','loadBadWords','super','set','defineProperty','的内容、我们已对您的账户进行标记、请合规使用！','@nestjs/common','BadWordsService','../globalConfig/globalConfig.service','update','自定义','email','recordUserBadWords','save','decorate','map','onModuleInit','ASC','您提交的信息中包含','Like','getOwnPropertyDescriptor','userEntity','ViolationLogEntity','hideString','username','typeOriginCn','axios','addBadWord','2377530NAKEnY','user','word','__metadata','function','233328WrnjJy','185qIDmMa','***','join','GlobalConfigService','./violationLog.entity','id\x20=\x20:userId','11264848jaYlul','log','HttpException','formarTips','delBadWords','getSensitiveConfig','includes','106734TSDlQw','../user/user.entity','msg','敏感词已经存在了、请勿重复添加','match','violation','UserEntity','baiduCheckBadWords','badWordsEntity','userInfo','globalConfigService'];_0x52c6=function(){return _0x18fe36;};return _0x52c6();}Object[_0x2d4e77(0x1e2)](exports,'__esModule',{'value':!![]}),exports[_0x2d4e77(0x1e5)]=void 0x0;const utils_1=require('../../common/utils'),common_1=require(_0x2d4e77(0x1e4)),typeorm_1=require(_0x2d4e77(0x1bf)),axios_1=require(_0x2d4e77(0x1f8)),typeorm_2=require('typeorm'),globalConfig_service_1=require(_0x2d4e77(0x1e6)),user_entity_1=require(_0x2d4e77(0x20e)),badWords_entity_1=require(_0x2d4e77(0x1d4)),violationLog_entity_1=require(_0x2d4e77(0x204));let BadWordsService=class BadWordsService{constructor(_0x14105d,_0x3409a6,_0x2ab3ef,_0x299899){const _0x32b88a=_0x2d4e77;this[_0x32b88a(0x1ab)]=_0x14105d,this[_0x32b88a(0x1d7)]=_0x3409a6,this['userEntity']=_0x2ab3ef,this[_0x32b88a(0x1ad)]=_0x299899,this[_0x32b88a(0x1c0)]=[];}async[_0x2d4e77(0x1ee)](){const _0x4e721d=_0x2d4e77;this[_0x4e721d(0x1df)]();}async[_0x2d4e77(0x1de)](_0x1e8112,_0x3d7d30){const _0x2ea256=_0x2d4e77,_0x1f1a3e=[];for(let _0x1d1aaa=0x0;_0x1d1aaa<this[_0x2ea256(0x1c0)][_0x2ea256(0x1d1)];_0x1d1aaa++){const _0x2835ec=this[_0x2ea256(0x1c0)][_0x1d1aaa];_0x1e8112[_0x2ea256(0x20c)](_0x2835ec)&&_0x1f1a3e['push'](_0x2835ec);}return _0x1f1a3e['length']&&await this[_0x2ea256(0x1ea)](_0x3d7d30,_0x1e8112,_0x1f1a3e,[_0x2ea256(0x1e8)],_0x2ea256(0x1af)),_0x1f1a3e;}async['checkBadWords'](_0x5f5280,_0x13321d){const _0x5e5758=_0x2d4e77,_0x38fd4a=await this[_0x5e5758(0x1ad)][_0x5e5758(0x20b)]();return _0x38fd4a&&await this['checkBadWordsByConfig'](_0x5f5280,_0x38fd4a,_0x13321d),await this[_0x5e5758(0x1de)](_0x5f5280,_0x13321d);}async[_0x2d4e77(0x1b8)](_0x2d0bb0,_0x5c6c69,_0x51f857){const _0x13c1fa=_0x2d4e77,{useType:_0xee7edf}=_0x5c6c69;_0xee7edf===_0x13c1fa(0x1d8)&&await this[_0x13c1fa(0x1aa)](_0x2d0bb0,_0x5c6c69[_0x13c1fa(0x1bb)],_0x51f857);}[_0x2d4e77(0x1b6)](_0x43d8fa){const _0x59097f=_0x2d4e77,_0xd7276f=/存在(.*?)不合规/,_0x102bc7=_0x43d8fa[_0x59097f(0x1a7)](_0xd7276f);return _0x102bc7?_0x102bc7[0x1]:'';}async[_0x2d4e77(0x1aa)](_0x198068,_0x405964,_0xb86cb2){const _0x45516a=_0x2d4e77;if(!_0x405964)return;const _0x28e878='https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token='+_0x405964+'}',_0xf22dd9={'Content-Type':_0x45516a(0x1bd),'Accept':_0x45516a(0x1da)},_0xd5581c=await axios_1[_0x45516a(0x1d9)][_0x45516a(0x1c7)](_0x28e878,{'text':_0x198068},{'headers':_0xf22dd9}),{conclusion:_0x4f989f,error_code:_0x340aa3,error_msg:_0x2f3d60,conclusionType:_0x450f58,data:_0x2628fe}=_0xd5581c['data'];_0x340aa3&&console[_0x45516a(0x207)](_0x45516a(0x1dd),_0x2f3d60);if(_0x450f58!==0x1){const _0xd49f90=[...new Set(_0x2628fe[_0x45516a(0x1ed)](_0x498ee7=>this[_0x45516a(0x1b6)](_0x498ee7[_0x45516a(0x20f)])))];await this[_0x45516a(0x1ea)](_0xb86cb2,_0x198068,[_0x45516a(0x201)],_0xd49f90,_0x45516a(0x1d2));const _0x3049f6=_0x45516a(0x1f0)+_0xd49f90[_0x45516a(0x202)](',')+_0x45516a(0x1e3);throw new common_1[(_0x45516a(0x208))](_0x3049f6,common_1['HttpStatus'][_0x45516a(0x1b5)]);}}[_0x2d4e77(0x209)](_0x231cec){const _0x1593b7=_0x2d4e77,_0x1b1310=_0x231cec[_0x1593b7(0x1ed)](_0x7d9857=>_0x7d9857['category']),_0x46e124=[...new Set(_0x1b1310)];return'您提交的内容中包含'+_0x46e124[_0x1593b7(0x202)](',')+_0x1593b7(0x1dc);}async[_0x2d4e77(0x1df)](){const _0x1a535a=_0x2d4e77,_0x3cae0b=await this[_0x1a535a(0x1ab)]['find']({'where':{'status':0x1},'select':[_0x1a535a(0x1fc)]});this[_0x1a535a(0x1c0)]=_0x3cae0b[_0x1a535a(0x1ed)](_0x417809=>_0x417809[_0x1a535a(0x1fc)]);}async[_0x2d4e77(0x1cd)](_0x2266db){const _0x2ebab4=_0x2d4e77,{page:page=0x1,size:size=0x1f4,word:_0x41115d,status:_0xeee188}=_0x2266db,_0x389d7c={};[0x0,0x1,'0','1'][_0x2ebab4(0x20c)](_0xeee188)&&(_0x389d7c[_0x2ebab4(0x1d0)]=_0xeee188),_0x41115d&&(_0x389d7c[_0x2ebab4(0x1fc)]=(0x0,typeorm_2[_0x2ebab4(0x1f1)])('%'+_0x41115d+'%'));const [_0x412ae7,_0x1b2104]=await this['badWordsEntity'][_0x2ebab4(0x1bc)]({'where':_0x389d7c,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x2ebab4(0x1ef)}});return{'rows':_0x412ae7,'count':_0x1b2104};}async[_0x2d4e77(0x20a)](_0xba18b9){const _0x194a4c=_0x2d4e77,_0x30dd2d=await this[_0x194a4c(0x1ab)]['findOne']({'where':{'id':_0xba18b9['id']}});if(!_0x30dd2d)throw new common_1[(_0x194a4c(0x208))](_0x194a4c(0x1ce),common_1[_0x194a4c(0x1cc)][_0x194a4c(0x1b5)]);const _0x2ef01f=await this['badWordsEntity'][_0x194a4c(0x1ca)]({'id':_0xba18b9['id']});if(_0x2ef01f[_0x194a4c(0x1cb)]>0x0)return await this[_0x194a4c(0x1df)](),_0x194a4c(0x1ae);else throw new common_1[(_0x194a4c(0x208))]('删除敏感词失败',common_1[_0x194a4c(0x1cc)][_0x194a4c(0x1b5)]);}async[_0x2d4e77(0x1c4)](_0x1cbbc7){const _0x2e430e=_0x2d4e77,{id:_0x2151be,word:_0x7a60ad,status:_0x2035f8}=_0x1cbbc7,_0x5bc4f1=await this['badWordsEntity'][_0x2e430e(0x1b7)]({'where':{'word':_0x7a60ad}});if(_0x5bc4f1)throw new common_1[(_0x2e430e(0x208))](_0x2e430e(0x210),common_1[_0x2e430e(0x1cc)]['BAD_REQUEST']);const _0x3be77b=await this[_0x2e430e(0x1ab)]['update']({'id':_0x2151be},{'word':_0x7a60ad,'status':_0x2035f8});if(_0x3be77b[_0x2e430e(0x1cb)]>0x0)return await this[_0x2e430e(0x1df)](),_0x2e430e(0x1db);else throw new common_1[(_0x2e430e(0x208))]('更新敏感词失败',common_1[_0x2e430e(0x1cc)][_0x2e430e(0x1b5)]);}async[_0x2d4e77(0x1f9)](_0x1a4659){const _0x183246=_0x2d4e77,{word:_0x29208f}=_0x1a4659,_0x5007aa=await this['badWordsEntity'][_0x183246(0x1b7)]({'where':{'word':_0x29208f}});if(_0x5007aa)throw new common_1['HttpException']('敏感词已存在,请检查您的提交信息',common_1[_0x183246(0x1cc)][_0x183246(0x1b5)]);return await this[_0x183246(0x1ab)][_0x183246(0x1eb)]({'word':_0x29208f}),await this['loadBadWords'](),'添加敏感词成功';}async[_0x2d4e77(0x1ea)](_0x297cd8,_0x43ef3b,_0x579949,_0x4e0934,_0x5b8723){const _0x336f05=_0x2d4e77,_0xdf7ce2={'userId':_0x297cd8,'content':_0x43ef3b,'words':JSON[_0x336f05(0x1b3)](_0x579949),'typeCn':JSON[_0x336f05(0x1b3)](_0x4e0934),'typeOriginCn':_0x5b8723};try{await this[_0x336f05(0x1f3)][_0x336f05(0x1c2)]()[_0x336f05(0x1e7)](user_entity_1[_0x336f05(0x1a9)])[_0x336f05(0x1e1)]({'violationCount':()=>'violationCount\x20+\x201'})[_0x336f05(0x1c6)](_0x336f05(0x205),{'userId':_0x297cd8})['execute'](),await this[_0x336f05(0x1d7)][_0x336f05(0x1eb)](_0xdf7ce2);}catch(_0x50f4d0){console[_0x336f05(0x207)]('error:\x20',_0x50f4d0);}}async[_0x2d4e77(0x1a8)](_0x368cfe,_0x346906){const _0x109bc0=_0x2d4e77,{role:_0x5ec64d}=_0x368cfe[_0x109bc0(0x1fb)],{page:page=0x1,size:size=0xa,userId:_0x3d28a3,typeOriginCn:_0x2c8f9d}=_0x346906,_0x25661f={};_0x3d28a3&&(_0x25661f['userId']=_0x3d28a3),_0x2c8f9d&&(_0x25661f[_0x109bc0(0x1f7)]=_0x2c8f9d);const [_0xd0b782,_0x93332]=await this[_0x109bc0(0x1d7)]['findAndCount']({'where':_0x25661f,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x109bc0(0x1d3)}}),_0x376108=[...new Set(_0xd0b782[_0x109bc0(0x1ed)](_0x4d85aa=>_0x4d85aa['userId']))],_0x3d94b8=await this[_0x109bc0(0x1f3)]['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x376108)},'select':['id',_0x109bc0(0x1c1),_0x109bc0(0x1f6),'email','violationCount',_0x109bc0(0x1d0)]});return _0xd0b782[_0x109bc0(0x1be)](_0x2a234f=>{const _0x414c4c=_0x109bc0,_0x264c3d=_0x3d94b8[_0x414c4c(0x1ba)](_0x35c418=>_0x35c418['id']===_0x2a234f[_0x414c4c(0x1b0)])||{};_0x5ec64d!==_0x414c4c(0x1e0)&&(_0x264c3d[_0x414c4c(0x1e9)]=(0x0,utils_1[_0x414c4c(0x1f5)])(_0x264c3d[_0x414c4c(0x1e9)])),_0x2a234f[_0x414c4c(0x1ac)]=_0x264c3d;}),{'rows':_0xd0b782,'count':_0x93332};}};BadWordsService=__decorate([(0x0,common_1[_0x2d4e77(0x1d6)])(),__param(0x0,(0x0,typeorm_1[_0x2d4e77(0x1c9)])(badWords_entity_1['BadWordsEntity'])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(violationLog_entity_1[_0x2d4e77(0x1f4)])),__param(0x2,(0x0,typeorm_1[_0x2d4e77(0x1c9)])(user_entity_1[_0x2d4e77(0x1a9)])),__metadata(_0x2d4e77(0x1b9),[typeorm_2['Repository'],typeorm_2[_0x2d4e77(0x1c5)],typeorm_2[_0x2d4e77(0x1c5)],globalConfig_service_1[_0x2d4e77(0x203)]])],BadWordsService),exports[_0x2d4e77(0x1e5)]=BadWordsService;