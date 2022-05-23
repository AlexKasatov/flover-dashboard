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

export const HeadingBase = styled(Heading)`
        font-size: var(--display-xs);
        line-height: var(--display-xs);
        letter-spacing: normal;
`;

export const SupportText = styled.p`
        font-size: var(--text-xl);
        font-weight: var(--fw-normal);
        color: ${({ theme }) => theme.textBase};
        line-height: var(--text-xl);
`;

export const SupportTextBase = styled.p`
        font-size: var(--text-md);
        font-weight: var(--fw-normal);
        line-height: var(--text-md);
        color: ${({ theme }) => theme.textBase};
`;

export const HeadingColor = styled.h2`
        font-size: var(--display-xl);
        font-weight: var(--fw-semi-bold);
        line-height: var(--display-xl);
        letter-spacing: var(--ls);
        color: var(--primary-600);
`;

export const SupportSml = styled.p`
        font-size: var(--text-lg);
        font-weight: var(--fw-medium);
        line-height: var(--text-lh-md);
        color: ${({ theme }) => theme.fontColorBase};
`;
