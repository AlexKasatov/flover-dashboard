import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { Wrapper, LoginBlock, LoginText, LoginForm, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';

const LogIn = () => {
        const {
                register,
                formState: { errors, isValid },
                handleSubmit,
                reset,
        } = useForm({ mode: 'onBlur' });

        const onSubmit = (data) => {
                console.log(JSON.stringify(data));
                reset();
        };

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        return (
                <Wrapper>
                        <Container>
                                <LoginBlock>
                                        <LoginText>
                                                <h1>🔐</h1>
                                                <HeadingSmSbBase>Log in to your account</HeadingSmSbBase>
                                                <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                        Welcome back! Please enter your details.
                                                </SubHeadTextMdNorm>
                                        </LoginText>

                                        <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                                <label htmlFor="email">
                                                        Email
                                                        <input
                                                                type="email"
                                                                id="email"
                                                                placeholder="Enter your email"
                                                                {...register('email', {
                                                                        required: 'Email is required',
                                                                        pattern: {
                                                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                                message: 'Invalid email address',
                                                                        },
                                                                })}
                                                        />
                                                </label>
                                                {errors?.email && (
                                                        <TextErrorSm>
                                                                {errors?.email?.message || 'Hm... something went wrong'}
                                                        </TextErrorSm>
                                                )}
                                                <label htmlFor="password">
                                                        Password
                                                        <input
                                                                type="password"
                                                                id="password"
                                                                placeholder="••••••••"
                                                                {...register('password', {
                                                                        required: 'Password is required',
                                                                })}
                                                        />
                                                </label>
                                                {errors?.password && (
                                                        <TextErrorSm>
                                                                {errors?.password?.message ||
                                                                        'Hm... something went wrong'}
                                                        </TextErrorSm>
                                                )}
                                                <LoginBtn type="submit">Sign In</LoginBtn>

                                                <LoginIcon type="button">
                                                        <img src={googleIcon} alt="google-icon" /> Sign in with Google
                                                </LoginIcon>

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
