"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home } from "@mui/icons-material"

const StyledDiv=styled.div`
/*  HEAD:components/NavBar.tsx */
    background-color: whitesmoke;
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
    h1{
        color:white;
    }
    

 /* 34e5313f0c6a3ba2af9a0bc67c84f256d87dd667:components/NavBar/NavBar.tsx */

`;

const StyledUl=styled.ul`

    display: flex;
    gap: 45px;
    list-style:none;
    

    a{
        color: white;
        padding: 5px;
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
        key:"Contact",
        href:"/Contact",
        name:"Contact"
    },
    {
        key:"Account",
        href:"/Account",
        name:"Account"

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