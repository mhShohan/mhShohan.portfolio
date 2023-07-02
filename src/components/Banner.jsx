import React from 'react';
import styled from 'styled-components';
import mobileImg from '../assets/photos/mobileView.png';
import Typer from './TypingAnimation';
import { LinkItem } from './ReuseableComponents';
import Fade from 'react-reveal/Fade';

export default function Banner() {
    return (
        <BannerWrapper>
            <BannerLeft>
                <img src={mobileImg} alt='shohan' />
            </BannerLeft>
            <BannerRight>
                <Fade bottom>
                    <div className='centerElements'>
                        <img
                            src={mobileImg}
                            alt='shohan'
                            className='mobileImg'
                        />
                        <Name>Mehdi Hasan Shohan</Name>
                        <Title>
                            Junior MERN Stack Developer ||&nbsp;
                            {/* <> Programer</> */}
                            <Typer
                                heading='Things for hipsters:'
                                dataText={[
                                    'Programmer',
                                    'Learner',
                                    'Developer',
                                ]}
                            />
                        </Title>
                        <Description>
                            An enthusiast student who loves to learn and explore
                            the world of web development.
                        </Description>
                        <LinkItem banner={true} />
                        <DownLoadButton
                            href='https://drive.google.com/file/d/1aRiVz-q9f8rywx3tjNCVk_JKaKx3Suhx/view?usp=sharing'
                            rel='noreferrer'
                            target='_blank'
                        >
                            Resume
                        </DownLoadButton>
                        <br />
                        <br />
                    </div>
                </Fade>
            </BannerRight>
        </BannerWrapper>
    );
}

const BannerWrapper = styled.section`
    margin: 2rem;
    display: flex;
    min-height: 80vh;
`;

const BannerLeft = styled.div`
    flex: 1.5;
    img {
        width: 100%;
        padding: 0 50px;

        @media (max-width: 1300px) {
            width: 100%;
        }
    }
    @media (max-width: 1360px) {
        flex: 1.2;
    }
    @media (max-width: 1250px) {
        flex: 1.2;
    }
    @media (max-width: 1150px) {
        flex: 1.4;
    }
    @media (max-width: 1050px) {
        flex: 1.6;
    }
    @media (max-width: 1050px) {
        flex: 1.8;
    }
    @media (max-width: 900px) {
        flex: 2;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;
const BannerRight = styled.div`
    flex: 2;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        .centerElements {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 0px;
        }
    }

    .mobileImg {
        display: none;

        @media (max-width: 900px) {
            display: block;
            width: 100%;
        }
    }
`;

const Name = styled.h1`
    color: #142850;
    font-family: 'Balsamiq Sans', cursive;
    font-size: 4rem;
    letter-spacing: -3px;

    @media (max-width: 1200px) {
        font-size: 4rem;
    }
    @media (max-width: 1100px) {
        font-size: 3rem;
    }
    @media (max-width: 900px) {
        font-size: 4.4rem;
        letter-spacing: -1px;
    }
    @media (max-width: 750px) {
        font-size: 3.6rem;
    }
    @media (max-width: 700px) {
        font-size: 2.6rem;
    }
    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;
const Title = styled.h1`
    color: #142850;
    display: flex;
    font-family: 'Balsamiq Sans', cursive;
    letter-spacing: -2px;
    font-size: 2rem;
    padding-right: 10px;

    @media (max-width: 1200px) {
        font-size: 2rem;
    }
    @media (max-width: 1100px) {
        font-size: 1.4rem;
    }
    @media (max-width: 900px) {
        font-size: 2rem;
    }
    @media (max-width: 700px) {
        font-size: 1.4rem;
    }
    @media (max-width: 500px) {
        font-size: 1.1rem;
        letter-spacing: -1px;
    }
`;

const Description = styled.p`
    font-size: 24px;
    color: #142850;
    /* margin-bottom: 10px; */
    margin-right: 30px;

    @media (max-width: 1200px) {
        font-size: 20px;
    }
    @media (max-width: 900px) {
        text-align: center;
        font-size: 18px;
        margin-bottom: 0px;
        margin-right: 0px;
    }
`;

const DownLoadButton = styled.a`
    color: #142850;
    font-size: 26px;
    font-weight: 500;
    padding: 6px 20px;
    border: 1px solid #142850;
    border-radius: 2px;
    cursor: pointer;

    transition: all ease 300ms;

    &:hover {
        background: #142850;
        color: #fff;
    }
`;
