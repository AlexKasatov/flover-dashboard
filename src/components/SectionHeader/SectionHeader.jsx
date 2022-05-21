import React from 'react';
import { SectionStyled } from './SectionHeader.styled';
import { Heading, SubHeading, SupportText } from '../../styles/UI/Text';

const SectionHeader = (props) => {
        const { heading, subheading, support } = props;
        console.log(props);
        return (
                <SectionStyled>
                        <Heading>What</Heading>
                        <Heading>{heading}</Heading>
                        <SubHeading />
                        <Heading />
                        <SupportText />
                        {/* <SubHeading>{header.subheading}</SubHeading>
                <Heading>{header.heading}</Heading>
                <SupportText>{header.support}</SupportText> */}
                </SectionStyled>
        );
};

export default SectionHeader;
