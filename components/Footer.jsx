'use client';

import styled from "styled-components";


const FooterSty = styled.div`
    padding: 5px;

    color: white;
    font-size: .6rem;
    text-align: center;
    letter-spacing: 3px;


`;

export default function Footer() {

    return (
        <>
            <FooterSty>
                <p>
                    All rights reserved ©
                </p>
            </FooterSty>
        </>
    )
}