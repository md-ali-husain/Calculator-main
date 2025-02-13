import React from 'react';
import { useData } from '../context/DataContext';

const Display = () => {
    const { display, operand } = useData();
    return (
        <div className="relative sm:h-display-sm h-display bg-skin-display px-6 rounded-xl mb-6 transition-colors">
            <p className={"text-display text-skin-base font-bold text-right transition-all sm:text-display-sm " + (operand.length === 0 ? 'pt-8' : 'pt-4')}>{display}</p>
            <p className="absolute sm:text-xl text-2xl text-skin-accent transition-all right-10 ">{operand[operand.length - 1]}</p>
        </div>
    );
}

export default Display;