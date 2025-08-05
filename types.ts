

//            Our stock structure for common functionality - IWC 

import { UTCTimestamp } from "lightweight-charts";

export type Stock = {
    symbol: string;
    name: string; // stock name
    c: number; // current price
    d: number; // price change
    dp: number; // percentage change since last close
    h: number; // high of today
    l: number; // low of today
    o: number; // opening price
    pc: number; // previous close
    
}

//                 Finnhub stock call structure - IWC
//
//       A security is a broad financial tool 
//       that represents ownership or rights to ownership
//              ex) a stock is an example of a type of security

//      we will only be using stocks, not other securities so many
//      of the fields won't be relevant.
//
export type FHSecurity = {
    currency: string;        // currency of security (e.g., "USD")
    description: string;     // description or name of security
    displaySymbol: string;   // ticker symbol (usually same as `symbol`)
    figi: string | null;     // unique ID for the security (Financial Instrument Global Identifier (FIGI))
    isin: string | null;     // International Securities Identification Number (ISIN)
    mic: string | null;      // Market Identifier Code (MIC) for the exchange where it's traded (example: "ARCX")
    shareClassFIGI: string | null; // FIGI for specific share class, may be null if not applicable
    symbol: string;          // primary ticker symbol
    symbol2?: string | null; // alternate symbol (optional and may be null or empty)
    type: string;            // security type (example: common stock, bond, etc.)
};

export type SimpleStock = {
    symbol: string;
    name: string;
}

export type FHStockPrices = {
    c: number[]; // close prices
    h: number[]; // high prices 
    l: number[]; // low prices
    o: number[]; // open prices
    t: number[]; // timestamps
    v: number[]; // volume
    s: string; // status
}


export type Candle = {
    time: UTCTimestamp; // seconds since epoch (january 1, 1970) - IWC
    open: number;
    high: number;
    low: number;
    close: number;
}
