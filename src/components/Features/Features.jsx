import { Children } from 'react';

import { Wrapper } from './Features.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';
import FeaturesSection from './FeaturesSection';

const Features = () => {
        const test = ladningContent.filter((item) => item.title === 'features').map((item) => item);

        return (
                <Wrapper>
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
                                                        <FeaturesSection content={content} />
                                                </>
                                        ))
                        )}
                        {/* тут будем также фильтр и мэпить и передавать пропсы */}
                </Wrapper>
        );
};
export default Features;
