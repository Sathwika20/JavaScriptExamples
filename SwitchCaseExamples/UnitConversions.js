const FEET_TO_INCH = 12
const FEET_TO_METER = 0.3048

function conversion(value, inputValue) {
    switch (value) {
        case 1:
            return inputValue * FEET_TO_INCH;
        case 2:
            return inputValue / FEET_TO_INCH;
        case 3:
            return inputValue * FEET_TO_METER;
        case 4:
            return inputValue / FEET_TO_METER;
    }
}

console.log("Enter Value For Conversion "+
"1:Feet To Inch Conversion "+
"2:Inch To Feet Conversion "+
"3:Feet To Meter Conversion "+
"4:Meter To Feet Conversion")

var digit = require("readline-sync");
var num = digit.question("Choose Option From Above: ");
var inputValue = digit.question("Enter Value To Be Converted: ")
var value = parseInt(num)
var convert = conversion(value, inputValue)
console.log("The Value is: "+inputValue+" Its Conversion is: "+convert)