"use client";

import { Stock, } from "@/types";
import styled from "styled-components";
import Head from "next/head";



const GallerySty = styled.div`
    margin: 0 auto;
    color: white;
    max-width: 500px;
    margin-bottom: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 1000px) {
        max-width: 1000px;
    }
`;

const StockSty = styled.div<{change: number}>`
    height: 130px;
    width: 200px;
    margin: 1em;
    padding: 1rem;
    background-color: black;
    overflow-y: auto;
    
    border: 2px grey solid;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;

    



    #x {
        padding-top: 10px;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;

        font-size: 1.2em;
        letter-spacing: 3px;
        
        #x2 {
            color: ${({change}) => ((change > 0) ? "green" : "red")};
            font-size: .8em;
            letter-spacing: 1px;
        }
    }


    #y {
        color: ${({change}) => ((change > 0) ? "green" : "red")};
        display:flex;
        justify-content: space-between;
        margin-top: -5px;
        font-size: .8em;
        letter-spacing: 2px;

    }

    #z {
        padding-top: 15px;
        font-size: .6em;
        text-align: center;
    }

`;

export default function PopStockGallery({ stocks }: {stocks: Stock[]}) {

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Render a gallery of stock cards */}
            <GallerySty>
                {

                    // Loop through each stock
                    Object.values(stocks).map((stock: Stock) => (
                        <StockSty key={stock.symbol} change={stock.dp}>
                            <p id="x">{stock.symbol} 
                                <span id="x2">
                                    {stock.dp < 0 ? `${stock.dp.toFixed(3)}` : `+${stock.dp.toFixed(3)}`}%
                                </span>
                            </p>
                            <p id="y">${stock.c.toFixed(2)}
                                <span> 
                                    {stock.d < 0 ? `$${stock.d.toFixed(3)}` : `+$${stock.d.toFixed(3)}`}
                                </span>
                            </p>
                            <p id="z">{stock.name}</p>

                        </StockSty>
                    ))
                }
            </GallerySty>
        </>
    )

}