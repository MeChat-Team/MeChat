'use strict';const _0x58d77f=_0x3479;(function(_0xdd9003,_0x42ef12){const _0x1b906c=_0x3479,_0x217af8=_0xdd9003();while(!![]){try{const _0x3cd714=parseInt(_0x1b906c(0x1a9))/0x1+-parseInt(_0x1b906c(0x1a0))/0x2+parseInt(_0x1b906c(0x1c4))/0x3+parseInt(_0x1b906c(0x19d))/0x4*(-parseInt(_0x1b906c(0x199))/0x5)+parseInt(_0x1b906c(0x1b7))/0x6+parseInt(_0x1b906c(0x1b6))/0x7+-parseInt(_0x1b906c(0x19a))/0x8;if(_0x3cd714===_0x42ef12)break;else _0x217af8['push'](_0x217af8['shift']());}catch(_0x25e264){_0x217af8['push'](_0x217af8['shift']());}}}(_0x5da1,0x6684e));var __decorate=this&&this[_0x58d77f(0x1c1)]||function(_0x135c39,_0x3caf3d,_0x37fba1,_0x1e26b9){const _0x305987=_0x58d77f;var _0x5e7e9e=arguments[_0x305987(0x1c5)],_0x10bb63=_0x5e7e9e<0x3?_0x3caf3d:_0x1e26b9===null?_0x1e26b9=Object[_0x305987(0x1b4)](_0x3caf3d,_0x37fba1):_0x1e26b9,_0x114d48;if(typeof Reflect===_0x305987(0x1bd)&&typeof Reflect[_0x305987(0x1b8)]===_0x305987(0x1af))_0x10bb63=Reflect['decorate'](_0x135c39,_0x3caf3d,_0x37fba1,_0x1e26b9);else{for(var _0x214093=_0x135c39[_0x305987(0x1c5)]-0x1;_0x214093>=0x0;_0x214093--)if(_0x114d48=_0x135c39[_0x214093])_0x10bb63=(_0x5e7e9e<0x3?_0x114d48(_0x10bb63):_0x5e7e9e>0x3?_0x114d48(_0x3caf3d,_0x37fba1,_0x10bb63):_0x114d48(_0x3caf3d,_0x37fba1))||_0x10bb63;}return _0x5e7e9e>0x3&&_0x10bb63&&Object['defineProperty'](_0x3caf3d,_0x37fba1,_0x10bb63),_0x10bb63;},__metadata=this&&this[_0x58d77f(0x1ae)]||function(_0xe2a939,_0x453889){const _0x171c22=_0x58d77f;if(typeof Reflect===_0x171c22(0x1bd)&&typeof Reflect[_0x171c22(0x1b2)]===_0x171c22(0x1af))return Reflect[_0x171c22(0x1b2)](_0xe2a939,_0x453889);},__param=this&&this[_0x58d77f(0x1ba)]||function(_0x416ab5,_0xce0b80){return function(_0x39fc2a,_0x152d28){_0xce0b80(_0x39fc2a,_0x152d28,_0x416ab5);};};Object[_0x58d77f(0x19b)](exports,'__esModule',{'value':!![]}),exports['RedisCacheService']=void 0x0;const common_1=require(_0x58d77f(0x1ac));function _0x5da1(){const _0x1540cf=['getOwnPropertyDescriptor','forEach','4980248bIOrkU','1636662YsoGjP','decorate','Injectable','__param','invalidateTokens','HttpException','object','includes','zRange','Inject','__decorate','ttl','set','1777590JeNjoz','length','get','326820dwZoOs','6305592auMsxw','defineProperty','expire','48WxqfRt','admin','token:','486040BKcYzL','JWT_SECRET','user','JWT\x20secret\x20not\x20found\x20in\x20Redis','RedisCacheService','UNAUTHORIZED','redisClient','wishGet','super','658734SyFwWs','string','del','@nestjs/common','wishSet','__metadata','function','checkTokenAuth','您已在其他设备覆盖登录、请您重新登录！','metadata','HttpStatus'];_0x5da1=function(){return _0x1540cf;};return _0x5da1();}let RedisCacheService=class RedisCacheService{constructor(_0x420dea){const _0x1a5895=_0x58d77f;this[_0x1a5895(0x1a6)]=_0x420dea;}async[_0x58d77f(0x198)](_0x2d3a88){const _0x50ff39=_0x58d77f,{key:_0x2e69cb}=_0x2d3a88,_0x3580a3=await this[_0x50ff39(0x1a6)][_0x50ff39(0x198)](_0x2e69cb);return await this[_0x50ff39(0x1a6)][_0x50ff39(0x198)](_0x2e69cb);}async[_0x58d77f(0x1c3)](_0x46e7e5,_0x3b9ec4){const _0xbdb8f2=_0x58d77f;try{const {key:_0x5bda63,val:_0x328336}=_0x46e7e5;await this[_0xbdb8f2(0x1a6)][_0xbdb8f2(0x1c3)](_0x5bda63,_0x328336),_0x3b9ec4&&await this['redisClient'][_0xbdb8f2(0x19c)](_0x5bda63,_0x3b9ec4);return;}catch(_0x443210){throw new common_1[(_0xbdb8f2(0x1bc))](_0x443210,common_1['HttpStatus']['BAD_REQUEST']);}}async['getJwtSecret'](){const _0x220c8e=_0x58d77f,_0x2efd87=await this[_0x220c8e(0x1a6)]['get'](_0x220c8e(0x1a1));if(!_0x2efd87)throw new Error(_0x220c8e(0x1a3));return _0x2efd87;}async[_0x58d77f(0x1c2)](_0x393b2d){const _0x3ad061=_0x58d77f;return await this['redisClient'][_0x3ad061(0x1c2)](_0x393b2d);}async[_0x58d77f(0x1ab)](_0x185b86){const _0x536a7d=_0x58d77f,{key:_0x258204}=_0x185b86;await this[_0x536a7d(0x1a6)]['del'](_0x258204);return;}async['saveToken'](_0x3387f6,_0x5a0725){const _0x39c3ea=_0x58d77f,_0x291196=await this[_0x39c3ea(0x1a6)][_0x39c3ea(0x1bf)]('tokens:'+_0x3387f6,0x0,-0x1);await this[_0x39c3ea(0x1bb)](_0x3387f6,_0x291196),this[_0x39c3ea(0x1a6)][_0x39c3ea(0x1c3)](_0x39c3ea(0x19f)+_0x3387f6,_0x5a0725);}async[_0x58d77f(0x1bb)](_0x3e33a3,_0x1d2eee){const _0x4789b=_0x58d77f;_0x1d2eee[_0x4789b(0x1b5)](_0x1dc3df=>{const _0x40a625=_0x4789b;this[_0x40a625(0x1a6)]['del'](_0x40a625(0x19f)+_0x3e33a3+':'+_0x1dc3df);});}async[_0x58d77f(0x1b0)](_0x3c83fb,_0x24b157){const _0x4870dc=_0x58d77f,{id:_0x5473b4,role:_0x56b639}=_0x24b157[_0x4870dc(0x1a2)];if(_0x56b639==='visitor')return!![];const _0x4cc1d5=await this['redisClient'][_0x4870dc(0x198)](_0x4870dc(0x19f)+_0x5473b4);if(_0x4cc1d5===null)return await this[_0x4870dc(0x1a6)][_0x4870dc(0x1c3)](_0x4870dc(0x19f)+_0x5473b4,_0x3c83fb),!![];if(_0x4cc1d5!==_0x3c83fb){if([_0x4870dc(0x1a8),_0x4870dc(0x19e)][_0x4870dc(0x1be)](_0x56b639))return!![];throw new common_1[(_0x4870dc(0x1bc))](_0x4870dc(0x1b1),common_1[_0x4870dc(0x1b3)][_0x4870dc(0x1a5)]);}}async[_0x58d77f(0x1a7)](_0x4929dc){const _0x1d1f16=_0x58d77f,_0x4f0d26=await this['redisClient'][_0x1d1f16(0x198)](_0x4929dc);try{return JSON['parse'](_0x4f0d26);}catch(_0x5f9fcc){}return _0x4f0d26;}async[_0x58d77f(0x1ad)](_0x1c3c0d,_0x931666,_0x355468){const _0x317a8b=_0x58d77f,_0x52daba=typeof _0x931666===_0x317a8b(0x1aa)?_0x931666:JSON['stringify'](_0x931666);await this[_0x317a8b(0x1a6)][_0x317a8b(0x1c3)](_0x1c3c0d,_0x52daba),_0x355468&&await this[_0x317a8b(0x1a6)][_0x317a8b(0x19c)](_0x1c3c0d,_0x355468);}};function _0x3479(_0xf3e5a3,_0x5b51ba){const _0x5da1e4=_0x5da1();return _0x3479=function(_0x3479f3,_0x5e1b8b){_0x3479f3=_0x3479f3-0x198;let _0x3f5cea=_0x5da1e4[_0x3479f3];return _0x3f5cea;},_0x3479(_0xf3e5a3,_0x5b51ba);}RedisCacheService=__decorate([(0x0,common_1[_0x58d77f(0x1b9)])(),__param(0x0,(0x0,common_1[_0x58d77f(0x1c0)])('REDIS_CLIENT')),__metadata('design:paramtypes',[Object])],RedisCacheService),exports[_0x58d77f(0x1a4)]=RedisCacheService;