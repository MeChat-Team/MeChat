'use strict';const _0x3a04f1=_0x10bb;(function(_0x5c72c9,_0x167641){const _0x50c168=_0x10bb,_0x2b1283=_0x5c72c9();while(!![]){try{const _0x41580c=parseInt(_0x50c168(0xee))/0x1+parseInt(_0x50c168(0x14f))/0x2+-parseInt(_0x50c168(0x11e))/0x3+parseInt(_0x50c168(0xf2))/0x4*(-parseInt(_0x50c168(0x11a))/0x5)+parseInt(_0x50c168(0xf3))/0x6*(parseInt(_0x50c168(0xe8))/0x7)+-parseInt(_0x50c168(0x148))/0x8*(parseInt(_0x50c168(0x153))/0x9)+parseInt(_0x50c168(0x10c))/0xa*(parseInt(_0x50c168(0x12e))/0xb);if(_0x41580c===_0x167641)break;else _0x2b1283['push'](_0x2b1283['shift']());}catch(_0x49877c){_0x2b1283['push'](_0x2b1283['shift']());}}}(_0xfac7,0xb57a7));var __decorate=this&&this[_0x3a04f1(0x101)]||function(_0x2c840b,_0x4c098b,_0x32a6aa,_0x47bb70){const _0x18f639=_0x3a04f1;var _0x6767f5=arguments['length'],_0x1ed455=_0x6767f5<0x3?_0x4c098b:_0x47bb70===null?_0x47bb70=Object[_0x18f639(0x113)](_0x4c098b,_0x32a6aa):_0x47bb70,_0x22b666;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x18f639(0x12d))_0x1ed455=Reflect[_0x18f639(0x137)](_0x2c840b,_0x4c098b,_0x32a6aa,_0x47bb70);else{for(var _0xc7f01f=_0x2c840b[_0x18f639(0xed)]-0x1;_0xc7f01f>=0x0;_0xc7f01f--)if(_0x22b666=_0x2c840b[_0xc7f01f])_0x1ed455=(_0x6767f5<0x3?_0x22b666(_0x1ed455):_0x6767f5>0x3?_0x22b666(_0x4c098b,_0x32a6aa,_0x1ed455):_0x22b666(_0x4c098b,_0x32a6aa))||_0x1ed455;}return _0x6767f5>0x3&&_0x1ed455&&Object['defineProperty'](_0x4c098b,_0x32a6aa,_0x1ed455),_0x1ed455;},__metadata=this&&this['__metadata']||function(_0x161d74,_0x592aeb){const _0x3db805=_0x3a04f1;if(typeof Reflect===_0x3db805(0x14b)&&typeof Reflect['metadata']===_0x3db805(0x12d))return Reflect[_0x3db805(0xe9)](_0x161d74,_0x592aeb);},__param=this&&this['__param']||function(_0x294eba,_0x48825a){return function(_0x56dd00,_0x2f2de3){_0x48825a(_0x56dd00,_0x2f2de3,_0x294eba);};};Object[_0x3a04f1(0xf8)](exports,_0x3a04f1(0x129),{'value':!![]}),exports[_0x3a04f1(0x146)]=void 0x0;function _0xfac7(){const _0x153d1f=['axios','findAndCount','BAD_REQUEST','baidu','userInfo','update','https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=','删除敏感词成功','HttpStatus','status','loadBadWords','BadWordsService','添加敏感词成功','1184xprmsC','getSensitiveConfig','./badWords.entity','object','Injectable','join','word','877864XTiRFQ','自定义','find','msg','50319ROukyV','更新敏感词失败','violation','31339UZlUie','metadata','自定义检测','Like','delBadWords','length','1402265rKgkCO','violationCount','application/x-www-form-urlencoded','id\x20=\x20:userId','4807856hUztPV','12mMXtQS','GlobalConfigService','的内容、我们已对您的账户进行标记、请合规使用！','../../common/utils','application/json','defineProperty','的信息、我们已对您账号进行标记、请合规使用！','您提交的内容中包含','baiduTextAccessToken','BadWordsEntity','delete','data','敏感词已经存在了、请勿重复添加','您提交的信息中包含','__decorate','post','email','queryBadWords','log','./violationLog.entity','敏感词不存在,请检查您的提交信息','userEntity','UserEntity','super','../user/user.entity','10jcmGhw','@nestjs/common','violationLogEntity','百度文本检测出现错误、请查看配置信息:\x20','stringify','recordUserBadWords','HttpException','getOwnPropertyDescriptor','updateBadWords','userId','map','ASC','execute','globalConfigService','5gFBJls','where','Repository','affected','657603qoSbYp','badWordsEntity','violationCount\x20+\x201','checkBadWordsByConfig','formarTips','hideString','DESC','findOne','user','createQueryBuilder','badWords','__esModule','set','更新敏感词成功','push','function','12559987qvynyQ','extractContent','design:paramtypes','ViolationLogEntity','onModuleInit','customSensitiveWords','InjectRepository','category','save','decorate','username','***','error:\x20'];_0xfac7=function(){return _0x153d1f;};return _0xfac7();}function _0x10bb(_0x40cb41,_0xeecb11){const _0xfac756=_0xfac7();return _0x10bb=function(_0x10bbc4,_0x3f98bb){_0x10bbc4=_0x10bbc4-0xe6;let _0x417f5b=_0xfac756[_0x10bbc4];return _0x417f5b;},_0x10bb(_0x40cb41,_0xeecb11);}const utils_1=require(_0x3a04f1(0xf6)),common_1=require(_0x3a04f1(0x10d)),typeorm_1=require('@nestjs/typeorm'),axios_1=require(_0x3a04f1(0x13b)),typeorm_2=require('typeorm'),globalConfig_service_1=require('../globalConfig/globalConfig.service'),user_entity_1=require(_0x3a04f1(0x10b)),badWords_entity_1=require(_0x3a04f1(0x14a)),violationLog_entity_1=require(_0x3a04f1(0x106));let BadWordsService=class BadWordsService{constructor(_0x1a8c0b,_0x310e76,_0x1ffc93,_0x93e77b){const _0x4baf7a=_0x3a04f1;this['badWordsEntity']=_0x1a8c0b,this['violationLogEntity']=_0x310e76,this[_0x4baf7a(0x108)]=_0x1ffc93,this[_0x4baf7a(0x119)]=_0x93e77b,this[_0x4baf7a(0x128)]=[];}async[_0x3a04f1(0x132)](){const _0x23eb96=_0x3a04f1;this[_0x23eb96(0x145)]();}async[_0x3a04f1(0x133)](_0x28a2b8,_0x22930b){const _0x57268d=_0x3a04f1,_0x31ad97=[];for(let _0xdd5de5=0x0;_0xdd5de5<this[_0x57268d(0x128)][_0x57268d(0xed)];_0xdd5de5++){const _0x346f56=this[_0x57268d(0x128)][_0xdd5de5];_0x28a2b8['includes'](_0x346f56)&&_0x31ad97[_0x57268d(0x12c)](_0x346f56);}return _0x31ad97['length']&&await this[_0x57268d(0x111)](_0x22930b,_0x28a2b8,_0x31ad97,[_0x57268d(0x150)],_0x57268d(0xea)),_0x31ad97;}async['checkBadWords'](_0x236989,_0x5312d4){const _0x5b3a55=_0x3a04f1,_0x53b881=await this[_0x5b3a55(0x119)][_0x5b3a55(0x149)]();return _0x53b881&&await this[_0x5b3a55(0x121)](_0x236989,_0x53b881,_0x5312d4),await this[_0x5b3a55(0x133)](_0x236989,_0x5312d4);}async[_0x3a04f1(0x121)](_0x5c85ee,_0x564b71,_0x84d66a){const _0x630a35=_0x3a04f1,{useType:_0x4428f9}=_0x564b71;_0x4428f9===_0x630a35(0x13e)&&await this['baiduCheckBadWords'](_0x5c85ee,_0x564b71[_0x630a35(0xfb)],_0x84d66a);}[_0x3a04f1(0x12f)](_0x436da3){const _0x5551da=/存在(.*?)不合规/,_0xd69a7=_0x436da3['match'](_0x5551da);return _0xd69a7?_0xd69a7[0x1]:'';}async['baiduCheckBadWords'](_0x43a0fe,_0x38a9dd,_0x527e14){const _0xa102f5=_0x3a04f1;if(!_0x38a9dd)return;const _0x49a93b=_0xa102f5(0x141)+_0x38a9dd+'}',_0x58d458={'Content-Type':_0xa102f5(0xf0),'Accept':_0xa102f5(0xf7)},_0x2450e1=await axios_1['default'][_0xa102f5(0x102)](_0x49a93b,{'text':_0x43a0fe},{'headers':_0x58d458}),{conclusion:_0x8a5721,error_code:_0x43c0b4,error_msg:_0x113d54,conclusionType:_0x4dbd72,data:_0x283256}=_0x2450e1[_0xa102f5(0xfe)];_0x43c0b4&&console[_0xa102f5(0x105)](_0xa102f5(0x10f),_0x113d54);if(_0x4dbd72!==0x1){const _0x7cfaa5=[...new Set(_0x283256[_0xa102f5(0x116)](_0x382aa4=>this[_0xa102f5(0x12f)](_0x382aa4[_0xa102f5(0x152)])))];await this['recordUserBadWords'](_0x527e14,_0x43a0fe,[_0xa102f5(0x139)],_0x7cfaa5,'百度云检测');const _0x110638=_0xa102f5(0x100)+_0x7cfaa5[_0xa102f5(0x14d)](',')+_0xa102f5(0xf5);throw new common_1[(_0xa102f5(0x112))](_0x110638,common_1[_0xa102f5(0x143)][_0xa102f5(0x13d)]);}}[_0x3a04f1(0x122)](_0x36bcc7){const _0x2416f8=_0x3a04f1,_0x49d53a=_0x36bcc7[_0x2416f8(0x116)](_0x5a367c=>_0x5a367c[_0x2416f8(0x135)]),_0x2833a2=[...new Set(_0x49d53a)];return _0x2416f8(0xfa)+_0x2833a2['join'](',')+_0x2416f8(0xf9);}async[_0x3a04f1(0x145)](){const _0x1ac424=_0x3a04f1,_0x4166ea=await this['badWordsEntity'][_0x1ac424(0x151)]({'where':{'status':0x1},'select':[_0x1ac424(0x14e)]});this['badWords']=_0x4166ea[_0x1ac424(0x116)](_0x543c3a=>_0x543c3a['word']);}async[_0x3a04f1(0x104)](_0x3bdb84){const _0x39340e=_0x3a04f1,{page:page=0x1,size:size=0x1f4,word:_0x4b0dbf,status:_0x33e835}=_0x3bdb84,_0x104ba7={};[0x0,0x1,'0','1']['includes'](_0x33e835)&&(_0x104ba7[_0x39340e(0x144)]=_0x33e835),_0x4b0dbf&&(_0x104ba7['word']=(0x0,typeorm_2[_0x39340e(0xeb)])('%'+_0x4b0dbf+'%'));const [_0x238951,_0x40aa2e]=await this['badWordsEntity'][_0x39340e(0x13c)]({'where':_0x104ba7,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x39340e(0x117)}});return{'rows':_0x238951,'count':_0x40aa2e};}async[_0x3a04f1(0xec)](_0x5852e1){const _0x3ffb88=_0x3a04f1,_0x39250a=await this['badWordsEntity'][_0x3ffb88(0x125)]({'where':{'id':_0x5852e1['id']}});if(!_0x39250a)throw new common_1[(_0x3ffb88(0x112))](_0x3ffb88(0x107),common_1['HttpStatus']['BAD_REQUEST']);const _0x5a21d5=await this[_0x3ffb88(0x11f)][_0x3ffb88(0xfd)]({'id':_0x5852e1['id']});if(_0x5a21d5[_0x3ffb88(0x11d)]>0x0)return await this['loadBadWords'](),_0x3ffb88(0x142);else throw new common_1[(_0x3ffb88(0x112))]('删除敏感词失败',common_1[_0x3ffb88(0x143)][_0x3ffb88(0x13d)]);}async[_0x3a04f1(0x114)](_0x48bdfd){const _0x2d9ca0=_0x3a04f1,{id:_0x591075,word:_0x6f9a04,status:_0x5b3850}=_0x48bdfd,_0x263ed4=await this[_0x2d9ca0(0x11f)][_0x2d9ca0(0x125)]({'where':{'word':_0x6f9a04}});if(_0x263ed4)throw new common_1[(_0x2d9ca0(0x112))](_0x2d9ca0(0xff),common_1[_0x2d9ca0(0x143)][_0x2d9ca0(0x13d)]);const _0x2a7146=await this[_0x2d9ca0(0x11f)]['update']({'id':_0x591075},{'word':_0x6f9a04,'status':_0x5b3850});if(_0x2a7146[_0x2d9ca0(0x11d)]>0x0)return await this[_0x2d9ca0(0x145)](),_0x2d9ca0(0x12b);else throw new common_1[(_0x2d9ca0(0x112))](_0x2d9ca0(0xe6),common_1[_0x2d9ca0(0x143)]['BAD_REQUEST']);}async['addBadWord'](_0x44004c){const _0x351e37=_0x3a04f1,{word:_0x1f70e6}=_0x44004c,_0x42a93f=await this[_0x351e37(0x11f)]['findOne']({'where':{'word':_0x1f70e6}});if(_0x42a93f)throw new common_1['HttpException']('敏感词已存在,请检查您的提交信息',common_1['HttpStatus'][_0x351e37(0x13d)]);return await this[_0x351e37(0x11f)][_0x351e37(0x136)]({'word':_0x1f70e6}),await this['loadBadWords'](),_0x351e37(0x147);}async[_0x3a04f1(0x111)](_0x94d926,_0x43443b,_0x43f530,_0x504520,_0x42b9ec){const _0x2f339c=_0x3a04f1,_0x2edc0a={'userId':_0x94d926,'content':_0x43443b,'words':JSON[_0x2f339c(0x110)](_0x43f530),'typeCn':JSON['stringify'](_0x504520),'typeOriginCn':_0x42b9ec};try{await this['userEntity'][_0x2f339c(0x127)]()[_0x2f339c(0x140)](user_entity_1[_0x2f339c(0x109)])[_0x2f339c(0x12a)]({'violationCount':()=>_0x2f339c(0x120)})[_0x2f339c(0x11b)](_0x2f339c(0xf1),{'userId':_0x94d926})[_0x2f339c(0x118)](),await this[_0x2f339c(0x10e)]['save'](_0x2edc0a);}catch(_0x573f36){console[_0x2f339c(0x105)](_0x2f339c(0x13a),_0x573f36);}}async[_0x3a04f1(0xe7)](_0x1727b1,_0xf9c020){const _0x153b68=_0x3a04f1,{role:_0x1b5f8a}=_0x1727b1[_0x153b68(0x126)],{page:page=0x1,size:size=0xa,userId:_0x270cb3,typeOriginCn:_0x5d6c25}=_0xf9c020,_0x962060={};_0x270cb3&&(_0x962060[_0x153b68(0x115)]=_0x270cb3),_0x5d6c25&&(_0x962060['typeOriginCn']=_0x5d6c25);const [_0x3244b8,_0x5a0f37]=await this['violationLogEntity'][_0x153b68(0x13c)]({'where':_0x962060,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x153b68(0x124)}}),_0x56ec59=[...new Set(_0x3244b8['map'](_0x222cc5=>_0x222cc5[_0x153b68(0x115)]))],_0x1d5cf7=await this[_0x153b68(0x108)][_0x153b68(0x151)]({'where':{'id':(0x0,typeorm_2['In'])(_0x56ec59)},'select':['id','avatar',_0x153b68(0x138),_0x153b68(0x103),_0x153b68(0xef),'status']});return _0x3244b8['forEach'](_0xfc0966=>{const _0xa47340=_0x153b68,_0x2ebab8=_0x1d5cf7['find'](_0x1066cd=>_0x1066cd['id']===_0xfc0966[_0xa47340(0x115)])||{};_0x1b5f8a!==_0xa47340(0x10a)&&(_0x2ebab8[_0xa47340(0x103)]=(0x0,utils_1[_0xa47340(0x123)])(_0x2ebab8[_0xa47340(0x103)])),_0xfc0966[_0xa47340(0x13f)]=_0x2ebab8;}),{'rows':_0x3244b8,'count':_0x5a0f37};}};BadWordsService=__decorate([(0x0,common_1[_0x3a04f1(0x14c)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(badWords_entity_1[_0x3a04f1(0xfc)])),__param(0x1,(0x0,typeorm_1[_0x3a04f1(0x134)])(violationLog_entity_1[_0x3a04f1(0x131)])),__param(0x2,(0x0,typeorm_1[_0x3a04f1(0x134)])(user_entity_1['UserEntity'])),__metadata(_0x3a04f1(0x130),[typeorm_2[_0x3a04f1(0x11c)],typeorm_2[_0x3a04f1(0x11c)],typeorm_2[_0x3a04f1(0x11c)],globalConfig_service_1[_0x3a04f1(0xf4)]])],BadWordsService),exports[_0x3a04f1(0x146)]=BadWordsService;