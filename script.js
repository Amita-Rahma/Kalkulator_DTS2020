const numbers = document.querySelectorAll(".number")
number.forEach ((number) => {
  number.addEventListener("click", () => {
   console.log("number is pressed")
  })
})
