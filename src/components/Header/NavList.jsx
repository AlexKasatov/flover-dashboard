/* eslint-disable no-unused-expressions */
import { useRef, useEffect } from 'react';
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
        const dropDownRef = useRef();

        useEffect(() => {
                const handler = (event) => {
                        if (dropdown && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                                handleDropdown(false);
                        }
                };
                document.addEventListener('mousedown', handler);
                document.addEventListener('touchstart', handler);
                return () => {
                        // Cleanup the event listener
                        document.removeEventListener('mousedown', handler);
                        document.removeEventListener('touchstart', handler);
                };
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dropdown]);

        const onMouseEnter = () => {
                window.innerWidth > 1200 && handleDropdown(true);
        };

        const onMouseLeave = () => {
                window.innerWidth > 1200 && handleDropdown(false);
        };

        return (
                <NavListStyled ref={dropDownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        {item.body ? (
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
                                        <DropDown body={item.body} dropdown={dropdown} />
                                </>
                        ) : (
                                <LinkNav to={item.url}>{item.title}</LinkNav>
                        )}
                </NavListStyled>
        );
};

export default NavList;
