import styled from 'styled-components';
import { motion } from 'framer-motion';

const IconWrapper = styled.div`
        text-align: center;
        border-radius: 50%;

        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -khtml-border-radius: 50%;
        padding: 0.7rem;

        background-color: ${({ theme }) => theme.icon.wraperMd};
        border: 8px solid ${({ theme }) => theme.icon.outline};

        svg {
                margin: 0.2rem;
                padding: 0;
                stroke: ${({ theme }) => theme.icon.color};
        }
        margin-bottom: 1.5rem;
`;

const Wrapper = styled(motion.div)`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
`;

const iconAnimation = {
        hidden: {
                y: -50,
                opacity: 0,
        },
        visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.7, type: 'spring', stiffness: 100 },
        },
};

const IconStyled = ({ icon }) => (
        <Wrapper initial="hidden" whileInView="visible">
                <IconWrapper as={motion.div} variants={iconAnimation}>
                        {icon}
                </IconWrapper>
        </Wrapper>
);

export default IconStyled;
