'use strict';const _0x1939ef=_0xd6b0;(function(_0x3c3b0e,_0x1fae72){const _0x4092cf=_0xd6b0,_0x39527f=_0x3c3b0e();while(!![]){try{const _0x430aa5=parseInt(_0x4092cf(0x1ae))/0x1+parseInt(_0x4092cf(0x1ed))/0x2*(-parseInt(_0x4092cf(0x1e5))/0x3)+-parseInt(_0x4092cf(0x1bd))/0x4+parseInt(_0x4092cf(0x1ee))/0x5*(parseInt(_0x4092cf(0x1b5))/0x6)+parseInt(_0x4092cf(0x1cd))/0x7*(-parseInt(_0x4092cf(0x1c3))/0x8)+parseInt(_0x4092cf(0x1d5))/0x9+parseInt(_0x4092cf(0x1b3))/0xa;if(_0x430aa5===_0x1fae72)break;else _0x39527f['push'](_0x39527f['shift']());}catch(_0x7321cb){_0x39527f['push'](_0x39527f['shift']());}}}(_0x37bb,0x60e8f));var __decorate=this&&this[_0x1939ef(0x1da)]||function(_0x254338,_0x2e7ce2,_0x112bfe,_0x4bf194){const _0x3f2c6a=_0x1939ef;var _0xb7fcd4=arguments[_0x3f2c6a(0x1ea)],_0x231ca9=_0xb7fcd4<0x3?_0x2e7ce2:_0x4bf194===null?_0x4bf194=Object['getOwnPropertyDescriptor'](_0x2e7ce2,_0x112bfe):_0x4bf194,_0x3242f2;if(typeof Reflect==='object'&&typeof Reflect[_0x3f2c6a(0x1e2)]===_0x3f2c6a(0x1cc))_0x231ca9=Reflect[_0x3f2c6a(0x1e2)](_0x254338,_0x2e7ce2,_0x112bfe,_0x4bf194);else{for(var _0x25012c=_0x254338['length']-0x1;_0x25012c>=0x0;_0x25012c--)if(_0x3242f2=_0x254338[_0x25012c])_0x231ca9=(_0xb7fcd4<0x3?_0x3242f2(_0x231ca9):_0xb7fcd4>0x3?_0x3242f2(_0x2e7ce2,_0x112bfe,_0x231ca9):_0x3242f2(_0x2e7ce2,_0x112bfe))||_0x231ca9;}return _0xb7fcd4>0x3&&_0x231ca9&&Object[_0x3f2c6a(0x1be)](_0x2e7ce2,_0x112bfe,_0x231ca9),_0x231ca9;};Object[_0x1939ef(0x1be)](exports,'__esModule',{'value':!![]}),exports[_0x1939ef(0x1d4)]=void 0x0;const abort_interceptor_1=require(_0x1939ef(0x1e0)),custom_logger_service_1=require(_0x1939ef(0x1d7)),authorization_middleware_1=require(_0x1939ef(0x1d8)),common_1=require(_0x1939ef(0x1b8)),core_1=require('@nestjs/core'),serve_static_1=require(_0x1939ef(0x1d2)),fetch=require(_0x1939ef(0x1c2)),path_1=require(_0x1939ef(0x1c7)),app_module_1=require(_0x1939ef(0x1d6)),auth_module_1=require(_0x1939ef(0x1ad)),autoreply_module_1=require(_0x1939ef(0x1dd)),badWords_module_1=require('./modules/badWords/badWords.module'),chat_module_1=require('./modules/chat/chat.module'),chatGroup_module_1=require('./modules/chatGroup/chatGroup.module'),chatLog_module_1=require(_0x1939ef(0x1e9)),crami_module_1=require(_0x1939ef(0x1cb)),database_module_1=require('./modules/database/database.module'),gallery_module_1=require(_0x1939ef(0x1b7)),globalConfig_module_1=require('./modules/globalConfig/globalConfig.module'),menu_module_1=require(_0x1939ef(0x1ca)),models_module_1=require(_0x1939ef(0x1c9)),official_module_1=require('./modules/official/official.module'),order_module_1=require('./modules/order/order.module'),pay_module_1=require(_0x1939ef(0x1f1)),plugin_module_1=require('./modules/plugin/plugin.module'),redisCache_module_1=require(_0x1939ef(0x1ce)),search_module_1=require('./modules/search/search.module'),signin_module_1=require('./modules/signin/signin.module'),statistic_module_1=require(_0x1939ef(0x1d0)),task_module_1=require('./modules/task/task.module'),upload_module_1=require(_0x1939ef(0x1c6)),user_module_1=require(_0x1939ef(0x1ac)),userBalance_module_1=require(_0x1939ef(0x1d9)),verification_module_1=require(_0x1939ef(0x1c8)),aippt_module_1=require(_0x1939ef(0x1dc));global['fetch']=fetch;let AppModule=class AppModule{[_0x1939ef(0x1bf)](_0x576acc){const _0x34fffd=_0x1939ef;_0x576acc[_0x34fffd(0x1e6)](authorization_middleware_1[_0x34fffd(0x1e4)])[_0x34fffd(0x1ef)](_0x34fffd(0x1cf))['forRoutes']('*');}};AppModule=__decorate([(0x0,common_1[_0x1939ef(0x1b0)])(),(0x0,common_1[_0x1939ef(0x1af)])({'imports':[database_module_1[_0x1939ef(0x1ec)],serve_static_1[_0x1939ef(0x1c0)][_0x1939ef(0x1c1)]({'rootPath':(0x0,path_1[_0x1939ef(0x1de)])(__dirname,'..',_0x1939ef(0x1b2)),'serveRoot':process[_0x1939ef(0x1c5)]['ADMIN_SERVE_ROOT']||_0x1939ef(0x1d3)},{'rootPath':(0x0,path_1[_0x1939ef(0x1de)])(__dirname,'..','public/file'),'serveRoot':_0x1939ef(0x1f2),'serveStaticOptions':{'setHeaders':(_0x16abf1,_0xea1857,_0x35ecfa)=>{const _0x505145=_0x1939ef;_0x16abf1['set'](_0x505145(0x1b1),'*');}}},{'rootPath':(0x0,path_1['join'])(__dirname,'..','public/chat'),'serveRoot':'/'}),user_module_1['UserModule'],plugin_module_1[_0x1939ef(0x1b6)],auth_module_1[_0x1939ef(0x1ba)],verification_module_1[_0x1939ef(0x1db)],chat_module_1[_0x1939ef(0x1df)],crami_module_1[_0x1939ef(0x1e1)],userBalance_module_1['UserBalanceModule'],chatLog_module_1[_0x1939ef(0x1f0)],upload_module_1[_0x1939ef(0x1e7)],redisCache_module_1[_0x1939ef(0x1e3)],globalConfig_module_1[_0x1939ef(0x1c4)],statistic_module_1[_0x1939ef(0x1eb)],badWords_module_1[_0x1939ef(0x1d1)],autoreply_module_1['AutoreplyModule'],app_module_1[_0x1939ef(0x1d4)],pay_module_1[_0x1939ef(0x1b4)],order_module_1['OrderModule'],official_module_1['OfficialModule'],task_module_1[_0x1939ef(0x1e8)],chatGroup_module_1['ChatGroupModule'],signin_module_1[_0x1939ef(0x1bc)],models_module_1['ModelsModule'],menu_module_1['MenuModule'],gallery_module_1[_0x1939ef(0x1bb)],search_module_1['SearchModule'],aippt_module_1['AipptModule']],'providers':[custom_logger_service_1[_0x1939ef(0x1b9)],{'provide':core_1['APP_INTERCEPTOR'],'useClass':abort_interceptor_1['AbortInterceptor']}],'exports':[custom_logger_service_1[_0x1939ef(0x1b9)]]})],AppModule),exports[_0x1939ef(0x1d4)]=AppModule;function _0xd6b0(_0x152a15,_0x590ab3){const _0x37bb64=_0x37bb();return _0xd6b0=function(_0xd6b05f,_0x113d8f){_0xd6b05f=_0xd6b05f-0x1ac;let _0x2581d5=_0x37bb64[_0xd6b05f];return _0x2581d5;},_0xd6b0(_0x152a15,_0x590ab3);}function _0x37bb(){const _0x5ef2d9=['StatisticModule','DatabaseModule','1370276dmOJJQ','5WvuVSb','exclude','ChatLogModule','./modules/pay/pay.module','/file','./modules/user/user.module','./modules/auth/auth.module','595761RscUEx','Module','Global','Access-Control-Allow-Origin','public/admin','11233130JCDFII','PayModule','333732ZOsZlV','PluginModule','./modules/gallery/gallery.module','@nestjs/common','CustomLoggerService','AuthModule','GalleryModule','SigninModule','822508txOYgf','defineProperty','configure','ServeStaticModule','forRoot','isomorphic-fetch','4507592HjyGbH','GlobalConfigModule','env','./modules/upload/upload.module','path','./modules/verification/verification.module','./modules/models/models.module','./modules/menu/menu.module','./modules/crami/crami.module','function','7IfIzEs','./modules/redisCache/redisCache.module','/api/config/setKey','./modules/statistic/statistic.module','BadWordsModule','@nestjs/serve-static','/admin','AppModule','688149kHuCgZ','./modules/app/app.module','./common/logger/custom-logger.service','./common/middleware/authorization.middleware','./modules/userBalance/userBalance.module','__decorate','VerificationModule','./modules/aippt/aippt.module','./modules/autoreply/autoreply.module','join','ChatModule','./common/interceptors/abort.interceptor','CramiModule','decorate','RedisCacheModule','AuthorizationMiddleware','3iZvRtW','apply','UploadModule','TaskModule','./modules/chatLog/chatLog.module','length'];_0x37bb=function(){return _0x5ef2d9;};return _0x37bb();}