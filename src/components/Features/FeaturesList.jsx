import { Children } from 'react';
import styled from 'styled-components';
import FeaturesItem from './FeaturesItem';

const List = styled.ul`
        margin-top: 2rem;
`;

const FeaturesList = ({ items }) => (
        <List>{Children.toArray(items.map(({ icon, text }) => <FeaturesItem img={icon} text={text} />))}</List>
);

export default FeaturesList;
