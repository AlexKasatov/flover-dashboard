import { Children } from 'react';

import { Wrapper } from './Features.styled';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ladningContent } from '../../data/ladningContent';

const Features = () => {
        const test = ladningContent.filter((item) => item.title === 'features').map((item) => item);
        console.log('🚀 ~ file: Features.jsx ~ line 9 ~ Features ~ test', test);

        return (
                <Wrapper>
                        <h1>test</h1>
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
                </Wrapper>
        );
};
export default Features;
