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
    constructor(inputBefore, inputCurrent){
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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    //to get the numbers to display 
    getDisplayNumber(num){
        const stringNumber = num.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        
    }
}  



 