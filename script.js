const numbers = document.querySelectorAll(".number")
number.forEach ((number) => {
  number.addEventListener("click", (event) => {
   console.log("number is pressed")
  })
})
