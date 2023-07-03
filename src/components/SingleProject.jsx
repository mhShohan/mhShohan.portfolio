import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

export default function SingleProject({ project }) {
    const { title, description, img, github, liveLink } = project;

    return (
        <Fade bottom>
            <ProjectItem>
                <ImgContainer>
                    <img src={img} alt={title} />
                </ImgContainer>
                <div className='projectDetails'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='viewLinks'>
                    <a
                        href={github}
                        rel='noreferrer'
                        target='_blank'
                        className='gitIcon'
                    >
                        <GoMarkGithub /> <span>Source Code</span>
                    </a>
                    <a
                        href={liveLink}
                        rel='noreferrer'
                        target='_blank'
                        className='liveIcon'
                    >
                        <AiOutlineEye /> <span>Live View</span>
                    </a>
                </div>
            </ProjectItem>
        </Fade>
    );
}
const ImgContainer = styled.div`
    height: 340px;

    img {
        height: 100%;
        object-fit: cover;
        object-position: top center;
    }
`;
const ProjectItem = styled.div`
    border-radius: 4px;
    position: relative;
    transition: 0.3s;
    margin-top: 30px;
    padding: 1rem;
    border: 1px solid #142850;
    height: 100%;

    .projectDetails {
        h3 {
            font-size: 24px;
            margin-top: 0.5rem;
        }
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

    h3 {
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
