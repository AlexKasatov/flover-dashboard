import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container } from '../../styles/Container';
import {
        HeadingBase,
        HeadingCTA,
        SupportText,
        SupportTextColor,
        TextErrorSm,
        TextNormalSm,
        LinkSmMd,
} from '../../styles/UI/Text';
import { Wrapper, LoginBlock, LoginText, LoginForm } from './Login.styled';
import { BtnActive } from '../../components/FreeTrial/FreeTrial.styled';
import { LinkNav } from '../../components/Header/Header.styled';
import { BtnMain } from '../../components/Integration/Integration.styled';

const LogIn = () => {
        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        return (
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

                                                <BtnMain type="submit">Sign In</BtnMain>
                                                <div>
                                                        <TextNormalSm>Don’t have an account?</TextNormalSm>

                                                        <LinkSmMd to="/signup">Sign Up</LinkSmMd>
                                                </div>
                                        </LoginForm>
                                </LoginBlock>
                        </Container>
                </Wrapper>
        );
};

export default LogIn;
