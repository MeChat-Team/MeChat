'use strict';const _0x33f9b6=_0x5ba1;function _0x2c92(){const _0x5198d9=['VerificationEnum','stack','getTime','../redisCache/redisCache.service','decorate','验证码发送失败！','</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>此验证码30分钟内有效。</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>如果这不是您的操作，请忽略此邮件。</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','，30分钟内有效。','您的验证码是：','getEmailConfig','Verification','application/x-www-form-urlencoded','Repository','HttpStatus','post','DESC','result','getPhoneVerifyConfig','VerificationService','used','9291355AffCbu','700clHgtB','design:paramtypes','未知的认证结果','log','update','POST','debug','sendMail','https://dysmsapi.aliyuncs.com','globalConfigService','./verifycation.entity','createRandomCode','验证码错误','createdAt','getOwnPropertyDescriptor','../globalConfig/globalConfig.service','error','createVerification','USED','Error:\x20','res','验证码','ceil','1928740jdztsY','Received\x20identityInfo:\x20','确实必要参数错误！','实名认证异常','sendEmailCode','data','341YSSGus','Received\x20response:\x20','RedisCacheService','Message','Logger','2017-05-25','7076421cUWLSY','7531830CfRWgA','Code','HttpException','@nestjs/typeorm','./../../common/constants/status.constant','save','82760UDuyUy','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>验证码</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>您的验证码是：<strong>','defineProperty','ThirdPartyAuth','request','expiresAt','@nestjs/common','验证不一致','SendSms','VerificationUseStatusEnum','验证码不存在','当前验证码已被使用！','redisCacheService','ChangeEmail','message','stringify','1547515OwcbWv','PasswordReset','216795wNHXPu','now','验证码已过期','axios','verifyCode','verifycationEntity','getExpirationTime','Received\x20messageInfo:','nodemailer','findOne','2uAJJDO','length','__metadata','object','@alicloud/pop-core','BAD_REQUEST','Registration','appCode','typeorm','92FNJmRz'];_0x2c92=function(){return _0x5198d9;};return _0x2c92();}(function(_0x28f7c4,_0x46f404){const _0x579fef=_0x5ba1,_0x524f21=_0x28f7c4();while(!![]){try{const _0xd3edda=-parseInt(_0x579fef(0xf7))/0x1*(-parseInt(_0x579fef(0x9e))/0x2)+parseInt(_0x579fef(0xf9))/0x3*(-parseInt(_0x579fef(0xa7))/0x4)+-parseInt(_0x579fef(0xbc))/0x5+-parseInt(_0x579fef(0xe1))/0x6+parseInt(_0x579fef(0xbd))/0x7*(-parseInt(_0x579fef(0xe7))/0x8)+-parseInt(_0x579fef(0xe0))/0x9+-parseInt(_0x579fef(0xd4))/0xa*(-parseInt(_0x579fef(0xda))/0xb);if(_0xd3edda===_0x46f404)break;else _0x524f21['push'](_0x524f21['shift']());}catch(_0x403c3b){_0x524f21['push'](_0x524f21['shift']());}}}(_0x2c92,0xe3179));var __decorate=this&&this['__decorate']||function(_0x775e43,_0x29ea95,_0x26ee3b,_0x2e73cb){const _0x511ff2=_0x5ba1;var _0x439864=arguments[_0x511ff2(0x9f)],_0x1a003f=_0x439864<0x3?_0x29ea95:_0x2e73cb===null?_0x2e73cb=Object[_0x511ff2(0xcb)](_0x29ea95,_0x26ee3b):_0x2e73cb,_0x422318;if(typeof Reflect===_0x511ff2(0xa1)&&typeof Reflect[_0x511ff2(0xac)]==='function')_0x1a003f=Reflect[_0x511ff2(0xac)](_0x775e43,_0x29ea95,_0x26ee3b,_0x2e73cb);else{for(var _0x3fe9de=_0x775e43[_0x511ff2(0x9f)]-0x1;_0x3fe9de>=0x0;_0x3fe9de--)if(_0x422318=_0x775e43[_0x3fe9de])_0x1a003f=(_0x439864<0x3?_0x422318(_0x1a003f):_0x439864>0x3?_0x422318(_0x29ea95,_0x26ee3b,_0x1a003f):_0x422318(_0x29ea95,_0x26ee3b))||_0x1a003f;}return _0x439864>0x3&&_0x1a003f&&Object[_0x511ff2(0xe9)](_0x29ea95,_0x26ee3b,_0x1a003f),_0x1a003f;},__metadata=this&&this[_0x33f9b6(0xa0)]||function(_0x34d909,_0x573a5c){const _0x57050d=_0x33f9b6;if(typeof Reflect===_0x57050d(0xa1)&&typeof Reflect['metadata']==='function')return Reflect['metadata'](_0x34d909,_0x573a5c);},__param=this&&this['__param']||function(_0x25ac77,_0x34929f){return function(_0x51ce4f,_0x160091){_0x34929f(_0x51ce4f,_0x160091,_0x25ac77);};};Object[_0x33f9b6(0xe9)](exports,'__esModule',{'value':!![]}),exports['VerificationService']=void 0x0;function _0x5ba1(_0x5cdfb4,_0x4027c5){const _0x2c9212=_0x2c92();return _0x5ba1=function(_0x5ba16a,_0x89eae5){_0x5ba16a=_0x5ba16a-0x9e;let _0x3456ef=_0x2c9212[_0x5ba16a];return _0x3456ef;},_0x5ba1(_0x5cdfb4,_0x4027c5);}const utils_1=require('../../common/utils'),globalConfig_service_1=require(_0x33f9b6(0xcc)),common_1=require(_0x33f9b6(0xed)),typeorm_1=require(_0x33f9b6(0xe4)),typeorm_2=require(_0x33f9b6(0xa6)),redisCache_service_1=require(_0x33f9b6(0xab)),status_constant_1=require(_0x33f9b6(0xe5)),verification_constant_1=require('./../../common/constants/verification.constant'),verifycation_entity_1=require(_0x33f9b6(0xc7)),Core=require(_0x33f9b6(0xa2)),axios_1=require(_0x33f9b6(0xfc)),nodemailer=require(_0x33f9b6(0x101));let VerificationService=class VerificationService{constructor(_0x578f11,_0x10add6,_0x135898){const _0x273356=_0x33f9b6;this[_0x273356(0xfe)]=_0x578f11,this[_0x273356(0xc6)]=_0x10add6,this[_0x273356(0xf3)]=_0x135898;}[_0x33f9b6(0xff)](_0x3d9376){const _0x4328b9=_0x33f9b6;switch(_0x3d9376){case verification_constant_1[_0x4328b9(0xa8)][_0x4328b9(0xea)]:return 0x3c;case verification_constant_1[_0x4328b9(0xa8)][_0x4328b9(0xa4)]:case verification_constant_1[_0x4328b9(0xa8)][_0x4328b9(0xf8)]:return 0x5*0x3c;case verification_constant_1['VerificationEnum'][_0x4328b9(0xf4)]:return 0x1e*0x3c;default:return 0x5*0x3c;}}async[_0x33f9b6(0xce)](_0x3acbcf,_0x2e960f,_0x20c3a5){const _0x583947=_0x33f9b6,_0x512486=await this[_0x583947(0xfe)]['findOne']({'where':{'userId':_0x3acbcf['id'],'type':_0x2e960f},'order':{'createdAt':_0x583947(0xb7)}});if(_0x512486&&_0x512486['createdAt']['getTime']()+0x1*0x3c*0x3e8>Date[_0x583947(0xfa)]()){const _0x26d6ec=Math[_0x583947(0xd3)]((_0x512486[_0x583947(0xca)][_0x583947(0xaa)]()+0x1*0x3c*0x3e8-Date[_0x583947(0xfa)]())/0x3e8);throw new common_1['HttpException'](_0x26d6ec+'S内不得重新发送',common_1[_0x583947(0xb5)][_0x583947(0xa3)]);}const _0x19eae6=(0x0,utils_1[_0x583947(0xc8)])(),_0x34ac03=new Date(Date[_0x583947(0xfa)]()+(_0x20c3a5||this[_0x583947(0xff)](_0x2e960f))*0x3e8),{id:_0x265016,email:_0x34db2f}=_0x3acbcf,_0x3aa0dc={'userId':_0x265016,'type':_0x2e960f,'code':_0x19eae6,'expiresAt':_0x34ac03,'email':_0x34db2f};return await this[_0x583947(0xfe)][_0x583947(0xe6)](_0x3aa0dc);}async[_0x33f9b6(0xfd)]({code:_0x52b51e,id:_0x3304c3},_0x13e684){const _0x3969a2=_0x33f9b6,_0x5d4a8c=await this[_0x3969a2(0xfe)][_0x3969a2(0x102)]({'where':{'id':_0x3304c3,'type':_0x13e684},'order':{'createdAt':_0x3969a2(0xb7)}});if(!_0x5d4a8c)throw new common_1[(_0x3969a2(0xe3))](_0x3969a2(0xf1),common_1[_0x3969a2(0xb5)][_0x3969a2(0xa3)]);if(_0x5d4a8c[_0x3969a2(0xbb)]===status_constant_1['VerificationUseStatusEnum'][_0x3969a2(0xcf)])throw new common_1[(_0x3969a2(0xe3))](_0x3969a2(0xf2),common_1['HttpStatus'][_0x3969a2(0xa3)]);else _0x5d4a8c[_0x3969a2(0xbb)]=status_constant_1[_0x3969a2(0xf0)][_0x3969a2(0xcf)],await this[_0x3969a2(0xfe)][_0x3969a2(0xc1)]({'id':_0x3304c3},_0x5d4a8c);if(Number(_0x5d4a8c['code'])!==Number(_0x52b51e))throw new common_1[(_0x3969a2(0xe3))](_0x3969a2(0xc9),common_1[_0x3969a2(0xb5)][_0x3969a2(0xa3)]);if(_0x5d4a8c[_0x3969a2(0xec)]<new Date())throw new common_1[(_0x3969a2(0xe3))](_0x3969a2(0xfb),common_1[_0x3969a2(0xb5)]['BAD_REQUEST']);return _0x5d4a8c;}async['sendPhoneCode'](_0x5b62ad){const _0x248e6a=_0x33f9b6;var _0x568e8f;const {accessKeyId:_0x50a23e,accessKeySecret:_0x171707,SignName:_0x16333b,TemplateCode:_0x43ef50}=await this[_0x248e6a(0xc6)][_0x248e6a(0xb9)]();console['log'](_0x248e6a(0x100),_0x5b62ad);const {phone:_0x795065,code:_0xca537e}=_0x5b62ad;if(!_0x795065||!_0xca537e)throw new common_1[(_0x248e6a(0xe3))](_0x248e6a(0xd6),common_1[_0x248e6a(0xb5)][_0x248e6a(0xa3)]);const _0x122400=new Core({'accessKeyId':_0x50a23e,'accessKeySecret':_0x171707,'endpoint':_0x248e6a(0xc5),'apiVersion':_0x248e6a(0xdf)}),_0x244003={'PhoneNumbers':_0x795065,'SignName':_0x16333b,'TemplateCode':_0x43ef50,'TemplateParam':JSON['stringify']({'code':_0xca537e})},_0x59ca64={'method':_0x248e6a(0xc2),'formatParams':![]};try{const _0x2be2b3=await _0x122400[_0x248e6a(0xeb)](_0x248e6a(0xef),_0x244003,_0x59ca64);if(_0x2be2b3[_0x248e6a(0xe2)]==='OK')return!![];else throw new common_1['HttpException'](_0x2be2b3['Message']||'验证码发送失败！',common_1[_0x248e6a(0xb5)][_0x248e6a(0xa3)]);}catch(_0x5ba9f2){throw new common_1[(_0x248e6a(0xe3))](((_0x568e8f=_0x5ba9f2===null||_0x5ba9f2===void 0x0?void 0x0:_0x5ba9f2[_0x248e6a(0xd9)])===null||_0x568e8f===void 0x0?void 0x0:_0x568e8f[_0x248e6a(0xdd)])||_0x248e6a(0xad),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x33f9b6(0xd8)](_0x184494){const _0x3655b1=_0x33f9b6,{email:_0x492e6e,code:_0x3206c8}=_0x184494;if(!_0x492e6e||!_0x3206c8)throw new common_1[(_0x3655b1(0xe3))]('缺少必要参数！',common_1['HttpStatus'][_0x3655b1(0xa3)]);const {emailHost:_0x306417,emailPort:_0x2351a2,emailUser:_0x4134f6,emailPass:_0x58499c}=await this[_0x3655b1(0xc6)][_0x3655b1(0xb1)](),_0xa4e502=nodemailer['createTransport']({'host':_0x306417,'port':_0x2351a2,'secure':!![],'auth':{'user':_0x4134f6,'pass':_0x58499c}});try{return await _0xa4e502[_0x3655b1(0xc4)]({'from':_0x4134f6,'to':_0x492e6e,'subject':_0x3655b1(0xd2),'text':_0x3655b1(0xb0)+_0x3206c8+_0x3655b1(0xaf),'html':_0x3655b1(0xe8)+_0x3206c8+_0x3655b1(0xae)}),!![];}catch(_0xcf965c){throw new common_1[(_0x3655b1(0xe3))]((_0xcf965c===null||_0xcf965c===void 0x0?void 0x0:_0xcf965c['message'])||_0x3655b1(0xad),common_1['HttpStatus']['BAD_REQUEST']);}}async['verifyIdentity'](_0xb75597){const _0x47e185=_0x33f9b6,_0x4852cf=await this['globalConfigService']['getConfigs']([_0x47e185(0xa5)]),{name:_0x6a9479,idCard:_0x14e659}=_0xb75597;if(!_0x6a9479||!_0x14e659)throw new common_1[(_0x47e185(0xe3))]('缺少必要参数！',common_1['HttpStatus'][_0x47e185(0xa3)]);common_1[_0x47e185(0xde)][_0x47e185(0xc3)](_0x47e185(0xd5)+_0x6a9479+',\x20'+_0x14e659);const _0xafc40b='https://eid.shumaidata.com/eid/check',_0x38d228={'Authorization':'APPCODE\x20'+_0x4852cf,'Content-Type':_0x47e185(0xb3)},_0x18a2d1=new URLSearchParams({'name':_0x6a9479,'idcard':_0x14e659});try{const _0x933be4=await axios_1['default'][_0x47e185(0xb6)](_0xafc40b,_0x18a2d1,{'headers':_0x38d228}),_0x417447=JSON[_0x47e185(0xf6)](_0x933be4[_0x47e185(0xd9)]);common_1[_0x47e185(0xde)][_0x47e185(0xc3)](_0x47e185(0xdb)+_0x417447);switch(_0x933be4[_0x47e185(0xd9)][_0x47e185(0xb8)][_0x47e185(0xd1)]){case'1':return!![];case'2':common_1['Logger'][_0x47e185(0xc0)](_0x47e185(0xee),_0x47e185(0xba));case'3':common_1[_0x47e185(0xde)]['log'](_0x47e185(0xd7),_0x47e185(0xba));default:common_1[_0x47e185(0xde)][_0x47e185(0xc0)](_0x47e185(0xbf),_0x47e185(0xba));}return![];}catch(_0x11a4e0){return common_1[_0x47e185(0xde)][_0x47e185(0xcd)](_0x47e185(0xd0)+_0x11a4e0[_0x47e185(0xf5)],_0x11a4e0[_0x47e185(0xa9)],_0x47e185(0xb2)),![];}}};VerificationService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(verifycation_entity_1['VerifycationEntity'])),__metadata(_0x33f9b6(0xbe),[typeorm_2[_0x33f9b6(0xb4)],globalConfig_service_1['GlobalConfigService'],redisCache_service_1[_0x33f9b6(0xdc)]])],VerificationService),exports['VerificationService']=VerificationService;