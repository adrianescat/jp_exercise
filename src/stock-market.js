import { defaultStocks } from '../dist/defaultStocks-dist';

export default class StockMarket {
    constructor(info = {}) {

        this.info = info;
        this.stocks = [];
        this.trades = [];

        this.setDefaultStocks();
    }

    addStock(stock){
        this.stocks.push(stock);
    }

    getStockBySymbol(symbol){
        return this.stocks.filter(stock => stock.symbol === symbol);
    }

    setDefaultStocks(){
        this.stocks = defaultStocks();
    }

    stocksCount(){
        return this.stocks.length;
    }

}