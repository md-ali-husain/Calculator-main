import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

export const useData = () => {
    return useContext(DataContext);
}

export const DataProvider = ({children}) => {
    const [expecting, setExpecting] = useState('');
    const [display, setDisplay] = useState('0');
    const [input, setInput] = useState(0);
    const [operand, setOperand] = useState('');
    const [decimalFlag, setDecimalFlag] = useState(false);
    
    const value = {
        input,
        setInput,
        operand,
        setOperand,
        decimalFlag,
        setDecimalFlag,
        display,
        setDisplay,
        expecting,
        setExpecting
    };
    
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}