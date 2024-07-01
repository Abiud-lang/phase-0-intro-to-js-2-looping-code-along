// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
let event = "birthday"
function writeCards(names,event) {
  let cards = []

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    cards.push(message);
  }
  return cards;
 

}
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  console.log(writeCards)