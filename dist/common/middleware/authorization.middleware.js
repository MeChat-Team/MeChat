'use strict';const _0x5f5868=_0x32f3;function _0x4db6(){const _0x22e68e=['332QhEbrj','length','decrypt','query','http://authorization.nodeai.cn/api/domainAuth/checkDomain/mechat','889015WLtRUT','metadata','design:paramtypes','status','error','@nestjs/common','FORBIDDEN','2376044BsbNGw','\x20redisVal:','654995TdbHKb','站点尚未授权:\x20未找到授权码','code','HttpException','baseRequest','18EopZiO','RedisCacheService','授权验证请求：url:','getTime','typeorm','function','name','Connection','configVal','wishSet','x-forwarded-host','__decorate','847105csCwBT','rocketAiKey','message','logger','授权失败:\x20','defineProperty','Received\x20a\x20request\x20to\x20/api/config/setKey','站点未授权','授权验证失败：解密缓存失败\x20url:','2361392iLsgaC','json','站点尚未授权','decorate','wishGet','HttpStatus','connection','env','debug','AuthorizationMiddleware','originalUrl','default','5631cmkxwA','log','redisCacheService','headers','object','ISDEV','12797415jIyDTN','\x20code:','../utils/wishCrypto','Injectable'];_0x4db6=function(){return _0x22e68e;};return _0x4db6();}(function(_0x2cb476,_0x28afd3){const _0x22f9a2=_0x32f3,_0x4975c5=_0x2cb476();while(!![]){try{const _0x262812=-parseInt(_0x22f9a2(0x129))/0x1+-parseInt(_0x22f9a2(0x11b))/0x2*(parseInt(_0x22f9a2(0x111))/0x3)+-parseInt(_0x22f9a2(0x127))/0x4+-parseInt(_0x22f9a2(0x120))/0x5+-parseInt(_0x22f9a2(0x12e))/0x6*(-parseInt(_0x22f9a2(0x13a))/0x7)+parseInt(_0x22f9a2(0x143))/0x8+parseInt(_0x22f9a2(0x117))/0x9;if(_0x262812===_0x28afd3)break;else _0x4975c5['push'](_0x4975c5['shift']());}catch(_0x3c3b8a){_0x4975c5['push'](_0x4975c5['shift']());}}}(_0x4db6,0x53703));var __decorate=this&&this[_0x5f5868(0x139)]||function(_0x43de9c,_0x1f5db4,_0x4d53a9,_0x52b9b5){const _0x18ce4f=_0x5f5868;var _0x8ebbeb=arguments[_0x18ce4f(0x11c)],_0x4ade9c=_0x8ebbeb<0x3?_0x1f5db4:_0x52b9b5===null?_0x52b9b5=Object['getOwnPropertyDescriptor'](_0x1f5db4,_0x4d53a9):_0x52b9b5,_0x2197fb;if(typeof Reflect===_0x18ce4f(0x115)&&typeof Reflect[_0x18ce4f(0x146)]==='function')_0x4ade9c=Reflect[_0x18ce4f(0x146)](_0x43de9c,_0x1f5db4,_0x4d53a9,_0x52b9b5);else{for(var _0x2bcae9=_0x43de9c[_0x18ce4f(0x11c)]-0x1;_0x2bcae9>=0x0;_0x2bcae9--)if(_0x2197fb=_0x43de9c[_0x2bcae9])_0x4ade9c=(_0x8ebbeb<0x3?_0x2197fb(_0x4ade9c):_0x8ebbeb>0x3?_0x2197fb(_0x1f5db4,_0x4d53a9,_0x4ade9c):_0x2197fb(_0x1f5db4,_0x4d53a9))||_0x4ade9c;}return _0x8ebbeb>0x3&&_0x4ade9c&&Object[_0x18ce4f(0x13f)](_0x1f5db4,_0x4d53a9,_0x4ade9c),_0x4ade9c;},__metadata=this&&this['__metadata']||function(_0x72418c,_0x126414){const _0x4b4b61=_0x5f5868;if(typeof Reflect===_0x4b4b61(0x115)&&typeof Reflect[_0x4b4b61(0x121)]===_0x4b4b61(0x133))return Reflect['metadata'](_0x72418c,_0x126414);},AuthorizationMiddleware_1;Object[_0x5f5868(0x13f)](exports,'__esModule',{'value':!![]}),exports[_0x5f5868(0x10e)]=void 0x0;const common_1=require(_0x5f5868(0x125)),typeorm_1=require(_0x5f5868(0x132)),redisCache_service_1=require('../../modules/redisCache/redisCache.service'),baseRequest_1=require('../utils/baseRequest'),wishCrypto_1=require(_0x5f5868(0x119)),hourTimer=0x3c*0x3c*0x3e8;function _0x32f3(_0x4f6227,_0x12a328){const _0x4db655=_0x4db6();return _0x32f3=function(_0x32f336,_0x1bc4ef){_0x32f336=_0x32f336-0x10e;let _0x386cd5=_0x4db655[_0x32f336];return _0x386cd5;},_0x32f3(_0x4f6227,_0x12a328);}let AuthorizationMiddleware=AuthorizationMiddleware_1=class AuthorizationMiddleware{constructor(_0x246331,_0x348347){const _0x55661e=_0x5f5868;this[_0x55661e(0x149)]=_0x246331,this[_0x55661e(0x113)]=_0x348347,this['logger']=new common_1['Logger'](AuthorizationMiddleware_1[_0x55661e(0x134)]);}async['use'](_0x1be7b6,_0xee1a4e,_0x5b0c9a){const _0xbbbda=_0x5f5868;var _0x3a1005,_0x2cb2e4;const _0x200027=_0x1be7b6[_0xbbbda(0x114)][_0xbbbda(0x138)]||_0x1be7b6[_0xbbbda(0x114)]['host'],_0x39ed6d=((_0x3a1005=_0x200027===null||_0x200027===void 0x0?void 0x0:_0x200027['split'](':'))===null||_0x3a1005===void 0x0?void 0x0:_0x3a1005[0x0])||'';if(_0x1be7b6[_0xbbbda(0x10f)]=='/api/config/setKey')return this[_0xbbbda(0x13d)][_0xbbbda(0x112)](_0xbbbda(0x140)),_0x5b0c9a();if(process[_0xbbbda(0x14a)][_0xbbbda(0x116)]==='true')return _0x5b0c9a();try{const _0x18be26=_0xbbbda(0x13b);let _0xa4ae8=await this[_0xbbbda(0x149)][_0xbbbda(0x11e)]('SELECT\x20configVal\x20FROM\x20config\x20WHERE\x20configKey=?',[_0x18be26]);_0xa4ae8=(_0x2cb2e4=_0xa4ae8[0x0])===null||_0x2cb2e4===void 0x0?void 0x0:_0x2cb2e4[_0xbbbda(0x136)];if(!_0xa4ae8)return this['logger'][_0xbbbda(0x124)](_0xbbbda(0x12a)),_0xee1a4e[_0xbbbda(0x123)](0x193)['json']({'message':_0xbbbda(0x145)});const _0x14ae38=await this[_0xbbbda(0x113)][_0xbbbda(0x147)](_0xa4ae8);if(_0x14ae38)try{const _0x139025=new Date()['getTime'](),_0x197b10=wishCrypto_1[_0xbbbda(0x110)][_0xbbbda(0x11d)](_0x14ae38);if(_0x139025<Number(_0x197b10))return _0x5b0c9a();}catch(_0x420dd7){this[_0xbbbda(0x13d)][_0xbbbda(0x14b)](_0xbbbda(0x142)+_0x39ed6d+_0xbbbda(0x118)+_0xa4ae8+_0xbbbda(0x128)+_0x14ae38);}const _0x2078eb={'domain':_0x39ed6d,'authCode':_0xa4ae8};this[_0xbbbda(0x13d)][_0xbbbda(0x14b)](_0xbbbda(0x130)+_0x39ed6d+_0xbbbda(0x118)+_0xa4ae8);const _0x1cfe97=await(0x0,baseRequest_1[_0xbbbda(0x12d)])({'method':'post','url':_0xbbbda(0x11f),'data':_0x2078eb});if(_0x1cfe97[_0xbbbda(0x12b)]==0x7)throw new common_1[(_0xbbbda(0x12c))](_0xbbbda(0x141),common_1[_0xbbbda(0x148)][_0xbbbda(0x126)]);else{const _0x30997e=new Date()[_0xbbbda(0x131)](),_0x17d423=_0x30997e+hourTimer,_0x5567b9=wishCrypto_1['default']['encrypt'](''+_0x17d423);await this[_0xbbbda(0x113)][_0xbbbda(0x137)](_0xa4ae8,_0x5567b9,0x3c*0x3c*0x1),_0x5b0c9a();}}catch(_0x1958a1){this[_0xbbbda(0x13d)][_0xbbbda(0x124)](_0xbbbda(0x13e)+(_0x1958a1[_0xbbbda(0x13c)]||_0x1958a1)),_0xee1a4e['status'](0x1f4)[_0xbbbda(0x144)]({'message':'授权未通过'});}}};AuthorizationMiddleware=AuthorizationMiddleware_1=__decorate([(0x0,common_1[_0x5f5868(0x11a)])(),__metadata(_0x5f5868(0x122),[typeorm_1[_0x5f5868(0x135)],redisCache_service_1[_0x5f5868(0x12f)]])],AuthorizationMiddleware),exports['AuthorizationMiddleware']=AuthorizationMiddleware;