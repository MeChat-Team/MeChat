'use strict';function _0x5037(){var _0x4a17a2=['design:type','getOwnPropertyDescriptor','330ANhdme','__decorate','Entity','decorate','5AZqWFX','function','length','Column','metadata','214zYNfxV','ViolationLogEntity','object','41752mTOAtR','10ORdXTN','text','敏感词','26820ACqeNZ','4020738hJvyLr','193699NVggWA','7978OPMSLm','content','违规检测失败于哪个平台','10693314cJzyIm','37638264ftkAdG','1267rCCzWo','userId','words','prototype','defineProperty','违规类型'];_0x5037=function(){return _0x4a17a2;};return _0x5037();}var _0x21b6b8=_0x12f6;(function(_0xe335f2,_0x1d9082){var _0x457107=_0x12f6,_0x43c4ed=_0xe335f2();while(!![]){try{var _0x543c3d=-parseInt(_0x457107(0xbb))/0x1*(parseInt(_0x457107(0xb1))/0x2)+-parseInt(_0x457107(0xa8))/0x3*(parseInt(_0x457107(0xb8))/0x4)+-parseInt(_0x457107(0xac))/0x5*(parseInt(_0x457107(0xb9))/0x6)+parseInt(_0x457107(0xc0))/0x7*(parseInt(_0x457107(0xb4))/0x8)+-parseInt(_0x457107(0xbe))/0x9*(parseInt(_0x457107(0xb5))/0xa)+-parseInt(_0x457107(0xba))/0xb+parseInt(_0x457107(0xbf))/0xc;if(_0x543c3d===_0x1d9082)break;else _0x43c4ed['push'](_0x43c4ed['shift']());}catch(_0x3d39c9){_0x43c4ed['push'](_0x43c4ed['shift']());}}}(_0x5037,0x95ec7));var __decorate=this&&this[_0x21b6b8(0xa9)]||function(_0x4eff1b,_0x4d5a42,_0x326648,_0x441be6){var _0xa2e0cc=_0x21b6b8,_0x266fd2=arguments[_0xa2e0cc(0xae)],_0x2db271=_0x266fd2<0x3?_0x4d5a42:_0x441be6===null?_0x441be6=Object[_0xa2e0cc(0xa7)](_0x4d5a42,_0x326648):_0x441be6,_0x3b33b1;if(typeof Reflect===_0xa2e0cc(0xb3)&&typeof Reflect['decorate']==='function')_0x2db271=Reflect[_0xa2e0cc(0xab)](_0x4eff1b,_0x4d5a42,_0x326648,_0x441be6);else{for(var _0xf79309=_0x4eff1b['length']-0x1;_0xf79309>=0x0;_0xf79309--)if(_0x3b33b1=_0x4eff1b[_0xf79309])_0x2db271=(_0x266fd2<0x3?_0x3b33b1(_0x2db271):_0x266fd2>0x3?_0x3b33b1(_0x4d5a42,_0x326648,_0x2db271):_0x3b33b1(_0x4d5a42,_0x326648))||_0x2db271;}return _0x266fd2>0x3&&_0x2db271&&Object[_0xa2e0cc(0xa4)](_0x4d5a42,_0x326648,_0x2db271),_0x2db271;},__metadata=this&&this['__metadata']||function(_0x548625,_0x17883b){var _0x209351=_0x21b6b8;if(typeof Reflect===_0x209351(0xb3)&&typeof Reflect[_0x209351(0xb0)]===_0x209351(0xad))return Reflect[_0x209351(0xb0)](_0x548625,_0x17883b);};Object[_0x21b6b8(0xa4)](exports,'__esModule',{'value':!![]}),exports[_0x21b6b8(0xb2)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require('../../common/entity/baseEntity');let ViolationLogEntity=class ViolationLogEntity extends baseEntity_1['BaseEntity']{};function _0x12f6(_0x417402,_0x3c8917){var _0x50374d=_0x5037();return _0x12f6=function(_0x12f65e,_0x37f273){_0x12f65e=_0x12f65e-0xa2;var _0x12c46d=_0x50374d[_0x12f65e];return _0x12c46d;},_0x12f6(_0x417402,_0x3c8917);}__decorate([(0x0,typeorm_1[_0x21b6b8(0xaf)])({'comment':'用户id'}),__metadata(_0x21b6b8(0xa6),Number)],ViolationLogEntity[_0x21b6b8(0xa3)],_0x21b6b8(0xc1),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'违规内容','type':_0x21b6b8(0xb6)}),__metadata(_0x21b6b8(0xa6),String)],ViolationLogEntity[_0x21b6b8(0xa3)],_0x21b6b8(0xbc),void 0x0),__decorate([(0x0,typeorm_1[_0x21b6b8(0xaf)])({'comment':_0x21b6b8(0xb7),'type':_0x21b6b8(0xb6)}),__metadata(_0x21b6b8(0xa6),String)],ViolationLogEntity[_0x21b6b8(0xa3)],_0x21b6b8(0xa2),void 0x0),__decorate([(0x0,typeorm_1[_0x21b6b8(0xaf)])({'comment':_0x21b6b8(0xa5)}),__metadata(_0x21b6b8(0xa6),String)],ViolationLogEntity[_0x21b6b8(0xa3)],'typeCn',void 0x0),__decorate([(0x0,typeorm_1[_0x21b6b8(0xaf)])({'comment':_0x21b6b8(0xbd)}),__metadata(_0x21b6b8(0xa6),String)],ViolationLogEntity[_0x21b6b8(0xa3)],'typeOriginCn',void 0x0),ViolationLogEntity=__decorate([(0x0,typeorm_1[_0x21b6b8(0xaa)])({'name':'violation_log'})],ViolationLogEntity),exports[_0x21b6b8(0xb2)]=ViolationLogEntity;