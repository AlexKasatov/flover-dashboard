import styled from 'styled-components';
import { motion } from 'framer-motion';

const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
        text-align: center;
        border-radius: 333px;
        background-color: ${({ theme }) => theme.icon.wraperMd};
        outline: 8px solid ${({ theme }) => theme.icon.outline};
        padding: 1rem;
        svg {
                stroke: ${({ theme }) => theme.icon.color};
        }
        margin-bottom: 1.5rem;
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
        <motion.div initial="hidden" whileInView="visible">
                <IconWrapper as={motion.div} variants={iconAnimation}>
                        {icon}
                </IconWrapper>
        </motion.div>
);

export default IconStyled;
