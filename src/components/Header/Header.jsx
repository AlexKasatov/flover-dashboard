/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { FiMoon, FiSun, FiChevronDown, FiMenu } from 'react-icons/fi';
import symbolIcon from '../../styles/img/symbol.svg';
import logoTypeIcon from '../../styles/img/logotype.svg';
import { useMode } from '../../hooks/useMode';
import { HeaderStyled, Symbol, LogoType, Logo, Wrapper, LeftNav, LinkNav, RightNav, NavLink } from './Header.styled';
import { Container } from '../../styles/Container';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';
import { useMedia } from '../../hooks/useMedia';

const Header = () => {
        const { toggleTheme, mode } = useMode();
        // fill control hover effect on theme icons
        const [fill, setFill] = useState('none');
        const [dropDown, setDropDown] = useState(false);

        const burgerMenuDisplay = useMedia(['(min-width: 1024px)'], ['none']);
        const burgerMenuStyle = { display: burgerMenuDisplay };

        const moonStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };
        const sunStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };

        return (
                <HeaderStyled>
                        <Container>
                                <Wrapper>
                                        <LeftNav>
                                                <Logo>
                                                        <Symbol src={symbolIcon} alt="symbol" />

                                                        <LogoType src={logoTypeIcon} alt="logotype" />
                                                </Logo>
                                                <NavLink>
                                                        <li>
                                                                <LinkNav to="#!">Home</LinkNav>
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Products</LinkNav>
                                                                <FiChevronDown />
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Resources</LinkNav>
                                                                <FiChevronDown />
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Pricing</LinkNav>
                                                        </li>
                                                </NavLink>
                                        </LeftNav>

                                        <RightNav>
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
                                                <BtnTerGrey type="button">Log In</BtnTerGrey>
                                                <BtnPrimary type="button">Sign Up</BtnPrimary>
                                                <FiMenu style={burgerMenuStyle} />
                                        </RightNav>
                                </Wrapper>
                        </Container>
                </HeaderStyled>
        );
};

export default Header;
