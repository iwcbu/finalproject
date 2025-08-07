"use client";

import { SimpleStock, } from "@/types";
import styled from "styled-components";
import { Stock } from '../../types';
import { Button } from "@mui/material";
import { Star } from "@mui/icons-material";
import getProfile from "@/lib/getProfile";
import { useEffect, useState } from "react";

const GallerySty = styled.div`
    margin: 0 auto;
    min-height: 100%;
    max-width: 1000px;

    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    justify-content: center;

    @media (min-width: 910px) {
        height: 600px;        
    }

`;

const StockSty = styled.div`
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


    h1 {
        font-size: 20px;
        color: white;
    }

    p {
        color: white;
        font-size: 10px;
        width: 80%
    }

    @media (min-width: 910px) {       
    }

`;

const ButtonSty = styled.button`
    


    width: fit-content;
    height: fit-content;

    padding: 2px 7px;
    color: green;
    border: 1px green solid;
`;

const SpanSty = styled.span`
    
`;




export default function StockGallery({ stocks }: {stocks: SimpleStock[]}) {
    
    console.log("These are the stocks: ",stocks);
    const [tracked, setTracked] = useState(false);
    const [profile, setProfile] = useState({});

    /*useEffect(() => {
        try { 
            const prof = 
            


        } catch (e) {
            console.log("Error found: ", e)
        }
    }) */
 
    return (
        <GallerySty>
            {
                Object.values(stocks).map((stock: SimpleStock) => (
                    <StockSty key={stock.symbol}>
                        <h1>{stock.symbol}</h1>
                        <p>{stock.name}</p>
                        <SpanSty>
                            <ButtonSty >
                                {(tracked) ? "Untrack" : "Track"}
                            </ButtonSty>
                        </SpanSty>

                    </StockSty>
                ))
            }
        </GallerySty>
    )

}