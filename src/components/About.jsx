import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import Skill from './Skill';
import { Heading } from './ReuseableComponents';
import { skills } from '../data';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <AboutSection id="AboutSection">
      <Container maxWidth="lg">
        <Fade bottom>
          <Heading>About</Heading>
        </Fade>
        <br />
        <br />
        <Grid container>
          <Grid item md={5}>
            <Fade left>
              <Description>
                Hi, I'm Mehdi Hasan Shohan, a passionate self-taught programmer.
                I'm learning from the open-source community and trying to
                contribute to the open source community. I started my
                programming journey about 2 years ago. I am very curious about
                web technologies and I'm learning several technologies and
                comfortable with working with these technologies. Currently, I
                am working with MERN Stack development and practicing on
                personal projects. I'm comfortable in Javascript, Node.js,
                Express.js, RestAPIs, JWT, React, Context API, Bootstrap,
                Material UI, Styled Components, SASS, etc...!!!
              </Description>
              <br />
              <Description>
                <span>Interested in:</span> Softwere Engineering, Microservices,
                AWS, Web 3.0 ...!!!
              </Description>
            </Fade>
          </Grid>
          <Grid item md={7}>
            <Fade right>
              <SkillsSection>
                <h2>Tools And Technologies I'm using</h2>
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <h3>Languages : </h3>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <SkillsWrapper>
                      {skills.Languages.map((lng) => (
                        <Skill key={lng.id} img={lng.img} title={lng.name} />
                      ))}
                    </SkillsWrapper>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <h3>Libraries / Frameworks : </h3>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <SkillsWrapper>
                      {skills.libraries.map((lng) => (
                        <Skill key={lng.id} img={lng.img} title={lng.name} />
                      ))}
                    </SkillsWrapper>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <h3>Databases : </h3>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <SkillsWrapper>
                      {skills.database.map((lng) => (
                        <Skill key={lng.id} img={lng.img} title={lng.name} />
                      ))}
                    </SkillsWrapper>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <h3>Tools : </h3>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <SkillsWrapper>
                      {skills.tools.map((lng) => (
                        <Skill key={lng.id} img={lng.img} title={lng.name} />
                      ))}
                    </SkillsWrapper>
                  </Grid>
                </Grid>
              </SkillsSection>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  background: rgba(71, 109, 124, 0.5);
  padding: 70px 0 110px 0;

  h3 {
    font-size: 26px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: justify;
  margin: 0 30px;
  letter-spacing: -0.9px;
  line-height: 24px;

  span {
    font-weight: 600;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 0 5px;
  }
`;

const SkillsSection = styled.div`
  h2 {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 20px;

    &::after {
      content: '';
      display: block;
      width: 40%;
      height: 2px;
      background: #000;
      margin: 0.3rem auto;
    }
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 900px) {
    h3 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 700px) {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    h3 {
      text-align: center;
      margin-bottom: 6px;
    }
    h2 {
      margin-top: 20px;
      font-size: 1.8rem;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
      margin-top: 20px;
    }
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
