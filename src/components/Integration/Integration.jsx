import { Children } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../styles/Container';
import { Wrapper, BtnMain, BtnWrapper } from './Integration.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';
import IntegrationIcons from './IntegrationIcons';

const btnAnimation = {
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

const Integration = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((section) => section.title === 'integrations')
                                        .map(({ heading, subheading, support, button, content }) => (
                                                <>
                                                        <SectionHeader
                                                                heading={heading}
                                                                subheading={subheading}
                                                                support={support}
                                                        />
                                                        <IntegrationIcons content={content} />
                                                        <BtnWrapper>
                                                                <BtnMain
                                                                        as={motion.button}
                                                                        initial="hidden"
                                                                        whileInView="visible"
                                                                        variants={btnAnimation}
                                                                >
                                                                        {button}
                                                                </BtnMain>
                                                        </BtnWrapper>
                                                </>
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default Integration;
