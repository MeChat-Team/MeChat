'use strict';function _0x5972(_0x27af59,_0x366cdd){var _0xcd3214=_0xcd32();return _0x5972=function(_0x597255,_0x3a3f16){_0x597255=_0x597255-0xd5;var _0x4346f3=_0xcd3214[_0x597255];return _0x4346f3;},_0x5972(_0x27af59,_0x366cdd);}var _0x29dfe2=_0x5972;function _0xcd32(){var _0x1f3441=['292435SPqPXx','__decorate','11361JzRLgz','description','defineProperty','排序值','Column','plugin','494370hEbgpw','108396Viervy','306TgYRGC','text','typeorm','name','750kYEzzx','getOwnPropertyDescriptor','__metadata','pluginImg','design:type','插件描述','isSystemPlugin','38624ualSJa','插件名称','69aPhjvO','length','metadata','prototype','427498pjWMlk','decorate','Entity','插件是否启用\x200：禁用\x201：启用','8248XOaaQk','function','object','50ehTcnq','PluginEntity','1bkIxJO','调用参数'];_0xcd32=function(){return _0x1f3441;};return _0xcd32();}(function(_0x19a899,_0x32efd1){var _0x2efe79=_0x5972,_0x4cd451=_0x19a899();while(!![]){try{var _0x462833=parseInt(_0x2efe79(0xee))/0x1*(parseInt(_0x2efe79(0xe5))/0x2)+-parseInt(_0x2efe79(0xe1))/0x3*(parseInt(_0x2efe79(0xdf))/0x4)+parseInt(_0x2efe79(0xf8))/0x5+-parseInt(_0x2efe79(0xd8))/0x6*(-parseInt(_0x2efe79(0xf2))/0x7)+parseInt(_0x2efe79(0xe9))/0x8*(-parseInt(_0x2efe79(0xfa))/0x9)+-parseInt(_0x2efe79(0xec))/0xa*(parseInt(_0x2efe79(0xf0))/0xb)+parseInt(_0x2efe79(0xf9))/0xc;if(_0x462833===_0x32efd1)break;else _0x4cd451['push'](_0x4cd451['shift']());}catch(_0x36ec15){_0x4cd451['push'](_0x4cd451['shift']());}}}(_0xcd32,0x20d40));var __decorate=this&&this[_0x29dfe2(0xf1)]||function(_0x3c0932,_0x96150,_0x2dc94c,_0x1841b4){var _0xd01137=_0x29dfe2,_0x2419b4=arguments[_0xd01137(0xe2)],_0x19537c=_0x2419b4<0x3?_0x96150:_0x1841b4===null?_0x1841b4=Object[_0xd01137(0xd9)](_0x96150,_0x2dc94c):_0x1841b4,_0x494717;if(typeof Reflect===_0xd01137(0xeb)&&typeof Reflect['decorate']==='function')_0x19537c=Reflect[_0xd01137(0xe6)](_0x3c0932,_0x96150,_0x2dc94c,_0x1841b4);else{for(var _0x2c8550=_0x3c0932['length']-0x1;_0x2c8550>=0x0;_0x2c8550--)if(_0x494717=_0x3c0932[_0x2c8550])_0x19537c=(_0x2419b4<0x3?_0x494717(_0x19537c):_0x2419b4>0x3?_0x494717(_0x96150,_0x2dc94c,_0x19537c):_0x494717(_0x96150,_0x2dc94c))||_0x19537c;}return _0x2419b4>0x3&&_0x19537c&&Object[_0xd01137(0xf4)](_0x96150,_0x2dc94c,_0x19537c),_0x19537c;},__metadata=this&&this[_0x29dfe2(0xda)]||function(_0x323df9,_0x3d7544){var _0x50aebf=_0x29dfe2;if(typeof Reflect===_0x50aebf(0xeb)&&typeof Reflect[_0x50aebf(0xe3)]===_0x50aebf(0xea))return Reflect[_0x50aebf(0xe3)](_0x323df9,_0x3d7544);};Object[_0x29dfe2(0xf4)](exports,'__esModule',{'value':!![]}),exports[_0x29dfe2(0xed)]=void 0x0;const baseEntity_1=require('../../common/entity/baseEntity'),typeorm_1=require(_0x29dfe2(0xd6));let PluginEntity=class PluginEntity extends baseEntity_1['BaseEntity']{};__decorate([(0x0,typeorm_1[_0x29dfe2(0xf6)])({'unique':!![],'comment':_0x29dfe2(0xe0)}),__metadata('design:type',String)],PluginEntity[_0x29dfe2(0xe4)],_0x29dfe2(0xd7),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'插件封面','nullable':!![],'type':_0x29dfe2(0xd5)}),__metadata('design:type',String)],PluginEntity['prototype'],_0x29dfe2(0xdb),void 0x0),__decorate([(0x0,typeorm_1[_0x29dfe2(0xf6)])({'comment':_0x29dfe2(0xdd)}),__metadata(_0x29dfe2(0xdc),String)],PluginEntity[_0x29dfe2(0xe4)],_0x29dfe2(0xf3),void 0x0),__decorate([(0x0,typeorm_1[_0x29dfe2(0xf6)])({'comment':_0x29dfe2(0xe8),'default':0x1}),__metadata(_0x29dfe2(0xdc),Number)],PluginEntity[_0x29dfe2(0xe4)],'isEnabled',void 0x0),__decorate([(0x0,typeorm_1[_0x29dfe2(0xf6)])({'comment':'插件是否为系统插件\x200：否\x201：是','default':0x0}),__metadata('design:type',Number)],PluginEntity[_0x29dfe2(0xe4)],_0x29dfe2(0xde),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x29dfe2(0xef),'type':_0x29dfe2(0xd5)}),__metadata(_0x29dfe2(0xdc),String)],PluginEntity[_0x29dfe2(0xe4)],'parameters',void 0x0),__decorate([(0x0,typeorm_1[_0x29dfe2(0xf6)])({'comment':_0x29dfe2(0xf5),'default':0x0}),__metadata('design:type',Number)],PluginEntity[_0x29dfe2(0xe4)],'sortOrder',void 0x0),PluginEntity=__decorate([(0x0,typeorm_1[_0x29dfe2(0xe7)])({'name':_0x29dfe2(0xf7)})],PluginEntity),exports[_0x29dfe2(0xed)]=PluginEntity;