import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
     box-sizing: border-box;
    }

    html {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
    }

    /* Variables */
    :root {

    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        /* Typography */

    }

`;

export const DarkMode = {
        backgroundColor: 'black',
};

export const LightMode = {
        backgroundColor: 'white',
};
