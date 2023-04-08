const charsBox = document.querySelector('#characters')
const numbersBox = document.querySelector('#numbers')
const symbolsBox = document.querySelector('#symbols')
const btn = document.querySelector('button');
const result = document.querySelector('.screen')
const combination = [charsBox, numbersBox, symbolsBox]
let chars = "abcdefjhigklmnopqrstuvwxyzABCDEFJHIGKLMNOPQRSTUVWXYZ"
let numbers = "1234567890";
let symbols = "&é(-è_çà)=$^*ù!@^\|#"
btn.addEventListener('click', () => {
  generateToBePass()
})
function generateToBePass() {
  let toBePass = [];
   const checkedItems = combination.filter((item) => {
     return item.checked === true;
   })
   for (var i = 0; i < checkedItems.length; i++) {
     switch (checkedItems[i].value) {
       case "characters":
       toBePass.push(...chars.split(''))
       break;
       case "numbers":
       toBePass.push(...numbers.split(''))
       break;
       case "simbols":
       toBePass.push(...symbols.split(''))
       break;
   }
   }
   generate(toBePass)
}
function generate(toBePass) {
  let finalPass = []
  for (var i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random()*toBePass.length)
    finalPass.push(toBePass[randomIndex])

  }
  result.textContent = finalPass.join('');
}
