"use client"
import Link from "next/link";
import styled from "styled-components";
import { Home } from "@mui/icons-material"

const StyledDiv=styled.div`
    background-color: whitesmoke;
    height: fit-content;
    padding: 10px;
    border-bottom:2px black solid;

`;

const StyledUl=styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    list-style:none;

    a{
        color: black;
    }

    /** Contact button styles - IWC */
    #contact {
        width: fit-content;
        height: fit-content;

        padding: 5px 10px;
        border-radius: 7px;

        background-color: green;
        a {
            color: white;
        }
    }


`;


const links=[
    {
        key: "About",
        href:"/About",
        name:"About"
    },
    {
        key:"Home",
        href:"/",
        name:<Home />
        
    }

];


export default function NavBar() {
    // const pathname=usePathname();

    return(
        <StyledDiv>
            <nav>
                <StyledUl>
                    <li key={"Contact"} id="contact">
                        <Link href={"/Contact"}>Contact</Link>
                    </li>
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