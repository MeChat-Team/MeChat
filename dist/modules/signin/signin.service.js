'use strict';const _0x594d4f=_0x2bdb;(function(_0x7e7181,_0x46a0b5){const _0x2eba45=_0x2bdb,_0x555678=_0x7e7181();while(!![]){try{const _0x56f9c1=-parseInt(_0x2eba45(0x135))/0x1*(-parseInt(_0x2eba45(0x12b))/0x2)+-parseInt(_0x2eba45(0x125))/0x3+-parseInt(_0x2eba45(0x168))/0x4+-parseInt(_0x2eba45(0x139))/0x5*(parseInt(_0x2eba45(0x12c))/0x6)+parseInt(_0x2eba45(0x152))/0x7*(-parseInt(_0x2eba45(0x13d))/0x8)+-parseInt(_0x2eba45(0x122))/0x9*(-parseInt(_0x2eba45(0x159))/0xa)+parseInt(_0x2eba45(0x14c))/0xb*(parseInt(_0x2eba45(0x13c))/0xc);if(_0x56f9c1===_0x46a0b5)break;else _0x555678['push'](_0x555678['shift']());}catch(_0x33c142){_0x555678['push'](_0x555678['shift']());}}}(_0x58e3,0x2b0f9));var __decorate=this&&this['__decorate']||function(_0x4a7a2c,_0x2dec8b,_0x3430fa,_0x1fbf33){const _0x1475c8=_0x2bdb;var _0x211408=arguments[_0x1475c8(0x15b)],_0x2ffdb7=_0x211408<0x3?_0x2dec8b:_0x1fbf33===null?_0x1fbf33=Object[_0x1475c8(0x132)](_0x2dec8b,_0x3430fa):_0x1fbf33,_0x498e9a;if(typeof Reflect===_0x1475c8(0x144)&&typeof Reflect[_0x1475c8(0x11f)]===_0x1475c8(0x145))_0x2ffdb7=Reflect[_0x1475c8(0x11f)](_0x4a7a2c,_0x2dec8b,_0x3430fa,_0x1fbf33);else{for(var _0x373e00=_0x4a7a2c['length']-0x1;_0x373e00>=0x0;_0x373e00--)if(_0x498e9a=_0x4a7a2c[_0x373e00])_0x2ffdb7=(_0x211408<0x3?_0x498e9a(_0x2ffdb7):_0x211408>0x3?_0x498e9a(_0x2dec8b,_0x3430fa,_0x2ffdb7):_0x498e9a(_0x2dec8b,_0x3430fa))||_0x2ffdb7;}return _0x211408>0x3&&_0x2ffdb7&&Object['defineProperty'](_0x2dec8b,_0x3430fa,_0x2ffdb7),_0x2ffdb7;},__metadata=this&&this[_0x594d4f(0x13e)]||function(_0x58fcd4,_0x346dc0){const _0x24697b=_0x594d4f;if(typeof Reflect===_0x24697b(0x144)&&typeof Reflect[_0x24697b(0x15a)]===_0x24697b(0x145))return Reflect[_0x24697b(0x15a)](_0x58fcd4,_0x346dc0);},__param=this&&this[_0x594d4f(0x14a)]||function(_0x451a74,_0x8c922b){return function(_0x1a4e7e,_0x7b465d){_0x8c922b(_0x1a4e7e,_0x7b465d,_0x451a74);};};Object[_0x594d4f(0x137)](exports,_0x594d4f(0x161),{'value':!![]}),exports[_0x594d4f(0x134)]=void 0x0;const globalConfig_service_1=require(_0x594d4f(0x164)),userBalance_service_1=require('./../userBalance/userBalance.service'),common_1=require(_0x594d4f(0x12d)),signIn_entity_1=require(_0x594d4f(0x163)),typeorm_1=require(_0x594d4f(0x136)),typeorm_2=require(_0x594d4f(0x14b)),date_1=require(_0x594d4f(0x150)),user_entity_1=require(_0x594d4f(0x129)),balance_constant_1=require(_0x594d4f(0x126));let SigninService=class SigninService{constructor(_0x474ac1,_0x1b73d3,_0x104e22,_0x5a55e1){const _0x4740e2=_0x594d4f;this['signinEntity']=_0x474ac1,this[_0x4740e2(0x131)]=_0x1b73d3,this['userBalanceService']=_0x104e22,this[_0x4740e2(0x143)]=_0x5a55e1;}async[_0x594d4f(0x158)](_0x16a443){const _0x20d4b8=_0x594d4f,{id:_0x5c9cc9}=_0x16a443[_0x20d4b8(0x165)],_0x50ef8d=(0x0,date_1[_0x20d4b8(0x141)])(new Date())[_0x20d4b8(0x14d)]('YYYY-MM-DD'),_0x36c91a=await this[_0x20d4b8(0x121)][_0x20d4b8(0x12f)]({'where':{'userId':_0x5c9cc9,'signInDate':_0x50ef8d}});if(_0x36c91a)throw new common_1[(_0x20d4b8(0x15f))]('今日已签到、改天再来吧!.',common_1[_0x20d4b8(0x124)]['BAD_REQUEST']);const {model3Count:_0x43eb57,model4Count:_0x90e409,drawMjCount:_0x245f8d}=await this[_0x20d4b8(0x143)][_0x20d4b8(0x123)]();await this['signinEntity'][_0x20d4b8(0x166)]({'userId':_0x5c9cc9,'signInTime':new Date(),'signInDate':_0x50ef8d,'isSigned':!![]}),await this[_0x20d4b8(0x154)][_0x20d4b8(0x167)](_0x5c9cc9,{'model3Count':_0x43eb57,'model4Count':_0x90e409,'drawMjCount':_0x245f8d}),await this['userBalanceService'][_0x20d4b8(0x140)]({'userId':_0x5c9cc9,'rechargeType':balance_constant_1[_0x20d4b8(0x11d)][_0x20d4b8(0x157)],'model3Count':_0x43eb57,'model4Count':_0x90e409,'drawMjCount':_0x245f8d});const _0x15efc3=(0x0,date_1[_0x20d4b8(0x141)])(new Date())[_0x20d4b8(0x15c)](0x1,_0x20d4b8(0x133))[_0x20d4b8(0x14d)]('YYYY-MM-DD'),_0x15a711=await this[_0x20d4b8(0x121)][_0x20d4b8(0x12f)]({'where':{'userId':_0x5c9cc9,'signInDate':_0x15efc3}});if(_0x15a711){common_1[_0x20d4b8(0x162)][_0x20d4b8(0x128)]('用户'+_0x5c9cc9+_0x20d4b8(0x130),_0x20d4b8(0x134));const _0x54555a=await this[_0x20d4b8(0x131)][_0x20d4b8(0x12f)]({'where':{'id':_0x5c9cc9}});if(!_0x54555a)throw new common_1[(_0x20d4b8(0x15f))](_0x20d4b8(0x148),common_1[_0x20d4b8(0x124)][_0x20d4b8(0x149)]);const {consecutiveDays:consecutiveDays=0x0}=_0x54555a;await this[_0x20d4b8(0x131)][_0x20d4b8(0x147)]({'id':_0x5c9cc9},{'consecutiveDays':consecutiveDays+0x1});}else common_1['Logger'][_0x20d4b8(0x128)]('用户'+_0x5c9cc9+'昨天没签到、今天重置天数！',_0x20d4b8(0x134)),await this[_0x20d4b8(0x131)][_0x20d4b8(0x147)]({'id':_0x5c9cc9},{'consecutiveDays':0x1});return'Sign\x20in\x20successful.';}async[_0x594d4f(0x14f)](_0x5bdf71){const _0x2dd5ca=_0x594d4f;try{const {id:_0xf13e87}=_0x5bdf71[_0x2dd5ca(0x165)],_0x30bcc3=(0x0,date_1['default'])()[_0x2dd5ca(0x12a)](_0x2dd5ca(0x15e))[_0x2dd5ca(0x14d)](_0x2dd5ca(0x142)),_0x158e87=(0x0,date_1['default'])()[_0x2dd5ca(0x11e)](_0x2dd5ca(0x15e))[_0x2dd5ca(0x14d)](_0x2dd5ca(0x142)),_0x5e41bf=this[_0x2dd5ca(0x121)][_0x2dd5ca(0x13f)]('signin'),_0x1da5b8=await _0x5e41bf[_0x2dd5ca(0x14e)](_0x2dd5ca(0x160))[_0x2dd5ca(0x155)]('signin.userId\x20=\x20:userId',{'userId':_0x5bdf71['user']['id']})[_0x2dd5ca(0x155)](_0x2dd5ca(0x151),{'firstDay':_0x30bcc3})[_0x2dd5ca(0x155)]('signin.signInTime\x20<=\x20:lastDay',{'lastDay':_0x158e87})['getRawMany'](),_0x5981e0=new Date(_0x30bcc3),_0x167647=new Date(_0x158e87),_0xc4addd=[],_0x6fd8e5=new Date(_0x5981e0);while(_0x6fd8e5<=_0x167647){_0xc4addd[_0x2dd5ca(0x138)]((0x0,date_1['default'])(new Date(_0x6fd8e5))[_0x2dd5ca(0x14d)](_0x2dd5ca(0x120))),_0x6fd8e5[_0x2dd5ca(0x146)](_0x6fd8e5[_0x2dd5ca(0x153)]()+0x1);}const _0x679422=[];for(const _0x42868e of _0xc4addd){const _0x3dcd8f=_0x1da5b8[_0x2dd5ca(0x15d)](_0x67b46e=>_0x67b46e['signInDate']===_0x42868e);!_0x3dcd8f?_0x679422['push']({'signInDate':_0x42868e,'isSigned':![]}):(_0x3dcd8f[_0x2dd5ca(0x12e)]=!![],_0x679422['push'](_0x3dcd8f));}return _0x679422;}catch(_0x5bbd94){console['log']('error:\x20',_0x5bbd94);throw new common_1['HttpException'](_0x2dd5ca(0x127),common_1['HttpStatus'][_0x2dd5ca(0x149)]);}}};function _0x2bdb(_0x1a795f,_0xb28cc7){const _0x58e3ef=_0x58e3();return _0x2bdb=function(_0x2bdbab,_0x3701c3){_0x2bdbab=_0x2bdbab-0x11d;let _0x4d5aa0=_0x58e3ef[_0x2bdbab];return _0x4d5aa0;},_0x2bdb(_0x1a795f,_0xb28cc7);}SigninService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x594d4f(0x13b)])(signIn_entity_1['SigninEntity'])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(user_entity_1['UserEntity'])),__metadata(_0x594d4f(0x156),[typeorm_2['Repository'],typeorm_2['Repository'],userBalance_service_1['UserBalanceService'],globalConfig_service_1[_0x594d4f(0x13a)]])],SigninService),exports[_0x594d4f(0x134)]=SigninService;function _0x58e3(){const _0x3e010d=['endOf','decorate','YYYY-MM-DD','signinEntity','48663ohptVY','getSignatureGiftConfig','HttpStatus','53241PVtRAr','../../common/constants/balance.constant','获取签到数据失败！','debug','../user/user.entity','startOf','9986gOBHYB','36dZBTRc','@nestjs/common','isSigned','findOne','昨天签到了、今天是连续签到！','userEntity','getOwnPropertyDescriptor','day','SigninService','15AkWNTa','@nestjs/typeorm','defineProperty','push','282475QvBrJM','GlobalConfigService','InjectRepository','204wlBqDQ','4472wyCYsk','__metadata','createQueryBuilder','saveRecordRechargeLog','default','YYYY-MM-DD\x20HH:mm:ss','globalConfigService','object','function','setDate','update','用户不存在','BAD_REQUEST','__param','typeorm','339856YCbUGJ','format','select','getSigninLog','../../common/utils/date','signin.signInTime\x20>=\x20:firstDay','1512ePrrWR','getDate','userBalanceService','andWhere','design:paramtypes','SIGN_IN','sign','470qvLdCI','metadata','length','subtract','find','month','HttpException','signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned','__esModule','Logger','./signIn.entity','./../globalConfig/globalConfig.service','user','save','addBalanceToUser','801672vBDnDI','RechargeType'];_0x58e3=function(){return _0x3e010d;};return _0x58e3();}