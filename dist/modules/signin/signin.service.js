'use strict';const _0x5a749a=_0x5b81;(function(_0x4870e0,_0x12acdc){const _0xcb24c8=_0x5b81,_0x164965=_0x4870e0();while(!![]){try{const _0x23fb49=-parseInt(_0xcb24c8(0x17f))/0x1+parseInt(_0xcb24c8(0x172))/0x2*(parseInt(_0xcb24c8(0x180))/0x3)+-parseInt(_0xcb24c8(0x17b))/0x4*(-parseInt(_0xcb24c8(0x19c))/0x5)+parseInt(_0xcb24c8(0x19a))/0x6*(parseInt(_0xcb24c8(0x1a3))/0x7)+parseInt(_0xcb24c8(0x187))/0x8*(parseInt(_0xcb24c8(0x182))/0x9)+-parseInt(_0xcb24c8(0x163))/0xa+-parseInt(_0xcb24c8(0x192))/0xb*(parseInt(_0xcb24c8(0x175))/0xc);if(_0x23fb49===_0x12acdc)break;else _0x164965['push'](_0x164965['shift']());}catch(_0x1bc34f){_0x164965['push'](_0x164965['shift']());}}}(_0x5c31,0x3f290));function _0x5c31(){const _0x5b20dc=['572genvjm','default','findOne','../../common/utils/date','242618UTTFAc','1137TFKoGI','YYYY-MM-DD\x20HH:mm:ss','9foAEVp','setDate','昨天签到了、今天是连续签到！','sign','UserBalanceService','2568536MXioMc','subtract','__decorate','defineProperty','__param','push','BAD_REQUEST','debug','userBalanceService','globalConfigService','SIGN_IN','33XQKnDg','HttpException','userEntity','SigninService','Logger','decorate','../user/user.entity','signinEntity','6eBZGGq','design:paramtypes','3275WhKPmG','getRawMany','昨天没签到、今天重置天数！','@nestjs/typeorm','今日已签到、改天再来吧!.','./../globalConfig/globalConfig.service','month','3521231EMDgmk','__metadata','@nestjs/common','andWhere','UserEntity','getSignatureGiftConfig','../../common/constants/balance.constant','update','signin.signInTime\x20<=\x20:lastDay','day','signin.signInTime\x20>=\x20:firstDay','metadata','function','用户不存在','select','signin','format','__esModule','2133120BrXapR','InjectRepository','length','./signIn.entity','startOf','typeorm','object','GlobalConfigService','Repository','getDate','YYYY-MM-DD','获取签到数据失败！','find','log','signInDate','2338zuoMRp','user','HttpStatus','2584728bfpGgB','Injectable','getOwnPropertyDescriptor','RechargeType','save','signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned'];_0x5c31=function(){return _0x5b20dc;};return _0x5c31();}var __decorate=this&&this[_0x5a749a(0x189)]||function(_0xcc19a6,_0x8014e4,_0x24019b,_0x1466d0){const _0xbb9044=_0x5a749a;var _0x5a62c9=arguments[_0xbb9044(0x165)],_0x3f7123=_0x5a62c9<0x3?_0x8014e4:_0x1466d0===null?_0x1466d0=Object[_0xbb9044(0x177)](_0x8014e4,_0x24019b):_0x1466d0,_0x56411c;if(typeof Reflect===_0xbb9044(0x169)&&typeof Reflect[_0xbb9044(0x197)]===_0xbb9044(0x1af))_0x3f7123=Reflect['decorate'](_0xcc19a6,_0x8014e4,_0x24019b,_0x1466d0);else{for(var _0x1c063a=_0xcc19a6[_0xbb9044(0x165)]-0x1;_0x1c063a>=0x0;_0x1c063a--)if(_0x56411c=_0xcc19a6[_0x1c063a])_0x3f7123=(_0x5a62c9<0x3?_0x56411c(_0x3f7123):_0x5a62c9>0x3?_0x56411c(_0x8014e4,_0x24019b,_0x3f7123):_0x56411c(_0x8014e4,_0x24019b))||_0x3f7123;}return _0x5a62c9>0x3&&_0x3f7123&&Object[_0xbb9044(0x18a)](_0x8014e4,_0x24019b,_0x3f7123),_0x3f7123;},__metadata=this&&this[_0x5a749a(0x1a4)]||function(_0x46772a,_0x4cf5bd){const _0x22c96f=_0x5a749a;if(typeof Reflect==='object'&&typeof Reflect[_0x22c96f(0x1ae)]===_0x22c96f(0x1af))return Reflect[_0x22c96f(0x1ae)](_0x46772a,_0x4cf5bd);},__param=this&&this[_0x5a749a(0x18b)]||function(_0xa908dc,_0x1ffc69){return function(_0x3c86d7,_0x310ef5){_0x1ffc69(_0x3c86d7,_0x310ef5,_0xa908dc);};};Object[_0x5a749a(0x18a)](exports,_0x5a749a(0x1b4),{'value':!![]}),exports['SigninService']=void 0x0;function _0x5b81(_0x13b025,_0x2e26cd){const _0x5c3138=_0x5c31();return _0x5b81=function(_0x5b81c4,_0x376619){_0x5b81c4=_0x5b81c4-0x163;let _0x3e6e62=_0x5c3138[_0x5b81c4];return _0x3e6e62;},_0x5b81(_0x13b025,_0x2e26cd);}const globalConfig_service_1=require(_0x5a749a(0x1a1)),userBalance_service_1=require('./../userBalance/userBalance.service'),common_1=require(_0x5a749a(0x1a5)),signIn_entity_1=require(_0x5a749a(0x166)),typeorm_1=require(_0x5a749a(0x19f)),typeorm_2=require(_0x5a749a(0x168)),date_1=require(_0x5a749a(0x17e)),user_entity_1=require(_0x5a749a(0x198)),balance_constant_1=require(_0x5a749a(0x1a9));let SigninService=class SigninService{constructor(_0x2bb286,_0x30b204,_0x158521,_0x557e91){const _0x2b04cc=_0x5a749a;this[_0x2b04cc(0x199)]=_0x2bb286,this[_0x2b04cc(0x194)]=_0x30b204,this[_0x2b04cc(0x18f)]=_0x158521,this[_0x2b04cc(0x190)]=_0x557e91;}async[_0x5a749a(0x185)](_0x1d2711){const _0x11cb73=_0x5a749a,{id:_0x19ac8d}=_0x1d2711['user'],_0x256700=(0x0,date_1['default'])(new Date())['format'](_0x11cb73(0x16d)),_0x38ecff=await this[_0x11cb73(0x199)][_0x11cb73(0x17d)]({'where':{'userId':_0x19ac8d,'signInDate':_0x256700}});if(_0x38ecff)throw new common_1[(_0x11cb73(0x193))](_0x11cb73(0x1a0),common_1['HttpStatus'][_0x11cb73(0x18d)]);const {model3Count:_0x4169d5,model4Count:_0x54b00a,drawMjCount:_0x327152}=await this[_0x11cb73(0x190)][_0x11cb73(0x1a8)]();await this['signinEntity'][_0x11cb73(0x179)]({'userId':_0x19ac8d,'signInTime':new Date(),'signInDate':_0x256700,'isSigned':!![]}),await this[_0x11cb73(0x18f)]['addBalanceToUser'](_0x19ac8d,{'model3Count':_0x4169d5,'model4Count':_0x54b00a,'drawMjCount':_0x327152}),await this[_0x11cb73(0x18f)]['saveRecordRechargeLog']({'userId':_0x19ac8d,'rechargeType':balance_constant_1[_0x11cb73(0x178)][_0x11cb73(0x191)],'model3Count':_0x4169d5,'model4Count':_0x54b00a,'drawMjCount':_0x327152});const _0x4c3d5e=(0x0,date_1[_0x11cb73(0x17c)])(new Date())[_0x11cb73(0x188)](0x1,_0x11cb73(0x1ac))['format'](_0x11cb73(0x16d)),_0x1a4369=await this[_0x11cb73(0x199)]['findOne']({'where':{'userId':_0x19ac8d,'signInDate':_0x4c3d5e}});if(_0x1a4369){common_1['Logger'][_0x11cb73(0x18e)]('用户'+_0x19ac8d+_0x11cb73(0x184),_0x11cb73(0x195));const _0x1d8ec0=await this[_0x11cb73(0x194)][_0x11cb73(0x17d)]({'where':{'id':_0x19ac8d}});if(!_0x1d8ec0)throw new common_1[(_0x11cb73(0x193))](_0x11cb73(0x1b0),common_1[_0x11cb73(0x174)][_0x11cb73(0x18d)]);const {consecutiveDays:consecutiveDays=0x0}=_0x1d8ec0;await this[_0x11cb73(0x194)][_0x11cb73(0x1aa)]({'id':_0x19ac8d},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x11cb73(0x196)][_0x11cb73(0x18e)]('用户'+_0x19ac8d+_0x11cb73(0x19e),_0x11cb73(0x195)),await this['userEntity']['update']({'id':_0x19ac8d},{'consecutiveDays':0x1});return'Sign\x20in\x20successful.';}async['getSigninLog'](_0x4d80ef){const _0x17ad50=_0x5a749a;try{const {id:_0x159d8e}=_0x4d80ef[_0x17ad50(0x173)],_0x377f58=(0x0,date_1[_0x17ad50(0x17c)])()[_0x17ad50(0x167)](_0x17ad50(0x1a2))[_0x17ad50(0x1b3)](_0x17ad50(0x181)),_0x6f28d8=(0x0,date_1['default'])()['endOf'](_0x17ad50(0x1a2))[_0x17ad50(0x1b3)](_0x17ad50(0x181)),_0x43163e=this['signinEntity']['createQueryBuilder'](_0x17ad50(0x1b2)),_0x116363=await _0x43163e[_0x17ad50(0x1b1)](_0x17ad50(0x17a))[_0x17ad50(0x1a6)]('signin.userId\x20=\x20:userId',{'userId':_0x4d80ef[_0x17ad50(0x173)]['id']})[_0x17ad50(0x1a6)](_0x17ad50(0x1ad),{'firstDay':_0x377f58})[_0x17ad50(0x1a6)](_0x17ad50(0x1ab),{'lastDay':_0x6f28d8})[_0x17ad50(0x19d)](),_0x50f684=new Date(_0x377f58),_0x2d4e17=new Date(_0x6f28d8),_0x2a9ee7=[],_0x5023a2=new Date(_0x50f684);while(_0x5023a2<=_0x2d4e17){_0x2a9ee7[_0x17ad50(0x18c)]((0x0,date_1[_0x17ad50(0x17c)])(new Date(_0x5023a2))[_0x17ad50(0x1b3)](_0x17ad50(0x16d))),_0x5023a2[_0x17ad50(0x183)](_0x5023a2[_0x17ad50(0x16c)]()+0x1);}const _0x397fb9=[];for(const _0xa18dc6 of _0x2a9ee7){const _0x2075c3=_0x116363[_0x17ad50(0x16f)](_0xc1786a=>_0xc1786a[_0x17ad50(0x171)]===_0xa18dc6);!_0x2075c3?_0x397fb9['push']({'signInDate':_0xa18dc6,'isSigned':![]}):(_0x2075c3['isSigned']=!![],_0x397fb9[_0x17ad50(0x18c)](_0x2075c3));}return _0x397fb9;}catch(_0x19071b){console[_0x17ad50(0x170)]('error:\x20',_0x19071b);throw new common_1[(_0x17ad50(0x193))](_0x17ad50(0x16e),common_1[_0x17ad50(0x174)][_0x17ad50(0x18d)]);}}};SigninService=__decorate([(0x0,common_1[_0x5a749a(0x176)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(signIn_entity_1['SigninEntity'])),__param(0x1,(0x0,typeorm_1[_0x5a749a(0x164)])(user_entity_1[_0x5a749a(0x1a7)])),__metadata(_0x5a749a(0x19b),[typeorm_2['Repository'],typeorm_2[_0x5a749a(0x16b)],userBalance_service_1[_0x5a749a(0x186)],globalConfig_service_1[_0x5a749a(0x16a)]])],SigninService),exports[_0x5a749a(0x195)]=SigninService;