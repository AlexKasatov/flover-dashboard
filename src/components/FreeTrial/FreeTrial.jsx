import React from 'react';
import { Link } from 'react-router-dom';
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
                                        <Link to="/signup">
                                                <BtnActive>Get Started</BtnActive>
                                        </Link>
                                </ButtonsFrame>
                        </TrialFrame>
                </Container>
        </TrialWrapper>
);

export default FreeTrial;
