'use strict';function _0x4b75(){var _0x53d512=['2729547qmojRa','__esModule','../../common/auth/jwtAuth.guard','10XNpmOZ','Req','ApiTags','ApiOperation','332198MOBtCj','prototype','Get','__param','4762813NVTvmK','330468lDwYHi','design:returntype','getHotSearches','./search.service','JwtAuthGuard','__metadata','decorate','3Dwnqko','object','SearchController','design:paramtypes','defineProperty','ApiResponse','@nestjs/swagger','Controller','@nestjs/common','Res','服务器内部错误','metadata','14VVoXJI','searchService','function','搜索API','获取今日头条热搜榜','15512VleZzG','根据提供的查询文本进行搜索，支持简单搜索、深度搜索和研究模式','13zxHtuE','SearchDto','12161328PJgBhU','design:type','请求参数错误','UseGuards','520AViTnk','search','Post','1184970sOQSaf','length','ApiBearerAuth','8ckuSav','搜索成功，返回搜索结果流'];_0x4b75=function(){return _0x53d512;};return _0x4b75();}var _0xc9944e=_0x2c34;(function(_0xb2c36a,_0x1a462f){var _0x2a3907=_0x2c34,_0x487548=_0xb2c36a();while(!![]){try{var _0xbc4085=parseInt(_0x2a3907(0x1f1))/0x1+-parseInt(_0x2a3907(0x1ec))/0x2*(-parseInt(_0x2a3907(0x1f8))/0x3)+parseInt(_0x2a3907(0x1d5))/0x4*(parseInt(_0x2a3907(0x1dd))/0x5)+-parseInt(_0x2a3907(0x1e0))/0x6*(parseInt(_0x2a3907(0x204))/0x7)+parseInt(_0x2a3907(0x1e3))/0x8*(parseInt(_0x2a3907(0x1e5))/0x9)+-parseInt(_0x2a3907(0x1e8))/0xa*(-parseInt(_0x2a3907(0x1f0))/0xb)+parseInt(_0x2a3907(0x1d9))/0xc*(-parseInt(_0x2a3907(0x1d7))/0xd);if(_0xbc4085===_0x1a462f)break;else _0x487548['push'](_0x487548['shift']());}catch(_0x50401a){_0x487548['push'](_0x487548['shift']());}}}(_0x4b75,0x3797f));var __decorate=this&&this['__decorate']||function(_0x580352,_0x146e4c,_0x353ff9,_0x3538b0){var _0x13fec1=_0x2c34,_0x5ce89f=arguments[_0x13fec1(0x1e1)],_0x5df24d=_0x5ce89f<0x3?_0x146e4c:_0x3538b0===null?_0x3538b0=Object['getOwnPropertyDescriptor'](_0x146e4c,_0x353ff9):_0x3538b0,_0x140baa;if(typeof Reflect===_0x13fec1(0x1f9)&&typeof Reflect['decorate']==='function')_0x5df24d=Reflect[_0x13fec1(0x1f7)](_0x580352,_0x146e4c,_0x353ff9,_0x3538b0);else{for(var _0x542e66=_0x580352[_0x13fec1(0x1e1)]-0x1;_0x542e66>=0x0;_0x542e66--)if(_0x140baa=_0x580352[_0x542e66])_0x5df24d=(_0x5ce89f<0x3?_0x140baa(_0x5df24d):_0x5ce89f>0x3?_0x140baa(_0x146e4c,_0x353ff9,_0x5df24d):_0x140baa(_0x146e4c,_0x353ff9))||_0x5df24d;}return _0x5ce89f>0x3&&_0x5df24d&&Object[_0x13fec1(0x1fc)](_0x146e4c,_0x353ff9,_0x5df24d),_0x5df24d;},__metadata=this&&this[_0xc9944e(0x1f6)]||function(_0x5b2752,_0x3815dc){var _0x180cd0=_0xc9944e;if(typeof Reflect===_0x180cd0(0x1f9)&&typeof Reflect['metadata']===_0x180cd0(0x206))return Reflect[_0x180cd0(0x203)](_0x5b2752,_0x3815dc);},__param=this&&this[_0xc9944e(0x1ef)]||function(_0x209064,_0x70363b){return function(_0x25a704,_0x51f59f){_0x70363b(_0x25a704,_0x51f59f,_0x209064);};};Object[_0xc9944e(0x1fc)](exports,_0xc9944e(0x1e6),{'value':!![]}),exports[_0xc9944e(0x1fa)]=void 0x0;const common_1=require(_0xc9944e(0x200)),search_service_1=require(_0xc9944e(0x1f4)),search_dto_1=require('./dto/search.dto'),swagger_1=require(_0xc9944e(0x1fe)),jwtAuth_guard_1=require(_0xc9944e(0x1e7));let SearchController=class SearchController{constructor(_0x4bd936){var _0x513d84=_0xc9944e;this[_0x513d84(0x205)]=_0x4bd936;}async[_0xc9944e(0x1f3)](){var _0x75949c=_0xc9944e;return this[_0x75949c(0x205)]['getHotSearches']();}async['search'](_0x4972f8,_0x1e8653,_0x53ca61){var _0x1878c3=_0xc9944e;return this['searchService'][_0x1878c3(0x1de)](_0x4972f8,_0x1e8653,_0x53ca61);}};function _0x2c34(_0x32ec39,_0x47504d){var _0x4b758a=_0x4b75();return _0x2c34=function(_0x2c3419,_0x50a935){_0x2c3419=_0x2c3419-0x1d4;var _0x1a89ec=_0x4b758a[_0x2c3419];return _0x1a89ec;},_0x2c34(_0x32ec39,_0x47504d);}__decorate([(0x0,common_1[_0xc9944e(0x1ee)])('hot'),(0x0,swagger_1['ApiOperation'])({'summary':'获取热搜','description':_0xc9944e(0x1d4)}),(0x0,swagger_1[_0xc9944e(0x1fd)])({'status':0xc8,'description':'获取成功'}),__metadata(_0xc9944e(0x1da),Function),__metadata(_0xc9944e(0x1fb),[]),__metadata('design:returntype',Promise)],SearchController[_0xc9944e(0x1ed)],_0xc9944e(0x1f3),null),__decorate([(0x0,common_1[_0xc9944e(0x1df)])(),(0x0,swagger_1[_0xc9944e(0x1eb)])({'summary':_0xc9944e(0x207),'description':_0xc9944e(0x1d6)}),(0x0,swagger_1[_0xc9944e(0x1fd)])({'status':0xc8,'description':_0xc9944e(0x1e4)}),(0x0,swagger_1[_0xc9944e(0x1fd)])({'status':0x190,'description':_0xc9944e(0x1db)}),(0x0,swagger_1['ApiResponse'])({'status':0x1f4,'description':_0xc9944e(0x202)}),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0xc9944e(0x1e9)])()),__param(0x2,(0x0,common_1[_0xc9944e(0x201)])()),__metadata(_0xc9944e(0x1da),Function),__metadata(_0xc9944e(0x1fb),[search_dto_1[_0xc9944e(0x1d8)],Object,Object]),__metadata(_0xc9944e(0x1f2),Promise)],SearchController[_0xc9944e(0x1ed)],_0xc9944e(0x1de),null),SearchController=__decorate([(0x0,swagger_1[_0xc9944e(0x1ea)])('搜索'),(0x0,swagger_1[_0xc9944e(0x1e2)])(),(0x0,common_1[_0xc9944e(0x1dc)])(jwtAuth_guard_1[_0xc9944e(0x1f5)]),(0x0,common_1[_0xc9944e(0x1ff)])(_0xc9944e(0x1de)),__metadata('design:paramtypes',[search_service_1['SearchService']])],SearchController),exports[_0xc9944e(0x1fa)]=SearchController;