'use strict';const _0x513c63=_0x1bf0;(function(_0x43e759,_0x4ffdb6){const _0x3b59b2=_0x1bf0,_0x3508f6=_0x43e759();while(!![]){try{const _0x1f3849=-parseInt(_0x3b59b2(0x19b))/0x1+parseInt(_0x3b59b2(0x1b1))/0x2+parseInt(_0x3b59b2(0x1a1))/0x3*(parseInt(_0x3b59b2(0x1b8))/0x4)+parseInt(_0x3b59b2(0x1b6))/0x5+parseInt(_0x3b59b2(0x1a2))/0x6*(-parseInt(_0x3b59b2(0x1bc))/0x7)+-parseInt(_0x3b59b2(0x1b0))/0x8+parseInt(_0x3b59b2(0x1b4))/0x9*(parseInt(_0x3b59b2(0x1b7))/0xa);if(_0x1f3849===_0x4ffdb6)break;else _0x3508f6['push'](_0x3508f6['shift']());}catch(_0x4cd484){_0x3508f6['push'](_0x3508f6['shift']());}}}(_0x3930,0xa2591));function _0x3930(){const _0x158923=['../globalConfig/config.entity','11431287rAKCee','function','463695VrwswZ','10EiVqrZ','1776692UsZbGw','AccountLogEntity','ConfigEntity','UserBalanceEntity','6472543YljJUB','../userBalance/userBalance.entity','../userBalance/accountLog.entity','object','780727IXovlH','decorate','FingerprintLogEntity','__decorate','defineProperty','UserEntity','6CzEzAx','6CreDTq','ChatGroupEntity','../user/user.entity','Module','../chatLog/chatLog.entity','../userBalance/fingerprint.entity','../userBalance/balance.entity','../chatGroup/chatGroup.entity','CramiEntity','ChatLogEntity','CramiModule','Global','./crami.service','./cramiPackage.entity','5610776KlBUco','1640944cxaEiQ','CramiService'];_0x3930=function(){return _0x158923;};return _0x3930();}var __decorate=this&&this[_0x513c63(0x19e)]||function(_0x3a1a44,_0x3ab802,_0x279eca,_0x797e7d){const _0x14746a=_0x513c63;var _0x2ed97f=arguments['length'],_0x256d47=_0x2ed97f<0x3?_0x3ab802:_0x797e7d===null?_0x797e7d=Object['getOwnPropertyDescriptor'](_0x3ab802,_0x279eca):_0x797e7d,_0x22e828;if(typeof Reflect===_0x14746a(0x19a)&&typeof Reflect[_0x14746a(0x19c)]===_0x14746a(0x1b5))_0x256d47=Reflect[_0x14746a(0x19c)](_0x3a1a44,_0x3ab802,_0x279eca,_0x797e7d);else{for(var _0x3ebc45=_0x3a1a44['length']-0x1;_0x3ebc45>=0x0;_0x3ebc45--)if(_0x22e828=_0x3a1a44[_0x3ebc45])_0x256d47=(_0x2ed97f<0x3?_0x22e828(_0x256d47):_0x2ed97f>0x3?_0x22e828(_0x3ab802,_0x279eca,_0x256d47):_0x22e828(_0x3ab802,_0x279eca))||_0x256d47;}return _0x2ed97f>0x3&&_0x256d47&&Object[_0x14746a(0x19f)](_0x3ab802,_0x279eca,_0x256d47),_0x256d47;};Object[_0x513c63(0x19f)](exports,'__esModule',{'value':!![]}),exports[_0x513c63(0x1ac)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require('@nestjs/typeorm'),chatGroup_entity_1=require(_0x513c63(0x1a9)),chatLog_entity_1=require(_0x513c63(0x1a6)),config_entity_1=require(_0x513c63(0x1b3)),user_entity_1=require(_0x513c63(0x1a4)),accountLog_entity_1=require(_0x513c63(0x1be)),balance_entity_1=require(_0x513c63(0x1a8)),fingerprint_entity_1=require(_0x513c63(0x1a7)),userBalance_entity_1=require(_0x513c63(0x1bd)),userBalance_service_1=require('../userBalance/userBalance.service'),crami_controller_1=require('./crami.controller'),crami_entity_1=require('./crami.entity'),crami_service_1=require(_0x513c63(0x1ae)),cramiPackage_entity_1=require(_0x513c63(0x1af));let CramiModule=class CramiModule{};function _0x1bf0(_0x2f7a33,_0xa56b38){const _0x39308e=_0x3930();return _0x1bf0=function(_0x1bf017,_0x9286b4){_0x1bf017=_0x1bf017-0x19a;let _0x3aab96=_0x39308e[_0x1bf017];return _0x3aab96;},_0x1bf0(_0x2f7a33,_0xa56b38);}CramiModule=__decorate([(0x0,common_1[_0x513c63(0x1ad)])(),(0x0,common_1[_0x513c63(0x1a5)])({'imports':[typeorm_1['TypeOrmModule']['forFeature']([crami_entity_1[_0x513c63(0x1aa)],cramiPackage_entity_1['CramiPackageEntity'],user_entity_1[_0x513c63(0x1a0)],balance_entity_1['BalanceEntity'],accountLog_entity_1[_0x513c63(0x1b9)],config_entity_1[_0x513c63(0x1ba)],userBalance_entity_1[_0x513c63(0x1bb)],fingerprint_entity_1[_0x513c63(0x19d)],chatLog_entity_1[_0x513c63(0x1ab)],chatGroup_entity_1[_0x513c63(0x1a3)]])],'providers':[crami_service_1[_0x513c63(0x1b2)],userBalance_service_1['UserBalanceService']],'controllers':[crami_controller_1['CramiController']],'exports':[crami_service_1[_0x513c63(0x1b2)]]})],CramiModule),exports[_0x513c63(0x1ac)]=CramiModule;