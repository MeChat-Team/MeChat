'use strict';function _0x4fc9(){var _0x346976=['design:paramtypes','DB_PORT','getOwnPropertyDescriptor','object','DatabaseService','__decorate','connection','metadata','DataSource','@nestjs/typeorm','logger','log','error','Logger','Your\x20MySQL\x20database\x20named\x20','DatabaseModule','6cxxspb','2oQgmqC','/../**/*.entity{.ts,.js}','12010201RQSuoW','3082178eKeVkC','\x20has\x20been\x20connected','972930gJgUji','decorate','DB_DATABASE','180RZvJzu','function','56cPKfza','length','__metadata','2301327VqGeIH','__esModule','DB_HOST','typeorm','defineProperty','utf8mb4','790svHVLL','Module','1723757iTZBEg','1613637BNaWos','+08:00','DB_USER','9884oxlnrC','env','forRootAsync'];_0x4fc9=function(){return _0x346976;};return _0x4fc9();}function _0x203c(_0x1b282f,_0x576947){var _0x4fc9f0=_0x4fc9();return _0x203c=function(_0x203c9d,_0x41f0b9){_0x203c9d=_0x203c9d-0x11d;var _0xd2d697=_0x4fc9f0[_0x203c9d];return _0xd2d697;},_0x203c(_0x1b282f,_0x576947);}var _0x420f61=_0x203c;(function(_0x2b90ff,_0x207adb){var _0x38baa5=_0x203c,_0x56be89=_0x2b90ff();while(!![]){try{var _0x276e80=-parseInt(_0x38baa5(0x12d))/0x1*(-parseInt(_0x38baa5(0x145))/0x2)+parseInt(_0x38baa5(0x125))/0x3+parseInt(_0x38baa5(0x131))/0x4*(-parseInt(_0x38baa5(0x12b))/0x5)+-parseInt(_0x38baa5(0x144))/0x6*(-parseInt(_0x38baa5(0x147))/0x7)+-parseInt(_0x38baa5(0x122))/0x8*(-parseInt(_0x38baa5(0x12e))/0x9)+parseInt(_0x38baa5(0x11d))/0xa+-parseInt(_0x38baa5(0x148))/0xb*(parseInt(_0x38baa5(0x120))/0xc);if(_0x276e80===_0x207adb)break;else _0x56be89['push'](_0x56be89['shift']());}catch(_0x349291){_0x56be89['push'](_0x56be89['shift']());}}}(_0x4fc9,0xebbbd));var __decorate=this&&this[_0x420f61(0x139)]||function(_0x5d7133,_0x5286dd,_0x4af35e,_0x504499){var _0x141ac4=_0x420f61,_0x4d8006=arguments[_0x141ac4(0x123)],_0x5a81dd=_0x4d8006<0x3?_0x5286dd:_0x504499===null?_0x504499=Object[_0x141ac4(0x136)](_0x5286dd,_0x4af35e):_0x504499,_0x98a784;if(typeof Reflect==='object'&&typeof Reflect[_0x141ac4(0x11e)]===_0x141ac4(0x121))_0x5a81dd=Reflect[_0x141ac4(0x11e)](_0x5d7133,_0x5286dd,_0x4af35e,_0x504499);else{for(var _0x24b943=_0x5d7133[_0x141ac4(0x123)]-0x1;_0x24b943>=0x0;_0x24b943--)if(_0x98a784=_0x5d7133[_0x24b943])_0x5a81dd=(_0x4d8006<0x3?_0x98a784(_0x5a81dd):_0x4d8006>0x3?_0x98a784(_0x5286dd,_0x4af35e,_0x5a81dd):_0x98a784(_0x5286dd,_0x4af35e))||_0x5a81dd;}return _0x4d8006>0x3&&_0x5a81dd&&Object[_0x141ac4(0x129)](_0x5286dd,_0x4af35e,_0x5a81dd),_0x5a81dd;},__metadata=this&&this[_0x420f61(0x124)]||function(_0x212b62,_0x10778e){var _0x13e1af=_0x420f61;if(typeof Reflect===_0x13e1af(0x137)&&typeof Reflect[_0x13e1af(0x13b)]==='function')return Reflect[_0x13e1af(0x13b)](_0x212b62,_0x10778e);},DatabaseModule_1;Object[_0x420f61(0x129)](exports,_0x420f61(0x126),{'value':!![]}),exports[_0x420f61(0x143)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x420f61(0x13d)),typeorm_2=require(_0x420f61(0x128)),database_service_1=require('./database.service');let DatabaseModule=DatabaseModule_1=class DatabaseModule{constructor(_0x4223a0){var _0x370585=_0x420f61;this[_0x370585(0x13a)]=_0x4223a0,this[_0x370585(0x13e)]=new common_1[(_0x370585(0x141))](DatabaseModule_1['name']);}['onModuleInit'](){var _0x1193ad=_0x420f61;const {database:_0x573195}=this[_0x1193ad(0x13a)]['options'];this[_0x1193ad(0x13e)][_0x1193ad(0x13f)](_0x1193ad(0x142)+_0x573195+_0x1193ad(0x149));}};DatabaseModule=DatabaseModule_1=__decorate([(0x0,common_1[_0x420f61(0x12c)])({'imports':[typeorm_1['TypeOrmModule'][_0x420f61(0x133)]({'useFactory':()=>({'type':'mysql','host':process['env'][_0x420f61(0x127)],'port':parseInt(process[_0x420f61(0x132)][_0x420f61(0x135)],0xa),'username':process[_0x420f61(0x132)][_0x420f61(0x130)],'password':process[_0x420f61(0x132)]['DB_PASS'],'database':process[_0x420f61(0x132)][_0x420f61(0x11f)],'entities':[__dirname+_0x420f61(0x146)],'synchronize':!![],'dropSchema':![],'migrationsRun':!![],'logging':[_0x420f61(0x140),'schema'],'charset':_0x420f61(0x12a),'timezone':_0x420f61(0x12f),'poolSize':0x14,'connectTimeout':0xea60,'acquireTimeout':0xea60,'extra':{'connectionLimit':0x14},'retryAttempts':0x3,'retryDelay':0xbb8,'keepConnectionAlive':!![]})})],'providers':[database_service_1[_0x420f61(0x138)]]}),__metadata(_0x420f61(0x134),[typeorm_2[_0x420f61(0x13c)]])],DatabaseModule),exports['DatabaseModule']=DatabaseModule;