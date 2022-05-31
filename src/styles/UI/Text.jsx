import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubHeading = styled.h2`
        font-size: var(--text-md);
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }) => theme.text.subheading};
        line-height: var(--text-lh-md);
`;

export const SubHeadingTextMd = styled(SubHeading)`
        font-weight: var(--fw-normal);
        color: var(--gray-500);
        margin: 0;
`;

export const Heading = styled.h1`
        font-size: var(--display-sm);
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }) => theme.fontColorBase};
        line-height: var(--display-sm);
        letter-spacing: var(--ls);
`;

export const HeadingCTA = styled(Heading)`
        margin: 0;

        font-size: var(--display-sm);
        font-weight: var(--fw-semi-bold);
        line-height: var(--display-sm);
        letter-spacing: normal;

        @media (min-width: 1024px) {
                max-width: 576px;
                font-size: var(--display-lg);
                line-height: var(--display-lg);
                letter-spacing: var(--ls);
        }
`;

export const HeadingTextLg = styled(Heading)`
        font-size: var(--text-lg);
        line-height: var(--text-lh-lg);
        font-weight: var(--fw-medium);
        letter-spacing: normal;
        margin: 0;
`;

export const HeadingBase = styled(Heading)`
        font-size: var(--display-xs);
        line-height: var(--display-xs);
        letter-spacing: normal;
`;

export const SupportText = styled.p`
        color: ${({ theme }) => theme.textBase};
        font-size: var(--text-lg);
        line-height: var(--text-lg);
        font-weight: var(--fw-normal);

        @media (min-width: 1024px) {
                font-size: var(--text-xl);
                line-height: var(--text-xl);
        }
`;

export const SupportTextBase = styled.p`
        margin: 0;
        font-size: var(--text-md);
        font-weight: var(--fw-normal);
        line-height: var(--text-lh-md);
        color: ${({ theme }) => theme.text.headingSm};
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

export const HeaderPromo = styled(Heading)`
        letter-spacing: normal;
        color: ${({ theme }) => theme.text.headingOnColor};
        font-size: var(--display-sm);
        line-height: var(--display-sm);
`;

export const SupportTextColor = styled(SupportText)`
        color: ${({ theme }) => theme.text.supportOnColor};
`;

export const TextErrorSm = styled.p`
        font-size: var(--text-sm);
        font-weight: var(--fw-normal);
        line-height: var(--text-lh-sm);
        color: var(--error-500);
`;

export const TextNormalSm = styled.p`
        font-size: var(--text-sm);
        font-weight: var(--fw-normal);
        line-height: var(--text-lh-sm);
        color: ${({ theme }) => theme.textBase};
`;

// ======== LINKS =============

export const LinkSmMd = styled(Link)`
        text-decoration: none;
        color: ${({ theme }) => theme.text.supportOnColor};
        font-size: var(--text-sm);
        line-height: var(--text-lg-sm);
        font-weight: var(--fw-medium);
`;

// ====== NEW-HEADINGS ========

/* Display sm/Semibold  Gray/900 */
export const HeadingSmSbBase = styled.h3`
        margin: 0;
        font-size: var(--display-sm);
        font-weight: var(--fw-semi-bold);
        line-height: var(--display-sm);
        letter-spacing: var(--ls);
        color: ${({ theme }) => theme.text.fontColorBase};
`;

// ====== NEW-SUB-HEADINGS ========

/* Text md/Normal Gray/500 */
export const SubHeadTextMdNorm = styled.h4`
        margin: 0;
        font-size: var(--text-md);
        font-weight: var(--fw-semi-normal);
        line-height: var(--text-lh-md);
        letter-spacing: normal;
        color: ${({ theme }) => theme.textBase};
`;
