/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { LoginText, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';
import { SignUpForm, SignUpBlock, InputBlock, ErrorBlock, Wrapper, TextSeparator } from './SignUp.styled';
import { useAuth } from '../../context/AuthContext';
import { SpinnerXl } from '../../styles/UI/Spinners';

const ForgotPass = () => {
        const { currentUser, logout, error, responseMessage, isLoading, sendResetEmail } = useAuth();

        const navigate = useNavigate();

        const {
                register,
                formState: { errors },
                handleSubmit,
                reset,
        } = useForm({ mode: 'onBlur' });

        const onSubmit = async (data) => {
                const { email } = data;
                // send password reset link on email
                if (email) await sendResetEmail(email);

                reset();
        };

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        //  === Error Styling ===

        const errorEmail = errors?.email && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };

        return (
                <Wrapper>
                        <Container>
                                <h1>{currentUser?.email}</h1>
                                <h1>{currentUser?.displayName}</h1>
                                <button type="button" onClick={logout}>
                                        LOGOUT
                                </button>

                                {isLoading ? (
                                        <SpinnerXl />
                                ) : (
                                        <SignUpBlock>
                                                <LoginText>
                                                        <h1>🤫</h1>
                                                        <HeadingSmSbBase>Restore Your Password</HeadingSmSbBase>
                                                        <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                                Type your email address
                                                        </SubHeadTextMdNorm>
                                                </LoginText>

                                                <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                                                        {/* EMAIL */}
                                                        <label htmlFor="email">E-mail</label>
                                                        <InputBlock style={errorEmail}>
                                                                <input
                                                                        placeholder="Enter your e-mail"
                                                                        {...register('email', {
                                                                                required: 'Email is required',
                                                                                pattern: {
                                                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                                        message: 'Invalid email address',
                                                                                },
                                                                        })}
                                                                />
                                                        </InputBlock>
                                                        {/* ERROR MESSAGE */}
                                                        <ErrorBlock>
                                                                {errors?.email && (
                                                                        <TextErrorSm>
                                                                                {errors?.email?.message ||
                                                                                        'Hm... something went wrong'}
                                                                        </TextErrorSm>
                                                                )}

                                                                {error && (
                                                                        <TextErrorSm>
                                                                                {errors?.message ||
                                                                                        'Hm... something went wrong'}
                                                                        </TextErrorSm>
                                                                )}
                                                                {responseMessage && (
                                                                        <TextNormalSm>{responseMessage}</TextNormalSm>
                                                                )}
                                                        </ErrorBlock>

                                                        {/* BUTTONS */}
                                                        <LoginBtn type="submit">Reset Password</LoginBtn>

                                                        {/* SIGN UP WITH GOOGLE OPEN POPUP */}
                                                        {/* <LoginIcon type="button" onClick={signUpWithGoogle}>
                                                                <img src={googleIcon} alt="google-icon" /> Sign up with
                                                                Google
                                                        </LoginIcon> */}

                                                        <TextSeparator>
                                                                <TextNormalSm>Create new account?</TextNormalSm>

                                                                <LinkSmMd to="/signup">Sign Up</LinkSmMd>
                                                        </TextSeparator>
                                                </SignUpForm>
                                        </SignUpBlock>
                                )}
                        </Container>
                </Wrapper>
        );
};

export default ForgotPass;
