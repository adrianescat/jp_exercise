export default class Trade {
    constructor(info = {}) {
        if (!info) throw new Error('You must provide the trade info');

        this.stock = info.stock;
        this.qty = info.qty;
        this.transactionType = info.transactionType;
        this.price = info.price;
        this.timestamp = new Date();
    }
}