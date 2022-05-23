import styled from 'styled-components';
import { HeroImg } from '../Hero/Hero.styled';

const SectionImg = styled(HeroImg)`
        /* border: 1px solid var(--gray-100); */
        box-shadow: var(--shadow-2xl);
        border-radius: 1rem;
        position: relative;
        left: 6rem;
        width: 100%;
        object-fit: cover;
        object-position: -20% 0;
`;

const FeaturesImg = ({ img, alt }) => <SectionImg src={img} alt={alt} />;

export default FeaturesImg;
