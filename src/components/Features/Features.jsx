import { Children } from 'react';

import { Wrapper } from './Features.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';
import FeaturesSection from './FeaturesSection';

const Features = () => {
        const test = ladningContent.filter((item) => item.title === 'features').map((item) => item);
        console.log('🚀 ~ file: Features.jsx ~ line 9 ~ Features ~ test', test);

        return (
                <Wrapper>
                        {Children.toArray(
                                ladningContent
                                        .filter((item) => item.title === 'features')
                                        .map(({ heading, subheading, support }) => (
                                                <SectionHeader
                                                        heading={heading}
                                                        subheading={subheading}
                                                        support={support}
                                                />
                                        ))
                        )}
                        <FeaturesSection />
                </Wrapper>
        );
};
export default Features;
