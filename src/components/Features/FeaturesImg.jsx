import styled from 'styled-components';
import { HeroImg } from '../Hero/Hero.styled';

const SectionImg = styled(HeroImg)`
        border: 1px solid var(--gray-100);
        boxshadow: var(--shadow-2xl);
`;

const FeaturesImg = ({ img, alt }) => <SectionImg scc={img} alt={alt} />;

export default FeaturesImg;
