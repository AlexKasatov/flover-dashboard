import styled from 'styled-components';

export const SubHeading = styled.h2`
        font-size: var(--text-md);
        font-weight: var(--fw-semi-bold);
        color: var(--primary-700);
        line-height: var(--text-lh-md);
`;

export const Heading = styled.h1`
        font-size: var(--display-sm);
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }) => theme.fontColorBase};
        line-height: var(--display-sm);
        letter-spacing: var(--ls);
`;

export const SupportText = styled.p`
        font-size: var(--text-xl);
        font-weight: var(--fw-normal);
        color: ${({ theme }) => theme.textBase};
        line-height: var(--text-xl);
`;
