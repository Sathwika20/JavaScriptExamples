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
      console.log("Week is Sunday");
  } else if (number == 2) {
      console.log("Week is Monday");
  } else if (number == 3) {
      console.log("Week is Tuesday");
  } else if (number == 4) {
      console.log("Week is Wednesday");
  } else if (number == 5) {
      console.log("Week is Thursday");
  } else if (number == 6) {
      console.log("Week is Friday");
  } else if (number == 7) {
      console.log("Week is Saturday");
  } 
}