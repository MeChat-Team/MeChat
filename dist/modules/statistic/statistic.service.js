'use strict';const _0x568dd4=_0x1288;(function(_0x1f760d,_0x25ce80){const _0x1e574d=_0x1288,_0x49e80a=_0x1f760d();while(!![]){try{const _0xdddff9=-parseInt(_0x1e574d(0x1aa))/0x1+-parseInt(_0x1e574d(0x15f))/0x2+parseInt(_0x1e574d(0x190))/0x3+-parseInt(_0x1e574d(0x18c))/0x4*(parseInt(_0x1e574d(0x14c))/0x5)+parseInt(_0x1e574d(0x17c))/0x6*(parseInt(_0x1e574d(0x1b4))/0x7)+-parseInt(_0x1e574d(0x172))/0x8*(-parseInt(_0x1e574d(0x1ad))/0x9)+parseInt(_0x1e574d(0x194))/0xa*(parseInt(_0x1e574d(0x159))/0xb);if(_0xdddff9===_0x25ce80)break;else _0x49e80a['push'](_0x49e80a['shift']());}catch(_0x1c69f4){_0x49e80a['push'](_0x49e80a['shift']());}}}(_0x11ef,0xe3a9f));var __decorate=this&&this['__decorate']||function(_0x5a4099,_0x271dc3,_0x14b2f4,_0xe02982){const _0x2e34ca=_0x1288;var _0x3d12b3=arguments[_0x2e34ca(0x166)],_0x13b5c9=_0x3d12b3<0x3?_0x271dc3:_0xe02982===null?_0xe02982=Object['getOwnPropertyDescriptor'](_0x271dc3,_0x14b2f4):_0xe02982,_0x48da0e;if(typeof Reflect===_0x2e34ca(0x151)&&typeof Reflect[_0x2e34ca(0x17b)]===_0x2e34ca(0x15a))_0x13b5c9=Reflect['decorate'](_0x5a4099,_0x271dc3,_0x14b2f4,_0xe02982);else{for(var _0x3148f5=_0x5a4099[_0x2e34ca(0x166)]-0x1;_0x3148f5>=0x0;_0x3148f5--)if(_0x48da0e=_0x5a4099[_0x3148f5])_0x13b5c9=(_0x3d12b3<0x3?_0x48da0e(_0x13b5c9):_0x3d12b3>0x3?_0x48da0e(_0x271dc3,_0x14b2f4,_0x13b5c9):_0x48da0e(_0x271dc3,_0x14b2f4))||_0x13b5c9;}return _0x3d12b3>0x3&&_0x13b5c9&&Object[_0x2e34ca(0x13b)](_0x271dc3,_0x14b2f4,_0x13b5c9),_0x13b5c9;},__metadata=this&&this[_0x568dd4(0x19a)]||function(_0xe97e2f,_0x5d595a){const _0x4afe22=_0x568dd4;if(typeof Reflect===_0x4afe22(0x151)&&typeof Reflect[_0x4afe22(0x169)]===_0x4afe22(0x15a))return Reflect[_0x4afe22(0x169)](_0xe97e2f,_0x5d595a);},__param=this&&this[_0x568dd4(0x179)]||function(_0x352926,_0x492744){return function(_0x58f057,_0x43bdb5){_0x492744(_0x58f057,_0x43bdb5,_0x352926);};};Object[_0x568dd4(0x13b)](exports,'__esModule',{'value':!![]}),exports['StatisticService']=void 0x0;const balance_constant_1=require(_0x568dd4(0x168)),date_1=require('../../common/utils/date'),common_1=require(_0x568dd4(0x13d)),typeorm_1=require(_0x568dd4(0x170)),axios_1=require('axios'),typeorm_2=require('typeorm'),chatLog_entity_1=require(_0x568dd4(0x182)),config_entity_1=require(_0x568dd4(0x13e)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),order_entity_1=require('../order/order.entity'),user_entity_1=require(_0x568dd4(0x189));let StatisticService=class StatisticService{constructor(_0x5beb16,_0x2c4c22,_0xa085cb,_0x4c5ebc,_0x1cd540){const _0x415a2d=_0x568dd4;this[_0x415a2d(0x1a0)]=_0x5beb16,this[_0x415a2d(0x152)]=_0x2c4c22,this[_0x415a2d(0x174)]=_0xa085cb,this[_0x415a2d(0x13f)]=_0x4c5ebc,this['globalConfigService']=_0x1cd540;}async[_0x568dd4(0x198)](){const _0x40247c=_0x568dd4,_0x59ba46=await this['countUsers'](),_0x2cc422=await this[_0x40247c(0x147)](),_0x563ea1=await this[_0x40247c(0x19b)](),_0x1770c6=await this[_0x40247c(0x195)](),_0x566896=await this[_0x40247c(0x17d)](),_0x18e8f3=await this[_0x40247c(0x193)](),_0x2966f6=await this['countOrders'](),_0x509c01=await this[_0x40247c(0x176)]();return{'userCount':_0x59ba46,'newUserCount':_0x2cc422,'chatCount':_0x563ea1,'newChatCount':_0x1770c6,'drawCount':_0x566896,'newDrawCount':_0x18e8f3,'orderCount':_0x2966f6,'newOrderCount':_0x509c01};}async[_0x568dd4(0x167)]({days:days=0x7}){const _0x2c64ae=_0x568dd4,_0x5d6b79=await this[_0x2c64ae(0x187)](days),_0x48a6f1=await this[_0x2c64ae(0x1ae)](days);return{'date':_0x5d6b79['map'](_0xb53149=>_0xb53149[_0x2c64ae(0x155)]),'chat':_0x5d6b79['map'](_0x1990b7=>_0x1990b7[_0x2c64ae(0x1a3)]),'draw':_0x48a6f1[_0x2c64ae(0x150)]((_0x128016,_0x5d720a)=>{const _0x43a410=_0x2c64ae;return _0x128016[_0x43a410(0x1a3)];})};}async[_0x568dd4(0x1b2)]({days:days=0x7}){const _0x3c063a=_0x568dd4,_0x2bd6ee=await this[_0x3c063a(0x180)](days);return _0x2bd6ee;}async[_0x568dd4(0x1a4)](){const _0x448f78=_0x568dd4,_0x28b1cd=await this[_0x448f78(0x1a0)][_0x448f78(0x178)]();return _0x28b1cd;}async['countNewUsersToday'](){const _0x54de02=_0x568dd4,_0x39d154=new Date();_0x39d154[_0x54de02(0x160)](0x0,0x0,0x0,0x0);const _0x202930=new Date(_0x39d154[_0x54de02(0x14d)]()+0x18*0x3c*0x3c*0x3e8),_0x13d145=this[_0x54de02(0x1a0)][_0x54de02(0x1ab)](_0x54de02(0x16c)),_0x5d62a6=await _0x13d145[_0x54de02(0x173)]('user.createdAt\x20>=\x20:today',{'today':_0x39d154})[_0x54de02(0x199)]('user.createdAt\x20<\x20:tomorrow',{'tomorrow':_0x202930})[_0x54de02(0x16d)]();return _0x5d62a6;}async[_0x568dd4(0x19b)](){const _0x25e4d0=_0x568dd4,_0x462464=await this[_0x25e4d0(0x152)]['count']({'where':{'type':balance_constant_1[_0x25e4d0(0x149)]['NORMAL_CHAT']}});return _0x462464;}async[_0x568dd4(0x195)](){const _0x282f2b=_0x568dd4,_0xe54301=new Date();_0xe54301[_0x282f2b(0x160)](0x0,0x0,0x0,0x0);const _0x1bc7c3=new Date(_0xe54301[_0x282f2b(0x14d)]()+0x18*0x3c*0x3c*0x3e8),_0x4333c1=this[_0x282f2b(0x152)][_0x282f2b(0x1ab)](_0x282f2b(0x15e)),_0x4171ff=await _0x4333c1[_0x282f2b(0x173)](_0x282f2b(0x181),{'type':balance_constant_1[_0x282f2b(0x149)][_0x282f2b(0x16b)]})[_0x282f2b(0x199)](_0x282f2b(0x15d),{'today':_0xe54301})[_0x282f2b(0x199)](_0x282f2b(0x1b3),{'tomorrow':_0x1bc7c3})['getCount']();return _0x4171ff;}async[_0x568dd4(0x17d)](){const _0x2e73df=_0x568dd4,_0x2bf96e=await this[_0x2e73df(0x152)][_0x2e73df(0x178)]({'where':{'type':balance_constant_1[_0x2e73df(0x149)][_0x2e73df(0x156)]}});return _0x2bf96e;}async[_0x568dd4(0x193)](){const _0x13f4a9=_0x568dd4,_0x2743db=new Date();_0x2743db[_0x13f4a9(0x160)](0x0,0x0,0x0,0x0);const _0x2c7b69=new Date(_0x2743db[_0x13f4a9(0x14d)]()+0x18*0x3c*0x3c*0x3e8),_0x43054f=this[_0x13f4a9(0x152)][_0x13f4a9(0x1ab)](_0x13f4a9(0x15e)),_0xbf9177=await _0x43054f[_0x13f4a9(0x173)](_0x13f4a9(0x181),{'type':balance_constant_1[_0x13f4a9(0x149)][_0x13f4a9(0x156)]})[_0x13f4a9(0x199)](_0x13f4a9(0x15d),{'today':_0x2743db})[_0x13f4a9(0x199)](_0x13f4a9(0x1b3),{'tomorrow':_0x2c7b69})[_0x13f4a9(0x16d)]();return _0xbf9177;}async[_0x568dd4(0x187)](_0x136d76){const _0x42123c=_0x568dd4;var _0x3f9b90,_0xc517cf;const _0x19b49c=new Date();_0x19b49c['setHours'](0x0,0x0,0x0,0x0);const _0x6674b4=new Date(_0x19b49c[_0x42123c(0x14d)]()-(_0x136d76-0x1)*0x18*0x3c*0x3c*0x3e8),_0x49d5fe=this[_0x42123c(0x152)][_0x42123c(0x1ab)](_0x42123c(0x1ba)),_0x44d8b3=await _0x49d5fe[_0x42123c(0x15b)](_0x42123c(0x163))[_0x42123c(0x173)]('chatlog.type\x20=\x20:type',{'type':balance_constant_1[_0x42123c(0x149)][_0x42123c(0x16b)]})[_0x42123c(0x199)](_0x42123c(0x141),{'startDate':_0x6674b4})[_0x42123c(0x196)](_0x42123c(0x155))[_0x42123c(0x19d)]('date')[_0x42123c(0x184)](),_0x314feb=[],_0x460343=_0x6674b4;for(let _0x32df86=0x0;_0x32df86<_0x136d76;_0x32df86++){const _0x18fe32=(0x0,date_1[_0x42123c(0x1ac)])(new Date(_0x460343),'M.DD'),_0xde4bd9=(_0xc517cf=(_0x3f9b90=_0x44d8b3[_0x42123c(0x18d)](_0x1a9448=>(0x0,date_1[_0x42123c(0x1ac)])(new Date(_0x1a9448[_0x42123c(0x155)]),'M.DD')===_0x18fe32))===null||_0x3f9b90===void 0x0?void 0x0:_0x3f9b90[_0x42123c(0x178)])!==null&&_0xc517cf!==void 0x0?_0xc517cf:0x0;_0xde4bd9>0x0?_0x314feb[_0x42123c(0x158)]({'date':_0x18fe32,'value':Number(_0xde4bd9)}):_0x314feb[_0x42123c(0x158)]({'date':_0x18fe32,'value':0x0}),_0x460343[_0x42123c(0x161)](_0x460343[_0x42123c(0x14f)]()+0x1);}return _0x314feb;}async[_0x568dd4(0x1ae)](_0x3f0223){const _0x345da6=_0x568dd4;var _0x292f01,_0x277894;const _0x22f639=new Date();_0x22f639[_0x345da6(0x160)](0x0,0x0,0x0,0x0);const _0x5441fe=new Date(_0x22f639[_0x345da6(0x14d)]()-(_0x3f0223-0x1)*0x18*0x3c*0x3c*0x3e8),_0x518385=this[_0x345da6(0x152)][_0x345da6(0x1ab)]('chatlog'),_0x38f9d1=await _0x518385['select'](_0x345da6(0x163))[_0x345da6(0x173)]('chatlog.type\x20=\x20:type',{'type':balance_constant_1[_0x345da6(0x149)][_0x345da6(0x156)]})['andWhere'](_0x345da6(0x141),{'startDate':_0x5441fe})[_0x345da6(0x196)](_0x345da6(0x155))[_0x345da6(0x19d)]('date')['getRawMany'](),_0x5c0a9b=[],_0x33ff6e=_0x5441fe;for(let _0x5d1d3d=0x0;_0x5d1d3d<_0x3f0223;_0x5d1d3d++){const _0x54d85d=(0x0,date_1['formatDate'])(new Date(_0x33ff6e),_0x345da6(0x177)),_0x22b523=(_0x277894=(_0x292f01=_0x38f9d1[_0x345da6(0x18d)](_0x35965f=>(0x0,date_1[_0x345da6(0x1ac)])(new Date(_0x35965f['date']),'M.DD')===_0x54d85d))===null||_0x292f01===void 0x0?void 0x0:_0x292f01[_0x345da6(0x178)])!==null&&_0x277894!==void 0x0?_0x277894:0x0;_0x22b523>0x0?_0x5c0a9b['push']({'date':_0x54d85d,'value':Number(_0x22b523)}):_0x5c0a9b[_0x345da6(0x158)]({'date':_0x54d85d,'value':0x0}),_0x33ff6e[_0x345da6(0x161)](_0x33ff6e[_0x345da6(0x14f)]()+0x1);}return _0x5c0a9b;}async[_0x568dd4(0x1b1)](_0x356c6a,_0x284136,_0xd26736){const _0x4d8f42=_0x568dd4,_0x485f9e=_0x4d8f42(0x171)+_0xd26736+_0x4d8f42(0x144)+_0x356c6a+_0x4d8f42(0x1a7)+_0x284136;common_1[_0x4d8f42(0x143)][_0x4d8f42(0x164)](_0x4d8f42(0x1bb),_0x485f9e);try{const _0x474e13=await axios_1[_0x4d8f42(0x140)][_0x4d8f42(0x13c)](_0x485f9e);if(_0x474e13[_0x4d8f42(0x14a)]===0xc8&&_0x474e13[_0x4d8f42(0x183)][_0x4d8f42(0x17f)])return{'accessToken':_0x474e13[_0x4d8f42(0x183)][_0x4d8f42(0x17f)],'refreshToken':_0x474e13[_0x4d8f42(0x183)][_0x4d8f42(0x1a2)]};else throw new Error(_0x4d8f42(0x157));}catch(_0x693deb){common_1[_0x4d8f42(0x143)][_0x4d8f42(0x17a)](_0x4d8f42(0x142),{'message':_0x693deb[_0x4d8f42(0x18f)],'stack':_0x693deb[_0x4d8f42(0x18b)],'response':_0x693deb[_0x4d8f42(0x148)]?_0x693deb[_0x4d8f42(0x148)]['data']:_0x4d8f42(0x175)});throw new common_1['HttpException'](_0x4d8f42(0x142),common_1[_0x4d8f42(0x192)]['BAD_REQUEST']);}}async['updateAccessTokenInDatabase'](_0x81b899,_0x2aaa0a,_0x4d1826){const _0x466332=_0x568dd4;await _0x4d1826[_0x466332(0x16f)]({'configKey':_0x466332(0x146)},{'configVal':_0x81b899}),await _0x4d1826[_0x466332(0x16f)]({'configKey':_0x466332(0x1a9)},{'configVal':_0x2aaa0a});}async[_0x568dd4(0x180)](_0xd508b8){const _0x361b1e=_0x568dd4,_0x5304ff=(0x0,date_1[_0x361b1e(0x1ac)])(new Date(),'YYYYMMDD'),_0x1f54a6=(0x0,date_1['formatDate'])(new Date(Date[_0x361b1e(0x197)]()-Number(_0xd508b8-0x1)*0x18*0x3c*0x3c*0x3e8),_0x361b1e(0x1b9)),_0xf7d83c=_0x361b1e(0x1a5),_0x515b6b=_0x361b1e(0x186),{baiduToken:_0x5e1a67,baiduSiteId:_0x32910e,baiduApiKey:_0x5e4726,baiduSecretKey:_0x28ca10,baiduRefreshToken:_0x498aac}=await this[_0x361b1e(0x1a8)][_0x361b1e(0x16e)]([_0x361b1e(0x146),_0x361b1e(0x1b8),_0x361b1e(0x18a),'baiduSecretKey','baiduRefreshToken']);if(!_0x5e4726||!_0x32910e||!_0x498aac||!_0x28ca10)return[];let _0x50af18=_0x5e1a67,_0x4e4cba,_0xfdaf1;const _0x4fc862=async _0x562db1=>{const _0x5d32bb=_0x361b1e;_0xfdaf1=_0x5d32bb(0x1b6)+_0x562db1+_0x5d32bb(0x1a1)+_0x32910e+_0x5d32bb(0x145)+_0x515b6b+_0x5d32bb(0x1b0)+_0x1f54a6+_0x5d32bb(0x19f)+_0x5304ff+_0x5d32bb(0x16a)+_0xf7d83c;try{return await axios_1['default'][_0x5d32bb(0x13c)](_0xfdaf1);}catch(_0xcb3402){return{'data':{'error_code':0x6f,'message':_0x5d32bb(0x191)}};}};_0x4e4cba=await _0x4fc862(_0x50af18);if(_0x4e4cba['data'][_0x361b1e(0x1b7)]===0x6f||!_0x5e1a67){const {accessToken:_0x18069f,refreshToken:_0x12e7ed}=await this[_0x361b1e(0x1b1)](_0x5e4726,_0x28ca10,_0x498aac);_0x50af18=_0x18069f,await this[_0x361b1e(0x1af)](_0x50af18,_0x12e7ed,this['configEntity']),_0x4e4cba=await _0x4fc862(_0x50af18);}const {error_code:_0x29fdf0,message:_0x3a39bb}=_0x4e4cba[_0x361b1e(0x183)];if(_0x29fdf0&&_0x29fdf0!==0xc8)throw new common_1[(_0x361b1e(0x153))](_0x3a39bb||_0x361b1e(0x18e),common_1['HttpStatus'][_0x361b1e(0x1b5)]);return _0x4e4cba[_0x361b1e(0x183)][_0x361b1e(0x188)];}async[_0x568dd4(0x15c)](){const _0x339f9c=_0x568dd4,_0x51deae=await this[_0x339f9c(0x13f)]['count']();return _0x51deae;}async['countNewOrdersToday'](){const _0x5b231f=_0x568dd4,_0x3518ed=new Date();_0x3518ed['setHours'](0x0,0x0,0x0,0x0);const _0x3b8687=new Date(_0x3518ed['getTime']()+0x18*0x3c*0x3c*0x3e8),_0xa6c70c=this[_0x5b231f(0x13f)]['createQueryBuilder'](_0x5b231f(0x17e)),_0x3fb069=await _0xa6c70c[_0x5b231f(0x173)](_0x5b231f(0x19e),{'today':_0x3518ed})[_0x5b231f(0x199)](_0x5b231f(0x19c),{'tomorrow':_0x3b8687})[_0x5b231f(0x16d)]();return _0x3fb069;}};function _0x1288(_0x2f3d76,_0x2619d3){const _0x11efe9=_0x11ef();return _0x1288=function(_0x1288f0,_0x5ab73c){_0x1288f0=_0x1288f0-0x13b;let _0xe94b55=_0x11efe9[_0x1288f0];return _0xe94b55;},_0x1288(_0x2f3d76,_0x2619d3);}function _0x11ef(){const _0x2b8901=['configEntity','No\x20response\x20data','countNewOrdersToday','M.DD','count','__param','error','decorate','1105044ZLkJpz','countDraws','order','access_token','getBaiduStatistics','chatLog.type\x20=\x20:type','../chatLog/chatLog.entity','data','getRawMany','Repository','overview/getTimeTrendRpt','countChatsByTimeRange','result','../user/user.entity','baiduApiKey','stack','54484sRNQMl','find','获取百度统计数据失败','message','4299129soEOoI','Access\x20token\x20invalid\x20or\x20no\x20longer\x20valid','HttpStatus','countNewDrawsToday','2810OTmiyw','countNewChatsToday','groupBy','now','getBaseStatistic','andWhere','__metadata','countChats','order.createdAt\x20<\x20:tomorrow','orderBy','order.createdAt\x20>=\x20:today','&end_date=','userEntity','&site_id=','refresh_token','value','countUsers','pv_count,visitor_count,ip_count,bounce_ratio,avg_visit_time','ConfigEntity','&client_secret=','globalConfigService','baiduRefreshToken','1016933LQOmsN','createQueryBuilder','formatDate','3146931hcoRGV','countDrawsByTimeRange','updateAccessTokenInDatabase','&start_date=','getNewAccessToken','getBaiduVisit','chatLog.createdAt\x20<\x20:tomorrow','49OkuDfm','BAD_REQUEST','https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=','error_code','baiduSiteId','YYYYMMDD','chatlog','获取新\x20accessToken','defineProperty','get','@nestjs/common','../globalConfig/config.entity','orderEntity','default','chatlog.createdAt\x20>=\x20:startDate','获取新\x20accessToken\x20失败','Logger','&client_id=','&method=','baiduToken','countNewUsersToday','response','ChatType','status','GlobalConfigService','575xknYmX','getTime','InjectRepository','getDate','map','object','chatLogEntity','HttpException','Injectable','date','PAINT','Failed\x20to\x20get\x20new\x20access\x20token','push','67045uXqCKW','function','select','countOrders','chatLog.createdAt\x20>=\x20:today','chatLog','3236830hjMzOz','setHours','setDate','ChatLogEntity','DATE(chatlog.createdAt)\x20as\x20date,\x20COUNT(*)\x20as\x20count','log','OrderEntity','length','getChatStatistic','../../common/constants/balance.constant','metadata','&metrics=','NORMAL_CHAT','user','getCount','getConfigs','update','@nestjs/typeorm','http://openapi.baidu.com/oauth/2.0/token?grant_type=refresh_token&refresh_token=','16KMtitR','where'];_0x11ef=function(){return _0x2b8901;};return _0x11ef();}StatisticService=__decorate([(0x0,common_1[_0x568dd4(0x154)])(),__param(0x0,(0x0,typeorm_1[_0x568dd4(0x14e)])(user_entity_1['UserEntity'])),__param(0x1,(0x0,typeorm_1[_0x568dd4(0x14e)])(chatLog_entity_1[_0x568dd4(0x162)])),__param(0x2,(0x0,typeorm_1[_0x568dd4(0x14e)])(config_entity_1[_0x568dd4(0x1a6)])),__param(0x3,(0x0,typeorm_1[_0x568dd4(0x14e)])(order_entity_1[_0x568dd4(0x165)])),__metadata('design:paramtypes',[typeorm_2['Repository'],typeorm_2[_0x568dd4(0x185)],typeorm_2[_0x568dd4(0x185)],typeorm_2[_0x568dd4(0x185)],globalConfig_service_1[_0x568dd4(0x14b)]])],StatisticService),exports['StatisticService']=StatisticService;