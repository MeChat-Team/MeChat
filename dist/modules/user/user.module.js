'use strict';const _0x32deb2=_0x1540;(function(_0x19e11e,_0x5b1435){const _0x709852=_0x1540,_0x9ab739=_0x19e11e();while(!![]){try{const _0x397edc=parseInt(_0x709852(0x145))/0x1+parseInt(_0x709852(0x12e))/0x2+-parseInt(_0x709852(0x13d))/0x3+-parseInt(_0x709852(0x142))/0x4*(-parseInt(_0x709852(0x14c))/0x5)+-parseInt(_0x709852(0x139))/0x6*(-parseInt(_0x709852(0x13f))/0x7)+parseInt(_0x709852(0x148))/0x8*(parseInt(_0x709852(0x150))/0x9)+-parseInt(_0x709852(0x12b))/0xa*(parseInt(_0x709852(0x135))/0xb);if(_0x397edc===_0x5b1435)break;else _0x9ab739['push'](_0x9ab739['shift']());}catch(_0x50cb95){_0x9ab739['push'](_0x9ab739['shift']());}}}(_0x2e16,0x518b6));function _0x2e16(){const _0xe7025c=['getOwnPropertyDescriptor','VerifycationEntity','1524948iZZFqf','UserModule','UserEntity','296809XXjjVK','ChatGroupEntity','AccountLogEntity','495952ryQRnb','length','object','UserController','5wqIPTD','Module','ConfigEntity','./../verification/verification.service','90iCLsgz','8560snVRzO','UserBalanceService','../userBalance/accountLog.entity','1266396zIbLWE','../userBalance/userBalance.entity','UserBalanceEntity','defineProperty','UserService','Global','decorate','21142JhuulF','FingerprintLogEntity','CramiPackageEntity','../userBalance/userBalance.service','933804UBLdyH','forFeature','../chatGroup/chatGroup.entity','MailerService','322740dCZlBQ','./user.entity','7MarRCx'];_0x2e16=function(){return _0xe7025c;};return _0x2e16();}var __decorate=this&&this['__decorate']||function(_0x45e77d,_0x41f060,_0x4fb7f3,_0x4bb93d){const _0x110693=_0x1540;var _0xcf2e8c=arguments[_0x110693(0x149)],_0x3495c2=_0xcf2e8c<0x3?_0x41f060:_0x4bb93d===null?_0x4bb93d=Object[_0x110693(0x140)](_0x41f060,_0x4fb7f3):_0x4bb93d,_0x7c587c;if(typeof Reflect===_0x110693(0x14a)&&typeof Reflect['decorate']==='function')_0x3495c2=Reflect[_0x110693(0x134)](_0x45e77d,_0x41f060,_0x4fb7f3,_0x4bb93d);else{for(var _0x12a8ca=_0x45e77d[_0x110693(0x149)]-0x1;_0x12a8ca>=0x0;_0x12a8ca--)if(_0x7c587c=_0x45e77d[_0x12a8ca])_0x3495c2=(_0xcf2e8c<0x3?_0x7c587c(_0x3495c2):_0xcf2e8c>0x3?_0x7c587c(_0x41f060,_0x4fb7f3,_0x3495c2):_0x7c587c(_0x41f060,_0x4fb7f3))||_0x3495c2;}return _0xcf2e8c>0x3&&_0x3495c2&&Object[_0x110693(0x131)](_0x41f060,_0x4fb7f3,_0x3495c2),_0x3495c2;};function _0x1540(_0x596141,_0x4dff29){const _0x2e16e4=_0x2e16();return _0x1540=function(_0x154045,_0x2d7d03){_0x154045=_0x154045-0x12b;let _0x2e0105=_0x2e16e4[_0x154045];return _0x2e0105;},_0x1540(_0x596141,_0x4dff29);}Object[_0x32deb2(0x131)](exports,'__esModule',{'value':!![]}),exports[_0x32deb2(0x143)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require('@nestjs/typeorm'),chatGroup_entity_1=require(_0x32deb2(0x13b)),chatLog_entity_1=require('../chatLog/chatLog.entity'),cramiPackage_entity_1=require('../crami/cramiPackage.entity'),config_entity_1=require('../globalConfig/config.entity'),mailer_service_1=require('../mailer/mailer.service'),redisCache_service_1=require('../redisCache/redisCache.service'),accountLog_entity_1=require(_0x32deb2(0x12d)),balance_entity_1=require('../userBalance/balance.entity'),fingerprint_entity_1=require('../userBalance/fingerprint.entity'),userBalance_entity_1=require(_0x32deb2(0x12f)),userBalance_service_1=require(_0x32deb2(0x138)),verification_service_1=require(_0x32deb2(0x14f)),verifycation_entity_1=require('./../verification/verifycation.entity'),user_controller_1=require('./user.controller'),user_entity_1=require(_0x32deb2(0x13e)),user_service_1=require('./user.service');let UserModule=class UserModule{};UserModule=__decorate([(0x0,common_1[_0x32deb2(0x133)])(),(0x0,common_1[_0x32deb2(0x14d)])({'imports':[typeorm_1['TypeOrmModule'][_0x32deb2(0x13a)]([user_entity_1[_0x32deb2(0x144)],verifycation_entity_1[_0x32deb2(0x141)],balance_entity_1['BalanceEntity'],accountLog_entity_1[_0x32deb2(0x147)],config_entity_1[_0x32deb2(0x14e)],cramiPackage_entity_1[_0x32deb2(0x137)],userBalance_entity_1[_0x32deb2(0x130)],fingerprint_entity_1[_0x32deb2(0x136)],chatLog_entity_1['ChatLogEntity'],chatGroup_entity_1[_0x32deb2(0x146)]])],'controllers':[user_controller_1[_0x32deb2(0x14b)]],'providers':[user_service_1[_0x32deb2(0x132)],verification_service_1['VerificationService'],userBalance_service_1[_0x32deb2(0x12c)],redisCache_service_1['RedisCacheService'],mailer_service_1[_0x32deb2(0x13c)]],'exports':[user_service_1[_0x32deb2(0x132)]]})],UserModule),exports[_0x32deb2(0x143)]=UserModule;