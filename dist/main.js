'use strict';function _0x3847(_0xc42f,_0x2dab46){const _0x9c65c8=_0x9c65();return _0x3847=function(_0x3847f9,_0x1005ec){_0x3847f9=_0x3847f9-0x1cf;let _0x7494c9=_0x9c65c8[_0x3847f9];return _0x7494c9;},_0x3847(_0xc42f,_0x2dab46);}const _0xdebea4=_0x3847;(function(_0xdde750,_0x2b4a65){const _0x3daeac=_0x3847,_0x349bbe=_0xdde750();while(!![]){try{const _0x288ec8=-parseInt(_0x3daeac(0x1d1))/0x1+parseInt(_0x3daeac(0x1e8))/0x2*(parseInt(_0x3daeac(0x1fd))/0x3)+parseInt(_0x3daeac(0x203))/0x4*(parseInt(_0x3daeac(0x201))/0x5)+parseInt(_0x3daeac(0x1fa))/0x6*(parseInt(_0x3daeac(0x1f6))/0x7)+parseInt(_0x3daeac(0x1e9))/0x8+-parseInt(_0x3daeac(0x1d5))/0x9*(-parseInt(_0x3daeac(0x1e1))/0xa)+-parseInt(_0x3daeac(0x1fb))/0xb*(parseInt(_0x3daeac(0x1f5))/0xc);if(_0x288ec8===_0x2b4a65)break;else _0x349bbe['push'](_0x349bbe['shift']());}catch(_0x1e49fd){_0x349bbe['push'](_0x349bbe['shift']());}}}(_0x9c65,0x51ea9));Object['defineProperty'](exports,'__esModule',{'value':!![]});function _0x9c65(){const _0x31a36b=['compression','crypto','AllExceptionsFilter','timeout','getInstance','ioredis','REDIS_DB','createSwagger','getHttpAdapter','set','365584rAlHOD','Generating\x20and\x20setting\x20new\x20JWT_SECRET','enableCors','TypeOrmQueryFailedFilter','41013PSgmwu','@nestjs/common','Logger','express-xml-bodyparser','view\x20engine','base64','.env','create','setGlobalPrefix','CustomLoggerService','/api/docs','/api','670NVjlMo','./modules/database/initDatabase','JWT_SECRET','log','listen','toString','hbs','6GRMEMv','3441328yRnMZH','default','ValidationPipe','GET,HEAD,PUT,PATCH,POST,DELETE','TransformInterceptor','views','templates/pages','Main','use','env','useGlobalPipes','config','1671024iLtWgQ','2197132JOgytn','useLogger','./common/filters/typeOrmQueryFailed.filter','服务启动成功:\x20http://localhost:','12IgHYlP','66qhaAhn','useGlobalFilters','144426MOWYyU','./common/swagger/index','randomBytes','NestFactory','30AjtWQp','./common/logger/custom-logger.service','19308IaBIXK','./common/interceptors/transform.interceptor'];_0x9c65=function(){return _0x31a36b;};return _0x9c65();}const allExceptions_filter_1=require('./common/filters/allExceptions.filter'),typeOrmQueryFailed_filter_1=require(_0xdebea4(0x1f8)),transform_interceptor_1=require(_0xdebea4(0x204)),index_1=require(_0xdebea4(0x1fe)),custom_logger_service_1=require(_0xdebea4(0x202)),initDatabase_1=require(_0xdebea4(0x1e2)),common_1=require(_0xdebea4(0x1d6)),core_1=require('@nestjs/core'),compression=require(_0xdebea4(0x205)),crypto_1=require(_0xdebea4(0x206)),Dotenv=require('dotenv'),xmlBodyParser=require(_0xdebea4(0x1d8)),ioredis_1=require(_0xdebea4(0x20a)),app_module_1=require('./app.module');Dotenv[_0xdebea4(0x1f4)]({'path':_0xdebea4(0x1db)});async function bootstrap(){const _0x295cb4=_0xdebea4,_0x4d57c1=new ioredis_1[(_0x295cb4(0x1ea))]({'host':process['env']['REDIS_HOST'],'port':Number(process[_0x295cb4(0x1f2)]['REDIS_PORT']),'password':process[_0x295cb4(0x1f2)]['REDIS_PASSWORD'],'db':Number(process[_0x295cb4(0x1f2)][_0x295cb4(0x20b)]||0x0)}),_0x305360=await _0x4d57c1['get'](_0x295cb4(0x1e3));if(!_0x305360){const _0x439eca=(0x0,crypto_1[_0x295cb4(0x1ff)])(0x100)[_0x295cb4(0x1e6)](_0x295cb4(0x1da));common_1[_0x295cb4(0x1d7)][_0x295cb4(0x1e4)](_0x295cb4(0x1d2)),await _0x4d57c1[_0x295cb4(0x1d0)](_0x295cb4(0x1e3),_0x439eca);}const _0x27737e=await core_1[_0x295cb4(0x200)][_0x295cb4(0x1dc)](app_module_1['AppModule']);await(0x0,initDatabase_1['initDatabase'])(),_0x27737e[_0x295cb4(0x1f7)](_0x27737e['get'](custom_logger_service_1[_0x295cb4(0x1de)])),_0x27737e[_0x295cb4(0x1f1)](compression()),_0x27737e[_0x295cb4(0x1f1)](xmlBodyParser()),_0x27737e[_0x295cb4(0x1d3)]({'origin':'*','methods':_0x295cb4(0x1ec),'preflightContinue':![],'optionsSuccessStatus':0xcc}),_0x27737e[_0x295cb4(0x1dd)](_0x295cb4(0x1e0)),(0x0,index_1[_0x295cb4(0x20c)])(_0x27737e),_0x27737e[_0x295cb4(0x1f3)](new common_1[(_0x295cb4(0x1eb))]()),_0x27737e[_0x295cb4(0x1fc)](new allExceptions_filter_1[(_0x295cb4(0x207))](),new typeOrmQueryFailed_filter_1[(_0x295cb4(0x1d4))]()),_0x27737e['useGlobalInterceptors'](new transform_interceptor_1[(_0x295cb4(0x1ed))]()),_0x27737e['getHttpAdapter']()['getInstance']()[_0x295cb4(0x1d0)](_0x295cb4(0x1ee),_0x295cb4(0x1ef)),_0x27737e[_0x295cb4(0x1cf)]()[_0x295cb4(0x209)]()['set'](_0x295cb4(0x1d9),_0x295cb4(0x1e7));const _0x91a2d=process[_0x295cb4(0x1f2)]['PORT']||0xbb8,_0x438843=await _0x27737e[_0x295cb4(0x1e5)](_0x91a2d,()=>{const _0x491a77=_0x295cb4;common_1[_0x491a77(0x1d7)][_0x491a77(0x1e4)](_0x491a77(0x1f9)+_0x91a2d+_0x491a77(0x1df),'Main'),common_1[_0x491a77(0x1d7)][_0x491a77(0x1e4)](_0x491a77(0x1f9)+_0x91a2d,_0x491a77(0x1f0));});_0x438843[_0x295cb4(0x208)]=0x5*0x3c*0x3e8;}bootstrap();