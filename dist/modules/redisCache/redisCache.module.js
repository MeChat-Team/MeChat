'use strict';const _0x165195=_0xd122;function _0xd122(_0x1e1b21,_0x210916){const _0x1e7c17=_0x1e7c();return _0xd122=function(_0xd12214,_0x3443f5){_0xd12214=_0xd12214-0x105;let _0x524ac5=_0x1e7c17[_0xd12214];return _0x524ac5;},_0xd122(_0x1e1b21,_0x210916);}(function(_0xe3326f,_0x21be85){const _0x1e98b7=_0xd122,_0x232c0a=_0xe3326f();while(!![]){try{const _0x358508=parseInt(_0x1e98b7(0x119))/0x1*(-parseInt(_0x1e98b7(0x10d))/0x2)+-parseInt(_0x1e98b7(0x109))/0x3*(-parseInt(_0x1e98b7(0x121))/0x4)+parseInt(_0x1e98b7(0x10a))/0x5+parseInt(_0x1e98b7(0x105))/0x6+parseInt(_0x1e98b7(0x10c))/0x7*(parseInt(_0x1e98b7(0x115))/0x8)+-parseInt(_0x1e98b7(0x112))/0x9*(-parseInt(_0x1e98b7(0x117))/0xa)+parseInt(_0x1e98b7(0x116))/0xb*(-parseInt(_0x1e98b7(0x111))/0xc);if(_0x358508===_0x21be85)break;else _0x232c0a['push'](_0x232c0a['shift']());}catch(_0x390e1b){_0x232c0a['push'](_0x232c0a['shift']());}}}(_0x1e7c,0xc12ab));var __decorate=this&&this['__decorate']||function(_0x4a4b4f,_0x721167,_0x5cbe32,_0x832a9a){const _0x3a17a4=_0xd122;var _0x338026=arguments[_0x3a17a4(0x118)],_0x106a32=_0x338026<0x3?_0x721167:_0x832a9a===null?_0x832a9a=Object['getOwnPropertyDescriptor'](_0x721167,_0x5cbe32):_0x832a9a,_0x26ed2e;if(typeof Reflect===_0x3a17a4(0x11f)&&typeof Reflect[_0x3a17a4(0x106)]===_0x3a17a4(0x114))_0x106a32=Reflect[_0x3a17a4(0x106)](_0x4a4b4f,_0x721167,_0x5cbe32,_0x832a9a);else{for(var _0x251160=_0x4a4b4f['length']-0x1;_0x251160>=0x0;_0x251160--)if(_0x26ed2e=_0x4a4b4f[_0x251160])_0x106a32=(_0x338026<0x3?_0x26ed2e(_0x106a32):_0x338026>0x3?_0x26ed2e(_0x721167,_0x5cbe32,_0x106a32):_0x26ed2e(_0x721167,_0x5cbe32))||_0x106a32;}return _0x338026>0x3&&_0x106a32&&Object[_0x3a17a4(0x123)](_0x721167,_0x5cbe32,_0x106a32),_0x106a32;};Object[_0x165195(0x123)](exports,_0x165195(0x108),{'value':!![]}),exports['RedisCacheModule']=void 0x0;const common_1=require('@nestjs/common'),redis_1=require('redis'),redisCache_controller_1=require('./redisCache.controller'),redisCache_service_1=require(_0x165195(0x11a));let RedisCacheModule=class RedisCacheModule{};function _0x1e7c(){const _0x4f43ea=['error','521476CJblkT','REDIS_CLIENT','defineProperty','Global','Please\x20configure\x20Redis\x20config\x20|\x20未配置\x20Redis\x20配置信息，请确认配置\x20Redis\x20服务以获得更好的体验','connect','4729614bpCZLw','decorate','REDIS_PORT','__esModule','33LikSgx','634905Pxsipf','env','1976919TMqCSC','126qZFahR','RedisCacheModule','log','RedisCacheService','144tRYbRy','11997RhKYgH','REDIS_HOST','function','32uxdRJA','2146562GkQGDs','6990oppZcx','length','20283ROzJot','./redisCache.service','Redis\x20connection\x20successful','Redis\x20connection\x20failed:\x20','Logger','REDIS_DB','object'];_0x1e7c=function(){return _0x4f43ea;};return _0x1e7c();}RedisCacheModule=__decorate([(0x0,common_1[_0x165195(0x124)])(),(0x0,common_1['Module'])({'imports':[],'controllers':[redisCache_controller_1['RedisCacheController']],'providers':[{'provide':'REDIS_CLIENT','useFactory':async()=>{const _0x57aeba=_0x165195,_0x1cee62=process[_0x57aeba(0x10b)][_0x57aeba(0x113)],_0x49f80e=parseInt(process[_0x57aeba(0x10b)][_0x57aeba(0x107)],0xa),_0x5da0cc=process[_0x57aeba(0x10b)]['REDIS_PASSWORD'],_0x370278=process['env']['REDIS_USER'],_0x42b234=parseInt(process[_0x57aeba(0x10b)][_0x57aeba(0x11e)],0xa)||0x0;if(!_0x1cee62||!_0x49f80e){common_1[_0x57aeba(0x11d)][_0x57aeba(0x120)](_0x57aeba(0x125),'RedisCacheModule');return;}const _0x1e69f3=(0x0,redis_1['createClient'])({'socket':{'host':_0x1cee62,'port':_0x49f80e},'username':_0x370278,'password':_0x5da0cc,'database':_0x42b234});return _0x1e69f3['on']('ready',()=>{const _0x47ad67=_0x57aeba;common_1[_0x47ad67(0x11d)][_0x47ad67(0x10f)](_0x47ad67(0x11b),_0x47ad67(0x10e));}),_0x1e69f3['on']('error',_0x55cb77=>{const _0x3c0c6c=_0x57aeba;common_1[_0x3c0c6c(0x11d)]['error'](_0x3c0c6c(0x11c)+_0x55cb77,_0x3c0c6c(0x10e));}),await _0x1e69f3[_0x57aeba(0x126)](),_0x1e69f3;}},redisCache_service_1[_0x165195(0x110)]],'exports':[_0x165195(0x122),redisCache_service_1[_0x165195(0x110)]]})],RedisCacheModule),exports[_0x165195(0x10e)]=RedisCacheModule;