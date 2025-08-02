"use server";

export default async function getPopStockPrices() {

    const apiKey = process.env.FH_KEY

    const popularStocks = [
                'AAPL',  // Apple Inc.
                'MSFT',  // Microsoft Corporation
                'GOOGL', // Alphabet Inc. (Google)
                'AMZN',  // Amazon.com, Inc.
                'TSLA',  // Tesla, Inc.
                'META',  // Meta Platforms, Inc. (Facebook)
                'NVDA',  // NVIDIA Corporation
                'BRK.B'  // Berkshire Hathaway Inc. (Class B)
    ]

    let popularStockData = {}

    for (const stock of popularStocks) {

        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`;
        const res1 = await fetch(url);
        const price = await res1.json() // fetch price


        popularStockData[stock] = {
            symbol: stock, // stock symbol
            name: stock.name, // stock name
            c: price.c, // current price
            d: price.d, // price change
            dp: price.dp, // percentage change since last close
            h: price.h, // high of today
            l: price.l, // low of today
            o: price.o, // opening price
            pc: price.pc // previous close
        };

    }

    return popularStockData
    
}