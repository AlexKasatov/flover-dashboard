import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';

export const MainWrapper = styled.main`
        background-color: var(--white);
`;

// HERE RENDER ALL CONTENT
// FROM HERE WE CAN CHANGE BACKGROUND COLOR OF ALL PAGE COMPONENT
const Main = ({ children }) => (
        <MainWrapper>
                <Container>{children}</Container>
        </MainWrapper>
);

export default Main;
