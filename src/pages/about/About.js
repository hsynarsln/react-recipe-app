import React from 'react';
import coding from '../../assets/coding.svg';
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle';

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={coding} />
      <HeaderContainer>
        <h1>About Software Develepor</h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I am Hüseyin</h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
