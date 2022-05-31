import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../styles/Container';
import { TextErrorSm, TextNormalSm, LinkSmMd, HeadingSmSbBase, SubHeadTextMdNorm } from '../../styles/UI/Text';
import { Wrapper, LoginBlock, LoginText, LoginForm, LoginBtn, LoginIcon } from './Login.styled';
import googleIcon from '../../styles/img/auth/google.svg';

const SignUp = () => {
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
                                                <HeadingSmSbBase>Create an account</HeadingSmSbBase>
                                                <SubHeadTextMdNorm style={{ margin: '1rem 0 3rem 0' }}>
                                                        Start your 30-day free trial.
                                                </SubHeadTextMdNorm>
                                        </LoginText>

                                        <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                                <label htmlFor="userName">
                                                        User Name
                                                        <input
                                                                placeholder="Enter your user name"
                                                                {...register('userName', {
                                                                        required: 'User name is required',
                                                                        pattern: {
                                                                                value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                                                                                message: 'User name must be between 8 and 20 characters long, and can only contain letters, numbers, and the underscore',
                                                                        },
                                                                })}
                                                        />
                                                </label>
                                                {errors?.userName && (
                                                        <TextErrorSm>
                                                                {errors?.userName?.message ||
                                                                        'Hm... something went wrong'}
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

export default SignUp;
