'use strict';function _0x2c2f(){const _0x31601d=['get','__metadata','104322iZkRRb','108JStIvr','super','wishGet','__decorate','8DgNdmP','string','admin','7271970aUbUhn','function','9RSXcce','HttpStatus','metadata','defineProperty','del','design:paramtypes','Injectable','set','36425213pEkwGl','wishSet','expire','JWT_SECRET','JWT\x20secret\x20not\x20found\x20in\x20Redis','checkTokenAuth','33942LjBEsl','redisClient','ttl','parse','__param','invalidateTokens','length','2820622PPzGTh','7722948RRnNRd','zRange','UNAUTHORIZED','saveToken','Inject','getJwtSecret','token:','2611235AUbmWs','decorate','您已在其他设备覆盖登录、请您重新登录！','RedisCacheService','@nestjs/common','getOwnPropertyDescriptor','tokens:','70bAbEkD','object'];_0x2c2f=function(){return _0x31601d;};return _0x2c2f();}const _0x1aa4bc=_0x4820;(function(_0x3bddea,_0x5f3ddc){const _0x21a1fa=_0x4820,_0x322c77=_0x3bddea();while(!![]){try{const _0x1e3c55=-parseInt(_0x21a1fa(0x1b0))/0x1*(-parseInt(_0x21a1fa(0x194))/0x2)+-parseInt(_0x21a1fa(0x198))/0x3*(-parseInt(_0x21a1fa(0x199))/0x4)+-parseInt(_0x21a1fa(0x18d))/0x5+parseInt(_0x21a1fa(0x186))/0x6+parseInt(_0x21a1fa(0x185))/0x7*(parseInt(_0x21a1fa(0x19d))/0x8)+parseInt(_0x21a1fa(0x1a2))/0x9*(parseInt(_0x21a1fa(0x1a0))/0xa)+-parseInt(_0x21a1fa(0x1aa))/0xb;if(_0x1e3c55===_0x5f3ddc)break;else _0x322c77['push'](_0x322c77['shift']());}catch(_0x2868f0){_0x322c77['push'](_0x322c77['shift']());}}}(_0x2c2f,0xad78b));var __decorate=this&&this[_0x1aa4bc(0x19c)]||function(_0x18fcd7,_0x4d7b2f,_0x46574b,_0x1300b4){const _0x3fa288=_0x1aa4bc;var _0x5010dd=arguments['length'],_0x2d2037=_0x5010dd<0x3?_0x4d7b2f:_0x1300b4===null?_0x1300b4=Object[_0x3fa288(0x192)](_0x4d7b2f,_0x46574b):_0x1300b4,_0x5dfe23;if(typeof Reflect===_0x3fa288(0x195)&&typeof Reflect['decorate']===_0x3fa288(0x1a1))_0x2d2037=Reflect[_0x3fa288(0x18e)](_0x18fcd7,_0x4d7b2f,_0x46574b,_0x1300b4);else{for(var _0x16ef0a=_0x18fcd7[_0x3fa288(0x184)]-0x1;_0x16ef0a>=0x0;_0x16ef0a--)if(_0x5dfe23=_0x18fcd7[_0x16ef0a])_0x2d2037=(_0x5010dd<0x3?_0x5dfe23(_0x2d2037):_0x5010dd>0x3?_0x5dfe23(_0x4d7b2f,_0x46574b,_0x2d2037):_0x5dfe23(_0x4d7b2f,_0x46574b))||_0x2d2037;}return _0x5010dd>0x3&&_0x2d2037&&Object[_0x3fa288(0x1a5)](_0x4d7b2f,_0x46574b,_0x2d2037),_0x2d2037;},__metadata=this&&this[_0x1aa4bc(0x197)]||function(_0x451fa6,_0xf869fe){const _0x2f601a=_0x1aa4bc;if(typeof Reflect===_0x2f601a(0x195)&&typeof Reflect[_0x2f601a(0x1a4)]===_0x2f601a(0x1a1))return Reflect[_0x2f601a(0x1a4)](_0x451fa6,_0xf869fe);},__param=this&&this[_0x1aa4bc(0x182)]||function(_0x5982b6,_0x123915){return function(_0x1302ad,_0x422c79){_0x123915(_0x1302ad,_0x422c79,_0x5982b6);};};Object[_0x1aa4bc(0x1a5)](exports,'__esModule',{'value':!![]}),exports['RedisCacheService']=void 0x0;function _0x4820(_0x582574,_0x164ae8){const _0x2c2f79=_0x2c2f();return _0x4820=function(_0x482061,_0x54e7a7){_0x482061=_0x482061-0x17f;let _0x52ea50=_0x2c2f79[_0x482061];return _0x52ea50;},_0x4820(_0x582574,_0x164ae8);}const common_1=require(_0x1aa4bc(0x191));let RedisCacheService=class RedisCacheService{constructor(_0x3e1ec8){this['redisClient']=_0x3e1ec8;}async[_0x1aa4bc(0x196)](_0x5ed68a){const _0x3e4a01=_0x1aa4bc,{key:_0x4416dd}=_0x5ed68a,_0x2404f8=await this[_0x3e4a01(0x17f)]['get'](_0x4416dd);return await this['redisClient'][_0x3e4a01(0x196)](_0x4416dd);}async[_0x1aa4bc(0x1a9)](_0x25ac1c,_0x3f92df){const _0x39a3fc=_0x1aa4bc;try{const {key:_0x413f4b,val:_0x42a5ed}=_0x25ac1c;await this[_0x39a3fc(0x17f)][_0x39a3fc(0x1a9)](_0x413f4b,_0x42a5ed),_0x3f92df&&await this[_0x39a3fc(0x17f)]['expire'](_0x413f4b,_0x3f92df);return;}catch(_0x1c681c){throw new common_1['HttpException'](_0x1c681c,common_1[_0x39a3fc(0x1a3)]['BAD_REQUEST']);}}async[_0x1aa4bc(0x18b)](){const _0x3ddbd7=_0x1aa4bc,_0xa0b1fe=await this[_0x3ddbd7(0x17f)]['get'](_0x3ddbd7(0x1ad));if(!_0xa0b1fe)throw new Error(_0x3ddbd7(0x1ae));return _0xa0b1fe;}async['ttl'](_0x442ef3){const _0x573f9d=_0x1aa4bc;return await this['redisClient'][_0x573f9d(0x180)](_0x442ef3);}async[_0x1aa4bc(0x1a6)](_0x23a82d){const _0x1e361f=_0x1aa4bc,{key:_0x1a2f9d}=_0x23a82d;await this['redisClient'][_0x1e361f(0x1a6)](_0x1a2f9d);return;}async[_0x1aa4bc(0x189)](_0x9577b1,_0x3fe4e8){const _0x3c73ed=_0x1aa4bc,_0x25b377=await this['redisClient'][_0x3c73ed(0x187)](_0x3c73ed(0x193)+_0x9577b1,0x0,-0x1);await this[_0x3c73ed(0x183)](_0x9577b1,_0x25b377),this[_0x3c73ed(0x17f)][_0x3c73ed(0x1a9)](_0x3c73ed(0x18c)+_0x9577b1,_0x3fe4e8);}async[_0x1aa4bc(0x183)](_0x174f2a,_0x298d04){_0x298d04['forEach'](_0x5c25dc=>{const _0x225bfb=_0x4820;this['redisClient'][_0x225bfb(0x1a6)](_0x225bfb(0x18c)+_0x174f2a+':'+_0x5c25dc);});}async[_0x1aa4bc(0x1af)](_0x1dfc60,_0x32a9ad){const _0x3a2729=_0x1aa4bc,{id:_0x2fd4b0,role:_0x12d1c1}=_0x32a9ad['user'];if(_0x12d1c1==='visitor')return!![];const _0x37b011=await this[_0x3a2729(0x17f)]['get'](_0x3a2729(0x18c)+_0x2fd4b0);if(_0x37b011===null)return await this[_0x3a2729(0x17f)][_0x3a2729(0x1a9)](_0x3a2729(0x18c)+_0x2fd4b0,_0x1dfc60),!![];if(_0x37b011!==_0x1dfc60){if([_0x3a2729(0x19a),_0x3a2729(0x19f)]['includes'](_0x12d1c1))return!![];throw new common_1['HttpException'](_0x3a2729(0x18f),common_1[_0x3a2729(0x1a3)][_0x3a2729(0x188)]);}}async[_0x1aa4bc(0x19b)](_0x1deb16){const _0x575c37=_0x1aa4bc,_0x313688=await this[_0x575c37(0x17f)]['get'](_0x1deb16);try{return JSON[_0x575c37(0x181)](_0x313688);}catch(_0x483018){}return _0x313688;}async[_0x1aa4bc(0x1ab)](_0x3566ab,_0x22f3c9,_0x32558e){const _0x55531a=_0x1aa4bc,_0x578a46=typeof _0x22f3c9===_0x55531a(0x19e)?_0x22f3c9:JSON['stringify'](_0x22f3c9);await this[_0x55531a(0x17f)][_0x55531a(0x1a9)](_0x3566ab,_0x578a46),_0x32558e&&await this[_0x55531a(0x17f)][_0x55531a(0x1ac)](_0x3566ab,_0x32558e);}};RedisCacheService=__decorate([(0x0,common_1[_0x1aa4bc(0x1a8)])(),__param(0x0,(0x0,common_1[_0x1aa4bc(0x18a)])('REDIS_CLIENT')),__metadata(_0x1aa4bc(0x1a7),[Object])],RedisCacheService),exports[_0x1aa4bc(0x190)]=RedisCacheService;