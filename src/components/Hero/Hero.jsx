/* eslint-disable react/display-name */
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import macbook from '../../styles/img/mac-hq-low.avif';
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
                x: -100,
                opacity: 0,
        },
        visible: {
                x: 0,
                opacity: 0,
        },
};

export const Hero = forwardRef((ref) => (
        <HeroBlock ref={ref}>
                <Container>
                        <HeroSection>
                                <div>
                                        <HeadingHero>Beautiful analytics to grow smarter</HeadingHero>
                                        <SubHeadingHero>
                                                Powerful, self-serve product and growth analytics to help you convert,
                                                engage, and retain more users. Trusted by over 4,000 startups.
                                        </SubHeadingHero>
                                        <ButtonWrapper>
                                                <Btn2xlbase>
                                                        <FiPlayCircle size="20px" style={{ marginRight: '0.5rem' }} />
                                                        Demo
                                                </Btn2xlbase>
                                                <Link to="/signup">
                                                        <Btn2xlpmr>Sign Up</Btn2xlpmr>
                                                </Link>
                                        </ButtonWrapper>
                                </div>

                                <div>
                                        <HeroImg src={macbook} alt="macbook" />
                                </div>
                        </HeroSection>
                </Container>
        </HeroBlock>
));

const MHero = motion(Hero);
export default MHero;
