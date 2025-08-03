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
    border-bottom: 3px solid grey;

    

`;

const StockDayDiv=styled.div`
    width: fit-content;
    padding: 15px;

    display:flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    background-color: white;
    border: 3px black solid;
    border-radius:10px;
    box-shadow: 20px 20px 40px grey;
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