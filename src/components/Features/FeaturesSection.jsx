import { Children } from 'react';
import { Container } from '../../styles/Container';
import IconStyled from '../../styles/UI/Icon';
import { HeadingBase, SupportTextBase } from '../../styles/UI/Text';
import FeaturesImg from './FeaturesImg';
import FeaturesList from './FeaturesList';
import { SectionFeature, AcrticleFeautre } from './Section.styled';

const FeaturesSection = ({ content }) => {
        console.log('🚀 ~ file: FeaturesSection.jsx ~ line 8 ~ FeaturesSection ~ content', content);

        return (
                <Container>
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
                </Container>
        );
};

export default FeaturesSection;
