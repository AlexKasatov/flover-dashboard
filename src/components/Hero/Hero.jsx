import React from 'react';
import { ButtonBase } from '../../styles/UI/ButtonCTA';
import macbook from '../../styles/img/macb.png';

const Hero = () => (
        <header>
                <div>
                        <h1>Beautiful analytics to grow smarter</h1>
                        <h3>
                                Powerful, self-serve product and growth analytics to help you convert, engage, and
                                retain more users. Trusted by over 4,000 startups.
                        </h3>
                </div>
                <div>
                        <ButtonBase>Demo</ButtonBase>
                        <ButtonBase>Sign Up</ButtonBase>
                </div>
                <div>
                        <img src={macbook} alt="macbook" />
                </div>
        </header>
);

export default Hero;
