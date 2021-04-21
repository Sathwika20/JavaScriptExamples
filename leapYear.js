var year;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`Enter Year: `, year => {
    console.log(`The year is ${year}`)
    checkStatus(year)
    readline.close();
})
function checkStatus(year) {
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {
                console.log("The is a Leap Year")
            } else {
                console.log("The is Not a Leap Year")
            }
        } else {
            console.log("The is a Leap Year")
        }
    } else {
        console.log("The is Not a Leap Year")
    }
}
