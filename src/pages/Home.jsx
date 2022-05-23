import React from 'react';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Integration from '../components/Integration/Integration';
import Metrix from '../components/Metric/Metrix';
import SocialProof from '../components/SocialProof/SocialProof';

const Home = () => (
        <>
                <Hero>home</Hero>
                <SocialProof />
                <Features />
                <Integration />
                <Metrix />
        </>
);

export default Home;
