'use strict';const _0x591bd5=_0x4d65;function _0x4d65(_0x25ae87,_0x1d4751){const _0x4fb8c8=_0x4fb8();return _0x4d65=function(_0x4d6555,_0x36ab28){_0x4d6555=_0x4d6555-0x11c;let _0xe6b945=_0x4fb8c8[_0x4d6555];return _0xe6b945;},_0x4d65(_0x25ae87,_0x1d4751);}(function(_0x24ea86,_0x33c678){const _0x5370e2=_0x4d65,_0x4d1d2c=_0x24ea86();while(!![]){try{const _0x45e7e6=parseInt(_0x5370e2(0x128))/0x1+parseInt(_0x5370e2(0x13d))/0x2+-parseInt(_0x5370e2(0x136))/0x3*(-parseInt(_0x5370e2(0x13b))/0x4)+parseInt(_0x5370e2(0x12d))/0x5*(parseInt(_0x5370e2(0x137))/0x6)+parseInt(_0x5370e2(0x14d))/0x7+-parseInt(_0x5370e2(0x14e))/0x8*(parseInt(_0x5370e2(0x147))/0x9)+-parseInt(_0x5370e2(0x12f))/0xa;if(_0x45e7e6===_0x33c678)break;else _0x4d1d2c['push'](_0x4d1d2c['shift']());}catch(_0x938d6b){_0x4d1d2c['push'](_0x4d1d2c['shift']());}}}(_0x4fb8,0xb8410));function _0x4fb8(){const _0x526487=['length','Post','3dEMEWN','6gSKoSR','无权限访问，需要超级管理员权限','获取系统所有菜单列表，包括可见和不可见的菜单。需要管理员权限访问。','管理端查询菜单列表','1305516rBUnIM','delete','1989468CqtBMp','setMenu','ApiOperation','MenuService','UseGuards','菜单不存在或为系统预设菜单无法删除','design:returntype','object','../../common/auth/adminAuth.guard','Body','6435YPCQDP','成功创建或更新菜单','MenuEntity','QueryMenuDto','menuListFront','SuperAuthGuard','5174918BqBIJo','15664TkEOUS','prototype','string','菜单管理','Query','AdminAuthGuard','成功返回可见菜单列表','删除菜单','design:paramtypes','menuService','显示或者隐藏菜单','getOwnPropertyDescriptor','list','MenuController','queryMenu','delMenu','菜单不存在','metadata','用户端查询菜单列表','修改成功','design:type','visibleMenu','decorate','创建或更新菜单信息。如果提供id则更新现有菜单，否则创建新菜单。需要超级管理员权限。','IdOnlyDto','__esModule','@nestjs/common','删除指定ID的菜单。需要超级管理员权限。系统预设菜单（isSystem=true）不可删除。','@nestjs/swagger','__param','function','Get','获取用户可见的菜单列表，只返回isShow为true的菜单项。无需权限即可访问。','8371auUctI','无权限访问，需要管理员权限','./menu.entity','删除成功','ApiResponse','7032975bvOExz','defineProperty','13206790Mfenaf','SetMenuDto','ApiBearerAuth','切换菜单的显示状态（isShow字段）。需要超级管理员权限。','query'];_0x4fb8=function(){return _0x526487;};return _0x4fb8();}var __decorate=this&&this['__decorate']||function(_0x5edfc8,_0x5da132,_0x23247f,_0x3ccbb8){const _0x12cc32=_0x4d65;var _0x556609=arguments[_0x12cc32(0x134)],_0x5c3cf3=_0x556609<0x3?_0x5da132:_0x3ccbb8===null?_0x3ccbb8=Object[_0x12cc32(0x159)](_0x5da132,_0x23247f):_0x3ccbb8,_0x3387fc;if(typeof Reflect===_0x12cc32(0x144)&&typeof Reflect[_0x12cc32(0x11d)]===_0x12cc32(0x125))_0x5c3cf3=Reflect[_0x12cc32(0x11d)](_0x5edfc8,_0x5da132,_0x23247f,_0x3ccbb8);else{for(var _0x2bc204=_0x5edfc8[_0x12cc32(0x134)]-0x1;_0x2bc204>=0x0;_0x2bc204--)if(_0x3387fc=_0x5edfc8[_0x2bc204])_0x5c3cf3=(_0x556609<0x3?_0x3387fc(_0x5c3cf3):_0x556609>0x3?_0x3387fc(_0x5da132,_0x23247f,_0x5c3cf3):_0x3387fc(_0x5da132,_0x23247f))||_0x5c3cf3;}return _0x556609>0x3&&_0x5c3cf3&&Object[_0x12cc32(0x12e)](_0x5da132,_0x23247f,_0x5c3cf3),_0x5c3cf3;},__metadata=this&&this['__metadata']||function(_0x29dcbb,_0x4b9c86){const _0x4295f3=_0x4d65;if(typeof Reflect===_0x4295f3(0x144)&&typeof Reflect[_0x4295f3(0x15f)]===_0x4295f3(0x125))return Reflect['metadata'](_0x29dcbb,_0x4b9c86);},__param=this&&this[_0x591bd5(0x124)]||function(_0x54f464,_0x165202){return function(_0x4e3486,_0x22b2ec){_0x165202(_0x4e3486,_0x22b2ec,_0x54f464);};};Object[_0x591bd5(0x12e)](exports,_0x591bd5(0x120),{'value':!![]}),exports[_0x591bd5(0x15b)]=void 0x0;const swagger_1=require(_0x591bd5(0x123)),menu_service_1=require('./menu.service'),common_1=require(_0x591bd5(0x121)),superAuth_guard_1=require('../../common/auth/superAuth.guard'),queryMenu_dto_1=require('./dto/queryMenu.dto'),setMenu_dto_1=require('./dto/setMenu.dto'),adminAuth_guard_1=require(_0x591bd5(0x145)),idOnly_dto_1=require('./dto/idOnly.dto'),menu_entity_1=require(_0x591bd5(0x12a));let MenuController=class MenuController{constructor(_0x7207d5){const _0x2a10ab=_0x591bd5;this[_0x2a10ab(0x157)]=_0x7207d5;}['queryMenu'](_0x37e7d8){const _0x49bf78=_0x591bd5;return this[_0x49bf78(0x157)][_0x49bf78(0x15c)](_0x37e7d8);}[_0x591bd5(0x14b)](_0x31fe74){const _0x193706=_0x591bd5;return this[_0x193706(0x157)][_0x193706(0x14b)](_0x31fe74);}['visibleMenu'](_0x392761){const _0x29052f=_0x591bd5;return this[_0x29052f(0x157)][_0x29052f(0x11c)](_0x392761);}[_0x591bd5(0x13e)](_0x3e1618){const _0x545ece=_0x591bd5;return this[_0x545ece(0x157)][_0x545ece(0x13e)](_0x3e1618);}[_0x591bd5(0x15d)](_0x58646d){const _0x1868c3=_0x591bd5;return this[_0x1868c3(0x157)][_0x1868c3(0x15d)](_0x58646d);}};__decorate([(0x0,common_1[_0x591bd5(0x126)])(_0x591bd5(0x133)),(0x0,swagger_1[_0x591bd5(0x13f)])({'summary':_0x591bd5(0x13a),'description':_0x591bd5(0x139)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0xc8,'description':'成功返回菜单列表','type':[menu_entity_1['MenuEntity']]}),(0x0,swagger_1['ApiResponse'])({'status':0x193,'description':_0x591bd5(0x129)}),(0x0,common_1[_0x591bd5(0x141)])(adminAuth_guard_1[_0x591bd5(0x153)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x591bd5(0x152)])()),__metadata(_0x591bd5(0x162),Function),__metadata('design:paramtypes',[queryMenu_dto_1[_0x591bd5(0x14a)]]),__metadata(_0x591bd5(0x143),void 0x0)],MenuController[_0x591bd5(0x14f)],_0x591bd5(0x15c),null),__decorate([(0x0,common_1[_0x591bd5(0x126)])(_0x591bd5(0x15a)),(0x0,swagger_1[_0x591bd5(0x13f)])({'summary':_0x591bd5(0x160),'description':_0x591bd5(0x127)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0xc8,'description':_0x591bd5(0x154),'type':[menu_entity_1[_0x591bd5(0x149)]]}),__param(0x0,(0x0,common_1['Query'])()),__metadata(_0x591bd5(0x162),Function),__metadata(_0x591bd5(0x156),[queryMenu_dto_1[_0x591bd5(0x14a)]]),__metadata('design:returntype',void 0x0)],MenuController[_0x591bd5(0x14f)],_0x591bd5(0x14b),null),__decorate([(0x0,common_1['Post'])('visible'),(0x0,swagger_1[_0x591bd5(0x13f)])({'summary':_0x591bd5(0x158),'description':_0x591bd5(0x132)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0xc8,'description':'成功更新菜单状态','schema':{'type':_0x591bd5(0x150),'example':_0x591bd5(0x161)}}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0x193,'description':_0x591bd5(0x138)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0x190,'description':_0x591bd5(0x15e)}),(0x0,common_1[_0x591bd5(0x141)])(superAuth_guard_1[_0x591bd5(0x14c)]),(0x0,swagger_1[_0x591bd5(0x131)])(),__param(0x0,(0x0,common_1[_0x591bd5(0x146)])()),__metadata(_0x591bd5(0x162),Function),__metadata(_0x591bd5(0x156),[idOnly_dto_1['IdOnlyDto']]),__metadata(_0x591bd5(0x143),void 0x0)],MenuController[_0x591bd5(0x14f)],_0x591bd5(0x11c),null),__decorate([(0x0,common_1[_0x591bd5(0x135)])(_0x591bd5(0x13e)),(0x0,swagger_1[_0x591bd5(0x13f)])({'summary':'设置修改菜单','description':_0x591bd5(0x11e)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0xc8,'description':_0x591bd5(0x148),'schema':{'type':_0x591bd5(0x150),'example':'创建成功'}}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0x193,'description':'无权限访问，需要超级管理员权限'}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0x190,'description':'参数验证失败或菜单不存在'}),(0x0,common_1[_0x591bd5(0x141)])(superAuth_guard_1[_0x591bd5(0x14c)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x591bd5(0x146)])()),__metadata(_0x591bd5(0x162),Function),__metadata(_0x591bd5(0x156),[setMenu_dto_1[_0x591bd5(0x130)]]),__metadata(_0x591bd5(0x143),void 0x0)],MenuController['prototype'],_0x591bd5(0x13e),null),__decorate([(0x0,common_1['Post'])(_0x591bd5(0x13c)),(0x0,swagger_1[_0x591bd5(0x13f)])({'summary':_0x591bd5(0x155),'description':_0x591bd5(0x122)}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0xc8,'description':'成功删除菜单','schema':{'type':'string','example':_0x591bd5(0x12b)}}),(0x0,swagger_1[_0x591bd5(0x12c)])({'status':0x193,'description':_0x591bd5(0x138)}),(0x0,swagger_1['ApiResponse'])({'status':0x190,'description':_0x591bd5(0x142)}),(0x0,common_1[_0x591bd5(0x141)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0x591bd5(0x131)])(),__param(0x0,(0x0,common_1[_0x591bd5(0x146)])()),__metadata(_0x591bd5(0x162),Function),__metadata(_0x591bd5(0x156),[idOnly_dto_1[_0x591bd5(0x11f)]]),__metadata(_0x591bd5(0x143),void 0x0)],MenuController[_0x591bd5(0x14f)],_0x591bd5(0x15d),null),MenuController=__decorate([(0x0,swagger_1['ApiTags'])(_0x591bd5(0x151)),(0x0,common_1['Controller'])('menu'),__metadata('design:paramtypes',[menu_service_1[_0x591bd5(0x140)]])],MenuController),exports['MenuController']=MenuController;