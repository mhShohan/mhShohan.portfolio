import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';

export default function Project() {
    return (
        <ProjectContainer id="projectSection">
            <Container>
                <Heading>Projects</Heading>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={12}>
                        <ProjectItem>
                            <img src="./images/gtp3.jpg" alt="" />
                            <div className="projectDetails">
                                <h2>GTP3 Figma to React</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam voluptatum dolorum
                                    aut enim debitis sint voluptatem expedita
                                    sed unde dignissimos.
                                </p>
                            </div>
                            <div className="viewLinks">
                                <a
                                    href="https://github.com/mhShohan/gpt3-figma-react"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="gitIcon"
                                >
                                    <GoMarkGithub /> <span>Source Code</span>
                                </a>
                                <a
                                    href="https://gpt3-react-figma.netlify.app"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="liveIcon"
                                >
                                    <AiOutlineEye /> <span>Live View</span>
                                </a>
                            </div>
                        </ProjectItem>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                        <ProjectItem>
                            <img src="./images/tesla.jpeg" alt="" />
                            <div className="projectDetails">
                                <h2>Tesla Homepage Clone</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam voluptatum dolorum
                                    aut enim debitis sint voluptatem expedita
                                    sed unde dignissimos.
                                </p>
                            </div>
                            <div className="viewLinks">
                                <a
                                    href="https://github.com/mhShohan/Tesla_Homepage_Clone_with_React"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="gitIcon"
                                >
                                    <GoMarkGithub /> <span>Source Code</span>
                                </a>
                                <a
                                    href="https://tesla-homepage-clone131.netlify.app"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="liveIcon"
                                >
                                    <AiOutlineEye /> <span>Live View</span>
                                </a>
                            </div>
                        </ProjectItem>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                        <ProjectItem>
                            <img
                                src="./images/admin-dashboard.jpeg"
                                alt="admin-dashboard"
                            />
                            <div className="projectDetails">
                                <h2>Admin Dashboard</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam voluptatum dolorum
                                    aut enim debitis sint voluptatem expedita
                                    sed unde dignissimos.
                                </p>
                            </div>
                            <div className="viewLinks">
                                <a
                                    href="https://github.com/mhShohan/admin-dashboard-react"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="gitIcon"
                                >
                                    <GoMarkGithub /> <span>Source Code</span>
                                </a>
                                <a
                                    href="https://admin-dashboard2321.netlify.app/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="liveIcon"
                                >
                                    <AiOutlineEye /> <span>Live View</span>
                                </a>
                            </div>
                        </ProjectItem>
                    </Grid>
                </Grid>
                <SeeMoreBtn>
                    <a href="#a">See More Projects...</a>
                </SeeMoreBtn>
            </Container>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.div`
    padding: 70px 0 110px 0;
`;

const ProjectItem = styled.div`
    margin-top: 10px;
    border-radius: 4px;
    position: relative;
    transition: 0.3s;
    margin-top: 30px;

    .projectDetails {
        background: rgb(71, 109, 124);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0 0 4px 4px;
        font-family: 'Roboto', sans-serif;
    }
    .viewLinks {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 343;
        border-radius: 4px;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 0.3s;

        .gitIcon {
            border: 1px solid #fff;
            padding: 5px 10px;
            border-radius: 4px;
            transition: 0.3s;
            font-weight: 600;
            display: flex;
            justify-content: center;

            span {
                margin-left: 4px;
            }

            &:hover {
                background: #fff;
                color: #000;
            }
        }
        .liveIcon {
            border: 1px solid #fff;
            padding: 5px 10px;
            border-radius: 4px;
            transition: 0.3s;
            font-weight: 600;
            display: flex;
            justify-content: center;
            margin: 10px;

            span {
                margin-left: 4px;
            }
            &:hover {
                background: #fff;
                color: #000;
            }
        }
    }

    &:hover {
        .viewLinks {
            opacity: 1;
        }
    }

    h2 {
        padding: 5px 10px;
        color: #000;
        text-align: center;
    }
    p {
        color: #000;
        padding: 0 15px 15px 15px;
        text-align: justify;
    }
    img {
        border-radius: 4px;
        width: 100%;
    }
`;

const SeeMoreBtn = styled.div`
    margin-top: 40px;
    text-align: center;
    a {
        color: #142850;
        font-size: 26px;
        padding: 10px 20px;
        border: 1px solid #142850;
        border-radius: 2px;
        cursor: pointer;
        margin: 20px auto;
    }
`;
