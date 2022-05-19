import { Children } from 'react';
import symbolIcon from '../../styles/img/symbol.svg';
import logoTypeIcon from '../../styles/img/logotype.svg';
import { LeftNavStyled, Logo, Symbol, LogoType, NavLink, LinkNav } from './Header.styled';
import { mainNavLinks } from '../../data/linksData';
import NavList from './NavList';

const LeftNav = () => (
        <LeftNavStyled>
                <Logo>
                        <Symbol src={symbolIcon} alt="symbol" />

                        <LogoType src={logoTypeIcon} alt="logotype" />
                </Logo>
                <NavLink>
                        {Children.toArray(mainNavLinks.map((item, index) => <NavList item={item} index={index} />))}
                </NavLink>
        </LeftNavStyled>
);

export default LeftNav;
