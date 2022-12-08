import React, { createContext, useEffect, useState } from 'react';

export const themeContext = createContext()
const Theme = ({ children }) => {
    const [dark, setDark] = useState(false)

    useEffect(() => {


        const root = window.document.documentElement;
        if (dark) {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        const getLocalStorage = JSON.parse(localStorage.getItem('dark'))
        setDark(getLocalStorage)

    }, [dark])

    const toggleTheme = () => {
        setDark(!dark)
        localStorage.setItem('dark', !dark)
    }
    return (
        <themeContext.Provider value={{ toggleTheme, dark }}>
            {children}
        </themeContext.Provider>
    );
};

export default Theme;