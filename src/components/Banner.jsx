import React from 'react';
import styled from 'styled-components';
import mobileImg from '../assets/photos/mobileView.png';
import Typer from './TypingAnimation';

export default function Banner() {
    return (
        <BannerWrapper>
            <BannerLeft>
                <img src="./images/shohan.png" alt="shohan" />
            </BannerLeft>
            <BannerRight>
                <div>
                    <img src={mobileImg} alt="shohan" className="mobileImg" />
                    <Name>Mehdi Hasan Shohan</Name>
                    <Title>
                        Web Developer Enthusiast ||&nbsp;
                        {/* <> Programer</> */}
                        <Typer
                            heading="Things for hipsters:"
                            dataText={['Programer', 'Learner', 'Developer']}
                        />
                    </Title>
                    <Decription>
                        An enthusiast student who loves to learn and explore the
                        world of web development.
                    </Decription>
                    <DownLoadButton>Resume</DownLoadButton>
                </div>
            </BannerRight>
        </BannerWrapper>
    );
}

const BannerWrapper = styled.section`
    margin: 0 2rem;
    display: flex;
    min-height: 80vh;
`;

const BannerLeft = styled.div`
    flex: 1;
    img {
        margin-top: 80px;
        width: 90%;
        padding: 0 50px;
        margin-bottom: -3px;

        @media (max-width: 1300px) {
            width: 90%;
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
        div {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 40px;
        }
    }

    .mobileImg {
        display: none;

        @media (max-width: 900px) {
            display: block;
            width: 90%;
            margin: 80px 0 0 0;
        }
    }
`;

const Name = styled.h1`
    color: #142850;
    font-family: 'Balsamiq Sans', cursive;
    font-size: 5rem;
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
    font-size: 2.4rem;
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

const Decription = styled.p`
    font-size: 24px;
    color: #142850;
    margin-bottom: 30px;
    margin-right: 30px;

    @media (max-width: 1200px) {
        font-size: 20px;
    }
    @media (max-width: 900px) {
        text-align: center;
        font-size: 18px;
        margin-bottom: 10px;
        margin-right: 0px;
    }
`;

const DownLoadButton = styled.a`
    color: #142850;
    font-size: 26px;
    padding: 10px 20px;
    border: 1px solid #142850;
    border-radius: 2px;
    cursor: pointer;
`;
