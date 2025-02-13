import React from 'react';
import Button from './Button';
import { useData } from '../context/DataContext';
import { isNumerical, isOperand, calculate } from '../lib/helpers';

const Body = () => {
    const { display, setDisplay, setInput, operand, setOperand, input, decimalFlag, setDecimalFlag, expecting, setExpecting } = useData();
    const handleClick = (value) => {
       if (value === 'DEL' && display !== '0' && expecting === 'operand') {
            //const newNumber = display.slice(0, display.length - 1);
            setDisplay('');
            setDecimalFlag(false);
            
        }
        else if (value === 'RESET') {
            setInput(0);
            setOperand('');
            setDisplay('0');
            setExpecting('');
            setDecimalFlag(false);
        }
        else if (isNumerical(value)) {
            if (expecting === '') {
                if(value === '.' && !decimalFlag) {
                    setDecimalFlag(true)
                    value = '0.';
                }
                setDisplay(String(value));
                setExpecting('operand');
            }
            else if (expecting === 'number') {
                setInput(display);
                if (value !== '.') {
                    setDisplay(String(value));
                }
                else if (value === '.' && !decimalFlag) {
                    setDecimalFlag(false);
                    setDisplay(String(value));
                }
                setExpecting('operand');
            }
            else if (expecting === 'operand') {
                if (value !== '.') {
                    setDisplay(display + value);
                }
                else if (value === '.' && !decimalFlag) {
                    setDisplay(display + '.');
                    setDecimalFlag(true);
                }
            }
        }
        else if (isOperand(value)) {
             if (expecting === '') {
                setOperand(value);
                setDecimalFlag(false);
                setExpecting('number');
             }
             else if (expecting === 'number') {
                 setOperand(value);
             }
             else if (expecting === 'operand') {
                 if (operand === '') {
                     setOperand(value);
                     setExpecting('number');
                     setDecimalFlag(false);
                 }
                 else {
                     const res = calculate(Number(input), Number(display), operand);
                     setDisplay(res.toFixed(4));
                     setOperand(value);
                     setExpecting('number');
                     setDecimalFlag(false);
                 }
             }
        }
        else if (value === '=') {
            if (expecting === 'operand') {
                if (operand !== '') {
                    const res = calculate(Number(input), Number(display), operand);
                    setDisplay(res.toFixed(4));
                    setOperand('');
                    setExpecting('');
                    setDecimalFlag(false);
                }
            }
        }
    }

    return (
        <div className="bg-skin-body rounded-xl p-8 sm:p-5 transition-colors">
            <div className="flex flex-wrap gap-y-7 gap-x-6 sm:grid sm:grid-cols-4 sm:gap-y-4 sm:gap-x-3 justify-center items-center mb-7">
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={7}>7</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={8}>8</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={9}>9</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-command"} shadow={"bg-skin-command-shadow"} color={"text-skin-command"} textSize={"sm:text-command-sm text-command"} bg={"bg-skin-command"} w={"sm:w-btn-sm w-btn"} val={"DEL"}>DEL</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={4}>4</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={5}>5</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={6}>6</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={"+"}>+</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={1}>1</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={2}>2</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={3}>3</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={"-"}>-</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={"."}>.</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={0}>0</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={"/"}>/</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"sm:text-numpad-sm text-numpad"} bg={"bg-skin-numpad"} w={"sm:w-btn-sm w-btn"} val={"x"}>x</Button>
            </div>
            <div className="flex items-center justify-between">
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-command"} shadow={"bg-skin-command-shadow"} color={"text-skin-command"} textSize={"sm:text-command-sm text-command"} bg={"bg-skin-command"} w={"sm:w-btn-cmd-sm w-btn-cmd"} val={"RESET"}>RESET</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-accent"} shadow={"bg-skin-accent-shadow"} color={"text-skin-eq"} textSize={"sm:text-command-sm text-command"} bg={"bg-skin-accent"} w={"sm:w-btn-cmd-sm w-btn-cmd"} val={"="}>=</Button>
            </div>
        </div>
    );
}

export default Body;