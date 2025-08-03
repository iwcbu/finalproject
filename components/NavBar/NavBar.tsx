"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home } from "@mui/icons-material"

const StyledDiv=styled.div`
    background-color: black;
    border-bottom: 3px solid grey;

`;

const StyledHeader=styled.div`
    h1{
        color:white;
    }
    


`;

const StyledUl=styled.ul`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    list-style:none;

    a{
        color: white;
    }

    /** Contact button styles - IWC */
    #contact {
        width: fit-content;
        height: fit-content;
        padding: 5px 10px;
        background-color: #5c8a56;
        border-radius: 7px;
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