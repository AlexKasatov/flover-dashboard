import { Children } from 'react';
import { FooterLink, FooterListStyled } from './Footer.styled';

const FooterList = ({ body }) =>
        Children.toArray(
                body.map(({ title, url }) => (
                        <FooterListStyled>
                                <FooterLink to={url}>{title}</FooterLink>
                        </FooterListStyled>
                ))
        );

export default FooterList;
