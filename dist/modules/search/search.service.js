'use strict';const _0x1de93e=_0x55ea;(function(_0x3d679a,_0xf2e1b4){const _0x5654fa=_0x55ea,_0x65d06e=_0x3d679a();while(!![]){try{const _0xe6eaa9=-parseInt(_0x5654fa(0x17b))/0x1*(parseInt(_0x5654fa(0x14d))/0x2)+-parseInt(_0x5654fa(0x157))/0x3+-parseInt(_0x5654fa(0x154))/0x4*(parseInt(_0x5654fa(0x15c))/0x5)+parseInt(_0x5654fa(0x14f))/0x6*(parseInt(_0x5654fa(0x158))/0x7)+parseInt(_0x5654fa(0x152))/0x8*(parseInt(_0x5654fa(0x17d))/0x9)+parseInt(_0x5654fa(0x173))/0xa*(parseInt(_0x5654fa(0x162))/0xb)+-parseInt(_0x5654fa(0x176))/0xc;if(_0xe6eaa9===_0xf2e1b4)break;else _0x65d06e['push'](_0x65d06e['shift']());}catch(_0x4c98ef){_0x65d06e['push'](_0x65d06e['shift']());}}}(_0x26de,0xbc9f4));var __decorate=this&&this[_0x1de93e(0x15e)]||function(_0x1b538a,_0x4d1fad,_0x30cb38,_0x544e44){const _0x2ca195=_0x1de93e;var _0x1fbf58=arguments[_0x2ca195(0x17e)],_0x8e7284=_0x1fbf58<0x3?_0x4d1fad:_0x544e44===null?_0x544e44=Object[_0x2ca195(0x178)](_0x4d1fad,_0x30cb38):_0x544e44,_0x1d6c5f;if(typeof Reflect===_0x2ca195(0x142)&&typeof Reflect[_0x2ca195(0x17f)]==='function')_0x8e7284=Reflect['decorate'](_0x1b538a,_0x4d1fad,_0x30cb38,_0x544e44);else{for(var _0x584c83=_0x1b538a[_0x2ca195(0x17e)]-0x1;_0x584c83>=0x0;_0x584c83--)if(_0x1d6c5f=_0x1b538a[_0x584c83])_0x8e7284=(_0x1fbf58<0x3?_0x1d6c5f(_0x8e7284):_0x1fbf58>0x3?_0x1d6c5f(_0x4d1fad,_0x30cb38,_0x8e7284):_0x1d6c5f(_0x4d1fad,_0x30cb38))||_0x8e7284;}return _0x1fbf58>0x3&&_0x8e7284&&Object[_0x2ca195(0x177)](_0x4d1fad,_0x30cb38,_0x8e7284),_0x8e7284;},__metadata=this&&this['__metadata']||function(_0x3b0b99,_0x36bb40){const _0x4a76d4=_0x1de93e;if(typeof Reflect===_0x4a76d4(0x142)&&typeof Reflect['metadata']==='function')return Reflect[_0x4a76d4(0x17a)](_0x3b0b99,_0x36bb40);};function _0x55ea(_0xf9b111,_0x5812fb){const _0x26dec0=_0x26de();return _0x55ea=function(_0x55ead3,_0x285e28){_0x55ead3=_0x55ead3-0x141;let _0xab622d=_0x26dec0[_0x55ead3];return _0xab622d;},_0x55ea(_0xf9b111,_0x5812fb);}Object[_0x1de93e(0x177)](exports,_0x1de93e(0x156),{'value':!![]}),exports['SearchService']=void 0x0;function _0x26de(){const _0x38440a=['json','6669420xIrDaZ','chatService','getCurrentModelKeyInfo','4693560SCRDAB','defineProperty','getOwnPropertyDescriptor','data','metadata','1edNScs','Hot\x20search\x20API\x20keys\x20not\x20configured','18AlPGOP','length','decorate','chatProcess','append','https://www.coderutil.com/api/resou/v1/toutiao','status','SearchService','/search','../globalConfig/globalConfig.service','object','timestamp','deep','globalConfigService','end','searchPlatformUrl','Logger','write','model','Model\x20key\x20not\x20found.\x20Please\x20check\x20your\x20model\x20configuration.','error','144766AMvUve','hotSearchCache','12IBkWzC','research','CACHE_DURATION','5745256FfHNCR','getConfigs','1672876vzbnjN','user','__esModule','132039IHYAEB','46564IVtXTa','\x20images','modelsService','searchParams','10iOBSXt','format','__decorate','HTTP\x20error!\x20status:\x20','results','design:paramtypes','11mYiYvR','search','GET','hotSearchAccessKey','Injectable','message','fetchHotSearches','slice','ModelsService','searchWithExternalAPI','Content-type','../chat/chat.service','hotSearchSecretKey','../models/models.service','@nestjs/common','stringify'];_0x26de=function(){return _0x38440a;};return _0x26de();}const common_1=require(_0x1de93e(0x170)),globalConfig_service_1=require(_0x1de93e(0x141)),chat_service_1=require(_0x1de93e(0x16d)),models_service_1=require(_0x1de93e(0x16f));let SearchService=class SearchService{constructor(_0x11fda0,_0x5a5cf2,_0x269a40){const _0x48b10b=_0x1de93e;this[_0x48b10b(0x145)]=_0x11fda0,this[_0x48b10b(0x174)]=_0x5a5cf2,this[_0x48b10b(0x15a)]=_0x269a40,this['hotSearchCache']=null,this[_0x48b10b(0x151)]=0xa*0x3c*0x3e8;}async[_0x1de93e(0x16b)](_0x13ddff){const _0xa7790a=_0x1de93e;try{const {searchPlatformUrl:_0x310498}=await this[_0xa7790a(0x145)][_0xa7790a(0x153)]([_0xa7790a(0x147)]),_0x5a8df0=new URL(_0x310498+_0xa7790a(0x185));_0x5a8df0[_0xa7790a(0x15b)]['append']('q',_0x13ddff),_0x5a8df0['searchParams'][_0xa7790a(0x181)](_0xa7790a(0x15d),_0xa7790a(0x172));const _0x287a46=await fetch(_0x5a8df0['toString'](),{'method':'GET'});if(!_0x287a46['ok'])throw new Error(_0xa7790a(0x15f)+_0x287a46[_0xa7790a(0x183)]);const _0xe11c3c=await _0x287a46[_0xa7790a(0x172)]();return _0xe11c3c[_0xa7790a(0x160)]||[];}catch(_0x19a148){common_1['Logger'][_0xa7790a(0x14c)]('Search\x20API\x20error:\x20'+_0x19a148[_0xa7790a(0x167)],'SearchService');throw _0x19a148;}}async[_0x1de93e(0x168)](){const _0x25a6f5=_0x1de93e,_0x548d9c=await this[_0x25a6f5(0x145)][_0x25a6f5(0x153)]([_0x25a6f5(0x165),_0x25a6f5(0x16e)]),_0x2dbc7f=_0x548d9c===null||_0x548d9c===void 0x0?void 0x0:_0x548d9c[_0x25a6f5(0x165)],_0x15dd9e=_0x548d9c===null||_0x548d9c===void 0x0?void 0x0:_0x548d9c['hotSearchSecretKey'];if(!_0x2dbc7f||!_0x15dd9e)throw new Error(_0x25a6f5(0x17c));const _0x2a0652=await fetch(_0x25a6f5(0x182),{'method':_0x25a6f5(0x164),'headers':{'access-key':_0x2dbc7f,'secret-key':_0x15dd9e}});if(!_0x2a0652['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x2a0652[_0x25a6f5(0x183)]);return await _0x2a0652['json']();}async['getHotSearches'](){const _0x51fb29=_0x1de93e;try{const _0x1d5d36=Date['now']();if(this[_0x51fb29(0x14e)]&&_0x1d5d36-this[_0x51fb29(0x14e)][_0x51fb29(0x143)]<this[_0x51fb29(0x151)])return this[_0x51fb29(0x14e)][_0x51fb29(0x179)];const _0x423fb1=await this[_0x51fb29(0x168)]();return this[_0x51fb29(0x14e)]={'data':_0x423fb1,'timestamp':_0x1d5d36},_0x423fb1;}catch(_0x44c0b7){if(this[_0x51fb29(0x14e)])return this[_0x51fb29(0x14e)][_0x51fb29(0x179)];throw _0x44c0b7;}}async[_0x1de93e(0x163)](_0x47baf7,_0x4739b4,_0x2f7b51){const _0xba7946=_0x1de93e,{prompt:_0x35486b,model:_0xd187d6,mode:_0x140759,parentMessageId:_0x217798}=_0x47baf7;try{if(!_0x4739b4[_0xba7946(0x155)])throw new Error('User\x20not\x20authenticated');_0x2f7b51['setHeader'](_0xba7946(0x16c),'application/octet-stream;\x20charset=utf-8');if(_0x217798){const _0x220aea=await this['modelsService'][_0xba7946(0x175)](_0xd187d6);if(!_0x220aea)throw new Error(_0xba7946(0x14b));const _0x3ec159=await this[_0xba7946(0x174)][_0xba7946(0x180)]({'prompt':_0x35486b,'model':_0x220aea[_0xba7946(0x14a)],'options':{'parentMessageId':_0x217798,'usingNetwork':!![]}},_0x4739b4,_0x2f7b51);_0x3ec159&&_0x3ec159['id']&&_0x2f7b51[_0xba7946(0x149)]('\x0a'+JSON['stringify']({'parentMessageId':_0x3ec159['id']}));}else{const _0x48f560=await this[_0xba7946(0x16b)](_0x35486b);_0x2f7b51[_0xba7946(0x149)](JSON[_0xba7946(0x171)]({'context':_0x48f560[_0xba7946(0x169)](0x0,0x14)}));if(_0x140759===_0xba7946(0x144)||_0x140759===_0xba7946(0x150)){const _0x34573f=await this[_0xba7946(0x16b)](_0x35486b+_0xba7946(0x159));_0x2f7b51[_0xba7946(0x149)]('\x0a'+JSON[_0xba7946(0x171)]({'images':_0x34573f[_0xba7946(0x169)](0x0,0x5)}));}}_0x2f7b51[_0xba7946(0x146)]();}catch(_0x5ee1a4){common_1[_0xba7946(0x148)][_0xba7946(0x14c)]('Search\x20error:\x20'+_0x5ee1a4['message'],'SearchService');throw _0x5ee1a4;}}};SearchService=__decorate([(0x0,common_1[_0x1de93e(0x166)])(),__metadata(_0x1de93e(0x161),[globalConfig_service_1['GlobalConfigService'],chat_service_1['ChatService'],models_service_1[_0x1de93e(0x16a)]])],SearchService),exports[_0x1de93e(0x184)]=SearchService;