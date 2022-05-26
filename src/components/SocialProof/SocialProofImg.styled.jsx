import styled from 'styled-components';

export const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        grid-template-rows: 3;
        justify-content: start;
        align-items: center;
        margin: 0 auto;
        gap: 0;
        padding: 0.2rem;

        img {
                transform: scale(0.8);
        }

        @media (min-width: 1024px) {
                max-width: 100%;
                /* gap: 1rem; */
                transform: scale(0.9);
        }
`;

export const LogoTypeInverted = styled.img`
        filter: ${({ theme }) => theme.inverted};
`;
