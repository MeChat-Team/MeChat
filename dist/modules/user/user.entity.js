'use strict';var _0xeaede0=_0x122a;(function(_0x48f84c,_0x14b053){var _0x5bce9d=_0x122a,_0xe417aa=_0x48f84c();while(!![]){try{var _0x9b1568=parseInt(_0x5bce9d(0xf7))/0x1*(parseInt(_0x5bce9d(0xda))/0x2)+-parseInt(_0x5bce9d(0xe4))/0x3+-parseInt(_0x5bce9d(0xe0))/0x4+parseInt(_0x5bce9d(0xe3))/0x5+parseInt(_0x5bce9d(0xfd))/0x6*(parseInt(_0x5bce9d(0xd5))/0x7)+parseInt(_0x5bce9d(0xcc))/0x8+-parseInt(_0x5bce9d(0xee))/0x9*(parseInt(_0x5bce9d(0xcf))/0xa);if(_0x9b1568===_0x14b053)break;else _0xe417aa['push'](_0xe417aa['shift']());}catch(_0x57fc65){_0xe417aa['push'](_0xe417aa['shift']());}}}(_0x1fa7,0x9a719));function _0x122a(_0x430a34,_0x5c107d){var _0x1fa728=_0x1fa7();return _0x122a=function(_0x122a7f,_0x3391fb){_0x122a7f=_0x122a7f-0xc3;var _0x31fc4c=_0x1fa728[_0x122a7f];return _0x31fc4c;},_0x122a(_0x430a34,_0x5c107d);}var __decorate=this&&this['__decorate']||function(_0x4463c1,_0x48fabb,_0x558cfc,_0x19341c){var _0x4896cd=_0x122a,_0x40adcb=arguments[_0x4896cd(0xf5)],_0x3f66b4=_0x40adcb<0x3?_0x48fabb:_0x19341c===null?_0x19341c=Object[_0x4896cd(0xed)](_0x48fabb,_0x558cfc):_0x19341c,_0x55a546;if(typeof Reflect===_0x4896cd(0xdc)&&typeof Reflect[_0x4896cd(0xe6)]===_0x4896cd(0xf0))_0x3f66b4=Reflect[_0x4896cd(0xe6)](_0x4463c1,_0x48fabb,_0x558cfc,_0x19341c);else{for(var _0x3a578f=_0x4463c1['length']-0x1;_0x3a578f>=0x0;_0x3a578f--)if(_0x55a546=_0x4463c1[_0x3a578f])_0x3f66b4=(_0x40adcb<0x3?_0x55a546(_0x3f66b4):_0x40adcb>0x3?_0x55a546(_0x48fabb,_0x558cfc,_0x3f66b4):_0x55a546(_0x48fabb,_0x558cfc))||_0x3f66b4;}return _0x40adcb>0x3&&_0x3f66b4&&Object[_0x4896cd(0xf1)](_0x48fabb,_0x558cfc,_0x3f66b4),_0x3f66b4;},__metadata=this&&this[_0xeaede0(0xf2)]||function(_0x3f3fb9,_0x101773){var _0x212b01=_0xeaede0;if(typeof Reflect==='object'&&typeof Reflect[_0x212b01(0xf9)]==='function')return Reflect['metadata'](_0x3f3fb9,_0x101773);};Object[_0xeaede0(0xf1)](exports,_0xeaede0(0xeb),{'value':!![]}),exports['UserEntity']=void 0x0;function _0x1fa7(){var _0x2154a7=['prototype','23dzpqdn','lastLoginIp','metadata','用户密码','用户注册来源','用户签名','27414HGmFYZ','用户邀请码','真实姓名','Column','我是一台基于深度学习和自然语言处理技术的\x20AI\x20机器人，旨在为用户提供高效、精准、个性化的智能服务。','用户角色','BaseEntity','用户状态','violationCount','用户违规记录次数','openId','9091256axHAgD','client','realName','2730KofNkK','UserEntity','用户邮箱','用户填写的别人的邀请码','password','sex','1897RlsGOz','用户连续签到天数','invitedBy','inviteLinkCount','phone','53782YkigZk','viewer','object','身份证号','微信openId','avatar','1590168jeAphi','registerIp','用户手机号','891805GCpRPu','1933374raTPGM','注册IP','decorate','idCard','用户头像','inviteCode','Entity','__esModule','用户邀请链接被点击次数','getOwnPropertyDescriptor','49347sEQTFc','../../common/entity/baseEntity','function','defineProperty','__metadata','design:type','username','length'];_0x1fa7=function(){return _0x2154a7;};return _0x1fa7();}const baseEntity_1=require(_0xeaede0(0xef)),typeorm_1=require('typeorm');let UserEntity=class UserEntity extends baseEntity_1[_0xeaede0(0xc7)]{};__decorate([(0x0,typeorm_1['Column'])({'length':0xc,'comment':'用户昵称'}),__metadata(_0xeaede0(0xf3),String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xf4),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'comment':_0xeaede0(0xfa),'nullable':!![]}),__metadata(_0xeaede0(0xf3),String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xd3),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'default':0x0,'comment':_0xeaede0(0xc8)}),__metadata(_0xeaede0(0xf3),Number)],UserEntity['prototype'],'status',void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'default':0x1,'comment':'用户性别'}),__metadata('design:type',Number)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xd4),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'unique':!![],'comment':_0xeaede0(0xd1)}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],'email',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x40,'nullable':!![],'comment':_0xeaede0(0xe2)}),__metadata(_0xeaede0(0xf3),String)],UserEntity['prototype'],_0xeaede0(0xd9),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x12c,'nullable':!![],'default':'','comment':_0xeaede0(0xe8)}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xdf),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x12c,'nullable':!![],'default':_0xeaede0(0xc5),'comment':_0xeaede0(0xfc)}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],'sign',void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'default':'','comment':_0xeaede0(0xe5),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xe1),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'default':'','comment':'最后一次登录IP','nullable':!![]}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xf8),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0xa,'default':'','comment':_0xeaede0(0xfe)}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xe9),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0xa,'default':'','comment':_0xeaede0(0xd2)}),__metadata(_0xeaede0(0xf3),String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xd7),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0xa,'default':_0xeaede0(0xdb),'comment':_0xeaede0(0xc6)}),__metadata(_0xeaede0(0xf3),String)],UserEntity['prototype'],'role',void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'default':'','comment':_0xeaede0(0xde),'nullable':!![]}),__metadata(_0xeaede0(0xf3),String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xcb),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'length':0x40,'comment':_0xeaede0(0xfb),'nullable':!![]}),__metadata(_0xeaede0(0xf3),String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xcd),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xeaede0(0xec),'default':0x0}),__metadata(_0xeaede0(0xf3),Number)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xd8),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xeaede0(0xd6),'default':0x0}),__metadata(_0xeaede0(0xf3),Number)],UserEntity[_0xeaede0(0xf6)],'consecutiveDays',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xeaede0(0xca),'default':0x0}),__metadata(_0xeaede0(0xf3),Number)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xc9),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'comment':_0xeaede0(0xc3),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xce),void 0x0),__decorate([(0x0,typeorm_1[_0xeaede0(0xc4)])({'comment':_0xeaede0(0xdd),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0xeaede0(0xf6)],_0xeaede0(0xe7),void 0x0),UserEntity=__decorate([(0x0,typeorm_1[_0xeaede0(0xea)])({'name':'users'})],UserEntity),exports[_0xeaede0(0xd0)]=UserEntity;