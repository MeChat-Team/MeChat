'use strict';function _0x5847(_0x2d9e98,_0x58917e){const _0x347ee5=_0x347e();return _0x5847=function(_0x584765,_0x2f724f){_0x584765=_0x584765-0x8d;let _0x52a8d5=_0x347ee5[_0x584765];return _0x52a8d5;},_0x5847(_0x2d9e98,_0x58917e);}const _0x3f650d=_0x5847;(function(_0x123cf8,_0x37cab8){const _0x1c4278=_0x5847,_0x363505=_0x123cf8();while(!![]){try{const _0x3ae018=parseInt(_0x1c4278(0xc0))/0x1*(-parseInt(_0x1c4278(0x92))/0x2)+-parseInt(_0x1c4278(0xc8))/0x3*(parseInt(_0x1c4278(0xa3))/0x4)+-parseInt(_0x1c4278(0xc6))/0x5*(-parseInt(_0x1c4278(0x9c))/0x6)+-parseInt(_0x1c4278(0xaf))/0x7*(-parseInt(_0x1c4278(0x99))/0x8)+parseInt(_0x1c4278(0xc2))/0x9+parseInt(_0x1c4278(0xa1))/0xa+-parseInt(_0x1c4278(0xb3))/0xb*(-parseInt(_0x1c4278(0x93))/0xc);if(_0x3ae018===_0x37cab8)break;else _0x363505['push'](_0x363505['shift']());}catch(_0x232edb){_0x363505['push'](_0x363505['shift']());}}}(_0x347e,0xca71e));var __decorate=this&&this[_0x3f650d(0xa6)]||function(_0x29730f,_0x2962f1,_0x155976,_0x58356e){const _0x15a85f=_0x3f650d;var _0x26c752=arguments[_0x15a85f(0xbe)],_0x1551c8=_0x26c752<0x3?_0x2962f1:_0x58356e===null?_0x58356e=Object['getOwnPropertyDescriptor'](_0x2962f1,_0x155976):_0x58356e,_0x31d327;if(typeof Reflect==='object'&&typeof Reflect[_0x15a85f(0xaa)]===_0x15a85f(0xc5))_0x1551c8=Reflect[_0x15a85f(0xaa)](_0x29730f,_0x2962f1,_0x155976,_0x58356e);else{for(var _0x3e1694=_0x29730f[_0x15a85f(0xbe)]-0x1;_0x3e1694>=0x0;_0x3e1694--)if(_0x31d327=_0x29730f[_0x3e1694])_0x1551c8=(_0x26c752<0x3?_0x31d327(_0x1551c8):_0x26c752>0x3?_0x31d327(_0x2962f1,_0x155976,_0x1551c8):_0x31d327(_0x2962f1,_0x155976))||_0x1551c8;}return _0x26c752>0x3&&_0x1551c8&&Object[_0x15a85f(0x9d)](_0x2962f1,_0x155976,_0x1551c8),_0x1551c8;};function _0x347e(){const _0x36695e=['65724sUSttz','defineProperty','../ai/openaiChat.service','ConfigEntity','forFeature','6756560cFBEgm','../ai/stableDiffusion.service','16NjYGoc','TypeOrmModule','UserEntity','__decorate','SunoService','RedisCacheService','../crami/cramiPackage.entity','decorate','StableDiffusionService','Module','../userBalance/userBalance.service','../globalConfig/config.entity','7KRgrOX','Global','VerificationService','AppEntity','430309qcAztb','../redisCache/redisCache.service','../mailer/mailer.service','ChatController','../ai/fluxDraw.service','../userBalance/balance.entity','../verification/verifycation.entity','ChatService','@nestjs/typeorm','BalanceEntity','OpenAIDrawService','length','../userBalance/fingerprint.entity','24872ZJMNss','../chatGroup/chatGroup.entity','2596599YhjidD','./chat.controller','../verification/verification.service','function','430aDWEGl','../ai/cogVideo.service','1202133BLFyrb','ChatGroupEntity','ChatLogService','__esModule','VerifycationEntity','ChatLogEntity','../plugin/plugin.entity','FingerprintLogEntity','../ai/openaiDraw.service','../ai/lumaVideo.service','48gfImWl','228slSVft','CramiPackageEntity','./chat.service','PluginEntity','../user/user.service','ChatModule','3036112EFCpkw','../app/app.entity','MidjourneyService'];_0x347e=function(){return _0x36695e;};return _0x347e();}Object['defineProperty'](exports,_0x3f650d(0xcb),{'value':!![]}),exports[_0x3f650d(0x98)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x3f650d(0xbb)),aiPPT_1=require('../ai/aiPPT'),cogVideo_service_1=require(_0x3f650d(0xc7)),fluxDraw_service_1=require(_0x3f650d(0xb7)),lumaVideo_service_1=require(_0x3f650d(0x91)),midjourneyDraw_service_1=require('../ai/midjourneyDraw.service'),openaiChat_service_1=require(_0x3f650d(0x9e)),openaiDraw_service_1=require(_0x3f650d(0x90)),stableDiffusion_service_1=require(_0x3f650d(0xa2)),suno_service_1=require('../ai/suno.service'),app_entity_1=require(_0x3f650d(0x9a)),chatGroup_entity_1=require(_0x3f650d(0xc1)),chatLog_entity_1=require('../chatLog/chatLog.entity'),chatLog_service_1=require('../chatLog/chatLog.service'),cramiPackage_entity_1=require(_0x3f650d(0xa9)),config_entity_1=require(_0x3f650d(0xae)),mailer_service_1=require(_0x3f650d(0xb5)),plugin_entity_1=require(_0x3f650d(0x8e)),redisCache_service_1=require(_0x3f650d(0xb4)),user_entity_1=require('../user/user.entity'),user_service_1=require(_0x3f650d(0x97)),accountLog_entity_1=require('../userBalance/accountLog.entity'),balance_entity_1=require(_0x3f650d(0xb8)),fingerprint_entity_1=require(_0x3f650d(0xbf)),userBalance_entity_1=require('../userBalance/userBalance.entity'),userBalance_service_1=require(_0x3f650d(0xad)),verification_service_1=require(_0x3f650d(0xc4)),verifycation_entity_1=require(_0x3f650d(0xb9)),chat_controller_1=require(_0x3f650d(0xc3)),chat_service_1=require(_0x3f650d(0x95));let ChatModule=class ChatModule{};ChatModule=__decorate([(0x0,common_1[_0x3f650d(0xb0)])(),(0x0,common_1[_0x3f650d(0xac)])({'imports':[typeorm_1[_0x3f650d(0xa4)][_0x3f650d(0xa0)]([balance_entity_1[_0x3f650d(0xbc)],user_entity_1[_0x3f650d(0xa5)],plugin_entity_1[_0x3f650d(0x96)],verifycation_entity_1[_0x3f650d(0xcc)],chatLog_entity_1[_0x3f650d(0x8d)],accountLog_entity_1['AccountLogEntity'],config_entity_1[_0x3f650d(0x9f)],user_entity_1[_0x3f650d(0xa5)],cramiPackage_entity_1[_0x3f650d(0x94)],chatGroup_entity_1[_0x3f650d(0xc9)],app_entity_1[_0x3f650d(0xb2)],userBalance_entity_1['UserBalanceEntity'],fingerprint_entity_1[_0x3f650d(0x8f)]])],'controllers':[chat_controller_1[_0x3f650d(0xb6)]],'providers':[chat_service_1['ChatService'],userBalance_service_1['UserBalanceService'],user_service_1['UserService'],verification_service_1[_0x3f650d(0xb1)],chatLog_service_1[_0x3f650d(0xca)],redisCache_service_1[_0x3f650d(0xa8)],mailer_service_1['MailerService'],suno_service_1[_0x3f650d(0xa7)],openaiChat_service_1['OpenAIChatService'],stableDiffusion_service_1[_0x3f650d(0xab)],midjourneyDraw_service_1[_0x3f650d(0x9b)],openaiDraw_service_1[_0x3f650d(0xbd)],lumaVideo_service_1['LumaVideoService'],cogVideo_service_1['CogVideoService'],fluxDraw_service_1['FluxDrawService'],aiPPT_1['AiPptService']],'exports':[chat_service_1[_0x3f650d(0xba)]]})],ChatModule),exports[_0x3f650d(0x98)]=ChatModule;