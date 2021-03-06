import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
        background-color: ${({ theme }) => theme.backgroundColor};
        position: sticky;
        top: 0;
        z-index: 1;
        height: 100%;
        ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 2rem;
        }

        li {
                padding-left: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                & button:hover {
                        color: ${({ theme }) => theme.textBaseHover};
                }
                & svg {
                        color: ${({ theme }) => theme.textBase};
                }
        }
`;

export const LinkNav = styled(Link)`
        text-decoration: none;
        font-size: var(--text-md);
        line-height: var(--text-lh-md);
        font-weight: var(--fw-medium);
        color: ${({ theme }) => theme.textBase};

        &:hover {
                color: ${({ theme }) => theme.textBaseHover};
        }
`;

export const Wrapper = styled.div`
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
`;

export const NavLink = styled.ul``;

export const LeftNavStyled = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;

        ul {
                display: none;
        }

        @media (min-width: 1024px) {
                ul {
                        display: flex;
                }
        }
`;

export const RightNav = styled.nav`
        white-space: nowrap;
        padding: 0 1rem;
        margin-left: 1rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        * {
                cursor: pointer;
                margin-left: 1rem;
        }
`;

export const Symbol = styled.img``;

export const LogoType = styled.img`
        margin-left: 0.25rem;
`;

export const Logo = styled.div`
        cursor: pointer;
        white-space: nowrap;
        transform: scale(0.8);

        @media (min-width: 1024px) {
                transform: scale(0.9);
        }
`;
