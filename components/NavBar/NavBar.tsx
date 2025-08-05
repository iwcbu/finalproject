"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home, Menu } from "@mui/icons-material";
import { useState } from "react";


const StyledDiv=styled.div`
/*  HEAD:components/NavBar.tsx */
    
    height: fit-content;
    padding: 10px 30px;
    border-bottom:2px black solid;
    background-color: black;
    border-bottom: 3px solid grey;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`;

const StyledHeader=styled.div`
    display: flex;
    justify-content: space-between;
    h1{
        color:white;
        
    }
    

 /* 34e5313f0c6a3ba2af9a0bc67c84f256d87dd667:components/NavBar/NavBar.tsx */

`;

const StyledUl=styled.ul<{ open : boolean }>`

    display: flex;
    flex-direction: row;
    
    gap: 45px;
    list-style:none;
    

    a{
        color: white;
        padding: 5px;
    }


    @media screen and (max-width: 750px) {
        flex-direction: column;

        display:${({open}) => (open ? "flex" : "none")};

    }


`;
const Hamburger=styled(Menu)`
    color:white;
    cursor: pointer;
    display:none;
    @media screen and (max-width: 750px) {
        display:block;
    }
`;
const links=[
    {
        key:"Home",
        href:"/",
        name:<Home />

    },
    
    {
        key: "About",
        href:"/About",
        name:"About"
    },
    
    {
        key:"AllStocks",
        href:"/AllStocks",
        name:"All Stocks"
    },
    {
        key:"Account",
        href:"/Account",
        name:"Account"

    }

];


export default function NavBar() {

    const [open, setOpen]=useState(false);

    return(
        <StyledDiv>
            <StyledHeader><h1>Market Scouters</h1>
                <Hamburger onClick={()=>setOpen(!open)}/>
            </StyledHeader>
            <nav>
                <StyledUl open={open}>

                    {links.map((link)=>(
                        <li key={link.key}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                        
                        ))
                    }
                </StyledUl>
            </nav>
        </StyledDiv>
    );
}