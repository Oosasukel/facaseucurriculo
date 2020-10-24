import React from 'react';
import { DonateLink, FooterContainer, FooterContent, Author } from './styles';
import { FaPaypal, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Link to='contact'>
          <Author>
            <FaUserCircle size={20} style={{ marginRight: 4 }} />
            Autor: Rodrigo Gonçalves do Nascimento
          </Author>
        </Link>

        <DonateLink
          href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6UWFNASN4NPX8&item_name=Manter+e+melhorar+o+site+%3A%29&currency_code=BRL'
          target='_blank'
        >
          <FaPaypal size={20} style={{ marginRight: 4 }} />
          Doar via PayPal
          {/* {<img src='https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif' />} */}
        </DonateLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
