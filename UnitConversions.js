function inchToFeet(value) {
    const feetInInch = 12;
    console.log(value + " inches = " + (value/feetInInch));
}

function rectangularPlotFeetToMeter(length, width) {
    areaInSquareFeet = length * width;
    console.log("Rectangular plot of: " + length + " x " + width + " squarefeet into meters is: " + (areaInSquareFeet * 0.09290304) + " Squaremeters");
}

function areaToAcersCal(length, width, noOfPlots) {
    const oneAcre_In_SquareFeet = 43560;
    areaInSquarefeet = (length * width) * noOfPlots;
    areaInSquarefeet_To_acre = areaInSquarefeet/oneAcre_In_SquareFeet;
    console.log("Area in Squarefeet to Acres: " + areaInSquarefeet_To_acre);
}

inchToFeet(42);
rectangularPlotFeetToMeter(60, 40);
areaToAcersCal(60,40,25);




