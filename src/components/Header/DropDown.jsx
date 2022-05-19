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
        display: flex;
        justify-content: space-between;
        flex-flow: column nowrap;

        li {
                padding: 1rem;
                width: 100%;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                justify-content: flex-start;
                align-items: center;
        }
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
