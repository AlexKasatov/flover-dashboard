/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { LoginText, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';
import { SignUpForm, SignUpBlock, InputBlock, ErrorBlock, Wrapper, TextSeparator } from './SignUp.styled';
import { useToggle } from '../../hooks/useToggle';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
        const [isVisible, setIsVisible] = useToggle();
        const { currentUser, logout, singup } = useAuth();
        const navigate = useNavigate();

        const {
                register,
                formState: { errors },
                handleSubmit,
                reset,
        } = useForm({ mode: 'onBlur' });

        const onSubmit = (data) => {
                const { email, password } = data;

                if (data) {
                        // sing up user
                        singup(email, password);
                }

                reset();

                // redirect
                // navigate('/dashboard');
        };
        const toggleVisible = () => {
                setIsVisible((prev) => !prev);
        };

        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        //  === Error Styling ===
        const errorUser = errors?.userName && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };
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
                                <h1>{currentUser?.email}</h1>
                                <h1>{currentUser?.displayName}</h1>

                                <button type="button" onClick={logout}>
                                        LOGOUT
                                </button>
                                <SignUpBlock>
                                        <LoginText>
                                                <h1>👋</h1>
                                                <HeadingSmSbBase>Create an account</HeadingSmSbBase>
                                                <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                        Start your 30-day free trial.
                                                </SubHeadTextMdNorm>
                                        </LoginText>

                                        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                                                {/* USERNAME */}
                                                <label htmlFor="userName">Name</label>
                                                <InputBlock style={errorUser}>
                                                        <input
                                                                placeholder="Enter your user name"
                                                                {...register('userName', {
                                                                        required: 'User name is required',
                                                                        pattern: {
                                                                                value: /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                                                                message: 'User name must be between 4 and 20 characters long, and can only contain letters, numbers, and the underscore',
                                                                        },
                                                                })}
                                                        />
                                                </InputBlock>
                                                {/* ERROR MESSAGE */}
                                                <ErrorBlock>
                                                        {errors?.userName && (
                                                                <TextErrorSm>
                                                                        {errors?.userName?.message ||
                                                                                'Hm... something went wrong'}
                                                                </TextErrorSm>
                                                        )}
                                                </ErrorBlock>

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
                                                                        pattern: {
                                                                                value: /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
                                                                                message: 'A password containing at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and have a length of at least of 10',
                                                                        },
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
                                                <LoginBtn type="submit">Sign Up</LoginBtn>

                                                <LoginIcon type="button">
                                                        <img src={googleIcon} alt="google-icon" /> Sign up with Google
                                                </LoginIcon>

                                                <TextSeparator>
                                                        <TextNormalSm>Have an account?</TextNormalSm>

                                                        <LinkSmMd to="/login">Log In</LinkSmMd>
                                                </TextSeparator>
                                        </SignUpForm>
                                </SignUpBlock>
                        </Container>
                </Wrapper>
        );
};

export default SignUp;
