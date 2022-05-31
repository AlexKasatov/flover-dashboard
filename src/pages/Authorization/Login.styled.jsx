import styled from 'styled-components';
import { BtnMain } from '../../components/Integration/Integration.styled';

export const Wrapper = styled.section`
        margin: 5rem auto;
        height: 100vh;
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
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;

        label {
                color: ${({ theme }) => theme.fontColorBase};
                display: block;
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
                display: block;
                height: 100%;
                padding: 0.6rem 0.8rem;
                border: 1px var(--gray-300) solid;
                border-radius: var(--radii);
                box-shadow: var(--shadow-xs);
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
`;

export const LoginBtn = styled(BtnMain)`
        min-width: 343px;
`;
