'use strict';const _0x48bc8c=_0x2644;(function(_0xe5f37e,_0x281fa2){const _0xe483c8=_0x2644,_0x4b426b=_0xe5f37e();while(!![]){try{const _0x59062d=-parseInt(_0xe483c8(0xfc))/0x1*(parseInt(_0xe483c8(0xdf))/0x2)+-parseInt(_0xe483c8(0xd0))/0x3+-parseInt(_0xe483c8(0xf0))/0x4*(parseInt(_0xe483c8(0xef))/0x5)+-parseInt(_0xe483c8(0xfe))/0x6*(parseInt(_0xe483c8(0xe9))/0x7)+parseInt(_0xe483c8(0xc9))/0x8*(-parseInt(_0xe483c8(0xce))/0x9)+parseInt(_0xe483c8(0xcc))/0xa+parseInt(_0xe483c8(0x10e))/0xb;if(_0x59062d===_0x281fa2)break;else _0x4b426b['push'](_0x4b426b['shift']());}catch(_0x337a6b){_0x4b426b['push'](_0x4b426b['shift']());}}}(_0x4bb5,0x1c4d8));var __decorate=this&&this[_0x48bc8c(0xf1)]||function(_0x3abe81,_0x106e91,_0x17ff8c,_0x5e29f4){const _0x3c90d7=_0x48bc8c;var _0x1aca04=arguments['length'],_0x1a7a11=_0x1aca04<0x3?_0x106e91:_0x5e29f4===null?_0x5e29f4=Object[_0x3c90d7(0xe2)](_0x106e91,_0x17ff8c):_0x5e29f4,_0x22ffcd;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x3c90d7(0xfd))_0x1a7a11=Reflect[_0x3c90d7(0xcd)](_0x3abe81,_0x106e91,_0x17ff8c,_0x5e29f4);else{for(var _0x4f271f=_0x3abe81[_0x3c90d7(0xd9)]-0x1;_0x4f271f>=0x0;_0x4f271f--)if(_0x22ffcd=_0x3abe81[_0x4f271f])_0x1a7a11=(_0x1aca04<0x3?_0x22ffcd(_0x1a7a11):_0x1aca04>0x3?_0x22ffcd(_0x106e91,_0x17ff8c,_0x1a7a11):_0x22ffcd(_0x106e91,_0x17ff8c))||_0x1a7a11;}return _0x1aca04>0x3&&_0x1a7a11&&Object['defineProperty'](_0x106e91,_0x17ff8c,_0x1a7a11),_0x1a7a11;},__metadata=this&&this['__metadata']||function(_0x178b9f,_0x290b42){const _0x415e9f=_0x48bc8c;if(typeof Reflect===_0x415e9f(0xe1)&&typeof Reflect['metadata']===_0x415e9f(0xfd))return Reflect[_0x415e9f(0xe8)](_0x178b9f,_0x290b42);};Object[_0x48bc8c(0xd1)](exports,_0x48bc8c(0xf4),{'value':!![]}),exports[_0x48bc8c(0xeb)]=void 0x0;function _0x2644(_0x14ac45,_0x558e1b){const _0x4bb557=_0x4bb5();return _0x2644=function(_0x264417,_0x5a6a9e){_0x264417=_0x264417-0xc9;let _0x35cfc6=_0x4bb557[_0x264417];return _0x35cfc6;},_0x2644(_0x14ac45,_0x558e1b);}const common_1=require('@nestjs/common'),globalConfig_service_1=require(_0x48bc8c(0xe6)),chat_service_1=require(_0x48bc8c(0xcb)),models_service_1=require(_0x48bc8c(0xf2));function _0x4bb5(){const _0x3bf3dc=['Hot\x20search\x20API\x20keys\x20not\x20configured','model','GET','length','chatService','design:paramtypes','stringify','globalConfigService','hotSearchCache','312790ipFXJB','Logger','object','getOwnPropertyDescriptor','message','searchPlatformUrl','searchParams','../globalConfig/globalConfig.service','fetchHotSearches','metadata','31339ZxbVSy','getHotSearches','SearchService','write','HTTP\x20error!\x20status:\x20','User\x20not\x20authenticated','593885lHgkLK','4hxfWdQ','__decorate','../models/models.service','status','__esModule','modelsService','hotSearchSecretKey','CACHE_DURATION','toString','https://www.coderutil.com/api/resou/v1/toutiao','Search\x20error:\x20','deep','1MMmZrT','function','288lrNTMu','Search\x20API\x20error:\x20','results','append','search','ChatService','GlobalConfigService','getConfigs','data','error','application/octet-stream;\x20charset=utf-8','searchWithExternalAPI','end','chatProcess','ModelsService','format','6821210NtqJgO','\x20images','Model\x20key\x20not\x20found.\x20Please\x20check\x20your\x20model\x20configuration.','now','hotSearchAccessKey','8lqFUsi','getCurrentModelKeyInfo','../chat/chat.service','2225060KcHZgZ','decorate','1991853EJXJCP','user','45909HAoOCT','defineProperty','slice','Injectable','json','setHeader'];_0x4bb5=function(){return _0x3bf3dc;};return _0x4bb5();}let SearchService=class SearchService{constructor(_0x135f63,_0x488b4d,_0x180650){const _0x413364=_0x48bc8c;this[_0x413364(0xdd)]=_0x135f63,this[_0x413364(0xda)]=_0x488b4d,this[_0x413364(0xf5)]=_0x180650,this[_0x413364(0xde)]=null,this['CACHE_DURATION']=0xa*0x3c*0x3e8;}async['searchWithExternalAPI'](_0x2de3e1){const _0xd21c1c=_0x48bc8c;try{const {searchPlatformUrl:_0xf7ce82}=await this['globalConfigService']['getConfigs']([_0xd21c1c(0xe4)]),_0x502eb4=new URL(_0xf7ce82+'/search');_0x502eb4[_0xd21c1c(0xe5)][_0xd21c1c(0x101)]('q',_0x2de3e1),_0x502eb4['searchParams'][_0xd21c1c(0x101)](_0xd21c1c(0x10d),'json');const _0x3b57d5=await fetch(_0x502eb4[_0xd21c1c(0xf8)](),{'method':_0xd21c1c(0xd8)});if(!_0x3b57d5['ok'])throw new Error(_0xd21c1c(0xed)+_0x3b57d5[_0xd21c1c(0xf3)]);const _0x437b58=await _0x3b57d5['json']();return _0x437b58[_0xd21c1c(0x100)]||[];}catch(_0x55c754){common_1[_0xd21c1c(0xe0)][_0xd21c1c(0x107)](_0xd21c1c(0xff)+_0x55c754['message'],_0xd21c1c(0xeb));throw _0x55c754;}}async[_0x48bc8c(0xe7)](){const _0x760486=_0x48bc8c,_0x59e1f7=await this[_0x760486(0xdd)][_0x760486(0x105)]([_0x760486(0x112),_0x760486(0xf6)]),_0x214148=_0x59e1f7===null||_0x59e1f7===void 0x0?void 0x0:_0x59e1f7[_0x760486(0x112)],_0x509897=_0x59e1f7===null||_0x59e1f7===void 0x0?void 0x0:_0x59e1f7[_0x760486(0xf6)];if(!_0x214148||!_0x509897)throw new Error(_0x760486(0xd6));const _0x1c705b=await fetch(_0x760486(0xf9),{'method':'GET','headers':{'access-key':_0x214148,'secret-key':_0x509897}});if(!_0x1c705b['ok'])throw new Error(_0x760486(0xed)+_0x1c705b[_0x760486(0xf3)]);return await _0x1c705b[_0x760486(0xd4)]();}async[_0x48bc8c(0xea)](){const _0x1b99a1=_0x48bc8c;try{const _0x32e2b9=Date[_0x1b99a1(0x111)]();if(this['hotSearchCache']&&_0x32e2b9-this[_0x1b99a1(0xde)]['timestamp']<this[_0x1b99a1(0xf7)])return this[_0x1b99a1(0xde)][_0x1b99a1(0x106)];const _0x15204f=await this[_0x1b99a1(0xe7)]();return this[_0x1b99a1(0xde)]={'data':_0x15204f,'timestamp':_0x32e2b9},_0x15204f;}catch(_0x42dd6e){if(this[_0x1b99a1(0xde)])return this[_0x1b99a1(0xde)][_0x1b99a1(0x106)];throw _0x42dd6e;}}async[_0x48bc8c(0x102)](_0xfa1b32,_0x4c06f9,_0x131d03){const _0x481aeb=_0x48bc8c,{prompt:_0x59b3bb,model:_0x369af5,mode:_0x36a93a,parentMessageId:_0x1e6f0e}=_0xfa1b32;try{if(!_0x4c06f9[_0x481aeb(0xcf)])throw new Error(_0x481aeb(0xee));_0x131d03[_0x481aeb(0xd5)]('Content-type',_0x481aeb(0x108));if(_0x1e6f0e){const _0x389ad1=await this['modelsService'][_0x481aeb(0xca)](_0x369af5);if(!_0x389ad1)throw new Error(_0x481aeb(0x110));const _0x1d6a48=await this[_0x481aeb(0xda)][_0x481aeb(0x10b)]({'prompt':_0x59b3bb,'model':_0x389ad1[_0x481aeb(0xd7)],'options':{'parentMessageId':_0x1e6f0e,'usingNetwork':!![]}},_0x4c06f9,_0x131d03);_0x1d6a48&&_0x1d6a48['id']&&_0x131d03[_0x481aeb(0xec)]('\x0a'+JSON[_0x481aeb(0xdc)]({'parentMessageId':_0x1d6a48['id']}));}else{const _0x584b21=await this['searchWithExternalAPI'](_0x59b3bb);_0x131d03['write'](JSON[_0x481aeb(0xdc)]({'context':_0x584b21[_0x481aeb(0xd2)](0x0,0x14)}));if(_0x36a93a===_0x481aeb(0xfb)||_0x36a93a==='research'){const _0x3c9644=await this[_0x481aeb(0x109)](_0x59b3bb+_0x481aeb(0x10f));_0x131d03[_0x481aeb(0xec)]('\x0a'+JSON[_0x481aeb(0xdc)]({'images':_0x3c9644['slice'](0x0,0x5)}));}}_0x131d03[_0x481aeb(0x10a)]();}catch(_0x52bf2a){common_1['Logger'][_0x481aeb(0x107)](_0x481aeb(0xfa)+_0x52bf2a[_0x481aeb(0xe3)],_0x481aeb(0xeb));throw _0x52bf2a;}}};SearchService=__decorate([(0x0,common_1[_0x48bc8c(0xd3)])(),__metadata(_0x48bc8c(0xdb),[globalConfig_service_1[_0x48bc8c(0x104)],chat_service_1[_0x48bc8c(0x103)],models_service_1[_0x48bc8c(0x10c)]])],SearchService),exports[_0x48bc8c(0xeb)]=SearchService;