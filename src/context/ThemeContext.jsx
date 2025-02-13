import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState({name: '', num: 1, previousNum: 1});
    const value = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;