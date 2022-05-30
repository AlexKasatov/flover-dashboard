import styled from 'styled-components';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';
import { LinkNav } from './Header.styled';

export const Wrapper = styled.div`
        /* display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        padding: 0 16px; */
        /* ====== review this styles ===== */
`;

export const MobileNav = styled.nav`
        box-shadow: var(--shadow-lg);
        border-radius: var(--radii);
        max-width: var(--container-sm);

        top: 0;
        display: absolute;
        transition: all 0.3s ease-in-out;

        @media (min-width: 1024px) {
                display: none;
        }
`;

export const NavListFlex = styled.ul`
        margin: 0 auto !important;
        padding: 3rem 2rem;
        /* ===THIS STYLES WORKS==== */
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;

        border-bottom: 2px solid var(--gray-50);
        * {
                padding-left: 0 !important;
        }
`;

export const NavListItem = styled.li``;

export const NavListGrid = styled.ul`
        max-height: 100px;
        display: flex;
        margin: 1rem auto !important;

        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        * {
                padding-left: 0 !important;
        }
`;

export const NavBtnList = styled.div`
        display: flex;
        height: 50vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        @media (min-height: 812px) {
                height: 80vh;
        }
`;

export const BtnLogin = styled(BtnTerGrey)`
        min-width: 343px;
`;

export const BtnSignup = styled(BtnPrimary)`
        min-width: 343px;
`;

export const LinkNavMob = styled(LinkNav)`
        padding: 0;
        color: ${({ theme }) => theme.fontColorBase};
`;

export const NavGridItem = styled.li`
        line-height: 1.5rem;
`;
