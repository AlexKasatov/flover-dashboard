import { Children } from 'react';
import { IconItem } from './Footer.styled';

const IconList = ({ body }) => Children.toArray(body.map(({ icon }) => <IconItem>{icon}</IconItem>));

export default IconList;
