import React from 'react';
import { Container } from '../../styles/Container';
import AvatarText from './AvatarText';
import { QuoteSection, Wrapper, HeadingLx } from './Quote.styled';
import SocialProofImg from '../SocialProof/SocialProofImg';
import { socialProofData } from '../../data/socialProof';

const Quote = () => (
        <Wrapper>
                <Container>
                        <QuoteSection>
                                <HeadingLx>
                                        Flover has saved us thousands of hours of work and has unlock data insights we
                                        never thought possible.
                                </HeadingLx>
                                <AvatarText />
                                {socialProofData.map(({ title, logotype, logomark }) => (
                                        <SocialProofImg title={title} logotype={logotype} logomark={logomark} />
                                ))}
                        </QuoteSection>
                </Container>
        </Wrapper>
);

export default Quote;
