import React from 'react';
import { useMode } from '../../hooks/useMode';
import { HeaderStyled, Logo, Wrapper, LeftNav, LinkNav } from './Header.styled';
import { Container } from '../../styles/Container';

const Header = () => {
        const { toggleTheme, mode } = useMode();
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

                                        <div>
                                                <button type="button">Log In</button>
                                                <button type="button">Sign Up</button>
                                                <button onClick={toggleTheme} type="button">
                                                        {mode}
                                                </button>
                                        </div>
                                </Wrapper>
                        </Container>
                </HeaderStyled>
        );
};

export default Header;
