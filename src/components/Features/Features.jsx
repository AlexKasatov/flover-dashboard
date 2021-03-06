import { Children } from 'react';

import { Wrapper } from './Features.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';
import FeaturesSection from './FeaturesSection';
import { Container } from '../../styles/Container';

const Features = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((item) => item.title === 'features')
                                        .map(({ heading, subheading, support, content }) => (
                                                <>
                                                        <SectionHeader
                                                                heading={heading}
                                                                subheading={subheading}
                                                                support={support}
                                                        />
                                                        {/* Render 3 section here */}
                                                        <FeaturesSection content={content} />
                                                </>
                                        ))
                        )}
                </Container>
        </Wrapper>
);
export default Features;
