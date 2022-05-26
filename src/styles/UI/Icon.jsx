import styled from 'styled-components';

const IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        width: 3rem;
        text-align: center;
        border-radius: 333px;
        background-color: ${({ theme }) => theme.icon.wraperMd};
        outline: 8px solid ${({ theme }) => theme.icon.outline};
        padding: 1rem;
        svg {
                stroke: ${({ theme }) => theme.icon.color};
        }
        margin-bottom: 1.5rem;
`;

const IconStyled = ({ icon }) => (
        <div>
                <IconWrapper>{icon}</IconWrapper>
        </div>
);

export default IconStyled;
