import React from 'react';
import styled from 'styled-components';
import { SupportTextBase } from '../../styles/UI/Text';

const Wrapper = styled.div`
        display: flex;
        flex-direction: row nowrap;
        align-items: center;
        padding: 0.7rem 0;
`;

const Icon = styled.img``;

const IconWrapper = styled.div`
        display: flex;
        background-color: ${({ theme }) => theme.icon.wraperSm};
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        height: 1.75rem;
        width: 1.75rem;
        margin-right: 0.75rem;
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
