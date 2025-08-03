"use client";

import { useState, useEffect } from "react";
import getPopStockPrices from "@/lib/getPopStockPrices"
import styled from "styled-components";
import PopStockGallery from "@/components/HomePage/PopStockGallery"

const GallerySty = styled.div`
    margin: 0 auto;
`;

export default function HomePopStocks() {
    const [popStocks, setPopStocks] = useState({})
    useEffect(() => {
        console.log("useEffect is runnng")
        const fetchStocks = async () => {
            try {
                console.log("fetchStocks start")
                const d = await getPopStockPrices();
                console.log("Fetched data: ",d) 
                const data = Object.values(d);
                setPopStocks(data);
            } catch (e) {
                console.error("Fetch error: ", e)
            }
        }
        fetchStocks();

        const interval = setInterval(fetchStocks, 30000);
        
        return () => clearInterval(interval);
    }, []);


    console.log("popstocks test here", popStocks)

    return (
        <div>
            <PopStockGallery stocks={Object.values(popStocks)}/>
        </div>
    )


}