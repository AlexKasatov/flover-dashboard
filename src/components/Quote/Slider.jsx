import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import SocialProofImg from '../SocialProof/SocialProofImg';
import { socialProofData } from '../../data/socialProof';
import { SliderStyled } from './Quote.styled';

const Slider = () => {
        const [currentImg, setCurrentImg] = useState(0);

        const handleImgRigth = () => {
                if (currentImg < socialProofData.length - 1) {
                        setCurrentImg((prev) => prev + 1);
                }
        };

        const handleImgLeft = () => {
                if (currentImg > 0) {
                        setCurrentImg((prev) => prev - 1);
                }
        };
        return (
                <SliderStyled>
                        <FiArrowLeft size="36px" onClick={handleImgLeft} />

                        <SocialProofImg
                                title={socialProofData[currentImg].title}
                                logotype={socialProofData[currentImg].logotype}
                                logomark={socialProofData[currentImg].logomark}
                        />

                        <FiArrowRight size="36px" onClick={handleImgRigth} />
                </SliderStyled>
        );
};

export default Slider;
