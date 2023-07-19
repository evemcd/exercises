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
console.log(celsiusFahrenheit(0));      //32
console.log(celsiusFahrenheit(20));     //68
console.log(celsiusFahrenheit(40));     //104


//4. Write a function to find the area of a given Rectangle
function rectangleArea(width, height) {
    return `The area of the rectangle is ${width * height}.`
}
console.log(rectangleArea(8, 5));       //40