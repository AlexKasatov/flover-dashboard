import styled from 'styled-components';
import { BtnPrimary, BtnTerGrey } from '../../styles/UI/ButtonCTA';

export const TrialWrapper = styled.div`
        margin: 6rem auto 0 auto;
`;

export const TrialFrame = styled.div`
        padding: 2.5rem 1.5rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        min-height: 212px;
        min-width: 343px;
        width: 100%;
        height: 100%;
        background-color: var(--primary-50);
        border-radius: var(--radii-1);

        @media (min-width: 768px) {
                padding: 4rem;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-start;
                max-width: 1216px;
                max-height: 343px;
        }
`;

export const TextFrame = styled.section`
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
`;

export const ButtonsFrame = styled.div`
        display: flex;
        gap: 0.5rem;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) {
                gap: 0.8rem;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
        }
`;

export const BtnActive = styled(BtnPrimary)`
        min-width: 295px;
        width: 100%;

        @media (min-width: 768px) {
                min-width: 128px;
                width: 100%;
        }
`;

export const BtnMore = styled(BtnTerGrey)`
        min-width: 295px;
        width: 100%;
        border: 1px solid var(--gray-300);
        background-color: var(--white);

        &:focus {
                color: var(--gray-700);
        }

        &:hover {
                border: 1px solid var(--gray-300);
                background-color: var(--gray-50);
                color: var(--gray-800);
        }

        @media (min-width: 768px) {
                min-width: 128px;
                width: 100%;
        }
`;
