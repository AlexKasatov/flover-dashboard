/* eslint-disable import/no-unresolved */
import { useState, useMemo } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMode } from '../../hooks/useMode';
import { HeaderStyled, Wrapper, RightNav } from './Header.styled';
import { Container } from '../../styles/Container';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';
import { useMedia } from '../../hooks/useMedia';
import { useToggle } from '../../hooks/useToggle';
import NavMobile from './NavMobile';
import LeftNav from './LeftNav';
import { pageTransition } from '../../animation/page';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
        // AUTH
        const { currentUser, logout } = useAuth();

        // change mode toggler
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
        const burgerMenuStyle = { display: burgerMenuDisplay, stroke: mode === 'light' ? 'black' : 'white' };

        // dosen't dispay header's btns (login & sing up)  on mobile
        const navButtonDisplay = useMedia(['(min-width: 768px)', '(min-width: 320px)'], ['inline-block', 'none']);
        const navButtonStyle = { display: navButtonDisplay };

        // hover effect on theme icons
        const moonStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };
        const sunStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };

        // display burger menu on toggleBruger
        const navMobileStyle = { height: !toggleBurger ? '0' : 'auto' };

        return (
                <HeaderStyled
                        as={motion.header}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={pageTransition}
                        viewport={{ once: true }}
                >
                        <Container>
                                <Wrapper>
                                        <LeftNav />
                                        <RightNav>
                                                {/* change theme icon style */}
                                                {mode === 'light' ? (
                                                        <FiMoon
                                                                style={moonStyle}
                                                                size={24}
                                                                onClick={toggleTheme}
                                                                type="button"
                                                                onMouseEnter={() => setFill('var(--primary-600)')}
                                                                onMouseLeave={() => setFill('none')}
                                                        />
                                                ) : (
                                                        <FiSun
                                                                style={sunStyle}
                                                                size={24}
                                                                onClick={toggleTheme}
                                                                type="button"
                                                                onMouseEnter={() => setFill('var(--primary-600)')}
                                                                onMouseLeave={() => setFill('none')}
                                                        />
                                                )}

                                                {/* Sing In & Sign Up section */}
                                                {!currentUser && (
                                                        <Link to="/login">
                                                                <BtnTerGrey style={navButtonStyle} type="button">
                                                                        Log In
                                                                </BtnTerGrey>
                                                        </Link>
                                                )}

                                                {currentUser ? (
                                                        <BtnPrimary
                                                                onClick={logout}
                                                                style={navButtonStyle}
                                                                type="button"
                                                        >
                                                                Log Out
                                                        </BtnPrimary>
                                                ) : (
                                                        <Link to="/signup">
                                                                <BtnPrimary style={navButtonStyle} type="button">
                                                                        Sign Up
                                                                </BtnPrimary>
                                                        </Link>
                                                )}

                                                {/* Burger Menu on mobile */}
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
                                {toggleBurger && (
                                        <NavMobile handleToggleBurger={handleToggleBurger} navStyle={navMobileStyle} />
                                )}
                        </Container>
                </HeaderStyled>
        );
};

export default Header;
