"use client"
import {Container} from "@/components/GlobalStyledComponents";
import styled from "styled-components";


const PageParent=styled.div`
    color:white;
    width:80%;
    margin:0 auto;
    #Title{
        text-align: center;
        margin-top: 2rem;
        font-size: calc(15px + 2vw);
    }
    h1{
        font-size: calc(2px + 1.5vw);
        text-align: center;
    }
    p{
        font-size: calc(3px + 1vw);
    }
    
`

const AboutDiv=styled.div`
    margin-top: 2rem;
    margin-bottom:4rem;
    
    
`;

const TechCarouselDiv=styled.div`
    
`;

const TeamDiv=styled.div`
    margin-top: 4rem;
    
`;
export default function AboutPageContent() {
    return (
        <Container>
            <PageParent>
                <h1 id="Title">About Our Project</h1>
                <AboutDiv>
                    <h1>What our Project is about: </h1>
                    <p>This app helps you easily discover and track stocks with real time prices
                        and an easy to navigate user-interface. We built this to make stock data
                        more accessible and engaging.</p>


                </AboutDiv>


                <TechCarouselDiv>
                    <h1>What powers this App </h1>

                    <p>[Working on adding cards with hover effect to show where and how each of them were used] </p>



                </TechCarouselDiv>
                <TeamDiv>
                    <h1>Meet the Team: </h1>
                    <p>Ian Campbell | CS@BU</p>
                    <p>Abdallah Shafiullah | CS@BU</p>
                    <p>Students at Boston University who love to learn and experiment with things</p>



                </TeamDiv>

            </PageParent>
        </Container>
    )



}