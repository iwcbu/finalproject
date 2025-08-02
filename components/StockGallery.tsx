"use client";

import { SimpleStock, } from "@/types";
import styled from "styled-components";

const GallerySty = styled.div`
    margin: 0 auto;
    width: 80%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: whitesmoke;
    padding: 1rem;

    @media (min-width: 910px) {
        height: 600px;        
    }

`;

const StockSty = styled.div`
    margin: 1rem;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;
    overflow-y: auto;
    border: 3px maroon solid;
    box-shadow: 20px 20px 30px grey;

    h1 {
        font-size: 20px;
        color: maroon;
    }

    p {
        color: black;
        font-size: 10px;
        width: 80%
    }
`;




export default function StockGallery({ stocks }: {stocks: SimpleStock[]}) {
    return (
        <GallerySty>
            {
                Object.values(stocks).map((stock: SimpleStock) => (
                    <StockSty>
                        <h1>{stock.symbol}</h1>
                        <p>{stock.name}</p>

                    </StockSty>
                ))
            }
        </GallerySty>
    )

}