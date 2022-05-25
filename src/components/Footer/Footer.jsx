import { Children } from 'react';
import { Container } from '../../styles/Container';
import { FooterSection, FooterStyled, FooterContent, FooterRow, LogoFooter } from './Footer.styled';
import { footerData } from '../../data/footerData';
import FooterList from './FooterList';
import logo from '../../styles/img/LogoFooter.svg';
import { SupportTextBase, SupportText } from '../../styles/UI/Text';
import Copy from './Copy';

const Footer = () => (
        <FooterStyled>
                <Container>
                        <FooterContent>
                                <LogoFooter>
                                        <img src={logo} alt="symbol" />
                                        <SupportTextBase>
                                                Design amazing digital experiences that <br /> create more happy in the
                                                world.
                                        </SupportTextBase>
                                </LogoFooter>

                                <FooterRow>
                                        {Children.toArray(
                                                footerData.map(({ title, body }) => (
                                                        <FooterSection>
                                                                <SupportTextBase>{title}</SupportTextBase>
                                                                <ul>
                                                                        <FooterList body={body} />
                                                                </ul>
                                                        </FooterSection>
                                                ))
                                        )}
                                </FooterRow>
                        </FooterContent>
                </Container>
                <Copy> </Copy>
        </FooterStyled>
);

export default Footer;
