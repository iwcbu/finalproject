"use client";

import { useState, useEffect } from "react";
import getPopStockPrices from "@/lib/getPopStockPrices"
import styled from "styled-components";
import PopStockGallery from "@/components/HomePage/PopStockGallery";
import Head from "next/head";
import CountdownTimer from "./timer";



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

export default function HomePopStocks() {
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


    console.log("popstocks test here", popStocks)

    return (
        <>
            <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                        rel="stylesheet"
                        />
            </Head>
            <GallerySty>
                <h1 id="heading" >Popular Stocks</h1>
                <CountdownTimer/>
                <PopStockGallery stocks={Object.values(popStocks)}/>
            </GallerySty>
        </>
    )

}
