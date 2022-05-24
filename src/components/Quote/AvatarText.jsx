import React from 'react';
import { AvatarTextStyled, Avatar } from './Quote.styled';
import avatar from '../../styles/img/avatar/avatar-lending.png';
import { HeadingTextLg, SubHeadingTextMd } from '../../styles/UI/Text';

const AvatarText = () => (
        <AvatarTextStyled>
                <Avatar src={avatar} alt="avatar" />
                <HeadingTextLg>Koray Okumus</HeadingTextLg>
                <SubHeadingTextMd>UX Designer, Circooles</SubHeadingTextMd>
        </AvatarTextStyled>
);

export default AvatarText;
