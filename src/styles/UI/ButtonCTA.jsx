import styled from 'styled-components';

export const ButtonBase = styled.button`
        cursor: pointer;
        border: 1px solid Transparent;
        max-width: 124px;
        padding: 10px 18px;
        border-radius: var(--radii);
        line-height: var(--text-lh-md);
        font-size: var(--text-md);
`;

export const BtnTerGrey = styled(ButtonBase)`
        background-color: Transparent;
        color: ${({ theme }) => theme.textBase};

        &:focus {
                color: var(--gray-500);
        }

        &:hover {
                color: var(--gray-600);
                background-color: var(--gray-50);
                border: 1px solid var(--gray-50);
        }

        &:disabled {
                color: var(--gray-300);
        }
`;

export const BtnPrimary = styled(ButtonBase)`
        color: var(--white);
        border: 1px solid var(--primary-600);
        background-color: var(--primary-600);
        box-shadow: var(--shadow-sx);

        &:focus {
                outline: 4px solid var(--primary-100);
        }

        &:hover {
                background-color: var(--primary-700);
        }

        &:disabled {
                background-color: var(--primary-200);
                border: 1px solid transparent;
        }
`;
