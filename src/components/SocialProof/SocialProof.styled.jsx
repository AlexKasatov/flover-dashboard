import styled from 'styled-components';

export const Wrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 3;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 0 auto;

        @media (min-width: 1024px) {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 2rem;
        }
`;

export const ProofTitle = styled.span`
        font-size: var(--text-md);
        font-weight: var(--fw-medium);
        line-height: var(--text-lh-md);
        color: ${({ theme }) => theme.textBase};
        text-align: center;
        margin: 0 auto;
`;

export const BlockWrapper = styled.section`
        display: flex;
        flex-direction: row nowrap;
        justify-content: center;
        align-items: center;
        margin: 2rem auto;
`;
