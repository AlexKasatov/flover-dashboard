import styled from 'styled-components';
import { BtnPrimary, ButtonBase } from '../../styles/UI/ButtonCTA';

export const Btn2xlpmr = styled(BtnPrimary)`
        box-shadow: var(--shadow-xs);
        width: 100%;
        max-width: 100vw;
        height: 48px;
        margin-top: 0.75rem;
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
`;
