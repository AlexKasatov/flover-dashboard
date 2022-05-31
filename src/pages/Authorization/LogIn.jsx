import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import {
        HeadingBase,
        HeadingCTA,
        SupportText,
        SupportTextColor,
        TextErrorSm,
        TextNormalSm,
} from '../../styles/UI/Text';
import { Wrapper, LoginBlock, LoginText, LoginForm } from './Login.styled';
import { BtnActive } from '../../components/FreeTrial/FreeTrial.styled';
import { LinkNav } from '../../components/Header/Header.styled';

const LogIn = () => (
        <Wrapper>
                <Container>
                        <LoginBlock>
                                <LoginText>
                                        <h1>🔐</h1>
                                        <HeadingCTA>Log in to your account</HeadingCTA>
                                        <SupportText>Welcome back! Please enter your details.</SupportText>
                                </LoginText>

                                <LoginForm>
                                        <label htmlFor="email">
                                                Email
                                                <input type="email" id="email" placeholder="Enter your email" />
                                        </label>

                                        <TextErrorSm>Error Message</TextErrorSm>

                                        <label htmlFor="password">
                                                Password
                                                <input type="password" id="password" placeholder="••••••••" />
                                        </label>

                                        <TextErrorSm>Error Message</TextErrorSm>

                                        <BtnActive type="submit">Sign In</BtnActive>
                                        <div>
                                                <TextNormalSm>Don’t have an account?</TextNormalSm>
                                                <Link to="/signup">
                                                        <SupportTextColor>Sign Up</SupportTextColor>
                                                </Link>
                                        </div>
                                </LoginForm>
                        </LoginBlock>
                </Container>
        </Wrapper>
);

export default LogIn;
