import React from 'react';
import styled from 'styled-components';
import { SupportTextBase } from '../../styles/UI/Text';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
`;

const Icon = styled.img``;

const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.75rem;
        width: 1.75rem;
`;

const FeaturesItem = ({ text, img }) => (
        <Wrapper>
                <IconWrapper>
                        <Icon src={img} alt={text} />
                </IconWrapper>

                <SupportTextBase>{text}</SupportTextBase>
        </Wrapper>
);

export default FeaturesItem;
