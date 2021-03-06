import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {
  ContactContainer,
  Title,
  AuthorContainer,
  AuthorImage,
  AuthorInfo,
  AuthorInfoContainer,
  InfoLabel,
  InfoValue,
  IconLink,
  IconsContainer,
  ContentContainer,
} from './styles';

import authorImage from '../../assets/images/Author.jpg';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { LanguageContext } from '../../App';
import { messages } from '../../languages';

const Contact: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  return (
    <>
      <Navbar />
      <ContactContainer>
        <ContentContainer>
          <Title>{labels.ContactTitle}</Title>

          <AuthorContainer>
            <AuthorImage src={authorImage} />

            <AuthorInfoContainer>
              <AuthorInfo>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>facaseucurriculo@hotmail.com</InfoValue>
              </AuthorInfo>
              <IconsContainer>
                <IconLink
                  href='https://www.linkedin.com/in/rodrigogon/'
                  target='_blank'
                >
                  <FaLinkedin size={50} />
                </IconLink>
                <IconLink
                  href='https://www.facebook.com/rodrigo.goncalvesdonascimento/'
                  target='_blank'
                >
                  <FaFacebookSquare size={50} />
                </IconLink>
              </IconsContainer>
            </AuthorInfoContainer>
          </AuthorContainer>
        </ContentContainer>
        <Footer />
      </ContactContainer>
    </>
  );
};

export default Contact;
