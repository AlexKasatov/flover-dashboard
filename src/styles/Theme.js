import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
     box-sizing: border-box;
     :focus {
         outline: none;
     }
    }

    html {
        font-size: 16px;
        font-family: 'Inter', sans-serif;

    }

    /* Variables */
    :root {

        /* Radius  */
             --radii: 0.5rem;
             --radii-1: 1rem;

        /* Box-Shadow */
            --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
            --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
            --shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
            --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
            --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
            --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.25);
            --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.2);

        /* Containers */
            --container-sm: 40rem;
            --container-md: 48rem;
            --container-lg: 64rem;
            --container-xl: 80rem;

        /* Break-points */
            --mobile: 600px;
            --tablet: 768px;
            --desktop: 1024px;


        /* Typography */

            /* font-family */
            --ff: font-family: 'Inter', sans-serif;

            /* font-weight */
                --fw-regular: 400;
                --fw-medium: 500;
                --fw-semi-bold: 600;
                --fw-bold: 700;

            /* font-size */

                /* Text */
                --text-xs: 0.75rem;
                --text-sm: 0.875rem;
                --text-md: 1rem;
                --text-lg: 1.125rem;
                --text-xl: 1.25rem;

                /* Display */
                --display-xs: 1.5rem;
                --display-sm: 1.875rem;
                --display-md: 2.25rem;
                --display-lg: 3rem;
                --display-xl: 3.75rem;
                --display-2xl: 4.5rem;

            /* line-height */

                 /* Text */
                --text-lh-xs: 1.125rem;
                --text-lh-sm: 1.25rem;
                --text-lh-md: 1.5rem;
                --text-lh-lg: 1.75rem;
                --text-lh-xl: 1.875rem;

                /* Display */
                --display-xs: 1.875rem;
                --display-sm: 2rem;
                --display-md: 2.375rem;
                --display-lg: 2.75rem;
                --display-xl: 3.75rem;
                --display-2xl: 4.625rem;

            /* letter-spacing */
            --ls: -0.02em;

        /* Colors */

            /* Default Colors */
            --white: #FFFFFF;

            /* Light Mode */

                /* Gray */
                --gray-25: #FCFCFD;
                --gray-50: #F9FAFB;
                --gray-100: #F2F4F7;
                --gray-200: #E4E7EC;
                --gray-300: #D0D5DD;
                --gray-400: #98A2B3;
                --gray-500: #667085;
                --gray-600: #475467;
                --gray-700: #344054;
                --gray-800: #1D2939;
                --gray-900: #101828;

                /* Primaty */
                --primary-25: #FCFAFF;
                --primary-50: #F9F5FF;
                --primary-100: #F4EBFF;
                --primary-200: #E9D7FE;
                --primary-300: #D6BBFB;
                --primary-400: #B692F6;
                --primary-500: #9E77ED;
                --primary-600: #7F56D9;
                --primary-700: #6941C6;
                --primary-800: #53389E;
                --primary-900: #42307D;

                /* TODO Add Warning, Error, Succes colors */





    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        margin: 0;



    }

    h1, h2, h3, h4, h5, h6, p, a {
        color: ${({ theme }) => theme.fontColorBase}
    }

    li {
        list-style: none;

    }

    ul {
        padding: 0;
    }


`;

export const DarkMode = {
        fontColorBase: 'var(--gray-100)',
        textBase: 'var(--white)',
        textBaseHover: 'var(--primary-300)',
        backgroundColor: 'var(--gray-900)',
        bcPopUp: 'var(--gray-800)',
};

export const LightMode = {
        fontColorBase: 'var(--gray-900)',
        textBase: 'var(--gray-500)',
        textBaseHover: 'var(--gray-600)',
        backgroundColor: 'var(--white)',
        bcPopUp: 'var(--white)',
};
