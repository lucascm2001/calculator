function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return Math.round((x / y) * 1000000) / 1000000;
}

function operate(x, y, operator) {
    return operator(x, y);
}

// numbers
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

const display = document.querySelector('.display');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divides = document.querySelector('#divides');
const equals = document.querySelector('.equals');

const clear = document.querySelector('.clear');

let firstNum = null;
let secondNum = null;
let operation = null;


numbers.forEach((number, index) => {
    number.addEventListener('click', () => {

        // string the first number together
        if (operation === null && secondNum == null) {
            if (firstNum === null) {
                firstNum = index;
            }
            else {
                firstNum = '' + firstNum + index;
            }
            display.textContent = firstNum;
        }

        if (operation !== null && firstNum !== null) {
            if (secondNum === null) {
                secondNum = index;
            }
            else {
                secondNum = '' + secondNum + index;
            }
            display.textContent += index;
        }


        /*
        if (operation === null) {
            //string number together
        }


        if (firstNum !== null) secondNum = index;
        else firstNum = index;
        */
    });
});

plus.addEventListener('click', () => {
    // operation becomes the function from above
    operation = add;
    display.textContent += '+';
});

minus.addEventListener('click', () => {
    // operation becomes the function from above
    operation = subtract;
    display.textContent += '-';

});

times.addEventListener('click', () => {
    // operation becomes the function from above
    operation = multiply;
});

divides.addEventListener('click', () => {
    // operation becomes the function from above
    operation = divide;
});

equals.addEventListener('click', () => {
    // operation becomes the function from above
    display.textContent = operate(Number(firstNum), Number(secondNum), operation);
});

clear.addEventListener('click', () => {
    // operation becomes the function from above
    firstNum = null;
    secondNum = null;
    operation = null;
    display.textContent = '';
});

