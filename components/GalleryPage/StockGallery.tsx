"use client";

import { SimpleStock } from "@/types";
import styled from "styled-components";
import { useState, useEffect } from "react";

const GallerySty = styled.div`
    margin: 0 auto;
    min-height: 100%;
    max-width: 1200px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1000px) {
        height: 600px;        
    }
`;

const StockSty = styled.div`
    height: 150px;
    width: 220px;
    margin: 1em;
    padding: 1rem;
    background-color: black;
    
    border: 2px grey solid;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        font-size: 20px;
        color: white;
    }

    p {
        color: white;
        font-size: 10px;
        width: 80%;
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
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    #ah {
        width: 100%;
        color: white;
        font-size: 10px;
        padding: 3px;

    }
`;

export default function StockGallery({ stocks }: { stocks: SimpleStock[] }) {
    // Use a Set to track which symbols are currently tracked
    const [trackedStocks, setTrackedStocks] = useState<Set<string>>(new Set());
    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const res = sessionStorage.getItem('isLoggedIn');
        if (res === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    console.log(isLoggedIn)


    // Toggle the tracked status of a stock symbol
    const toggleTracked = (symbol: string) => {
        setTrackedStocks(prev => {
            const updated = new Set(prev);
            if (updated.has(symbol)) {
                updated.delete(symbol); // Untrack
            } else {
                updated.add(symbol); // Track
            }
            return updated;
        });
    };

    return (
        <GallerySty>
            {stocks.map((stock: SimpleStock) => {
                const isTracked = trackedStocks.has(stock.symbol);

                return (
                    <StockSty key={stock.symbol}>
                        <div>
                            <h1>{stock.symbol}</h1>
                            <p>{stock.name}</p>
                        </div>
                        <SpanSty>
                            <div id="ah">{!isLoggedIn ? "Log in to track": ""}</div>
                            <ButtonSty disabled={!isLoggedIn} onClick={() => toggleTracked(stock.symbol)}>
                                {isTracked ? "Untrack" : "Track"}
                            </ButtonSty>
                        </SpanSty>
                    </StockSty>
                );
            })}
        </GallerySty>
    );
}
