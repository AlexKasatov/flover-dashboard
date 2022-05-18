import React from 'react';
import macbook from '../styles/img/mac.avif';
import macbookpng from '../styles/img/macb.png';
import macHqPng from '../styles/img/mac-hq.png';
import macHqAvif from '../styles/img/mac-hq-avif.avif';
import macHqLow from '../styles/img/mac-hq-low.avif';

const Home = () => (
        <div>
                <img src={macbook} alt="macbook" />
                <img src={macbookpng} alt="macbook" />
                <img src={macHqPng} alt="macbook" />
                <img src={macHqAvif} alt="macbook" />
                <img src={macHqLow} alt="macbook" />
        </div>
);

export default Home;
