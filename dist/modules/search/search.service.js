'use strict';const _0x2300fa=_0x4a3d;(function(_0x49d22e,_0x2b226b){const _0x5aec5a=_0x4a3d,_0x3a8697=_0x49d22e();while(!![]){try{const _0x54e2ec=-parseInt(_0x5aec5a(0xfe))/0x1*(-parseInt(_0x5aec5a(0x10c))/0x2)+parseInt(_0x5aec5a(0x124))/0x3+parseInt(_0x5aec5a(0x11e))/0x4+-parseInt(_0x5aec5a(0x12b))/0x5+parseInt(_0x5aec5a(0x129))/0x6*(parseInt(_0x5aec5a(0x126))/0x7)+-parseInt(_0x5aec5a(0x135))/0x8*(parseInt(_0x5aec5a(0x111))/0x9)+-parseInt(_0x5aec5a(0xff))/0xa;if(_0x54e2ec===_0x2b226b)break;else _0x3a8697['push'](_0x3a8697['shift']());}catch(_0x3e6e1c){_0x3a8697['push'](_0x3a8697['shift']());}}}(_0x5796,0xb614a));function _0x4a3d(_0x5ae052,_0x19defa){const _0x5796a7=_0x5796();return _0x4a3d=function(_0x4a3df3,_0x4be9d0){_0x4a3df3=_0x4a3df3-0xfd;let _0x164f8d=_0x5796a7[_0x4a3df3];return _0x164f8d;},_0x4a3d(_0x5ae052,_0x19defa);}var __decorate=this&&this['__decorate']||function(_0x32acdf,_0x2adca5,_0x322786,_0x1e7e45){const _0x493782=_0x4a3d;var _0x1475bb=arguments[_0x493782(0x10a)],_0x58074e=_0x1475bb<0x3?_0x2adca5:_0x1e7e45===null?_0x1e7e45=Object['getOwnPropertyDescriptor'](_0x2adca5,_0x322786):_0x1e7e45,_0x2010fa;if(typeof Reflect===_0x493782(0x13c)&&typeof Reflect[_0x493782(0x130)]==='function')_0x58074e=Reflect[_0x493782(0x130)](_0x32acdf,_0x2adca5,_0x322786,_0x1e7e45);else{for(var _0x32cdca=_0x32acdf['length']-0x1;_0x32cdca>=0x0;_0x32cdca--)if(_0x2010fa=_0x32acdf[_0x32cdca])_0x58074e=(_0x1475bb<0x3?_0x2010fa(_0x58074e):_0x1475bb>0x3?_0x2010fa(_0x2adca5,_0x322786,_0x58074e):_0x2010fa(_0x2adca5,_0x322786))||_0x58074e;}return _0x1475bb>0x3&&_0x58074e&&Object[_0x493782(0xfd)](_0x2adca5,_0x322786,_0x58074e),_0x58074e;},__metadata=this&&this[_0x2300fa(0x13d)]||function(_0x16ac7a,_0x2f2844){const _0x5ad527=_0x2300fa;if(typeof Reflect===_0x5ad527(0x13c)&&typeof Reflect[_0x5ad527(0x10b)]===_0x5ad527(0x13e))return Reflect[_0x5ad527(0x10b)](_0x16ac7a,_0x2f2844);};Object['defineProperty'](exports,_0x2300fa(0x101),{'value':!![]}),exports['SearchService']=void 0x0;const common_1=require(_0x2300fa(0x117)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),chat_service_1=require('../chat/chat.service'),models_service_1=require('../models/models.service');function _0x5796(){const _0x43abe2=['Hot\x20search\x20API\x20keys\x20not\x20configured','29848lKIiUu','slice','data','ChatService','toString','json','/search','object','__metadata','function','searchWithExternalAPI','CACHE_DURATION','defineProperty','1nWSaey','22250980aLwJdi','stringify','__esModule','User\x20not\x20authenticated','searchParams','SearchService','hotSearchSecretKey','getConfigs','model','Search\x20error:\x20','message','length','metadata','976952nSPtaO','GET','GlobalConfigService','status','Model\x20key\x20not\x20found.\x20Please\x20check\x20your\x20model\x20configuration.','2853HQsPUy','now','application/octet-stream;\x20charset=utf-8','Content-type','globalConfigService','Search\x20API\x20error:\x20','@nestjs/common','setHeader','design:paramtypes','modelsService','deep','chatProcess','getCurrentModelKeyInfo','4709664utYAey','ModelsService','append','\x20images','format','getHotSearches','4252860MZpHHi','research','1563534lZpFcG','error','timestamp','30ujGJbv','Logger','233475LzPaMF','chatService','fetchHotSearches','search','write','decorate','hotSearchCache','hotSearchAccessKey','https://www.coderutil.com/api/resou/v1/toutiao'];_0x5796=function(){return _0x43abe2;};return _0x5796();}let SearchService=class SearchService{constructor(_0x8f7f81,_0x2dfe62,_0x4768f9){const _0x5d061c=_0x2300fa;this['globalConfigService']=_0x8f7f81,this[_0x5d061c(0x12c)]=_0x2dfe62,this['modelsService']=_0x4768f9,this[_0x5d061c(0x131)]=null,this[_0x5d061c(0x140)]=0xa*0x3c*0x3e8;}async[_0x2300fa(0x13f)](_0x5539a2){const _0x37ff9b=_0x2300fa;try{const {searchPlatformUrl:_0x30a1d9}=await this[_0x37ff9b(0x115)][_0x37ff9b(0x106)](['searchPlatformUrl']),_0x5cb1ab=new URL(_0x30a1d9+_0x37ff9b(0x13b));_0x5cb1ab[_0x37ff9b(0x103)][_0x37ff9b(0x120)]('q',_0x5539a2),_0x5cb1ab['searchParams'][_0x37ff9b(0x120)](_0x37ff9b(0x122),'json');const _0x40fcc1=await fetch(_0x5cb1ab[_0x37ff9b(0x139)](),{'method':_0x37ff9b(0x10d)});if(!_0x40fcc1['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x40fcc1[_0x37ff9b(0x10f)]);const _0x454bc6=await _0x40fcc1[_0x37ff9b(0x13a)]();return _0x454bc6['results']||[];}catch(_0x3051cc){common_1[_0x37ff9b(0x12a)][_0x37ff9b(0x127)](_0x37ff9b(0x116)+_0x3051cc[_0x37ff9b(0x109)],'SearchService');throw _0x3051cc;}}async['fetchHotSearches'](){const _0x554e79=_0x2300fa,_0x35ac6a=await this[_0x554e79(0x115)][_0x554e79(0x106)]([_0x554e79(0x132),_0x554e79(0x105)]),_0xebe62d=_0x35ac6a===null||_0x35ac6a===void 0x0?void 0x0:_0x35ac6a['hotSearchAccessKey'],_0x467121=_0x35ac6a===null||_0x35ac6a===void 0x0?void 0x0:_0x35ac6a[_0x554e79(0x105)];if(!_0xebe62d||!_0x467121)throw new Error(_0x554e79(0x134));const _0x349076=await fetch(_0x554e79(0x133),{'method':_0x554e79(0x10d),'headers':{'access-key':_0xebe62d,'secret-key':_0x467121}});if(!_0x349076['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x349076[_0x554e79(0x10f)]);return await _0x349076['json']();}async[_0x2300fa(0x123)](){const _0x1cee22=_0x2300fa;try{const _0x594a7c=Date[_0x1cee22(0x112)]();if(this['hotSearchCache']&&_0x594a7c-this[_0x1cee22(0x131)][_0x1cee22(0x128)]<this[_0x1cee22(0x140)])return this['hotSearchCache'][_0x1cee22(0x137)];const _0x43641e=await this[_0x1cee22(0x12d)]();return this[_0x1cee22(0x131)]={'data':_0x43641e,'timestamp':_0x594a7c},_0x43641e;}catch(_0x22c4d5){if(this[_0x1cee22(0x131)])return this[_0x1cee22(0x131)][_0x1cee22(0x137)];throw _0x22c4d5;}}async[_0x2300fa(0x12e)](_0x5c4094,_0x345ae3,_0x319b19){const _0x2080cf=_0x2300fa,{prompt:_0x8f5649,model:_0x396eb0,mode:_0x2857d3,parentMessageId:_0xfd68a5}=_0x5c4094;try{if(!_0x345ae3['user'])throw new Error(_0x2080cf(0x102));_0x319b19[_0x2080cf(0x118)](_0x2080cf(0x114),_0x2080cf(0x113));if(_0xfd68a5){const _0x1145a3=await this[_0x2080cf(0x11a)][_0x2080cf(0x11d)](_0x396eb0);if(!_0x1145a3)throw new Error(_0x2080cf(0x110));const _0x2ba0a6=await this['chatService'][_0x2080cf(0x11c)]({'prompt':_0x8f5649,'model':_0x1145a3[_0x2080cf(0x107)],'options':{'parentMessageId':_0xfd68a5,'usingNetwork':!![]}},_0x345ae3,_0x319b19);_0x2ba0a6&&_0x2ba0a6['id']&&_0x319b19[_0x2080cf(0x12f)]('\x0a'+JSON[_0x2080cf(0x100)]({'parentMessageId':_0x2ba0a6['id']}));}else{const _0x395d20=await this['searchWithExternalAPI'](_0x8f5649);_0x319b19[_0x2080cf(0x12f)](JSON[_0x2080cf(0x100)]({'context':_0x395d20['slice'](0x0,0x14)}));if(_0x2857d3===_0x2080cf(0x11b)||_0x2857d3===_0x2080cf(0x125)){const _0x3c2391=await this[_0x2080cf(0x13f)](_0x8f5649+_0x2080cf(0x121));_0x319b19[_0x2080cf(0x12f)]('\x0a'+JSON[_0x2080cf(0x100)]({'images':_0x3c2391[_0x2080cf(0x136)](0x0,0x5)}));}}_0x319b19['end']();}catch(_0x4cfbee){common_1['Logger']['error'](_0x2080cf(0x108)+_0x4cfbee['message'],'SearchService');throw _0x4cfbee;}}};SearchService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x2300fa(0x119),[globalConfig_service_1[_0x2300fa(0x10e)],chat_service_1[_0x2300fa(0x138)],models_service_1[_0x2300fa(0x11f)]])],SearchService),exports[_0x2300fa(0x104)]=SearchService;