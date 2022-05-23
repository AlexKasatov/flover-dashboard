import styled from 'styled-components';
import { BtnPrimary } from '../../styles/UI/ButtonCTA';

export const Wrapper = styled.section`
        margin: 3rem auto;

        display: flex;
        justify-content: center;
        align-items: center;
`;

export const IconList = styled.div`
        margin-bottom: 4rem;
        padding: 0 11rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        max-width: 1216px;
`;

export const BtnMain = styled(BtnPrimary)`
        min-width: 192px;
        width: 100%;
`;

export const BtnWrapper = styled(Wrapper)`
        margin: 0 auto;
`;
