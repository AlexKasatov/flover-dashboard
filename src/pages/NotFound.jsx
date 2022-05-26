import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import error from '../styles/img/404.svg';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import { BtnActive } from '../components/FreeTrial/FreeTrial.styled';

const Wrapper = styled.div`
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
`;

const NotFound = () => {
        const navigate = useNavigate();
        const handlgeBack = () => {
                navigate(-1);
        };

        return (
                <Wrapper>
                        <SectionHeader
                                heading="Page not found..."
                                support="Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site"
                                subheading="404 error"
                        />
                        <BtnActive onClick={handlgeBack}>Back</BtnActive>
                        <img src={error} alt="error" />
                </Wrapper>
        );
};

export default NotFound;
