import { Children } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import { productItems } from '../../data/linksData';
import { MobileNav } from './NavMobile.styled';

export const DropDownStyled = styled.ul`
        background-color: white;
        margin: 0;
        padding: 0.5rem 0;
        position: absolute;
        top: 4rem;
        display: none;
        flex-flow: column wrap;
`;

const DropDown = ({ dropdown, submenu }) =>
        dropdown && (
                <DropDownStyled>
                        {Children.toArray(
                                submenu.map(({ title, subTitle, url }) => (
                                        <li>
                                                <NavLink to={url}>{title}</NavLink>
                                                <p>{subTitle}</p>
                                        </li>
                                ))
                        )}
                </DropDownStyled>
        );

export default DropDown;
