"use client"
import styled from "styled-components";

//Abdallah: This component is used in the layout.tsx to wrap all the content
export const PageWrapper = styled.div`
    width: 80vw; //Abdallah: To squeeze the Page
    margin: 0 auto; //Abdallah: To center the page
    background-color:whitesmoke; 
`;


//Abdallah: This component is used to store content in the main pages.
//Used in:
//         AboutPageContent

export const Container=styled.div`
    min-height:100vh; //Abdallah: To make the content always fit in the page when resizing
    width:100%; //Abdallah: To ensure container is always inside parent div(PageWrapper)
    display:flex;
    flex-direction:column;
   
    
    



`;



