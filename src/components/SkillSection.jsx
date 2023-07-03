import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import Skill from './Skill';
import { skills } from '../data';
import Fade from 'react-reveal/Fade';
import { Heading } from './ReuseableComponents';

const SkillSection = () => {
    return (
        <SkillContainer id='skillSection'>
            <Container>
                <Fade right>
                    <Heading>Skills</Heading>
                    <br />
                    <SkillsSection>
                        <Grid container>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={2}>
                                <h3>Expertise: </h3>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <SkillsWrapper>
                                    {skills.expertise.map((lng) => (
                                        <Skill
                                            key={lng.id}
                                            img={lng.img}
                                            title={lng.name}
                                        />
                                    ))}
                                </SkillsWrapper>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={2}>
                                <h3>Comfortable: </h3>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <SkillsWrapper>
                                    {skills.comfortable.map((lng) => (
                                        <Skill
                                            key={lng.id}
                                            img={lng.img}
                                            title={lng.name}
                                        />
                                    ))}
                                </SkillsWrapper>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={2}>
                                <h3>Familiar: </h3>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <SkillsWrapper>
                                    {skills.familiar.map((lng) => (
                                        <Skill
                                            key={lng.id}
                                            img={lng.img}
                                            title={lng.name}
                                        />
                                    ))}
                                </SkillsWrapper>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={2}>
                                <h3>Tools : </h3>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <SkillsWrapper>
                                    {skills.tools.map((lng) => (
                                        <Skill
                                            key={lng.id}
                                            img={lng.img}
                                            title={lng.name}
                                        />
                                    ))}
                                </SkillsWrapper>
                            </Grid>
                        </Grid>
                    </SkillsSection>
                </Fade>
            </Container>
        </SkillContainer>
    );
};

export default SkillSection;

const SkillContainer = styled.section`
    padding: 3rem 0 5rem 0;
    background: #6d97a3;
`;

const SkillsSection = styled.div`
    h3 {
        font-size: 1.6rem;
    }
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
