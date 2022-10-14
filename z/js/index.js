






// let name = "hello" ;
// let interestRate = 200;
// let person = {
//     name: "ken" ,
//     age: 30
// };
// person.name = "john";
// let isNot = null;
// letselectedColors = ["red", "blue", "green", "", "", "", "", "", ""];
// letselectedColors[3] = 2;

// console.log(letselectedColors.length);

// //task

// function kei(name,  lastName) {
//     console.log("heyy " + name + " " + lastName);
// }
// kei("kenn", "ja");
// kei("ja9", "eli");
// kei("keish", "chan");

// //calculate

// function square(number){
//     return number * number
// }
// console.log(square(70));

// test2 calculatorrr
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperandTextElement = ""
        this.previousOperandTextElement = ""
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number
    }
    
    chooseOperation(operation) {
        
    }
    
    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButtons = document.querySelector("[data-equals]")
const deleteButtons = document.querySelector("[data-delete]")
const allClearButtons = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement,previousOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})