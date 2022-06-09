import styled from 'styled-components';

// Center
export const SpinnerXl = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12rem auto;

        width: 88px;
        height: 88px;
        border-radius: 50%;
        background: radial-gradient(farthest-side, #6941c6 94%, #0000) top/14.1px 14.1px no-repeat,
                conic-gradient(#0000 30%, #6941c6);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 14.1px), #000 0);
        animation: spinner-c7wet2 1.2s infinite linear;

        @keyframes spinner-c7wet2 {
                100% {
                        transform: rotate(1turn);
                }
        }
`;
