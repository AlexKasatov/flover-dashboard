import React from 'react';
import { HeadingColor, SupportSml } from '../../styles/UI/Text';
import { MetricItemStyled } from './Metrix.styled';

const MetricItem = ({ number, text }) => (
        <MetricItemStyled>
                <HeadingColor>{number}</HeadingColor>
                <SupportSml>{text}</SupportSml>
        </MetricItemStyled>
);

export default MetricItem;
