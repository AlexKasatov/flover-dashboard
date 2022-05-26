import styled from 'styled-components';
import { LinkNav } from '../Header/Header.styled';
import { SupportTextBase } from '../../styles/UI/Text';

export const FooterStyled = styled.footer`
        margin: 0 auto;
        background-color: ${({ theme }) => theme.bgrndSection};
`;

export const FooterSection = styled.section`
        max-width: 300px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;

        /* p {
                margin-bottom: 1rem;
        } */
`;

export const FooterLink = styled(LinkNav)`
        text-decoration: none;
        font-weight: var(--fw-medium);
        color: ${({ theme }) => theme.text.link};

        &:hover {
                color: ${({ theme }) => theme.text.linkHover};
        }
`;

export const FooterListStyled = styled.li`
        padding: 0.5rem 0;
`;

export const FooterContent = styled.section`
        padding: 3rem 0;
        margin: 0 1rem;
        @media (min-width: 1024px) {
                padding: 4rem 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: flex-start;
                gap: 1rem;
        }
`;

export const FooterRow = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
`;

export const LogoFooter = styled.div`
        margin-bottom: 2rem;
        img {
                filter: ${({ theme }) => theme.invertedBack};
                margin-bottom: 1rem;
        }
`;

export const CopyText = styled(SupportTextBase)`
        margin-bottom: 1rem;

        color: var(--gray-400);
        @media (min-width: 1024px) {
                margin: 0;
        }
`;

export const CopyStyled = styled.section`
        border-top: 0.5px solid var(--gray-300);
        padding: 3rem 0;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.bgrndSection};
`;

export const CopyBlock = styled.div`
        margin: 0 1rem;
        display: flex;
        flex-flow: column wrap;
        @media (min-width: 768px) {
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
        }
`;

export const IconItem = styled.li`
        svg {
                cursor: pointer;
                fill: ${({ theme }) => theme.fontColorBase};
                stroke: ${({ theme }) => theme.bgrndSection};
                stroke-width: 1;
        }
`;

export const IconWrapper = styled.ul`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        gap: 1.5rem;
`;
