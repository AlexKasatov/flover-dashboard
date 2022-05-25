import { Children } from 'react';
import { Link } from 'react-router-dom';
import { IconItem } from './Footer.styled';

const IconList = ({ body }) => Children.toArray(body.map(({ icon }) => <IconItem>{icon}</IconItem>));

export default IconList;
