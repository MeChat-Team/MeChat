'use strict';const _0xf2a3f=_0x185a;function _0x185a(_0x5ee524,_0x2209ff){const _0x38bfe8=_0x38bf();return _0x185a=function(_0x185aca,_0x1293f5){_0x185aca=_0x185aca-0x169;let _0x1d975f=_0x38bfe8[_0x185aca];return _0x1d975f;},_0x185a(_0x5ee524,_0x2209ff);}function _0x38bf(){const _0x298ffe=['197058RTOafR','map','14BzuuOX','8BovKAb','1553260dQqOxO','3436dXTugs','5378406uWzVZb','x-forwarded-for','getClientIp','socket','3glWWRn','222886MqPMlC','startsWith','trim','remoteAddress','386541IuAEFv','258RWZpWb','__esModule','test','defineProperty','467655qLxxMx'];_0x38bf=function(){return _0x298ffe;};return _0x38bf();}(function(_0x28538,_0x1cf225){const _0x511ebc=_0x185a,_0x3149bb=_0x28538();while(!![]){try{const _0x60008a=parseInt(_0x511ebc(0x17a))/0x1*(-parseInt(_0x511ebc(0x17b))/0x2)+parseInt(_0x511ebc(0x16b))/0x3*(parseInt(_0x511ebc(0x175))/0x4)+-parseInt(_0x511ebc(0x16f))/0x5+parseInt(_0x511ebc(0x170))/0x6*(-parseInt(_0x511ebc(0x172))/0x7)+parseInt(_0x511ebc(0x173))/0x8*(-parseInt(_0x511ebc(0x16a))/0x9)+parseInt(_0x511ebc(0x174))/0xa+parseInt(_0x511ebc(0x176))/0xb;if(_0x60008a===_0x1cf225)break;else _0x3149bb['push'](_0x3149bb['shift']());}catch(_0x2c6344){_0x3149bb['push'](_0x3149bb['shift']());}}}(_0x38bf,0x2c593));Object[_0xf2a3f(0x16e)](exports,_0xf2a3f(0x16c),{'value':!![]}),exports[_0xf2a3f(0x178)]=void 0x0;function getFirstValidIp(_0x264031){const _0xfade4e=_0xf2a3f,_0x3346b1=_0x264031['split'](',')[_0xfade4e(0x171)](_0x29547c=>_0x29547c[_0xfade4e(0x17d)]());return _0x3346b1['find'](_0x7a40ef=>isValidIp(_0x7a40ef))||'';}function isValidIp(_0x2a489c){const _0x1630a5=_0xf2a3f;return/^\d{1,3}(\.\d{1,3}){3}$/['test'](_0x2a489c)||/^::ffff:\d{1,3}(\.\d{1,3}){3}$/[_0x1630a5(0x16d)](_0x2a489c);}function getClientIp(_0x2a3008){const _0x336d42=_0xf2a3f,_0x174888=_0x2a3008['header'](_0x336d42(0x177));let _0x57d5bc=_0x174888?getFirstValidIp(_0x174888):'';return!_0x57d5bc&&(_0x57d5bc=_0x2a3008['connection'][_0x336d42(0x169)]||_0x2a3008[_0x336d42(0x179)][_0x336d42(0x169)]||''),_0x57d5bc[_0x336d42(0x17c)]('::ffff:')&&(_0x57d5bc=_0x57d5bc['substring'](0x7)),_0x57d5bc;}exports[_0xf2a3f(0x178)]=getClientIp;