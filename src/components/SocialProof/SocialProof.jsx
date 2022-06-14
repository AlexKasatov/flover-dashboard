import { Children } from 'react';
import { motion } from 'framer-motion';
import { socialProofData } from '../../data/socialProof';
import { Wrapper, ProofTitle, BlockWrapper } from './SocialProof.styled';
import SocialProofImg from './SocialProofImg';
import { Container } from '../../styles/Container';

const textAnimation = {
        hidden: {
                x: -200,
                opacity: 0,
        },
        visible: {
                x: 0,
                opacity: 1,
        },
};

const blockAnimation = {
        hidden: {
                scale: 0.8,

                opacity: 0,
        },
        visible: {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.7, type: 'spring', stiffness: 100 },
        },
};

const SocialProof = () => (
        <Container as={motion.div} initial="hidden" whileInView="visible">
                <BlockWrapper>
                        <ProofTitle as={motion.span} variants={textAnimation}>
                                Join 4,000+ companies already growing
                        </ProofTitle>
                </BlockWrapper>

                <Wrapper as={motion.div} variants={blockAnimation}>
                        {Children.toArray(
                                socialProofData.map(({ title, logotype, logomark }) => (
                                        <SocialProofImg logotype={logotype} title={title} logomark={logomark} />
                                ))
                        )}
                </Wrapper>
        </Container>
);

export default SocialProof;
