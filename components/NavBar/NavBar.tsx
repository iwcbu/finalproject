"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home } from "@mui/icons-material"

const StyledDiv=styled.div`
/*  HEAD:components/NavBar.tsx */
    background-color: whitesmoke;
    height: fit-content;
    padding: 10px;
    border-bottom:2px black solid;
    background-color: black;
    border-bottom: 3px solid grey;

`;

const StyledHeader=styled.div`
    h1{
        color:white;
    }
    

 /* 34e5313f0c6a3ba2af9a0bc67c84f256d87dd667:components/NavBar/NavBar.tsx */

`;

const StyledUl=styled.ul`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    list-style:none;

    a{
        color: white;
    }


`;


const links=[
    {
        key:"Home",
        href:"/",
        name:<Home />

    },
    {
        key:"Account",
        href:"/Account",
        name:"Account"

    },

    {
        key: "About",
        href:"/About",
        name:"About"
    },

    {
        key:"Contact",
        href:"/Contact",
        name:"Contact"
    }

];


export default function NavBar() {
    // const pathname=usePathname();

    return(
        <StyledDiv>
            <StyledHeader><h1>Market Scouters</h1></StyledHeader>
            <nav>
                <StyledUl>

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