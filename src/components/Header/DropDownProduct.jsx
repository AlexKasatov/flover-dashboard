import { Children } from 'react';

import { NavLink } from 'react-router-dom';
import { productItems } from '../../data/linksData';

const DropDownProduct = () => (
        <ul>
                {Children.toArray(
                        productItems.map(({ title, subTitle, url }) => (
                                <li>
                                        <NavLink to={url}>{title}</NavLink>
                                        <p>{subTitle}</p>
                                </li>
                        ))
                )}
        </ul>
);

export default DropDownProduct;
