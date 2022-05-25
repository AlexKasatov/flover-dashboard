import styled from 'styled-components';
import { HeroImg } from '../Hero/Hero.styled';

export const SectionImg = styled(HeroImg)`
        /* border: 1px solid var(--gray-100); */
        box-shadow: var(--shadow-2xl);
        border-radius: 1rem;
        width: 100%;
        object-fit: scale-down;
        /* object-position: -20% 0; */
`;

const FeaturesImg = ({ img, alt }) => <SectionImg src={img} alt={alt} loading="lazy" />;

export default FeaturesImg;
