import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
        ul {
                display: flex;
                justify-content: space-between;
                margin-left: 2rem;
        }

        li {
                padding: 1rem;
        }
`;

export const LinkNav = styled(Link)`
        text-decoration: none;
        font-size: var(--text-md);
        line-height: var(--text-lh-md);
        font-weight: var(--fw-medium);
        color: ${({ theme }) => theme.fc500};
`;

export const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
`;

export const LeftNav = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
`;

export const Logo = styled.div`
        font-size: var(--display-sm);
        font-weight: var(--fw-semi-bold);
        line-height: var(--display-sm);
`;
