import React from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';

const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
        text-align: center;
        border-radius: 333px;
        background-color: var(--primary-100);
        outline: 8px solid var(--primary-50);
        padding: 1rem;
        svg {
                stroke: var(--primary-600);
        }
`;

const IconStyled = ({ children }) => (
        <div>
                <IconWrapper>{children}</IconWrapper>
        </div>
);

export default IconStyled;
