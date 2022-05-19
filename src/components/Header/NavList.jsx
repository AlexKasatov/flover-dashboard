import React from 'react';
import styled from 'styled-components';
import { LinkNav } from './Header.styled';
import { useToggle } from '../../hooks/useToggle';
import DropDown from './DropDown';

export const NavListStyled = styled.li``;
export const NavDropDownButton = styled.button`
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-family: var(--ff);
        font-size: var(--text-md);
        line-height: var(--text-lh-md);
        font-weight: var(--fw-medium);
        color: ${({ theme }) => theme.textBase};

        &:hover {
                color: ${({ theme }) => theme.textBaseHover};
        }
`;

const NavList = ({ item }) => {
        // toggle dropwdown menu state( open / close )
        const [dropdown, handleDropdown] = useToggle();

        return (
                <NavListStyled>
                        {item.submenu ? (
                                <>
                                        <NavDropDownButton
                                                type="button"
                                                aria-haspopup="menu"
                                                aria-expanded={dropdown ? 'true' : 'false'}
                                                onClick={handleDropdown}
                                        >
                                                {item.title}
                                                {item.icon}
                                        </NavDropDownButton>
                                        <DropDown dropdown={dropdown} />
                                </>
                        ) : (
                                <LinkNav to={item.url}>{item.title}</LinkNav>
                        )}
                </NavListStyled>
        );
};

export default NavList;
