import React from 'react';
import { SectionStyled } from './SectionHeader.styled';
import { Heading, SubHeading, SupportText } from '../../styles/UI/Text';
import IconStyled from '../../styles/UI/Icon';

const SectionHeader = ({ heading, subheading, support, icon }) => (
        <SectionStyled>
                {icon ? <IconStyled icon={icon} /> : <SubHeading>{subheading}</SubHeading>}
                <Heading>{heading}</Heading>

                <SupportText>{support}</SupportText>
        </SectionStyled>
);
export default SectionHeader;
