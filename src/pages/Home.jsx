import React from 'react';
import Features from '../components/Features/Features';
import FreeTrial from '../components/FreeTrial/FreeTrial';
import Hero from '../components/Hero/Hero';
import Integration from '../components/Integration/Integration';
import Metrix from '../components/Metric/Metrix';
import SocialProof from '../components/SocialProof/SocialProof';
import Quote from '../components/Quote/Quote';
import CtaSection from '../components/CTA/CtaSection';

const Home = () => (
        <>
                <Hero>home</Hero>
                <SocialProof />
                <Features />
                <Integration />
                <Metrix />
                <FreeTrial />
                <Quote />
                <CtaSection />
        </>
);

export default Home;
