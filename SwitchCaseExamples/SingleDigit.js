function checkWord(number) {
    switch (number) {
        case 0:
            return "ZERO";
        case 1:
            return "ONE";
        case 2:
            return "TWO";
        case 3:
            return "THREE";
        case 4:
            return "FOUR";
        case 5:
            return "FIVE";
        case 6:
            return "SIX";
        case 7:
            return "SEVEN";
        case 8:
            return "EIGHT";
        case 9:
            return "NINE";
        default:
            return "Wrong Input";
    }
}
var digit = require("readline-sync");
var num = digit.question("Enter the Single digit Number (0-9): ");
var number = parseInt(num)
var word = checkWord(number)
console.log("Num in Digit: " + number + " is in Words is: " + word)