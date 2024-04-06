import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c31;
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 0.8em;
  p {
    margin: 5px 0;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>Piotr Michalak | Portfolio</p>
            <p>© {new Date().getFullYear()} All Rights Reserved - Licensed under MIT</p>
        </FooterContainer>
    );
};

export default Footer;
