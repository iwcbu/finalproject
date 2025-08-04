"use client"
//Abdallah: This File has the logic behind displaying content on the Accounts Page
import MockData from "@/AccountMockDetails/MockData.json";
import styled from "styled-components";
import {Container} from "@/components/GlobalStyledComponents";


const StyledCard = styled.div`
    margin:5rem auto;
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
const FieldContainer=styled.div`
    

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
const Value=styled.span`
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
                {
                data.slice(0,1).map((info)=>(

                    <FieldContainer key={info.id}>
                        <Field>
                            <Label>Username:</Label>
                            <Value>{info.username}</Value>
                        </Field>

                        <Field>
                            <Label>Email:</Label>
                            <Value>{info.email}</Value>
                        </Field>

                        <Field>
                            <Label>Password: </Label>
                            <Value>{info.password}</Value>
                        </Field>


                    </FieldContainer>
                    )
                )
            }
            </StyledCard>


        </Container>



        )




}