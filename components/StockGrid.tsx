"use client"
//Abdallah:
// This components function is to map over the database and provide styling to what is being displayed
//Props is being passed to this component from StockGridFetch

import styled from "styled-components";
import type {Stock} from "@/interface/StockType";

const StockListDiv=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
    

`;

const StockDiv=styled.div`
    border:4px solid white;
    align-items:center;
    border-radius:10px;
    
    
   
    background-color: white;
   


`;


export default function StockGrid(props: {stocks: Stock[]}) {

    return(




            <StockListDiv>
                {
                    props.stocks.slice(0,10).map((stock)=>(
                        <StockDiv key={stock.symbol}>
                            <p>Stock Ticker: {stock.symbol}</p>
                            <p>Company Name: {stock.description}</p>
                            <p>Stock Type: {stock.type}</p>

                        </StockDiv>



                    ))
                }




            </StockListDiv>




    )




}