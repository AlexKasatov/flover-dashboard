import { Children } from 'react';
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

const NavMobile = ({ navStyle, handleToggleBurger }) => {
        const handleCloseBurger = () => {
                handleToggleBurger();
        };

        return (
                <MobileNav style={navStyle}>
                        <Wrapper>
                                <Container>
                                        <NavListFlex>
                                                {Children.toArray(
                                                        burgerMainLinks.map(({ title, url, icon }) => (
                                                                <NavListItem>
                                                                        <LinkNavMob
                                                                                onClick={handleCloseBurger}
                                                                                to={url}
                                                                        >
                                                                                {title}
                                                                        </LinkNavMob>
                                                                        {icon}
                                                                </NavListItem>
                                                        ))
                                                )}
                                        </NavListFlex>

                                        <NavListGrid>
                                                {Children.toArray(
                                                        burgerSecondaryLinks.map(({ title, url }) => (
                                                                <NavGridItem>
                                                                        <LinkNav onClick={handleCloseBurger} to={url}>
                                                                                {title}
                                                                        </LinkNav>
                                                                </NavGridItem>
                                                        ))
                                                )}
                                        </NavListGrid>
                                </Container>
                                <NavBtnList>
                                        <BtnLogin>Login</BtnLogin>
                                        <BtnSignup>Sign up</BtnSignup>
                                </NavBtnList>
                        </Wrapper>
                </MobileNav>
        );
};

export default NavMobile;
