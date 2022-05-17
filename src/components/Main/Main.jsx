import React from 'react';
import { Container } from '../../styles/Container';

const Main = ({ children }) => (
        <main>
                <Container>{children}</Container>
        </main>
);

export default Main;
