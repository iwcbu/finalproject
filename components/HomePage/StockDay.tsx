"use client"
//Abdallah:
//This Component is the Stock of Day div in our home page. It contains the styling.
// (Mapping needs to be added to show stock, currently hard coded the Data)

import styled from "styled-components";
import allstocks from '@/allstocks.json';
import { getPrice } from "@/lib/getPrice";
import { useState, useEffect, useRef } from "react";
import { Stock } from '../../types';
import Head from "next/head";

const StyledDiv=styled.div`
    width:100%;

    display:flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    color: white;


    

`;

const StockDayDiv=styled.div<{change: number}>`
    width: fit-content;
    padding: 30px;

    display:flex;
    flex-direction: column;
    
    justify-content: center;
    gap: 2rem;
    align-items: center;
    
    background-color: black;
    border: 3px grey solid;
    border-radius:10px;
    font-size: 25px;

    #symbANDname {
        display:flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;

        #x {
            font-size: 1em;
            font-weight: 100;
            letter-spacing: 10px;
        }
        #y {
            font-size: 1em;
            font-weight: 100;
            letter-spacing: 3px;
            flex-wrap: wrap;
        }
    }

    #prices {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }

    #z {
        font-size: 1rem;
        color: ${({change}) => ((change > 0) ? "green" : "red")};
        letter-spacing: 3px;

    }
    #z2 {
            font-size: 1.5rem;
            letter-spacing: 3px;
            color: ${({change}) => ((change > 0) ? "green" : "red")};

    }
   
`;
export default function StockDay({stocks}: {stocks: Stock[]}) {
    const stock = stocks.at(-1); // grabs the last stock in the array, which was the best performing one calculated before

    console.log("StockDay -> This is stocks: ", stocks)

    if (!stock) {
        return null;
    }

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <StyledDiv>
                <StockDayDiv change={stock.dp}>
                    <span id="symbANDname">
                        <p id="x">{stock.symbol}</p>
                        <p id="y">{stock.name}</p>
                    </span>
                    <div id="prices">
                        <h1 id="z">
                            {stock.d < 0 ? `$${stock.d.toFixed(3)}` : `+$${stock.d.toFixed(3)}`}
                        </h1>
                        <p id="z2">${stock.c.toFixed(2)}</p>
                        <p id="z">
                            {stock.dp < 0 ? `${stock.dp.toFixed(3)}` : `+${stock.dp.toFixed(3)}`}%
                        </p>
                    </div>
                </StockDayDiv>

            </StyledDiv>
        </>
    )
}