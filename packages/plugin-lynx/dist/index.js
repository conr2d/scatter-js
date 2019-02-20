"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var network,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_scatterjsCore=require("scatterjs-core"),_eosjs=require("eosjs"),_eosjsEcc=_interopRequireDefault(require("eosjs-ecc")),isAvailable=!1;"undefined"!=typeof window&&window.addEventListener("lynxMobileLoaded",function(){return isAvailable=!0});var pollExistence=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c,d=arguments;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=0<d.length&&void 0!==d[0]?d[0]:null,c=1<d.length&&void 0!==d[1]?d[1]:0,a.abrupt("return",new Promise(function(a){return b||(b=a),isAvailable?b(!0):5<c?b(!1):void setTimeout(function(){return pollExistence(b,c+1)},100)}));case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),ScatterLynx=/*#__PURE__*/function(a){function b(){var a;return(0,_classCallCheck2.default)(this,b),a=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.EOS,_scatterjsCore.PluginTypes.WALLET_SUPPORT)),a.name="Lynx",a}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"init",value:function d(a,b,c){this.context=a,this.holderFns=b,this.socketSetters=c}},{key:"connect",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(/*#__PURE__*/function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(c){var d;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,pollExistence();case 2:d=a.sent,d&&(c(!0),b.context.wallet=b.name);case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"runAfterInterfacing",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b,c=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.methods()[_scatterjsCore.WALLET_METHODS.getIdentity](),b={sendApiRequest:function b(a){return c.methods()[a.type](a.payload)}},this.socketSetters.map(function(a){return a(b)}),a.abrupt("return",!0);case 4:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"methods",value:function c(){var a,b=this;return a={},(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.isConnected,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.disconnect,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.isPaired,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getIdentity,function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var c,d,e,f,g,h;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,window.lynxMobile.requestSetAccountName();case 2:if(c=a.sent,c){a.next=5;break}return a.abrupt("return",null);case 5:return a.next=7,window.lynxMobile.requestSetAccount(c);case 7:if(d=a.sent,d){a.next=10;break}return a.abrupt("return",null);case 10:return e=d.account.permissions.find(function(a){return"active"===a.perm_name}),f=e.required_auth.keys[0].key,g=[{name:d.account.account_name,authority:e.perm_name,publicKey:f,blockchain:_scatterjsCore.Blockchains.EOS,isHardware:!1,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}],h={name:g[0].name,accounts:g,publicKey:f},b.context.identity=h,a.abrupt("return",h);case 16:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.forgetIdentity,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.context.identity=null,a.abrupt("return",!0);case 2:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,"identityFromPermissions",function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",b.context.identity);case 1:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getIdentityFromPermissions,(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",b.context.identity);case 1:case"end":return a.stop();}},a,this)}))),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.getArbitrarySignature,function(a,b){var c=_scatterjsCore.SocketService.getOrigin();return window.lynxMobile.requestArbitrarySignature({data:b,whatFor:"".concat(c," is requesting an arbitrary signature")})}),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.authenticate,function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,d=_scatterjsCore.SocketService.getOrigin();b=b?b:d;var e=_eosjsEcc.default.sha256(_eosjsEcc.default.sha256(b)+_eosjsEcc.default.sha256(a));return window.lynxMobile.requestArbitrarySignature({data:e,whatFor:"".concat(d," wants to authenticate your public key")})}),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.requestSignature,function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b){var c,d,e,f,g,h;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=b.abis,d=b.transaction,e=b.network,console.log("transaction",d),d.hasOwnProperty("serializedTransaction")){a.next=4;break}throw new Error("Lynx only supports eosjs2(20.0.0+) syntax");case 4:if("aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"===d.chainId){a.next=6;break}throw new Error("Lynx only supports mainnet.");case 6:return f=new _eosjs.JsonRpc(_scatterjsCore.Network.fromJson(e).fullhost()),g=new _eosjs.Api({rpc:f}),d.abis.map(function(a){var b=a.account_name,c=a.abi;return g.cachedAbis.set(b,{rawAbi:c,abi:g.rawAbiToJson(c)})}),a.next=11,g.deserializeTransactionWithActions(d.serializedTransaction);case 11:return h=a.sent,a.abrupt("return",window.lynxMobile.requestSignature(h));case 13:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()),(0,_defineProperty2.default)(a,_scatterjsCore.WALLET_METHODS.requestTransfer,function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=d.contract,f=d.symbol,g=d.memo,h=d.decimals;return e||(e="eosio.token"),f||(f="EOS"),window.lynxMobile.transfer({contract:e,symbol:f,toAccount:b,amount:c,memo:g})}),a}}]),b}(_scatterjsCore.Plugin);exports.default=ScatterLynx,"undefined"!=typeof window&&(window.ScatterLynx=ScatterLynx);