'use strict';var _0x800701=_0x239c;function _0x7ed0(){var _0x1d3478=['IsBoolean','497731bUHAVP','1208lrSULN','function','__metadata','decorate','2930478rgEvyp','4658480tCHUyu','发送验证码到手机','24895gzWCIf','user@example.com','getOwnPropertyDescriptor','是否用于登录（true:\x20登录验证码，false:\x20注册验证码）','发送验证码到邮箱','6CcVCOI','11506416SKGcNJ','请输入有效的邮箱地址或手机号码','@nestjs/swagger','defineProperty','45zspbTp','__decorate','prototype','object','IsNotEmpty','class-transformer','Matches','ApiProperty','2081632qAAWcH','isLogin','13800138000','length','metadata','IsOptional','2146503RGIJuk','SendCodeDto','isLogin必须是布尔值','Transform','true','design:type'];_0x7ed0=function(){return _0x1d3478;};return _0x7ed0();}(function(_0x32de65,_0x5e2fa1){var _0x5991d1=_0x239c,_0x26e1d6=_0x32de65();while(!![]){try{var _0x51d09c=parseInt(_0x5991d1(0x1d2))/0x1*(-parseInt(_0x5991d1(0x1b8))/0x2)+-parseInt(_0x5991d1(0x1cb))/0x3+parseInt(_0x5991d1(0x1d3))/0x4*(-parseInt(_0x5991d1(0x1b3))/0x5)+parseInt(_0x5991d1(0x1d7))/0x6+parseInt(_0x5991d1(0x1c5))/0x7+parseInt(_0x5991d1(0x1b9))/0x8+-parseInt(_0x5991d1(0x1bd))/0x9*(-parseInt(_0x5991d1(0x1d8))/0xa);if(_0x51d09c===_0x5e2fa1)break;else _0x26e1d6['push'](_0x26e1d6['shift']());}catch(_0x4c5133){_0x26e1d6['push'](_0x26e1d6['shift']());}}}(_0x7ed0,0xcd513));function _0x239c(_0x43b3ac,_0x1de725){var _0x7ed027=_0x7ed0();return _0x239c=function(_0x239cbb,_0x4d740c){_0x239cbb=_0x239cbb-0x1b3;var _0x108c1b=_0x7ed027[_0x239cbb];return _0x108c1b;},_0x239c(_0x43b3ac,_0x1de725);}var __decorate=this&&this[_0x800701(0x1be)]||function(_0x4cfcbd,_0x32bc66,_0x471ed3,_0x47cc92){var _0x3cad56=_0x800701,_0x37d045=arguments['length'],_0x361aee=_0x37d045<0x3?_0x32bc66:_0x47cc92===null?_0x47cc92=Object[_0x3cad56(0x1b5)](_0x32bc66,_0x471ed3):_0x47cc92,_0xe71439;if(typeof Reflect===_0x3cad56(0x1c0)&&typeof Reflect[_0x3cad56(0x1d6)]===_0x3cad56(0x1d4))_0x361aee=Reflect['decorate'](_0x4cfcbd,_0x32bc66,_0x471ed3,_0x47cc92);else{for(var _0x78a932=_0x4cfcbd[_0x3cad56(0x1c8)]-0x1;_0x78a932>=0x0;_0x78a932--)if(_0xe71439=_0x4cfcbd[_0x78a932])_0x361aee=(_0x37d045<0x3?_0xe71439(_0x361aee):_0x37d045>0x3?_0xe71439(_0x32bc66,_0x471ed3,_0x361aee):_0xe71439(_0x32bc66,_0x471ed3))||_0x361aee;}return _0x37d045>0x3&&_0x361aee&&Object[_0x3cad56(0x1bc)](_0x32bc66,_0x471ed3,_0x361aee),_0x361aee;},__metadata=this&&this[_0x800701(0x1d5)]||function(_0x68c43d,_0x140006){var _0x24f963=_0x800701;if(typeof Reflect===_0x24f963(0x1c0)&&typeof Reflect[_0x24f963(0x1c9)]===_0x24f963(0x1d4))return Reflect[_0x24f963(0x1c9)](_0x68c43d,_0x140006);};Object[_0x800701(0x1bc)](exports,'__esModule',{'value':!![]}),exports[_0x800701(0x1cc)]=void 0x0;const swagger_1=require(_0x800701(0x1bb)),class_validator_1=require('class-validator'),class_transformer_1=require(_0x800701(0x1c2));class SendCodeDto{constructor(){var _0x292d61=_0x800701;this[_0x292d61(0x1c6)]=![];}}__decorate([(0x0,swagger_1[_0x800701(0x1c4)])({'example':_0x800701(0x1b4),'description':'联系方式（邮箱或手机号）','examples':{'email':{'value':_0x800701(0x1b4),'description':_0x800701(0x1b7)},'phone':{'value':_0x800701(0x1c7),'description':_0x800701(0x1d9)}}}),(0x0,class_validator_1[_0x800701(0x1c1)])({'message':'联系方式不能为空'}),(0x0,class_validator_1[_0x800701(0x1c3)])(/^(\S+@\S+\.\S+|1\d{10})$/,{'message':_0x800701(0x1ba)}),__metadata(_0x800701(0x1d0),String)],SendCodeDto[_0x800701(0x1bf)],'contact',void 0x0),__decorate([(0x0,swagger_1['ApiProperty'])({'example':![],'description':_0x800701(0x1b6),'default':![]}),(0x0,class_validator_1[_0x800701(0x1ca)])(),(0x0,class_validator_1[_0x800701(0x1d1)])({'message':_0x800701(0x1cd)}),(0x0,class_transformer_1[_0x800701(0x1ce)])(({value:_0x4e9d91})=>{var _0x1b9810=_0x800701;if(_0x4e9d91===_0x1b9810(0x1cf))return!![];if(_0x4e9d91==='false')return![];return _0x4e9d91;}),__metadata('design:type',Boolean)],SendCodeDto[_0x800701(0x1bf)],_0x800701(0x1c6),void 0x0),exports[_0x800701(0x1cc)]=SendCodeDto;