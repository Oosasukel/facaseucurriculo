import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../App';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { messages } from '../../languages';
import FormCurriculo from './FormCurriculo';
import { HomeContainer, Title, HomeContent } from './styles';

const Home: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeContent>
          <Title>{labels.HomeTitle}</Title>
          <FormCurriculo />
        </HomeContent>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
