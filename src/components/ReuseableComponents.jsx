import styled from 'styled-components';
import {
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaTwitterSquare,
} from 'react-icons/fa';

export const Heading = styled.h1`
    font-size: 4rem;
    font-family: 'Kurale', serif;
    text-align: center;
    text-transform: uppercase;
    position: relative;

    &::before {
        content: '';
        display: block;
        width: 80px;
        height: 7px;
        background: rgba(0, 0, 0, 0.65);
        position: absolute;
        left: calc(50% - 40px);
        bottom: 0;
    }

    &::after {
        content: '';
        display: block;
        width: 300px;
        height: 3px;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: calc(50% - 150px);
        bottom: 2px;
        -webkit-transform: skew(45deg);
        transform: skew(45deg);
    }

    @media (max-width: 1100px) {
        font-size: 4rem;
    }
    @media (max-width: 900px) {
        font-size: 3.6rem;
    }
    @media (max-width: 600px) {
        font-size: 3rem;
    }
    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

export function LinkItem({ banner }) {
    return (
        <LinkContainer banner={banner}>
            <a
                href='https://www.linkedin.com/in/mehdi-hasan-shohan/'
                rel='noreferrer'
                target='_blank'
            >
                <FaLinkedin />
            </a>
            <a
                href='https://github.com/mhShohan'
                rel='noreferrer'
                target='_blank'
            >
                <FaGithub />
            </a>
            <a
                href='https://www.facebook.com/mshohan17/'
                rel='noreferrer'
                target='_blank'
            >
                <FaFacebook />
            </a>
            <a
                href='https://twitter.com/mehdi_hasan17'
                rel='noreferrer'
                target='_blank'
            >
                <FaTwitterSquare />
            </a>
        </LinkContainer>
    );
}

const LinkContainer = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: row !important;
    margin-bottom: 20px;

    a {
        font-size: 35px;
        color: ${(props) => (props.banner ? '#142850' : '#000')};
        padding-right: 8px;
        cursor: pointer;
        -webkit-transition: transform 300ms ease-in-out;
        -moz-transition: transform 300ms ease-in-out;
        -o-transition: transform 300ms ease-in-out;
        -ms-transition: transform 300ms ease-in-out;
        transition: transform 300ms ease-in-out;

        &:hover {
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

    @media (max-width: 900) {
        padding: 0;
        margin: 0;
    }
`;
