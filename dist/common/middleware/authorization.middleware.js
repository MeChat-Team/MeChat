'use strict';const _0x45cbd0=_0x4da6;(function(_0x34403b,_0x2e8b37){const _0x9c8a3a=_0x4da6,_0x566bf9=_0x34403b();while(!![]){try{const _0x1a4884=parseInt(_0x9c8a3a(0x14c))/0x1+-parseInt(_0x9c8a3a(0x127))/0x2*(-parseInt(_0x9c8a3a(0x128))/0x3)+-parseInt(_0x9c8a3a(0x11d))/0x4+parseInt(_0x9c8a3a(0x141))/0x5+parseInt(_0x9c8a3a(0x129))/0x6+-parseInt(_0x9c8a3a(0x12a))/0x7+-parseInt(_0x9c8a3a(0x136))/0x8*(parseInt(_0x9c8a3a(0x12d))/0x9);if(_0x1a4884===_0x2e8b37)break;else _0x566bf9['push'](_0x566bf9['shift']());}catch(_0x5e8264){_0x566bf9['push'](_0x566bf9['shift']());}}}(_0x2ba1,0x945e3));function _0x4da6(_0x12516e,_0xc5c0f9){const _0x2ba102=_0x2ba1();return _0x4da6=function(_0x4da61b,_0xead907){_0x4da61b=_0x4da61b-0x119;let _0x124fd5=_0x2ba102[_0x4da61b];return _0x124fd5;},_0x4da6(_0x12516e,_0xc5c0f9);}var __decorate=this&&this[_0x45cbd0(0x151)]||function(_0x31e21f,_0x181611,_0x347381,_0x2fb413){const _0x2f3901=_0x45cbd0;var _0x31d3f1=arguments[_0x2f3901(0x154)],_0x1c1dc3=_0x31d3f1<0x3?_0x181611:_0x2fb413===null?_0x2fb413=Object[_0x2f3901(0x147)](_0x181611,_0x347381):_0x2fb413,_0x2a169c;if(typeof Reflect===_0x2f3901(0x14f)&&typeof Reflect[_0x2f3901(0x13e)]===_0x2f3901(0x143))_0x1c1dc3=Reflect[_0x2f3901(0x13e)](_0x31e21f,_0x181611,_0x347381,_0x2fb413);else{for(var _0x528729=_0x31e21f[_0x2f3901(0x154)]-0x1;_0x528729>=0x0;_0x528729--)if(_0x2a169c=_0x31e21f[_0x528729])_0x1c1dc3=(_0x31d3f1<0x3?_0x2a169c(_0x1c1dc3):_0x31d3f1>0x3?_0x2a169c(_0x181611,_0x347381,_0x1c1dc3):_0x2a169c(_0x181611,_0x347381))||_0x1c1dc3;}return _0x31d3f1>0x3&&_0x1c1dc3&&Object[_0x2f3901(0x13f)](_0x181611,_0x347381,_0x1c1dc3),_0x1c1dc3;},__metadata=this&&this[_0x45cbd0(0x125)]||function(_0x212845,_0x1045f1){const _0x1e4d53=_0x45cbd0;if(typeof Reflect===_0x1e4d53(0x14f)&&typeof Reflect[_0x1e4d53(0x134)]===_0x1e4d53(0x143))return Reflect[_0x1e4d53(0x134)](_0x212845,_0x1045f1);},AuthorizationMiddleware_1;function _0x2ba1(){const _0x1e1970=['defineProperty','debug','3142600JTKAxb','connection','function','design:paramtypes','name','getTime','getOwnPropertyDescriptor','default','RedisCacheService','encrypt','ISDEV','208273ijEqnm','../../modules/redisCache/redisCache.service','Connection','object','split','__decorate','host','授权验证失败：解密缓存失败\x20url:','length','env','站点尚未授权:\x20未找到授权码','code','AuthorizationMiddleware','message','configVal','status','wishGet','\x20code:','/api/config/setKey','1349588dexrIx','站点尚未授权','../utils/baseRequest','log','true','授权未通过','站点未授权','use','__metadata','__esModule','310456MYgtHS','18pLFMiv','7062840wSPfsn','4111135PbiIvE','query','HttpException','1155996mfbvnK','@nestjs/common','HttpStatus','授权失败:\x20','error','post','headers','metadata','Injectable','88HOYsiw','redisCacheService','baseRequest','logger','\x20redisVal:','http://authorization.nodeai.cn/api/domainAuth/checkDomain/mechat','授权验证请求：url:','SELECT\x20configVal\x20FROM\x20config\x20WHERE\x20configKey=?','decorate'];_0x2ba1=function(){return _0x1e1970;};return _0x2ba1();}Object[_0x45cbd0(0x13f)](exports,_0x45cbd0(0x126),{'value':!![]}),exports['AuthorizationMiddleware']=void 0x0;const common_1=require(_0x45cbd0(0x12e)),typeorm_1=require('typeorm'),redisCache_service_1=require(_0x45cbd0(0x14d)),baseRequest_1=require(_0x45cbd0(0x11f)),wishCrypto_1=require('../utils/wishCrypto'),hourTimer=0x3c*0x3c*0x3e8;let AuthorizationMiddleware=AuthorizationMiddleware_1=class AuthorizationMiddleware{constructor(_0x384e9d,_0x9ae52b){const _0x2ad46c=_0x45cbd0;this[_0x2ad46c(0x142)]=_0x384e9d,this[_0x2ad46c(0x137)]=_0x9ae52b,this[_0x2ad46c(0x139)]=new common_1['Logger'](AuthorizationMiddleware_1[_0x2ad46c(0x145)]);}async[_0x45cbd0(0x124)](_0x579259,_0x54cc3a,_0x2f6561){const _0x453bc2=_0x45cbd0;var _0x27a4ed,_0x5e37e1;const _0x150cc4=_0x579259[_0x453bc2(0x133)]['x-forwarded-host']||_0x579259['headers'][_0x453bc2(0x152)],_0x2193c5=((_0x27a4ed=_0x150cc4===null||_0x150cc4===void 0x0?void 0x0:_0x150cc4[_0x453bc2(0x150)](':'))===null||_0x27a4ed===void 0x0?void 0x0:_0x27a4ed[0x0])||'';if(_0x579259['originalUrl']==_0x453bc2(0x11c))return this[_0x453bc2(0x139)][_0x453bc2(0x120)]('Received\x20a\x20request\x20to\x20/api/config/setKey'),_0x2f6561();if(process[_0x453bc2(0x155)][_0x453bc2(0x14b)]===_0x453bc2(0x121))return _0x2f6561();try{const _0x454e51='rocketAiKey';let _0x3c5d76=await this['connection'][_0x453bc2(0x12b)](_0x453bc2(0x13d),[_0x454e51]);_0x3c5d76=(_0x5e37e1=_0x3c5d76[0x0])===null||_0x5e37e1===void 0x0?void 0x0:_0x5e37e1[_0x453bc2(0x15a)];if(!_0x3c5d76)return this['logger'][_0x453bc2(0x131)](_0x453bc2(0x156)),_0x54cc3a[_0x453bc2(0x119)](0x193)['json']({'message':_0x453bc2(0x11e)});const _0x5e297e=await this[_0x453bc2(0x137)][_0x453bc2(0x11a)](_0x3c5d76);if(_0x5e297e)try{const _0x93bfbe=new Date()['getTime'](),_0x34746e=wishCrypto_1[_0x453bc2(0x148)]['decrypt'](_0x5e297e);if(_0x93bfbe<Number(_0x34746e))return _0x2f6561();}catch(_0x475d58){this[_0x453bc2(0x139)][_0x453bc2(0x140)](_0x453bc2(0x153)+_0x2193c5+_0x453bc2(0x11b)+_0x3c5d76+_0x453bc2(0x13a)+_0x5e297e);}const _0xe008c4={'domain':_0x2193c5,'authCode':_0x3c5d76};this['logger'][_0x453bc2(0x140)](_0x453bc2(0x13c)+_0x2193c5+'\x20code:'+_0x3c5d76);const _0x5e4008=await(0x0,baseRequest_1[_0x453bc2(0x138)])({'method':_0x453bc2(0x132),'url':_0x453bc2(0x13b),'data':_0xe008c4});if(_0x5e4008[_0x453bc2(0x157)]==0x7)throw new common_1[(_0x453bc2(0x12c))](_0x453bc2(0x123),common_1[_0x453bc2(0x12f)]['FORBIDDEN']);else{const _0x30d57a=new Date()[_0x453bc2(0x146)](),_0x95990e=_0x30d57a+hourTimer,_0x136f39=wishCrypto_1[_0x453bc2(0x148)][_0x453bc2(0x14a)](''+_0x95990e);await this['redisCacheService']['wishSet'](_0x3c5d76,_0x136f39,0x3c*0x3c*0x1),_0x2f6561();}}catch(_0xa43059){this[_0x453bc2(0x139)][_0x453bc2(0x131)](_0x453bc2(0x130)+(_0xa43059[_0x453bc2(0x159)]||_0xa43059)),_0x54cc3a[_0x453bc2(0x119)](0x1f4)['json']({'message':_0x453bc2(0x122)});}}};AuthorizationMiddleware=AuthorizationMiddleware_1=__decorate([(0x0,common_1[_0x45cbd0(0x135)])(),__metadata(_0x45cbd0(0x144),[typeorm_1[_0x45cbd0(0x14e)],redisCache_service_1[_0x45cbd0(0x149)]])],AuthorizationMiddleware),exports[_0x45cbd0(0x158)]=AuthorizationMiddleware;