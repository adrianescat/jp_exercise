"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultStocks=void 0;var _stockDist=require("./stock-dist"),_stockDist2=_interopRequireDefault(_stockDist),tea=new _stockDist2.default({symbol:"TEA",type:"common",lastDividend:0,fixedDividend:null,parValue:100}),pop=new _stockDist2.default({symbol:"POP",type:"common",lastDividend:8,fixedDividend:null,parValue:100}),ale=new _stockDist2.default({symbol:"ALE",type:"common",lastDividend:23,fixedDividend:null,parValue:60}),gin=new _stockDist2.default({symbol:"GIN",type:"preferred",lastDividend:8,fixedDividend:2,parValue:100}),joe=new _stockDist2.default({symbol:"JOE",type:"common",lastDividend:13,fixedDividend:null,parValue:250}),defaultStocks=exports.defaultStocks=function(){var e=[];return e.push(tea),e.push(pop),e.push(ale),e.push(gin),e.push(joe),e};