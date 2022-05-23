import styled from 'styled-components';

export const SectionFeature = styled.section`
        margin: 6rem auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        white-space: wrap;

        @media (min-width: 1280px) {
                margin-left: 6rem;
                /* margin: 6rem 0 0 12rem; */
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: row nowrap;
                gap: 3rem;
                &:nth-child(2n) {
                        flex-flow: row-reverse nowrap;
                }
        }
`;

export const AcrticleFeautre = styled.article`
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        justify-content: center;
        white-space: wrap;

        @media (min-width: 1280px) {
                flex-flow: column wrap;
                align-items: flex-start;
                justify-content: flex-start;
                min-width: 560px;
        }
`;
