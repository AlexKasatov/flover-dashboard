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
                </nav>
        );
};

export default Header;
