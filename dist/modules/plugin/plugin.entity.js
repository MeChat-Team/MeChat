'use strict';var _0x2efeff=_0x272a;function _0x35c9(){var _0x2dbb1f=['886216biusGy','../../common/entity/baseEntity','isEnabled','defineProperty','plugin','isSystemPlugin','pluginImg','decorate','199146NPRDcI','8TXSwEq','14136615vLoABx','function','4760049kSXjZf','PluginEntity','759362bytjfZ','object','插件名称','插件是否为系统插件\x200：否\x201：是','length','10WrwxIB','getOwnPropertyDescriptor','prototype','BaseEntity','Entity','typeorm','sortOrder','description','2102103aYFfvq','插件是否启用\x200：禁用\x201：启用','name','__decorate','3110840oFjvMN','Column','design:type','text','metadata','调用参数'];_0x35c9=function(){return _0x2dbb1f;};return _0x35c9();}(function(_0x3e4f7c,_0x29cfbf){var _0x5f3a5b=_0x272a,_0x55847c=_0x3e4f7c();while(!![]){try{var _0x3b8ce1=parseInt(_0x5f3a5b(0x167))/0x1+parseInt(_0x5f3a5b(0x159))/0x2+parseInt(_0x5f3a5b(0x174))/0x3+parseInt(_0x5f3a5b(0x153))/0x4+-parseInt(_0x5f3a5b(0x16c))/0x5*(-parseInt(_0x5f3a5b(0x161))/0x6)+-parseInt(_0x5f3a5b(0x165))/0x7*(parseInt(_0x5f3a5b(0x162))/0x8)+-parseInt(_0x5f3a5b(0x163))/0x9;if(_0x3b8ce1===_0x29cfbf)break;else _0x55847c['push'](_0x55847c['shift']());}catch(_0x4195cc){_0x55847c['push'](_0x55847c['shift']());}}}(_0x35c9,0x79389));var __decorate=this&&this[_0x2efeff(0x152)]||function(_0x227471,_0x164f6d,_0x3e3a4c,_0x3a38d9){var _0x414773=_0x2efeff,_0x32610e=arguments[_0x414773(0x16b)],_0x240e10=_0x32610e<0x3?_0x164f6d:_0x3a38d9===null?_0x3a38d9=Object[_0x414773(0x16d)](_0x164f6d,_0x3e3a4c):_0x3a38d9,_0x504dbe;if(typeof Reflect===_0x414773(0x168)&&typeof Reflect[_0x414773(0x160)]===_0x414773(0x164))_0x240e10=Reflect['decorate'](_0x227471,_0x164f6d,_0x3e3a4c,_0x3a38d9);else{for(var _0x21d6d6=_0x227471[_0x414773(0x16b)]-0x1;_0x21d6d6>=0x0;_0x21d6d6--)if(_0x504dbe=_0x227471[_0x21d6d6])_0x240e10=(_0x32610e<0x3?_0x504dbe(_0x240e10):_0x32610e>0x3?_0x504dbe(_0x164f6d,_0x3e3a4c,_0x240e10):_0x504dbe(_0x164f6d,_0x3e3a4c))||_0x240e10;}return _0x32610e>0x3&&_0x240e10&&Object['defineProperty'](_0x164f6d,_0x3e3a4c,_0x240e10),_0x240e10;},__metadata=this&&this['__metadata']||function(_0x56ce1f,_0x122133){var _0x29ac55=_0x2efeff;if(typeof Reflect==='object'&&typeof Reflect[_0x29ac55(0x157)]===_0x29ac55(0x164))return Reflect[_0x29ac55(0x157)](_0x56ce1f,_0x122133);};function _0x272a(_0x550b02,_0x3e8da3){var _0x35c99f=_0x35c9();return _0x272a=function(_0x272a88,_0x337ebb){_0x272a88=_0x272a88-0x151;var _0x5d868=_0x35c99f[_0x272a88];return _0x5d868;},_0x272a(_0x550b02,_0x3e8da3);}Object[_0x2efeff(0x15c)](exports,'__esModule',{'value':!![]}),exports[_0x2efeff(0x166)]=void 0x0;const baseEntity_1=require(_0x2efeff(0x15a)),typeorm_1=require(_0x2efeff(0x171));let PluginEntity=class PluginEntity extends baseEntity_1[_0x2efeff(0x16f)]{};__decorate([(0x0,typeorm_1[_0x2efeff(0x154)])({'unique':!![],'comment':_0x2efeff(0x169)}),__metadata('design:type',String)],PluginEntity['prototype'],_0x2efeff(0x151),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'插件封面','nullable':!![],'type':'text'}),__metadata(_0x2efeff(0x155),String)],PluginEntity[_0x2efeff(0x16e)],_0x2efeff(0x15f),void 0x0),__decorate([(0x0,typeorm_1[_0x2efeff(0x154)])({'comment':'插件描述'}),__metadata(_0x2efeff(0x155),String)],PluginEntity[_0x2efeff(0x16e)],_0x2efeff(0x173),void 0x0),__decorate([(0x0,typeorm_1[_0x2efeff(0x154)])({'comment':_0x2efeff(0x175),'default':0x1}),__metadata('design:type',Number)],PluginEntity[_0x2efeff(0x16e)],_0x2efeff(0x15b),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2efeff(0x16a),'default':0x0}),__metadata(_0x2efeff(0x155),Number)],PluginEntity[_0x2efeff(0x16e)],_0x2efeff(0x15e),void 0x0),__decorate([(0x0,typeorm_1[_0x2efeff(0x154)])({'comment':_0x2efeff(0x158),'type':_0x2efeff(0x156)}),__metadata(_0x2efeff(0x155),String)],PluginEntity[_0x2efeff(0x16e)],'parameters',void 0x0),__decorate([(0x0,typeorm_1[_0x2efeff(0x154)])({'comment':'排序值','default':0x0}),__metadata(_0x2efeff(0x155),Number)],PluginEntity[_0x2efeff(0x16e)],_0x2efeff(0x172),void 0x0),PluginEntity=__decorate([(0x0,typeorm_1[_0x2efeff(0x170)])({'name':_0x2efeff(0x15d)})],PluginEntity),exports[_0x2efeff(0x166)]=PluginEntity;