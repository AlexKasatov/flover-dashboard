import React from 'react';
import { Container } from '../../styles/Container';
import { HeaderPromo } from '../../styles/UI/Text';
import { TrialWrapper, TrialFrame } from './FreeTrial.styled';

const FreeTrial = () => (
        <TrialWrapper>
                <Container>
                        <TrialFrame>
                                <HeaderPromo>Start your 30-day free trial</HeaderPromo>
                        </TrialFrame>
                </Container>
        </TrialWrapper>
);

export default FreeTrial;
