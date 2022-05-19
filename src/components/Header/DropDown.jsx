import { Children } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import { productItems } from '../../data/linksData';
import { MobileNav } from './NavMobile.styled';

export const DropDownStyled = styled.ul`
        background-color: white;
        margin: 0 auto;
        padding: 2rem;
        position: fixed;
        top: 4rem;
        display: flex;
        flex-flow: column wrap;
`;

const DropDown = ({ dropdown }) => (
        <DropDownStyled>
                <Container>
                        {dropdown &&
                                Children.toArray(
                                        productItems.map(({ title, subTitle, url }) => (
                                                <li>
                                                        <NavLink to={url}>{title}</NavLink>
                                                        <p>{subTitle}</p>
                                                </li>
                                        ))
                                )}
                </Container>
        </DropDownStyled>
);

export default DropDown;
