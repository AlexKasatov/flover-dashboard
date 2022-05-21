import styled from 'styled-components';

export const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        @media (min-width: 1024px) {
                flex-flow: row nowrap;
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
