import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import { ButtonBase } from '../../styles/UI/ButtonCTA';
import macbook from '../../styles/img/macb.png';
import { Container } from '../../styles/Container';
import { Btn2xlpmr, Btn2xlbase } from './Hero.styled';

const Hero = () => (
        <header>
                <Container>
                        <div>
                                <h1>Beautiful analytics to grow smarter</h1>
                                <h3>
                                        Powerful, self-serve product and growth analytics to help you convert, engage,
                                        and retain more users. Trusted by over 4,000 startups.
                                </h3>
                                <Btn2xlbase>
                                        <FiPlayCircle size="20px" style={{ marginRight: '0.5rem' }} />
                                        Demo
                                </Btn2xlbase>
                                <Btn2xlpmr>Sign Up</Btn2xlpmr>
                        </div>

                        <div>{/* <img src={macbook} alt="macbook" /> */}</div>
                </Container>
        </header>
);

export default Hero;
