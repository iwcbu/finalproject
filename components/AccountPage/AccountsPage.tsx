"use client";
// Abdallah: This file contains the logic and UI for the Account page, where users can log in or sign up.

import styled from "styled-components";
import { Container } from "@/components/GlobalStyledComponents";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Styled card container for the account form
const StyledCard = styled.div`
    margin: 5rem auto;
    background: black;
    box-shadow: 0 0 3px white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 10px;
    width: 70%;
    height: 50vh;
    max-width: 600px;
    padding: 1rem;

    h1 {
        text-align: center;
        color: white;
        margin-bottom: 3rem;
    }
`;

// Styled form container with button styling
const FieldContainer = styled.form`
    button {
        display: flex;
        margin: 0 auto;
        color: white;
        padding: 3px;
        border-radius: 5px;
        box-shadow: 0 0 3px white;
    }
`;

// Styled container for each label/input pair
const Field = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    input {
        color: white;
        padding: 3px;
        padding-left: 5px;
        border-radius: 6px;
        box-shadow: 0 0 3px white;
        min-width: 200px;
    }
`;

// Styled span for labels describing each input field
const Label = styled.span`
    color: white;
`;


export default function AccountsPage() {
    const router = useRouter();

    // State to track user input for username, password, and email
    const [usern, setUsern] = useState("");
    const [passw, setPassw] = useState("");
    const [email, setEmail] = useState("");

    // State to display success/error message after submission
    const [messageDisp, setMessageDisp] = useState("");

    // Handles form submission asynchronously
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents default form submission which reloads the page

        // Send POST request to your API endpoint with the entered credentials
        const res = await fetch('/api/account/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usern, passw, email })
        });

        // Parse the JSON response
        const data = await res.json();

        // Update message display based on API response success or failure
        setMessageDisp(data.success);

        console.log("AccountsPage -> data.success: ", data.success);
        console.log("AccountsPage -> data.message: ", data.message);

        // If login/signup succeeded, update session storage and redirect to profile page
        if (data.success) {
            console.log('Profile redirecting now...');
            sessionStorage.setItem('isLoggedIn', 'true');  // Mark user as logged in
            sessionStorage.setItem('username', usern);     // Save username for session use
            setUsern(usern);                               // Optional: reset/set username in state
            router.push('/Profile');                        // Navigate to Profile page
        }
    };

    return (
        <Container>
            <StyledCard>
                <h1>Your Account</h1>
                {/* Form for user to enter username, email, and password */}
                <FieldContainer onSubmit={handleSubmit}>
                    <Field>
                        <Label>Username:</Label>
                        <input
                            type="text"
                            value={usern}
                            onChange={(e) => setUsern(e.target.value)}
                        />
                    </Field>

                    <Field>
                        <Label>Email:</Label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Field>

                    <Field>
                        <Label>Password: </Label>
                        <input
                            type="password"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                        />
                    </Field>

                    {/* Submit button */}
                    <button type="submit">Log in</button>

                    {/* Display message returned from server */}
                    <h2>{messageDisp}</h2>
                </FieldContainer>
            </StyledCard>
        </Container>
    );
}
