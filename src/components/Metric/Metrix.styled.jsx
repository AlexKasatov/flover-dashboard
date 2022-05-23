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
        flex-flow: row-reverse nowrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 3rem;
`;

export const MetricItemStyled = styled.li`
        &:nth-child(2n) {
                padding: 0 3rem;
                border-left: 1px solid var(--gray-200);
                border-right: 1px solid var(--gray-200);
        }
`;
