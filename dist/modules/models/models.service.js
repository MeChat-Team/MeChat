'use strict';function _0x1de8(_0x5bcc99,_0x516dc9){const _0x424065=_0x4240();return _0x1de8=function(_0x1de85b,_0x5f3d65){_0x1de85b=_0x1de85b-0x1b8;let _0x210e4f=_0x424065[_0x1de85b];return _0x210e4f;},_0x1de8(_0x5bcc99,_0x516dc9);}const _0xb4153c=_0x1de8;(function(_0x26336d,_0x4c868f){const _0xe3643b=_0x1de8,_0x4c1916=_0x26336d();while(!![]){try{const _0x392baa=parseInt(_0xe3643b(0x20b))/0x1*(-parseInt(_0xe3643b(0x216))/0x2)+-parseInt(_0xe3643b(0x1ef))/0x3*(-parseInt(_0xe3643b(0x1f9))/0x4)+parseInt(_0xe3643b(0x1b9))/0x5+parseInt(_0xe3643b(0x1e9))/0x6*(parseInt(_0xe3643b(0x1da))/0x7)+-parseInt(_0xe3643b(0x1fc))/0x8+-parseInt(_0xe3643b(0x1d5))/0x9+parseInt(_0xe3643b(0x1df))/0xa;if(_0x392baa===_0x4c868f)break;else _0x4c1916['push'](_0x4c1916['shift']());}catch(_0x32d321){_0x4c1916['push'](_0x4c1916['shift']());}}}(_0x4240,0xc53ce));var __decorate=this&&this['__decorate']||function(_0x50036a,_0x26057d,_0x3fe434,_0xd1be54){const _0x58596f=_0x1de8;var _0x29a6b8=arguments['length'],_0x5f5c09=_0x29a6b8<0x3?_0x26057d:_0xd1be54===null?_0xd1be54=Object['getOwnPropertyDescriptor'](_0x26057d,_0x3fe434):_0xd1be54,_0x198a18;if(typeof Reflect==='object'&&typeof Reflect[_0x58596f(0x1e4)]===_0x58596f(0x1de))_0x5f5c09=Reflect['decorate'](_0x50036a,_0x26057d,_0x3fe434,_0xd1be54);else{for(var _0x2d94f1=_0x50036a[_0x58596f(0x1d6)]-0x1;_0x2d94f1>=0x0;_0x2d94f1--)if(_0x198a18=_0x50036a[_0x2d94f1])_0x5f5c09=(_0x29a6b8<0x3?_0x198a18(_0x5f5c09):_0x29a6b8>0x3?_0x198a18(_0x26057d,_0x3fe434,_0x5f5c09):_0x198a18(_0x26057d,_0x3fe434))||_0x5f5c09;}return _0x29a6b8>0x3&&_0x5f5c09&&Object[_0x58596f(0x1c0)](_0x26057d,_0x3fe434,_0x5f5c09),_0x5f5c09;},__metadata=this&&this[_0xb4153c(0x1d3)]||function(_0x322e00,_0xa1761f){const _0x4f467f=_0xb4153c;if(typeof Reflect===_0x4f467f(0x20a)&&typeof Reflect[_0x4f467f(0x217)]===_0x4f467f(0x1de))return Reflect[_0x4f467f(0x217)](_0x322e00,_0xa1761f);},__param=this&&this['__param']||function(_0x617fc8,_0x5df9af){return function(_0x4ef052,_0x5a0620){_0x5df9af(_0x4ef052,_0x5a0620,_0x617fc8);};};Object[_0xb4153c(0x1c0)](exports,_0xb4153c(0x1fe),{'value':!![]}),exports[_0xb4153c(0x1bd)]=void 0x0;const status_constant_1=require(_0xb4153c(0x208)),utils_1=require('../../common/utils'),common_1=require(_0xb4153c(0x1f1)),typeorm_1=require(_0xb4153c(0x1e1)),typeorm_2=require(_0xb4153c(0x207)),models_entity_1=require(_0xb4153c(0x204));let ModelsService=class ModelsService{constructor(_0x164f2b){const _0x1b3957=_0xb4153c;this[_0x1b3957(0x1c8)]=_0x164f2b,this[_0x1b3957(0x1f3)]=[],this[_0x1b3957(0x20f)]={},this['keyList']={},this[_0x1b3957(0x1fd)]={},this[_0x1b3957(0x205)]={};}async[_0xb4153c(0x1f8)](){const _0x5e945=_0xb4153c;await this[_0x5e945(0x206)]();}async['initCalcKey'](){const _0x54686f=_0xb4153c;this[_0x54686f(0x1fd)]={},this[_0x54686f(0x205)]={},this[_0x54686f(0x214)]={},this['modelMaps']={},this[_0x54686f(0x1f3)]=[];const _0x2f8ed0=await this[_0x54686f(0x1c8)]['find']({'where':{'status':!![]}}),_0xbd9092=_0x2f8ed0['reduce']((_0x4ea6f4,_0x16594d)=>{const _0x279780=_0x54686f;return!_0x4ea6f4[_0x16594d[_0x279780(0x1ea)]]?_0x4ea6f4[_0x16594d[_0x279780(0x1ea)]]=[_0x16594d]:_0x4ea6f4[_0x16594d[_0x279780(0x1ea)]][_0x279780(0x1fa)](_0x16594d),_0x4ea6f4;},{});this[_0x54686f(0x1f3)]=Object[_0x54686f(0x1be)](_0xbd9092)[_0x54686f(0x1c1)](_0x556fc1=>{const _0x796db4=_0x54686f;return{'label':status_constant_1[_0x796db4(0x1d0)][_0x556fc1],'val':_0x556fc1};}),this[_0x54686f(0x20f)]=_0xbd9092,this[_0x54686f(0x214)]={},_0x2f8ed0[_0x54686f(0x1dc)](_0x34b073=>{const _0x8ce766=_0x54686f,{keyType:_0x72cc47,model:_0x3c8955}=_0x34b073;if(!this['keyPoolMap'][_0x3c8955])this[_0x8ce766(0x1fd)][_0x3c8955]=[];this[_0x8ce766(0x1fd)][_0x3c8955][_0x8ce766(0x1fa)](_0x34b073);if(!this[_0x8ce766(0x205)][_0x3c8955])this['keyPoolIndexMap'][_0x3c8955]=0x0;if(!this[_0x8ce766(0x214)][_0x72cc47])this['keyList'][_0x72cc47]={};if(!this[_0x8ce766(0x214)][_0x72cc47][_0x3c8955])this['keyList'][_0x72cc47][_0x3c8955]=[];this[_0x8ce766(0x214)][_0x72cc47][_0x3c8955]['push'](_0x34b073);});}async[_0xb4153c(0x1c2)](_0x31995e,_0x34dae8,_0x1594c2=-0x1){const _0x57e350=_0xb4153c,_0x1dc120=await this[_0x57e350(0x1c8)][_0x57e350(0x20c)]({'id':_0x31995e},{'status':![],'keyStatus':_0x1594c2,'remark':_0x34dae8});common_1[_0x57e350(0x1f2)][_0x57e350(0x1bf)](_0x57e350(0x200)+_0x31995e+_0x57e350(0x1d9)),this[_0x57e350(0x206)]();}async[_0xb4153c(0x1dd)](_0xb2d3e3){const _0x4f355f=_0xb4153c;let _0x2a33f0=await this['modelsEntity'][_0x4f355f(0x1ca)]({'where':{'model':_0xb2d3e3}});if(!_0x2a33f0)return null;return _0x2a33f0;}async[_0xb4153c(0x1ed)](_0x623851){const _0x94e277=_0xb4153c,_0x4a850e=await this[_0x94e277(0x1c8)][_0x94e277(0x1e7)]({'where':{'model':(0x0,typeorm_2[_0x94e277(0x1d1)])(_0x623851+'%')}});if(_0x4a850e[_0x94e277(0x1d6)]===0x0)throw new common_1[(_0x94e277(0x202))]('未找到匹配的模型，请重新选择模型！',common_1[_0x94e277(0x1cb)]['BAD_REQUEST']);const _0x2606c1=_0x4a850e[0x0],_0x1ffb91=_0x2606c1[_0x94e277(0x20e)][_0x94e277(0x1e3)](_0x623851,''),_0x50dc6d=Object[_0x94e277(0x209)](Object['assign']({},_0x2606c1),{'model':_0x1ffb91});return _0x50dc6d;}async['getBaseConfig'](){const _0x47f157=_0xb4153c;if(!this[_0x47f157(0x1f3)]['length']||!Object[_0x47f157(0x1be)](this[_0x47f157(0x20f)])[_0x47f157(0x1d6)])return;const {keyType:_0xce9d01,modelName:_0x3aad52,model:_0x40ebf8,deductType:_0x5053d2,deduct:_0x4f87de,isFileUpload:_0x1eabd1,modelAvatar:_0x54b5e7,modelDescription:_0x3d9e14}=this[_0x47f157(0x20f)][0x1][0x0];return{'modelInfo':{'keyType':_0xce9d01,'modelName':_0x3aad52,'model':_0x40ebf8,'deductType':_0x5053d2,'deduct':_0x4f87de,'isFileUpload':_0x1eabd1,'modelAvatar':_0x54b5e7,'modelDescription':_0x3d9e14}};}async[_0xb4153c(0x1ec)](_0x46be42){const _0x3e8185=_0xb4153c;try{isNaN(_0x46be42[_0x3e8185(0x1d8)])&&(_0x46be42[_0x3e8185(0x1d8)]=null);const {id:_0x4aa49f}=_0x46be42;_0x46be42[_0x3e8185(0x1f7)]&&(_0x46be42['keyStatus']=0x1);if(_0x4aa49f){const _0x1f0d7e=await this['modelsEntity'][_0x3e8185(0x20c)]({'id':_0x4aa49f},_0x46be42);return await this[_0x3e8185(0x206)](),_0x1f0d7e[_0x3e8185(0x212)]>0x0;}else{const {keyType:_0xec3164,key:_0x549c73}=_0x46be42;if(Number(_0xec3164!==0x1)){const _0xbaa231=await this[_0x3e8185(0x1c8)][_0x3e8185(0x1d7)](_0x46be42);return await this[_0x3e8185(0x206)](),_0xbaa231;}else{const _0x4e4f2d=_0x549c73[_0x3e8185(0x1c1)](_0x32eb3c=>{const _0x15bc83=_0x3e8185;try{const _0x2458b0=JSON[_0x15bc83(0x1f5)](JSON[_0x15bc83(0x215)](_0x46be42));return _0x2458b0[_0x15bc83(0x1fb)]=_0x32eb3c,isNaN(_0x2458b0[_0x15bc83(0x1d8)])&&(_0x2458b0[_0x15bc83(0x1d8)]=null),_0x2458b0;}catch(_0x15af8b){console[_0x15bc83(0x1d2)](_0x15bc83(0x1e8),_0x15af8b);}}),_0x39cbbe=await this['modelsEntity'][_0x3e8185(0x1d7)](_0x4e4f2d);return await this[_0x3e8185(0x206)](),_0x39cbbe;}}}catch(_0x18a18e){console['log'](_0x3e8185(0x1ba),_0x18a18e);}}async['delModel']({id:_0x122b39}){const _0x31e828=_0xb4153c;if(!_0x122b39)throw new common_1[(_0x31e828(0x202))](_0x31e828(0x201),common_1[_0x31e828(0x1cb)][_0x31e828(0x1f6)]);const _0x100dcd=await this[_0x31e828(0x1c8)]['findOne']({'where':{'id':_0x122b39}});if(!_0x100dcd)throw new common_1[(_0x31e828(0x202))]('当前账号不存在！',common_1[_0x31e828(0x1cb)][_0x31e828(0x1f6)]);const _0x56d524=await this[_0x31e828(0x1c8)][_0x31e828(0x20d)]({'id':_0x122b39});return await this[_0x31e828(0x206)](),_0x56d524;}async['queryModels'](_0x1236c6,_0x2252ea){const _0x53bc1a=_0xb4153c,{role:_0x59fb01}=_0x1236c6[_0x53bc1a(0x1c9)],{keyType:_0x454b73,key:_0x259394,status:_0x544a56,model:_0x271cfb,page:page=0x1,size:size=0xa}=_0x2252ea;let _0x3a8a75={};_0x454b73&&(_0x3a8a75[_0x53bc1a(0x1ea)]=_0x454b73),_0x271cfb&&(_0x3a8a75[_0x53bc1a(0x20e)]=_0x271cfb),_0x544a56&&(_0x3a8a75[_0x53bc1a(0x1f7)]=Number(_0x544a56)===0x1?!![]:![]),_0x259394&&(_0x3a8a75[_0x53bc1a(0x1fb)]=(0x0,typeorm_2['Like'])('%'+_0x259394+'%'));const [_0x260bae,_0x15d676]=await this[_0x53bc1a(0x1c8)][_0x53bc1a(0x1e6)]({'where':_0x3a8a75,'order':{'modelOrder':'ASC'},'skip':(page-0x1)*size,'take':size});return _0x59fb01!==_0x53bc1a(0x1b8)&&_0x260bae[_0x53bc1a(0x1dc)](_0x47f2c0=>{const _0x5064b7=_0x53bc1a;_0x47f2c0[_0x5064b7(0x1fb)]&&(_0x47f2c0['key']=(0x0,utils_1[_0x5064b7(0x1cc)])(_0x47f2c0[_0x5064b7(0x1fb)]));}),{'rows':_0x260bae,'count':_0x15d676};}async[_0xb4153c(0x1ff)](){const _0x4bc951=_0xb4153c,_0x2ba965=JSON[_0x4bc951(0x1f5)](JSON['stringify'](this['modelMaps']));return Object[_0x4bc951(0x1be)](_0x2ba965)[_0x4bc951(0x1dc)](_0xb183c9=>{const _0x19fcca=_0x4bc951;_0x2ba965[_0xb183c9]=_0x2ba965[_0xb183c9][_0x19fcca(0x1c4)](_0x509fca=>_0x509fca[_0x19fcca(0x1eb)]===0x1)['sort']((_0x2d7bb2,_0x3d6d1c)=>_0x2d7bb2['modelOrder']-_0x3d6d1c['modelOrder']),_0x2ba965[_0xb183c9]=Array[_0x19fcca(0x1bb)](_0x2ba965[_0xb183c9][_0x19fcca(0x1c1)](_0x201d77=>{const {modelName:_0x2f9139,keyType:_0x5c02c3,model:_0x2028d9,deduct:_0x4ef0ce,deductType:_0x3686c3,maxRounds:_0x41e8a0,modelAvatar:_0x3f04e9,isFileUpload:_0x727a7,modelDescription:_0x3e92fc}=_0x201d77;return{'modelName':_0x2f9139,'keyType':_0x5c02c3,'model':_0x2028d9,'deduct':_0x4ef0ce,'deductType':_0x3686c3,'maxRounds':_0x41e8a0,'modelAvatar':_0x3f04e9,'isFileUpload':_0x727a7,'modelDescription':_0x3e92fc};})[_0x19fcca(0x1c5)]((_0x11553d,_0x3cc5d9)=>_0x11553d[_0x19fcca(0x211)](_0x3cc5d9[_0x19fcca(0x1e2)],_0x3cc5d9),new Map())[_0x19fcca(0x1ce)]());}),{'modelTypeList':this[_0x4bc951(0x1f3)],'modelMaps':_0x2ba965};}async[_0xb4153c(0x1e0)](){const _0x43742e=_0xb4153c,_0x294be8=await this[_0x43742e(0x1c8)][_0x43742e(0x1ca)]({'where':{'model':_0x43742e(0x1f4)}});return _0x294be8?{'modelName':_0x294be8[_0x43742e(0x1e2)],'model':_0x294be8[_0x43742e(0x20e)],'deduct':_0x294be8[_0x43742e(0x1c3)],'deductType':_0x294be8[_0x43742e(0x1bc)]}:null;}async[_0xb4153c(0x1d4)](_0x33cab7,_0x4cc0a1){const _0x44b1f1=_0xb4153c;await this[_0x44b1f1(0x1c8)]['createQueryBuilder']()[_0x44b1f1(0x20c)](models_entity_1[_0x44b1f1(0x1db)])[_0x44b1f1(0x211)]({'useCount':()=>_0x44b1f1(0x1c7),'useToken':()=>_0x44b1f1(0x1cf)+_0x4cc0a1})[_0x44b1f1(0x1e5)](_0x44b1f1(0x213),{'id':_0x33cab7})[_0x44b1f1(0x1f0)]();}async['getAllKey'](){const _0x25dcad=_0xb4153c;return await this[_0x25dcad(0x1c8)][_0x25dcad(0x1e7)]();}async['queryModelType'](_0x393617){return 0x1;}async[_0xb4153c(0x1c6)](_0x5a1d63){return 0x1;}async['delModelType'](_0x93742b){return 0x1;}async[_0xb4153c(0x1cd)](_0x3ccfd1){const _0x18633e=_0xb4153c,_0x2b4de5=await this[_0x18633e(0x1c8)][_0x18633e(0x1ca)]({'where':{'model':_0x3ccfd1,'status':!![],'keyStatus':0x1}});return _0x2b4de5;}};function _0x4240(){const _0x129b1a=['@nestjs/common','Logger','modelTypes','midjourney','parse','BAD_REQUEST','status','onModuleInit','89924gUOprn','push','key','2269232dngtvx','keyPoolMap','__esModule','modelsList','key:\x20','缺失必要参数！','HttpException','Injectable','./models.entity','keyPoolIndexMap','initCalcKey','typeorm','../../common/constants/status.constant','assign','object','82609fqNUpX','update','delete','model','modelMaps','Repository','set','affected','id\x20=\x20:id','keyList','stringify','8FQJsKO','metadata','super','814265lquOCB','error:\x20','from','deductType','ModelsService','keys','error','defineProperty','map','lockKey','deduct','filter','reduce','setModelType','useCount\x20+\x201','modelsEntity','user','findOne','HttpStatus','hideString','getModelConfigByName','values','useToken\x20+\x20','ModelsMapCn','Like','log','__metadata','saveUseLog','3846942HpFNSb','length','save','timeout','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','7QUEtns','ModelsEntity','forEach','getCurrentModelKeyInfo','function','3232300PIZvXo','getMjInfo','@nestjs/typeorm','modelName','replace','decorate','where','findAndCount','find','parse\x20error:\x20','5077608RMCxur','keyType','keyStatus','setModel','getSpecialModelKeyInfo','design:paramtypes','69XOZhyD','execute'];_0x4240=function(){return _0x129b1a;};return _0x4240();}ModelsService=__decorate([(0x0,common_1[_0xb4153c(0x203)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(models_entity_1['ModelsEntity'])),__metadata(_0xb4153c(0x1ee),[typeorm_2[_0xb4153c(0x210)]])],ModelsService),exports[_0xb4153c(0x1bd)]=ModelsService;