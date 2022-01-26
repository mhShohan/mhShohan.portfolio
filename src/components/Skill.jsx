import React from 'react';
import styled from 'styled-components';

export default function Skill({ img, title }) {
    return (
        <SkillWrapper>
            <img src={img} alt={title} />
            <span>{title}</span>
        </SkillWrapper>
    );
}

const SkillWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    max-width: 120px;
    height: 30px;
    position: relative;
    border-radius: 2px;
    margin: 2px;
    img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    span {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        margin-left: 30px;
        font-weight: 500;
        padding-right: 10px;
    }
`;
