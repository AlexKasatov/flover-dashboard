import styled from 'styled-components';
import { Heading } from '../../styles/UI/Text';

export const Wrapper = styled.div`
        margin: 3rem auto 0 auto;
`;

export const QuoteSection = styled.section`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

export const AvatarTextStyled = styled.article`
        margin-bottom: 2.5rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
`;

export const HeadingLx = styled(Heading)`
        line-height: normal;
        font-weight: var(--fw-medium);
        color: ${({ theme }) => theme.fontColorBase};

        @media (min-width: 1024px) {
                font-size: var(--display-lg);
                line-height: var(--display-lg);
        }
`;

export const Avatar = styled.img`
        width: 4rem;
        margin: 2rem 0 1rem 0;
`;

export const SliderStyled = styled.div`
        margin: 0 1rem;
        display: flex;
        gap: 5rem;
        align-items: center;
        justify-content: space-between;

        svg {
                cursor: pointer;
                stroke: var(--gray-500);
        }
`;
