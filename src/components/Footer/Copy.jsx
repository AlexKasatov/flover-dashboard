import { Children } from 'react';
import { CopyText, CopyStyled, CopyBlock, IconWrapper } from './Footer.styled';
import { Container } from '../../styles/Container';
import { footerData } from '../../data/footerData';
import IconList from './IconList';

const Copy = () => (
        <CopyStyled>
                <Container>
                        <CopyBlock>
                                <CopyText>&copy; 2022 Flover Inc. All rights reserved.</CopyText>
                                <IconWrapper>
                                        {Children.toArray(
                                                footerData
                                                        .filter((item) => item.title === 'Social')
                                                        .map(({ body }) => <IconList body={body} />)
                                        )}
                                </IconWrapper>
                        </CopyBlock>
                </Container>
        </CopyStyled>
);

export default Copy;
