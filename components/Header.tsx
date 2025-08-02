"use client";

import styled from "styled-components";

const HeaderSty = styled.header`
        height: fit-content;
        padding: 10px;
        margin: 0 auto;

        color: whitesmoke;
        background-color: black;

        h1 {
            width: fit-content;
            height: fit-content;
            
            justify-self: center;
            padding: 5px;
            border: 3px white solid;
        }

`;

export default function Header() {
    return (
        <HeaderSty>
            <h1>Marker Scouters</h1>
        </HeaderSty>
    );

}