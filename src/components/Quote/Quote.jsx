import { motion } from 'framer-motion';
import { Container } from '../../styles/Container';
import AvatarText from './AvatarText';
import { QuoteSection, Wrapper, HeadingLx } from './Quote.styled';
import Slider from './Slider';

const textAnimation = {
        hidden: {
                x: -200,
                opacity: 0,
        },
        visible: (custom) => ({
                x: 0,
                opacity: 1,

                transition: { delay: custom * 0.3 },
        }),
};

const Quote = () => (
        <Wrapper as={motion.div} initial="hidden" whileInView="visible">
                <Container>
                        <QuoteSection>
                                <HeadingLx as={motion.h1} variants={textAnimation} custom={1}>
                                        Flover has saved us thousands of hours of work and has unlock data insights we
                                        never thought possible.
                                </HeadingLx>
                                <AvatarText />
                                <Slider />
                        </QuoteSection>
                </Container>
        </Wrapper>
);

export default Quote;
