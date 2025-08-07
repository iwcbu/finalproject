"use client";
import Link from "next/link";
import styled from "styled-components";
import { Home } from "@mui/icons-material";
import { useState, useEffect } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";


//Abdallah: This component handles everything related to the Nav bar
//Using material UI and media query it is made to chnage from a horizontal
// nav menu to a MUI Menu icon for screens with max width 750px

const StyledDiv = styled.div`
    height: fit-content;
    padding: 10px;
    background-color: black;
    border-bottom: 3px solid grey;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeader = styled.div`
    h1 {
        color: white;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 45px;
    list-style: none;

    a {
        color: white;
        padding: 5px;
    }

    @media screen and (max-width: 750px) {
        display: none;
        
    }
`;




const MenuMagic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HamburgerButton = styled.button`

    color: white;
    cursor: pointer;

    opacity: 0;

    @media screen and (max-width: 750px) {
        display: block;
        opacity: 1;
    }
`;
export default function NavBar() {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem('isLoggedIn');
        setValue(stored === 'true');
    }, []);


    const links = [
        {
            key: "Home",
            href: "/",
            name: <Home />,
        },
        {
            key: "About",
            href: "/About",
            name: "About",
        },
        {
            key: "AllStocks",
            href: "/AllStocks",
            name: "All Stocks",
        },
        {
            key: "Account",
            href: value ? "/Profile" : "/Account" ,
            name: value ? "Profile" : "Account",
        },
    ];

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledDiv>
            <StyledHeader>
                <h1>Market Scouters</h1>
            </StyledHeader>

            <MenuMagic>
                <HamburgerButton onClick={handleClick} aria-label="Open menu">
                    <MenuIcon />
                </HamburgerButton>

                {/*This is how our nav will appear for screens bigger than 750px*/}
                <nav>
                    <StyledUl>
                        {links.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </StyledUl>
                </nav>

                {/* This code is from MUI  */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            "aria-labelledby": "menu-button",
                        },
                    }}
                >
                    {links.map((link) => (
                        <MenuItem key={link.key} onClick={handleClose}>
                            <Link
                                href={link.href}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                {link.name}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </MenuMagic>
        </StyledDiv>
    );
}