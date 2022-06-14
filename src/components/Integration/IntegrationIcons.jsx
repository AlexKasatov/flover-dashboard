import { Children } from 'react';
import { motion } from 'framer-motion';
import { IconList } from './Integration.styled';

const blockAnimation = {
        hidden: {
                scale: 0.8,

                opacity: 0,
        },
        visible: {
                scale: 1,
                opacity: 1,
                transition: { delay: 0.7, type: 'spring', stiffness: 100 },
        },
};

const IntegrationIcons = ({ content }) => (
        <IconList>
                {Children.toArray(
                        content.map((item) => (
                                <motion.img
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={blockAnimation}
                                        src={item}
                                        alt={item}
                                />
                        ))
                )}
        </IconList>
);

export default IntegrationIcons;
