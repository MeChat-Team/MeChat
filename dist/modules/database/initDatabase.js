'use strict';const _0x296855=_0x1247;(function(_0x5e8495,_0x374c0d){const _0x1b29ef=_0x1247,_0x404bdc=_0x5e8495();while(!![]){try{const _0xb5fb1e=parseInt(_0x1b29ef(0x98))/0x1*(parseInt(_0x1b29ef(0x88))/0x2)+parseInt(_0x1b29ef(0x90))/0x3*(-parseInt(_0x1b29ef(0x87))/0x4)+-parseInt(_0x1b29ef(0xa0))/0x5*(-parseInt(_0x1b29ef(0xac))/0x6)+-parseInt(_0x1b29ef(0xa3))/0x7*(parseInt(_0x1b29ef(0xad))/0x8)+-parseInt(_0x1b29ef(0xb2))/0x9+parseInt(_0x1b29ef(0xa6))/0xa*(-parseInt(_0x1b29ef(0x89))/0xb)+parseInt(_0x1b29ef(0xae))/0xc;if(_0xb5fb1e===_0x374c0d)break;else _0x404bdc['push'](_0x404bdc['shift']());}catch(_0x4396bd){_0x404bdc['push'](_0x404bdc['shift']());}}}(_0x5e2a,0xb7ced));function _0x5e2a(){const _0x38b96b=['end','initialize','396855ondnBi','coverImg','text','DB_DATABASE','app','/../**/*.entity{.ts,.js}','DB_HOST','defineProperty','11wEhYwa','DB_PORT','Logger','@nestjs/common','length','DB_USER','destroy','createConnection','1333945pSNyDx','ALTER\x20TABLE\x20??\x20MODIFY\x20COLUMN\x20??\x20TEXT','execute','10499363SVVAtq','env','error','6287830XbqxBK','DB_PASS','Database','Database\x20connected\x20and\x20synchronized\x20successfully','dotenv','initDatabase','30hvGLxZ','8EcTPBA','25747860LsyYbT','typeorm','mysql2/promise','SHOW\x20DATABASES\x20LIKE\x20\x27','2597751shlHUz','\x20is\x20already\x20of\x20type\x20TEXT\x20in\x20table\x20','DATA_TYPE','Error\x20updating\x20column\x20type\x20in\x20table\x20','log','utf8mb4','数据库已存在[','20YoBULI','64006pKGbAH','11KdUIfM','+08:00','Error\x20during\x20TypeORM\x20initialization:','Error\x20during\x20database\x20validation:','Column\x20'];_0x5e2a=function(){return _0x38b96b;};return _0x5e2a();}Object[_0x296855(0x97)](exports,'__esModule',{'value':!![]}),exports[_0x296855(0xab)]=void 0x0;const common_1=require(_0x296855(0x9b)),dotenv_1=require(_0x296855(0xaa)),mysql=require(_0x296855(0xb0)),typeorm_1=require(_0x296855(0xaf));(0x0,dotenv_1['config'])();function _0x1247(_0x296889,_0x28409f){const _0x5e2a60=_0x5e2a();return _0x1247=function(_0x1247b8,_0x5b83cf){_0x1247b8=_0x1247b8-0x85;let _0x35edce=_0x5e2a60[_0x1247b8];return _0x35edce;},_0x1247(_0x296889,_0x28409f);}const dataSourceOptions={'type':'mysql','port':parseInt(process[_0x296855(0xa4)][_0x296855(0x99)],0xa),'host':process[_0x296855(0xa4)][_0x296855(0x96)],'username':process[_0x296855(0xa4)]['DB_USER'],'password':process['env'][_0x296855(0xa7)],'database':process[_0x296855(0xa4)]['DB_DATABASE'],'entities':[__dirname+_0x296855(0x95)],'logging':![],'synchronize':!![],'charset':_0x296855(0x85),'timezone':_0x296855(0x8a)};async function validateDatabase(){const _0x519ef4=_0x296855,_0x1c6c48=await mysql[_0x519ef4(0x9f)]({'host':process[_0x519ef4(0xa4)]['DB_HOST'],'user':process[_0x519ef4(0xa4)]['DB_USER'],'password':process[_0x519ef4(0xa4)]['DB_PASS'],'port':parseInt(process['env']['DB_PORT'],0xa)});try{const [_0x56addd]=await _0x1c6c48[_0x519ef4(0xa2)](_0x519ef4(0xb1)+process[_0x519ef4(0xa4)][_0x519ef4(0x93)]+'\x27');Array['isArray'](_0x56addd)&&_0x56addd['length']===0x0?(await _0x1c6c48[_0x519ef4(0xa2)]('CREATE\x20DATABASE\x20'+process[_0x519ef4(0xa4)]['DB_DATABASE']),common_1['Logger'][_0x519ef4(0xb6)]('数据库创建成功['+process[_0x519ef4(0xa4)][_0x519ef4(0x93)]+']','Database')):common_1[_0x519ef4(0x9a)]['log'](_0x519ef4(0x86)+process['env']['DB_DATABASE']+']','Database');}catch(_0x205e34){common_1[_0x519ef4(0x9a)][_0x519ef4(0xa5)](_0x519ef4(0x8c),_0x205e34,_0x519ef4(0xa8));}finally{await _0x1c6c48[_0x519ef4(0x8e)]();}}async function updateColumnType(){const _0xfe57fa=_0x296855,_0x282785=await mysql['createConnection']({'host':process[_0xfe57fa(0xa4)][_0xfe57fa(0x96)],'user':process[_0xfe57fa(0xa4)][_0xfe57fa(0x9d)],'password':process[_0xfe57fa(0xa4)][_0xfe57fa(0xa7)],'port':parseInt(process[_0xfe57fa(0xa4)][_0xfe57fa(0x99)],0xa),'database':process[_0xfe57fa(0xa4)][_0xfe57fa(0x93)]});async function _0xe23619(_0x34b298,_0x366dcc){const _0x3e7372=_0xfe57fa;try{const [_0x110311]=await _0x282785[_0x3e7372(0xa2)]('SELECT\x20COLUMN_NAME,\x20DATA_TYPE\x20FROM\x20INFORMATION_SCHEMA.COLUMNS\x20WHERE\x20TABLE_NAME\x20=\x20?\x20AND\x20COLUMN_NAME\x20=\x20?',[_0x34b298,_0x366dcc]);_0x110311[_0x3e7372(0x9c)]>0x0&&_0x110311[0x0][_0x3e7372(0xb4)]!==_0x3e7372(0x92)?(await _0x282785[_0x3e7372(0xa2)](_0x3e7372(0xa1),[_0x34b298,_0x366dcc]),common_1[_0x3e7372(0x9a)][_0x3e7372(0xb6)]('Column\x20'+_0x366dcc+'\x20type\x20updated\x20to\x20TEXT\x20in\x20table\x20'+_0x34b298,_0x3e7372(0xa8))):common_1[_0x3e7372(0x9a)][_0x3e7372(0xb6)](_0x3e7372(0x8d)+_0x366dcc+_0x3e7372(0xb3)+_0x34b298,_0x3e7372(0xa8));}catch(_0x548071){common_1[_0x3e7372(0x9a)][_0x3e7372(0xa5)](_0x3e7372(0xb5)+_0x34b298+':',_0x548071);}}try{await _0xe23619('config','configVal'),await _0xe23619(_0xfe57fa(0x94),_0xfe57fa(0x91));}finally{await _0x282785[_0xfe57fa(0x8e)]();}}async function initDatabase(){const _0x4f4a40=_0x296855;await validateDatabase(),await updateColumnType();const _0x4b9bb3=new typeorm_1['DataSource'](dataSourceOptions);try{await _0x4b9bb3[_0x4f4a40(0x8f)](),common_1[_0x4f4a40(0x9a)][_0x4f4a40(0xb6)](_0x4f4a40(0xa9),_0x4f4a40(0xa8));}catch(_0x38c706){common_1[_0x4f4a40(0x9a)][_0x4f4a40(0xa5)](_0x4f4a40(0x8b),_0x38c706);}finally{await _0x4b9bb3[_0x4f4a40(0x9e)]();}}exports[_0x296855(0xab)]=initDatabase;