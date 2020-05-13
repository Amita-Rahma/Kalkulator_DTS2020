const numbers = document.querySelectorAll(".number")
console.log(numbers)
NodeList(10) [button.number, button.number, button.number, button.number, button.number, button.number, button.number, button.number,button.number,  button.number.zero-btn]
0: button.number
1: button.number
2: button.number
3: button.number
4: button.number
5: button.number
6: button.number
7: button.number
8: button.number
9: button.number.zero-btn
length: 10
const numbers = document.querySelectorAll(".number")
numbers.forEach ((number) => {
  number.addEventListener("click", (event) => {
   console.log(event.target.value)
  })
})
