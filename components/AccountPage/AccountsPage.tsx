"use client"
//Abdallah: This File has the logic behind displaying content on the Accounts Page
import MockData from "@/AccountMockDetails/MockData.json";
import styled from "styled-components";
import {Container} from "@/components/GlobalStyledComponents";
import { useState } from "react";
import getProfile from "@/lib/profileLib/getProfile";
import insertProfile from "@/lib//profileLib/insertProfile";
import signIn from "@/lib/profileLib/signIn";


const StyledCard = styled.div`
    margin:5rem auto;

    //background:linear-gradient(90deg, #000000, #ffffff);
    border: 3px grey solid;
    

    background:black;
    box-shadow: 0 0 10px grey;

    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width:70%;
    height:50vh;
    padding:1rem;
    
    h1{
        text-align: center;
        color:white;
        margin-bottom:3rem;
        
        
    }
`;
const FieldContainer=styled.form`


`;

//Abdallah: This is a styled div for pair of label and its value (Ex. Username : Abdallah)
const Field=styled.form`
    margin-bottom:1rem;
    display:flex;
    flex-direction:column;
    
`;

//Abdallah: Text Describing what each value is
const Label=styled.span`
    color:white;
`;
//Abdallah: Values from the mockdata.json from AccountMockDetails are mapped into this
const Input=styled.span`
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 3px white;
    min-width: 200px;

`;





export default function AccountsPage(){

    const [usern, setUsern] = useState("");
    const [passw, setPassw] = useState("");
    const [email, setEmail] = useState("");
    const [messageDisp, setMessageDisp] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (getProfile(usern) === null) {

            const newProfile = {
                username: usern,
                profile: {
                    password: passw,
                    email: email,
                    firstName: null,
                    lastName: null,
                    pfp: null,
                    favStocks: []
                }
            }

            insertProfile(newProfile);
            signIn(usern, newProfile.profile.password);
            
        } else {
            signIn(usern, passw);
        }
        
    }


    return(
        <Container>
            <StyledCard>
                <h1>Your Account</h1>

                <FieldContainer action="/action_page.mo"> {/* <form> */}
                    <Field onSubmit={handleSubmit}>
                        <Label>Username:</Label> { /* <label for="username"> */}
                        <Input></Input>
                    </Field>

                    <Field onSubmit={handleSubmit}>
                        <Label>Email:</Label> { /* <label for="email"> */}
                        <Input></Input>
                    </Field>
                    <Field onSubmit={handleSubmit}>
                        <Label>Password: </Label> { /* <label for="password"> */}
                        <Input></Input>
                    </Field>


                </FieldContainer>
            </StyledCard>


        </Container>



        )




}