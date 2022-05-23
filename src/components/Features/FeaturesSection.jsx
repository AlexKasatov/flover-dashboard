import { Children } from 'react';
import IconStyled from '../../styles/UI/Icon';
import { HeadingBase, SupportTextBase } from '../../styles/UI/Text';
import FeaturesImg from './FeaturesImg';
import FeaturesList from './FeaturesList';

const FeaturesSection = ({ content }) => (
        <>
                {Children.toArray(
                        content.map(({ icon, heading, support, items, img }) => (
                                <>
                                        <IconStyled icon={icon} />
                                        <HeadingBase>{heading}</HeadingBase>
                                        <SupportTextBase>{support}</SupportTextBase>

                                        <FeaturesList items={items} />

                                        <FeaturesImg img={img} alt={heading} />
                                        {/* Section IMG */}
                                </>
                        ))
                )}
        </>
);

export default FeaturesSection;
