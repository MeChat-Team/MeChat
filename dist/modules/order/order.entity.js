'use strict';var _0x1c2155=_0x2b3e;(function(_0x10134e,_0x254156){var _0x2349cf=_0x2b3e,_0x36b294=_0x10134e();while(!![]){try{var _0x530f12=parseInt(_0x2349cf(0x81))/0x1*(-parseInt(_0x2349cf(0x6b))/0x2)+parseInt(_0x2349cf(0x87))/0x3*(parseInt(_0x2349cf(0x73))/0x4)+-parseInt(_0x2349cf(0x8f))/0x5+parseInt(_0x2349cf(0x8a))/0x6*(-parseInt(_0x2349cf(0x7b))/0x7)+-parseInt(_0x2349cf(0x6d))/0x8*(parseInt(_0x2349cf(0x6e))/0x9)+parseInt(_0x2349cf(0x71))/0xa+parseInt(_0x2349cf(0x70))/0xb*(parseInt(_0x2349cf(0x7d))/0xc);if(_0x530f12===_0x254156)break;else _0x36b294['push'](_0x36b294['shift']());}catch(_0x8ba00f){_0x36b294['push'](_0x36b294['shift']());}}}(_0x4bb0,0x3e31c));function _0x4bb0(){var _0x2dd3c0=['goodsId','count','订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）','616007SvFWJk','object','4850160XtCRbV','__decorate','function','orderId','78659zlnDYK','订单ID','typeorm','decorate','商品ID','decimal','15501kyUFwy','prototype','metadata','30uPbBYN','defineProperty','__esModule','订单总金额','Entity','128660ZjpSaq','design:type','userId','支付平台【epay|hupi|ltzf】）','total','支付时间','12yxYlXM','payPlatform','20168xHaBfg','144TTbQxK','套餐价格￥','22ZayPey','2952400TzDSET','OrderEntity','100ytfepP','../../common/entity/baseEntity','__metadata','BaseEntity','Column'];_0x4bb0=function(){return _0x2dd3c0;};return _0x4bb0();}var __decorate=this&&this[_0x1c2155(0x7e)]||function(_0x1f0d04,_0x1aa26b,_0x4affd3,_0x39c5b3){var _0x27d542=_0x1c2155,_0x597b73=arguments['length'],_0x53e90f=_0x597b73<0x3?_0x1aa26b:_0x39c5b3===null?_0x39c5b3=Object['getOwnPropertyDescriptor'](_0x1aa26b,_0x4affd3):_0x39c5b3,_0x42b8f4;if(typeof Reflect===_0x27d542(0x7c)&&typeof Reflect[_0x27d542(0x84)]===_0x27d542(0x7f))_0x53e90f=Reflect['decorate'](_0x1f0d04,_0x1aa26b,_0x4affd3,_0x39c5b3);else{for(var _0xc26ef3=_0x1f0d04['length']-0x1;_0xc26ef3>=0x0;_0xc26ef3--)if(_0x42b8f4=_0x1f0d04[_0xc26ef3])_0x53e90f=(_0x597b73<0x3?_0x42b8f4(_0x53e90f):_0x597b73>0x3?_0x42b8f4(_0x1aa26b,_0x4affd3,_0x53e90f):_0x42b8f4(_0x1aa26b,_0x4affd3))||_0x53e90f;}return _0x597b73>0x3&&_0x53e90f&&Object[_0x27d542(0x8b)](_0x1aa26b,_0x4affd3,_0x53e90f),_0x53e90f;},__metadata=this&&this[_0x1c2155(0x75)]||function(_0x5563e8,_0x1cf807){var _0x37dee3=_0x1c2155;if(typeof Reflect===_0x37dee3(0x7c)&&typeof Reflect[_0x37dee3(0x89)]===_0x37dee3(0x7f))return Reflect['metadata'](_0x5563e8,_0x1cf807);};Object[_0x1c2155(0x8b)](exports,_0x1c2155(0x8c),{'value':!![]}),exports[_0x1c2155(0x72)]=void 0x0;const typeorm_1=require(_0x1c2155(0x83)),baseEntity_1=require(_0x1c2155(0x74));let OrderEntity=class OrderEntity extends baseEntity_1[_0x1c2155(0x76)]{};function _0x2b3e(_0x4b97b2,_0x3fe955){var _0x4bb033=_0x4bb0();return _0x2b3e=function(_0x2b3ee6,_0x56e75b){_0x2b3ee6=_0x2b3ee6-0x69;var _0x219a0d=_0x4bb033[_0x2b3ee6];return _0x219a0d;},_0x2b3e(_0x4b97b2,_0x3fe955);}__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'unique':!![],'comment':_0x1c2155(0x82),'length':0x40}),__metadata(_0x1c2155(0x90),String)],OrderEntity[_0x1c2155(0x88)],_0x1c2155(0x80),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'unique':!![],'comment':'交易ID（服务商）','length':0x20,'nullable':!![]}),__metadata(_0x1c2155(0x90),String)],OrderEntity['prototype'],'tradeId',void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':_0x1c2155(0x92),'length':0x20,'nullable':!![]}),__metadata(_0x1c2155(0x90),String)],OrderEntity[_0x1c2155(0x88)],_0x1c2155(0x6c),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':'用户ID','nullable':!![]}),__metadata(_0x1c2155(0x90),Number)],OrderEntity[_0x1c2155(0x88)],_0x1c2155(0x91),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':_0x1c2155(0x85),'nullable':!![]}),__metadata('design:type',Number)],OrderEntity[_0x1c2155(0x88)],_0x1c2155(0x78),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':'数量','default':0x1}),__metadata(_0x1c2155(0x90),Number)],OrderEntity[_0x1c2155(0x88)],_0x1c2155(0x79),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':_0x1c2155(0x6f),'type':_0x1c2155(0x86),'scale':0x2,'precision':0xa}),__metadata(_0x1c2155(0x90),Number)],OrderEntity[_0x1c2155(0x88)],'price',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1c2155(0x8d),'type':_0x1c2155(0x86),'scale':0x2,'precision':0xa}),__metadata(_0x1c2155(0x90),Number)],OrderEntity['prototype'],_0x1c2155(0x69),void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':_0x1c2155(0x7a),'default':0x0}),__metadata('design:type',Number)],OrderEntity[_0x1c2155(0x88)],'status',void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'type':'datetime','length':0x0,'nullable':!![],'comment':_0x1c2155(0x6a)}),__metadata(_0x1c2155(0x90),Date)],OrderEntity[_0x1c2155(0x88)],'paydAt',void 0x0),__decorate([(0x0,typeorm_1[_0x1c2155(0x77)])({'comment':'支付渠道）','length':0x20,'nullable':!![]}),__metadata('design:type',String)],OrderEntity[_0x1c2155(0x88)],'channel',void 0x0),OrderEntity=__decorate([(0x0,typeorm_1[_0x1c2155(0x8e)])({'name':'order'})],OrderEntity),exports[_0x1c2155(0x72)]=OrderEntity;