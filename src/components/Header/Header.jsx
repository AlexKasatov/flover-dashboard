/* eslint-disable import/no-unresolved */
import { useState, Children, useMemo } from 'react';
import { FiMoon, FiSun, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import symbolIcon from '../../styles/img/symbol.svg';
import logoTypeIcon from '../../styles/img/logotype.svg';
import { useMode } from '../../hooks/useMode';
import { HeaderStyled, Symbol, LogoType, Logo, Wrapper, LeftNav, LinkNav, RightNav, NavLink } from './Header.styled';
import { Container } from '../../styles/Container';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';
import { useMedia } from '../../hooks/useMedia';
import { useToggle } from '../../hooks/useToggle';
import NavMobile from './NavMobile';
import { mainNavLinks } from '../../data/linksData';

const Header = () => {
        const { toggleTheme, mode } = useMode();

        // fill control hover effect on theme icons
        const [fill, setFill] = useState('none');

        // toggleBurger control burger menu state( open / close )
        const [toggleBurger, handleToggleBurger] = useToggle();

        // close burger menu if resize screen
        const closeBurgerMenu = useMedia(['(min-width: 1024px)', '(min-width: 768px)'], ['false', 'true']);
        const handleToggleCloseBurgerMenu = () => closeBurgerMenu && toggleBurger && handleToggleBurger(() => false);
        useMemo(() => {
                handleToggleCloseBurgerMenu();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [closeBurgerMenu]);

        // dosen't dispay burger menu on desktop
        const burgerMenuDisplay = useMedia(['(min-width: 1024px)'], ['none']);
        const burgerMenuStyle = { display: burgerMenuDisplay };

        // dosen't dispay header's btns (login & sing up)  on mobile
        const navButtonDisplay = useMedia(['(min-width: 768px)', '(min-width: 364px)'], ['inline-block', 'none']);
        const navButtonStyle = { display: navButtonDisplay };

        // hover effect on theme icons
        const moonStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };
        const sunStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };

        // display burger menu on toggleBruger
        const navMobileStyle = { height: !toggleBurger ? '0' : 'auto' };

        return (
                <>
                        <HeaderStyled>
                                <Container>
                                        <Wrapper>
                                                <LeftNav>
                                                        <Logo>
                                                                <Symbol src={symbolIcon} alt="symbol" />

                                                                <LogoType src={logoTypeIcon} alt="logotype" />
                                                        </Logo>
                                                        <NavLink>
                                                                {Children.toArray(
                                                                        mainNavLinks.map(({ title, url, icon }) => (
                                                                                <li>
                                                                                        <LinkNav to={url}>
                                                                                                {title}
                                                                                        </LinkNav>
                                                                                        {icon}
                                                                                </li>
                                                                        ))
                                                                )}
                                                        </NavLink>
                                                </LeftNav>

                                                <RightNav>
                                                        {mode === 'light' ? (
                                                                <FiMoon
                                                                        style={moonStyle}
                                                                        size={24}
                                                                        onClick={toggleTheme}
                                                                        type="button"
                                                                        onMouseEnter={() =>
                                                                                setFill('var(--primary-600)')
                                                                        }
                                                                        onMouseLeave={() => setFill('none')}
                                                                />
                                                        ) : (
                                                                <FiSun
                                                                        style={sunStyle}
                                                                        size={24}
                                                                        onClick={toggleTheme}
                                                                        type="button"
                                                                        onMouseEnter={() =>
                                                                                setFill('var(--primary-600)')
                                                                        }
                                                                        onMouseLeave={() => setFill('none')}
                                                                />
                                                        )}

                                                        <BtnTerGrey style={navButtonStyle} type="button">
                                                                Log In
                                                        </BtnTerGrey>
                                                        <BtnPrimary style={navButtonStyle} type="button">
                                                                Sign Up
                                                        </BtnPrimary>
                                                        {!toggleBurger ? (
                                                                <FiMenu
                                                                        onClick={handleToggleBurger}
                                                                        size={24}
                                                                        style={burgerMenuStyle}
                                                                />
                                                        ) : (
                                                                <FiX
                                                                        onClick={handleToggleBurger}
                                                                        size={24}
                                                                        style={burgerMenuStyle}
                                                                />
                                                        )}
                                                </RightNav>
                                        </Wrapper>
                                </Container>
                        </HeaderStyled>
                        {toggleBurger && <NavMobile navStyle={navMobileStyle} />}
                </>
        );
};

export default Header;
