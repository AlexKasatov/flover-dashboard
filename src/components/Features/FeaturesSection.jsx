import { Children } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../styles/Container';
import IconStyled from '../../styles/UI/Icon';
import { HeadingBase, SupportTextBase } from '../../styles/UI/Text';
import FeaturesImg from './FeaturesImg';
import FeaturesList from './FeaturesList';
import { SectionFeature, AcrticleFeautre } from './Section.styled';

const textAnimation = {
        hidden: {
                x: -200,
                opacity: 0,
        },
        visible: (custom) => ({
                x: 0,
                opacity: 1,

                transition: { delay: custom * 0.3 },
        }),
};

const FeaturesSection = ({ content }) => (
        <Container>
                {Children.toArray(
                        content.map(({ icon, heading, support, items, img }) => (
                                <SectionFeature as={motion.section} initial="hidden" whileInView="visible">
                                        <AcrticleFeautre>
                                                <IconStyled icon={icon} />

                                                <HeadingBase as={motion.h1} variants={textAnimation} custom={1}>
                                                        {heading}
                                                </HeadingBase>

                                                <SupportTextBase as={motion.p} variants={textAnimation} custom={2}>
                                                        {support}
                                                </SupportTextBase>

                                                <FeaturesList items={items} />
                                        </AcrticleFeautre>

                                        <FeaturesImg img={img} alt={heading} />
                                </SectionFeature>
                        ))
                )}
        </Container>
);

export default FeaturesSection;
