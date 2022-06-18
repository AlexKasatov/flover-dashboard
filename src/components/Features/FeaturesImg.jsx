import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroImg } from '../Hero/Hero.styled';

export const SectionImg = styled(HeroImg)`
        -webkit-border-radius: 1rem;
        -moz-border-radius: 1rem;
        border-radius: 1rem;
        -khtml-border-radius: 1rem;
        vertical-align: middle;

        /* -webkit-transform: translateZ(0);
        -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); */
        /* object-position: -20% 0; */
`;

const ImgWrapper = styled.div`
        display: inline-block;
        -webkit-border-radius: 1rem;
        -moz-border-radius: 1rem;
        border-radius: 1rem;
        -khtml-border-radius: 1rem;
        box-shadow: var(--shadow-2xl);
        outline: 4px solid var(--gray-100);
`;

const imgAnimation = {
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

const FeaturesImg = ({ img, alt }) => (
        <ImgWrapper as={motion.img} initial="hidden" whileInView="visible" variants={imgAnimation}>
                <SectionImg src={img} alt={alt} loading="lazy" />
        </ImgWrapper>
);

export default FeaturesImg;
