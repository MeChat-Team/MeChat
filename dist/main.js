'use strict';const _0x5499ce=_0x3dec;(function(_0x1ccd25,_0x73a78e){const _0x59d76f=_0x3dec,_0x118e09=_0x1ccd25();while(!![]){try{const _0xd9f598=-parseInt(_0x59d76f(0x1a6))/0x1*(parseInt(_0x59d76f(0x1be))/0x2)+-parseInt(_0x59d76f(0x1b2))/0x3*(parseInt(_0x59d76f(0x1a3))/0x4)+parseInt(_0x59d76f(0x1b6))/0x5*(parseInt(_0x59d76f(0x1bf))/0x6)+parseInt(_0x59d76f(0x197))/0x7*(-parseInt(_0x59d76f(0x1c2))/0x8)+parseInt(_0x59d76f(0x1b4))/0x9*(parseInt(_0x59d76f(0x1ce))/0xa)+-parseInt(_0x59d76f(0x1cb))/0xb*(-parseInt(_0x59d76f(0x1a8))/0xc)+parseInt(_0x59d76f(0x1c8))/0xd*(parseInt(_0x59d76f(0x196))/0xe);if(_0xd9f598===_0x73a78e)break;else _0x118e09['push'](_0x118e09['shift']());}catch(_0xb24d82){_0x118e09['push'](_0x118e09['shift']());}}}(_0x1342,0x49b20));function _0x1342(){const _0x337639=['ValidationPipe','127245OdJXTm','getHttpAdapter','@nestjs/common','Main','./common/logger/custom-logger.service','Logger','initDatabase','listen','888772RuERFc','6mNnwEi','config','view\x20engine','345624pkqEPh','服务启动成功:\x20http://localhost:','use','REDIS_PORT','./common/swagger/index','.env','2288BHMIws','/api','createSwagger','345719UzvpDG','/api/docs','env','10qAXuMp','useLogger','Generating\x20and\x20setting\x20new\x20JWT_SECRET','PORT','TransformInterceptor','REDIS_DB','49546FvqfFA','63MUjggL','CustomLoggerService','getInstance','AllExceptionsFilter','./modules/database/initDatabase','useGlobalFilters','dotenv','set','log','@nestjs/core','create','hbs','160396iUwpEd','JWT_SECRET','timeout','1NkToUq','get','204bmnhMW','compression','ioredis','useGlobalPipes','crypto','GET,HEAD,PUT,PATCH,POST,DELETE','setGlobalPrefix','enableCors','NestFactory','templates/pages','30mdhiIW','__esModule','3181077cFXwvP'];_0x1342=function(){return _0x337639;};return _0x1342();}function _0x3dec(_0x2ea8a5,_0x1b3f48){const _0x13427d=_0x1342();return _0x3dec=function(_0x3dece7,_0x5f3325){_0x3dece7=_0x3dece7-0x194;let _0xc5e2dc=_0x13427d[_0x3dece7];return _0xc5e2dc;},_0x3dec(_0x2ea8a5,_0x1b3f48);}Object['defineProperty'](exports,_0x5499ce(0x1b3),{'value':!![]});const allExceptions_filter_1=require('./common/filters/allExceptions.filter'),typeOrmQueryFailed_filter_1=require('./common/filters/typeOrmQueryFailed.filter'),transform_interceptor_1=require('./common/interceptors/transform.interceptor'),index_1=require(_0x5499ce(0x1c6)),custom_logger_service_1=require(_0x5499ce(0x1ba)),initDatabase_1=require(_0x5499ce(0x19b)),common_1=require(_0x5499ce(0x1b8)),core_1=require(_0x5499ce(0x1a0)),compression=require(_0x5499ce(0x1a9)),crypto_1=require(_0x5499ce(0x1ac)),Dotenv=require(_0x5499ce(0x19d)),xmlBodyParser=require('express-xml-bodyparser'),ioredis_1=require(_0x5499ce(0x1aa)),app_module_1=require('./app.module');Dotenv[_0x5499ce(0x1c0)]({'path':_0x5499ce(0x1c7)});async function bootstrap(){const _0xf0f1a3=_0x5499ce,_0x5ef91c=new ioredis_1['default']({'host':process[_0xf0f1a3(0x1cd)]['REDIS_HOST'],'port':Number(process['env'][_0xf0f1a3(0x1c5)]),'password':process[_0xf0f1a3(0x1cd)]['REDIS_PASSWORD'],'db':Number(process[_0xf0f1a3(0x1cd)][_0xf0f1a3(0x195)]||0x0)}),_0x283bba=await _0x5ef91c['get']('JWT_SECRET');if(!_0x283bba){const _0x3b4a4a=(0x0,crypto_1['randomBytes'])(0x100)['toString']('base64');common_1[_0xf0f1a3(0x1bb)][_0xf0f1a3(0x19f)](_0xf0f1a3(0x1d0)),await _0x5ef91c[_0xf0f1a3(0x19e)](_0xf0f1a3(0x1a4),_0x3b4a4a);}const _0x56a41c=await core_1[_0xf0f1a3(0x1b0)][_0xf0f1a3(0x1a1)](app_module_1['AppModule']);await(0x0,initDatabase_1[_0xf0f1a3(0x1bc)])(),_0x56a41c[_0xf0f1a3(0x1cf)](_0x56a41c[_0xf0f1a3(0x1a7)](custom_logger_service_1[_0xf0f1a3(0x198)])),_0x56a41c[_0xf0f1a3(0x1c4)](compression()),_0x56a41c[_0xf0f1a3(0x1c4)](xmlBodyParser()),_0x56a41c[_0xf0f1a3(0x1af)]({'origin':'*','methods':_0xf0f1a3(0x1ad),'preflightContinue':![],'optionsSuccessStatus':0xcc}),_0x56a41c[_0xf0f1a3(0x1ae)](_0xf0f1a3(0x1c9)),(0x0,index_1[_0xf0f1a3(0x1ca)])(_0x56a41c),_0x56a41c[_0xf0f1a3(0x1ab)](new common_1[(_0xf0f1a3(0x1b5))]()),_0x56a41c[_0xf0f1a3(0x19c)](new allExceptions_filter_1[(_0xf0f1a3(0x19a))](),new typeOrmQueryFailed_filter_1['TypeOrmQueryFailedFilter']()),_0x56a41c['useGlobalInterceptors'](new transform_interceptor_1[(_0xf0f1a3(0x194))]()),_0x56a41c[_0xf0f1a3(0x1b7)]()[_0xf0f1a3(0x199)]()['set']('views',_0xf0f1a3(0x1b1)),_0x56a41c[_0xf0f1a3(0x1b7)]()[_0xf0f1a3(0x199)]()[_0xf0f1a3(0x19e)](_0xf0f1a3(0x1c1),_0xf0f1a3(0x1a2));const _0x98d1d4=process[_0xf0f1a3(0x1cd)][_0xf0f1a3(0x1d1)]||0xbb8,_0x58b970=await _0x56a41c[_0xf0f1a3(0x1bd)](_0x98d1d4,()=>{const _0x11215b=_0xf0f1a3;common_1[_0x11215b(0x1bb)][_0x11215b(0x19f)](_0x11215b(0x1c3)+_0x98d1d4+_0x11215b(0x1cc),_0x11215b(0x1b9)),common_1[_0x11215b(0x1bb)]['log'](_0x11215b(0x1c3)+_0x98d1d4,_0x11215b(0x1b9));});_0x58b970[_0xf0f1a3(0x1a5)]=0x5*0x3c*0x3e8;}bootstrap();