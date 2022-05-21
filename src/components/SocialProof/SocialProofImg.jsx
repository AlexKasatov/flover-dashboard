import React from 'react';
import { Wrapper } from './SocialProofImg.styled';

const SocialProofImg = ({ logomark, logotype, title }) => (
        <Wrapper>
                <img src={logomark} alt={title} />
                <img src={logotype} alt={title} />
        </Wrapper>
);

export default SocialProofImg;
