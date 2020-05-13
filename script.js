const numbers = document.querySelectorAll(".number")
console.log(numbers)

const numbers = document.querySelectorAll(".number")
numbers.forEach ((number) => {
  number.addEventListener("click", (event) => {
   console.log(event.target.value)
  })
})
