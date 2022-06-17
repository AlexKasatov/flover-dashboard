import { motion } from 'framer-motion';
import Features from '../components/Features/Features';
import FreeTrial from '../components/FreeTrial/FreeTrial';
import Hero from '../components/Hero/Hero';
import Integration from '../components/Integration/Integration';
import Metrix from '../components/Metric/Metrix';
import SocialProof from '../components/SocialProof/SocialProof';
import Quote from '../components/Quote/Quote';
import CtaSection from '../components/CTA/CtaSection';

const Home = () => (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Hero>home</Hero>
                <SocialProof />
                <Features />
                <Integration />
                <Metrix />
                <FreeTrial />
                <Quote />
                <CtaSection />
        </motion.div>
);

export default Home;
