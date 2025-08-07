'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import PopStockGallery from '../HomePage/PopStockGallery';

const PageContainer = styled.div`
  background: black;
  min-height: 100vh;
  color: white;
  font-family: 'Montserrat', sans-serif;
  padding: 2rem 1rem;
  margin: 0 auto;
  width: 80vw;

  #top {
    display: flex;
    gap: 3rem;
  }

  button {
    height: fit-content;
    display: flex;
    color: red;
    box-shadow: 0px 0px 5px 0px red;
    padding: 4px;
  }

`;

const Header = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  #name {
    font-size: 1.8rem;
    font-weight: bold;
  }

  #email {
    font-size: 1rem;
  }
`;

const ProfilePic = styled.div`
  background: #ff4d4d;
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;


export default function ProfilePageContent() {
    const router = useRouter();

    const username = sessionStorage.getItem('username')

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('Signing out now...')
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        router.push('/Account')
    
    }
        
    if (!sessionStorage.getItem('username')) {
    return (
            <>
                <h1 style={{
                    color: "red",
                    padding: "30px",
                    fontSize:" 40px"
                    }}>
                        Register an account in the account page
                </h1>
                <button onClick={handleSubmit} style={{
                    color: "white",
                    border: "3px white solid",
                    padding: "3px",
                    width: "fit-content",
                    display: "flex",
                }}>Go Back</button>
            </>
        )
    } else {

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <PageContainer>
                <div id="top">
                    <Header>Welcome, {username}</Header>
                    <button onClick={handleSubmit}>Sign Out</button>
                </div>

                <ProfileSection>
                    <ProfileInfo>
                        <h1 id='name'>Name: </h1>
                        <p id='email'>Email: </p>
                    </ProfileInfo>
                    <ProfilePic />
                </ProfileSection>

                <SectionTitle>Favorite Stocks</SectionTitle>

                <PopStockGallery stocks={[]}/>
            </PageContainer>
        </>
    );
}
}

