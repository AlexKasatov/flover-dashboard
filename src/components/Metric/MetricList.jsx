import { Children } from 'react';
import MetricItem from './MetricItem';
import { MetricListStyled } from './Metrix.styled';

const MetricList = ({ content }) => (
        <MetricListStyled>
                {Children.toArray(content.map(({ text, number }) => <MetricItem text={text} number={number} />))}
        </MetricListStyled>
);

export default MetricList;
