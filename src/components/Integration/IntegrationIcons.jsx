import { Children } from 'react';
import { IconList } from './Integration.styled';

const IntegrationIcons = ({ content }) => (
        <IconList>{Children.toArray(content.map((item) => <img src={item} alt={item} />))}</IconList>
);

export default IntegrationIcons;
