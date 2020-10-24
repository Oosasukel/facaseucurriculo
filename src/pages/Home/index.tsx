import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import FormCurriculo from './FormCurriculo';
import { HomeContainer, Title, HomeContent } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeContent>
          <Title>Faça seu currículo</Title>
          <FormCurriculo />
        </HomeContent>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
