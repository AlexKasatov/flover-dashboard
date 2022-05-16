import { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { LightMode, DarkMode } from '../styles/Theme';

export const Context = createContext();

const ContextProvider = ({ children }) => {
        const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

        useEffect(() => {
                localStorage.setItem('mode', mode);
        }, [mode]);

        const toggleTheme = () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        };

        const value = useMemo(() => ({ mode, setMode, toggleTheme }), [mode]);

        return (
                <Context.Provider value={value}>
                        <ThemeProvider theme={mode === 'light' ? LightMode : DarkMode}>{children}</ThemeProvider>
                </Context.Provider>
        );
};

export default ContextProvider;
