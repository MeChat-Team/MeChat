'use strict';var _0x563891=_0x3c37;(function(_0x1eba4d,_0x5b2d01){var _0x47a254=_0x3c37,_0x103680=_0x1eba4d();while(!![]){try{var _0x43dd68=parseInt(_0x47a254(0xe3))/0x1*(parseInt(_0x47a254(0xca))/0x2)+-parseInt(_0x47a254(0xe1))/0x3*(parseInt(_0x47a254(0xe2))/0x4)+parseInt(_0x47a254(0xce))/0x5*(-parseInt(_0x47a254(0xc0))/0x6)+parseInt(_0x47a254(0xd8))/0x7*(-parseInt(_0x47a254(0xde))/0x8)+parseInt(_0x47a254(0xcb))/0x9+-parseInt(_0x47a254(0xcf))/0xa*(-parseInt(_0x47a254(0xe8))/0xb)+-parseInt(_0x47a254(0xc2))/0xc*(parseInt(_0x47a254(0xdd))/0xd);if(_0x43dd68===_0x5b2d01)break;else _0x103680['push'](_0x103680['shift']());}catch(_0x20ded1){_0x103680['push'](_0x103680['shift']());}}}(_0x5eb9,0x2e86a));var __decorate=this&&this['__decorate']||function(_0x3bf56a,_0x57c1ef,_0x612c26,_0x319293){var _0x40203c=_0x3c37,_0x4e7ff7=arguments['length'],_0x7dac93=_0x4e7ff7<0x3?_0x57c1ef:_0x319293===null?_0x319293=Object[_0x40203c(0xd3)](_0x57c1ef,_0x612c26):_0x319293,_0x98a231;if(typeof Reflect===_0x40203c(0xdb)&&typeof Reflect[_0x40203c(0xe7)]===_0x40203c(0xcd))_0x7dac93=Reflect['decorate'](_0x3bf56a,_0x57c1ef,_0x612c26,_0x319293);else{for(var _0x32b3c6=_0x3bf56a[_0x40203c(0xd7)]-0x1;_0x32b3c6>=0x0;_0x32b3c6--)if(_0x98a231=_0x3bf56a[_0x32b3c6])_0x7dac93=(_0x4e7ff7<0x3?_0x98a231(_0x7dac93):_0x4e7ff7>0x3?_0x98a231(_0x57c1ef,_0x612c26,_0x7dac93):_0x98a231(_0x57c1ef,_0x612c26))||_0x7dac93;}return _0x4e7ff7>0x3&&_0x7dac93&&Object[_0x40203c(0xd4)](_0x57c1ef,_0x612c26,_0x7dac93),_0x7dac93;},__metadata=this&&this[_0x563891(0xdc)]||function(_0xd87927,_0x39f24a){var _0x5b4269=_0x563891;if(typeof Reflect===_0x5b4269(0xdb)&&typeof Reflect[_0x5b4269(0xc5)]==='function')return Reflect[_0x5b4269(0xc5)](_0xd87927,_0x39f24a);};Object[_0x563891(0xd4)](exports,'__esModule',{'value':!![]}),exports[_0x563891(0xdf)]=void 0x0;function _0x5eb9(){var _0x4edb49=['订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）','paydAt','支付时间','506622Cyadyj','BaseEntity','1308tPoGQm','支付平台【epay|hupi|ltzf】）','套餐价格￥','metadata','decimal','goodsId','datetime','用户ID','493678icRQuU','2670192kBujsK','prototype','function','15ytJMqc','10tcelJa','Entity','交易ID（服务商）','typeorm','getOwnPropertyDescriptor','defineProperty','Column','支付渠道）','length','56UEgvaq','tradeId','status','object','__metadata','17797CbrqDP','265288XENjfq','OrderEntity','price','164391rAuvhp','4RHETjK','1ngVzZz','订单ID','design:type','商品ID','decorate','4066260LDeKjS'];_0x5eb9=function(){return _0x4edb49;};return _0x5eb9();}function _0x3c37(_0x2d0595,_0x585f65){var _0x5eb993=_0x5eb9();return _0x3c37=function(_0x3c378d,_0x3ffbf6){_0x3c378d=_0x3c378d-0xbe;var _0x25f203=_0x5eb993[_0x3c378d];return _0x25f203;},_0x3c37(_0x2d0595,_0x585f65);}const typeorm_1=require(_0x563891(0xd2)),baseEntity_1=require('../../common/entity/baseEntity');let OrderEntity=class OrderEntity extends baseEntity_1[_0x563891(0xc1)]{};__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'unique':!![],'comment':_0x563891(0xe4),'length':0x40}),__metadata('design:type',String)],OrderEntity['prototype'],'orderId',void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'unique':!![],'comment':_0x563891(0xd1),'length':0x20,'nullable':!![]}),__metadata(_0x563891(0xe5),String)],OrderEntity['prototype'],_0x563891(0xd9),void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':_0x563891(0xc3),'length':0x20,'nullable':!![]}),__metadata(_0x563891(0xe5),String)],OrderEntity[_0x563891(0xcc)],'payPlatform',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x563891(0xc9),'nullable':!![]}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':_0x563891(0xe6),'nullable':!![]}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],_0x563891(0xc7),void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':'数量','default':0x1}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],'count',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x563891(0xc4),'type':_0x563891(0xc6),'scale':0x2,'precision':0xa}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],_0x563891(0xe0),void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':'订单总金额','type':_0x563891(0xc6),'scale':0x2,'precision':0xa}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],'total',void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':_0x563891(0xe9),'default':0x0}),__metadata(_0x563891(0xe5),Number)],OrderEntity[_0x563891(0xcc)],_0x563891(0xda),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'type':_0x563891(0xc8),'length':0x0,'nullable':!![],'comment':_0x563891(0xbf)}),__metadata(_0x563891(0xe5),Date)],OrderEntity[_0x563891(0xcc)],_0x563891(0xbe),void 0x0),__decorate([(0x0,typeorm_1[_0x563891(0xd5)])({'comment':_0x563891(0xd6),'length':0x20,'nullable':!![]}),__metadata(_0x563891(0xe5),String)],OrderEntity[_0x563891(0xcc)],'channel',void 0x0),OrderEntity=__decorate([(0x0,typeorm_1[_0x563891(0xd0)])({'name':'order'})],OrderEntity),exports[_0x563891(0xdf)]=OrderEntity;