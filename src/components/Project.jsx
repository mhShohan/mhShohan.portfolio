import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import SingleProject from './SingleProject';
import { projects } from '../data';

export default function Project() {
    const filterProjects = projects.filter((project) => project.viewFront);

    return (
        <ProjectContainer id='projectSection'>
            <Container>
                <Fade bottom>
                    <Heading>Projects</Heading>
                </Fade>
                <ProjectWrapper>
                    {filterProjects.map((project) => (
                        <SingleProject project={project} key={project.id} />
                    ))}
                </ProjectWrapper>
                <SeeMoreBtn>
                    <Link to='/projects'>See All Projects...</Link>
                </SeeMoreBtn>
            </Container>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.div`
    padding: 70px 0 110px 0;
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const SeeMoreBtn = styled.div`
    margin-top: 50px;
    text-align: center;
    a {
        color: #142850;
        font-size: 26px;
        padding: 6px 20px;
        border: 1px solid #142850;
        border-radius: 2px;
        cursor: pointer;
        margin: 20px auto;
        transition: all ease 300ms;

        &:hover {
            background: #142850;
            color: #fff;
        }
    }
`;
