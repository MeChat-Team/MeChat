'use strict';const _0x20c0d4=_0x32db;(function(_0x46f500,_0x54d570){const _0x5530c9=_0x32db,_0x466c7c=_0x46f500();while(!![]){try{const _0x593e06=-parseInt(_0x5530c9(0x1ea))/0x1*(-parseInt(_0x5530c9(0x1bf))/0x2)+parseInt(_0x5530c9(0x1db))/0x3*(parseInt(_0x5530c9(0x1e4))/0x4)+-parseInt(_0x5530c9(0x1cd))/0x5+parseInt(_0x5530c9(0x1c8))/0x6+parseInt(_0x5530c9(0x1c1))/0x7+parseInt(_0x5530c9(0x1d5))/0x8*(-parseInt(_0x5530c9(0x1e0))/0x9)+-parseInt(_0x5530c9(0x1d2))/0xa;if(_0x593e06===_0x54d570)break;else _0x466c7c['push'](_0x466c7c['shift']());}catch(_0x2868bf){_0x466c7c['push'](_0x466c7c['shift']());}}}(_0x58fd,0x5b427));var __decorate=this&&this[_0x20c0d4(0x1dd)]||function(_0x5bcf16,_0x2f4c6c,_0x2e20c0,_0x5f3834){const _0x1f6a43=_0x20c0d4;var _0x32f0c6=arguments[_0x1f6a43(0x1c2)],_0x1285ba=_0x32f0c6<0x3?_0x2f4c6c:_0x5f3834===null?_0x5f3834=Object[_0x1f6a43(0x1bc)](_0x2f4c6c,_0x2e20c0):_0x5f3834,_0x58faf2;if(typeof Reflect===_0x1f6a43(0x1e5)&&typeof Reflect['decorate']===_0x1f6a43(0x1b7))_0x1285ba=Reflect[_0x1f6a43(0x1df)](_0x5bcf16,_0x2f4c6c,_0x2e20c0,_0x5f3834);else{for(var _0x16790e=_0x5bcf16['length']-0x1;_0x16790e>=0x0;_0x16790e--)if(_0x58faf2=_0x5bcf16[_0x16790e])_0x1285ba=(_0x32f0c6<0x3?_0x58faf2(_0x1285ba):_0x32f0c6>0x3?_0x58faf2(_0x2f4c6c,_0x2e20c0,_0x1285ba):_0x58faf2(_0x2f4c6c,_0x2e20c0))||_0x1285ba;}return _0x32f0c6>0x3&&_0x1285ba&&Object[_0x1f6a43(0x1ba)](_0x2f4c6c,_0x2e20c0,_0x1285ba),_0x1285ba;};Object['defineProperty'](exports,_0x20c0d4(0x1f0),{'value':!![]}),exports[_0x20c0d4(0x1da)]=void 0x0;const jwt_strategy_1=require(_0x20c0d4(0x1eb)),jwtAuth_guard_1=require('../../common/auth/jwtAuth.guard'),common_1=require(_0x20c0d4(0x1ed)),jwt_1=require(_0x20c0d4(0x1cb)),passport_1=require(_0x20c0d4(0x1f1)),typeorm_1=require('@nestjs/typeorm'),chatGroup_entity_1=require(_0x20c0d4(0x1ef)),chatLog_entity_1=require(_0x20c0d4(0x1e8)),cramiPackage_entity_1=require(_0x20c0d4(0x1d6)),config_entity_1=require('../globalConfig/config.entity'),mailer_service_1=require(_0x20c0d4(0x1d3)),redisCache_module_1=require(_0x20c0d4(0x1be)),redisCache_service_1=require(_0x20c0d4(0x1ce)),user_entity_1=require(_0x20c0d4(0x1cf)),user_module_1=require('../user/user.module'),accountLog_entity_1=require('../userBalance/accountLog.entity'),balance_entity_1=require(_0x20c0d4(0x1bd)),fingerprint_entity_1=require('../userBalance/fingerprint.entity'),userBalance_entity_1=require('../userBalance/userBalance.entity'),userBalance_service_1=require(_0x20c0d4(0x1c0)),verification_service_1=require(_0x20c0d4(0x1d8)),verifycation_entity_1=require(_0x20c0d4(0x1d9)),auth_controller_1=require('./auth.controller'),auth_service_1=require(_0x20c0d4(0x1c5));let AuthModule=class AuthModule{};function _0x32db(_0x53988f,_0x3f91ed){const _0x58fd58=_0x58fd();return _0x32db=function(_0x32db30,_0x4089eb){_0x32db30=_0x32db30-0x1b7;let _0x61da43=_0x58fd58[_0x32db30];return _0x61da43;},_0x32db(_0x53988f,_0x3f91ed);}AuthModule=__decorate([(0x0,common_1[_0x20c0d4(0x1c4)])(),(0x0,common_1[_0x20c0d4(0x1d1)])({'imports':[user_module_1[_0x20c0d4(0x1e1)],redisCache_module_1['RedisCacheModule'],passport_1['PassportModule'][_0x20c0d4(0x1e9)]({'defaultStrategy':_0x20c0d4(0x1c9)}),jwt_1[_0x20c0d4(0x1d0)][_0x20c0d4(0x1bb)]({'inject':[redisCache_service_1[_0x20c0d4(0x1ec)]],'useFactory':async _0x2b730b=>({'secret':await _0x2b730b[_0x20c0d4(0x1ca)](),'signOptions':{'expiresIn':'7d'}})}),typeorm_1[_0x20c0d4(0x1c3)][_0x20c0d4(0x1d7)]([verifycation_entity_1[_0x20c0d4(0x1de)],balance_entity_1['BalanceEntity'],accountLog_entity_1['AccountLogEntity'],config_entity_1[_0x20c0d4(0x1dc)],cramiPackage_entity_1[_0x20c0d4(0x1e3)],userBalance_entity_1[_0x20c0d4(0x1d4)],user_entity_1[_0x20c0d4(0x1cc)],fingerprint_entity_1[_0x20c0d4(0x1b9)],chatLog_entity_1[_0x20c0d4(0x1ee)],chatGroup_entity_1[_0x20c0d4(0x1c6)]])],'controllers':[auth_controller_1['AuthController']],'providers':[auth_service_1[_0x20c0d4(0x1c7)],jwt_strategy_1[_0x20c0d4(0x1e2)],jwtAuth_guard_1['JwtAuthGuard'],mailer_service_1[_0x20c0d4(0x1e6)],verification_service_1[_0x20c0d4(0x1b8)],userBalance_service_1[_0x20c0d4(0x1e7)],redisCache_service_1[_0x20c0d4(0x1ec)]],'exports':[auth_service_1[_0x20c0d4(0x1c7)]]})],AuthModule),exports[_0x20c0d4(0x1da)]=AuthModule;function _0x58fd(){const _0x1ae163=['../../common/auth/jwt.strategy','RedisCacheService','@nestjs/common','ChatLogEntity','../chatGroup/chatGroup.entity','__esModule','@nestjs/passport','function','VerificationService','FingerprintLogEntity','defineProperty','registerAsync','getOwnPropertyDescriptor','../userBalance/balance.entity','../redisCache/redisCache.module','2QMphMt','../userBalance/userBalance.service','1653400YAmomc','length','TypeOrmModule','Global','./auth.service','ChatGroupEntity','AuthService','2438568JRrclY','jwt','getJwtSecret','@nestjs/jwt','UserEntity','2251330nEoOYD','../redisCache/redisCache.service','../user/user.entity','JwtModule','Module','3570200UMWDsP','../mailer/mailer.service','UserBalanceEntity','8ypGUdX','../crami/cramiPackage.entity','forFeature','./../verification/verification.service','./../verification/verifycation.entity','AuthModule','9CDstBr','ConfigEntity','__decorate','VerifycationEntity','decorate','3479877GjJuGd','UserModule','JwtStrategy','CramiPackageEntity','392884XbuwVQ','object','MailerService','UserBalanceService','../chatLog/chatLog.entity','register','630447ftqPlZ'];_0x58fd=function(){return _0x1ae163;};return _0x58fd();}