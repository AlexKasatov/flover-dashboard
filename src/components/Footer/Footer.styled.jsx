import styled from 'styled-components';
import { LinkNav } from '../Header/Header.styled';
import { SupportTextBase } from '../../styles/UI/Text';

export const FooterStyled = styled.footer`
        margin: 0 auto;
        background-color: var(--gray-800);
`;

export const FooterSection = styled.section`
        max-width: 300px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
`;

export const FooterLink = styled(LinkNav)``;

export const FooterListStyled = styled.li``;

export const FooterContent = styled.section`
        padding: 4rem 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: flex-start;
        gap: 1rem;
`;

export const FooterRow = styled.div`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
`;

export const LogoFooter = styled.div`
        img {
                svg {
                        fill: var(--gray-100);
                }
        }
`;

export const CopyText = styled(SupportTextBase)`
        margin: 0;
        color: var(--gray-400);
`;

export const CopyStyled = styled.section`
        padding: 3rem 0;
        margin: 0 auto;
        background-color: var(--gray-900);
`;

export const CopyBlock = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
`;

export const IconItem = styled.li`
        svg {
                cursor: pointer;
                fill: var(--gray-100);
                stroke: var(--gray-900);
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
