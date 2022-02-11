import { Container } from '@mui/material';
import React from 'react';
import { Heading } from './ReuseableComponents';
import Slider from './Slider';
import styled from 'styled-components';

export default function PersonalInterest() {
    return (
        <PersonalInterestContainer>
            <Container>
                <Heading>Personal Interest</Heading>
            </Container>
            <Slider />
        </PersonalInterestContainer>
    );
}

const PersonalInterestContainer = styled.section`
    padding: 40px 0 50px 0;
`;
