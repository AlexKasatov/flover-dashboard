import React from 'react';
import { Container } from '../../styles/Container';
import { HeaderPromo, SupportTextColor } from '../../styles/UI/Text';
import { TrialWrapper, TrialFrame, ButtonsFrame, TextFrame, BtnActive, BtnMore } from './FreeTrial.styled';

const FreeTrial = () => (
        <TrialWrapper>
                <Container>
                        <TrialFrame>
                                <TextFrame>
                                        <HeaderPromo>Start your 30-day free trial</HeaderPromo>
                                        <SupportTextColor>
                                                Join over 4,000+ startups already growing with Untitled.
                                        </SupportTextColor>
                                </TextFrame>
                                {/* subheading here */}
                                <ButtonsFrame>
                                        <BtnMore>Learn more</BtnMore>
                                        <BtnActive>Get Started</BtnActive>
                                </ButtonsFrame>
                        </TrialFrame>
                </Container>
        </TrialWrapper>
);

export default FreeTrial;
