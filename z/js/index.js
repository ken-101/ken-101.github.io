






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

//test2 calculatorrr
// class Calculator{
//     constructor(previousOperandTextElement, currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear() {
//         this.currentOperandTextElement = ""
//         this.previousOperandTextElement = ""
//         this.operation = undefined
//     }

//     delete() {

//     }

//     appendNumber(number) {
//         this.currentOperand = number
//     }
    
//     chooseOperation(operation) {
        
//     }
    
//     compute() {

//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand
//     }
// }

// const numberButtons = document.querySelectorAll("[data-number]")
// const operationButtons = document.querySelectorAll("[data-operation]")
// const equalsButtons = document.querySelector("[data-equals]")
// const deleteButtons = document.querySelector("[data-delete]")
// const allClearButtons = document.querySelector("[data-all-clear]")
// const previousOperandTextElement = document.querySelector("[data-previous-operand]")
// const currentOperandTextElement = document.querySelector("[data-current-operand]")

// const calculator = new Calculator(previousOperandTextElement,previousOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })
console.log('.')
// console.log(document.getElementById('email'));
// console.log(document.querySelectorAll('item'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

console.log('.')
// const ul = document.querySelector('.items');
// let kei=12;
// const sha= kei < 10 ? ul.lastElementChild.remove() : ul.firstElementChild.remove();

// console.log(sha);
// ul.remove()
// ul.firstElementChild.remove()
console.log('.')
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'okay';
// ul.children[1].innerText = 'Brad';
console.log('.')

// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';
// btn.addEventListener('mouseout', (f) => {
//     f.preventDefault();
//     document.querySelector('#my-form').style.background = 'white' 
//     document.querySelector('#my-form').style.color = 'black'
//     document.querySelector('body').classList.add('bg-dark')
//     ul.lastElementChild.innerHTML = 'cl<br>ick';
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(kei) {
    kei.preventDefault();

   
    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please type something'
       setTimeout(() => msg.remove(), 4000);
    }   else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear box
        nameInput.value = ''
        emailInput.value = ''

        }
    
}