import styled from 'styled-components';

export const SectionFeature = styled.section`
        margin: 6rem 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (min-width: 1280px) {
                margin: 6rem 0 0 12rem;
                display: grid;
                justify-content: center;
                align-items: center;
                grid-template-columns: 1fr 3fr;
                grid-template-rows: 1fr;
                grid-column-gap: 3rem;
                grid-row-gap: 0px;
        }
`;

export const AcrticleFeautre = styled.article`
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 560px;
`;
