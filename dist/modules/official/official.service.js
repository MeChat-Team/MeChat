'use strict';const _0x195cdd=_0x3fa2;function _0x3fa2(_0x2e2ecd,_0x10fef3){const _0x5acc44=_0x5acc();return _0x3fa2=function(_0x3fa21a,_0x30a5c7){_0x3fa21a=_0x3fa21a-0x15c;let _0x574459=_0x5acc44[_0x3fa21a];return _0x574459;},_0x3fa2(_0x2e2ecd,_0x10fef3);}(function(_0x297cb6,_0x1c6742){const _0x77b7ba=_0x3fa2,_0x406f6d=_0x297cb6();while(!![]){try{const _0x49247c=parseInt(_0x77b7ba(0x180))/0x1*(parseInt(_0x77b7ba(0x17a))/0x2)+-parseInt(_0x77b7ba(0x16a))/0x3*(-parseInt(_0x77b7ba(0x19d))/0x4)+parseInt(_0x77b7ba(0x17b))/0x5+-parseInt(_0x77b7ba(0x16f))/0x6*(-parseInt(_0x77b7ba(0x174))/0x7)+-parseInt(_0x77b7ba(0x19a))/0x8*(-parseInt(_0x77b7ba(0x1a7))/0x9)+-parseInt(_0x77b7ba(0x176))/0xa*(parseInt(_0x77b7ba(0x19e))/0xb)+-parseInt(_0x77b7ba(0x1a6))/0xc;if(_0x49247c===_0x1c6742)break;else _0x406f6d['push'](_0x406f6d['shift']());}catch(_0xae9504){_0x406f6d['push'](_0x406f6d['shift']());}}}(_0x5acc,0x2a28d));var __decorate=this&&this['__decorate']||function(_0x4386b0,_0x34a4c9,_0xd04aa8,_0x2a03b4){const _0x217fe3=_0x3fa2;var _0x3785e3=arguments[_0x217fe3(0x190)],_0x51cd3e=_0x3785e3<0x3?_0x34a4c9:_0x2a03b4===null?_0x2a03b4=Object[_0x217fe3(0x1bd)](_0x34a4c9,_0xd04aa8):_0x2a03b4,_0x3ae45e;if(typeof Reflect===_0x217fe3(0x17f)&&typeof Reflect['decorate']==='function')_0x51cd3e=Reflect['decorate'](_0x4386b0,_0x34a4c9,_0xd04aa8,_0x2a03b4);else{for(var _0x48e558=_0x4386b0['length']-0x1;_0x48e558>=0x0;_0x48e558--)if(_0x3ae45e=_0x4386b0[_0x48e558])_0x51cd3e=(_0x3785e3<0x3?_0x3ae45e(_0x51cd3e):_0x3785e3>0x3?_0x3ae45e(_0x34a4c9,_0xd04aa8,_0x51cd3e):_0x3ae45e(_0x34a4c9,_0xd04aa8))||_0x51cd3e;}return _0x3785e3>0x3&&_0x51cd3e&&Object['defineProperty'](_0x34a4c9,_0xd04aa8,_0x51cd3e),_0x51cd3e;},__metadata=this&&this['__metadata']||function(_0x482c2c,_0xf61f72){const _0x45216a=_0x3fa2;if(typeof Reflect===_0x45216a(0x17f)&&typeof Reflect[_0x45216a(0x1ce)]===_0x45216a(0x1ba))return Reflect[_0x45216a(0x1ce)](_0x482c2c,_0xf61f72);};Object[_0x195cdd(0x1a2)](exports,_0x195cdd(0x1b9),{'value':!![]}),exports[_0x195cdd(0x1bb)]=void 0x0;const utils_1=require(_0x195cdd(0x169)),common_1=require(_0x195cdd(0x192)),axios_1=require(_0x195cdd(0x18d)),crypto=require('crypto'),chat_service_1=require(_0x195cdd(0x1b1)),auth_service_1=require(_0x195cdd(0x170)),autoreply_service_1=require(_0x195cdd(0x1c9)),globalConfig_service_1=require(_0x195cdd(0x1bc)),user_service_1=require(_0x195cdd(0x186));let OfficialService=class OfficialService{constructor(_0x2bfc87,_0x37bf4a,_0x4aa4ed,_0x1f4b65,_0xb18ba1){const _0x20253a=_0x195cdd;this[_0x20253a(0x182)]=_0x2bfc87,this[_0x20253a(0x17d)]=_0x37bf4a,this['authService']=_0x4aa4ed,this['globalConfigService']=_0x1f4b65,this[_0x20253a(0x1b0)]=_0xb18ba1,this[_0x20253a(0x1bf)]={},this[_0x20253a(0x197)]={};}async[_0x195cdd(0x198)](){const _0x25decb=_0x195cdd;await this[_0x25decb(0x18a)]['getWechatAccessToken'](!![]);}async[_0x195cdd(0x184)](){const _0x54a29a=_0x195cdd;let _0x124e62=(0x0,utils_1[_0x54a29a(0x193)])(0x20);return this[_0x54a29a(0x1bf)][_0x124e62]=!![],_0x124e62;}async[_0x195cdd(0x194)](_0x595f1c){const _0x460880=_0x195cdd,{id:_0x29d502}=_0x595f1c[_0x460880(0x1c0)],_0x2d6138=(0x0,utils_1['createRandomNonceStr'])(0x20)+'/'+_0x29d502;return this[_0x460880(0x1bf)][_0x2d6138]=!![],_0x2d6138;}async[_0x195cdd(0x1c6)](_0x519ddf){const _0x58cfcc=_0x195cdd;return this[_0x58cfcc(0x199)](_0x519ddf);}async[_0x195cdd(0x1c2)](_0x594510){const _0x409951=_0x195cdd,_0x375073=await this[_0x409951(0x18a)][_0x409951(0x1d4)](['wechatOfficialAppId']),_0x985382=(0x0,utils_1[_0x409951(0x1a0)])(process[_0x409951(0x1b8)][_0x409951(0x16c)]||_0x409951(0x178)),_0x8fe8cb=_0x985382+'/connect/oauth2/authorize?appid='+_0x375073+_0x409951(0x1d1)+encodeURIComponent(_0x594510)+_0x409951(0x16d);return console['log'](_0x409951(0x168),_0x8fe8cb),_0x8fe8cb;}async['getJsapiTicket'](_0x460bc3){const _0x549f27=_0x195cdd,_0x7800d5=(0x0,utils_1[_0x549f27(0x193)])(0x20),_0x484a52=(Date['now']()/0x3e8)[_0x549f27(0x1c8)](0x0),_0x47fc79=await this[_0x549f27(0x18a)][_0x549f27(0x1d4)]([_0x549f27(0x1ad)]);console[_0x549f27(0x1b4)](_0x549f27(0x18e),_0x47fc79);const _0x25f0ba=await this[_0x549f27(0x18a)][_0x549f27(0x1d4)](['wechatOfficialAppId']);console['log'](_0x549f27(0x1c7),_0x25f0ba);const _0x13fc0b=_0x549f27(0x1c1)+_0x47fc79+_0x549f27(0x1d3)+_0x7800d5+'&timestamp='+_0x484a52+_0x549f27(0x1c5)+_0x460bc3;console['log'](_0x549f27(0x183),_0x13fc0b);const _0x466107=this[_0x549f27(0x195)](_0x13fc0b);return{'appId':_0x25f0ba,'nonceStr':_0x7800d5,'timestamp':_0x484a52,'signature':_0x466107};}async['fetchQRCodeTicket'](_0x57e314){const _0x5c2da2=_0x195cdd,_0x10f807=await this['globalConfigService'][_0x5c2da2(0x1d4)]([_0x5c2da2(0x1ca)]),_0x4eca90=(0x0,utils_1[_0x5c2da2(0x1a0)])(process[_0x5c2da2(0x1b8)][_0x5c2da2(0x1cb)]||_0x5c2da2(0x1ae)),_0x20a92d={'action_name':_0x5c2da2(0x1b7),'action_info':{'scene':{'scene_str':_0x57e314}}},_0x4ee4b2=await axios_1['default'][_0x5c2da2(0x1a1)](_0x4eca90+'/cgi-bin/qrcode/create?access_token='+_0x10f807,_0x20a92d),{data:{errmsg:_0x2f720f,ticket:_0x19476e}}=_0x4ee4b2;if(_0x2f720f)throw new common_1['HttpException'](_0x2f720f,common_1['HttpStatus'][_0x5c2da2(0x166)]);return _0x19476e;}async[_0x195cdd(0x191)](_0x18e57d,_0x48db35){const _0x485079=_0x195cdd,_0x1381a8=await this[_0x485079(0x18a)][_0x485079(0x1d4)]([_0x485079(0x1ac)]),_0x2fc9d2=await this[_0x485079(0x18a)][_0x485079(0x1d4)]([_0x485079(0x171)]),_0x29b00c=(0x0,utils_1[_0x485079(0x1a0)])(process[_0x485079(0x1b8)][_0x485079(0x1cb)]||_0x485079(0x1ae)),_0x56181b=await axios_1[_0x485079(0x16b)][_0x485079(0x161)](_0x29b00c+_0x485079(0x164)+_0x1381a8+_0x485079(0x15c)+_0x2fc9d2+_0x485079(0x15f)+_0x48db35+_0x485079(0x1be)),{data:{errmsg:_0x220dfe,openid:_0x475b80}}=_0x56181b;if(_0x220dfe)throw new common_1[(_0x485079(0x189))](_0x220dfe,common_1[_0x485079(0x1a9)][_0x485079(0x166)]);let _0x1f124c;return _0x1f124c=await this['userService'][_0x485079(0x187)](_0x475b80),!_0x1f124c&&(_0x1f124c=await this['userService']['getUserFromOpenId'](_0x475b80)),this[_0x485079(0x15d)][_0x485079(0x175)](_0x1f124c,_0x18e57d);}async[_0x195cdd(0x181)](_0x44a4a3,_0x35c828){const _0x53f1d3=_0x195cdd;try{common_1[_0x53f1d3(0x18f)][_0x53f1d3(0x1b4)](_0x53f1d3(0x18c)+_0x44a4a3+_0x53f1d3(0x185)+_0x35c828,_0x53f1d3(0x1bb));if(!this[_0x53f1d3(0x1bf)][_0x35c828]){common_1[_0x53f1d3(0x18f)]['error'](_0x53f1d3(0x177)+_0x35c828);throw new common_1[(_0x53f1d3(0x189))](_0x53f1d3(0x1a8),common_1[_0x53f1d3(0x1a9)][_0x53f1d3(0x166)]);}const _0x4f1ae1=await this[_0x53f1d3(0x17d)][_0x53f1d3(0x188)](_0x44a4a3,_0x35c828);common_1[_0x53f1d3(0x18f)]['log'](_0x53f1d3(0x1b3)+(_0x4f1ae1?_0x4f1ae1['id']:_0x53f1d3(0x15e)),_0x53f1d3(0x1bb)),this[_0x53f1d3(0x197)][_0x35c828]=_0x4f1ae1['id'];}catch(_0x2b57d7){common_1[_0x53f1d3(0x18f)]['error']('Error\x20in\x20scan\x20method:',_0x2b57d7[_0x53f1d3(0x17c)]),common_1[_0x53f1d3(0x18f)][_0x53f1d3(0x165)](_0x53f1d3(0x1af),_0x2b57d7['stack']);throw new common_1[(_0x53f1d3(0x189))](_0x53f1d3(0x1a5),common_1[_0x53f1d3(0x1a9)][_0x53f1d3(0x1b2)]);}}async[_0x195cdd(0x179)](_0x22b849,_0x10cdf2){const _0x243ce1=_0x195cdd,{sceneStr:_0x35224b}=_0x10cdf2;if(!this[_0x243ce1(0x1bf)][_0x35224b])return;const _0x37e2cc=this[_0x243ce1(0x197)][_0x35224b];if(!_0x37e2cc)return'';const _0x44d045=await this[_0x243ce1(0x17d)][_0x243ce1(0x1aa)](_0x37e2cc);return delete this['scanedSceneStrMap'][_0x35224b],this['authService'][_0x243ce1(0x175)](_0x44d045,_0x22b849);}async[_0x195cdd(0x1c3)](_0x261cff,_0x10ddce){const _0x560356=_0x195cdd;if(!this[_0x560356(0x1bf)][_0x10ddce])throw new common_1[(_0x560356(0x189))]('非法参数',common_1[_0x560356(0x1a9)][_0x560356(0x166)]);const _0x4bce84=_0x10ddce[_0x560356(0x1d0)]('/')[0x1],_0x3212d2=await this[_0x560356(0x17d)][_0x560356(0x1c4)](_0x261cff,_0x4bce84);this[_0x560356(0x197)][_0x10ddce]=_0x3212d2;}async['bindWxBySceneStr'](_0x370ad1,_0x27abcd){const _0x4bd2ed=_0x195cdd;if(!this[_0x4bd2ed(0x1bf)][_0x27abcd])throw new common_1[(_0x4bd2ed(0x189))]('非法参数',common_1['HttpStatus'][_0x4bd2ed(0x166)]);const {id:_0x3975e8}=_0x370ad1[_0x4bd2ed(0x1c0)],_0xf49cf1=this[_0x4bd2ed(0x197)][_0x27abcd];if(!_0xf49cf1)return'';return delete this[_0x4bd2ed(0x197)][_0x27abcd],_0xf49cf1;}async['verify'](_0x28ca80,_0x387849,_0x2365d3){const _0x2d5abf=_0x195cdd,_0x3e2161=await this[_0x2d5abf(0x18a)][_0x2d5abf(0x1d4)]([_0x2d5abf(0x1ab)])||'';return await this[_0x2d5abf(0x195)]([_0x3e2161,_0x387849,_0x2365d3][_0x2d5abf(0x163)]()[_0x2d5abf(0x16e)](''))==_0x28ca80;}['sha1'](_0x197e12){const _0x1f41a5=_0x195cdd;return crypto[_0x1f41a5(0x1b6)](_0x1f41a5(0x195))['update'](_0x197e12)['digest'](_0x1f41a5(0x173));}async['genXmlMsgByConfig'](_0x45366c,_0x313c38){const _0x2c56dd=_0x195cdd,_0x15b01f=await this[_0x2c56dd(0x18a)][_0x2c56dd(0x1d4)]([_0x313c38]);return this['genXmlMsg'](_0x45366c,_0x15b01f);}async[_0x195cdd(0x19f)](_0x46cac8,_0xf6514e){const _0x397b00=_0x195cdd;return'\x0a\x20\x20\x20\x20<xml>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ToUserName><![CDATA['+_0x46cac8[_0x397b00(0x1a3)][0x0]+_0x397b00(0x1cf)+_0x46cac8['tousername'][0x0]+_0x397b00(0x162)+new Date()[_0x397b00(0x1a4)]()+_0x397b00(0x172)+_0xf6514e+_0x397b00(0x19c);}async[_0x195cdd(0x1d2)](_0x1b7ccb){const _0x1acbd2=_0x195cdd,_0x3b3582=new Promise((_0x443a36,_0x3c5f3d)=>{setTimeout(()=>{_0x3c5f3d(new Error('请求超时'));},0x12c0);});let _0x15d939=await this[_0x1acbd2(0x18a)][_0x1acbd2(0x1d4)]([_0x1acbd2(0x1cc)])||_0x1acbd2(0x1b5);return _0x15d939;}};function _0x5acc(){const _0x535d09=['getQRSceneStr',',\x20sceneStr:\x20','./../user/user.service','getUserOpenId','getUserFromOpenId','HttpException','globalConfigService','ChatService','Scanning\x20with\x20openID:\x20','axios','jsapiTicket:\x20','Logger','length','loginByCode','@nestjs/common','createRandomNonceStr','getQRSceneStrByBind','sha1','Injectable','scanedSceneStrMap','onModuleInit','fetchQRCodeTicket','8zLdrIN','GlobalConfigService',']]></Content>\x0a\x20\x20\x20\x20</xml>','296ZbTXul','220KwNbdL','genXmlMsg','formatUrl','post','defineProperty','fromusername','getTime','处理扫码事件时发生错误','11940396Vveiph','2364426ayrFEv','非法参数','HttpStatus','getUserById','wechatOfficialToken','wechatOfficialAppId','wechatJsapiTicket','https://api.weixin.qq.com','Stack\x20trace:','chatgptService','../chat/chat.service','INTERNAL_SERVER_ERROR','User\x20found:\x20','log','由于公众号的回复限制、过长的问题我们可能无法回复、您可以前往我们的官方站点享受更加完善的服务、如果您有更多问题、欢迎像我提问！','createHash','QR_STR_SCENE','env','__esModule','function','OfficialService','./../globalConfig/globalConfig.service','getOwnPropertyDescriptor','&grant_type=authorization_code','sceneStrMap','user','jsapi_ticket=','getRedirectUrl','scanBindWx','bindWx','&url=','getQRCodeTicket','appId:\x20','toFixed','./../autoreply/autoreply.service','wechatAccessToken','weChatApiUrl','officialAutoReplyText','AutoreplyService','metadata',']]></ToUserName>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<FromUserName><![CDATA[','split','&redirect_uri=','aotoPlay','&noncestr=','getConfigs','&secret=','authService','No\x20user\x20found','&code=','AuthService','get',']]></FromUserName>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<CreateTime>','sort','/sns/oauth2/access_token?appid=','error','BAD_REQUEST','design:paramtypes','回跳跳转地址:\x20','../../common/utils','13491bDZNKr','default','weChatOpenUrl','&response_type=code&scope=snsapi_base&state=weChatLogin#wechat_redirect','join','6EuOWcJ','./../auth/auth.service','wechatOfficialAppSecret','</CreateTime>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<MsgType><![CDATA[text]]></MsgType>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<Content><![CDATA[','hex','1754242nXBySE','loginByOpenId','22520OiCeuH','非法参数:\x20未找到的\x20sceneStr\x20','https://open.weixin.qq.com','loginBySceneStr','130ZESiGP','960350RbPcyy','message','userService','UserService','object','2686jgptln','scan','autoreplyService','str:\x20'];_0x5acc=function(){return _0x535d09;};return _0x5acc();}OfficialService=__decorate([(0x0,common_1[_0x195cdd(0x196)])(),__metadata(_0x195cdd(0x167),[autoreply_service_1[_0x195cdd(0x1cd)],user_service_1[_0x195cdd(0x17e)],auth_service_1[_0x195cdd(0x160)],globalConfig_service_1[_0x195cdd(0x19b)],chat_service_1[_0x195cdd(0x18b)]])],OfficialService),exports[_0x195cdd(0x1bb)]=OfficialService;