import styled from 'styled-components';

export const Wrapper = styled.section`
        margin: 2rem auto;
        height: 100vh;
`;

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
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        color: var(--gray-500);
        font-size: var(--text-md);
        line-height: var(--text-lh-md);
        font-family: var(--ff);
        font-weight: var(--fw-normal);
        margin-top: 0.375rem;
        margin-bottom: 1.5rem;
        background-color: var(--white);
        width: 100%;
        max-width: 343px;
        min-height: 44px;
        height: 100%;

        padding: 0.6rem 0.8rem;
        border: 1px var(--gray-300) solid;
        border-radius: var(--radii);
        box-shadow: var(--shadow-xs);

        input {
                max-width: 343px;
                width: 100%;
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

        i {
                cursor: pointer;
                color: var(--gray-500);

                &:hover {
                        color: var(--gray-700);
                }
        }
`;

export const ErrorBlock = styled.div`
        margin: 0 auto;
        max-width: 343px;
        text-align: center;
`;

export const TextSeparator = styled.div`
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center !important;
        gap: 0.5rem;
`;
