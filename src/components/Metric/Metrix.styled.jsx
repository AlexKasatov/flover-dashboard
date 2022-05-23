import styled from 'styled-components';

export const Wrapper = styled.div`
        margin: 0 auto;
        padding: 0 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const MetricListStyled = styled.ul`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0 auto;

        @media (min-width: 1024px) {
                flex-flow: row-reverse nowrap;
                gap: 3rem;
        }
`;

export const MetricItemStyled = styled.li`
        @media (min-width: 1024px) {
                &:nth-child(2n) {
                        padding: 0 3rem;
                        border-left: 1px solid var(--gray-200);
                        border-right: 1px solid var(--gray-200);
                }
        }
        h2,
        p {
                margin: 1rem 0;
        }
`;
