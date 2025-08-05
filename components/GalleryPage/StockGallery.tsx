"use client";

import { SimpleStock, } from "@/types";
import styled from "styled-components";
import { Stock } from '../../types';

const GallerySty = styled.div`
    margin: 0 auto;
    min-height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;

    @media (min-width: 910px) {
        height: 600px;        
    }

`;

const StockSty = styled.div`
    margin: 1rem;
    background-color: black;
    padding: 1rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;
    border: 3px grey solid;

    h1 {
        font-size: 20px;
        color: white;
    }

    p {
        color: black;
        font-size: 10px;
        width: 80%
    }

    @media (min-width: 910px) {       
    }

`;




export default function StockGallery({ stocks }: {stocks: SimpleStock[]}) {
    return (
        <GallerySty>
            {
                Object.values(stocks).map((stock: SimpleStock) => (
                    <StockSty key={stock.symbol}>
                        <h1>{stock.symbol}</h1>
                        <p>{stock.name}</p>

                    </StockSty>
                ))
            }
        </GallerySty>
    )

}