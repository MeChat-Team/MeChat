'use strict';const _0x52a825=_0x2d76;(function(_0x3b671c,_0x547edf){const _0xf0ab6=_0x2d76,_0x5193f7=_0x3b671c();while(!![]){try{const _0xb54f56=parseInt(_0xf0ab6(0x143))/0x1*(parseInt(_0xf0ab6(0x164))/0x2)+parseInt(_0xf0ab6(0x146))/0x3*(-parseInt(_0xf0ab6(0x159))/0x4)+-parseInt(_0xf0ab6(0x161))/0x5+parseInt(_0xf0ab6(0x169))/0x6+-parseInt(_0xf0ab6(0x15b))/0x7+-parseInt(_0xf0ab6(0x13f))/0x8+parseInt(_0xf0ab6(0x15c))/0x9;if(_0xb54f56===_0x547edf)break;else _0x5193f7['push'](_0x5193f7['shift']());}catch(_0x4e4d92){_0x5193f7['push'](_0x5193f7['shift']());}}}(_0x3f1a,0x6722a));var __decorate=this&&this[_0x52a825(0x14e)]||function(_0x1a12df,_0x41090a,_0xdffecc,_0x102e41){const _0x41dbb2=_0x52a825;var _0x237b9b=arguments['length'],_0x5befae=_0x237b9b<0x3?_0x41090a:_0x102e41===null?_0x102e41=Object[_0x41dbb2(0x154)](_0x41090a,_0xdffecc):_0x102e41,_0x2c1ff3;if(typeof Reflect===_0x41dbb2(0x150)&&typeof Reflect[_0x41dbb2(0x153)]===_0x41dbb2(0x15e))_0x5befae=Reflect['decorate'](_0x1a12df,_0x41090a,_0xdffecc,_0x102e41);else{for(var _0x82274c=_0x1a12df[_0x41dbb2(0x155)]-0x1;_0x82274c>=0x0;_0x82274c--)if(_0x2c1ff3=_0x1a12df[_0x82274c])_0x5befae=(_0x237b9b<0x3?_0x2c1ff3(_0x5befae):_0x237b9b>0x3?_0x2c1ff3(_0x41090a,_0xdffecc,_0x5befae):_0x2c1ff3(_0x41090a,_0xdffecc))||_0x5befae;}return _0x237b9b>0x3&&_0x5befae&&Object['defineProperty'](_0x41090a,_0xdffecc,_0x5befae),_0x5befae;},__metadata=this&&this['__metadata']||function(_0x1f2915,_0x4ee924){const _0x691667=_0x52a825;if(typeof Reflect===_0x691667(0x150)&&typeof Reflect['metadata']===_0x691667(0x15e))return Reflect[_0x691667(0x137)](_0x1f2915,_0x4ee924);};Object[_0x52a825(0x157)](exports,_0x52a825(0x134),{'value':!![]}),exports[_0x52a825(0x152)]=void 0x0;const common_1=require(_0x52a825(0x14d)),rxjs_1=require('rxjs'),config_1=require(_0x52a825(0x14b)),axios_1=require(_0x52a825(0x142)),operators_1=require(_0x52a825(0x133));let AipptService=class AipptService{constructor(_0x72fc11,_0x177fa9){const _0x1c1f1d=_0x52a825;this['configService']=_0x72fc11,this[_0x1c1f1d(0x13b)]=_0x177fa9,this[_0x1c1f1d(0x15d)]=this[_0x1c1f1d(0x15f)][_0x1c1f1d(0x144)](_0x1c1f1d(0x156)),this[_0x1c1f1d(0x168)]=this[_0x1c1f1d(0x15f)][_0x1c1f1d(0x144)](_0x1c1f1d(0x13c));}[_0x52a825(0x167)](_0x522cb9){return new rxjs_1['Observable'](_0x2ef761=>{const _0x27e76e=_0x2d76;let _0x5a4665='';return _0x522cb9['on']('data',_0x2c0a38=>{const _0x569af9=_0x2d76;_0x5a4665+=_0x2c0a38[_0x569af9(0x166)]();const _0x965531=_0x5a4665[_0x569af9(0x16d)]('\x0a');_0x5a4665=_0x965531['pop']()||'';for(const _0x1d68dc of _0x965531){if(_0x1d68dc['trim']()&&_0x1d68dc['startsWith'](_0x569af9(0x162)))try{const _0x511f93=JSON[_0x569af9(0x138)](_0x1d68dc[_0x569af9(0x14c)](0x6));_0x2ef761[_0x569af9(0x160)](_0x511f93);}catch(_0x1f2ec2){console[_0x569af9(0x141)](_0x569af9(0x148),_0x1f2ec2);}}}),_0x522cb9['on']('end',()=>{const _0x184002=_0x2d76;if(_0x5a4665[_0x184002(0x163)]())try{const _0x3872e2=JSON[_0x184002(0x138)](_0x5a4665[_0x184002(0x14c)](0x6));_0x2ef761[_0x184002(0x160)](_0x3872e2);}catch(_0x3d9f7a){console[_0x184002(0x141)](_0x184002(0x14f),_0x3d9f7a);}_0x2ef761['complete']();}),_0x522cb9['on'](_0x27e76e(0x141),_0x1f1947=>{const _0x14e6dd=_0x27e76e;_0x2ef761[_0x14e6dd(0x141)](_0x1f1947);}),()=>{const _0x15d3ad=_0x27e76e;_0x522cb9[_0x15d3ad(0x151)]();};});}[_0x52a825(0x135)](_0x267d20){const _0xe0fda1=_0x52a825,_0x6f4e30=this['apiBaseUrl']+_0xe0fda1(0x16a),_0x5e023f={'stream':!![],'length':_0x267d20[_0xe0fda1(0x155)],'lang':_0x267d20[_0xe0fda1(0x13a)],'prompt':_0x267d20[_0xe0fda1(0x14a)],'subject':_0x267d20[_0xe0fda1(0x15a)],'dataUrl':_0x267d20['dataUrl']};return this['httpService']['post'](_0x6f4e30,_0x5e023f,{'headers':{'Authorization':this[_0xe0fda1(0x15d)],'Accept':_0xe0fda1(0x16c),'Cache-Control':_0xe0fda1(0x147),'Connection':_0xe0fda1(0x149)},'responseType':'stream'})[_0xe0fda1(0x16b)]((0x0,operators_1[_0xe0fda1(0x132)])(_0x121f12=>_0x121f12[_0xe0fda1(0x158)]),(0x0,operators_1[_0xe0fda1(0x145)])(_0x3f51da=>this[_0xe0fda1(0x167)](_0x3f51da)));}['generateContent'](_0x4edd53){const _0x475415=_0x52a825,_0x59eee5=this[_0x475415(0x168)]+_0x475415(0x13d);return this[_0x475415(0x13b)][_0x475415(0x136)](_0x59eee5,{'templateId':_0x4edd53['templateId'],'outlineMarkdown':_0x4edd53[_0x475415(0x140)],'asyncGenPptx':!![],'prompt':_0x4edd53[_0x475415(0x14a)],'dataUrl':_0x4edd53['dataUrl']},{'headers':{'Authorization':this[_0x475415(0x15d)],'Accept':_0x475415(0x16c),'Cache-Control':_0x475415(0x147),'Connection':_0x475415(0x149)},'responseType':_0x475415(0x165)})[_0x475415(0x16b)]((0x0,operators_1[_0x475415(0x132)])(_0x3719d6=>_0x3719d6[_0x475415(0x158)]),(0x0,operators_1[_0x475415(0x145)])(_0x20ba2b=>this['handleSSEStream'](_0x20ba2b)));}async['asyncPptInfo'](_0x2b05b6){const _0x2fbb95=_0x52a825,_0x5d25f4=this['apiBaseUrl']+_0x2fbb95(0x139),_0x432984=await this['httpService']['get'](_0x5d25f4,{'params':{'pptId':_0x2b05b6},'headers':{'Authorization':this[_0x2fbb95(0x15d)]}})['toPromise']();return _0x432984[_0x2fbb95(0x158)];}};AipptService=__decorate([(0x0,common_1[_0x52a825(0x13e)])(),__metadata(_0x52a825(0x131),[config_1['ConfigService'],axios_1['HttpService']])],AipptService),exports['AipptService']=AipptService;function _0x2d76(_0x37b4cf,_0xb37057){const _0x3f1abc=_0x3f1a();return _0x2d76=function(_0x2d765d,_0x53e7e6){_0x2d765d=_0x2d765d-0x131;let _0x3c5c63=_0x3f1abc[_0x2d765d];return _0x3c5c63;},_0x2d76(_0x37b4cf,_0xb37057);}function _0x3f1a(){const _0x47e9ca=['5678312fULtfN','outlineMarkdown','error','@nestjs/axios','806928JDXkyj','get','mergeMap','549yowgfa','no-cache','Failed\x20to\x20parse\x20SSE\x20data:','keep-alive','prompt','@nestjs/config','slice','@nestjs/common','__decorate','Failed\x20to\x20parse\x20remaining\x20SSE\x20data:','object','destroy','AipptService','decorate','getOwnPropertyDescriptor','length','DOCMEE_API_TOKEN','defineProperty','data','5684sONbnA','subject','3975489XMkaIh','5969799PBnsxS','apiToken','function','configService','next','834680DcSAUG','data:\x20','trim','2EuslqS','stream','toString','handleSSEStream','apiBaseUrl','3941388LQaUhn','/ppt/generateOutline','pipe','text/event-stream','split','design:paramtypes','map','rxjs/operators','__esModule','generateOutline','post','metadata','parse','/ppt/asyncPptInfo','lang','httpService','DOCMEE_API_URL','/ppt/generateContent','Injectable'];_0x3f1a=function(){return _0x47e9ca;};return _0x3f1a();}