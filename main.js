import StockHandler from './dist/stockHandler-dist';
import StockMarket from './dist/stock-market-dist';
import { defaultStocks } from './dist/defaultStocks-dist';

const gbce = new StockMarket();
const stockHandler = new StockHandler({ stockMarket: gbce });

//Dividend Yield
console.log("Dividend Yield For TEA price 100");
console.log(stockHandler.getDividendYield(gbce.stocks[0], 100));

console.log("Dividend Yield For POP price 100");
console.log(stockHandler.getDividendYield(gbce.stocks[1], 100));

console.log("Dividend Yield For ALE price 100");
console.log(stockHandler.getDividendYield(gbce.stocks[2], 100));

console.log("Dividend Yield For GIN price 100");
console.log(stockHandler.getDividendYield(gbce.stocks[3], 100));

console.log("Dividend Yield For JOE price 100");
console.log(stockHandler.getDividendYield(gbce.stocks[4], 100));

//P/E Ratio

console.log("P/E Ratio For TEA price 100");
console.log(stockHandler.getPeRatio(gbce.stocks[0], 100));

console.log("P/E Ratio For POP price 100");
console.log(stockHandler.getPeRatio(gbce.stocks[1], 100));

console.log("P/E Ratio For ALE price 100");
console.log(stockHandler.getPeRatio(gbce.stocks[2], 100));

console.log("P/E Ratio For GIN price 100");
console.log(stockHandler.getPeRatio(gbce.stocks[3], 100));

console.log("P/E Ratio For JOE price 100");
console.log(stockHandler.getPeRatio(gbce.stocks[4], 100));

//Trades

console.log("Trade of TEA price 100, 5 units");
stockHandler.recordTrade({
    stock: gbce.stocks[0],
    qty: 5, 
    transactionType: 'buy', 
    price: 100
});
console.log(stockHandler.stockMarket.trades[0]);

console.log("Trade of POP price 100, 5 units");
stockHandler.recordTrade({
    stock: gbce.stocks[1],
    qty: 5,
    transactionType: 'sell',
    price: 100
});
console.log(stockHandler.stockMarket.trades[1]);

console.log("Trade of ALE price 50, 5 units");
stockHandler.recordTrade({
    stock: gbce.stocks[2],
    qty: 5,
    transactionType: 'buy',
    price: 50
});
console.log(stockHandler.stockMarket.trades[2]);

console.log("Trade of GIN price 100, 5 units");
stockHandler.recordTrade({
    stock: gbce.stocks[3],
    qty: 5,
    transactionType: 'buy',
    price: 100
});
console.log(stockHandler.stockMarket.trades[3]);

console.log("Trade of JOE price 200, 5 units");
stockHandler.recordTrade({
    stock: gbce.stocks[4],
    qty: 5,
    transactionType: 'sell',
    price: 200
});
console.log(stockHandler.stockMarket.trades[4]);

//Volume Weighted Stock Price

console.log("Volume Weighted Stock Price");
console.log(`Total trades: ${stockHandler.stockMarket.trades.length}`);
// stockHandler.stockMarket.trades[4].timestamp = new Date((new Date()) - 6 * 60000); //more than 5 minutes
let stock1 = defaultStocks()[4];
console.log(`Volume Weighted Stock Price for JOE: ${stockHandler.getVolumeWeightedStockPriceFor(stock1)}`);
let stock2 = defaultStocks()[0];
console.log(`Volume Weighted Stock Price for TEA: ${stockHandler.getVolumeWeightedStockPriceFor(stock2)}`);
let stock3 = defaultStocks()[1];
console.log(`Volume Weighted Stock Price for POP: ${stockHandler.getVolumeWeightedStockPriceFor(stock3)}`);
let stock4 = defaultStocks()[2];
console.log(`Volume Weighted Stock Price for ALE: ${stockHandler.getVolumeWeightedStockPriceFor(stock4)}`);
let stock5 = defaultStocks()[3];
console.log(`Volume Weighted Stock Price for GIN: ${stockHandler.getVolumeWeightedStockPriceFor(stock5)}`);

//Geometric Mean
console.log("Geometric Mean");
console.log(`Geometric Mean for GBCE: ${stockHandler.getAllShareIndex()}`);