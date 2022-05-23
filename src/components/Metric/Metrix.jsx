import { Children } from 'react';
import { Container } from '../../styles/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Wrapper } from './Metrix.styled';
import { ladningContent } from '../../data/ladningContent';
import MetricList from './MetricList';

const Metrix = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((section) => section.title === 'metric')
                                        .map(({ heading, subheading, support, content, icon }) => (
                                                <>
                                                        <SectionHeader
                                                                heading={heading}
                                                                subheading={subheading}
                                                                support={support}
                                                                icon={icon}
                                                                style={{ margin: '0 auto' }}
                                                        />
                                                        <MetricList content={content} />
                                                </>
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default Metrix;
