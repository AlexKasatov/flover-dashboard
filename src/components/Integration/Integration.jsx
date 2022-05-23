import { Children } from 'react';
import { Container } from '../../styles/Container';
import { Wrapper, BtnMain, BtnWrapper } from './Integration.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';
import IntegrationIcons from './IntegrationIcons';

const Integration = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((section) => section.title === 'integrations')
                                        .map(({ heading, subheading, support, button, content }) => (
                                                <>
                                                        <SectionHeader
                                                                heading={heading}
                                                                subheading={subheading}
                                                                support={support}
                                                        />
                                                        <IntegrationIcons content={content} />
                                                        <BtnWrapper>
                                                                <BtnMain>{button}</BtnMain>
                                                        </BtnWrapper>
                                                </>
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default Integration;
