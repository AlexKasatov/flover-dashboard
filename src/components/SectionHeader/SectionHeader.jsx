import { motion } from 'framer-motion';
import { SectionStyled } from './SectionHeader.styled';
import { Heading, SubHeading, SupportText } from '../../styles/UI/Text';
import IconStyled from '../../styles/UI/Icon';

const headingAnimation = {
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

const SectionHeader = ({ heading, subheading, support, icon }) => (
        <SectionStyled as={motion.header} initial="hidden" whileInView="visible">
                {icon ? (
                        <IconStyled icon={icon} />
                ) : (
                        <SubHeading as={motion.h2} variants={headingAnimation}>
                                {subheading}
                        </SubHeading>
                )}
                <Heading as={motion.h1} variants={textAnimation} custom={1}>
                        {heading}
                </Heading>

                <SupportText as={motion.p} variants={textAnimation} custom={2}>
                        {support}
                </SupportText>
        </SectionStyled>
);
export default SectionHeader;
