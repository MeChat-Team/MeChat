'use strict';const _0x3ee8ba=_0x3125;(function(_0x394362,_0x31e165){const _0x727b02=_0x3125,_0x5ac59d=_0x394362();while(!![]){try{const _0x38057d=parseInt(_0x727b02(0x8e))/0x1+parseInt(_0x727b02(0x98))/0x2+parseInt(_0x727b02(0x92))/0x3*(-parseInt(_0x727b02(0x8a))/0x4)+parseInt(_0x727b02(0x8f))/0x5*(-parseInt(_0x727b02(0x8c))/0x6)+parseInt(_0x727b02(0x99))/0x7*(-parseInt(_0x727b02(0x95))/0x8)+parseInt(_0x727b02(0x9e))/0x9+-parseInt(_0x727b02(0x89))/0xa*(-parseInt(_0x727b02(0x87))/0xb);if(_0x38057d===_0x31e165)break;else _0x5ac59d['push'](_0x5ac59d['shift']());}catch(_0x1d8ec7){_0x5ac59d['push'](_0x5ac59d['shift']());}}}(_0x218a,0xb21fa));var __decorate=this&&this[_0x3ee8ba(0x8d)]||function(_0x2feea4,_0x4e6467,_0x3b07a4,_0x3cdf42){const _0xa40eae=_0x3ee8ba;var _0x3dddb1=arguments[_0xa40eae(0x9f)],_0x1bf8b2=_0x3dddb1<0x3?_0x4e6467:_0x3cdf42===null?_0x3cdf42=Object[_0xa40eae(0x88)](_0x4e6467,_0x3b07a4):_0x3cdf42,_0x54e73c;if(typeof Reflect===_0xa40eae(0x93)&&typeof Reflect['decorate']==='function')_0x1bf8b2=Reflect[_0xa40eae(0x9b)](_0x2feea4,_0x4e6467,_0x3b07a4,_0x3cdf42);else{for(var _0x2a88cf=_0x2feea4[_0xa40eae(0x9f)]-0x1;_0x2a88cf>=0x0;_0x2a88cf--)if(_0x54e73c=_0x2feea4[_0x2a88cf])_0x1bf8b2=(_0x3dddb1<0x3?_0x54e73c(_0x1bf8b2):_0x3dddb1>0x3?_0x54e73c(_0x4e6467,_0x3b07a4,_0x1bf8b2):_0x54e73c(_0x4e6467,_0x3b07a4))||_0x1bf8b2;}return _0x3dddb1>0x3&&_0x1bf8b2&&Object[_0xa40eae(0x90)](_0x4e6467,_0x3b07a4,_0x1bf8b2),_0x1bf8b2;};Object['defineProperty'](exports,_0x3ee8ba(0x91),{'value':!![]}),exports[_0x3ee8ba(0x97)]=void 0x0;const typeorm_1=require('@nestjs/typeorm'),common_1=require('@nestjs/common'),verification_service_1=require(_0x3ee8ba(0x94)),verification_controller_1=require(_0x3ee8ba(0xa4)),verifycation_entity_1=require(_0x3ee8ba(0xa2)),redisCache_service_1=require('../redisCache/redisCache.service'),globalConfig_module_1=require(_0x3ee8ba(0x96)),user_module_1=require('../user/user.module');function _0x3125(_0x22e826,_0x13a681){const _0x218a3d=_0x218a();return _0x3125=function(_0x312563,_0x385e51){_0x312563=_0x312563-0x86;let _0x50b8dc=_0x218a3d[_0x312563];return _0x50b8dc;},_0x3125(_0x22e826,_0x13a681);}function _0x218a(){const _0x36c393=['UserModule','./verification.controller','RedisCacheService','11DdLZai','getOwnPropertyDescriptor','8130140iLRWOt','24hfSbUs','Module','3732kTeEgG','__decorate','975147WOLOZv','3670geqZiT','defineProperty','__esModule','706239XkJxWE','object','./verification.service','8fNcqeK','../globalConfig/globalConfig.module','VerificationModule','849944MSHoQq','3552997ePrqhh','VerifycationEntity','decorate','VerificationService','VerificationController','8037522dfYCDw','length','TypeOrmModule','GlobalConfigModule','./verifycation.entity'];_0x218a=function(){return _0x36c393;};return _0x218a();}let VerificationModule=class VerificationModule{};VerificationModule=__decorate([(0x0,common_1[_0x3ee8ba(0x8b)])({'imports':[typeorm_1[_0x3ee8ba(0xa0)]['forFeature']([verifycation_entity_1[_0x3ee8ba(0x9a)]]),globalConfig_module_1[_0x3ee8ba(0xa1)],user_module_1[_0x3ee8ba(0xa3)]],'controllers':[verification_controller_1[_0x3ee8ba(0x9d)]],'providers':[redisCache_service_1[_0x3ee8ba(0x86)],verification_service_1[_0x3ee8ba(0x9c)]],'exports':[verification_service_1[_0x3ee8ba(0x9c)]]})],VerificationModule),exports['VerificationModule']=VerificationModule;