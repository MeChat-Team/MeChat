'use strict';const _0xa263da=_0x232d;(function(_0x35bf6b,_0x17d5b5){const _0xdfbd3b=_0x232d,_0x55439e=_0x35bf6b();while(!![]){try{const _0x4211f0=-parseInt(_0xdfbd3b(0x10d))/0x1*(parseInt(_0xdfbd3b(0x102))/0x2)+parseInt(_0xdfbd3b(0x142))/0x3+parseInt(_0xdfbd3b(0xfa))/0x4*(parseInt(_0xdfbd3b(0x116))/0x5)+parseInt(_0xdfbd3b(0x120))/0x6*(-parseInt(_0xdfbd3b(0x130))/0x7)+parseInt(_0xdfbd3b(0x12e))/0x8*(-parseInt(_0xdfbd3b(0x11c))/0x9)+parseInt(_0xdfbd3b(0x101))/0xa*(-parseInt(_0xdfbd3b(0x133))/0xb)+parseInt(_0xdfbd3b(0x138))/0xc*(parseInt(_0xdfbd3b(0x13a))/0xd);if(_0x4211f0===_0x17d5b5)break;else _0x55439e['push'](_0x55439e['shift']());}catch(_0x2d2f08){_0x55439e['push'](_0x55439e['shift']());}}}(_0xb954,0xf3aa3));var __decorate=this&&this['__decorate']||function(_0x2147fe,_0x22d211,_0x1cd1c6,_0x4efd26){const _0x25749d=_0x232d;var _0x1266dd=arguments[_0x25749d(0x104)],_0x1a2052=_0x1266dd<0x3?_0x22d211:_0x4efd26===null?_0x4efd26=Object[_0x25749d(0x149)](_0x22d211,_0x1cd1c6):_0x4efd26,_0x1f022b;if(typeof Reflect===_0x25749d(0x121)&&typeof Reflect[_0x25749d(0xff)]===_0x25749d(0x12d))_0x1a2052=Reflect[_0x25749d(0xff)](_0x2147fe,_0x22d211,_0x1cd1c6,_0x4efd26);else{for(var _0x415dca=_0x2147fe[_0x25749d(0x104)]-0x1;_0x415dca>=0x0;_0x415dca--)if(_0x1f022b=_0x2147fe[_0x415dca])_0x1a2052=(_0x1266dd<0x3?_0x1f022b(_0x1a2052):_0x1266dd>0x3?_0x1f022b(_0x22d211,_0x1cd1c6,_0x1a2052):_0x1f022b(_0x22d211,_0x1cd1c6))||_0x1a2052;}return _0x1266dd>0x3&&_0x1a2052&&Object[_0x25749d(0x103)](_0x22d211,_0x1cd1c6,_0x1a2052),_0x1a2052;},__metadata=this&&this[_0xa263da(0x11f)]||function(_0x3562b9,_0x20f72d){const _0x3dcab3=_0xa263da;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x3dcab3(0x12d))return Reflect[_0x3dcab3(0x113)](_0x3562b9,_0x20f72d);},__param=this&&this[_0xa263da(0x13c)]||function(_0xf54cfc,_0x487ad3){return function(_0x1ed284,_0x2d4c80){_0x487ad3(_0x1ed284,_0x2d4c80,_0xf54cfc);};};Object[_0xa263da(0x103)](exports,'__esModule',{'value':!![]}),exports[_0xa263da(0x147)]=void 0x0;function _0x232d(_0x19eadb,_0x54b599){const _0xb954f4=_0xb954();return _0x232d=function(_0x232dbb,_0x29588d){_0x232dbb=_0x232dbb-0xfa;let _0x29aee7=_0xb954f4[_0x232dbb];return _0x29aee7;},_0x232d(_0x19eadb,_0x54b599);}function _0xb954(){const _0x35e57c=['userEntity','../globalConfig/globalConfig.service','11359884VlKAzp','orderEntity','52vSmdUY','DESC','__param','请先注册账号后购买商品！','map','user','queryByOrderId','goodsInfo','3930741IaZfbN','userId','HttpStatus','forEach','payPlatform','OrderService','select','getOwnPropertyDescriptor','购买失败!','globalConfigService','@nestjs/common','create','6486836UoombH','orderId','total_price','BAD_REQUEST','message','decorate','../crami/cramiPackage.entity','190KHDqKq','2jPJwXQ','defineProperty','length','Injectable','goodsId','Repository','HttpException','des','order','userInfo','套餐不存在!','30391aYZkmJ','payService','save','OrderEntity','count','design:paramtypes','metadata','price','InjectRepository','5EmELwo','./order.entity','channel','log','订单不存在!','UNAUTHORIZED','18OcpRZo','cramiPackageEntity','createOrderId','__metadata','2382eUVUgB','object','coverImg','../pay/pay.service','findAndCount','order:\x20','username','UserEntity','find','PayService','findOne','assign','@nestjs/typeorm','function','7478872CxnqKt','name','34251TfFbZP','buy','delete','1087207VZhAyO','total','status'];_0xb954=function(){return _0x35e57c;};return _0xb954();}const user_entity_1=require('./../user/user.entity'),typeorm_1=require(_0xa263da(0x12c)),common_1=require(_0xa263da(0x14c)),typeorm_2=require('typeorm'),order_entity_1=require(_0xa263da(0x117)),cramiPackage_entity_1=require(_0xa263da(0x100)),utils_1=require('../../common/utils'),pay_service_1=require(_0xa263da(0x123)),globalConfig_service_1=require(_0xa263da(0x137));let OrderService=class OrderService{constructor(_0x4085dc,_0x27ad48,_0x274a14,_0x5eab3d,_0x553e8a){const _0xddb341=_0xa263da;this[_0xddb341(0x139)]=_0x4085dc,this['cramiPackageEntity']=_0x27ad48,this[_0xddb341(0x136)]=_0x274a14,this[_0xddb341(0x10e)]=_0x5eab3d,this[_0xddb341(0x14b)]=_0x553e8a;}async[_0xa263da(0x131)](_0xf17b58,_0x1ffa28){const _0xea562e=_0xa263da;try{const {goodsId:_0x36f5b8,count:count=0x1,payType:_0x3829bd}=_0xf17b58,{id:_0x5a5606}=_0x1ffa28[_0xea562e(0x13f)];if(_0x5a5606>0xf4240)throw new common_1[(_0xea562e(0x108))](_0xea562e(0x13d),common_1[_0xea562e(0x144)][_0xea562e(0x11b)]);const _0x21b915=await this[_0xea562e(0x14d)](_0x5a5606,_0x36f5b8,count,_0x3829bd),_0x58058c=await this[_0xea562e(0x10e)]['pay'](_0x5a5606,_0x21b915[_0xea562e(0xfb)],_0x3829bd);return Object[_0xea562e(0x12b)](Object[_0xea562e(0x12b)]({},_0x58058c),{'orderId':_0x21b915[_0xea562e(0xfb)],'platform':_0x21b915[_0xea562e(0x146)],'total':_0x21b915[_0xea562e(0x134)]});}catch(_0x1e7873){if(_0x1e7873[_0xea562e(0x135)]===0x191)throw new common_1[(_0xea562e(0x108))](_0x1e7873[_0xea562e(0xfe)],common_1[_0xea562e(0x144)][_0xea562e(0x11b)]);throw new common_1[(_0xea562e(0x108))](_0x1e7873[_0xea562e(0xfe)]||_0xea562e(0x14a),common_1[_0xea562e(0x144)][_0xea562e(0xfd)]);}}async[_0xa263da(0x140)](_0xb44852,_0x52f3cc){const _0x52e2cb=_0xa263da,{id:_0x5a90b9}=_0xb44852[_0x52e2cb(0x13f)],{orderId:_0x4d2323}=_0x52f3cc,_0x4ce911=await this[_0x52e2cb(0x139)][_0x52e2cb(0x12a)]({'where':{'userId':_0x5a90b9,'orderId':_0x4d2323}});if(!_0x4ce911)throw new common_1[(_0x52e2cb(0x108))](_0x52e2cb(0x11a),common_1[_0x52e2cb(0x144)][_0x52e2cb(0xfd)]);return _0x4ce911;}async[_0xa263da(0x14d)](_0x3cd914,_0x5b4e42,_0x5cc07b,_0x358077){const _0xbe0bc5=_0xa263da,_0x53a0de=await this[_0xbe0bc5(0x14b)]['queryPayType'](),_0x3fde37=await this[_0xbe0bc5(0x11d)][_0xbe0bc5(0x12a)]({'where':{'id':_0x5b4e42}});if(!_0x3fde37)throw new common_1[(_0xbe0bc5(0x108))](_0xbe0bc5(0x10c),common_1[_0xbe0bc5(0x144)][_0xbe0bc5(0xfd)]);const _0x36a674={};_0x36a674[_0xbe0bc5(0xfb)]=(0x0,utils_1[_0xbe0bc5(0x11e)])(),_0x36a674['userId']=_0x3cd914,_0x36a674[_0xbe0bc5(0x106)]=_0x5b4e42,_0x36a674[_0xbe0bc5(0x114)]=Number(_0x3fde37[_0xbe0bc5(0x114)]),_0x36a674[_0xbe0bc5(0x111)]=_0x5cc07b,_0x36a674['total']=Number(_0x3fde37['price'])*_0x5cc07b,_0x36a674['payPlatform']=_0x53a0de,_0x36a674[_0xbe0bc5(0x118)]=_0x358077;const _0x3b7b54=await this[_0xbe0bc5(0x139)][_0xbe0bc5(0x10f)](_0x36a674);return console[_0xbe0bc5(0x119)](_0xbe0bc5(0x125),_0x3b7b54),_0x3b7b54;}async['query'](_0x650d58,_0x4ee051,_0x14f0ed){const _0x316559=_0xa263da;return await this[_0x316559(0x139)]['findAndCount']({'where':{'userId':_0x650d58},'order':{'id':_0x316559(0x13b)},'skip':(_0x4ee051-0x1)*_0x14f0ed,'take':_0x14f0ed});}async['queryAllOrder'](_0xb1afaf){const _0xd1ac56=_0xa263da,{page:_0x5e97e0,size:_0xdbca8,userId:_0x4190d9,platform:_0x4b0e21,status:_0xf7348f}=_0xb1afaf,_0x383a23={};if(_0x4190d9)_0x383a23['userId']=_0x4190d9;if(_0x4b0e21)_0x383a23[_0xd1ac56(0x146)]=_0x4b0e21;if(_0xf7348f)_0x383a23[_0xd1ac56(0x135)]=_0xf7348f;const [_0x472336,_0x1fb5db]=await this['orderEntity'][_0xd1ac56(0x124)]({'order':{'id':_0xd1ac56(0x13b)},'where':_0x383a23,'skip':(_0x5e97e0-0x1)*_0xdbca8,'take':_0xdbca8}),_0x5e2415=_0x472336[_0xd1ac56(0x13e)](_0x2de7b8=>_0x2de7b8[_0xd1ac56(0x143)]),_0x5c5bf3=_0x472336['map'](_0x983011=>_0x983011['goodsId']),_0x101490=await this[_0xd1ac56(0x136)][_0xd1ac56(0x128)]({'where':{'id':(0x0,typeorm_2['In'])(_0x5e2415)},'select':['id',_0xd1ac56(0x126),'email']}),_0x420adb=await this[_0xd1ac56(0x11d)][_0xd1ac56(0x128)]({'where':{'id':(0x0,typeorm_2['In'])(_0x5c5bf3)},'select':['id',_0xd1ac56(0x12f),_0xd1ac56(0x122),_0xd1ac56(0x109)]});_0x472336[_0xd1ac56(0x145)](_0x1fc57a=>{const _0x5dfbee=_0xd1ac56;_0x1fc57a[_0x5dfbee(0x10b)]=_0x101490['find'](_0x525c4c=>_0x525c4c['id']===_0x1fc57a[_0x5dfbee(0x143)]),_0x1fc57a[_0x5dfbee(0x141)]=_0x420adb['find'](_0x489b68=>_0x489b68['id']===_0x1fc57a[_0x5dfbee(0x106)]);});const _0x586260=await this['orderEntity']['createQueryBuilder'](_0xd1ac56(0x10a))['where']('order.status\x20=\x20:status',{'status':0x1})[_0xd1ac56(0x148)]('SUM(order.price)',_0xd1ac56(0xfc))['getRawOne']();return Object[_0xd1ac56(0x12b)]({'rows':_0x472336,'count':_0x1fb5db},_0x586260);}async['deleteOrder'](_0x1718fe){const _0x35188c=_0xa263da,{orderId:_0x30360b}=_0x1718fe,_0xc454e8=await this[_0x35188c(0x139)][_0x35188c(0x12a)]({'where':{'orderId':_0x30360b}});if(!_0xc454e8)throw new common_1['HttpException'](_0x35188c(0x11a),common_1[_0x35188c(0x144)][_0x35188c(0xfd)]);return await this[_0x35188c(0x139)][_0x35188c(0x132)]({'orderId':_0x30360b});}async['deleteNotPay'](){const _0x5d0f6e=_0xa263da;return await this['orderEntity'][_0x5d0f6e(0x132)]({'status':0x0});}};OrderService=__decorate([(0x0,common_1[_0xa263da(0x105)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(order_entity_1[_0xa263da(0x110)])),__param(0x1,(0x0,typeorm_1[_0xa263da(0x115)])(cramiPackage_entity_1['CramiPackageEntity'])),__param(0x2,(0x0,typeorm_1[_0xa263da(0x115)])(user_entity_1[_0xa263da(0x127)])),__metadata(_0xa263da(0x112),[typeorm_2[_0xa263da(0x107)],typeorm_2[_0xa263da(0x107)],typeorm_2[_0xa263da(0x107)],pay_service_1[_0xa263da(0x129)],globalConfig_service_1['GlobalConfigService']])],OrderService),exports['OrderService']=OrderService;