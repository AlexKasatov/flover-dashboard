import { Children } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { LinkNav } from './Header.styled';

export const DropDownStyled = styled.ul`
        box-shadow: var(--shadow-lg);
        border-radius: var(--radii);
        background-color: ${({ theme }) => theme.bcPopUp};
        position: absolute;
        display: block;
        z-index: 1;
        min-width: 508px;
        top: 3.8rem;
        padding: 2.2rem;
        outline: 1px solid var(--grey-200);

        li {
                display: block;
                width: 100%;
        }
`;

export const Title = styled(LinkNav)`
        color: ${({ theme }) => theme.fontColorBase};
`;

export const Subtitle = styled.h4`
        color: ${({ theme }) => theme.textBase};
        font-size: var(--text-sm);
        font-weight: var(--fw-normal);
        line-height: var(--text-lh-sm);
`;

export const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
`;

const DropDown = ({ dropdown, submenu }) =>
        dropdown && (
                <DropDownStyled>
                        <Wrapper>
                                {Children.toArray(
                                        submenu.map(({ title, subTitle, url }) => (
                                                <li>
                                                        <div>
                                                                <Title to={url}>{title}</Title>
                                                                <Subtitle>{subTitle}</Subtitle>
                                                        </div>
                                                </li>
                                        ))
                                )}
                        </Wrapper>
                </DropDownStyled>
        );

export default DropDown;
