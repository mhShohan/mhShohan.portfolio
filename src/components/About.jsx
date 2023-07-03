import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import Fade from 'react-reveal/Fade';
import { Heading } from './ReuseableComponents';
import Education from './Education';

export default function About() {
    return (
        <AboutSection id='AboutSection'>
            <Container maxWidth='lg'>
                <Fade bottom>
                    <Heading>About</Heading>
                </Fade>
                <br />
                <br />
                <Grid container>
                    <Grid item md={12}>
                        <Fade left>
                            <Description>
                                Hi, I'm Mehdi Hasan Shohan, a passionate
                                self-taught programmer. I'm learning from the
                                open-source community and trying to contribute
                                to the open source community. I started my
                                programming journey about 3 years ago. I am very
                                curious about web technologies and I'm learning
                                several technologies and comfortable with
                                working with these technologies. Currently, I am
                                working with MERN Stack development and
                                practicing on personal projects. I'm comfortable
                                in Javascript, Node.js, Express.js, RestAPIs,
                                JWT, React, Context API, Bootstrap, Material UI,
                                Styled Components, SASS, etc...!!!
                            </Description>
                            <br />
                            <Description>
                                <span>Interested in:</span> Softwere
                                Engineering, Microservices, AWS, Web 3.0 ...!!!
                            </Description>
                        </Fade>
                    </Grid>
                    <Grid item md={12}>
                        <Education />
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
