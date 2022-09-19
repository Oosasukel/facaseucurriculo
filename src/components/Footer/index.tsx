import React, { useContext, useEffect, useState } from "react";
import { FooterContainer, FooterContent, Author } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import { messages } from "../../languages";

const Footer: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  return (
    <FooterContainer>
      <FooterContent>
        <Link to="contact">
          <Author>
            <FaUserCircle size={20} style={{ marginRight: 4 }} />
            {labels.FooterAuthor}: Rodrigo Gonçalves do Nascimento
          </Author>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
