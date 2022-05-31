import React from 'react';
import { Container } from '../../styles/Container';
import { Wrapper, LoginBlock, LoginText, LoginForm } from './Login.styled';

const LogIn = () => (
        <Wrapper>
                <Container>
                        <LoginBlock>
                                <LoginText>
                                        <h1>Log In</h1>
                                        <p>Welcome back! Please enter your details.</p>
                                </LoginText>

                                <LoginForm>
                                        <div>
                                                <label htmlFor="email">
                                                        Email
                                                        <input type="email" id="email" />
                                                </label>
                                                <span>error</span>
                                        </div>
                                        <div>
                                                <label htmlFor="password">
                                                        Password
                                                        <input type="password" id="password" />
                                                </label>
                                                <span>error</span>
                                        </div>
                                        <button type="submit">Sign In</button>
                                        <div>
                                                <span>Don’t have an account?</span>
                                                <span>Sign Up</span>
                                        </div>
                                </LoginForm>
                        </LoginBlock>
                </Container>
        </Wrapper>
);

export default LogIn;
