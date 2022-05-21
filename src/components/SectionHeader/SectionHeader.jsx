import React from 'react';
import { SectionStyled } from './SectionHeader.styled';
import { Heading, SubHeading, SupportText } from '../../styles/UI/Text';

const SectionHeader = () => (
        <SectionStyled>
                <SubHeading>Features</SubHeading>
                <Heading>Analytics that feels like it’s from the future</Heading>
                <SupportText>
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more
                        users. Trusted by over 4,000 startups.
                </SupportText>
        </SectionStyled>
);

export default SectionHeader;
