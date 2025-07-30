"use client"
import {Container} from "@/components/GlobalStyledComponents";
export default function AboutPageContent() {
    return (
        <Container>
            <h2>About Our Project:</h2>
            <p>This app helps you easily discover and track stocks with real time prices
                and an easy to navigate user-interface. We built this to make stock data
                more accessible and engaging.</p>

            <h3>Key Features: </h3>
            <ul>
                <li>Real-time Stock Prices</li>
                <li>Stock of the Day</li>
            </ul>

            <h3>Meet the Team: </h3>
            <p>Ian Campbell | CS@BU</p>
            <p>Abdallah Shafiullah | CS@BU</p>
            <p>Students at Boston University who love to learn and experiment with things</p>
        </Container>
    )



}