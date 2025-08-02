"use client"
import Link from "next/link";
import styled from "styled-components";

const StyledDiv=styled.div`
    background-color: #cfe1b9;

`;

const StyledUl=styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    list-style:none;
    a{
        color: white;
    }


`;

const links=[
    {
        href:"/",
        name:"Home"
    },
    {
        href:"/About",
        name:"About"
    }




];


export default function NavBar() {
    // const pathname=usePathname();


    return(
        <StyledDiv>
            <nav>
                <StyledUl>
                    {links.map((link)=>(
                        <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>

                        )
                    )
                    }


                </StyledUl>
            </nav>



        </StyledDiv>




    );





}