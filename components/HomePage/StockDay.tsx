"use client"
//Abdallah:
//This Component is the Stock of Day div in our home page. It contains the styling.
// (Mapping needs to be added to show stock, currently hard coded the Data)

import styled from "styled-components";
import allstocks from '@/allstocks.json';
import { getPrice } from "@/lib/getPrice";
import { useState, useEffect, useRef } from "react";
import { Stock } from '../../types';

const StyledDiv=styled.div`
    
    width:100%;
    height: 100vh;

    display:flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    color: white;

    #heading {


        padding: 40px;
        color: white;
        text-align: center;

        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 7px;
        font-weight: 100;


    }

    #symbANDname {

        
    }

    

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
    
    // dummyStock so type rules stock yelling at me
    const dummyStock: Stock = {
        symbol: "",
        name: "", // stock name
        c: 0, // current price
        d: 0, // price change
        dp: 0, // percentage change since last close
        h: 0, // high of today
        l: 0, // low of today
        o: 0, // opening price
        pc: 0 // previous close
    } 


    const [stockOTD, setStockOTD] = useState(dummyStock);
    const prevStocks = useRef<Stock[]>([]);
    const counter = useRef(0);

    useEffect(() => {
        console.log("StockDay -> useEffect is running")
        const fetchStock = async () => {
            while (counter.current < 5) {

                console.log("StockDay -> fetchStock start");
                const randomIndex = Math.round((allstocks.length)/(10*Math.random())); // picks a random index of allstocks
                const randomStock = allstocks[randomIndex];
                const randomStockPrice = await getPrice(randomStock); // gets price for the random stock chosen
                
                prevStocks.current.push(randomStockPrice);

                if (randomStockPrice.dp >= 0) {
                    setStockOTD(randomStockPrice);
                    return;
                }

                counter.current++;
            }     
            
            const best = prevStocks.current.reduce((attempt1, attempt2) => (attempt1.dp > attempt2.dp ? attempt1 : attempt2));
            setStockOTD(best)
        };
        
        fetchStock();

        // Updates price for StockOTD
        const interval = setInterval(async () => {
            try {
                const updated = await getPrice(stockOTD);
                setStockOTD(updated);

            } catch (e) {
                console.error("StockDay -> interval error: ", e)
            }
        }, 30000); // updates price every 30 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledDiv>
            <h1 id="heading">Stock of the Day</h1>
            <StockDayDiv>
                <span id="symbANDname">
                    <p>{stockOTD.symbol}</p>
                    <p>{stockOTD.name}</p>
                </span>
                <div>
                    <p>{stockOTD.c}</p>
                    <p>{stockOTD.d}</p>
                    <p>{stockOTD.dp}</p>
                </div>
            </StockDayDiv>

        </StyledDiv>
    )
}