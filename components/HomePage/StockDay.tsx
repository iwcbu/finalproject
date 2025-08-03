"use client"
//Abdallah:
//This Component is the Stock of Day div in our home page. It contains the styling.
// (Mapping needs to be added to show stock, currently hard coded the Data)

import styled from "styled-components";

const StyledDiv=styled.div`
    
    width:100%;
    height: 40vh;

    display:flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    color: white;

    

`;

const StockDayDiv=styled.div`
    width: fit-content;
    padding: 15px;

    display:flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    background-color: black;
    border: 3px grey solid;
    border-radius:10px;
    font-size: 25px;
   
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