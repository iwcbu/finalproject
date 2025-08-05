"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home, Menu } from "@mui/icons-material";
import { useState } from "react";


const StyledDiv=styled.div`
/*  HEAD:components/NavBar.tsx */
    
    height: fit-content;
    padding: 10px;
  
    background-color: black;
    border-bottom: 3px solid grey;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`;

const StyledHeader=styled.div`
   
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
        float:right;

        display:${({open}) => (open ? "flex" : "none")};

    }


`;
const Hamburger=styled(Menu)`
    color:white;
    cursor: pointer;
    display:none;
    opacity:0;
    
    @media screen and (max-width: 750px) {
        display:block;
        opacity:1;
       
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

const MenuMagic=styled.div`
    
   
`;

export default function NavBar() {

    const [open, setOpen]=useState(false);

    return(
        <StyledDiv>
            <StyledHeader><h1>Market Scouters</h1>

            </StyledHeader>

                <MenuMagic>
                    <Hamburger onClick={()=>setOpen(!open)}/>
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


                </MenuMagic>



        </StyledDiv>
    );
}