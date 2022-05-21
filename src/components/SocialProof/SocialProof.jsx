import { Children } from 'react';
import { socialProofData } from '../../data/socialProof';
import { Wrapper, ProofTitle, BlockWrapper } from './SocialProof.styled';
import SocialProofImg from './SocialProofImg';
import { Container } from '../../styles/Container';

const SocialProof = () => (
        <Container>
                <BlockWrapper>
                        <ProofTitle>Join 4,000+ companies already growing</ProofTitle>
                </BlockWrapper>

                <Wrapper>
                        {Children.toArray(
                                socialProofData.map(({ title, logotype, logomark }) => (
                                        <SocialProofImg logotype={logotype} title={title} logomark={logomark} />
                                ))
                        )}
                </Wrapper>
        </Container>
);

export default SocialProof;
