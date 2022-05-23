import React from 'react';
import { SectionStyled } from './SectionHeader.styled';
import { Heading, SubHeading, SupportText } from '../../styles/UI/Text';

const SectionHeader = ({ heading, subheading, support }) => (
        <SectionStyled>
                <Heading>{heading}</Heading>

                <SubHeading>{subheading}</SubHeading>

                <SupportText>{support}</SupportText>
        </SectionStyled>
);
export default SectionHeader;
