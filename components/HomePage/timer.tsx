"use client";

import Head from "next/head";
import {useState, useEffect } from "react";
import styled from "styled-components";


const TimerSty = styled.div`

    color: white;
    text-align: center;
    font-size: .8rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;


`;
// A timer for when the next price fetch is for stocks
export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(30); // sets timeleft default to 30 seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 1) {  // if the time left is 1 second,
                    return 30;     // then reset timer
                }
                return prev - 1;   // otherwise count down
            });
        }, 1000); // runs every 1000ms which is 1 second

        return () => clearInterval(timer);

    }, []);

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <TimerSty>
                Time left until update: {timeLeft}s
            </TimerSty>
        </>
    )
}