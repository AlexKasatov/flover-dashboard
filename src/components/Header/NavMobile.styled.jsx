import styled from 'styled-components';
import { BtnTerGrey, BtnPrimary } from '../../styles/UI/ButtonCTA';
import { LinkNav } from './Header.styled';

export const Wrapper = styled.div`
        padding: 0 16px;
`;

export const MobileNav = styled.nav`
        box-shadow: var(--shadow-lg);
        border-radius: var(--radii);
        max-width: var(--container-sm);
        margin: 30px auto;
        display: sticky;
        transition: all 0.3s ease-in-out;
        height: 100vh;
        @media (min-width: 1024px) {
                display: none;
        }
`;

export const NavListFlex = styled.ul`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 2px solid var(--gray-50);
`;

export const NavListGrid = styled.ul`
        display: grid;
        gap: 5rem;
        grid-template-columns: repeat(2, 1fr);
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
        color: ${({ theme }) => theme.fontColorBase};
`;

export const NavListItem = styled.li`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0.5rem 0;
        height: 2.5rem;
`;

export const NavGridItem = styled.li`
        line-height: 1.5rem;
`;
