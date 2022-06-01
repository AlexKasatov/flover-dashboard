import styled from 'styled-components';
import { BtnMore } from '../../components/FreeTrial/FreeTrial.styled';
import { BtnMain } from '../../components/Integration/Integration.styled';

export const Wrapper = styled.section`
        margin: 5rem auto;
        height: 100vh;
`;

export const BtnWrapper = styled.div`
        display: flex;
        flex-direction: column nowrap;
        justify-content: center;
        align-items: center;
`;

export const LoginBlock = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
`;

export const LoginText = styled.div`
        text-align: center;
`;

export const LoginForm = styled.form`
        max-height: 500px;
        position: relative;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;

        label {
                color: ${({ theme }) => theme.fontColorBase};

                font-size: var(--text-sm);
                line-height: var(--text-lh-sm);
                font-family: var(--ff);
                font-weight: var(--fw-medium);
        }

        input {
                color: var(--gray-500);
                font-size: var(--text-md);
                line-height: var(--text-lh-md);
                font-family: var(--ff);
                font-weight: var(--fw-normal);
                margin-top: 0.375rem;
                margin-bottom: 1.5rem;
                min-width: 343px;
                min-height: 44px;
                display: inline-block;

                background-color: transparent;
                padding: 0.6rem 0.8rem;
                border: hidden;
                outline: none;
        }

        input::placeholder {
                color: var(--gray-500);
                font-size: var(--text-md);
                line-height: var(--text-lh-md);
                font-family: var(--ff);
                font-weight: var(--fw-normal);
        }

        div {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: space-between;
                gap: 0.5rem;
        }

        i {
                color: var(--gray-500);
                margin-right: 0.5rem;
                cursor: pointer;
                vertical-align: middle;
                padding-right: 0.5rem;
                padding-bottom: 0.6rem;

                &:hover {
                        color: var(--gray-800);
                }
        }
`;
export const InputField = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        border: 1px var(--gray-300) solid;
        border-radius: var(--radii);
        box-shadow: var(--shadow-xs);
        max-height: 3.5rem;
        min-width: 400px;
        margin-top: 0.375rem;
        margin-bottom: 1.5rem;
`;

export const LoginBtn = styled(BtnMain)`
        margin-top: 1.5rem;
        min-width: 343px;
`;
export const LoginIcon = styled(BtnMore)`
        margin-top: 1rem;
        vertical-align: middle;
        min-width: 343px;
        img {
                vertical-align: middle;
                padding-right: 0.5rem;
        }
`;
