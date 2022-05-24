import styled from 'styled-components';
import { SectionImg } from '../Features/FeaturesImg';
import { BtnPrimary, BtnTerGrey } from '../../styles/UI/ButtonCTA';

export const CtaImg = styled(SectionImg)``;

export const CtaBtn = styled(BtnPrimary)`
        min-width: 200px;
`;

export const CtaBtnMore = styled(BtnTerGrey)`
        min-width: 200px;
`;

export const Wrapper = styled.div`
        margin: 6rem auto 0 auto;
`;

export const CtaBlock = styled.section`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
`;

export const CtaBlockTextButton = styled.article`
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
`;

export const BtnBlock = styled.div`
        margin: 2rem 0 1rem 0;
        gap: 1rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
`;
