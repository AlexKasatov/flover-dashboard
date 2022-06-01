import styled from 'styled-components';

export const SignUpForm = styled.form`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-flow: column nowrap;
        label {
                color: ${({ theme }) => theme.fontColorBase};
                display: block;
                font-size: var(--text-sm);
                line-height: var(--text-lh-sm);
                font-family: var(--ff);
                font-weight: var(--fw-medium);
        }
`;

export const SignUpBlock = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
`;

export const InputBlock = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: column nowrap;

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

        input {
                min-width: 343px;
                background-color: transparent;
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
`;
