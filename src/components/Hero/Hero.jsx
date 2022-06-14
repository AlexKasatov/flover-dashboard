import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import macbook from '../../styles/img/mac-hero.webp';
import { Container } from '../../styles/Container';
import {
        Btn2xlpmr,
        Btn2xlbase,
        HeadingHero,
        SubHeadingHero,
        HeroImg,
        HeroSection,
        ButtonWrapper,
        HeroBlock,
} from './Hero.styled';

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

const imgAnimation = {
        hidden: {
                y: 200,
                opacity: 0,
        },
        visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.7, type: 'spring', stiffness: 100 },
        },
};

const btnLeftAnimation = {
        hidden: {
                x: -200,
                opacity: 0,
        },
        visible: {
                x: 0,
                opacity: 1,
                transition: { delay: 1, type: 'tween', stiffness: 100 },
        },
};

const btnRightAnimation = {
        hidden: {
                x: 200,
                opacity: 0,
        },
        visible: {
                x: 0,
                opacity: 1,
                transition: { delay: 1, type: 'tween', stiffness: 100 },
        },
};

const Hero = () => (
        <HeroBlock as={motion.header} initial="hidden" whileInView="visible">
                <Container>
                        <HeroSection>
                                <div>
                                        <HeadingHero as={motion.h1} custom={1} variants={textAnimation}>
                                                Beautiful analytics to grow smarter
                                        </HeadingHero>
                                        <SubHeadingHero as={motion.h2} custom={2} variants={textAnimation}>
                                                Powerful, self-serve product and growth analytics to help you convert,
                                                engage, and retain more users. Trusted by over 4,000 startups.
                                        </SubHeadingHero>
                                        <ButtonWrapper>
                                                <Btn2xlbase as={motion.button} variants={btnLeftAnimation}>
                                                        <FiPlayCircle size="20px" style={{ marginRight: '0.5rem' }} />
                                                        Demo
                                                </Btn2xlbase>
                                                <Link to="/signup">
                                                        <Btn2xlpmr as={motion.button} variants={btnRightAnimation}>
                                                                Sign Up
                                                        </Btn2xlpmr>
                                                </Link>
                                        </ButtonWrapper>
                                </div>

                                <div>
                                        <HeroImg
                                                as={motion.img}
                                                custom={4}
                                                variants={imgAnimation}
                                                src={macbook}
                                                alt="macbook"
                                        />
                                </div>
                        </HeroSection>
                </Container>
        </HeroBlock>
);

export default Hero;
