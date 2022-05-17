import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useMode } from '../../hooks/useMode';
import { HeaderStyled, Logo, Wrapper, LeftNav, LinkNav, RightNav } from './Header.styled';
import { Container } from '../../styles/Container';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';

const Header = () => {
        const { toggleTheme, mode } = useMode();
        const [fill, setFill] = useState('none');

        const moonStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };
        const sunStyle = { color: 'var(--primary-600)', cursor: 'pointer', fill };

        return (
                <HeaderStyled>
                        <Container>
                                <Wrapper>
                                        <LeftNav>
                                                <Logo>Flover</Logo>

                                                <ul>
                                                        <li>
                                                                <LinkNav to="#!">Home</LinkNav>
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Products</LinkNav>
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Resources</LinkNav>
                                                        </li>
                                                        <li>
                                                                <LinkNav to="#!">Pricing</LinkNav>
                                                        </li>
                                                </ul>
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
                                        </RightNav>
                                </Wrapper>
                        </Container>
                </HeaderStyled>
        );
};

export default Header;
