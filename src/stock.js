export default class Stock {
    constructor(info = {}) {
        if (!info) throw new Error('You must provide the stock info');

        this.symbol = info.symbol;
        this.type = info.type;
        this.lastDividend = info.lastDividend;
        this.fixedDividend = info.fixedDividend;
        this.parValue = info.parValue;
    }
}