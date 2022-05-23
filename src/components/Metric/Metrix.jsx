import { Children } from 'react';
import { Container } from '../../styles/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Wrapper } from './Metrix.styled';
import { ladningContent } from '../../data/ladningContent';

const Metrix = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((section) => section.title === 'metric')
                                        .map(({ heading, subheading, support, content, icon }) => (
                                                <SectionHeader
                                                        heading={heading}
                                                        subheading={subheading}
                                                        support={support}
                                                        icon={icon}
                                                />
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default Metrix;
