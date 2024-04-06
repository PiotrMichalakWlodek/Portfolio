import React from 'react';
import styled from 'styled-components';
import { about } from '../configuration/constants';

const AboutContainer = styled.div`
  margin-top: 2rem;
  background-color: #33383e;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const AboutText = styled.p`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  font-size: 1.2rem;
`;

const About = () => (
    <AboutContainer id="about">
        <h1>About me</h1>
        <AboutText>{about.description}</AboutText>
    </AboutContainer>
);

export default About;
