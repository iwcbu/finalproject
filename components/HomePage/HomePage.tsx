"use client";

import { useState, useEffect } from "react";
import getPopStockPrices from "@/lib/getPopStockPrices"
import styled from "styled-components";
import PopStockGallery from "@/components/HomePage/PopStockGallery";
import Head from "next/head";
import CountdownTimer from "./timer";
import StockDay from "./StockDay";



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

export default function HomePage() {
    const [popStocks, setPopStocks] = useState({})
    useEffect(() => {
        console.log("useEffect in HomePopStock is runnng")
        const fetchStocks = async () => {
            try {
                console.log("HomePopStock -> fetchStocks start")
                const d = await getPopStockPrices();
                console.log("HomePopStock -> Fetched data: ",d) 
                const data = Object.values(d);

                setPopStocks(data);
            } catch (e) {
                console.error("HomePopStocks -> Fetch error: ", e)
            }
        }
        fetchStocks();

        const interval = setInterval(fetchStocks, 30000);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("Updated popStocks: ", popStocks);
    }, [popStocks])


    console.log("popstocks test here", popStocks)

    return (
        <>
            <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                        rel="stylesheet"
                        />
            </Head>
            <StockOTDSty>
                <h1 id="heading" >Stock of the Day</h1>
                <StockDay stocks={Object.values(popStocks)} />
            </StockOTDSty>
            <GallerySty>
                <h1 id="heading" >Popular Stocks</h1>
                <CountdownTimer/>
                <PopStockGallery stocks={Object.values(popStocks).slice(0, popStocks.length - 1)}/>
            </GallerySty>
        </>
    )

}
