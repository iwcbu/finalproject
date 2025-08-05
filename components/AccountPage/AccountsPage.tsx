"use client"
//Abdallah: This File has the logic behind displaying content on the Accounts Page
import MockData from "@/AccountMockDetails/MockData.json";
import styled from "styled-components";
import {Container} from "@/components/GlobalStyledComponents";


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
const Field=styled.div`
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

    const data=MockData;

    return(
        <Container>
            <StyledCard>
                <h1>Your Account</h1>

                <FieldContainer action="/action_page.mo"> {/* <form> */}
                    <Field>
                        <Label>Username:</Label> { /* <label for="username"> */}
                        <Input></Input>
                    </Field>

                    <Field>
                        <Label>Email:</Label> { /* <label for="email"> */}
                        <Input></Input>
                    </Field>
                    <Field>
                        <Label>Password: </Label> { /* <label for="password"> */}
                        <Input></Input>
                    </Field>


                </FieldContainer>
            </StyledCard>


        </Container>



        )




}