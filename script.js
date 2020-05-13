const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
 calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

number.forEach((number)) => {
  number.addEventListener("click", (event) => {
  console.log(event.target.value)
  })
}
