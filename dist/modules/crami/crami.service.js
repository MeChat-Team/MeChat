'use strict';const _0x3cd839=_0x358b;(function(_0x49ab8d,_0x1ceda7){const _0x2191e5=_0x358b,_0x1206b0=_0x49ab8d();while(!![]){try{const _0x2f7012=parseInt(_0x2191e5(0xe0))/0x1+parseInt(_0x2191e5(0xbb))/0x2*(parseInt(_0x2191e5(0x9b))/0x3)+parseInt(_0x2191e5(0xed))/0x4+parseInt(_0x2191e5(0xca))/0x5*(parseInt(_0x2191e5(0xdf))/0x6)+-parseInt(_0x2191e5(0xbd))/0x7+parseInt(_0x2191e5(0xd9))/0x8+-parseInt(_0x2191e5(0xdc))/0x9;if(_0x2f7012===_0x1ceda7)break;else _0x1206b0['push'](_0x1206b0['shift']());}catch(_0x158ee4){_0x1206b0['push'](_0x1206b0['shift']());}}}(_0x203d,0x19607));var __decorate=this&&this[_0x3cd839(0xbe)]||function(_0x196b31,_0x2233e7,_0x105003,_0x656af8){const _0x4a84b1=_0x3cd839;var _0x17d8df=arguments[_0x4a84b1(0xd4)],_0x2ba6d1=_0x17d8df<0x3?_0x2233e7:_0x656af8===null?_0x656af8=Object[_0x4a84b1(0x9d)](_0x2233e7,_0x105003):_0x656af8,_0x1c4d93;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x4a84b1(0xc5))_0x2ba6d1=Reflect[_0x4a84b1(0x9c)](_0x196b31,_0x2233e7,_0x105003,_0x656af8);else{for(var _0x4d7af5=_0x196b31[_0x4a84b1(0xd4)]-0x1;_0x4d7af5>=0x0;_0x4d7af5--)if(_0x1c4d93=_0x196b31[_0x4d7af5])_0x2ba6d1=(_0x17d8df<0x3?_0x1c4d93(_0x2ba6d1):_0x17d8df>0x3?_0x1c4d93(_0x2233e7,_0x105003,_0x2ba6d1):_0x1c4d93(_0x2233e7,_0x105003))||_0x2ba6d1;}return _0x17d8df>0x3&&_0x2ba6d1&&Object[_0x4a84b1(0xb2)](_0x2233e7,_0x105003,_0x2ba6d1),_0x2ba6d1;},__metadata=this&&this[_0x3cd839(0xe1)]||function(_0xa3f120,_0x13d73e){const _0x2ac2ce=_0x3cd839;if(typeof Reflect===_0x2ac2ce(0xe3)&&typeof Reflect[_0x2ac2ce(0xe4)]===_0x2ac2ce(0xc5))return Reflect[_0x2ac2ce(0xe4)](_0xa3f120,_0x13d73e);},__param=this&&this[_0x3cd839(0xa2)]||function(_0x4becb4,_0xfc9262){return function(_0x38bb1e,_0x2c6a3e){_0xfc9262(_0x38bb1e,_0x2c6a3e,_0x4becb4);};};Object[_0x3cd839(0xb2)](exports,_0x3cd839(0xa7),{'value':!![]}),exports[_0x3cd839(0xbc)]=void 0x0;const common_1=require(_0x3cd839(0xdd)),crami_entity_1=require(_0x3cd839(0xc9)),typeorm_1=require(_0x3cd839(0xd1)),typeorm_2=require(_0x3cd839(0xc2)),cramiPackage_entity_1=require(_0x3cd839(0xa9)),utils_1=require(_0x3cd839(0x9e)),user_entity_1=require(_0x3cd839(0xe5)),userBalance_service_1=require(_0x3cd839(0xea)),balance_constant_1=require(_0x3cd839(0xab));function _0x203d(){const _0xdcd774=['828513hXBxhC','@nestjs/common','user','21732abvpJs','110872lpRCic','__metadata','forEach','object','metadata','../user/user.entity','CramiEntity','packageId','affected','BAD_REQUEST','../userBalance/userBalance.service','Not','cramiEntity','574892hdUkUn','role','当前套餐下存在卡密、请先删除卡密后才可删除套餐！','generateCrami','queryOnePackage','HttpException','code','email','packageName','Injectable','自定义卡密必须至少一项余额不为0️零！','delete','当前卡密已被使用、请确认您输入的卡密是否正确！','updatePackage','createCrami','RechargeType','super','3852qJTLfF','decorate','getOwnPropertyDescriptor','../../common/utils','LessThanOrEqual','map','username','__param','queryAllCrami','Repository','push','cramiPackageEntity','__esModule','DESC','./cramiPackage.entity','删除卡密成功！','../../common/constants/balance.constant','userEntity','findOne','error:\x20','UserBalanceService','create','addBalanceToUser','defineProperty','HttpStatus','createPackage','userBalanceService','assign','CramiPackageEntity','当前卡密已被使用、已使用的卡密禁止删除！','queryAllPackage','更新套餐成功！','60NcDeEM','CramiService','1337315FbbWll','__decorate','MoreThan','删除卡密失败、请重试！','every','typeorm','save','useId','function','InjectRepository','maskCrami','saveRecordRechargeLog','./crami.entity','15Lcmuvu','log','使用卡密成功','count','design:paramtypes','delPackage','套餐名称或套餐等级重复、请检查！','@nestjs/typeorm','delCrami','当前卡密不存在、请确认您要删除的卡密是否存在！','length','update','当前卡密不存在、请确认您输入的卡密是否正确！','UserEntity','generateCramiCode','664512LiQZjG','Like','find'];_0x203d=function(){return _0xdcd774;};return _0x203d();}let CramiService=class CramiService{constructor(_0xd338e6,_0x551448,_0x396c2a,_0x4a01dc){const _0x4be638=_0x3cd839;this['cramiEntity']=_0xd338e6,this[_0x4be638(0xa6)]=_0x551448,this[_0x4be638(0xac)]=_0x396c2a,this['userBalanceService']=_0x4a01dc;}async[_0x3cd839(0xf1)](_0xbf995b){const _0x15ffdf=_0x3cd839;return await this['cramiPackageEntity'][_0x15ffdf(0xad)]({'where':{'id':_0xbf995b}});}async[_0x3cd839(0xb9)](_0x2b6bbc){const _0x4c39d1=_0x3cd839;try{const {page:page=0x1,size:size=0xa,name:_0xb9d6f,status:_0x3d0dbb,type:_0x157c8b}=_0x2b6bbc,_0x78bdfc={};_0xb9d6f&&Object[_0x4c39d1(0xb6)](_0x78bdfc,{'name':(0x0,typeorm_2[_0x4c39d1(0xda)])('%'+_0xb9d6f+'%')}),_0x3d0dbb&&Object[_0x4c39d1(0xb6)](_0x78bdfc,{'status':_0x3d0dbb});_0x157c8b&&(_0x157c8b>0x0?Object[_0x4c39d1(0xb6)](_0x78bdfc,{'days':(0x0,typeorm_2[_0x4c39d1(0xbf)])(0x0)}):Object[_0x4c39d1(0xb6)](_0x78bdfc,{'days':(0x0,typeorm_2[_0x4c39d1(0x9f)])(0x0)}));const [_0x49071f,_0xf8eb93]=await this[_0x4c39d1(0xa6)]['findAndCount']({'skip':(page-0x1)*size,'take':size,'where':_0x78bdfc,'order':{'order':_0x4c39d1(0xa8)}});return{'rows':_0x49071f,'count':_0xf8eb93};}catch(_0x405ddf){console['log'](_0x4c39d1(0xae),_0x405ddf);}}async[_0x3cd839(0xb4)](_0x5cb5e7){const _0x4c24b7=_0x3cd839,{name:_0x4a125b,weight:_0x1d2b13}=_0x5cb5e7,_0x2dfae4=await this['cramiPackageEntity'][_0x4c24b7(0xad)]({'where':[{'name':_0x4a125b},{'weight':_0x1d2b13}]});if(_0x2dfae4)throw new common_1[(_0x4c24b7(0xf2))](_0x4c24b7(0xd0),common_1['HttpStatus']['BAD_REQUEST']);try{return await this[_0x4c24b7(0xa6)][_0x4c24b7(0xc3)](_0x5cb5e7);}catch(_0x99e5cf){console[_0x4c24b7(0xcb)](_0x4c24b7(0xae),_0x99e5cf);throw new common_1['HttpException'](_0x99e5cf,common_1[_0x4c24b7(0xb3)][_0x4c24b7(0xe9)]);}}async[_0x3cd839(0xfa)](_0x18bb2f){const _0x5b22b5=_0x3cd839,{id:_0x15f9bb,name:_0x2530c2,weight:_0x2d8e0d}=_0x18bb2f,_0x465f2c=await this[_0x5b22b5(0xa6)][_0x5b22b5(0xad)]({'where':{'id':_0x15f9bb}});if(!_0x465f2c)throw new common_1['HttpException']('当前套餐不存在、请检查你的输入参数！',common_1[_0x5b22b5(0xb3)][_0x5b22b5(0xe9)]);const _0x4e0a9a=await this[_0x5b22b5(0xa6)]['count']({'where':[{'name':_0x2530c2,'id':(0x0,typeorm_2[_0x5b22b5(0xeb)])(_0x15f9bb)},{'weight':_0x2d8e0d,'id':(0x0,typeorm_2[_0x5b22b5(0xeb)])(_0x15f9bb)}]});if(_0x4e0a9a)throw new common_1[(_0x5b22b5(0xf2))](_0x5b22b5(0xd0),common_1[_0x5b22b5(0xb3)]['BAD_REQUEST']);const _0x2bedc9=await this[_0x5b22b5(0xa6)][_0x5b22b5(0xd5)]({'id':_0x15f9bb},_0x18bb2f);if(_0x2bedc9['affected']>0x0)return _0x5b22b5(0xba);else throw new common_1[(_0x5b22b5(0xf2))]('更新套餐失败、请重试！',common_1['HttpStatus'][_0x5b22b5(0xe9)]);}async[_0x3cd839(0xcf)](_0x4f1d1c){const _0x458367=_0x3cd839,{id:_0x8e6e1d}=_0x4f1d1c,_0x1806b1=await this[_0x458367(0xec)][_0x458367(0xcd)]({'where':{'packageId':_0x8e6e1d}});if(_0x1806b1)throw new common_1[(_0x458367(0xf2))](_0x458367(0xef),common_1[_0x458367(0xb3)]['BAD_REQUEST']);return await this[_0x458367(0xa6)][_0x458367(0xf8)]({'id':_0x8e6e1d});}async[_0x3cd839(0xfb)](_0x400289){const _0x1cf53b=_0x3cd839,{packageId:_0x57d537,count:count=0x1}=_0x400289;if(_0x57d537){const _0x5cb50c=await this[_0x1cf53b(0xa6)]['findOne']({'where':{'id':_0x57d537}});if(!_0x5cb50c)throw new common_1['HttpException']('当前套餐不存在、请确认您选择的套餐是否存在！',common_1['HttpStatus'][_0x1cf53b(0xe9)]);const {days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x5cb50c,_0x2922d2={'packageId':_0x57d537,'days':days,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x1cf53b(0xf0)](_0x2922d2,count);}if(!_0x57d537){const {model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x400289;if([model3Count,model4Count,drawMjCount][_0x1cf53b(0xc1)](_0x15627a=>!_0x15627a))throw new common_1[(_0x1cf53b(0xf2))](_0x1cf53b(0xf7),common_1['HttpStatus'][_0x1cf53b(0xe9)]);const _0x6dbded={'days':-0x1,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x1cf53b(0xf0)](_0x6dbded,count);}}async[_0x3cd839(0xf0)](_0xf9210f,_0xa10fd9){const _0x1ab3d3=_0x3cd839,_0x107602=[];for(let _0x419af4=0x0;_0x419af4<_0xa10fd9;_0x419af4++){const _0x227913=(0x0,utils_1[_0x1ab3d3(0xd8)])(),_0x5ef24e=this[_0x1ab3d3(0xec)][_0x1ab3d3(0xb0)](Object['assign'](Object[_0x1ab3d3(0xb6)]({},_0xf9210f),{'code':_0x227913}));_0x107602[_0x1ab3d3(0xa5)](_0x5ef24e);}return await this['cramiEntity'][_0x1ab3d3(0xc3)](_0x107602);}async['useCrami'](_0x340f3c,_0xbdc7de){const _0x3acafc=_0x3cd839,{id:_0x32e9ff}=_0x340f3c['user'],_0x586de5=await this[_0x3acafc(0xec)][_0x3acafc(0xad)]({'where':{'code':_0xbdc7de[_0x3acafc(0xf3)]}});if(!_0x586de5)throw new common_1['HttpException'](_0x3acafc(0xd6),common_1[_0x3acafc(0xb3)]['BAD_REQUEST']);const {status:_0x1491d9,days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0,packageId:_0x2ba5e9}=_0x586de5;if(_0x1491d9===0x1)throw new common_1[(_0x3acafc(0xf2))](_0x3acafc(0xf9),common_1['HttpStatus']['BAD_REQUEST']);const _0x14dc67={'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'packageId':_0x2ba5e9};return await this[_0x3acafc(0xb5)][_0x3acafc(0xb1)](_0x32e9ff,Object[_0x3acafc(0xb6)]({},_0x14dc67),days),await this[_0x3acafc(0xb5)][_0x3acafc(0xc8)]({'userId':_0x32e9ff,'rechargeType':balance_constant_1[_0x3acafc(0xfc)]['PACKAGE_GIFT'],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'days':days}),await this['cramiEntity'][_0x3acafc(0xd5)]({'code':_0xbdc7de[_0x3acafc(0xf3)]},{'useId':_0x32e9ff,'status':0x1}),_0x3acafc(0xcc);}async[_0x3cd839(0xa3)](_0x207fec,_0x4005ae){const _0x11eac9=_0x3cd839,{page:page=0x1,size:size=0xa,status:_0x42de34,useId:_0x5e358b}=_0x207fec,_0x32ddb0={};_0x42de34&&Object[_0x11eac9(0xb6)](_0x32ddb0,{'status':_0x42de34}),_0x5e358b&&Object['assign'](_0x32ddb0,{'useId':_0x5e358b});const [_0x43d44d,_0x4aaca3]=await this[_0x11eac9(0xec)]['findAndCount']({'skip':(page-0x1)*size,'take':size,'order':{'createdAt':_0x11eac9(0xa8)},'where':_0x32ddb0}),_0x389a62=_0x43d44d['map'](_0x3b8a0a=>_0x3b8a0a[_0x11eac9(0xc4)]),_0x2c2673=_0x43d44d[_0x11eac9(0xa0)](_0x574297=>_0x574297['packageId']),_0x23e635=await this[_0x11eac9(0xac)][_0x11eac9(0xdb)]({'where':{'id':(0x0,typeorm_2['In'])(_0x389a62)}}),_0x11f5cc=await this[_0x11eac9(0xa6)][_0x11eac9(0xdb)]({'where':{'id':(0x0,typeorm_2['In'])(_0x2c2673)}});return _0x43d44d['forEach'](_0x53c7d5=>{const _0x62d5b2=_0x11eac9;var _0x146fd5,_0x2844bb,_0x72f4ba;_0x53c7d5[_0x62d5b2(0xa1)]=(_0x146fd5=_0x23e635[_0x62d5b2(0xdb)](_0x4cb8e4=>_0x4cb8e4['id']===_0x53c7d5[_0x62d5b2(0xc4)]))===null||_0x146fd5===void 0x0?void 0x0:_0x146fd5['username'],_0x53c7d5[_0x62d5b2(0xf4)]=(_0x2844bb=_0x23e635[_0x62d5b2(0xdb)](_0x32dbce=>_0x32dbce['id']===_0x53c7d5['useId']))===null||_0x2844bb===void 0x0?void 0x0:_0x2844bb[_0x62d5b2(0xf4)],_0x53c7d5[_0x62d5b2(0xf5)]=(_0x72f4ba=_0x11f5cc[_0x62d5b2(0xdb)](_0x254fb6=>_0x254fb6['id']===_0x53c7d5[_0x62d5b2(0xe7)]))===null||_0x72f4ba===void 0x0?void 0x0:_0x72f4ba['name'];}),_0x4005ae[_0x11eac9(0xde)]['role']!==_0x11eac9(0xfd)&&_0x43d44d[_0x11eac9(0xe2)](_0x3603b9=>_0x3603b9['email']=(0x0,utils_1['maskEmail'])(_0x3603b9[_0x11eac9(0xf4)])),_0x4005ae[_0x11eac9(0xde)][_0x11eac9(0xee)]!==_0x11eac9(0xfd)&&_0x43d44d['forEach'](_0x351409=>_0x351409['code']=(0x0,utils_1[_0x11eac9(0xc7)])(_0x351409[_0x11eac9(0xf3)])),{'rows':_0x43d44d,'count':_0x4aaca3};}async[_0x3cd839(0xd2)](_0x1e1393){const _0x460704=_0x3cd839,_0x20578b=await this[_0x460704(0xec)][_0x460704(0xad)]({'where':{'id':_0x1e1393}});if(!_0x20578b)throw new common_1[(_0x460704(0xf2))](_0x460704(0xd3),common_1['HttpStatus'][_0x460704(0xe9)]);if(_0x20578b['status']===0x1)throw new common_1['HttpException'](_0x460704(0xb8),common_1[_0x460704(0xb3)][_0x460704(0xe9)]);return await this[_0x460704(0xec)][_0x460704(0xf8)]({'id':_0x1e1393});}async['batchDelCrami'](_0x3525f7){const _0x53dc43=_0x3cd839,{ids:_0xd184dc}=_0x3525f7,_0x16d207=await this['cramiEntity'][_0x53dc43(0xf8)](_0xd184dc);if(_0x16d207[_0x53dc43(0xe8)]>0x0)return _0x53dc43(0xaa);else throw new common_1[(_0x53dc43(0xf2))](_0x53dc43(0xc0),common_1[_0x53dc43(0xb3)][_0x53dc43(0xe9)]);}};function _0x358b(_0x3eafed,_0x33d8ee){const _0x203d0e=_0x203d();return _0x358b=function(_0x358bf2,_0x2d4bc4){_0x358bf2=_0x358bf2-0x9b;let _0x295810=_0x203d0e[_0x358bf2];return _0x295810;},_0x358b(_0x3eafed,_0x33d8ee);}CramiService=__decorate([(0x0,common_1[_0x3cd839(0xf6)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(crami_entity_1[_0x3cd839(0xe6)])),__param(0x1,(0x0,typeorm_1[_0x3cd839(0xc6)])(cramiPackage_entity_1[_0x3cd839(0xb7)])),__param(0x2,(0x0,typeorm_1['InjectRepository'])(user_entity_1[_0x3cd839(0xd7)])),__metadata(_0x3cd839(0xce),[typeorm_2[_0x3cd839(0xa4)],typeorm_2[_0x3cd839(0xa4)],typeorm_2[_0x3cd839(0xa4)],userBalance_service_1[_0x3cd839(0xaf)]])],CramiService),exports[_0x3cd839(0xbc)]=CramiService;