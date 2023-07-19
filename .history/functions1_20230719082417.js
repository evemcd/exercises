//1. Write a JavaScript function to print the “Hello World” message
function printMessage() {
    console.log('Hello World!');
}
printMessage();


//2. Write a function that returns the square of a number
function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(4));       //16
console.log(squareNumber(5));       //25
console.log(squareNumber(10));      //100
console.log(squareNumber(12548));   //157452304


//3. Write a function to convert Celsius to Fahrenheit
function celsiusFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
}
console.log(celsiusFahrenheit(27));