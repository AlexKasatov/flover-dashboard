import styled from 'styled-components';
import { BtnPrimary, ButtonBase } from '../../styles/UI/ButtonCTA';

export const HeroBlock = styled.header`
        margin: 4rem 0;
`;

export const HeroSection = styled.section`
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;

        div {
                text-align: center;
        }
`;

export const HeadingHero = styled.h1`
        color: ${({ theme }) => theme.fontColorBase};
        font-size: var(--display-md);
        font-weight: var(--fw-semi-bold);
        line-height: var(--display-lg);
        letter-spacing: var(--ls);

        /* // media queries desktop */
        @media (min-width: 1024px) {
                font-size: var(--display-xl);
                line-height: var(--display-xl);
        }
`;

export const SubHeadingHero = styled.h2`
        color: ${({ theme }) => theme.textBase};
        font-size: var(--text-lg);
        font-weight: var(--fw-normal);
        line-height: var(--text-lh-lg);

        /* // media queries desktop */
        @media (min-width: 1024px) {
                font-size: var(--text-xl);
                line-height: var(--text-lh-xl);
        }
`;

export const ButtonWrapper = styled.div`
        /* // media queries desktop */
        @media (min-width: 1024px) {
                display: grid;
                grid-template-columns: repeat(2, auto);
                gap: 1rem;
                justify-content: center;

                margin: 0 auto;
        }
`;

export const Btn2xlpmr = styled(BtnPrimary)`
        box-shadow: var(--shadow-xs);
        width: 100%;
        max-width: 100vw;
        height: 48px;
        margin-top: 0.75rem;

        @media (min-width: 1024px) {
                max-width: 121px;
                margin-top: 0;
        }
`;

export const Btn2xlbase = styled(ButtonBase)`
        box-shadow: var(--shadow-xs);
        background-color: var(--white);
        cursor: pointer;
        border: 1px solid var(--gray-300);
        color: var(--gray-700);
        width: 100%;
        max-width: 100vw;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:focus {
                color: var(--gray-700);
        }

        &:hover {
                background-color: var(--gray-50);
                color: var(--gray-800);
        }

        svg {
                cursor: pointer;
                stroke: var(--gray-700);
        }

        @media (min-width: 1024px) {
                max-width: 121px;
        }
`;

export const HeroImg = styled.img`
        margin-top: 2rem;
        width: 100%;
        min-width: 336.6px;

        @media (min-width: 1024px) {
                min-width: 758px;
        }
`;
