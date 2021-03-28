//Define All classes
const numbButtons = document.querySelectorAll('[data-num]')
const operatorButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[clear-data]')
const inputBefore = document.querySelector('[data-prev]')
const inputCurrent = document.querySelector('[data-current]')


//Create a class constructor 
class Calculator {
    constructor(inputBefore,inputCurrent){
        this.inputCurrent = inputBefore,
        this.inputBefore =  inputCurrent
        this.clear()
    }
    //set it all to clear 
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        console.log(this.previousOperand)
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    //to get the numbers to display  in decimal
    getDisplayNumber(num){
        const stringNumber = num.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;

        if(isNaN(integerDigits)){
            integerDisplay = '';
        
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits:0})

        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else {
            return integerDisplay
        }
        
}  
        //To add numbers to display
    appendNumber(num){
            //to satify that the decimal will show after the number
            if(num === '.' && this.currentOperand.includes('.')) return
             this.currentOperand= this.currentOperand.toString() + num.toString();
        }

        pickOperation(operation){
            //to make  the operation keys function
            if(this.currentOperand === '') return
            if(this.previousOperand != ''){
                this.compute();
            }
            this.operation = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';
        }

        compute(){
            let computation;
            const before = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if(isNaN(before) || isNaN(current)) return;

        //Make a conditional statement to make the operators function
        switch(this.operation) {
            case '+':
                computation = before + current;
                break;
                case '-':
                    computation = before - current;
                    break;
                    case '*':
                        computation = before * current;
                        break;
                        case '/':
                            computation = before / current;
                            break;
                            default:
                                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

        }
        //To update digit display
        updateDisplay(){
            this.inputCurrent.innerText = this.getDisplayNumber(this.currentOperand)
            if(this.operation != null) {
                this.inputBefore.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
                console.log(this.operand);
            }
            else{
                this.inputBefore.innerText = ''
            }
        };

    }; 

    //Add eventlistners to all buttons
    const calculator = new Calculator(inputBefore, inputCurrent);
    numbButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        })
    });
    operatorButton.forEach(button => {
        button.addEventListener('click', () => {
            calculator.pickOperation(button.innerText);
            calculator.updateDisplay();
        })
    });
    equalButton.addEventListener('click', () => {
            calculator.compute();
            calculator.updateDisplay();
    });
    clearButton.addEventListener('click', () => {
            calculator.clear();
            calculator.updateDisplay();
    });
    delButton.addEventListener('click', () => {
            calculator.delete();
            calculator.updateDisplay();
    
    });