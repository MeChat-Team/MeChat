'use strict';const _0x1ee12b=_0x5dfa;(function(_0x103d21,_0x15d647){const _0x1f1577=_0x5dfa,_0x13294a=_0x103d21();while(!![]){try{const _0x5b4c69=-parseInt(_0x1f1577(0x1b4))/0x1+parseInt(_0x1f1577(0x176))/0x2+-parseInt(_0x1f1577(0x192))/0x3+-parseInt(_0x1f1577(0x18e))/0x4+parseInt(_0x1f1577(0x186))/0x5+parseInt(_0x1f1577(0x1c9))/0x6*(parseInt(_0x1f1577(0x1cc))/0x7)+parseInt(_0x1f1577(0x1b3))/0x8;if(_0x5b4c69===_0x15d647)break;else _0x13294a['push'](_0x13294a['shift']());}catch(_0x1b22e4){_0x13294a['push'](_0x13294a['shift']());}}}(_0x5f2e,0xd420f));function _0x5f2e(){const _0x118634=['验证不一致','2260395SvSUUv','Injectable','ThirdPartyAuth','verifyIdentity','../redisCache/redisCache.service','axios','未知的认证结果','Verification','6304660Woabax','appCode','PasswordReset','post','919971KIzZSr','验证码错误','验证码发送失败！','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>验证码</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>您的验证码是：<strong>','save','verifyCode','POST','BAD_REQUEST','used','Received\x20identityInfo:\x20','@alicloud/pop-core','getPhoneVerifyConfig','result','getOwnPropertyDescriptor','metadata','update','./../../common/constants/verification.constant','sendMail','__metadata','sendEmailCode','缺少必要参数！','@nestjs/typeorm','Received\x20response:\x20','../globalConfig/globalConfig.service','SendSms','object','APPCODE\x20','HttpStatus','log','验证码不存在','DESC','当前验证码已被使用！','data','4887288ouiqtB','7320fFzfey','Code','验证码','now','https://dysmsapi.aliyuncs.com','getTime','res','typeorm','https://eid.shumaidata.com/eid/check','globalConfigService','VerificationService','HttpException','RedisCacheService','</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>此验证码30分钟内有效。</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>如果这不是您的操作，请忽略此邮件。</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','findOne','createVerification','Message','InjectRepository','验证码已过期','code','__decorate','845484tcmilA','@nestjs/common','defineProperty','63hnjnOn','VerificationUseStatusEnum','request','ChangeEmail','sendPhoneCode','default','Logger','，30分钟内有效。','../../common/utils','GlobalConfigService','VerificationEnum','USED','verifycationEntity','redisCacheService','855610QLPlny','实名认证异常','createRandomCode','createdAt','stringify','length','Repository','message','function','decorate','Error:\x20','debug','__param','ceil','您的验证码是：'];_0x5f2e=function(){return _0x118634;};return _0x5f2e();}var __decorate=this&&this[_0x1ee12b(0x1c8)]||function(_0x44ba5a,_0x52388c,_0x322eb6,_0x5bf683){const _0x1275bf=_0x1ee12b;var _0xa2852b=arguments[_0x1275bf(0x17b)],_0x5f4b59=_0xa2852b<0x3?_0x52388c:_0x5bf683===null?_0x5bf683=Object[_0x1275bf(0x19f)](_0x52388c,_0x322eb6):_0x5bf683,_0x20c9e5;if(typeof Reflect===_0x1275bf(0x1ab)&&typeof Reflect[_0x1275bf(0x17f)]===_0x1275bf(0x17e))_0x5f4b59=Reflect[_0x1275bf(0x17f)](_0x44ba5a,_0x52388c,_0x322eb6,_0x5bf683);else{for(var _0x290ccd=_0x44ba5a['length']-0x1;_0x290ccd>=0x0;_0x290ccd--)if(_0x20c9e5=_0x44ba5a[_0x290ccd])_0x5f4b59=(_0xa2852b<0x3?_0x20c9e5(_0x5f4b59):_0xa2852b>0x3?_0x20c9e5(_0x52388c,_0x322eb6,_0x5f4b59):_0x20c9e5(_0x52388c,_0x322eb6))||_0x5f4b59;}return _0xa2852b>0x3&&_0x5f4b59&&Object[_0x1275bf(0x1cb)](_0x52388c,_0x322eb6,_0x5f4b59),_0x5f4b59;},__metadata=this&&this[_0x1ee12b(0x1a4)]||function(_0x4c02b6,_0x56fef8){const _0x41e850=_0x1ee12b;if(typeof Reflect==='object'&&typeof Reflect[_0x41e850(0x1a0)]===_0x41e850(0x17e))return Reflect[_0x41e850(0x1a0)](_0x4c02b6,_0x56fef8);},__param=this&&this[_0x1ee12b(0x182)]||function(_0x1a6bc5,_0x4ffaa6){return function(_0xcbab9f,_0xf78f03){_0x4ffaa6(_0xcbab9f,_0xf78f03,_0x1a6bc5);};};Object[_0x1ee12b(0x1cb)](exports,'__esModule',{'value':!![]}),exports[_0x1ee12b(0x1be)]=void 0x0;const utils_1=require(_0x1ee12b(0x170)),globalConfig_service_1=require(_0x1ee12b(0x1a9)),common_1=require(_0x1ee12b(0x1ca)),typeorm_1=require(_0x1ee12b(0x1a7)),typeorm_2=require(_0x1ee12b(0x1bb)),redisCache_service_1=require(_0x1ee12b(0x18a)),status_constant_1=require('./../../common/constants/status.constant'),verification_constant_1=require(_0x1ee12b(0x1a2)),verifycation_entity_1=require('./verifycation.entity'),Core=require(_0x1ee12b(0x19c)),axios_1=require(_0x1ee12b(0x18b)),nodemailer=require('nodemailer');function _0x5dfa(_0x275412,_0x1b05b4){const _0x5f2e04=_0x5f2e();return _0x5dfa=function(_0x5dfa70,_0x407861){_0x5dfa70=_0x5dfa70-0x16f;let _0x19d7b1=_0x5f2e04[_0x5dfa70];return _0x19d7b1;},_0x5dfa(_0x275412,_0x1b05b4);}let VerificationService=class VerificationService{constructor(_0x18447c,_0x4282b6,_0x3ec8aa){const _0x5c9e58=_0x1ee12b;this['verifycationEntity']=_0x18447c,this[_0x5c9e58(0x1bd)]=_0x4282b6,this[_0x5c9e58(0x175)]=_0x3ec8aa;}['getExpirationTime'](_0x3fe9e6){const _0x28c5f7=_0x1ee12b;switch(_0x3fe9e6){case verification_constant_1['VerificationEnum'][_0x28c5f7(0x188)]:return 0x3c;case verification_constant_1[_0x28c5f7(0x172)]['Registration']:case verification_constant_1[_0x28c5f7(0x172)][_0x28c5f7(0x190)]:return 0x5*0x3c;case verification_constant_1[_0x28c5f7(0x172)][_0x28c5f7(0x1cf)]:return 0x1e*0x3c;default:return 0x5*0x3c;}}async[_0x1ee12b(0x1c3)](_0x48f181,_0x44e98a,_0x5c5dcb){const _0x54eb1a=_0x1ee12b,_0x55817e=await this[_0x54eb1a(0x174)][_0x54eb1a(0x1c2)]({'where':{'userId':_0x48f181['id'],'type':_0x44e98a},'order':{'createdAt':_0x54eb1a(0x1b0)}});if(_0x55817e&&_0x55817e[_0x54eb1a(0x179)][_0x54eb1a(0x1b9)]()+0x1*0x3c*0x3e8>Date['now']()){const _0x10dc7c=Math[_0x54eb1a(0x183)]((_0x55817e[_0x54eb1a(0x179)][_0x54eb1a(0x1b9)]()+0x1*0x3c*0x3e8-Date[_0x54eb1a(0x1b7)]())/0x3e8);throw new common_1[(_0x54eb1a(0x1bf))](_0x10dc7c+'S内不得重新发送',common_1[_0x54eb1a(0x1ad)][_0x54eb1a(0x199)]);}const _0xb1fc67=(0x0,utils_1[_0x54eb1a(0x178)])(),_0x3bbca7=new Date(Date[_0x54eb1a(0x1b7)]()+(_0x5c5dcb||this['getExpirationTime'](_0x44e98a))*0x3e8),{id:_0x28ab8b,email:_0x4a2262}=_0x48f181,_0x386b39={'userId':_0x28ab8b,'type':_0x44e98a,'code':_0xb1fc67,'expiresAt':_0x3bbca7,'email':_0x4a2262};return await this[_0x54eb1a(0x174)][_0x54eb1a(0x196)](_0x386b39);}async[_0x1ee12b(0x197)]({code:_0x58c201,id:_0x33c8be},_0x130f61){const _0x4b9410=_0x1ee12b,_0x57a294=await this[_0x4b9410(0x174)][_0x4b9410(0x1c2)]({'where':{'id':_0x33c8be,'type':_0x130f61},'order':{'createdAt':'DESC'}});if(!_0x57a294)throw new common_1['HttpException'](_0x4b9410(0x1af),common_1[_0x4b9410(0x1ad)][_0x4b9410(0x199)]);if(_0x57a294[_0x4b9410(0x19a)]===status_constant_1[_0x4b9410(0x1cd)][_0x4b9410(0x173)])throw new common_1['HttpException'](_0x4b9410(0x1b1),common_1['HttpStatus']['BAD_REQUEST']);else _0x57a294['used']=status_constant_1[_0x4b9410(0x1cd)]['USED'],await this[_0x4b9410(0x174)][_0x4b9410(0x1a1)]({'id':_0x33c8be},_0x57a294);if(Number(_0x57a294[_0x4b9410(0x1c7)])!==Number(_0x58c201))throw new common_1[(_0x4b9410(0x1bf))](_0x4b9410(0x193),common_1[_0x4b9410(0x1ad)][_0x4b9410(0x199)]);if(_0x57a294['expiresAt']<new Date())throw new common_1[(_0x4b9410(0x1bf))](_0x4b9410(0x1c6),common_1[_0x4b9410(0x1ad)]['BAD_REQUEST']);return _0x57a294;}async[_0x1ee12b(0x1d0)](_0x12fe3d){const _0x1337f4=_0x1ee12b;var _0x1b2d91;const {accessKeyId:_0x382f45,accessKeySecret:_0x41568e,SignName:_0x2937e5,TemplateCode:_0x2ad2c0}=await this[_0x1337f4(0x1bd)][_0x1337f4(0x19d)]();console[_0x1337f4(0x1ae)]('Received\x20messageInfo:',_0x12fe3d);const {phone:_0xc7a35c,code:_0x3629c0}=_0x12fe3d;if(!_0xc7a35c||!_0x3629c0)throw new common_1[(_0x1337f4(0x1bf))]('确实必要参数错误！',common_1[_0x1337f4(0x1ad)][_0x1337f4(0x199)]);const _0x12238b=new Core({'accessKeyId':_0x382f45,'accessKeySecret':_0x41568e,'endpoint':_0x1337f4(0x1b8),'apiVersion':'2017-05-25'}),_0x2df868={'PhoneNumbers':_0xc7a35c,'SignName':_0x2937e5,'TemplateCode':_0x2ad2c0,'TemplateParam':JSON[_0x1337f4(0x17a)]({'code':_0x3629c0})},_0x39e1fa={'method':_0x1337f4(0x198),'formatParams':![]};try{const _0x312300=await _0x12238b[_0x1337f4(0x1ce)](_0x1337f4(0x1aa),_0x2df868,_0x39e1fa);if(_0x312300[_0x1337f4(0x1b5)]==='OK')return!![];else throw new common_1[(_0x1337f4(0x1bf))](_0x312300[_0x1337f4(0x1c4)]||_0x1337f4(0x194),common_1[_0x1337f4(0x1ad)][_0x1337f4(0x199)]);}catch(_0x5b9e83){throw new common_1[(_0x1337f4(0x1bf))](((_0x1b2d91=_0x5b9e83===null||_0x5b9e83===void 0x0?void 0x0:_0x5b9e83[_0x1337f4(0x1b2)])===null||_0x1b2d91===void 0x0?void 0x0:_0x1b2d91[_0x1337f4(0x1c4)])||_0x1337f4(0x194),common_1[_0x1337f4(0x1ad)]['BAD_REQUEST']);}}async[_0x1ee12b(0x1a5)](_0x10a32d){const _0x502a99=_0x1ee12b,{email:_0x1ec71f,code:_0x3f1752}=_0x10a32d;if(!_0x1ec71f||!_0x3f1752)throw new common_1[(_0x502a99(0x1bf))](_0x502a99(0x1a6),common_1[_0x502a99(0x1ad)][_0x502a99(0x199)]);const {emailHost:_0x68a24c,emailPort:_0x10a7dc,emailUser:_0x2c9811,emailPass:_0x30b8d4}=await this[_0x502a99(0x1bd)]['getEmailConfig'](),_0x184f22=nodemailer['createTransport']({'host':_0x68a24c,'port':_0x10a7dc,'secure':!![],'auth':{'user':_0x2c9811,'pass':_0x30b8d4}});try{return await _0x184f22[_0x502a99(0x1a3)]({'from':_0x2c9811,'to':_0x1ec71f,'subject':_0x502a99(0x1b6),'text':_0x502a99(0x184)+_0x3f1752+_0x502a99(0x16f),'html':_0x502a99(0x195)+_0x3f1752+_0x502a99(0x1c1)}),!![];}catch(_0x5911ac){throw new common_1[(_0x502a99(0x1bf))]((_0x5911ac===null||_0x5911ac===void 0x0?void 0x0:_0x5911ac[_0x502a99(0x17d)])||'验证码发送失败！',common_1[_0x502a99(0x1ad)]['BAD_REQUEST']);}}async[_0x1ee12b(0x189)](_0x327ad0){const _0x15772b=_0x1ee12b,_0x1dd443=await this[_0x15772b(0x1bd)]['getConfigs']([_0x15772b(0x18f)]),{name:_0x531d6f,idCard:_0xe5bbc5}=_0x327ad0;if(!_0x531d6f||!_0xe5bbc5)throw new common_1[(_0x15772b(0x1bf))](_0x15772b(0x1a6),common_1[_0x15772b(0x1ad)][_0x15772b(0x199)]);common_1[_0x15772b(0x1d2)][_0x15772b(0x181)](_0x15772b(0x19b)+_0x531d6f+',\x20'+_0xe5bbc5);const _0x189fe9=_0x15772b(0x1bc),_0x3fad8a={'Authorization':_0x15772b(0x1ac)+_0x1dd443,'Content-Type':'application/x-www-form-urlencoded'},_0x295b0d=new URLSearchParams({'name':_0x531d6f,'idcard':_0xe5bbc5});try{const _0x62c1f2=await axios_1[_0x15772b(0x1d1)][_0x15772b(0x191)](_0x189fe9,_0x295b0d,{'headers':_0x3fad8a}),_0x18ff53=JSON[_0x15772b(0x17a)](_0x62c1f2[_0x15772b(0x1b2)]);common_1['Logger'][_0x15772b(0x181)](_0x15772b(0x1a8)+_0x18ff53);switch(_0x62c1f2['data'][_0x15772b(0x19e)][_0x15772b(0x1ba)]){case'1':return!![];case'2':common_1[_0x15772b(0x1d2)][_0x15772b(0x1ae)](_0x15772b(0x185),_0x15772b(0x1be));case'3':common_1[_0x15772b(0x1d2)][_0x15772b(0x1ae)](_0x15772b(0x177),_0x15772b(0x1be));default:common_1[_0x15772b(0x1d2)][_0x15772b(0x1ae)](_0x15772b(0x18c),_0x15772b(0x1be));}return![];}catch(_0x3b341f){return common_1['Logger']['error'](_0x15772b(0x180)+_0x3b341f['message'],_0x3b341f['stack'],_0x15772b(0x18d)),![];}}};VerificationService=__decorate([(0x0,common_1[_0x1ee12b(0x187)])(),__param(0x0,(0x0,typeorm_1[_0x1ee12b(0x1c5)])(verifycation_entity_1['VerifycationEntity'])),__metadata('design:paramtypes',[typeorm_2[_0x1ee12b(0x17c)],globalConfig_service_1[_0x1ee12b(0x171)],redisCache_service_1[_0x1ee12b(0x1c0)]])],VerificationService),exports[_0x1ee12b(0x1be)]=VerificationService;