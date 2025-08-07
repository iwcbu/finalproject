"use server";

export async function getPrice(stock) {
    
    const apiKey = process.env.FH_KEY
    const symbol = stock.symbol
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    
    const res1 = await fetch(url);
    const price = await res1.json() // fetch price

    const stockPrice = {
        symbol: symbol, // stock symbol
        name: stock.name, // stock name
        c: price.c, // current price
        d: price.d, // price change
        dp: price.dp, // percentage change since last close
        h: price.h, // high of today
        l: price.l, // low of today
        o: price.o, // opening price
        pc: price.pc // previous close
    };


    return stockPrice;

}