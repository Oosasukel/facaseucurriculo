import React from 'react';
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
  LinkedinLink,
  IconsContainer,
  ContentContainer,
} from './styles';

import authorImage from '../../assets/images/Author.jpg';
import { FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContactContainer>
        <ContentContainer>
          <Title>Contato</Title>

          <AuthorContainer>
            <AuthorImage src={authorImage} />

            <AuthorInfoContainer>
              <AuthorInfo>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>facaseucurriculo@hotmail.com</InfoValue>
              </AuthorInfo>
              <IconsContainer>
                <LinkedinLink
                  href='https://www.linkedin.com/in/rodrigogon/'
                  target='_blank'
                >
                  <FaLinkedin size={50} />
                </LinkedinLink>
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
