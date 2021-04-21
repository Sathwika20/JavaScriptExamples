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
    if ((number>=0) && (number<10)) {
        console.log("Unit");
    } else if ((number>=10) && (number<100)) {
        console.log("Ten");
    } else if ((number>=100) && (number<1000)) {
        console.log("Hundred");
    } else if ((number>=1000) && (number<10000)) {
        console.log("Thousand");
    } else if ((number>=10000) && (number<100000)) {
        console.log("Ten Thousand");
    } else if ((number>=100000) && (number<1000000)) {
        console.log("Lakh");
    } 
}

