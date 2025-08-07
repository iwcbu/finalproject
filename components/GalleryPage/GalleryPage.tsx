"use client";

import allstocks from "@/allstocks.json"; // Importing the full list of stocks from a JSON file
import StockGallery from "@/components/GalleryPage/StockGallery"; // Component to display a list of stocks
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Material UI icons for pagination arrows
import { useState, useEffect } from "react"; // React hooks for state and lifecycle management
import styled from "styled-components"; // For styling components

// Styled container for the stock gallery section
const GallerySty = styled.div`
    margin: 0 auto;
`;

// Styled container for the entire page, including heading styles
const PageSty = styled.div`
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

// Main component function
export default function GalleryPage() {
    // State for current page number
    const [page, setPage] = useState(1);
    // State to hold the slice of stocks to display on the current page
    const [stocks, setStocks] = useState({});

    // Calculate indices to slice the stocks array for pagination
    const sliceStart = (page - 1) * 12; // Starting index of current page slice
    const sliceEnd = page * 12;          // Ending index of current page slice

    // Effect to update the stocks whenever the page changes
    useEffect(() => {
        const fetchStocks = async () => {
            // Slice the stocks array based on current page
            const data = allstocks.slice(sliceStart, sliceEnd);
            // Update the stocks state with the current page slice
            setStocks(data);
        };
        fetchStocks();
    }, [page]); // Dependency array includes 'page' so effect runs when 'page' changes

    return (
        <PageSty>
            {/* Page heading */}
            <h1 id="heading">Stock Gallery</h1>

            {/* Stock gallery section */}
            <GallerySty>
                {/* Pass the current page’s stocks as an array to StockGallery */}
                <StockGallery stocks={Object.values(stocks)} />
            </GallerySty>

            {/* Pagination controls */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "1rem",
                }}
            >
                {/* Previous page button, disabled if on first page */}
                <button onClick={() => page > 1 && setPage(page - 1)}>
                    <ArrowBack sx={{ color: "white" }} />
                </button>

                {/* Current page number display */}
                <h1 style={{ color: "white" }}>Page - {page}</h1>

                {/* Next page button */}
                <button onClick={() => setPage(page + 1)}>
                    <ArrowForward sx={{ color: "white" }} />
                </button>
            </div>
        </PageSty>
    );
}
