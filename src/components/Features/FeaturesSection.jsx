import { Children } from 'react';
import IconStyled from '../../styles/UI/Icon';
import { HeadingBase, SupportTextBase } from '../../styles/UI/Text';
import FeaturesImg from './FeaturesImg';
import FeaturesList from './FeaturesList';
import { SectionFeature, AcrticleFeautre } from './Section.styled';
import { Container } from '../../styles/Container';

const FeaturesSection = ({ content }) => {
        console.log('🚀 ~ file: FeaturesSection.jsx ~ line 8 ~ FeaturesSection ~ content', content);

        return (
                <>
                        {Children.toArray(
                                content.map(({ icon, heading, support, items, img }) => (
                                        <SectionFeature>
                                                <AcrticleFeautre>
                                                        <IconStyled icon={icon} />

                                                        <HeadingBase>{heading}</HeadingBase>

                                                        <SupportTextBase>{support}</SupportTextBase>

                                                        <FeaturesList items={items} />
                                                </AcrticleFeautre>

                                                <FeaturesImg img={img} alt={heading} />
                                        </SectionFeature>
                                ))
                        )}
                </>
        );
};

export default FeaturesSection;
