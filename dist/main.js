'use strict';const _0x3fdca1=_0x3c66;(function(_0x3b8001,_0x21d57b){const _0x54ba97=_0x3c66,_0x3c33ef=_0x3b8001();while(!![]){try{const _0x45235c=-parseInt(_0x54ba97(0x19a))/0x1*(-parseInt(_0x54ba97(0x185))/0x2)+-parseInt(_0x54ba97(0x180))/0x3*(-parseInt(_0x54ba97(0x1a6))/0x4)+-parseInt(_0x54ba97(0x18c))/0x5*(parseInt(_0x54ba97(0x190))/0x6)+-parseInt(_0x54ba97(0x198))/0x7*(parseInt(_0x54ba97(0x17f))/0x8)+parseInt(_0x54ba97(0x1a8))/0x9*(parseInt(_0x54ba97(0x19f))/0xa)+-parseInt(_0x54ba97(0x18a))/0xb*(-parseInt(_0x54ba97(0x1a0))/0xc)+-parseInt(_0x54ba97(0x18f))/0xd*(parseInt(_0x54ba97(0x1a7))/0xe);if(_0x45235c===_0x21d57b)break;else _0x3c33ef['push'](_0x3c33ef['shift']());}catch(_0x27dc2f){_0x3c33ef['push'](_0x3c33ef['shift']());}}}(_0x5e33,0xb237f));function _0x3c66(_0x222850,_0x506aa9){const _0x5e338c=_0x5e33();return _0x3c66=function(_0x3c6691,_0x140a5b){_0x3c6691=_0x3c6691-0x17e;let _0xd3de01=_0x5e338c[_0x3c6691];return _0xd3de01;},_0x3c66(_0x222850,_0x506aa9);}Object[_0x3fdca1(0x199)](exports,_0x3fdca1(0x19b),{'value':!![]});const allExceptions_filter_1=require(_0x3fdca1(0x1b0)),typeOrmQueryFailed_filter_1=require(_0x3fdca1(0x1b4)),transform_interceptor_1=require('./common/interceptors/transform.interceptor'),index_1=require(_0x3fdca1(0x1b2)),custom_logger_service_1=require(_0x3fdca1(0x191)),initDatabase_1=require('./modules/database/initDatabase'),common_1=require('@nestjs/common'),core_1=require(_0x3fdca1(0x194)),compression=require(_0x3fdca1(0x1a5)),crypto_1=require('crypto'),Dotenv=require(_0x3fdca1(0x1a4)),xmlBodyParser=require('express-xml-bodyparser'),ioredis_1=require('ioredis'),app_module_1=require(_0x3fdca1(0x195));Dotenv[_0x3fdca1(0x188)]({'path':_0x3fdca1(0x183)});async function bootstrap(){const _0x23a49a=_0x3fdca1,_0x31c782=new ioredis_1['default']({'host':process[_0x23a49a(0x19d)][_0x23a49a(0x1ab)],'port':Number(process[_0x23a49a(0x19d)][_0x23a49a(0x1b1)]),'password':process[_0x23a49a(0x19d)]['REDIS_PASSWORD'],'db':Number(process['env']['REDIS_DB']||0x0)}),_0x2db31e=await _0x31c782['get']('JWT_SECRET');if(!_0x2db31e){const _0x5a420a=(0x0,crypto_1['randomBytes'])(0x100)['toString'](_0x23a49a(0x186));common_1[_0x23a49a(0x1af)][_0x23a49a(0x18b)](_0x23a49a(0x197)),await _0x31c782[_0x23a49a(0x193)](_0x23a49a(0x18e),_0x5a420a);}const _0x357c48=await core_1['NestFactory'][_0x23a49a(0x1a9)](app_module_1[_0x23a49a(0x19c)]);await(0x0,initDatabase_1['initDatabase'])(),_0x357c48[_0x23a49a(0x189)](_0x357c48['get'](custom_logger_service_1['CustomLoggerService'])),_0x357c48['use'](compression()),_0x357c48[_0x23a49a(0x184)](xmlBodyParser()),_0x357c48[_0x23a49a(0x1a3)]({'origin':'*','methods':_0x23a49a(0x181),'preflightContinue':![],'optionsSuccessStatus':0xcc}),_0x357c48[_0x23a49a(0x192)]('/api'),(0x0,index_1[_0x23a49a(0x1b3)])(_0x357c48),_0x357c48['useGlobalPipes'](new common_1[(_0x23a49a(0x1a2))]()),_0x357c48['useGlobalFilters'](new allExceptions_filter_1['AllExceptionsFilter'](),new typeOrmQueryFailed_filter_1[(_0x23a49a(0x1a1))]()),_0x357c48[_0x23a49a(0x18d)](new transform_interceptor_1['TransformInterceptor']()),_0x357c48['getHttpAdapter']()[_0x23a49a(0x182)]()[_0x23a49a(0x193)](_0x23a49a(0x1ad),'templates/pages'),_0x357c48[_0x23a49a(0x187)]()['getInstance']()[_0x23a49a(0x193)]('view\x20engine',_0x23a49a(0x19e));const _0x1b4bd1=process[_0x23a49a(0x19d)][_0x23a49a(0x1ae)]||0xbb8,_0x27a714=await _0x357c48['listen'](_0x1b4bd1,()=>{const _0x5d7183=_0x23a49a;common_1[_0x5d7183(0x1af)][_0x5d7183(0x18b)](_0x5d7183(0x196)+_0x1b4bd1+_0x5d7183(0x1aa),_0x5d7183(0x17e)),common_1['Logger'][_0x5d7183(0x18b)]('服务启动成功:\x20http://localhost:'+_0x1b4bd1,'Main');});_0x27a714[_0x23a49a(0x1ac)]=0x5*0x3c*0x3e8;}function _0x5e33(){const _0x31145b=['setGlobalPrefix','set','@nestjs/core','./app.module','服务启动成功:\x20http://localhost:','Generating\x20and\x20setting\x20new\x20JWT_SECRET','10094qaiunJ','defineProperty','10306ARQQks','__esModule','AppModule','env','hbs','1712030xkinws','51144yKBnNQ','TypeOrmQueryFailedFilter','ValidationPipe','enableCors','dotenv','compression','8zESuHC','8596924itzjjx','27QWFLuI','create','/api/docs','REDIS_HOST','timeout','views','PORT','Logger','./common/filters/allExceptions.filter','REDIS_PORT','./common/swagger/index','createSwagger','./common/filters/typeOrmQueryFailed.filter','Main','1696JWbryr','1942452dIOvEo','GET,HEAD,PUT,PATCH,POST,DELETE','getInstance','.env','use','2DclSfo','base64','getHttpAdapter','config','useLogger','2882AXcbxn','log','20TZiOmN','useGlobalInterceptors','JWT_SECRET','26xirzgh','1007562VeQncD','./common/logger/custom-logger.service'];_0x5e33=function(){return _0x31145b;};return _0x5e33();}bootstrap();