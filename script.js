'use strict';

const button = document.querySelector('button');

const calculate = {
    valueOne: '',
    valueTwo: '',
    operator: '',
    result: '',
    readValues: () => {
        calculate.valueOne = +document.querySelector('#valueOne').value;
        calculate.valueTwo = +document.querySelector('#valueTwo').value;
        calculate.operator = document.querySelector('#operator').value;
    },

    showResult: (value, color) => {
       const result =  document.querySelector('#result');
       result.innerHTML = value;
       result.style.color = color;  
    },

    calc: () => {
        calculate.readValues();
        if(!isNaN(calculate.valueOne) && calculate.valueOne != '' && 
        calculate.valueTwo != '' && !isNaN(calculate.valueTwo)) {
        switch (calculate.operator) {
            case 'plus':
                calculate.result = calculate.valueOne + calculate.valueTwo;
                break;
            case 'minus':
                calculate.result = calculate.valueOne - calculate.valueTwo;
                break;
            case 'multiply':
                calculate.result = calculate.valueOne * calculate.valueTwo;
                break;
            case 'divide':
                calculate.result = calculate.valueOne / calculate.valueTwo;
                calculate.result = calculate.result.toFixed(2);
                break;
        }
    } else {
       return calculate.showResult('You entered incorrect value! Try again!', 'red');
        
    }

        calculate.showResult(calculate.result, 'green');
    }
};

button.addEventListener('click', () => calculate.calc());