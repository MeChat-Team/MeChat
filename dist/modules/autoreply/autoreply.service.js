'use strict';const _0x3c1098=_0x592d;(function(_0xee56d6,_0x5decb2){const _0x124870=_0x592d,_0x4ce07b=_0xee56d6();while(!![]){try{const _0x1fb121=parseInt(_0x124870(0x1f7))/0x1*(-parseInt(_0x124870(0x1eb))/0x2)+parseInt(_0x124870(0x1d6))/0x3*(parseInt(_0x124870(0x1e4))/0x4)+-parseInt(_0x124870(0x1da))/0x5+parseInt(_0x124870(0x1c4))/0x6*(-parseInt(_0x124870(0x1f1))/0x7)+parseInt(_0x124870(0x1ec))/0x8+parseInt(_0x124870(0x1e8))/0x9+parseInt(_0x124870(0x1fe))/0xa;if(_0x1fb121===_0x5decb2)break;else _0x4ce07b['push'](_0x4ce07b['shift']());}catch(_0x2cc488){_0x4ce07b['push'](_0x4ce07b['shift']());}}}(_0x49ee,0xcb6f5));function _0x49ee(){const _0x4f804c=['AutoReplyEntity','autoReplyKes','length','autoReplyMap','删除失败','map','has','2560228vVbsUD','trim','decorate','loadAutoReplyList','14972985cbUVJS','push','__esModule','42nifuuj','1375088Vztquq','getOwnPropertyDescriptor','HttpStatus','删除问题成功','HttpException','3245998TpHaLd','function','InjectRepository','findOne','@nestjs/common','delAutoreply','62572DKcsOm','status','updateAutoreply','defineProperty','delete','更新失败','BAD_REQUEST','15557220bkHyqP','addAutoreply','add','__decorate','12aLPShg','更新问题成功','design:paramtypes','answer','isAIReplyEnabled','findAndCount','object','__param','AutoreplyService','该问题不存在,请检查您的提交信息','includes','autoReplyFuzzyMatch','metadata','autoReplyEntity','prompt','affected','Repository','forEach','6reQchm','typeorm','onModuleInit','keywords','7983390WzqrOn','checkAutoReply','filter'];_0x49ee=function(){return _0x4f804c;};return _0x49ee();}var __decorate=this&&this[_0x3c1098(0x1c3)]||function(_0xe2f4e6,_0x33a0b6,_0x3ed9ea,_0x520390){const _0x16463d=_0x3c1098;var _0x2ccf4f=arguments[_0x16463d(0x1df)],_0x4825c1=_0x2ccf4f<0x3?_0x33a0b6:_0x520390===null?_0x520390=Object[_0x16463d(0x1ed)](_0x33a0b6,_0x3ed9ea):_0x520390,_0x4f8d98;if(typeof Reflect===_0x16463d(0x1ca)&&typeof Reflect['decorate']===_0x16463d(0x1f2))_0x4825c1=Reflect[_0x16463d(0x1e6)](_0xe2f4e6,_0x33a0b6,_0x3ed9ea,_0x520390);else{for(var _0x2d6227=_0xe2f4e6[_0x16463d(0x1df)]-0x1;_0x2d6227>=0x0;_0x2d6227--)if(_0x4f8d98=_0xe2f4e6[_0x2d6227])_0x4825c1=(_0x2ccf4f<0x3?_0x4f8d98(_0x4825c1):_0x2ccf4f>0x3?_0x4f8d98(_0x33a0b6,_0x3ed9ea,_0x4825c1):_0x4f8d98(_0x33a0b6,_0x3ed9ea))||_0x4825c1;}return _0x2ccf4f>0x3&&_0x4825c1&&Object['defineProperty'](_0x33a0b6,_0x3ed9ea,_0x4825c1),_0x4825c1;},__metadata=this&&this['__metadata']||function(_0xb1e6fe,_0x97f8d5){const _0x1ddbd5=_0x3c1098;if(typeof Reflect===_0x1ddbd5(0x1ca)&&typeof Reflect['metadata']===_0x1ddbd5(0x1f2))return Reflect[_0x1ddbd5(0x1d0)](_0xb1e6fe,_0x97f8d5);},__param=this&&this[_0x3c1098(0x1cb)]||function(_0xa29cd3,_0x164109){return function(_0x362390,_0x9c7e3c){_0x164109(_0x362390,_0x9c7e3c,_0xa29cd3);};};function _0x592d(_0x4e5e1f,_0x1d71d1){const _0x49ee15=_0x49ee();return _0x592d=function(_0x592d44,_0x1b9710){_0x592d44=_0x592d44-0x1c2;let _0x28deb7=_0x49ee15[_0x592d44];return _0x28deb7;},_0x592d(_0x4e5e1f,_0x1d71d1);}Object[_0x3c1098(0x1fa)](exports,_0x3c1098(0x1ea),{'value':!![]}),exports[_0x3c1098(0x1cc)]=void 0x0;const common_1=require(_0x3c1098(0x1f5)),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require(_0x3c1098(0x1d7)),autoreply_entity_1=require('./autoreply.entity');let AutoreplyService=class AutoreplyService{constructor(_0x1a695f){const _0x23e471=_0x3c1098;this['autoReplyEntity']=_0x1a695f,this[_0x23e471(0x1de)]=[],this['autoReplyMap']={},this['autoReplyFuzzyMatch']=!![];}async[_0x3c1098(0x1d8)](){const _0x3afe3d=_0x3c1098;await this[_0x3afe3d(0x1e7)]();}async[_0x3c1098(0x1e7)](){const _0x20e9e3=_0x3c1098,_0x572146=await this['autoReplyEntity']['find']({'where':{'status':0x1},'select':['prompt',_0x20e9e3(0x1c7),'isAIReplyEnabled']});this[_0x20e9e3(0x1e0)]={},this[_0x20e9e3(0x1de)]=[],_0x572146[_0x20e9e3(0x1d5)](_0x365354=>{const _0x56869c=_0x20e9e3;this[_0x56869c(0x1e0)][_0x365354[_0x56869c(0x1d2)]]={'answer':_0x365354[_0x56869c(0x1c7)],'isAIReplyEnabled':_0x365354[_0x56869c(0x1c8)]};const _0x21cdb9=_0x365354[_0x56869c(0x1d2)]['split']('\x20')[_0x56869c(0x1e2)](_0x353293=>_0x353293[_0x56869c(0x1e5)]());this[_0x56869c(0x1de)][_0x56869c(0x1e9)]({'prompt':_0x365354[_0x56869c(0x1d2)],'keywords':_0x21cdb9});});}async[_0x3c1098(0x1db)](_0x519158){const _0x2ee4a7=_0x3c1098;let _0x3421af=[],_0x95fae7=0x0;const _0x4d4ba8=new Set();if(this[_0x2ee4a7(0x1cf)])for(const _0x3dfbb6 of this['autoReplyKes']){_0x3dfbb6[_0x2ee4a7(0x1d9)]['some'](_0x147045=>_0x519158['includes'](_0x147045))&&(!_0x4d4ba8[_0x2ee4a7(0x1e3)](_0x3dfbb6[_0x2ee4a7(0x1d2)])&&(_0x3421af['push'](this[_0x2ee4a7(0x1e0)][_0x3dfbb6[_0x2ee4a7(0x1d2)]][_0x2ee4a7(0x1c7)]),_0x4d4ba8[_0x2ee4a7(0x1c2)](_0x3dfbb6[_0x2ee4a7(0x1d2)]),this['autoReplyMap'][_0x3dfbb6[_0x2ee4a7(0x1d2)]][_0x2ee4a7(0x1c8)]===0x1&&(_0x95fae7=0x1)));}else{const _0x1a1f75=this[_0x2ee4a7(0x1de)][_0x2ee4a7(0x1dc)](_0xb9ce0a=>_0xb9ce0a[_0x2ee4a7(0x1d2)]===_0x519158);for(const _0x2f5ec6 of _0x1a1f75){!_0x4d4ba8[_0x2ee4a7(0x1e3)](_0x2f5ec6[_0x2ee4a7(0x1d2)])&&(_0x3421af['push'](this[_0x2ee4a7(0x1e0)][_0x2f5ec6[_0x2ee4a7(0x1d2)]]['answer']),_0x4d4ba8[_0x2ee4a7(0x1c2)](_0x2f5ec6[_0x2ee4a7(0x1d2)]),this['autoReplyMap'][_0x2f5ec6['prompt']]['isAIReplyEnabled']===0x1&&(_0x95fae7=0x1));}}return{'answer':_0x3421af['join']('\x0a'),'isAIReplyEnabled':_0x95fae7};}async['queryAutoreply'](_0x1db00f){const _0x4e5fbc=_0x3c1098,{page:page=0x1,size:size=0xa,prompt:_0x1e2f67,status:_0x1cf919}=_0x1db00f,_0x50c220={};[0x0,0x1,'0','1'][_0x4e5fbc(0x1ce)](_0x1cf919)&&(_0x50c220[_0x4e5fbc(0x1f8)]=_0x1cf919),_0x1e2f67&&(_0x50c220[_0x4e5fbc(0x1d2)]=(0x0,typeorm_2['Like'])('%'+_0x1e2f67+'%'));const [_0x5c4d5,_0x13dece]=await this[_0x4e5fbc(0x1d1)][_0x4e5fbc(0x1c9)]({'where':_0x50c220,'skip':(page-0x1)*size,'take':size,'order':{'id':'DESC'}});return{'rows':_0x5c4d5,'count':_0x13dece};}async[_0x3c1098(0x1ff)](_0x448e55){const _0x2bf0f7=_0x3c1098;return await this[_0x2bf0f7(0x1d1)]['save'](_0x448e55),await this['loadAutoReplyList'](),'添加问题成功！';}async[_0x3c1098(0x1f9)](_0x5b9a3c){const _0x34e46a=_0x3c1098,{id:_0x284b49}=_0x5b9a3c,_0x15326f=await this[_0x34e46a(0x1d1)]['update']({'id':_0x284b49},_0x5b9a3c);if(_0x15326f[_0x34e46a(0x1d3)]>0x0)return await this[_0x34e46a(0x1e7)](),_0x34e46a(0x1c5);throw new common_1['HttpException'](_0x34e46a(0x1fc),common_1[_0x34e46a(0x1ee)]['BAD_REQUEST']);}async[_0x3c1098(0x1f6)](_0x779f2){const _0x236678=_0x3c1098,{id:_0x35201d}=_0x779f2,_0x4f66ba=await this[_0x236678(0x1d1)][_0x236678(0x1f4)]({'where':{'id':_0x35201d}});if(!_0x4f66ba)throw new common_1[(_0x236678(0x1f0))](_0x236678(0x1cd),common_1[_0x236678(0x1ee)][_0x236678(0x1fd)]);const _0x259af=await this[_0x236678(0x1d1)][_0x236678(0x1fb)]({'id':_0x35201d});if(_0x259af[_0x236678(0x1d3)]>0x0)return await this[_0x236678(0x1e7)](),_0x236678(0x1ef);throw new common_1['HttpException'](_0x236678(0x1e1),common_1[_0x236678(0x1ee)][_0x236678(0x1fd)]);}};AutoreplyService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x3c1098(0x1f3)])(autoreply_entity_1[_0x3c1098(0x1dd)])),__metadata(_0x3c1098(0x1c6),[typeorm_2[_0x3c1098(0x1d4)]])],AutoreplyService),exports[_0x3c1098(0x1cc)]=AutoreplyService;