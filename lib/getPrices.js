"use server";

export async function getPrices(start, end) {
    const apiKey = process.env.FH_KEY
    const res = await fetch("http://localhost:3000/api/finnhub/quotes"); // gets list of all stocks
    let FinnhubStocks = await res.json();

    const PageStocks = Object.values(FinnhubStocks).slice(start,end); // slices to get only the prices of the stocks on the current page


    let prices = {}
    for (const stock of PageStocks) { // for every stock on page
        const symbol = stock.symbol
        

        const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
        const res1 = await fetch(url);
        const price = await res1.json() // fetch price


        if (!price || !price.c || price.c === 0) continue;  // guard against invalid price data

        prices[symbol] = {
            symbol: symbol, // stock symbol
            name: stock.description, // stock name
            c: price.c, // current price
            d: price.d, // price change
            dp: price.dp, // percentage change since last close
            h: price.h, // high of today
            l: price.l, // low of today
            o: price.o, // opening price
            pc: price.pc // previous close
        };

    }

    console.log(prices)

    return prices;

}