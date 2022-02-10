import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import Skill from './Skill';
import { Heading } from './ReuseableComponents';

export default function About() {
    return (
        <AboutSection id="AboutSection">
            <Container maxWidth="lg">
                <Heading>About</Heading>
                <br />
                <br />
                <Grid container>
                    <Grid item md={5}>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt sunt beatae, veniam delectus omnis,
                            aspernatur, nesciunt quae autem ipsam laborum eius
                            molestiae debitis dolore iure illo unde libero sequi
                            commodi tempora minus. Architecto, numquam earum
                            animi voluptatibus blanditiis quidem et labore unde
                            odio odit harum reiciendis repudiandae reprehenderit
                            iste error recusandae ut dignissimos provident
                            incidunt nisi, eligendi officiis. Nihil, quo quae.
                            In dolorum facere assumenda et itaque quisquam porro
                            nobis fugit labore blanditiis, odit exercitationem,
                            culpa atque esse. Illo eum aliquam sint ipsum
                            temporibus, cum, molestias nostrum ipsa delectus
                            voluptatem quas minima. Vero et iusto autem, aliquid
                            libero sed non!
                        </Description>
                    </Grid>
                    <Grid item md={7}>
                        <SkillsSection>
                            <h2>Tools And Technologies I used</h2>
                            <Grid container>
                                <Grid item xs={12} sm={3}>
                                    <h3>Languages : </h3>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <SkillsWrapper>
                                        <Skill
                                            img="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                            title="JavaScript"
                                        />
                                        <Skill
                                            img="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                                            title="TypeScript"
                                        />
                                        <Skill
                                            img="./images/node.webp"
                                            title="NodeJS"
                                        />
                                        <Skill
                                            img="https://camo.githubusercontent.com/f7f24086498ff611c5d0346259cc1cd6bbb757fdd3da2b33debc8724b8d6f558/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31382f49534f5f432532422532425f4c6f676f2e737667"
                                            title="C/C++"
                                        />
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
                                        <Skill
                                            img="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                            title="React"
                                        />
                                        <Skill
                                            img="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                                            title="Redux"
                                        />
                                        <Skill
                                            img="./images/next.png"
                                            title="Next.js"
                                        />
                                        <Skill
                                            img="./images/express.png"
                                            title="Express.js"
                                        />
                                        <Skill
                                            img="https://camo.githubusercontent.com/a270945c683800e4c129960909b8526833e1a213e8e7614df45b374a90096cf9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574626f6f7473747261702f676574626f6f7473747261702d69636f6e2e737667"
                                            title="Bootstrap"
                                        />
                                        <Skill
                                            img="./images/mui.png"
                                            title="Material UI"
                                        />
                                        <Skill
                                            img="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
                                            title="TailwindCSS"
                                        />
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
                                        <Skill
                                            img="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
                                            title="Git"
                                        />
                                        <Skill
                                            img="./images/vscode.png"
                                            title="VS Code"
                                        />
                                        <Skill
                                            img="./images/postman.png"
                                            title="Postman"
                                        />
                                        <Skill
                                            img="./images/mongo.png"
                                            title="MongoDB"
                                        />
                                        <Skill
                                            img="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
                                            title="Firebase"
                                        />
                                        <Skill
                                            img="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
                                            title="Figma"
                                        />
                                    </SkillsWrapper>
                                </Grid>
                            </Grid>
                        </SkillsSection>
                    </Grid>
                </Grid>
            </Container>
        </AboutSection>
    );
}

const AboutSection = styled.section`
    background: rgba(71, 109, 124, 0.5);
    padding: 70px 0 70px 0;

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

    @media (max-width: 600px) {
        margin: 0;
        padding: 0 5px;
    }
`;

const SkillsSection = styled.div`
    h2 {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 2.4rem;
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
