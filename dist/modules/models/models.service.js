'use strict';const _0x183d6c=_0x55f6;(function(_0x2fbc7a,_0x19418e){const _0x4c4aff=_0x55f6,_0x405103=_0x2fbc7a();while(!![]){try{const _0x375399=parseInt(_0x4c4aff(0x20d))/0x1+-parseInt(_0x4c4aff(0x1ed))/0x2+parseInt(_0x4c4aff(0x1b2))/0x3+parseInt(_0x4c4aff(0x201))/0x4+-parseInt(_0x4c4aff(0x1df))/0x5*(-parseInt(_0x4c4aff(0x1e6))/0x6)+-parseInt(_0x4c4aff(0x1bb))/0x7+-parseInt(_0x4c4aff(0x1e4))/0x8*(parseInt(_0x4c4aff(0x1d9))/0x9);if(_0x375399===_0x19418e)break;else _0x405103['push'](_0x405103['shift']());}catch(_0x15a16a){_0x405103['push'](_0x405103['shift']());}}}(_0x59d4,0x43dd9));var __decorate=this&&this['__decorate']||function(_0xff8ac3,_0x494639,_0x47554e,_0x529fbb){const _0x9d5697=_0x55f6;var _0x523523=arguments[_0x9d5697(0x1d1)],_0x5f38f0=_0x523523<0x3?_0x494639:_0x529fbb===null?_0x529fbb=Object[_0x9d5697(0x1d2)](_0x494639,_0x47554e):_0x529fbb,_0x44c602;if(typeof Reflect===_0x9d5697(0x1dd)&&typeof Reflect['decorate']===_0x9d5697(0x1ae))_0x5f38f0=Reflect[_0x9d5697(0x1e5)](_0xff8ac3,_0x494639,_0x47554e,_0x529fbb);else{for(var _0x45b845=_0xff8ac3['length']-0x1;_0x45b845>=0x0;_0x45b845--)if(_0x44c602=_0xff8ac3[_0x45b845])_0x5f38f0=(_0x523523<0x3?_0x44c602(_0x5f38f0):_0x523523>0x3?_0x44c602(_0x494639,_0x47554e,_0x5f38f0):_0x44c602(_0x494639,_0x47554e))||_0x5f38f0;}return _0x523523>0x3&&_0x5f38f0&&Object[_0x9d5697(0x1fc)](_0x494639,_0x47554e,_0x5f38f0),_0x5f38f0;},__metadata=this&&this[_0x183d6c(0x1c2)]||function(_0x598aff,_0x545fea){const _0x140b87=_0x183d6c;if(typeof Reflect===_0x140b87(0x1dd)&&typeof Reflect[_0x140b87(0x1d3)]==='function')return Reflect[_0x140b87(0x1d3)](_0x598aff,_0x545fea);},__param=this&&this['__param']||function(_0x44e6f2,_0x377b7b){return function(_0x105d08,_0xef9076){_0x377b7b(_0x105d08,_0xef9076,_0x44e6f2);};};Object[_0x183d6c(0x1fc)](exports,_0x183d6c(0x1e8),{'value':!![]}),exports[_0x183d6c(0x1eb)]=void 0x0;const status_constant_1=require('../../common/constants/status.constant'),utils_1=require(_0x183d6c(0x206)),common_1=require('@nestjs/common'),typeorm_1=require(_0x183d6c(0x1c5)),typeorm_2=require(_0x183d6c(0x1af)),models_entity_1=require(_0x183d6c(0x1ef));function _0x55f6(_0x6deba1,_0x1bb073){const _0x59d488=_0x59d4();return _0x55f6=function(_0x55f6eb,_0x34b3d4){_0x55f6eb=_0x55f6eb-0x1ae;let _0x483996=_0x59d488[_0x55f6eb];return _0x483996;},_0x55f6(_0x6deba1,_0x1bb073);}function _0x59d4(){const _0x5a415e=['midjourney','keyList','log','execute','deduct','useCount\x20+\x201','defineProperty','Like','from','delModel','getSpecialModelKeyInfo','2012008UkaPxO','queryModels','keyPoolIndexMap','HttpStatus','forEach','../../common/utils','getModelConfigByName','push','setModel','delModelType','model','createQueryBuilder','107334ZwDjMj','function','typeorm','key:\x20','modelOrder','1256223aAWZlZ','getAllKey','design:paramtypes','useToken\x20+\x20','getMjInfo','map','缺失必要参数！','where','InjectRepository','3556105Rolszy','findAndCount','keyType','error','stringify','saveUseLog','find','__metadata','error:\x20','initCalcKey','@nestjs/typeorm','values','reduce','isTokenBased','findOne','key','modelsEntity','super','BAD_REQUEST','parse\x20error:\x20','affected','parse','length','getOwnPropertyDescriptor','metadata','getCurrentModelKeyInfo','modelTypes','ASC','timeout','set','9279FPZZtM','keys','status','ModelsEntity','object','lockKey','645lDJjiR','setModelType','modelsList','modelName','未找到匹配的模型，请重新选择模型！','3832uGGCrA','decorate','12642jHdMjy','keyStatus','__esModule','当前账号不存在！','user','ModelsService','deductType','42078osPmmn','modelMaps','./models.entity','assign','keyPoolMap','filter','HttpException','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','update'];_0x59d4=function(){return _0x5a415e;};return _0x59d4();}let ModelsService=class ModelsService{constructor(_0x254ee3){const _0x370ee4=_0x183d6c;this[_0x370ee4(0x1cb)]=_0x254ee3,this['modelTypes']=[],this[_0x370ee4(0x1ee)]={},this['keyList']={},this[_0x370ee4(0x1f1)]={},this[_0x370ee4(0x203)]={};}async['onModuleInit'](){await this['initCalcKey']();}async[_0x183d6c(0x1c4)](){const _0x11716f=_0x183d6c;this[_0x11716f(0x1f1)]={},this[_0x11716f(0x203)]={},this[_0x11716f(0x1f7)]={},this[_0x11716f(0x1ee)]={},this[_0x11716f(0x1d5)]=[];const _0x1306d9=await this[_0x11716f(0x1cb)][_0x11716f(0x1c1)]({'where':{'status':!![]}}),_0x47af62=_0x1306d9['reduce']((_0x1da28b,_0x3c1af4)=>{const _0x24ec39=_0x11716f;return!_0x1da28b[_0x3c1af4[_0x24ec39(0x1bd)]]?_0x1da28b[_0x3c1af4[_0x24ec39(0x1bd)]]=[_0x3c1af4]:_0x1da28b[_0x3c1af4['keyType']][_0x24ec39(0x208)](_0x3c1af4),_0x1da28b;},{});this[_0x11716f(0x1d5)]=Object[_0x11716f(0x1da)](_0x47af62)[_0x11716f(0x1b7)](_0x3cfe17=>{return{'label':status_constant_1['ModelsMapCn'][_0x3cfe17],'val':_0x3cfe17};}),this[_0x11716f(0x1ee)]=_0x47af62,this[_0x11716f(0x1f7)]={},_0x1306d9[_0x11716f(0x205)](_0x1c1d0e=>{const _0x411cf7=_0x11716f,{keyType:_0x3f1a37,model:_0x1b8962}=_0x1c1d0e;if(!this[_0x411cf7(0x1f1)][_0x1b8962])this[_0x411cf7(0x1f1)][_0x1b8962]=[];this['keyPoolMap'][_0x1b8962][_0x411cf7(0x208)](_0x1c1d0e);if(!this['keyPoolIndexMap'][_0x1b8962])this[_0x411cf7(0x203)][_0x1b8962]=0x0;if(!this['keyList'][_0x3f1a37])this[_0x411cf7(0x1f7)][_0x3f1a37]={};if(!this[_0x411cf7(0x1f7)][_0x3f1a37][_0x1b8962])this[_0x411cf7(0x1f7)][_0x3f1a37][_0x1b8962]=[];this[_0x411cf7(0x1f7)][_0x3f1a37][_0x1b8962][_0x411cf7(0x208)](_0x1c1d0e);});}async[_0x183d6c(0x1de)](_0x363b3b,_0x4298ab,_0x32409e=-0x1){const _0x5117b1=_0x183d6c,_0x592d96=await this[_0x5117b1(0x1cb)][_0x5117b1(0x1f5)]({'id':_0x363b3b},{'status':![],'keyStatus':_0x32409e,'remark':_0x4298ab});common_1['Logger'][_0x5117b1(0x1be)](_0x5117b1(0x1b0)+_0x363b3b+_0x5117b1(0x1f4)),this[_0x5117b1(0x1c4)]();}async[_0x183d6c(0x1d4)](_0x3b373e){const _0x4aa5bf=_0x183d6c;let _0x404851=await this[_0x4aa5bf(0x1cb)][_0x4aa5bf(0x1c9)]({'where':{'model':_0x3b373e}});if(!_0x404851)return null;return _0x404851;}async[_0x183d6c(0x200)](_0x5ad3d9){const _0x4818cf=_0x183d6c,_0x1cd987=await this[_0x4818cf(0x1cb)][_0x4818cf(0x1c1)]({'where':{'model':(0x0,typeorm_2[_0x4818cf(0x1fd)])(_0x5ad3d9+'%')}});if(_0x1cd987[_0x4818cf(0x1d1)]===0x0)throw new common_1[(_0x4818cf(0x1f3))](_0x4818cf(0x1e3),common_1[_0x4818cf(0x204)][_0x4818cf(0x1cd)]);const _0x5d2493=_0x1cd987[0x0],_0x4a06dd=_0x5d2493['model']['replace'](_0x5ad3d9,''),_0x4d58f4=Object['assign'](Object[_0x4818cf(0x1f0)]({},_0x5d2493),{'model':_0x4a06dd});return _0x4d58f4;}async['getBaseConfig'](){const _0x1e263f=_0x183d6c;if(!this[_0x1e263f(0x1d5)][_0x1e263f(0x1d1)]||!Object[_0x1e263f(0x1da)](this[_0x1e263f(0x1ee)])[_0x1e263f(0x1d1)])return;const {keyType:_0x20c340,modelName:_0x13f4e8,model:_0x4fc17a,deductType:_0x49929e,deduct:_0xab55de,isFileUpload:_0xa2d182,modelAvatar:_0x218558,modelDescription:_0x55190f}=this['modelMaps'][0x1][0x0];return{'modelInfo':{'keyType':_0x20c340,'modelName':_0x13f4e8,'model':_0x4fc17a,'deductType':_0x49929e,'deduct':_0xab55de,'isFileUpload':_0xa2d182,'modelAvatar':_0x218558,'modelDescription':_0x55190f}};}async[_0x183d6c(0x209)](_0x1c3354){const _0x3b1ee6=_0x183d6c;try{isNaN(_0x1c3354[_0x3b1ee6(0x1d7)])&&(_0x1c3354['timeout']=null);const {id:_0x193a27}=_0x1c3354;_0x1c3354['status']&&(_0x1c3354['keyStatus']=0x1);if(_0x193a27){const _0x33bc79=await this['modelsEntity'][_0x3b1ee6(0x1f5)]({'id':_0x193a27},_0x1c3354);return await this[_0x3b1ee6(0x1c4)](),_0x33bc79[_0x3b1ee6(0x1cf)]>0x0;}else{const {keyType:_0x161ecc,key:_0x4c0be7}=_0x1c3354;if(Number(_0x161ecc!==0x1)){const _0x3d0e7c=await this[_0x3b1ee6(0x1cb)]['save'](_0x1c3354);return await this[_0x3b1ee6(0x1c4)](),_0x3d0e7c;}else{const _0x204651=_0x4c0be7[_0x3b1ee6(0x1b7)](_0x20a753=>{const _0x21dc19=_0x3b1ee6;try{const _0x3066a1=JSON[_0x21dc19(0x1d0)](JSON[_0x21dc19(0x1bf)](_0x1c3354));return _0x3066a1[_0x21dc19(0x1ca)]=_0x20a753,isNaN(_0x3066a1['timeout'])&&(_0x3066a1[_0x21dc19(0x1d7)]=null),_0x3066a1;}catch(_0x30c52b){console[_0x21dc19(0x1f8)](_0x21dc19(0x1ce),_0x30c52b);}}),_0x27ba0b=await this[_0x3b1ee6(0x1cb)]['save'](_0x204651);return await this[_0x3b1ee6(0x1c4)](),_0x27ba0b;}}}catch(_0x55748b){console[_0x3b1ee6(0x1f8)](_0x3b1ee6(0x1c3),_0x55748b);}}async[_0x183d6c(0x1ff)]({id:_0x1d6703}){const _0x403756=_0x183d6c;if(!_0x1d6703)throw new common_1['HttpException'](_0x403756(0x1b8),common_1[_0x403756(0x204)][_0x403756(0x1cd)]);const _0x3d29a4=await this[_0x403756(0x1cb)][_0x403756(0x1c9)]({'where':{'id':_0x1d6703}});if(!_0x3d29a4)throw new common_1[(_0x403756(0x1f3))](_0x403756(0x1e9),common_1[_0x403756(0x204)][_0x403756(0x1cd)]);const _0x3029b9=await this[_0x403756(0x1cb)]['delete']({'id':_0x1d6703});return await this[_0x403756(0x1c4)](),_0x3029b9;}async[_0x183d6c(0x202)](_0x547390,_0x53c1a2){const _0xba2d71=_0x183d6c,{role:_0x14383b}=_0x547390[_0xba2d71(0x1ea)],{keyType:_0x420400,key:_0xd8fa,status:_0x13eaf5,model:_0x19a18d,page:page=0x1,size:size=0xa}=_0x53c1a2;let _0x30e3d6={};_0x420400&&(_0x30e3d6['keyType']=_0x420400),_0x19a18d&&(_0x30e3d6[_0xba2d71(0x20b)]=_0x19a18d),_0x13eaf5&&(_0x30e3d6[_0xba2d71(0x1db)]=Number(_0x13eaf5)===0x1?!![]:![]),_0xd8fa&&(_0x30e3d6['key']=(0x0,typeorm_2[_0xba2d71(0x1fd)])('%'+_0xd8fa+'%'));const [_0x277225,_0x231fb9]=await this[_0xba2d71(0x1cb)][_0xba2d71(0x1bc)]({'where':_0x30e3d6,'order':{'modelOrder':_0xba2d71(0x1d6)},'skip':(page-0x1)*size,'take':size});return _0x14383b!==_0xba2d71(0x1cc)&&_0x277225['forEach'](_0x4697f=>{const _0x2d33db=_0xba2d71;_0x4697f[_0x2d33db(0x1ca)]&&(_0x4697f[_0x2d33db(0x1ca)]=(0x0,utils_1['hideString'])(_0x4697f['key']));}),{'rows':_0x277225,'count':_0x231fb9};}async[_0x183d6c(0x1e1)](){const _0x38f9ba=_0x183d6c,_0x31e8c6=JSON['parse'](JSON[_0x38f9ba(0x1bf)](this[_0x38f9ba(0x1ee)]));return Object[_0x38f9ba(0x1da)](_0x31e8c6)[_0x38f9ba(0x205)](_0x15383d=>{const _0x56fb8b=_0x38f9ba;_0x31e8c6[_0x15383d]=_0x31e8c6[_0x15383d][_0x56fb8b(0x1f2)](_0x5b0948=>_0x5b0948[_0x56fb8b(0x1e7)]===0x1)['sort']((_0x536470,_0x4a4a46)=>_0x536470['modelOrder']-_0x4a4a46[_0x56fb8b(0x1b1)]),_0x31e8c6[_0x15383d]=Array[_0x56fb8b(0x1fe)](_0x31e8c6[_0x15383d][_0x56fb8b(0x1b7)](_0x2b0c04=>{const _0x337aab=_0x56fb8b,{modelName:_0x2c0cee,keyType:_0x55261b,model:_0x2e4ea7,deduct:_0x43153c,deductType:_0x1a23cc,maxRounds:_0x6359e1,modelAvatar:_0x435208,isFileUpload:_0x5f6932,modelDescription:_0xbad898}=_0x2b0c04;return{'modelName':_0x2c0cee,'keyType':_0x55261b,'model':_0x2e4ea7,'deduct':_0x43153c,'deductType':_0x1a23cc,'maxRounds':_0x6359e1,'modelAvatar':_0x435208,'isFileUpload':_0x5f6932,'modelDescription':_0xbad898,'isTokenBased':_0x2b0c04[_0x337aab(0x1c8)],'maxModelTokens':_0x2b0c04['maxModelTokens'],'modelLimits':_0x2b0c04['modelLimits']};})[_0x56fb8b(0x1c7)]((_0x413c6d,_0x2d5bb4)=>_0x413c6d['set'](_0x2d5bb4[_0x56fb8b(0x1e2)],_0x2d5bb4),new Map())[_0x56fb8b(0x1c6)]());}),{'modelTypeList':this[_0x38f9ba(0x1d5)],'modelMaps':_0x31e8c6};}async[_0x183d6c(0x1b6)](){const _0x55aa02=_0x183d6c,_0x2d03fb=await this[_0x55aa02(0x1cb)][_0x55aa02(0x1c9)]({'where':{'model':_0x55aa02(0x1f6)}});return _0x2d03fb?{'modelName':_0x2d03fb['modelName'],'model':_0x2d03fb[_0x55aa02(0x20b)],'deduct':_0x2d03fb[_0x55aa02(0x1fa)],'deductType':_0x2d03fb[_0x55aa02(0x1ec)]}:null;}async[_0x183d6c(0x1c0)](_0x3ecd99,_0x9c2856){const _0x59736a=_0x183d6c;await this[_0x59736a(0x1cb)][_0x59736a(0x20c)]()[_0x59736a(0x1f5)](models_entity_1[_0x59736a(0x1dc)])[_0x59736a(0x1d8)]({'useCount':()=>_0x59736a(0x1fb),'useToken':()=>_0x59736a(0x1b5)+_0x9c2856})[_0x59736a(0x1b9)]('id\x20=\x20:id',{'id':_0x3ecd99})[_0x59736a(0x1f9)]();}async[_0x183d6c(0x1b3)](){const _0x317201=_0x183d6c;return await this[_0x317201(0x1cb)][_0x317201(0x1c1)]();}async['queryModelType'](_0x5bbc58){return 0x1;}async[_0x183d6c(0x1e0)](_0x20d4f9){return 0x1;}async[_0x183d6c(0x20a)](_0xedac9d){return 0x1;}async[_0x183d6c(0x207)](_0x4a4306){const _0x5a2cf0=_0x183d6c,_0x5b4d3e=await this[_0x5a2cf0(0x1cb)]['findOne']({'where':{'model':_0x4a4306,'status':!![],'keyStatus':0x1}});return _0x5b4d3e;}};ModelsService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x183d6c(0x1ba)])(models_entity_1[_0x183d6c(0x1dc)])),__metadata(_0x183d6c(0x1b4),[typeorm_2['Repository']])],ModelsService),exports['ModelsService']=ModelsService;