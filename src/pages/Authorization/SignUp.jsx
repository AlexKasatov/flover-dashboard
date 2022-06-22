/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { LoginText, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';
import { SignUpForm, SignUpBlock, InputBlock, ErrorBlock, Wrapper, TextSeparator } from './SignUp.styled';
import { useToggle } from '../../hooks/useToggle';
import { useAuth } from '../../context/AuthContext';
import { SpinnerXl } from '../../styles/UI/Spinners';
import { pageTransitionSingle } from '../../animation/page';

const SignUp = () => {
        const [isVisible, setIsVisible] = useToggle();
        const [isVisible2, setIsVisible2] = useToggle();
        const { singup, error, isLoading, singUpWithGoogle, currentUser } = useAuth();
        const navigate = useNavigate();
        const inputPassword = useRef();

        const {
                register,
                formState: { errors },
                handleSubmit,
                watch,
                reset,
        } = useForm({ mode: 'onBlur' });

        inputPassword.current = watch('password', '');

        const onSubmit = async (data) => {
                const { email, password } = data;

                // sign up with email and password
                if (email && password) {
                        await singup(email, password);
                }
                reset();
                navigate('/dashboard');
        };

        useEffect(() => {
                if (currentUser) {
                        navigate('/dashboard');
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentUser]);

        const signUpWithGoogle = async () => {
                await singUpWithGoogle();
        };

        const toggleVisible = () => {
                setIsVisible((prev) => !prev);
        };

        const toggleVisible2 = () => {
                setIsVisible2((prev) => !prev);
        };

        //  === Error Styling ===
        const errorEmail = errors?.email && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };

        const errorPasword = errors?.password && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };

        const errorPasswrodRepeat = errors?.passwrodRepeat && {
                marginBottom: '0',
                border: '1px solid var(--error-500)',
        };

        return (
                <Wrapper
                        as={motion.section}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={pageTransitionSingle}
                >
                        <Container>
                                {isLoading ? (
                                        <SpinnerXl />
                                ) : (
                                        <SignUpBlock>
                                                <LoginText>
                                                        <h1>👋</h1>
                                                        <HeadingSmSbBase>Create an account</HeadingSmSbBase>
                                                        <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                                Start your 30-day free trial.
                                                        </SubHeadTextMdNorm>
                                                </LoginText>

                                                <SignUpForm onSubmit={handleSubmit(onSubmit)}>
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
                                                                        autoComplete="on"
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

                                                        {/* REPEAT-PASSWORD */}
                                                        <label htmlFor="passwrodRepeat">Repeat Password</label>
                                                        <InputBlock style={errorPasswrodRepeat}>
                                                                <input
                                                                        type={isVisible2 ? 'text' : 'password'}
                                                                        autoComplete="on"
                                                                        placeholder="••••••••"
                                                                        {...register('passwrodRepeat', {
                                                                                required: 'Password is required',
                                                                                pattern: {
                                                                                        value: /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
                                                                                        message: 'A password containing at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and have a length of at least of 10',
                                                                                },

                                                                                validate: (value) =>
                                                                                        value ===
                                                                                                inputPassword.current ||
                                                                                        'The passwords do not match',
                                                                        })}
                                                                />

                                                                <i>
                                                                        {isVisible2 ? (
                                                                                <FiEyeOff onClick={toggleVisible2} />
                                                                        ) : (
                                                                                <FiEye onClick={toggleVisible2} />
                                                                        )}
                                                                </i>
                                                        </InputBlock>

                                                        {/* ERROR MESSAGE */}
                                                        <ErrorBlock>
                                                                {errors?.passwrodRepeat && (
                                                                        <TextErrorSm>
                                                                                {errors?.passwrodRepeat?.message ||
                                                                                        'Hm... something went wrong'}
                                                                        </TextErrorSm>
                                                                )}
                                                        </ErrorBlock>

                                                        {/* BUTTONS */}
                                                        <LoginBtn type="submit">Sign Up</LoginBtn>

                                                        {/* SIGN UP WITH GOOGLE OPEN POPUP */}
                                                        <LoginIcon type="button" onClick={signUpWithGoogle}>
                                                                <img src={googleIcon} alt="google-icon" /> Sign up with
                                                                Google
                                                        </LoginIcon>

                                                        <TextSeparator>
                                                                <TextNormalSm>Have an account?</TextNormalSm>

                                                                <LinkSmMd to="/login">Log In</LinkSmMd>
                                                        </TextSeparator>
                                                </SignUpForm>
                                        </SignUpBlock>
                                )}
                        </Container>
                </Wrapper>
        );
};

export default SignUp;
