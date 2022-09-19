class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    appendNumber(number) {
        this.currentOperand += number.toString();
        console.log(this.currentOperand);
    }

    updateDisplay() {}
}

const buttonNumber = document.querySelectorAll('[data-number]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

buttonNumber.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
    });
});
