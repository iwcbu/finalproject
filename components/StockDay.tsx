"use client"
//Abdallah:
//This Component is the Stock of Day div in our home page. It contains the styling.
// (Mapping needs to be added to show stock, currently hard coded the Data)

import styled from "styled-components";

const StyledDiv=styled.div`
    border:4px solid white;
    
    width:100%;
    height: 40vh;
    

`;

const StockDayDiv=styled.div`
    border:4px solid white;
    justify-content: center;
    border-radius:10px;
    background-color: white;
    width:50%;
   
`;

export default function StockDay() {
    return (
        <StyledDiv>
            <h2>Stock of the Day</h2>
            <StockDayDiv>
                <p>Stock Ticker: AAPL</p>
                <p>Company Name: Apple Inc</p>
                <p>Stock Type: Common Stock</p>
            </StockDayDiv>

        </StyledDiv>
    )
}