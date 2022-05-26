import { Children, useContext } from 'react';
import symbolIcon from '../../styles/img/symbol.svg';
import logoTypeIconDark from '../../styles/img/LogoFooter.svg';
import logoTypeIconLight from '../../styles/img/logotype.svg';
import { LeftNavStyled, Logo, Symbol, LogoType, NavLink, LinkNav } from './Header.styled';
import { mainNavLinks } from '../../data/linksData';
import NavList from './NavList';
import { useMode } from '../../hooks/useMode';

const LeftNav = () => {
        const { mode } = useMode();

        return (
                <LeftNavStyled>
                        <Logo>
                                <Symbol src={symbolIcon} alt="symbol" />

                                <LogoType
                                        src={mode === 'light' ? logoTypeIconLight : logoTypeIconDark}
                                        alt="logotype"
                                />
                        </Logo>
                        <NavLink>
                                {Children.toArray(
                                        mainNavLinks.map((item, index) => <NavList item={item} index={index} />)
                                )}
                        </NavLink>
                </LeftNavStyled>
        );
};

export default LeftNav;
