import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: 5rem;
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
`;
