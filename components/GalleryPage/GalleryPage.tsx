"use client";

import allstocks from "@/allstocks.json"
import StockGallery from "@/components/GalleryPage/StockGallery";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState, useEffect } from "react"
import styled from "styled-components";

const GallerySty = styled.div`
    margin: 0 auto;
`



export default function GalleryPage() {
    const [page, setPage] = useState(1);
    const [stocks, setStocks] = useState({});

    const sliceStart = (page - 1) * 12;
    const sliceEnd = page * 12;

    useEffect(() => {
        const fetchStocks = async () => {
            const data = allstocks.slice(sliceStart,sliceEnd);
            setStocks(data);
        }
        fetchStocks();
    }, [page])

    return (
        <div style={{
        }}>
            <GallerySty>
                <StockGallery stocks={Object.values(stocks)} />
            </GallerySty>
            <div style={{
                display: "flex",
                flexDirection: "row",
                margin: "0 auto",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "1rem",
            }}>
                <button onClick={() => page > 1 && setPage(page - 1)}>
                    <ArrowBack sx={{ color: "white" }}/>
                </button>
                <h1 style={{ color: "white"}}>Page - {page}</h1>
                <button onClick={() => setPage(page + 1)}>
                    <ArrowForward sx={{ color: "white" }}/>
                </button>
            </div>
        </div>
    )


}