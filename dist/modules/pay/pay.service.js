'use strict';const _0x25d27f=_0x300f;function _0x5e97(){const _0x128ad0=['message','trade_status','queryWeChat','payEpayPid','queryHupi','ltzfSign','payEpayNotifyUrl','notifyMpay','data','appid','update','__metadata','defineProperty','payLtzfMchId','epay','payPlatform','payWeChat','error','[WeChat\x20Pay\x20JSAPI]\x20发送支付请求参数:\x20','UserService','../../common/utils','failed','payMpaySecret','getOpenIdByUserId','out_trade_order','Repository','订单不存在!','application/x-www-form-urlencoded','title','QRcode_url','微信Native支付响应数据:\x20','TRANSACTION.SUCCESS','微信支付通知params:\x20','event_type','UserBalanceService','order','decorate','Injectable','https://api.xunhupay.com/payment/do.html','sign','status','套餐不存在!','mpay','addBalanceToOrder','timestamp','payWeChatPrivateKey','wechatpay-node-v3','queryEpay','code_url','submit.php','TRADE_SUCCESS','key=','payMpayPid','findOne','userBalanceService','InjectRepository','payWeChatAppId','signType','payMpayApiPayUrl','sort','getOwnPropertyDescriptor','校验签名通过','name','支付请求失败!','nonce_str','[WeChat\x20Pay\x20JSAPI]\x20支付请求过程中发生错误:\x20','post','192.168.1.100','version','unknown','__decorate','error:\x20','unsupported\x20pay\x20type','MD5','payWeChatNotifyUrl','keys','stringify','createHash','trade_state','notify_url','order_no','../userBalance/userBalance.service','object','2157896WYrzYL','orderEntity','../order/order.entity','__esModule','微信Native支付请求成功，但未返回code_url，响应数据:\x20','get','round','toString','clientip','paySign','payMpay','payHupiGatewayUrl','type','payWeChatSecret','payMpayReturnUrl','importDynamic','default','body','payHupi','cramiPackageEntity','校验签名','now','[WeChat\x20Pay\x20JSAPI]\x20完整的错误对象：','return_url','device','../crami/cramiPackage.entity','globalConfigService','trade_type','appId','attach','createRandomNonceStr','notifyLtzf','payType:\x20','queryMpay','push','wxpay','HttpStatus','hex','ltzf','pay_channel','native','32913ZFzkPN','@nestjs/typeorm','payWeChatPublicKey','payWeChatMchId','HttpException','FAIL','log','transactions_native','payEpayApiQueryUrl','WxPay','sign_type','param','out_trade_no','../user/user.service','status:\x20','微信Native支付过程中发生错误，错误信息:\x20','digest','time','PayService','toFixed','1LlJfqN','join','1.1','money','payLtzfReturnUrl','开始进行微信Native支付流程，订单ID:\x20','key','affected','function','pid','queryLtzf','@nestjs/common','onModuleInit','hupi','success_time','payHupiAppId','typeorm','timeStamp','notifyEpay','BAD_REQUEST','md5','length','JSAPI支付失败','payLtzf','trade_order_id','axios','2081152dCznvY','https://api.xunhupay.com/payment/query.html','支付通知验证失败:\x20','jsapi','2107818UnrdSe','act','toUpperCase','4779131ubJtgS','crypto','pay','https://api.ltzf.cn/api/wxpay/jsapi_convenient','payLtzfNotifyUrl','[WeChat\x20Pay\x20JSAPI]\x20开始JSAPI支付流程，用户ID:\x20','Logger','4570jAQhhv','payHupiSecret','notifyHupi','payHupiReturnUrl','payEpay','GlobalConfigService','goodsId','epay\x20--->\x20res:\x20','total','getConfigs','notify','97090paXxqI','../globalConfig/globalConfig.service','metadata','842178OvTnXR',',\x20订单ID:\x20','https://api.ltzf.cn/api/wxpay/get_pay_order','map','payEpaySecret','query','payHupiNotifyUrl','hash','total_fee','8DPhOMV','openid','nonceStr','success','微信Native支付失败','[WeChat\x20Pay\x20JSAPI]\x20用户OpenID:\x20','payLtzfSecret','alipay'];_0x5e97=function(){return _0x128ad0;};return _0x5e97();}(function(_0x44b148,_0x2c39dd){const _0xea380a=_0x300f,_0x4bbbc4=_0x44b148();while(!![]){try{const _0x3d09cc=-parseInt(_0xea380a(0x123))/0x1*(-parseInt(_0xea380a(0x13d))/0x2)+-parseInt(_0xea380a(0x159))/0x3+parseInt(_0xea380a(0xe6))/0x4+-parseInt(_0xea380a(0x156))/0x5+parseInt(_0xea380a(0x141))/0x6+parseInt(_0xea380a(0x144))/0x7*(parseInt(_0xea380a(0x162))/0x8)+-parseInt(_0xea380a(0x10f))/0x9*(parseInt(_0xea380a(0x14b))/0xa);if(_0x3d09cc===_0x2c39dd)break;else _0x4bbbc4['push'](_0x4bbbc4['shift']());}catch(_0x11a019){_0x4bbbc4['push'](_0x4bbbc4['shift']());}}}(_0x5e97,0x9ce85));var __decorate=this&&this[_0x25d27f(0xd9)]||function(_0x41c5a7,_0x269c3a,_0x355e3d,_0x207680){const _0x36598a=_0x25d27f;var _0x3c2fec=arguments['length'],_0x260517=_0x3c2fec<0x3?_0x269c3a:_0x207680===null?_0x207680=Object[_0x36598a(0xcf)](_0x269c3a,_0x355e3d):_0x207680,_0x2269c5;if(typeof Reflect===_0x36598a(0xe5)&&typeof Reflect[_0x36598a(0xb7)]===_0x36598a(0x12b))_0x260517=Reflect[_0x36598a(0xb7)](_0x41c5a7,_0x269c3a,_0x355e3d,_0x207680);else{for(var _0x450e80=_0x41c5a7['length']-0x1;_0x450e80>=0x0;_0x450e80--)if(_0x2269c5=_0x41c5a7[_0x450e80])_0x260517=(_0x3c2fec<0x3?_0x2269c5(_0x260517):_0x3c2fec>0x3?_0x2269c5(_0x269c3a,_0x355e3d,_0x260517):_0x2269c5(_0x269c3a,_0x355e3d))||_0x260517;}return _0x3c2fec>0x3&&_0x260517&&Object[_0x36598a(0x176)](_0x269c3a,_0x355e3d,_0x260517),_0x260517;},__metadata=this&&this[_0x25d27f(0x175)]||function(_0x4dca2f,_0x6d427c){const _0x2dd088=_0x25d27f;if(typeof Reflect===_0x2dd088(0xe5)&&typeof Reflect['metadata']==='function')return Reflect[_0x2dd088(0x158)](_0x4dca2f,_0x6d427c);},__param=this&&this['__param']||function(_0x138cd2,_0x3f4554){return function(_0x3edd53,_0x3b0a66){_0x3f4554(_0x3edd53,_0x3b0a66,_0x138cd2);};};Object[_0x25d27f(0x176)](exports,_0x25d27f(0xe9),{'value':!![]}),exports['PayService']=void 0x0;const utils_1=require(_0x25d27f(0x17e)),common_1=require(_0x25d27f(0x12e)),typeorm_1=require(_0x25d27f(0x110)),axios_1=require(_0x25d27f(0x13c)),crypto=require(_0x25d27f(0x145)),typeorm_2=require(_0x25d27f(0x133)),cramiPackage_entity_1=require(_0x25d27f(0xff)),globalConfig_service_1=require(_0x25d27f(0x157)),order_entity_1=require(_0x25d27f(0xe8)),user_service_1=require(_0x25d27f(0x11c)),userBalance_service_1=require(_0x25d27f(0xe4));let PayService=class PayService{constructor(_0x22658b,_0x148f01,_0x2bfa93,_0x25bae2,_0xb221bd){const _0x51bb16=_0x25d27f;this['cramiPackageEntity']=_0x22658b,this['orderEntity']=_0x148f01,this[_0x51bb16(0xc9)]=_0x2bfa93,this[_0x51bb16(0x100)]=_0x25bae2,this['userService']=_0xb221bd;}async[_0x25d27f(0x12f)](){const _0x5bbb15=_0x25d27f,_0xfe9594=await(0x0,utils_1[_0x5bbb15(0xf5)])(_0x5bbb15(0xc1));this[_0x5bbb15(0x118)]=(_0xfe9594===null||_0xfe9594===void 0x0?void 0x0:_0xfe9594[_0x5bbb15(0xf6)])?_0xfe9594[_0x5bbb15(0xf6)]:_0xfe9594;}async[_0x25d27f(0x155)](_0x2ef0f8){const _0x115d2d=_0x25d27f;if(_0x2ef0f8[_0x115d2d(0x11a)]==_0x115d2d(0x178))return this[_0x115d2d(0x135)](_0x2ef0f8);if(_0x2ef0f8[_0x115d2d(0x103)]==_0x115d2d(0x130))return this[_0x115d2d(0x14d)](_0x2ef0f8);if(_0x2ef0f8['attach']==_0x115d2d(0x10c))return this[_0x115d2d(0x105)](_0x2ef0f8);if(typeof _0x2ef0f8['resource']=='object')return this['notifyWeChat'](_0x2ef0f8);return this[_0x115d2d(0x171)](_0x2ef0f8);}async[_0x25d27f(0x146)](_0x36ecae,_0x12ea14,_0x3f301d='wxpay'){const _0x816641=_0x25d27f,_0x14a494=await this[_0x816641(0xe7)]['findOne']({'where':{'userId':_0x36ecae,'orderId':_0x12ea14}});if(!_0x14a494)throw new common_1[(_0x816641(0x113))](_0x816641(0x184),common_1[_0x816641(0x10a)][_0x816641(0x136)]);const _0x452352=await this[_0x816641(0xf9)][_0x816641(0xc8)]({'where':{'id':_0x14a494[_0x816641(0x151)]}});if(!_0x452352)throw new common_1[(_0x816641(0x113))](_0x816641(0xbc),common_1[_0x816641(0x10a)][_0x816641(0x136)]);common_1['Logger'][_0x816641(0x115)]('本次支付类型:\x20',_0x14a494[_0x816641(0x179)]);try{if(_0x14a494[_0x816641(0x179)]=='wechat')return this['payWeChat'](_0x36ecae,_0x12ea14,_0x3f301d);if(_0x14a494[_0x816641(0x179)]==_0x816641(0x178))return this[_0x816641(0x14f)](_0x36ecae,_0x12ea14,_0x3f301d);if(_0x14a494[_0x816641(0x179)]==_0x816641(0xbd))return this['payMpay'](_0x36ecae,_0x12ea14,_0x3f301d);if(_0x14a494[_0x816641(0x179)]==_0x816641(0x130))return this['payHupi'](_0x36ecae,_0x12ea14,_0x3f301d);if(_0x14a494['payPlatform']==_0x816641(0x10c))return this[_0x816641(0x13a)](_0x36ecae,_0x12ea14,_0x3f301d);}catch(_0x352994){common_1[_0x816641(0x14a)][_0x816641(0x115)]('支付请求失败:\x20',_0x352994);throw new common_1[(_0x816641(0x113))](_0x816641(0xd2),common_1['HttpStatus'][_0x816641(0x136)]);}}async[_0x25d27f(0x15e)](_0x4f573e){const _0x12cc5e=_0x25d27f,_0x2e6172=await this['orderEntity']['findOne']({'where':{'orderId':_0x4f573e}});if(!_0x2e6172)throw new common_1[(_0x12cc5e(0x113))]('订单不存在!',common_1[_0x12cc5e(0x10a)]['BAD_REQUEST']);return _0x2e6172;}async[_0x25d27f(0x14d)](_0x1cf6b1){const _0x34a9cb=_0x25d27f,_0x47a2e4=await this[_0x34a9cb(0x100)][_0x34a9cb(0x154)]([_0x34a9cb(0x14c)]),_0x5e1926=_0x1cf6b1[_0x34a9cb(0x160)];delete _0x1cf6b1['hash'];if(this[_0x34a9cb(0xba)](_0x1cf6b1,_0x47a2e4)!=_0x5e1926)return'failed';const _0x570e16=await this[_0x34a9cb(0xe7)][_0x34a9cb(0xc8)]({'where':{'orderId':_0x1cf6b1[_0x34a9cb(0x13b)],'status':0x0}});if(!_0x570e16)return _0x34a9cb(0x17f);await this[_0x34a9cb(0xc9)][_0x34a9cb(0xbe)](_0x570e16);const _0x1b1889=await this[_0x34a9cb(0xe7)][_0x34a9cb(0x174)]({'orderId':_0x1cf6b1[_0x34a9cb(0x13b)]},{'status':0x1,'paydAt':new Date()});if(_0x1b1889[_0x34a9cb(0x12a)]!=0x1)return _0x34a9cb(0x17f);return _0x34a9cb(0x165);}async[_0x25d27f(0xf8)](_0x168897,_0x4d519c,_0x5c56a6='wxpay'){const _0xaf2413=_0x25d27f,_0x33fbab=await this[_0xaf2413(0xe7)][_0xaf2413(0xc8)]({'where':{'userId':_0x168897,'orderId':_0x4d519c}});if(!_0x33fbab)throw new common_1[(_0xaf2413(0x113))](_0xaf2413(0x184),common_1['HttpStatus'][_0xaf2413(0x136)]);const _0x5e4585=await this[_0xaf2413(0xf9)][_0xaf2413(0xc8)]({'where':{'id':_0x33fbab[_0xaf2413(0x151)]}});if(!_0x5e4585)throw new common_1[(_0xaf2413(0x113))]('套餐不存在!',common_1['HttpStatus'][_0xaf2413(0x136)]);const {payHupiAppId:_0x7207d9,payHupiSecret:_0x593d4d,payHupiNotifyUrl:_0x19fa04,payHupiReturnUrl:_0x2d9bcf,payHupiGatewayUrl:_0x3177ae}=await this[_0xaf2413(0x100)]['getConfigs']([_0xaf2413(0x132),'payHupiSecret',_0xaf2413(0x15f),_0xaf2413(0x14e),_0xaf2413(0xf1)]),_0x106526={};_0x106526[_0xaf2413(0xd7)]=_0xaf2413(0x125),_0x106526[_0xaf2413(0x173)]=_0x7207d9,_0x106526[_0xaf2413(0x120)]=(Date[_0xaf2413(0xfb)]()/0x3e8)[_0xaf2413(0x122)](0x0),_0x106526[_0xaf2413(0xd3)]=(0x0,utils_1['createRandomNonceStr'])(0x20),_0x106526[_0xaf2413(0x13b)]=_0x4d519c,_0x106526[_0xaf2413(0x186)]=_0x5e4585['name'],_0x106526[_0xaf2413(0x161)]=_0x33fbab[_0xaf2413(0x153)],_0x106526['notify_url']=_0x19fa04,_0x106526[_0xaf2413(0xfd)]=_0x2d9bcf,_0x106526['attach']=_0xaf2413(0x130),_0x106526[_0xaf2413(0x160)]=this[_0xaf2413(0xba)](_0x106526,_0x593d4d);const {data:{errcode:_0x331089,errmsg:_0x2b42cb,url_qrcode:_0x167790,url:_0x303a6e}}=await axios_1['default'][_0xaf2413(0xd5)](_0x3177ae||_0xaf2413(0xb9),_0x106526);if(_0x331089!=0x0)throw new common_1[(_0xaf2413(0x113))](_0x2b42cb,common_1['HttpStatus']['BAD_REQUEST']);return{'url_qrcode':_0x167790,'url':_0x303a6e};}async[_0x25d27f(0x16e)](_0x37cbc8){const _0x54460d=_0x25d27f,{payHupiAppId:_0x3f5da6,payHupiSecret:_0x157fa8}=await this[_0x54460d(0x100)][_0x54460d(0x154)]([_0x54460d(0x132),_0x54460d(0x14c)]),_0x356125={};_0x356125[_0x54460d(0xd7)]=_0x54460d(0x125),_0x356125[_0x54460d(0x173)]=_0x3f5da6,_0x356125[_0x54460d(0x120)]=(Date[_0x54460d(0xfb)]()/0x3e8)[_0x54460d(0x122)](0x0),_0x356125[_0x54460d(0xd3)]=(0x0,utils_1[_0x54460d(0x104)])(0x20),_0x356125[_0x54460d(0x182)]=_0x37cbc8,_0x356125[_0x54460d(0x160)]=this[_0x54460d(0xba)](_0x356125,_0x157fa8);const {data:{errcode:_0x39ab07,errmsg:_0x2a720d,data:_0x2b8505}}=await axios_1[_0x54460d(0xf6)][_0x54460d(0xd5)](_0x54460d(0x13e),_0x356125);if(_0x39ab07!=0x0)throw new common_1[(_0x54460d(0x113))](_0x2a720d,common_1['HttpStatus']['BAD_REQUEST']);return _0x2b8505;}async[_0x25d27f(0x135)](_0x17507b){const _0x7dad7d=_0x25d27f,_0x122802=_0x17507b[_0x7dad7d(0xba)];delete _0x17507b[_0x7dad7d(0xba)],delete _0x17507b[_0x7dad7d(0x119)];const _0x5a5b00=await this['globalConfigService'][_0x7dad7d(0x154)]([_0x7dad7d(0x15d)]);if(this[_0x7dad7d(0xba)](_0x17507b,_0x5a5b00)!=_0x122802)return _0x7dad7d(0x17f);common_1[_0x7dad7d(0x14a)]['log'](_0x7dad7d(0xd0));const _0x325c46=await this['orderEntity'][_0x7dad7d(0xc8)]({'where':{'orderId':_0x17507b[_0x7dad7d(0x11b)],'status':0x0}});if(!_0x325c46)return _0x7dad7d(0x17f);const _0x1c3dbe=_0x17507b[_0x7dad7d(0x16b)]=='TRADE_SUCCESS'?0x1:0x2,_0x11febe=await this[_0x7dad7d(0xe7)][_0x7dad7d(0x174)]({'orderId':_0x17507b[_0x7dad7d(0x11b)]},{'status':_0x1c3dbe,'paydAt':new Date()});_0x1c3dbe===0x1&&await this[_0x7dad7d(0xc9)][_0x7dad7d(0xbe)](_0x325c46);if(_0x11febe[_0x7dad7d(0x12a)]!=0x1)return'failed';return _0x7dad7d(0x165);}async[_0x25d27f(0x14f)](_0x2da0d0,_0x35e5d9,_0x2b4a36=_0x25d27f(0x169)){const _0x32c5eb=_0x25d27f,_0x2d298c=await this['orderEntity'][_0x32c5eb(0xc8)]({'where':{'userId':_0x2da0d0,'orderId':_0x35e5d9}});if(!_0x2d298c)throw new common_1[(_0x32c5eb(0x113))](_0x32c5eb(0x184),common_1[_0x32c5eb(0x10a)][_0x32c5eb(0x136)]);const _0x200414=await this[_0x32c5eb(0xf9)][_0x32c5eb(0xc8)]({'where':{'id':_0x2d298c[_0x32c5eb(0x151)]}});if(!_0x200414)throw new common_1[(_0x32c5eb(0x113))]('套餐不存在!',common_1[_0x32c5eb(0x10a)][_0x32c5eb(0x136)]);const {payEpayPid:_0x51d71d,payEpaySecret:_0x442aed,payEpayNotifyUrl:_0x43249c,payEpayReturnUrl:_0x18037b,payEpayApiPayUrl:_0x40e3c3}=await this[_0x32c5eb(0x100)][_0x32c5eb(0x154)](['payEpayPid','payEpaySecret',_0x32c5eb(0x170),'payEpayReturnUrl','payEpayApiPayUrl']);let _0x21100f;_0x51d71d[_0x32c5eb(0x138)]<=0x10?_0x21100f=Number(_0x51d71d):_0x21100f=BigInt(_0x51d71d);const _0x536628={};_0x536628[_0x32c5eb(0x12c)]=_0x21100f,_0x536628[_0x32c5eb(0xf2)]=_0x2b4a36,_0x536628[_0x32c5eb(0x11b)]=_0x35e5d9,_0x536628[_0x32c5eb(0xd1)]=_0x200414[_0x32c5eb(0xd1)],_0x536628[_0x32c5eb(0x126)]=_0x2d298c[_0x32c5eb(0x153)],_0x536628[_0x32c5eb(0xee)]=_0x32c5eb(0xd6),_0x536628[_0x32c5eb(0xfe)]='pc',_0x536628['notify_url']=_0x43249c,_0x536628['return_url']=_0x18037b,_0x536628['param']=_0x32c5eb(0x178),_0x536628[_0x32c5eb(0xba)]=this['sign'](_0x536628,_0x442aed),_0x536628[_0x32c5eb(0x119)]=_0x32c5eb(0xdc);const _0x14efb6=new URLSearchParams(_0x536628)[_0x32c5eb(0xed)](),_0x353ab4=_0x40e3c3+'?'+_0x14efb6;if(_0x40e3c3['includes'](_0x32c5eb(0xc4)))return{'url_qrcode':null,'redirectUrl':_0x353ab4,'channel':_0x2b4a36,'isRedirect':!![]};else{const _0x3db67d={'headers':{'Content-Type':_0x32c5eb(0x185)}},_0x292a39=await axios_1[_0x32c5eb(0xf6)]['post'](_0x40e3c3,_0x536628,_0x3db67d);common_1[_0x32c5eb(0x14a)][_0x32c5eb(0x115)](_0x32c5eb(0x152),_0x292a39[_0x32c5eb(0x172)]);const {data:{code:_0x39d38a,msg:_0x30bfb4,qrcode:_0x3be539}}=_0x292a39;if(_0x39d38a!=0x1)throw new common_1[(_0x32c5eb(0x113))](_0x30bfb4,common_1[_0x32c5eb(0x10a)]['BAD_REQUEST']);return{'url_qrcode':_0x3be539,'redirectUrl':null,'channel':_0x2b4a36,'isRedirect':![]};}}async[_0x25d27f(0xc2)](_0x433a76){const _0x24812c=_0x25d27f,{payEpayPid:_0x15000a,payEpaySecret:_0x3fb12b,payEpayApiQueryUrl:_0x2a4851}=await this[_0x24812c(0x100)]['getConfigs']([_0x24812c(0x16d),_0x24812c(0x15d),_0x24812c(0x117)]),_0x34e6ae={};_0x34e6ae[_0x24812c(0x142)]=_0x24812c(0xb6),_0x34e6ae[_0x24812c(0x11b)]=_0x433a76,_0x34e6ae[_0x24812c(0x12c)]=_0x15000a,_0x34e6ae[_0x24812c(0x129)]=_0x3fb12b;const {data:{code:_0x306f6e,msg:_0x548378,data:_0x301ce0}}=await axios_1[_0x24812c(0xf6)][_0x24812c(0xeb)](_0x2a4851,{'params':_0x34e6ae});if(_0x306f6e!=0x1)throw new common_1[(_0x24812c(0x113))](_0x548378,common_1[_0x24812c(0x10a)][_0x24812c(0x136)]);return _0x301ce0;}async[_0x25d27f(0x171)](_0x2c425c){const _0x48409e=_0x25d27f,_0x1f6340=_0x2c425c[_0x48409e(0xba)];delete _0x2c425c[_0x48409e(0xba)],delete _0x2c425c[_0x48409e(0x119)];const _0xa220d0=await this[_0x48409e(0x100)][_0x48409e(0x154)]([_0x48409e(0x180)]);common_1['Logger']['log'](_0x48409e(0xfa));if(this[_0x48409e(0xba)](_0x2c425c,_0xa220d0)!=_0x1f6340)return _0x48409e(0x17f);common_1[_0x48409e(0x14a)]['log']('校验签名通过');const _0x333342=await this[_0x48409e(0xe7)][_0x48409e(0xc8)]({'where':{'orderId':_0x2c425c[_0x48409e(0x11b)],'status':0x0}});if(!_0x333342)return _0x48409e(0x17f);const _0x2ac62e=_0x2c425c[_0x48409e(0x16b)]==_0x48409e(0xc5)?0x1:0x2;common_1[_0x48409e(0x14a)][_0x48409e(0x115)](_0x48409e(0x11d),_0x2ac62e);const _0x45c2d1=await this[_0x48409e(0xe7)]['update']({'orderId':_0x2c425c[_0x48409e(0x11b)]},{'status':_0x2ac62e,'paydAt':new Date()});_0x2ac62e===0x1&&await this['userBalanceService']['addBalanceToOrder'](_0x333342);if(_0x45c2d1[_0x48409e(0x12a)]!=0x1)return _0x48409e(0x17f);return'success';}async[_0x25d27f(0xf0)](_0x13ba31,_0x562e66,_0x373c7f=_0x25d27f(0x109)){const _0x53027c=_0x25d27f,_0x449b51=await this[_0x53027c(0xe7)][_0x53027c(0xc8)]({'where':{'userId':_0x13ba31,'orderId':_0x562e66}});if(!_0x449b51)throw new common_1['HttpException']('订单不存在!',common_1['HttpStatus'][_0x53027c(0x136)]);const _0x9d1689=await this[_0x53027c(0xf9)][_0x53027c(0xc8)]({'where':{'id':_0x449b51[_0x53027c(0x151)]}});if(!_0x9d1689)throw new common_1[(_0x53027c(0x113))]('套餐不存在!',common_1[_0x53027c(0x10a)]['BAD_REQUEST']);const {payMpayPid:_0x56c931,payMpaySecret:_0x4d96dd,payMpayNotifyUrl:_0x185e8e,payMpayReturnUrl:_0x18e88b,payMpayApiPayUrl:_0x4ac270}=await this[_0x53027c(0x100)][_0x53027c(0x154)]([_0x53027c(0xc7),_0x53027c(0x180),'payMpayNotifyUrl',_0x53027c(0xf4),_0x53027c(0xcd)]),_0x587917={};_0x587917[_0x53027c(0x12c)]=Number(_0x56c931),_0x587917[_0x53027c(0xf2)]=_0x373c7f,_0x587917[_0x53027c(0x11b)]=_0x562e66,_0x587917['name']=_0x9d1689[_0x53027c(0xd1)],_0x587917[_0x53027c(0x126)]=_0x449b51['total'],_0x587917[_0x53027c(0xe2)]=_0x185e8e,_0x587917['return_url']=_0x18e88b,_0x587917['sign']=this[_0x53027c(0xba)](_0x587917,_0x4d96dd),_0x587917[_0x53027c(0x119)]=_0x53027c(0xdc);const _0x1248ba=new URLSearchParams(_0x587917)[_0x53027c(0xed)](),_0x6363b8=_0x4ac270+'?'+_0x1248ba;return{'url_qrcode':null,'redirectUrl':_0x6363b8,'channel':_0x373c7f,'isRedirect':!![]};const _0x45bb7a=await axios_1[_0x53027c(0xf6)][_0x53027c(0xeb)](_0x4ac270,{'params':_0x587917});}async[_0x25d27f(0x107)](_0x3f775e){const _0x5d98f7=_0x25d27f,{payMpayApiQueryUrl:_0xee60d6}=await this[_0x5d98f7(0x100)]['getConfigs']([_0x5d98f7(0xc7),_0x5d98f7(0x180),'payMpayApiQueryUrl']),_0x56812e={};_0x56812e[_0x5d98f7(0xf2)]=0x2,_0x56812e[_0x5d98f7(0xe3)]=_0x3f775e;const {data:{code:_0x405e24,msg:_0x23d84c,data:_0x2b5ae6}}=await axios_1[_0x5d98f7(0xf6)][_0x5d98f7(0xeb)](_0xee60d6,{'params':_0x56812e});if(_0x405e24!=0x1)throw new common_1[(_0x5d98f7(0x113))](_0x23d84c,common_1[_0x5d98f7(0x10a)][_0x5d98f7(0x136)]);return _0x2b5ae6;}async['notifyWeChat'](_0x3f9663){const _0x3f8bef=_0x25d27f;common_1[_0x3f8bef(0x14a)][_0x3f8bef(0x115)](_0x3f8bef(0x18a),_0x3f9663);const {payWeChatAppId:_0x3d3f7a,payWeChatMchId:_0x4c175d,payWeChatSecret:_0x2c9680,payWeChatPublicKey:_0x5750d4,payWeChatPrivateKey:_0x5efda8}=await this[_0x3f8bef(0x100)]['getConfigs']([_0x3f8bef(0xcb),_0x3f8bef(0x112),_0x3f8bef(0xf3),_0x3f8bef(0x111),_0x3f8bef(0xc0)]),_0x9611e9=new this[(_0x3f8bef(0x118))]({'appid':_0x3d3f7a,'mchid':_0x4c175d,'publicKey':_0x5750d4,'privateKey':_0x5efda8});try{if(_0x3f9663[_0x3f8bef(0x18b)]==_0x3f8bef(0x189)){const {ciphertext:_0x376b6d,associated_data:_0x133228,nonce:_0x40229b}=_0x3f9663['resource'],_0x540b94=_0x9611e9['decipher_gcm'](_0x376b6d,_0x133228,_0x40229b,_0x2c9680),_0x58a347=await this['orderEntity']['findOne']({'where':{'orderId':_0x540b94[_0x3f8bef(0x11b)],'status':0x0}});if(!_0x58a347)return _0x3f8bef(0x17f);const _0x234338=_0x540b94[_0x3f8bef(0xe1)]=='SUCCESS'?0x1:0x2,_0x416a44=await this[_0x3f8bef(0xe7)][_0x3f8bef(0x174)]({'orderId':_0x540b94['out_trade_no']},{'status':_0x234338,'paydAt':new Date()});_0x234338===0x1&&await this[_0x3f8bef(0xc9)][_0x3f8bef(0xbe)](_0x58a347);if(_0x416a44[_0x3f8bef(0x12a)]!=0x1)return _0x3f8bef(0x17f);}return _0x3f8bef(0x165);}catch(_0x10e9eb){return common_1[_0x3f8bef(0x14a)][_0x3f8bef(0x115)](_0x3f8bef(0xda),_0x10e9eb),common_1[_0x3f8bef(0x14a)]['log'](_0x3f8bef(0x13f),_0x10e9eb),_0x3f8bef(0x17f);}}async[_0x25d27f(0x17a)](_0x4a3a64,_0x5b540f,_0xa520bb=_0x25d27f(0x10e)){const _0x14342e=_0x25d27f;var _0x51b097,_0x412de6,_0x4d9e46,_0x4245a6,_0x1a935e,_0x2005f9,_0x2f42f8;common_1[_0x14342e(0x14a)][_0x14342e(0x115)](_0x14342e(0x106),_0xa520bb);const _0x44a04f=await this[_0x14342e(0xe7)][_0x14342e(0xc8)]({'where':{'userId':_0x4a3a64,'orderId':_0x5b540f}});if(!_0x44a04f)throw new common_1[(_0x14342e(0x113))]('订单不存在!',common_1[_0x14342e(0x10a)][_0x14342e(0x136)]);const _0x2c5fae=await this[_0x14342e(0xf9)][_0x14342e(0xc8)]({'where':{'id':_0x44a04f[_0x14342e(0x151)]}});if(!_0x2c5fae)throw new common_1[(_0x14342e(0x113))]('套餐不存在!',common_1['HttpStatus'][_0x14342e(0x136)]);const {payWeChatAppId:_0x1d716b,payWeChatMchId:_0x27c078,payWeChatPublicKey:_0x3884cd,payWeChatPrivateKey:_0x36ca9f,payWeChatNotifyUrl:_0x30a195}=await this[_0x14342e(0x100)][_0x14342e(0x154)]([_0x14342e(0xcb),_0x14342e(0x112),_0x14342e(0x111),_0x14342e(0xc0),_0x14342e(0xdd)]),_0x49ba52=new this[(_0x14342e(0x118))]({'appid':_0x1d716b,'mchid':_0x27c078,'publicKey':_0x3884cd,'privateKey':_0x36ca9f}),_0xebd5c9={'appid':_0x1d716b,'mchid':_0x27c078,'description':_0x2c5fae[_0x14342e(0xd1)],'out_trade_no':_0x5b540f,'notify_url':_0x30a195,'amount':{'total':Math[_0x14342e(0xec)](_0x44a04f['total']*0x64)}};common_1['Logger'][_0x14342e(0x115)]('wechat-pay:\x20',_0xebd5c9);if(_0xa520bb==_0x14342e(0x140)){common_1['Logger'][_0x14342e(0x115)](_0x14342e(0x149)+_0x4a3a64+_0x14342e(0x15a)+_0x5b540f);const _0x253c62=await this['userService'][_0x14342e(0x181)](_0x4a3a64);common_1[_0x14342e(0x14a)]['log'](_0x14342e(0x167)+_0x253c62),_0xebd5c9['payer']={'openid':_0x253c62},common_1['Logger']['log'](_0x14342e(0x17c),JSON['stringify'](_0xebd5c9,null,0x2));try{const _0x5d3032=await _0x49ba52['transactions_jsapi'](_0xebd5c9),_0x501475=_0x5d3032[_0x14342e(0x172)]?_0x5d3032[_0x14342e(0x172)]:_0x5d3032;return common_1[_0x14342e(0x14a)][_0x14342e(0x115)]('[WeChat\x20Pay\x20JSAPI]\x20支付请求成功，返回结果:\x20',JSON[_0x14342e(0xdf)](_0x501475,null,0x2)),{'status':_0x5d3032[_0x14342e(0xbb)]||_0x14342e(0xd8),'appId':_0x501475[_0x14342e(0x102)]||((_0x51b097=_0x501475['data'])===null||_0x51b097===void 0x0?void 0x0:_0x51b097['appId']),'timeStamp':_0x501475[_0x14342e(0x134)]||((_0x412de6=_0x501475[_0x14342e(0x172)])===null||_0x412de6===void 0x0?void 0x0:_0x412de6[_0x14342e(0x134)]),'nonceStr':_0x501475[_0x14342e(0x164)]||((_0x4d9e46=_0x501475[_0x14342e(0x172)])===null||_0x4d9e46===void 0x0?void 0x0:_0x4d9e46['nonceStr']),'package':_0x501475['package']||((_0x4245a6=_0x501475[_0x14342e(0x172)])===null||_0x4245a6===void 0x0?void 0x0:_0x4245a6['package']),'signType':_0x501475['signType']||((_0x1a935e=_0x501475['data'])===null||_0x1a935e===void 0x0?void 0x0:_0x1a935e[_0x14342e(0xcc)]),'paySign':_0x501475[_0x14342e(0xef)]||((_0x2005f9=_0x501475[_0x14342e(0x172)])===null||_0x2005f9===void 0x0?void 0x0:_0x2005f9['paySign'])};}catch(_0x46c642){console['error'](_0x14342e(0xd4)+_0x46c642[_0x14342e(0x16a)],_0x46c642),console['error'](_0x14342e(0xfc),_0x46c642);throw new common_1[(_0x14342e(0x113))](_0x14342e(0x139),common_1['HttpStatus'][_0x14342e(0x136)]);}}if(_0xa520bb==_0x14342e(0x10e)){common_1['Logger']['log'](_0x14342e(0x128)+_0x5b540f+',\x20用户ID:\x20'+_0x4a3a64);try{const _0x1e2511=await _0x49ba52[_0x14342e(0x116)](_0xebd5c9);common_1['Logger'][_0x14342e(0x115)](_0x14342e(0x188),JSON['stringify'](_0x1e2511,null,0x2));let _0x5149ab=_0x1e2511[_0x14342e(0xc3)]||((_0x2f42f8=_0x1e2511[_0x14342e(0x172)])===null||_0x2f42f8===void 0x0?void 0x0:_0x2f42f8['code_url']);return!_0x5149ab?console['error'](_0x14342e(0xea),JSON[_0x14342e(0xdf)](_0x1e2511,null,0x2)):common_1[_0x14342e(0x14a)][_0x14342e(0x115)]('微信Native支付请求成功，code_url:\x20'+_0x5149ab),{'url_qrcode':_0x5149ab,'isRedirect':![]};}catch(_0x725ef0){console[_0x14342e(0x17b)](_0x14342e(0x11e)+_0x725ef0[_0x14342e(0x16a)],_0x725ef0),console[_0x14342e(0x17b)]('完整的错误对象：',_0x725ef0);throw new common_1['HttpException'](_0x14342e(0x166),common_1['HttpStatus'][_0x14342e(0x136)]);}}else{console['warn']('支付请求使用了不支持的支付类型:\x20'+_0xa520bb);throw new common_1[(_0x14342e(0x113))](_0x14342e(0xdb),common_1['HttpStatus'][_0x14342e(0x136)]);}}async[_0x25d27f(0x16c)](_0x110fd6){const _0x45f78d=_0x25d27f,{payWeChatAppId:_0x51c395,payWeChatMchId:_0x6664c3,payWeChatPublicKey:_0x1ed89a,payWeChatPrivateKey:_0x2c2910,payWeChatNotifyUrl:_0x355df8}=await this['globalConfigService'][_0x45f78d(0x154)](['payWeChatAppId',_0x45f78d(0x112),_0x45f78d(0x111),_0x45f78d(0xc0)]),_0x3128d5=new this[(_0x45f78d(0x118))]({'appid':_0x51c395,'mchid':_0x6664c3,'publicKey':_0x1ed89a,'privateKey':_0x2c2910}),_0x3eeeb9=await _0x3128d5[_0x45f78d(0x15e)]({'out_trade_no':_0x110fd6});return _0x3eeeb9;}[_0x25d27f(0xba)](_0x443420,_0x52faff){const _0x5af908=_0x25d27f,_0x520202=Object[_0x5af908(0xde)](_0x443420)[_0x5af908(0xce)]()[_0x5af908(0x15c)](_0x8d8829=>_0x8d8829+'='+_0x443420[_0x8d8829])[_0x5af908(0x124)]('&')+_0x52faff;return crypto[_0x5af908(0xe0)](_0x5af908(0x137))[_0x5af908(0x174)](_0x520202)['digest'](_0x5af908(0x10b));}[_0x25d27f(0x16f)](_0x53070e,_0x300d91){const _0x12b26f=_0x25d27f,_0x4fae33=Object[_0x12b26f(0xde)](_0x53070e);_0x4fae33[_0x12b26f(0xce)]();const _0x9ad3e7=[];_0x4fae33[_0x12b26f(0x15c)](_0x2f434d=>{const _0x48ca76=_0x12b26f;_0x9ad3e7[_0x48ca76(0x108)](_0x2f434d+'='+_0x53070e[_0x2f434d]);}),_0x9ad3e7[_0x12b26f(0x108)](_0x12b26f(0xc6)+_0x300d91);const _0x2eeeb2=_0x9ad3e7[_0x12b26f(0x124)]('&');return crypto[_0x12b26f(0xe0)](_0x12b26f(0x137))[_0x12b26f(0x174)](_0x2eeeb2)[_0x12b26f(0x11f)]('hex')[_0x12b26f(0x143)]();}async['payLtzf'](_0x295772,_0x64c787,_0x1b3a6f=_0x25d27f(0x109)){const _0x15f11a=_0x25d27f,_0x39985b=await this[_0x15f11a(0xe7)]['findOne']({'where':{'userId':_0x295772,'orderId':_0x64c787}});if(!_0x39985b)throw new common_1['HttpException']('订单不存在!',common_1[_0x15f11a(0x10a)][_0x15f11a(0x136)]);const _0x15f05e=await this[_0x15f11a(0xf9)][_0x15f11a(0xc8)]({'where':{'id':_0x39985b[_0x15f11a(0x151)]}});if(!_0x15f05e)throw new common_1[(_0x15f11a(0x113))](_0x15f11a(0xbc),common_1[_0x15f11a(0x10a)][_0x15f11a(0x136)]);const {payLtzfMchId:_0x52ba97,payLtzfSecret:_0x4e3f6e,payLtzfNotifyUrl:_0x3d28eb,payLtzfReturnUrl:_0x1844a7}=await this['globalConfigService'][_0x15f11a(0x154)](['payLtzfMchId',_0x15f11a(0x168),_0x15f11a(0x148),_0x15f11a(0x127)]),_0x512a34={};_0x512a34['mch_id']=_0x52ba97,_0x512a34[_0x15f11a(0xbf)]=(Date[_0x15f11a(0xfb)]()/0x3e8)[_0x15f11a(0x122)](0x0),_0x512a34[_0x15f11a(0x11b)]=_0x64c787,_0x512a34[_0x15f11a(0xf7)]=_0x15f05e[_0x15f11a(0xd1)],_0x512a34['total_fee']=_0x39985b['total'],_0x512a34[_0x15f11a(0xe2)]=_0x3d28eb,_0x512a34[_0x15f11a(0xba)]=this[_0x15f11a(0x16f)](_0x512a34,_0x4e3f6e),_0x512a34[_0x15f11a(0x103)]='ltzf',_0x512a34[_0x15f11a(0xfd)]=_0x1844a7;const _0x2cd9a6=Object[_0x15f11a(0xde)](_0x512a34)[_0x15f11a(0x15c)](_0x2fc056=>encodeURIComponent(_0x2fc056)+'='+encodeURIComponent(_0x512a34[_0x2fc056]))['join']('&'),_0x53e0ca={'headers':{'Content-Type':'application/x-www-form-urlencoded'}},_0x2fa069=await axios_1['default'][_0x15f11a(0xd5)](_0x15f11a(0x147),_0x2cd9a6,_0x53e0ca),{code:_0x430aac,data:_0x5eb609,msg:_0x2cfd97}=_0x2fa069[_0x15f11a(0x172)];if(_0x430aac!=0x0)throw new common_1[(_0x15f11a(0x113))](_0x2cfd97,common_1[_0x15f11a(0x10a)][_0x15f11a(0x136)]);const _0x197395=_0x5eb609[_0x15f11a(0x187)],_0x196c7e=_0x5eb609['order_url'];return{'url_qrcode':_0x197395,'url':_0x196c7e};}async[_0x25d27f(0x12d)](_0x8df25d){const _0x552c09=_0x25d27f,{payLtzfMchId:_0x2e82a0,payLtzfSecret:_0x3ed4fb}=await this[_0x552c09(0x100)][_0x552c09(0x154)]([_0x552c09(0x177),_0x552c09(0x168)]),_0x1f2280={};_0x1f2280['mch_id']=_0x2e82a0,_0x1f2280[_0x552c09(0xbf)]=(Date[_0x552c09(0xfb)]()/0x3e8)[_0x552c09(0x122)](0x0),_0x1f2280[_0x552c09(0x11b)]=_0x8df25d,_0x1f2280[_0x552c09(0xba)]=this[_0x552c09(0x16f)](_0x1f2280,_0x3ed4fb);const _0x9dde1a=Object[_0x552c09(0xde)](_0x1f2280)[_0x552c09(0x15c)](_0x366213=>encodeURIComponent(_0x366213)+'='+encodeURIComponent(_0x1f2280[_0x366213]))[_0x552c09(0x124)]('&'),_0x4087fa={'headers':{'Content-Type':_0x552c09(0x185)}},{data:{code:_0x29da78,msg:_0x3ca6bb,data:_0x404887}}=await axios_1[_0x552c09(0xf6)]['post'](_0x552c09(0x15b),_0x9dde1a,_0x4087fa);if(_0x29da78!=0x0)throw new common_1['HttpException'](_0x3ca6bb+JSON[_0x552c09(0xdf)](_0x1f2280),common_1[_0x552c09(0x10a)][_0x552c09(0x136)]);return _0x404887;}async[_0x25d27f(0x105)](_0x385a91){const _0x5aff9b=_0x25d27f,_0x575c2d=await this[_0x5aff9b(0x100)][_0x5aff9b(0x154)](['payLtzfSecret']),_0x4eca14=_0x385a91['sign'];delete _0x385a91[_0x5aff9b(0xba)],delete _0x385a91[_0x5aff9b(0x10d)],delete _0x385a91[_0x5aff9b(0x101)],delete _0x385a91[_0x5aff9b(0x131)],delete _0x385a91[_0x5aff9b(0x103)],delete _0x385a91[_0x5aff9b(0x163)];if(this[_0x5aff9b(0x16f)](_0x385a91,_0x575c2d)!=_0x4eca14)return _0x5aff9b(0x114);const _0x4c2047=await this['orderEntity'][_0x5aff9b(0xc8)]({'where':{'orderId':_0x385a91[_0x5aff9b(0x11b)],'status':0x0}});if(!_0x4c2047)return'FAIL';await this['userBalanceService'][_0x5aff9b(0xbe)](_0x4c2047);const _0x4444b2=await this[_0x5aff9b(0xe7)][_0x5aff9b(0x174)]({'orderId':_0x385a91[_0x5aff9b(0x11b)]},{'status':0x1,'paydAt':new Date()});if(_0x4444b2[_0x5aff9b(0x12a)]!=0x1)return _0x5aff9b(0x114);return'SUCCESS';}};function _0x300f(_0x4d91aa,_0x37e7b0){const _0x5e97fd=_0x5e97();return _0x300f=function(_0x300f56,_0x1d0873){_0x300f56=_0x300f56-0xb5;let _0x2da3aa=_0x5e97fd[_0x300f56];return _0x2da3aa;},_0x300f(_0x4d91aa,_0x37e7b0);}PayService=__decorate([(0x0,common_1[_0x25d27f(0xb8)])(),__param(0x0,(0x0,typeorm_1[_0x25d27f(0xca)])(cramiPackage_entity_1['CramiPackageEntity'])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(order_entity_1['OrderEntity'])),__metadata('design:paramtypes',[typeorm_2['Repository'],typeorm_2[_0x25d27f(0x183)],userBalance_service_1[_0x25d27f(0xb5)],globalConfig_service_1[_0x25d27f(0x150)],user_service_1[_0x25d27f(0x17d)]])],PayService),exports[_0x25d27f(0x121)]=PayService;