import React from 'react';
import { useMode } from '../hooks/useMode';

const Header = () => {
        const { toggleTheme } = useMode();
        return (
                <nav>
                        Header
                        <button onClick={toggleTheme} type="button">
                                CHANGE MODE
                        </button>
                        <h1>TEXT</h1>
                        <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est pariatur impedit esse
                                nesciunt! Inventore numquam officiis, quam tempore consequatur in blanditiis accusantium
                                nesciunt, facilis voluptatem quasi quae architecto porro neque?
                        </p>
                </nav>
        );
};

export default Header;
