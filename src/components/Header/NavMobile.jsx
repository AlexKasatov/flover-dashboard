import { Children } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { LinkNav } from './Header.styled';
import { mainNavLinks } from '../../data/linksData';
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
                                                mainNavLinks.map(({ title, url, icon }) => (
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
                                                <NavGridItem>
                                                        <LinkNav to="#!">About us</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Press</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Careers</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Legal</LinkNav>
                                                </NavGridItem>
                                        </ul>
                                        <ul>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Support</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Contact</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Sitemap</LinkNav>
                                                </NavGridItem>
                                                <NavGridItem>
                                                        <LinkNav to="#!">Cookie settings</LinkNav>
                                                </NavGridItem>
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
