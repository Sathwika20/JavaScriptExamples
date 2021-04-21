function checkUnit(number) {
    switch (number) {
        case 1:
            return "Unit";
        case 10:
            return "Ten";
        case 100:
            return "Hundred";
        case 1000:
            return "Thousand";
        case 10000:
            return "Ten Thousand";
        case 100000:
            return "Lakh";
        default:
            return "Not in Limit"
    }
}
var digit = require("readline-sync");
var num = digit.question("Enter Number Like 1,10,100,1000,etc: ");
var number = parseInt(num)
var unit = checkUnit(number)
console.log("Num in Digit is : " + num + " and its unit is: " + unit)