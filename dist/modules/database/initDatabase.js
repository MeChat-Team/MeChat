'use strict';function _0x10ea(){const _0x5e12b0=['destroy','log','length','DB_HOST','Logger','Database\x20connected\x20and\x20synchronized\x20successfully','DB_PASS','24IckqWX','DB_USER','DATA_TYPE','error','config','configVal','createConnection','20wCeujB','数据库创建成功[','Database','450318ZwECFC','Column\x20','Error\x20updating\x20column\x20type\x20in\x20table\x20','initialize','coverImg','end','38510hVlIHK','\x20type\x20updated\x20to\x20TEXT\x20in\x20table\x20','561285AJymGd','defineProperty','+08:00','app','841280VyIpRF','text','env','7acHfay','DB_DATABASE','execute','SELECT\x20COLUMN_NAME,\x20DATA_TYPE\x20FROM\x20INFORMATION_SCHEMA.COLUMNS\x20WHERE\x20TABLE_NAME\x20=\x20?\x20AND\x20COLUMN_NAME\x20=\x20?','446940TwXKAK','Error\x20during\x20TypeORM\x20initialization:','DB_PORT','113160hMBgoS','154130DRbFhz','isArray','typeorm','initDatabase','/../**/*.entity{.ts,.js}','__esModule'];_0x10ea=function(){return _0x5e12b0;};return _0x10ea();}const _0x26636f=_0x581a;(function(_0x5428eb,_0x325052){const _0x4d3e75=_0x581a,_0x4657db=_0x5428eb();while(!![]){try{const _0x3f949e=-parseInt(_0x4d3e75(0xd5))/0x1+parseInt(_0x4d3e75(0xd4))/0x2+parseInt(_0x4d3e75(0xd1))/0x3+-parseInt(_0x4d3e75(0xbb))/0x4*(parseInt(_0x4d3e75(0xc4))/0x5)+parseInt(_0x4d3e75(0xbe))/0x6*(parseInt(_0x4d3e75(0xcd))/0x7)+-parseInt(_0x4d3e75(0xe2))/0x8*(-parseInt(_0x4d3e75(0xc6))/0x9)+-parseInt(_0x4d3e75(0xca))/0xa;if(_0x3f949e===_0x325052)break;else _0x4657db['push'](_0x4657db['shift']());}catch(_0x25c907){_0x4657db['push'](_0x4657db['shift']());}}}(_0x10ea,0x2e9dc));Object[_0x26636f(0xc7)](exports,_0x26636f(0xda),{'value':!![]}),exports[_0x26636f(0xd8)]=void 0x0;const common_1=require('@nestjs/common'),dotenv_1=require('dotenv'),mysql=require('mysql2/promise'),typeorm_1=require(_0x26636f(0xd7));(0x0,dotenv_1[_0x26636f(0xe6)])();const dataSourceOptions={'type':'mysql','port':parseInt(process[_0x26636f(0xcc)][_0x26636f(0xd3)],0xa),'host':process[_0x26636f(0xcc)][_0x26636f(0xde)],'username':process[_0x26636f(0xcc)][_0x26636f(0xe3)],'password':process['env'][_0x26636f(0xe1)],'database':process[_0x26636f(0xcc)][_0x26636f(0xce)],'entities':[__dirname+_0x26636f(0xd9)],'logging':![],'synchronize':!![],'charset':'utf8mb4','timezone':_0x26636f(0xc8)};function _0x581a(_0x2c5798,_0x55b93d){const _0x10ea00=_0x10ea();return _0x581a=function(_0x581a9b,_0x42277b){_0x581a9b=_0x581a9b-0xbb;let _0x408f9b=_0x10ea00[_0x581a9b];return _0x408f9b;},_0x581a(_0x2c5798,_0x55b93d);}async function validateDatabase(){const _0x26ea06=_0x26636f,_0x42cc44=await mysql['createConnection']({'host':process[_0x26ea06(0xcc)][_0x26ea06(0xde)],'user':process[_0x26ea06(0xcc)][_0x26ea06(0xe3)],'password':process[_0x26ea06(0xcc)][_0x26ea06(0xe1)],'port':parseInt(process[_0x26ea06(0xcc)][_0x26ea06(0xd3)],0xa)});try{const [_0x43dc59]=await _0x42cc44[_0x26ea06(0xcf)]('SHOW\x20DATABASES\x20LIKE\x20\x27'+process[_0x26ea06(0xcc)][_0x26ea06(0xce)]+'\x27');Array[_0x26ea06(0xd6)](_0x43dc59)&&_0x43dc59['length']===0x0?(await _0x42cc44[_0x26ea06(0xcf)]('CREATE\x20DATABASE\x20'+process['env']['DB_DATABASE']),common_1[_0x26ea06(0xdf)][_0x26ea06(0xdc)](_0x26ea06(0xbc)+process[_0x26ea06(0xcc)][_0x26ea06(0xce)]+']',_0x26ea06(0xbd))):common_1['Logger']['log']('数据库已存在['+process[_0x26ea06(0xcc)][_0x26ea06(0xce)]+']',_0x26ea06(0xbd));}catch(_0x5845e3){common_1[_0x26ea06(0xdf)][_0x26ea06(0xe5)]('Error\x20during\x20database\x20validation:',_0x5845e3,_0x26ea06(0xbd));}finally{await _0x42cc44[_0x26ea06(0xc3)]();}}async function updateColumnType(){const _0x42b5e0=_0x26636f,_0x273802=await mysql[_0x42b5e0(0xe8)]({'host':process['env'][_0x42b5e0(0xde)],'user':process['env'][_0x42b5e0(0xe3)],'password':process[_0x42b5e0(0xcc)][_0x42b5e0(0xe1)],'port':parseInt(process[_0x42b5e0(0xcc)][_0x42b5e0(0xd3)],0xa),'database':process[_0x42b5e0(0xcc)][_0x42b5e0(0xce)]});async function _0x51d8e0(_0x5ecd5f,_0x44129f){const _0xf35200=_0x42b5e0;try{const [_0x2211fc]=await _0x273802['execute'](_0xf35200(0xd0),[_0x5ecd5f,_0x44129f]);_0x2211fc[_0xf35200(0xdd)]>0x0&&_0x2211fc[0x0][_0xf35200(0xe4)]!==_0xf35200(0xcb)?(await _0x273802['execute']('ALTER\x20TABLE\x20??\x20MODIFY\x20COLUMN\x20??\x20TEXT',[_0x5ecd5f,_0x44129f]),common_1[_0xf35200(0xdf)][_0xf35200(0xdc)](_0xf35200(0xbf)+_0x44129f+_0xf35200(0xc5)+_0x5ecd5f,_0xf35200(0xbd))):common_1[_0xf35200(0xdf)][_0xf35200(0xdc)]('Column\x20'+_0x44129f+'\x20is\x20already\x20of\x20type\x20TEXT\x20in\x20table\x20'+_0x5ecd5f,_0xf35200(0xbd));}catch(_0x224234){common_1[_0xf35200(0xdf)]['error'](_0xf35200(0xc0)+_0x5ecd5f+':',_0x224234);}}try{await _0x51d8e0(_0x42b5e0(0xe6),_0x42b5e0(0xe7)),await _0x51d8e0(_0x42b5e0(0xc9),_0x42b5e0(0xc2));}finally{await _0x273802['end']();}}async function initDatabase(){const _0x54d0ab=_0x26636f;await validateDatabase(),await updateColumnType();const _0x861271=new typeorm_1['DataSource'](dataSourceOptions);try{await _0x861271[_0x54d0ab(0xc1)](),common_1['Logger']['log'](_0x54d0ab(0xe0),_0x54d0ab(0xbd));}catch(_0x2fbeea){common_1[_0x54d0ab(0xdf)]['error'](_0x54d0ab(0xd2),_0x2fbeea);}finally{await _0x861271[_0x54d0ab(0xdb)]();}}exports[_0x26636f(0xd8)]=initDatabase;