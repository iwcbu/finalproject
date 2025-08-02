"use client";

import styled from "styled-components";

const HeaderSty = styled.header`
        height: 50px;
        width: 80%;
        margin: 0 auto;
        background-color: maroon;
        padding: 10px;


`;

export default function Header() {
    return (
        <HeaderSty>
            <h1>Marker Scouters</h1>
        </HeaderSty>
    );

}