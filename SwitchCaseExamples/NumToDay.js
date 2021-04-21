function checkDay(number) {
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Sunday";
    }
}
var digit = require("readline-sync");
var day = digit.question("Enter Day Number (1-7): ");
var number = parseInt(day)
var word = checkDay(number)
console.log("Day in Digit: " + day + " is in Words is: " + word)