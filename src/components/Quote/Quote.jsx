import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container } from '../../styles/Container';
import AvatarText from './AvatarText';
import { QuoteSection, Wrapper, HeadingLx } from './Quote.styled';
import SocialProofImg from '../SocialProof/SocialProofImg';
import { socialProofData } from '../../data/socialProof';
import Slider from './Slider';

const Quote = () => {
        const [currentImg, setCurrentImg] = useState(0);

        const handleImgRigth = () => {
                if (currentImg < socialProofData.length - 1) {
                        setCurrentImg((prev) => prev + 1);
                }
        };

        const handleImgLeft = () => {
                if (currentImg > socialProofData.length) {
                        setCurrentImg((prev) => prev - 1);
                }
        };

        return (
                <Wrapper>
                        <Container>
                                <QuoteSection>
                                        <HeadingLx>
                                                Flover has saved us thousands of hours of work and has unlock data
                                                insights we never thought possible.
                                        </HeadingLx>
                                        <AvatarText />
                                        <Slider />
                                </QuoteSection>
                        </Container>
                </Wrapper>
        );
};

export default Quote;
