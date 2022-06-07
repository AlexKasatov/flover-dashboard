/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { LoginText, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';
import { SignUpForm, SignUpBlock, InputBlock, ErrorBlock, Wrapper, TextSeparator } from './SignUp.styled';
import { useToggle } from '../../hooks/useToggle';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
        const [isVisible, setIsVisible] = useToggle();
        const { setCurentUser } = useAuth();

        const {
                register,
                formState: { errors },
                handleSubmit,
                reset,
        } = useForm({ mode: 'onBlur' });

        const onSubmit = (data) => {
                console.log(JSON.stringify(data));
                setCurentUser(data);
                reset();
        };
        const toggleVisible = () => {
                setIsVisible((prev) => !prev);
        };

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        //  === Error Styling ===

        const errorEmail = errors?.email && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };
        const errorPasword = errors?.password && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };

        return (
                <Wrapper>
                        <Container>
                                <SignUpBlock>
                                        <LoginText>
                                                <h1>🔐</h1>
                                                <HeadingSmSbBase>Log in to your account</HeadingSmSbBase>
                                                <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                        Welcome back! Please enter your details.
                                                </SubHeadTextMdNorm>
                                        </LoginText>

                                        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                                                {/* EMAIL */}
                                                <label htmlFor="email">E-mail</label>
                                                <InputBlock style={errorEmail}>
                                                        <input
                                                                placeholder="Enter your e-mail"
                                                                {...register('email', {
                                                                        required: 'User name is required',
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
                                                </ErrorBlock>

                                                {/* PASSWORD */}
                                                <label htmlFor="password">Password</label>
                                                <InputBlock style={errorPasword}>
                                                        <input
                                                                type={isVisible ? 'text' : 'password'}
                                                                placeholder="••••••••"
                                                                {...register('password', {
                                                                        required: 'Password is required',
                                                                })}
                                                        />

                                                        <i>
                                                                {isVisible ? (
                                                                        <FiEyeOff onClick={toggleVisible} />
                                                                ) : (
                                                                        <FiEye onClick={toggleVisible} />
                                                                )}
                                                        </i>
                                                </InputBlock>
                                                {/* ERROR MESSAGE */}
                                                <ErrorBlock>
                                                        {errors?.password && (
                                                                <TextErrorSm>
                                                                        {errors?.password?.message ||
                                                                                'Hm... something went wrong'}
                                                                </TextErrorSm>
                                                        )}
                                                </ErrorBlock>

                                                {/* BUTTONS */}
                                                <LoginBtn type="submit">Sign In</LoginBtn>

                                                <LoginIcon type="button">
                                                        <img src={googleIcon} alt="google-icon" /> Sign in with Google
                                                </LoginIcon>

                                                <TextSeparator>
                                                        <TextNormalSm>Don’t have an account?</TextNormalSm>

                                                        <LinkSmMd to="/signup">Sign Up</LinkSmMd>
                                                </TextSeparator>
                                        </SignUpForm>
                                </SignUpBlock>
                        </Container>
                </Wrapper>
        );
};

export default Login;
