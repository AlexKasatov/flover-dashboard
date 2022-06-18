import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroImg } from '../Hero/Hero.styled';

export const SectionImg = styled(HeroImg)`
        border: 3px solid var(--gray-100);
        box-shadow: var(--shadow-2xl);
        border-radius: 1.2rem;
        -webkit-border-radius: 1.2rem;
        -moz-border-radius: 1.2rem;
        -khtml-border-radius: 1.2rem;
        width: 100%;
        object-fit: scale-down;

        /* Mask Works But Ugly */
        /* mask-image: radial-gradient(white, black);
        -webkit-mask-image: -webkit-radial-gradient(white, black); */

        /* Also Works but Ugly */
        /* -webkit-transform: translateZ(0);
        -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); */
        /* object-position: -20% 0; */
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
        <SectionImg
                as={motion.img}
                initial="hidden"
                whileInView="visible"
                variants={imgAnimation}
                src={img}
                alt={alt}
                loading="lazy"
        />
);

export default FeaturesImg;
