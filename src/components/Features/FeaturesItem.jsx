import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
const listAnimation = {
        hidden: {
                y: -100,
                opacity: 0,
        },
        visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.9, type: 'spring', stiffness: 100 },
        },
};

const FeaturesItem = ({ text, img }) => (
        <Wrapper as={motion.div} initial="hidden" whileInView="visible">
                <IconWrapper as={motion.div} variants={listAnimation}>
                        <Icon src={img} alt={text} />
                </IconWrapper>

                <SupportTextBase as={motion.p} variants={listAnimation}>
                        {text}
                </SupportTextBase>
        </Wrapper>
);

export default FeaturesItem;
