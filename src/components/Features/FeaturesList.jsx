import { Children } from 'react';
import FeaturesItem from './FeaturesItem';

const FeaturesList = ({ items }) => (
        <ul>{Children.toArray(items.map(({ icon, text }) => <FeaturesItem img={icon} text={text} />))}</ul>
);

export default FeaturesList;
