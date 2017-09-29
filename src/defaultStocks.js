import Stock from '../dist/stock-dist';

const tea = new Stock({
    symbol: 'TEA',
    type: 'common',
    lastDividend: 0,
    fixedDividend: null,
    parValue: 100
});

const pop = new Stock({
    symbol: 'POP',
    type: 'common',
    lastDividend: 8,
    fixedDividend: null,
    parValue: 100
});

const ale = new Stock({
    symbol: 'ALE',
    type: 'common',
    lastDividend: 23,
    fixedDividend: null,
    parValue: 60
});

const gin = new Stock({
    symbol: 'GIN',
    type: 'preferred',
    lastDividend: 8,
    fixedDividend: 2,
    parValue: 100
});

const joe = new Stock({
    symbol: 'JOE',
    type: 'common',
    lastDividend: 13,
    fixedDividend: null,
    parValue: 250
});

export const defaultStocks = () => {
    let stocks = [];
    stocks.push(tea);
    stocks.push(pop);
    stocks.push(ale);
    stocks.push(gin);
    stocks.push(joe);

    return stocks;
}