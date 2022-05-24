import { Children } from 'react';
import { Container } from '../../styles/Container';
import { HeadingCTA } from '../../styles/UI/Text';
import { Wrapper, CtaBlock, CtaBlockTextButton, BtnBlock, CtaBtn, CtaBtnMore } from './CtaSection.styled';
import { ladningContent } from '../../data/ladningContent';
import FeaturesList from '../Features/FeaturesList';
import { SectionImg } from '../Features/FeaturesImg';

const CtaSection = () => (
        <Wrapper>
                <Container>
                        {Children.toArray(
                                ladningContent
                                        .filter((item) => item.title === 'cta')
                                        .map(({ heading, img, items }) => (
                                                <CtaBlock>
                                                        <CtaBlockTextButton>
                                                                <HeadingCTA>{heading}</HeadingCTA>
                                                                <FeaturesList items={items} />
                                                                <BtnBlock>
                                                                        <CtaBtn>Get Started</CtaBtn>
                                                                        <CtaBtnMore>More Info</CtaBtnMore>
                                                                </BtnBlock>
                                                        </CtaBlockTextButton>

                                                        <SectionImg src={img} alt={heading} />
                                                </CtaBlock>
                                        ))
                        )}
                </Container>
        </Wrapper>
);

export default CtaSection;
