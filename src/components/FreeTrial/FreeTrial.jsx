import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { HeaderPromo, SupportTextColor } from '../../styles/UI/Text';
import { TrialWrapper, TrialFrame, ButtonsFrame, TextFrame, BtnActive, BtnMore } from './FreeTrial.styled';

const blockAnimation = {
        hidden: {
                scale: 0.7,
                opacity: 0,
        },
        visible: {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.3, type: 'spring', stiffness: 100 },
        },
};

const FreeTrial = () => (
        <TrialWrapper as={motion.div} initial="hidden" whileInView="visible" variants={blockAnimation}>
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
