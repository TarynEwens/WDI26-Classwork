// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
//
// console.log("Is this thing on?")

let celsius = 25;
console.log(`${ celsius }°C is ${(((celsius * 9)/5)+32)}°F`);

let fahrenheit = 77;
console.log(`${fahrenheit}°F is ${(((fahrenheit - 32)*5)/9)}°C`);
