let prevNumber=''
let calculationOperator=''
let currentNumber='0'
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
   console.log (event.target.value)
  })
})
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
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
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
   result = parseFloat(prevNumber) + parseFloat(currentNumber)
   break
  case "-" :
   result = parseFloat(prevNumber) - parseFloat(currentNumber)
   break
  case "*" :
   result = parseFloat(prevNumber) * parseFloat(currentNumber)
   break
  case "/" :
   result = parseFloat(prevNumber) / parseFloat(currentNumber)
   break
  default:
   break
 }
 currentNumber = result
 calculationOperation = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
 console.log('AC button is pressed')
})

const clearAll = () => {
 prevNumber = ''
 calculationOperator = ''
 currentNumber = '0'
}
clearBtn.addEventListener('click', () => {
 clearAll()
 updateScreen(currentNumber)
})

inputDecimal = (dot) => {
 if (currentNumber.includes('.')) {
  retunr
 }
 currentNumber += dot
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
 console.log(event.target.value)
})

inputDecimal = (dot) => {
 currentNumber += dot
}

decimal.addEventListener('click', (event) => {
 inputDecimal (event.target.value)
 updateScreen(currentNumber)
})

const inputOperator = (operator) => {
 if (calculationOperator ==='') {
  prevNumber = currentNumber
 }
 calculationOperator = operator
 currentNumber = '0'
}
