'use strict';const _0x465feb=_0x23ea;(function(_0x10b2d6,_0x138f75){const _0x26a346=_0x23ea,_0x5b467e=_0x10b2d6();while(!![]){try{const _0x368290=parseInt(_0x26a346(0x12d))/0x1+-parseInt(_0x26a346(0x131))/0x2+parseInt(_0x26a346(0x146))/0x3*(parseInt(_0x26a346(0x15f))/0x4)+-parseInt(_0x26a346(0x125))/0x5*(-parseInt(_0x26a346(0x16a))/0x6)+parseInt(_0x26a346(0x130))/0x7+-parseInt(_0x26a346(0x12b))/0x8+parseInt(_0x26a346(0x13c))/0x9*(-parseInt(_0x26a346(0x137))/0xa);if(_0x368290===_0x138f75)break;else _0x5b467e['push'](_0x5b467e['shift']());}catch(_0x355df4){_0x5b467e['push'](_0x5b467e['shift']());}}}(_0x5536,0xdeecf));function _0x23ea(_0x469493,_0x182c37){const _0x553655=_0x5536();return _0x23ea=function(_0x23ead9,_0x19ce5e){_0x23ead9=_0x23ead9-0x11b;let _0x1e9b27=_0x553655[_0x23ead9];return _0x1e9b27;},_0x23ea(_0x469493,_0x182c37);}var __decorate=this&&this[_0x465feb(0x12c)]||function(_0x423fd8,_0x38cb2f,_0x89ec21,_0x488c63){const _0x4cf8ba=_0x465feb;var _0x4782ca=arguments['length'],_0x308daa=_0x4782ca<0x3?_0x38cb2f:_0x488c63===null?_0x488c63=Object[_0x4cf8ba(0x139)](_0x38cb2f,_0x89ec21):_0x488c63,_0x3d2bb5;if(typeof Reflect===_0x4cf8ba(0x136)&&typeof Reflect[_0x4cf8ba(0x13d)]===_0x4cf8ba(0x141))_0x308daa=Reflect[_0x4cf8ba(0x13d)](_0x423fd8,_0x38cb2f,_0x89ec21,_0x488c63);else{for(var _0x2b78ed=_0x423fd8[_0x4cf8ba(0x16d)]-0x1;_0x2b78ed>=0x0;_0x2b78ed--)if(_0x3d2bb5=_0x423fd8[_0x2b78ed])_0x308daa=(_0x4782ca<0x3?_0x3d2bb5(_0x308daa):_0x4782ca>0x3?_0x3d2bb5(_0x38cb2f,_0x89ec21,_0x308daa):_0x3d2bb5(_0x38cb2f,_0x89ec21))||_0x308daa;}return _0x4782ca>0x3&&_0x308daa&&Object[_0x4cf8ba(0x11b)](_0x38cb2f,_0x89ec21,_0x308daa),_0x308daa;},__metadata=this&&this[_0x465feb(0x121)]||function(_0x55fe1b,_0x490912){const _0x30af07=_0x465feb;if(typeof Reflect===_0x30af07(0x136)&&typeof Reflect[_0x30af07(0x156)]===_0x30af07(0x141))return Reflect[_0x30af07(0x156)](_0x55fe1b,_0x490912);},__param=this&&this[_0x465feb(0x14f)]||function(_0x2561ea,_0x1cb3df){return function(_0x2ce43d,_0x1e4407){_0x1cb3df(_0x2ce43d,_0x1e4407,_0x2561ea);};};Object[_0x465feb(0x11b)](exports,_0x465feb(0x12a),{'value':!![]}),exports[_0x465feb(0x16f)]=void 0x0;const common_1=require(_0x465feb(0x162)),swagger_1=require(_0x465feb(0x168)),verification_service_1=require(_0x465feb(0x160)),verification_constant_1=require('../../common/constants/verification.constant'),passport_1=require('@nestjs/passport'),user_service_1=require(_0x465feb(0x15a)),verifyCode_dto_1=require(_0x465feb(0x142)),globalConfig_service_1=require(_0x465feb(0x15d)),common_2=require('@nestjs/common');let VerificationController=class VerificationController{constructor(_0x454416,_0x1eeb63,_0x4f6879){const _0x28466e=_0x465feb;this[_0x28466e(0x12f)]=_0x454416,this[_0x28466e(0x126)]=_0x1eeb63,this['globalConfigService']=_0x4f6879;}async[_0x465feb(0x151)](_0x1fb275){const _0x4f2783=_0x465feb,_0x5c8b7b=_0x1fb275[_0x4f2783(0x16b)]['id'],_0x715404=await this[_0x4f2783(0x126)][_0x4f2783(0x123)](_0x5c8b7b),_0x4a9126=await this[_0x4f2783(0x144)][_0x4f2783(0x158)]([_0x4f2783(0x167)]),_0x31c301=_0x4a9126[_0x4f2783(0x167)]?Number(_0x4a9126['thirdPartyAuthExpir']):0x3c;return await this['verificationService'][_0x4f2783(0x152)](_0x715404,verification_constant_1[_0x4f2783(0x12e)][_0x4f2783(0x120)],_0x31c301);}async[_0x465feb(0x138)](_0x4ced31){const _0x3e25b4=_0x465feb,_0x4fd891={'id':_0x4ced31['id'],'code':Number(_0x4ced31[_0x3e25b4(0x15e)])};return await this['verificationService']['verifyCode'](_0x4fd891,verification_constant_1['VerificationEnum'][_0x3e25b4(0x120)]);}async[_0x465feb(0x169)](_0x548b00){const _0x50e4af=_0x465feb,{phone:_0x5f0612,type:_0x387a5d}=_0x548b00;if(_0x387a5d!==verification_constant_1['VerificationEnum']['Registration']&&_0x387a5d!==verification_constant_1[_0x50e4af(0x12e)]['PasswordReset'])throw new common_2[(_0x50e4af(0x150))](_0x50e4af(0x153),common_1[_0x50e4af(0x15c)][_0x50e4af(0x14e)]);const _0xc39aa={'id':0x0,'email':'','phone':_0x5f0612},_0x2747e1=await this[_0x50e4af(0x12f)][_0x50e4af(0x152)](_0xc39aa,_0x387a5d);return await this[_0x50e4af(0x12f)]['sendPhoneCode']({'phone':_0x5f0612,'code':_0x2747e1[_0x50e4af(0x15e)]});}async['sendEmailCode'](_0x2ef73b,_0x44fab1){const _0x45187c=_0x465feb,_0x3ea188=_0x44fab1[_0x45187c(0x16b)]['id'],_0x25103b=await this[_0x45187c(0x126)]['getUserById'](_0x3ea188),_0x4a9579=await this[_0x45187c(0x12f)]['createVerification'](Object[_0x45187c(0x16e)](Object[_0x45187c(0x16e)]({},_0x25103b),{'email':_0x2ef73b[_0x45187c(0x15b)]}),verification_constant_1['VerificationEnum']['ChangeEmail']);return await this[_0x45187c(0x12f)][_0x45187c(0x14d)]({'email':_0x2ef73b[_0x45187c(0x15b)],'code':_0x4a9579['code']});}};function _0x5536(){const _0x3b7115=['defineProperty','错误信息','Req','send-sms','number','ThirdPartyAuth','__metadata','date-time','getUserById','验证结果消息','2270tMEsRY','userService','验证码类型','ApiTags','验证用户提供的第三方应用认证码是否有效','__esModule','5481912ztVjiJ','__decorate','1201227PxVzZo','VerificationEnum','verificationService','746921woboYr','1285936wZTMVl','ApiResponse','verification','Body','生成第三方应用认证验证码','object','8430rhNCAj','verifyThirdPartyCode','getOwnPropertyDescriptor','ApiBearerAuth','prototype','1143PpBvwF','decorate','string','send-email','design:paramtypes','function','./dto/verifyCode.dto','AuthGuard','globalConfigService','GlobalConfigService','415029WuBiBF','验证码发送成功','ApiBody','UseGuards','验证码生成成功','验证码ID','design:returntype','sendEmailCode','BAD_REQUEST','__param','HttpException','generateThirdPartyCode','createVerification','不支持的验证码类型','VerifyCodeDto','Post','metadata','验证码无效或已过期','getConfigs','发送失败，可能是因为发送太频繁或参数错误','../user/user.service','email','HttpStatus','../globalConfig/globalConfig.service','code','4bcvSaz','./verification.service','生成一个用于第三方应用认证的验证码，需要JWT认证。验证码默认1分钟后过期。','@nestjs/common','third-party/generate','ApiOperation','design:type','JWT认证失败','thirdPartyAuthExpir','@nestjs/swagger','sendSmsCode','11922WRPmlz','user','过期时间','length','assign','VerificationController','状态码','验证码','VerificationService'];_0x5536=function(){return _0x3b7115;};return _0x5536();}__decorate([(0x0,common_1[_0x465feb(0x155)])(_0x465feb(0x163)),(0x0,common_1[_0x465feb(0x149)])((0x0,passport_1[_0x465feb(0x143)])('jwt')),(0x0,swagger_1['ApiBearerAuth'])(),(0x0,swagger_1[_0x465feb(0x164)])({'summary':_0x465feb(0x135),'description':_0x465feb(0x161)}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['OK'],'description':_0x465feb(0x14a),'schema':{'type':_0x465feb(0x136),'properties':{'id':{'type':_0x465feb(0x11f),'description':_0x465feb(0x14b)},'code':{'type':_0x465feb(0x11f),'description':_0x465feb(0x171)},'userId':{'type':_0x465feb(0x11f),'description':'用户ID'},'type':{'type':_0x465feb(0x11f),'description':_0x465feb(0x127)},'expiresAt':{'type':_0x465feb(0x13e),'format':_0x465feb(0x122),'description':_0x465feb(0x16c)},'used':{'type':_0x465feb(0x11f),'description':'是否已使用，0未使用，1已使用'}}}}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['UNAUTHORIZED'],'description':_0x465feb(0x166)}),__param(0x0,(0x0,common_1[_0x465feb(0x11d)])()),__metadata(_0x465feb(0x165),Function),__metadata('design:paramtypes',[Object]),__metadata(_0x465feb(0x14c),Promise)],VerificationController[_0x465feb(0x13b)],_0x465feb(0x151),null),__decorate([(0x0,common_1[_0x465feb(0x155)])('third-party/verify'),(0x0,swagger_1['ApiOperation'])({'summary':'验证第三方应用认证码','description':_0x465feb(0x129)}),(0x0,swagger_1[_0x465feb(0x148)])({'type':verifyCode_dto_1[_0x465feb(0x154)]}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['OK'],'description':'验证码验证成功','schema':{'type':'object','properties':{'success':{'type':'boolean','description':'验证是否成功'},'message':{'type':_0x465feb(0x13e),'description':_0x465feb(0x124)}}}}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1['HttpStatus'][_0x465feb(0x14e)],'description':_0x465feb(0x157),'schema':{'type':'object','properties':{'message':{'type':_0x465feb(0x13e),'description':_0x465feb(0x11c)},'error':{'type':_0x465feb(0x13e),'description':'错误类型'},'statusCode':{'type':_0x465feb(0x11f),'description':_0x465feb(0x170)}}}}),__param(0x0,(0x0,common_1[_0x465feb(0x134)])()),__metadata(_0x465feb(0x165),Function),__metadata(_0x465feb(0x140),[verifyCode_dto_1['VerifyCodeDto']]),__metadata(_0x465feb(0x14c),Promise)],VerificationController['prototype'],_0x465feb(0x138),null),__decorate([(0x0,common_1[_0x465feb(0x155)])(_0x465feb(0x11e)),(0x0,swagger_1['ApiOperation'])({'summary':'发送短信验证码','description':'发送短信验证码（注册或重置密码），验证码5分钟内有效。同一手机号1分钟内只能发送一次。'}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['OK'],'description':_0x465feb(0x147),'type':Boolean}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['BAD_REQUEST'],'description':_0x465feb(0x159)}),__param(0x0,(0x0,common_1[_0x465feb(0x134)])()),__metadata(_0x465feb(0x165),Function),__metadata(_0x465feb(0x140),[Object]),__metadata('design:returntype',Promise)],VerificationController[_0x465feb(0x13b)],_0x465feb(0x169),null),__decorate([(0x0,common_1[_0x465feb(0x155)])(_0x465feb(0x13f)),(0x0,swagger_1['ApiOperation'])({'summary':'发送邮箱验证码','description':'发送邮箱验证码（换绑邮箱），验证码30分钟内有效。同一邮箱1分钟内只能发送一次。'}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1[_0x465feb(0x15c)]['OK'],'description':_0x465feb(0x147),'type':Boolean}),(0x0,swagger_1[_0x465feb(0x132)])({'status':common_1['HttpStatus']['BAD_REQUEST'],'description':'发送失败，可能是因为发送太频繁或参数错误'}),(0x0,common_1[_0x465feb(0x149)])((0x0,passport_1['AuthGuard'])('jwt')),(0x0,swagger_1[_0x465feb(0x13a)])(),__param(0x0,(0x0,common_1[_0x465feb(0x134)])()),__param(0x1,(0x0,common_1[_0x465feb(0x11d)])()),__metadata('design:type',Function),__metadata(_0x465feb(0x140),[Object,Object]),__metadata(_0x465feb(0x14c),Promise)],VerificationController['prototype'],_0x465feb(0x14d),null),VerificationController=__decorate([(0x0,swagger_1[_0x465feb(0x128)])(_0x465feb(0x171)),(0x0,common_1['Controller'])(_0x465feb(0x133)),__metadata(_0x465feb(0x140),[verification_service_1[_0x465feb(0x172)],user_service_1['UserService'],globalConfig_service_1[_0x465feb(0x145)]])],VerificationController),exports[_0x465feb(0x16f)]=VerificationController;