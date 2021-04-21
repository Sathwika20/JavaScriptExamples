var number = 0;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`Enter Number: `, number => {
    console.log(`The Number is ${number}`)
    checkStatus(number)
    readline.close();
});

function checkStatus(number) {
  if (number == 1) {
      console.log("ONE");
  } else if (number == 2) {
      console.log("TWO");
  } else if (number == 3) {
      console.log("Three");
  } else if (number == 4) {
      console.log("FOUR");
  } else if (number == 5) {
      console.log("FIVE");
  } else if (number == 6) {
      console.log("SIX");
  } else if (number == 7) {
      console.log("SEVEN");
  } else if (number == 8) {
      console.log("EIGHT");
  } else if (number == 9) {
      console.log("NINE");
  } 
}

