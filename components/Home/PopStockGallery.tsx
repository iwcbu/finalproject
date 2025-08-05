"use client";

import { Stock, } from "@/types";
import styled from "styled-components";
import Head from "next/head";



const GallerySty = styled.div`
    margin: 0 auto;
    color: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 910px) {
        height: 600px;        
    }
`;

const StockSty = styled.div<{change: number}>`
    height: 130px;
    width: 200px;
    margin: 5px;
    padding: 1rem;
    background-color:white;
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
            <GallerySty>
                {
                    Object.values(stocks).map((stock: Stock) => (
                        <StockSty key={stock.symbol} change={stock.dp}>
                            <p id="x">{stock.symbol} 
                                <span id="x2">
                                    {stock.dp.toString().charAt(0)}{stock.dp.toString().slice(1,(stock.dp.toString.length - 2))}%
                                </span>
                            </p>
                            <p id="y">${stock.c}
                                <span> 
                                    {stock.d.toString().charAt(0)}{stock.d.toString().slice(1)}%
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