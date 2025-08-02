"use client";

import { Stock, } from "@/types";
import styled from "styled-components";

const GallerySty = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: whitesmoke;
    padding: 1rem;

    @media (min-width: 910px) {
        height: 600px;        
    }
`;

const StockSty = styled.div<{change: number}>`
    margin: 1rem;
    background-color: whitesmoke;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;
    overflow-y: auto;
    border: 3px black solid;
    border-radius: 10px;
    box-shadow: 20px 10px 30px grey;

    h1 {
        font-size: 20px;
        color: black;
        display:flex;
    }

    #x {
        color: ${({change}) => ((change > 0) ? "green" : "red")};
        margin: 0 auto;
        font-size: 15px;
        max-width: 80%;
    }

`;

const PriceSty = styled.p<{change: number}>`
    

`;

export default function PopStockGallery({ stocks }: {stocks: Stock[]}) {
    return (
        <GallerySty>
            {
                Object.values(stocks).map((stock: Stock) => (
                    <StockSty change={stock.dp}>
                        <h1>{stock.symbol}<p id="x">${stock.c}</p></h1>
                        <p>{stock.name}</p>
                        <p id="x">${stock.d}</p>

                    </StockSty>
                ))
            }
        </GallerySty>
    )

}