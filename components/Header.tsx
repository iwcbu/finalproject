"use client"

import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: #e9f5db;
    padding:2rem;
    text-align:left;

`;
const StyledH1=styled.h1`
    
`;

export default function Header() {
    return(
        <StyledHeader>
            <StyledH1>Market Scouters</StyledH1>

        </StyledHeader>



    )
}