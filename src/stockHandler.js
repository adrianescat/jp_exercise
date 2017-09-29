import Gbce from '../dist/stock-market-dist';
import Stock from '../dist/stock-dist';
import Trade from '../dist/trade-dist';

export default class StockHandler {
    constructor(options = {}) {
        if (!options.stockMarket) throw new Error('Must provide a stockMarket');

        this.options = options;
        this.stockMarket = options.stockMarket;
    }

    getDividendYield(stock, price){
        let result = 0;
        if (stock.type === 'common') {
            result = stock.lastDividend / price;
        } else if (stock.type === 'preferred'){
            result = (stock.fixedDividend * stock.parValue)/price;
        }
        return result;
    }

    getPeRatio(stock, price){
        let result = 0,
            dividend = this.getDividendYield(stock, price);
        if (dividend !== 0) {
            result = price / dividend;
        }
        return result;
    }

    recordTrade(stock, qty, transactionType, price){
        this.stockMarket.trades.push(new Trade(stock, qty, transactionType, price));
    }

    getLatestTrades(min) {
        let now = new Date(),
            MS_PER_MINUTE = 60000,
            nMinutesAgo = new Date(now - (min * MS_PER_MINUTE));

        return this.stockMarket.trades.filter(trade => trade.timestamp >= nMinutesAgo);
    }

    getVolumeWeightedStockPriceFor(stock){
        let trades = this.getLatestTrades(5)
                    .filter(trade => trade.stock.symbol === stock.symbol);
        let nominator = trades.map(trade => trade.price * trade.qty),
            sigma1 = nominator.reduce((a, b) => a + b, 0),
            denominator = trades.map(trade => trade.qty),
            sigma2 = denominator.reduce((a, b) => a + b, 0);
        
        if (trades.length == 0){return 0};

        return sigma1 / sigma2;
    }

    getAllShareIndex(){
        let index = this.stockMarket.stocksCount();
        let stocksVolume = [];

        for (let i = 0; i < index; i++) {
            let stock = this.stockMarket.stocks[i];
            stocksVolume.push(this.getVolumeWeightedStockPriceFor(stock));
        }

        let radicand = stocksVolume.reduce((a, b) => a * b, 1);
        if (index == 0) { return 0 };
        return Math.exp(Math.log(radicand) / index);
    }
}