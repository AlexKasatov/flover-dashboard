import { Children } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { LinkNav } from './Header.styled';
import { burgerMainLinks, burgerSecondaryLinks } from '../../data/linksData';
import {
        MobileNav,
        NavListFlex,
        NavListGrid,
        Wrapper,
        BtnLogin,
        BtnSignup,
        NavBtnList,
        LinkNavMob,
        NavListItem,
        NavGridItem,
} from './NavMobile.styled';
import { Container } from '../../styles/Container';

const NavMobile = ({ navStyle }) => (
        <MobileNav style={navStyle}>
                <Wrapper>
                        <NavListFlex>
                                <Container>
                                        {Children.toArray(
                                                burgerMainLinks.map(({ title, url, icon }) => (
                                                        <NavListItem>
                                                                <LinkNavMob to={url}>{title}</LinkNavMob>
                                                                {icon}
                                                        </NavListItem>
                                                ))
                                        )}
                                </Container>
                        </NavListFlex>
                        <Container>
                                <NavListGrid>
                                        <ul>
                                                {Children.toArray(
                                                        burgerSecondaryLinks[0].map(({ title, url }) => (
                                                                <NavGridItem>
                                                                        <LinkNav to={url}>{title}</LinkNav>
                                                                </NavGridItem>
                                                        ))
                                                )}
                                        </ul>
                                        <ul>
                                                {Children.toArray(
                                                        burgerSecondaryLinks[1].map(({ title, url }) => (
                                                                <NavGridItem>
                                                                        <LinkNav to={url}>{title}</LinkNav>
                                                                </NavGridItem>
                                                        ))
                                                )}
                                        </ul>
                                </NavListGrid>
                        </Container>
                        <NavBtnList>
                                <BtnLogin>Login</BtnLogin>
                                <BtnSignup>Sign up</BtnSignup>
                        </NavBtnList>
                </Wrapper>
        </MobileNav>
);

export default NavMobile;
