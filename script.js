let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
 calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
 if (currentNumber === '0') {
  currentNumber = number
 } else {
  currentNumber += number
}

number.forEach ((number) => {
  number.addEventListener("click", (event) => {
  inputNumber (event.target.value)
  updateScreen (currentNumber)
  })
})

 const operators = document.querySelectorAll(".operator")
  operator.forEach ((operator) => {
   operator.addEventListener("click", (event) => {
    inputOperator (event.target.value)
   })
  })
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click, () => {
  calculate ()
  updateScreen (currentNumber)
})

const calculate = () => {
 let result = ''
 switch(calculationOperator) {
  case "+" :
   result = prevNumber + currentNumber
   break
  case "-" :
   result = prevNumber - currentNumber
   break
  case "*" :
   result = prevNumber * currentNumber
   break
  case "/" :
   result = prevNumber / currentNumber
   break
  default:
   break
 }
 currentNumber = result
 calculationOperation = ''
}

