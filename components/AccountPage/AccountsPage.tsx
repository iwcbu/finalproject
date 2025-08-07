"use client"
//Abdallah: This File has the logic behind displaying content on the Accounts Page
import styled from "styled-components";
import {Container} from "@/components/GlobalStyledComponents";
import { useState } from "react";


const StyledCard = styled.div`
    margin:5rem auto;

    //background:linear-gradient(90deg, #000000, #ffffff);

    

    background:black;
    box-shadow: 0 0 3px white;

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

    button {
        display: flex;
        margin: 0 auto;
        color: white;
        padding: 3px;
        border-radius: 5px;
        box-shadow: 0 0 3px white;

    }

`;

//Abdallah: This is a styled div for pair of label and its value (Ex. Username : Abdallah)
const Field=styled.div`
    margin-bottom:1rem;
    display:flex;
    flex-direction:column;

    input {
        color: white;
        padding: 3px;
        padding-left: 5px;
        border-radius: 6px;
        box-shadow: 0 0 3px white;
        min-width: 200px;
    }

    
    
`;

//Abdallah: Text Describing what each value is
const Label=styled.span`
    color:white;
`;
//Abdallah: Values from the mockdata.json from AccountMockDetails are mapped into this
const Input=styled.span`
    

`;





export default function AccountsPage(){

    const [usern, setUsern] = useState("");
    const [passw, setPassw] = useState("");
    const [email, setEmail] = useState("");
    const [messageDisp, setMessageDisp] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/account/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({usern, passw, email })
        });

        const data = await res.json();
        setMessageDisp(data.message);
        
    };

    return(
        <Container>
            <StyledCard>
                <h1>Your Account</h1>

                <FieldContainer onSubmit={handleSubmit}> {/* <form> */}
                    <Field>
                        <Label>Username:</Label> { /* <label for="username"> */}
                        <input
                            type="text"
                            value={usern}
                            onChange={(e) => setUsern(e.target.value)}
                            />
                    </Field>

                    <Field>
                        <Label>Email:</Label> { /* <label for="email"> */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Field>

                    <Field>
                        <Label>Password: </Label> { /* <label for="password"> */}
                        <input 
                            type="password"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                        />
                    </Field>

                    <button type="submit">Log in</button>
                    <h2>{messageDisp}</h2>

                </FieldContainer>
            </StyledCard>


        </Container>



        )




}