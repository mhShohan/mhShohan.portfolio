import React from 'react';
import styled from 'styled-components';

export default function Banner() {
    return (
        <BannerWrapper>
            <BannerLeft>
                <img src="./images/shohan.png" alt="shohan" />
            </BannerLeft>
            <BannerRight>
                <div>
                    <Name>Mehdi Hasan Shohan</Name>
                    <Title>
                        <h1>
                            Web Developer Enthusiast || <span>Programer</span>
                        </h1>
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
`;

const Name = styled.h1`
    color: #142850;
    font-family: 'Balsamiq Sans', cursive;
    /* font-family: 'Roboto', sans-serif; */

    font-size: 5rem;
    letter-spacing: -3px;

    /* text-transform: uppercase; */

    @media (max-width: 1200px) {
        font-size: 4rem;
    }
`;
const Title = styled.div`
    color: #142850;
    display: flex;
    font-family: 'Balsamiq Sans', cursive;
    letter-spacing: -2px;

    h1 {
        font-size: 2.4rem;
        padding-right: 10px;

        @media (max-width: 1200px) {
            font-size: 2rem;
        }
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
`;

const DownLoadButton = styled.a`
    color: #142850;
    font-size: 26px;
    padding: 10px 20px;
    border: 1px solid #142850;
    border-radius: 2px;
    cursor: pointer;
`;
