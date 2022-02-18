import { Container } from '@mui/material';
import React from 'react';
import { Heading } from './ReuseableComponents';
import Slider from './Slider';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

export default function PersonalInterest() {
  return (
    <PersonalInterestContainer>
      <Container>
        <Fade bottom>
          <Heading>Personal Interest</Heading>
          <Description>
            I'm a guitarist and junior musician since 2014, that year I started
            to perform local concerts. I have been performed with several local
            bands as a lead guitarist. In 2019, I formed a band called
            <strong> Distortion</strong> at my university. Now I'm contributing
            to my band as a founder and lead guitarist...
          </Description>
        </Fade>
      </Container>
      <Pulse>
        <Slider />
      </Pulse>
    </PersonalInterestContainer>
  );
}

const PersonalInterestContainer = styled.section`
  padding: 40px 0 50px 0;
`;

const Description = styled.p`
  margin: 20px 100px 10px 100px;
  text-align: center;
  font-size: 16px;

  @media (max-width: 700px) {
    margin: 20px 50px 10px 50px;
  }
  @media (max-width: 550px) {
    margin: 20px 20px 10px 20px;
  }
`;
