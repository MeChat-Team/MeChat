'use strict';const _0x296546=_0xa3a7;(function(_0xefffff,_0x4e437b){const _0x2cfe3e=_0xa3a7,_0x5e6c38=_0xefffff();while(!![]){try{const _0x3a61a1=-parseInt(_0x2cfe3e(0x1f1))/0x1+parseInt(_0x2cfe3e(0x1dc))/0x2+parseInt(_0x2cfe3e(0x1de))/0x3*(parseInt(_0x2cfe3e(0x204))/0x4)+parseInt(_0x2cfe3e(0x1e7))/0x5*(-parseInt(_0x2cfe3e(0x1e1))/0x6)+parseInt(_0x2cfe3e(0x1ed))/0x7+parseInt(_0x2cfe3e(0x1e3))/0x8*(parseInt(_0x2cfe3e(0x1e6))/0x9)+-parseInt(_0x2cfe3e(0x1f6))/0xa;if(_0x3a61a1===_0x4e437b)break;else _0x5e6c38['push'](_0x5e6c38['shift']());}catch(_0x2197ac){_0x5e6c38['push'](_0x5e6c38['shift']());}}}(_0x5f3d,0xa7538));Object[_0x296546(0x1e4)](exports,_0x296546(0x20a),{'value':!![]}),exports[_0x296546(0x201)]=void 0x0;function _0x5f3d(){const _0xeeae55=['text','createConnection','DB_USER','DB_PORT','\x20type\x20updated\x20to\x20TEXT\x20in\x20table\x20','__esModule','Column\x20','dotenv','Database','CREATE\x20DATABASE\x20','698934dvGACs','length','413298jEjoOF','config','end','6DBAbOn','env','16amEMFE','defineProperty','DB_PASS','4035285wbhRGH','6776495oejKau','mysql2/promise','execute','DB_DATABASE','log','typeorm','4664002mdLSZL','数据库已存在[','SHOW\x20DATABASES\x20LIKE\x20\x27','mysql','390055JqQxCB','Logger','/../**/*.entity{.ts,.js}','Database\x20connected\x20and\x20synchronized\x20successfully','coverImg','328250MkaEUX','destroy','数据库创建成功[','SELECT\x20COLUMN_NAME,\x20DATA_TYPE\x20FROM\x20INFORMATION_SCHEMA.COLUMNS\x20WHERE\x20TABLE_NAME\x20=\x20?\x20AND\x20COLUMN_NAME\x20=\x20?','DataSource','Error\x20updating\x20column\x20type\x20in\x20table\x20','DB_HOST','\x20is\x20already\x20of\x20type\x20TEXT\x20in\x20table\x20','Error\x20during\x20database\x20validation:','initialize','configVal','initDatabase','error','ALTER\x20TABLE\x20??\x20MODIFY\x20COLUMN\x20??\x20TEXT','16NTAtdB'];_0x5f3d=function(){return _0xeeae55;};return _0x5f3d();}const common_1=require('@nestjs/common'),dotenv_1=require(_0x296546(0x20c)),mysql=require(_0x296546(0x1e8)),typeorm_1=require(_0x296546(0x1ec));(0x0,dotenv_1['config'])();const dataSourceOptions={'type':_0x296546(0x1f0),'port':parseInt(process['env'][_0x296546(0x208)],0xa),'host':process[_0x296546(0x1e2)][_0x296546(0x1fc)],'username':process['env']['DB_USER'],'password':process[_0x296546(0x1e2)][_0x296546(0x1e5)],'database':process['env'][_0x296546(0x1ea)],'entities':[__dirname+_0x296546(0x1f3)],'logging':![],'synchronize':!![],'charset':'utf8mb4','timezone':'+08:00'};async function validateDatabase(){const _0x5d1408=_0x296546,_0x28ecf8=await mysql['createConnection']({'host':process[_0x5d1408(0x1e2)][_0x5d1408(0x1fc)],'user':process[_0x5d1408(0x1e2)][_0x5d1408(0x207)],'password':process[_0x5d1408(0x1e2)][_0x5d1408(0x1e5)],'port':parseInt(process[_0x5d1408(0x1e2)][_0x5d1408(0x208)],0xa)});try{const [_0x21b959]=await _0x28ecf8['execute'](_0x5d1408(0x1ef)+process[_0x5d1408(0x1e2)]['DB_DATABASE']+'\x27');Array['isArray'](_0x21b959)&&_0x21b959[_0x5d1408(0x1dd)]===0x0?(await _0x28ecf8[_0x5d1408(0x1e9)](_0x5d1408(0x1db)+process['env'][_0x5d1408(0x1ea)]),common_1[_0x5d1408(0x1f2)][_0x5d1408(0x1eb)](_0x5d1408(0x1f8)+process[_0x5d1408(0x1e2)]['DB_DATABASE']+']',_0x5d1408(0x1da))):common_1[_0x5d1408(0x1f2)][_0x5d1408(0x1eb)](_0x5d1408(0x1ee)+process[_0x5d1408(0x1e2)][_0x5d1408(0x1ea)]+']',_0x5d1408(0x1da));}catch(_0x4dfbde){common_1[_0x5d1408(0x1f2)][_0x5d1408(0x202)](_0x5d1408(0x1fe),_0x4dfbde,_0x5d1408(0x1da));}finally{await _0x28ecf8[_0x5d1408(0x1e0)]();}}async function updateColumnType(){const _0x558507=_0x296546,_0x1699ff=await mysql[_0x558507(0x206)]({'host':process['env']['DB_HOST'],'user':process[_0x558507(0x1e2)][_0x558507(0x207)],'password':process[_0x558507(0x1e2)]['DB_PASS'],'port':parseInt(process[_0x558507(0x1e2)][_0x558507(0x208)],0xa),'database':process[_0x558507(0x1e2)]['DB_DATABASE']});async function _0x1c5c3a(_0x19a403,_0x1f3e02){const _0x1901e4=_0x558507;try{const [_0x5c953e]=await _0x1699ff[_0x1901e4(0x1e9)](_0x1901e4(0x1f9),[_0x19a403,_0x1f3e02]);_0x5c953e[_0x1901e4(0x1dd)]>0x0&&_0x5c953e[0x0]['DATA_TYPE']!==_0x1901e4(0x205)?(await _0x1699ff[_0x1901e4(0x1e9)](_0x1901e4(0x203),[_0x19a403,_0x1f3e02]),common_1[_0x1901e4(0x1f2)][_0x1901e4(0x1eb)](_0x1901e4(0x20b)+_0x1f3e02+_0x1901e4(0x209)+_0x19a403,_0x1901e4(0x1da))):common_1[_0x1901e4(0x1f2)]['log'](_0x1901e4(0x20b)+_0x1f3e02+_0x1901e4(0x1fd)+_0x19a403,_0x1901e4(0x1da));}catch(_0xfe14dd){common_1[_0x1901e4(0x1f2)][_0x1901e4(0x202)](_0x1901e4(0x1fb)+_0x19a403+':',_0xfe14dd);}}try{await _0x1c5c3a(_0x558507(0x1df),_0x558507(0x200)),await _0x1c5c3a('app',_0x558507(0x1f5));}finally{await _0x1699ff[_0x558507(0x1e0)]();}}async function initDatabase(){const _0x2b4960=_0x296546;await validateDatabase(),await updateColumnType();const _0x57cee8=new typeorm_1[(_0x2b4960(0x1fa))](dataSourceOptions);try{await _0x57cee8[_0x2b4960(0x1ff)](),common_1[_0x2b4960(0x1f2)]['log'](_0x2b4960(0x1f4),_0x2b4960(0x1da));}catch(_0x132d98){common_1[_0x2b4960(0x1f2)][_0x2b4960(0x202)]('Error\x20during\x20TypeORM\x20initialization:',_0x132d98);}finally{await _0x57cee8[_0x2b4960(0x1f7)]();}}function _0xa3a7(_0x536002,_0x5068d9){const _0x5f3d78=_0x5f3d();return _0xa3a7=function(_0xa3a7d6,_0x5c2031){_0xa3a7d6=_0xa3a7d6-0x1da;let _0x3e0318=_0x5f3d78[_0xa3a7d6];return _0x3e0318;},_0xa3a7(_0x536002,_0x5068d9);}exports[_0x296546(0x201)]=initDatabase;