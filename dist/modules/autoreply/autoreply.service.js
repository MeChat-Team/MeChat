'use strict';const _0x18e6b0=_0x4e51;(function(_0x3c63fd,_0x4ce54d){const _0x47effb=_0x4e51,_0x34cf41=_0x3c63fd();while(!![]){try{const _0x45dcbb=parseInt(_0x47effb(0x98))/0x1+-parseInt(_0x47effb(0xa0))/0x2*(-parseInt(_0x47effb(0xc9))/0x3)+parseInt(_0x47effb(0xa4))/0x4*(parseInt(_0x47effb(0xa5))/0x5)+-parseInt(_0x47effb(0x90))/0x6+-parseInt(_0x47effb(0x99))/0x7+parseInt(_0x47effb(0xb6))/0x8*(-parseInt(_0x47effb(0xc4))/0x9)+-parseInt(_0x47effb(0x92))/0xa*(-parseInt(_0x47effb(0xbe))/0xb);if(_0x45dcbb===_0x4ce54d)break;else _0x34cf41['push'](_0x34cf41['shift']());}catch(_0x46140c){_0x34cf41['push'](_0x34cf41['shift']());}}}(_0x3a7e,0x8e989));var __decorate=this&&this['__decorate']||function(_0x1a293e,_0x1985fd,_0x30e676,_0x52b178){const _0x11a8c3=_0x4e51;var _0x2d004c=arguments[_0x11a8c3(0xc6)],_0x350402=_0x2d004c<0x3?_0x1985fd:_0x52b178===null?_0x52b178=Object['getOwnPropertyDescriptor'](_0x1985fd,_0x30e676):_0x52b178,_0x46d859;if(typeof Reflect===_0x11a8c3(0xbc)&&typeof Reflect['decorate']==='function')_0x350402=Reflect[_0x11a8c3(0x9e)](_0x1a293e,_0x1985fd,_0x30e676,_0x52b178);else{for(var _0x27feed=_0x1a293e[_0x11a8c3(0xc6)]-0x1;_0x27feed>=0x0;_0x27feed--)if(_0x46d859=_0x1a293e[_0x27feed])_0x350402=(_0x2d004c<0x3?_0x46d859(_0x350402):_0x2d004c>0x3?_0x46d859(_0x1985fd,_0x30e676,_0x350402):_0x46d859(_0x1985fd,_0x30e676))||_0x350402;}return _0x2d004c>0x3&&_0x350402&&Object[_0x11a8c3(0x9d)](_0x1985fd,_0x30e676,_0x350402),_0x350402;},__metadata=this&&this['__metadata']||function(_0x4193f2,_0xf303d1){const _0x2139ec=_0x4e51;if(typeof Reflect===_0x2139ec(0xbc)&&typeof Reflect[_0x2139ec(0xca)]===_0x2139ec(0x9a))return Reflect['metadata'](_0x4193f2,_0xf303d1);},__param=this&&this['__param']||function(_0x1e4576,_0x5f3ba5){return function(_0x45b1d1,_0x189808){_0x5f3ba5(_0x45b1d1,_0x189808,_0x1e4576);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x18e6b0(0xbd)]=void 0x0;function _0x4e51(_0x3c5370,_0x19e01c){const _0x3a7eb6=_0x3a7e();return _0x4e51=function(_0x4e51bc,_0x41f8f7){_0x4e51bc=_0x4e51bc-0x90;let _0x5ee43f=_0x3a7eb6[_0x4e51bc];return _0x5ee43f;},_0x4e51(_0x3c5370,_0x19e01c);}const common_1=require(_0x18e6b0(0xa1)),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require('typeorm'),autoreply_entity_1=require('./autoreply.entity');function _0x3a7e(){const _0x403265=['6521016ymVwEr','findOne','360SeUjmF','keywords','删除失败','findAndCount','answer','AutoReplyEntity','456114FbmYVQ','7283857OlIOns','function','autoReplyKes','添加问题成功！','defineProperty','decorate','forEach','472214ewNknl','@nestjs/common','push','queryAutoreply','2025776BVrXvB','10LjjEdj','Repository','onModuleInit','autoReplyEntity','autoReplyFuzzyMatch','prompt','BAD_REQUEST','isAIReplyEnabled','DESC','add','affected','更新失败','addAutoreply','find','HttpException','join','update','44888VLmHeX','autoReplyMap','HttpStatus','checkAutoReply','delete','该问题不存在,请检查您的提交信息','object','AutoreplyService','473528aHQkon','filter','Injectable','updateAutoreply','loadAutoReplyList','InjectRepository','1629BAmtlF','includes','length','更新问题成功','Like','9kXiRvM','metadata','map'];_0x3a7e=function(){return _0x403265;};return _0x3a7e();}let AutoreplyService=class AutoreplyService{constructor(_0x1bffc2){const _0xf9ad1=_0x18e6b0;this[_0xf9ad1(0xa8)]=_0x1bffc2,this['autoReplyKes']=[],this[_0xf9ad1(0xb7)]={},this[_0xf9ad1(0xa9)]=!![];}async[_0x18e6b0(0xa7)](){const _0x180295=_0x18e6b0;await this[_0x180295(0xc2)]();}async[_0x18e6b0(0xc2)](){const _0xf3f442=_0x18e6b0,_0x5aee37=await this['autoReplyEntity'][_0xf3f442(0xb2)]({'where':{'status':0x1},'select':[_0xf3f442(0xaa),_0xf3f442(0x96),_0xf3f442(0xac)]});this['autoReplyMap']={},this[_0xf3f442(0x9b)]=[],_0x5aee37[_0xf3f442(0x9f)](_0x24269a=>{const _0x2aa09b=_0xf3f442;this[_0x2aa09b(0xb7)][_0x24269a[_0x2aa09b(0xaa)]]={'answer':_0x24269a[_0x2aa09b(0x96)],'isAIReplyEnabled':_0x24269a[_0x2aa09b(0xac)]};const _0xc11221=_0x24269a[_0x2aa09b(0xaa)]['split']('\x20')[_0x2aa09b(0xcb)](_0x50ac0d=>_0x50ac0d['trim']());this[_0x2aa09b(0x9b)]['push']({'prompt':_0x24269a['prompt'],'keywords':_0xc11221});});}async[_0x18e6b0(0xb9)](_0x3cef4c){const _0x30a1af=_0x18e6b0;let _0x2ca947=[],_0x5acd94=0x0;const _0x48283d=new Set();if(this['autoReplyFuzzyMatch'])for(const _0xcda7ab of this[_0x30a1af(0x9b)]){_0xcda7ab[_0x30a1af(0x93)]['some'](_0x3559a1=>_0x3cef4c[_0x30a1af(0xc5)](_0x3559a1))&&(!_0x48283d['has'](_0xcda7ab[_0x30a1af(0xaa)])&&(_0x2ca947['push'](this[_0x30a1af(0xb7)][_0xcda7ab[_0x30a1af(0xaa)]][_0x30a1af(0x96)]),_0x48283d[_0x30a1af(0xae)](_0xcda7ab[_0x30a1af(0xaa)]),this[_0x30a1af(0xb7)][_0xcda7ab[_0x30a1af(0xaa)]][_0x30a1af(0xac)]===0x1&&(_0x5acd94=0x1)));}else{const _0x4f1706=this[_0x30a1af(0x9b)][_0x30a1af(0xbf)](_0x51d23=>_0x51d23['prompt']===_0x3cef4c);for(const _0x3aae48 of _0x4f1706){!_0x48283d['has'](_0x3aae48[_0x30a1af(0xaa)])&&(_0x2ca947[_0x30a1af(0xa2)](this[_0x30a1af(0xb7)][_0x3aae48['prompt']][_0x30a1af(0x96)]),_0x48283d[_0x30a1af(0xae)](_0x3aae48['prompt']),this[_0x30a1af(0xb7)][_0x3aae48['prompt']][_0x30a1af(0xac)]===0x1&&(_0x5acd94=0x1));}}return{'answer':_0x2ca947[_0x30a1af(0xb4)]('\x0a'),'isAIReplyEnabled':_0x5acd94};}async[_0x18e6b0(0xa3)](_0x1058ae){const _0x5f0394=_0x18e6b0,{page:page=0x1,size:size=0xa,prompt:_0x33825e,status:_0x38a598}=_0x1058ae,_0x29ecd0={};[0x0,0x1,'0','1'][_0x5f0394(0xc5)](_0x38a598)&&(_0x29ecd0['status']=_0x38a598),_0x33825e&&(_0x29ecd0['prompt']=(0x0,typeorm_2[_0x5f0394(0xc8)])('%'+_0x33825e+'%'));const [_0x16c404,_0x13f930]=await this[_0x5f0394(0xa8)][_0x5f0394(0x95)]({'where':_0x29ecd0,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x5f0394(0xad)}});return{'rows':_0x16c404,'count':_0x13f930};}async[_0x18e6b0(0xb1)](_0x4a7c68){const _0x45df2d=_0x18e6b0;return await this[_0x45df2d(0xa8)]['save'](_0x4a7c68),await this[_0x45df2d(0xc2)](),_0x45df2d(0x9c);}async[_0x18e6b0(0xc1)](_0x589d7c){const _0x55b0d6=_0x18e6b0,{id:_0x173f07}=_0x589d7c,_0x4b61e4=await this['autoReplyEntity'][_0x55b0d6(0xb5)]({'id':_0x173f07},_0x589d7c);if(_0x4b61e4[_0x55b0d6(0xaf)]>0x0)return await this['loadAutoReplyList'](),_0x55b0d6(0xc7);throw new common_1[(_0x55b0d6(0xb3))](_0x55b0d6(0xb0),common_1[_0x55b0d6(0xb8)]['BAD_REQUEST']);}async['delAutoreply'](_0x5dab26){const _0x401940=_0x18e6b0,{id:_0x14a05c}=_0x5dab26,_0x439e0e=await this['autoReplyEntity'][_0x401940(0x91)]({'where':{'id':_0x14a05c}});if(!_0x439e0e)throw new common_1[(_0x401940(0xb3))](_0x401940(0xbb),common_1[_0x401940(0xb8)][_0x401940(0xab)]);const _0xd8370f=await this['autoReplyEntity'][_0x401940(0xba)]({'id':_0x14a05c});if(_0xd8370f[_0x401940(0xaf)]>0x0)return await this[_0x401940(0xc2)](),'删除问题成功';throw new common_1['HttpException'](_0x401940(0x94),common_1[_0x401940(0xb8)][_0x401940(0xab)]);}};AutoreplyService=__decorate([(0x0,common_1[_0x18e6b0(0xc0)])(),__param(0x0,(0x0,typeorm_1[_0x18e6b0(0xc3)])(autoreply_entity_1[_0x18e6b0(0x97)])),__metadata('design:paramtypes',[typeorm_2[_0x18e6b0(0xa6)]])],AutoreplyService),exports[_0x18e6b0(0xbd)]=AutoreplyService;