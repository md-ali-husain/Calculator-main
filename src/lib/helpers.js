export const isNumerical = (input) => {
    try {
        if (Number(input) >=0 || Number(input) <= 9 || input === '.') {
            return true;
        }
    } catch (err) {
        return false;
    }
}

export const isOperand = (input) => {
   if (input === '+' || input === '-' || input === '/' || input === 'x') {
       return true;
   }
   return false;
}

export const calculate = (first, second, operand) => {
    if (operand === "+") {
        return first + second;
    }
    else if (operand === '-') {
        return first - second;
    }
    else if (operand === 'x') {
        return first * second;
    }
    else if (operand === '/') {
        return first / second;
    }
}