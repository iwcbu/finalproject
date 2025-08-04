"use server";

export default async function getPopStockPrices() {

    const apiKey = process.env.FH_KEY

    const popularStocks = [
                'AAPL',  // Apple Inc.
                'MSFT',  // Microsoft Corporation
                'GOOG', // Alphabet Inc. (Google)
                'AMZN',  // Amazon.com, Inc.
                'TSLA',  // Tesla, Inc.
                'META',  // Meta Platforms, Inc. (Facebook)
                'NVDA',  // NVIDIA Corporation
                'BRK.B'  // Berkshire Hathaway Inc. (Class B)
    ]
    const popStockNames = [
        "APPLE INC.",
        "MICROSOFT CORPORATION",
        "ALPHABET INC. (GOOGLE)",
        "AMAZON.COM INC.",
        "TESLA INC",
        "META PLATFORMS INC.",
        "NVIDIA CORPORATION",
        "BERKSHIRE HATHAWAY INC"
    ]

    let popularStockData = {}

    for (let i = 0; i < popularStocks.length; i++) {
        const stock = popularStocks[i];
        const name = popStockNames[i];

        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`;
        const res1 = await fetch(url);
        const price = await res1.json() // fetch price


        popularStockData[stock] = {
            symbol: stock, // stock symbol
            name: name, // stock name
            c: price.c, // current price
            d: price.d, // price change
            dp: price.dp, // percentage change since last close
            h: price.h, // high of today
            l: price.l, // low of today
            o: price.o, // opening price
            pc: price.pc // previous close
        };

    }

    //finds the best performing stock at the moment out of the popular stocks
    const best = Object.values(popularStockData).reduce((a,b) => a.dp > b.dp ? a : b); 
    popularStockData["stockOTD"] = best; // sets the stock as the best

    return popularStockData
    
}