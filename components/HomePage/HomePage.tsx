"use client"; // Tells Next.js this is a Client Component

// React hooks and required modules
import { useState, useEffect } from "react";
import getPopStockPrices from "@/lib/getPopStockPrices"; // Custom function to fetch popular stock data
import styled from "styled-components"; // For component-level styling
import PopStockGallery from "@/components/HomePage/PopStockGallery"; // Component to display popular stocks
import Head from "next/head"; // For manipulating <head> (e.g. adding fonts)
import CountdownTimer from "./timer"; // Timer component
import StockDay from "./StockDay"; // Component to display the "Stock of the Day"

// Styled component for Stock of the Day section
const StockOTDSty = styled.div`
    #heading {
        padding: 40px;
        color: white;
        text-align: center;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 7px;
        font-weight: 100;
    }
`;

// Styled component for the Gallery section
const GallerySty = styled.div`
    #heading {
        padding: 40px;
        color: white;
        text-align: center;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 7px;
        font-weight: 100;
    }
`;

// Main page component
export default function HomePage() {
    // Local state to store fetched popular stocks
    const [popStocks, setPopStocks] = useState({});

    // Fetch stocks on mount and every 30 seconds
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const d = await getPopStockPrices(); // Get raw stock data
                const data = Object.values(d); // Convert object to array
                setPopStocks(data); // Store in state
            } catch (e) {
                console.error("HomePopStocks -> Fetch error: ", e);
            }
        };

        fetchStocks(); // Initial fetch

        // Refresh stock data every 30 seconds
        const interval = setInterval(fetchStocks, 30000);

        // Clear interval on unmount
        return () => clearInterval(interval);
    }, []);

    // Log updated stock data to console
    useEffect(() => {
        console.log("Updated popStocks: ", popStocks);
    }, [popStocks]);

    return (
        <>
            {/* Add Montserrat font */}
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* Stock of the Day section */}
            <StockOTDSty>
                <h1 id="heading">Stock of the Day</h1>
                <StockDay stocks={Object.values(popStocks)} />
            </StockOTDSty>

            {/* Gallery section for popular stocks */}
            <GallerySty>
                <h1 id="heading">Popular Stocks</h1>
                <CountdownTimer />
                {/* Show all but last stock in the gallery */}
                <PopStockGallery
                    stocks={Object.values(popStocks).slice(0, popStocks.length - 1)}
                />
            </GallerySty>
        </>
    );
}
