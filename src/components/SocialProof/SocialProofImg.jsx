import React from 'react';
import { Wrapper, LogoTypeInverted } from './SocialProofImg.styled';

const SocialProofImg = ({ logomark, logotype, title }) => (
        <Wrapper>
                <img src={logomark} alt={title} />
                <LogoTypeInverted src={logotype} alt={title} />
        </Wrapper>
);

export default SocialProofImg;
