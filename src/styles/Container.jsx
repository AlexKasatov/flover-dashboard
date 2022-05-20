import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
        min-width: 375px;
        margin: 0 auto;
        padding: 0 1rem;

        @media (min-width: 1024px) {
                width: 100%;
                max-width: var(--container-xl);
                margin: 0 auto;
                padding: 0 3rem;
        }
`;
