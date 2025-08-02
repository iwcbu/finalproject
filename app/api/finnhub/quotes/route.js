"use server";

import { NextResponse } from "next/server";



export async function GET() {
    try {
        const apiKey = process.env.FH_KEY; // get api key - IWC

        if (!apiKey) { // edge case - IWC
            return NextResponse.json({ error: 'API_KEY not set' }, { status: 500 });
        }

        // get url for fetching - IWC
        const url = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${apiKey}`

        
        const res = await fetch(url); // put the fetched data in a resolution - IWC

        if (!res.ok) { // edge case
            return NextResponse.json({ error: 'Failed to fetch from Finnhub' }, { status: res.status });
        }

        const data = await res.json(); // put resolution data in data - IWC

        let commonStocks = {} // init commonStocks where all api's stocks will go - IWC
        for (let i = 0; i < data.length; i++) { // filters out non common stocks types- IWC
            if ( data[i].type === 'Common Stock' ) { // if the object is of type common stock...
                commonStocks[data[i].symbol] = data[i]; // adds the common stock to the commonStocks table

            }
        }

        return NextResponse.json(commonStocks); // returns the data as a link we can acces from the url by fetching - IWC

        
        


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

