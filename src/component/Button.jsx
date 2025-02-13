import React from 'react';
import { useData } from '../context/DataContext';

const Button = (props) => {
    const { operand } = useData();

    let margin = '';
    if (props.children === 'DEL' || props.children === 'RESET' || props.children === '=') {
        margin = 'mt-4';
    }
    else {
        margin = 'mt-2';
    }
    
    const backDivStyles = props.w + " " + props.bg + " " + props.shadow;
    const frontDivStyles = props.w + " " + (props.val === operand ? 'bg-skin-hover-numpad' : props.bg) + " " + props.hover;
    const textStyles = margin + " " + props.color + " " + props.textSize
    

    return (
        <div className={"relative h-btn-top rounded-xl transition-colors " + backDivStyles}>
            <div onClick={() => props.onclick(props.val)} className={"absolute z-20 h-btn-bot rounded-xl text-center transition-colors hover:cursor-pointer " + frontDivStyles}>
                <p className={"font-bold text-center transition-colors select-none " + textStyles}>{props.children}</p>
            </div>
        </div>
    )
}

export default Button;