'use strict';var _0x589add=_0x5930;(function(_0x1c39d0,_0x3120b0){var _0x5b96f5=_0x5930,_0xc026be=_0x1c39d0();while(!![]){try{var _0x43025a=parseInt(_0x5b96f5(0xca))/0x1+parseInt(_0x5b96f5(0xd3))/0x2*(parseInt(_0x5b96f5(0xd2))/0x3)+-parseInt(_0x5b96f5(0xd5))/0x4*(-parseInt(_0x5b96f5(0xe2))/0x5)+-parseInt(_0x5b96f5(0xdd))/0x6+-parseInt(_0x5b96f5(0xe0))/0x7*(-parseInt(_0x5b96f5(0xe1))/0x8)+parseInt(_0x5b96f5(0xcf))/0x9*(parseInt(_0x5b96f5(0xdf))/0xa)+-parseInt(_0x5b96f5(0xc5))/0xb;if(_0x43025a===_0x3120b0)break;else _0xc026be['push'](_0xc026be['shift']());}catch(_0x254feb){_0xc026be['push'](_0xc026be['shift']());}}}(_0x50b7,0x6249f));var __decorate=this&&this[_0x589add(0xc4)]||function(_0x490a64,_0x5ede06,_0x19b4c5,_0x35084b){var _0x50afc7=_0x589add,_0x1ec0c3=arguments[_0x50afc7(0xc8)],_0x1a1159=_0x1ec0c3<0x3?_0x5ede06:_0x35084b===null?_0x35084b=Object[_0x50afc7(0xe8)](_0x5ede06,_0x19b4c5):_0x35084b,_0x5668ed;if(typeof Reflect===_0x50afc7(0xd8)&&typeof Reflect[_0x50afc7(0xd6)]===_0x50afc7(0xe7))_0x1a1159=Reflect[_0x50afc7(0xd6)](_0x490a64,_0x5ede06,_0x19b4c5,_0x35084b);else{for(var _0x1edc70=_0x490a64[_0x50afc7(0xc8)]-0x1;_0x1edc70>=0x0;_0x1edc70--)if(_0x5668ed=_0x490a64[_0x1edc70])_0x1a1159=(_0x1ec0c3<0x3?_0x5668ed(_0x1a1159):_0x1ec0c3>0x3?_0x5668ed(_0x5ede06,_0x19b4c5,_0x1a1159):_0x5668ed(_0x5ede06,_0x19b4c5))||_0x1a1159;}return _0x1ec0c3>0x3&&_0x1a1159&&Object[_0x50afc7(0xc6)](_0x5ede06,_0x19b4c5,_0x1a1159),_0x1a1159;},__metadata=this&&this[_0x589add(0xc3)]||function(_0x195aa5,_0x42f425){var _0x57dacc=_0x589add;if(typeof Reflect===_0x57dacc(0xd8)&&typeof Reflect['metadata']===_0x57dacc(0xe7))return Reflect[_0x57dacc(0xc1)](_0x195aa5,_0x42f425);};Object[_0x589add(0xc6)](exports,'__esModule',{'value':!![]}),exports[_0x589add(0xda)]=void 0x0;const typeorm_1=require(_0x589add(0xc2)),baseEntity_1=require('../../common/entity/baseEntity');let OrderEntity=class OrderEntity extends baseEntity_1[_0x589add(0xdb)]{};function _0x5930(_0x29a843,_0x2558f5){var _0x50b77f=_0x50b7();return _0x5930=function(_0x593084,_0xb20a){_0x593084=_0x593084-0xbe;var _0x345dde=_0x50b77f[_0x593084];return _0x345dde;},_0x5930(_0x29a843,_0x2558f5);}function _0x50b7(){var _0x238a98=['BaseEntity','design:type','3958380jlpRcM','decimal','872490UwIlmr','7PbeeMs','334200XBVpYr','271020bDPWQC','支付时间','商品ID','orderId','order','function','getOwnPropertyDescriptor','total','支付渠道）','订单总金额','metadata','typeorm','__metadata','__decorate','9656207XsrsZX','defineProperty','Column','length','datetime','682983tltoja','订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）','price','prototype','订单ID','63nakjkg','paydAt','status','537EGrfMU','94vkiKEr','套餐价格￥','44RixNNH','decorate','userId','object','payPlatform','OrderEntity'];_0x50b7=function(){return _0x238a98;};return _0x50b7();}__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'unique':!![],'comment':_0x589add(0xce),'length':0x40}),__metadata('design:type',String)],OrderEntity[_0x589add(0xcd)],_0x589add(0xe5),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'unique':!![],'comment':'交易ID（服务商）','length':0x20,'nullable':!![]}),__metadata(_0x589add(0xdc),String)],OrderEntity[_0x589add(0xcd)],'tradeId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'支付平台【epay|hupi|ltzf】）','length':0x20,'nullable':!![]}),__metadata(_0x589add(0xdc),String)],OrderEntity['prototype'],_0x589add(0xd9),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':'用户ID','nullable':!![]}),__metadata(_0x589add(0xdc),Number)],OrderEntity[_0x589add(0xcd)],_0x589add(0xd7),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':_0x589add(0xe4),'nullable':!![]}),__metadata(_0x589add(0xdc),Number)],OrderEntity[_0x589add(0xcd)],'goodsId',void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':'数量','default':0x1}),__metadata(_0x589add(0xdc),Number)],OrderEntity[_0x589add(0xcd)],'count',void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':_0x589add(0xd4),'type':_0x589add(0xde),'scale':0x2,'precision':0xa}),__metadata(_0x589add(0xdc),Number)],OrderEntity[_0x589add(0xcd)],_0x589add(0xcc),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':_0x589add(0xc0),'type':_0x589add(0xde),'scale':0x2,'precision':0xa}),__metadata(_0x589add(0xdc),Number)],OrderEntity['prototype'],_0x589add(0xbe),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':_0x589add(0xcb),'default':0x0}),__metadata(_0x589add(0xdc),Number)],OrderEntity[_0x589add(0xcd)],_0x589add(0xd1),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'type':_0x589add(0xc9),'length':0x0,'nullable':!![],'comment':_0x589add(0xe3)}),__metadata(_0x589add(0xdc),Date)],OrderEntity[_0x589add(0xcd)],_0x589add(0xd0),void 0x0),__decorate([(0x0,typeorm_1[_0x589add(0xc7)])({'comment':_0x589add(0xbf),'length':0x20,'nullable':!![]}),__metadata(_0x589add(0xdc),String)],OrderEntity[_0x589add(0xcd)],'channel',void 0x0),OrderEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':_0x589add(0xe6)})],OrderEntity),exports['OrderEntity']=OrderEntity;