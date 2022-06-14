import { motion } from 'framer-motion';
import { Children } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { HeadingCTA } from '../../styles/UI/Text';
import { Wrapper, CtaBlock, CtaBlockTextButton, BtnBlock, CtaBtn, CtaBtnMore } from './CtaSection.styled';
import { ladningContent } from '../../data/ladningContent';
import FeaturesList from '../Features/FeaturesList';
import { SectionImg } from '../Features/FeaturesImg';

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

const btnAnimation = {
        left: {
                hidden: {
                        x: -200,
                        opacity: 0,
                },
                visible: {
                        x: 0,
                        opacity: 1,
                        transition: { delay: 1, type: 'spring', stiffness: 70 },
                },
        },
        right: {
                hidden: {
                        x: 200,
                        opacity: 0,
                },
                visible: {
                        x: 0,
                        opacity: 1,
                        transition: { delay: 1, type: 'spring', stiffness: 70 },
                },
        },
};

const imgAnimation = {
        hidden: {
                y: -200,
                opacity: 0,
        },
        visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.7, type: 'spring', stiffness: 100 },
        },
};

const CtaSection = () => (
        <Wrapper as={motion.div} initial="hidden" whileInView="visible">
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((item) => item.title === 'cta')
                                        .map(({ heading, img, items }) => (
                                                <CtaBlock>
                                                        <CtaBlockTextButton>
                                                                <HeadingCTA
                                                                        as={motion.h1}
                                                                        variants={textAnimation}
                                                                        custom={1}
                                                                >
                                                                        {heading}
                                                                </HeadingCTA>
                                                                <FeaturesList items={items} />
                                                                <BtnBlock>
                                                                        <Link to="/signup">
                                                                                <CtaBtn
                                                                                        as={motion.button}
                                                                                        variants={btnAnimation.left}
                                                                                >
                                                                                        Get Started
                                                                                </CtaBtn>
                                                                        </Link>
                                                                        <CtaBtnMore
                                                                                as={motion.button}
                                                                                variants={btnAnimation.right}
                                                                        >
                                                                                More Info
                                                                        </CtaBtnMore>
                                                                </BtnBlock>
                                                        </CtaBlockTextButton>

                                                        <SectionImg
                                                                initial="hidden"
                                                                whileInView="visible"
                                                                as={motion.img}
                                                                variants={imgAnimation}
                                                                src={img}
                                                                alt={heading}
                                                        />
                                                </CtaBlock>
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default CtaSection;
