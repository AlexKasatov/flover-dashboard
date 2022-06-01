import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { Wrapper, LoginBlock, LoginText, LoginForm, LoginBtn, LoginIcon, InputField, BtnWrapper } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';
import { useToggle } from '../../hooks/useToggle';

const SignUp = () => {
        const [isVisible, setIsVisible] = useToggle();
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

        // error styling for inputs
        // const errorUser = { border: errors?.userName ? '1px solid red' : '1px var(--gray-300) solid' };
        // const errorPassword = { border: errors?.password ? '1px solid red' : '1px var(--gray-300) solid' };

        const toggleEye = () => {
                setIsVisible((prev) => !prev);
        };

        return (
                <Wrapper>
                        <Container>
                                <LoginBlock>
                                        <LoginText>
                                                <h1>🔐</h1>
                                                <HeadingSmSbBase>Create an account</HeadingSmSbBase>
                                                <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                        Start your 30-day free trial.
                                                </SubHeadTextMdNorm>
                                        </LoginText>
                                </LoginBlock>
                                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="userName">User Name</label>
                                        <InputField>
                                                <input
                                                        // style={errorUser}
                                                        placeholder="Enter your user name"
                                                        {...register('userName', {
                                                                required: 'User name is required',
                                                                pattern: {
                                                                        value: /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                                                        message: 'User name must be between 4 and 20 characters long, and can only contain letters, numbers, and the underscore',
                                                                },
                                                        })}
                                                />
                                        </InputField>

                                        <div>
                                                {errors?.userName && (
                                                        <TextErrorSm>
                                                                {errors?.userName?.message ||
                                                                        'Hm... something went wrong'}
                                                        </TextErrorSm>
                                                )}
                                        </div>

                                        <label htmlFor="password">Password</label>
                                        <InputField>
                                                <input
                                                        // style={errorPassword}
                                                        type="password"
                                                        placeholder="••••••••"
                                                        {...register('password', {
                                                                required: 'Password is required',
                                                                pattern: {
                                                                        value: /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
                                                                        message: 'A password containing at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and have a length of at least of 10 characters',
                                                                },
                                                        })}
                                                />
                                                <i>
                                                        {isVisible ? (
                                                                <FiEye title="show pass" onClick={toggleEye} />
                                                        ) : (
                                                                <FiEyeOff onClick={toggleEye} />
                                                        )}
                                                </i>
                                        </InputField>

                                        <div>
                                                {errors?.password && (
                                                        <TextErrorSm>
                                                                {errors?.password?.message ||
                                                                        'Hm... something went wrong'}
                                                        </TextErrorSm>
                                                )}
                                        </div>
                                </LoginForm>
                                <BtnWrapper>
                                        <LoginBtn type="submit">Sign In</LoginBtn>
                                        <LoginIcon type="button">
                                                <img src={googleIcon} alt="google-icon" /> Sign in with Google
                                        </LoginIcon>
                                </BtnWrapper>
                                <div>
                                        <TextNormalSm>Don’t have an account?</TextNormalSm>

                                        <LinkSmMd to="/signup">Sign Up</LinkSmMd>
                                </div>
                        </Container>
                </Wrapper>
        );
};

export default SignUp;
