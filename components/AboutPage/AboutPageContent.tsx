"use client"
import {Container} from "@/components/GlobalStyledComponents";
import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import {useRef} from "react";

//Abdallah:This component is responsible for displaying all the content on the About page

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

const AboutDivContent=styled.div`
    margin-top: 1rem;

`;
const TeamDiv=styled.div`
    
    
    
    
`;
const CardContainer=styled.div`
    margin-top: 2rem;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   
    
`;
const Card=styled.div`
    background-color: black;
    border: 3px grey solid;
    box-shadow: 0 0 5px white;
    width: 200px;
    height: 250px;
    

`;

const LinkedText=styled.a`
    color:inherit;
    text-decoration: underline;
    &:hover{
        color:grey;
    }
    
    
`;
const TechCarouselDiv=styled.div`
    margin-top: 4rem;
   
    
    
`;
const CarouselWrapper=styled.div`
    margin-top: 2rem;
    display:flex;
    align-items: center;

`;
const IconWrapper=styled.div`
    display:flex;
    flex-direction: row;
    gap:30px;
    justify-content: space-evenly;
    margin:auto;
    overflow-x: scroll;
    scroll-behavior: smooth;
    width:300px;
    
`;


export default function AboutPageContent() {

    const ref=useRef<HTMLDivElement>(null);



    const scrollRight=()=>{
        if(ref.current) {
            ref.current.scrollLeft += 100;
        }

    }
    const scrollLeft=()=>{
        if(ref.current) {
            ref.current.scrollLeft -= 100;
        }
    }
    return (
        <Container>
            <PageParent>
                <h1 id="Title">About Our Project</h1>
                <AboutDiv>
                    <h1>What our Project is about: </h1>
                    <AboutDivContent>
                        <p>This app helps you easily discover and track stocks with real time prices
                            and an easy to navigate user-interface. We built this to make stock data
                            more accessible and engaging.</p>
                    </AboutDivContent>



                </AboutDiv>

                <TeamDiv>
                    <h1>Meet the Team: </h1>

                    <CardContainer>
                    <Card>
                        <Image src="" width={100} height={100} alt="Ian" />
                        <LinkedText href="https://www.linkedin.com/in/iwc3/" target="_blank">Ian Campbell | CS@BU</LinkedText>


                    </Card>

                    <Card>
                        <Image src="" width={100} height={100} alt="Abdallah" />
                        <LinkedText href="https://www.linkedin.com/in/abdallah-shafiullah-988601245" target="_blank">Abdallah Shafiullah | CS@BU</LinkedText>


                    </Card>
                    </CardContainer>






                </TeamDiv>


                <TechCarouselDiv>
                    <h1>What powers this App </h1>
                    <CarouselWrapper>
                        <button onClick={scrollLeft}><ArrowBackIos sx={{color:"white"}}/></button>
                        <IconWrapper ref={ref}>

                            <Image
                                src="/Html.png"
                                width={200}
                                height={200}
                                alt="HTML"
                            />
                            <Image
                                src="/csslogo.png"
                                width={200}
                                height={200}
                                alt="CSS Logo"
                            />
                            <Image
                                src="/jslogo.png"
                                width={200}
                                height={200}
                                alt="JS Logo"
                            />
                            <Image
                                src="/reactlogo.png"
                                width={200}
                                height={200}
                                alt="React Logo"
                            />
                            <Image
                                src="/nextjslogo.png"
                                width={200}
                                height={200}
                                alt="Nextjs Logo"
                            />


                        </IconWrapper>

                        <button onClick={scrollRight}><ArrowForwardIos sx={{color:"white"}}/></button>
                    </CarouselWrapper>

                </TechCarouselDiv>


            </PageParent>
        </Container>
    )



}