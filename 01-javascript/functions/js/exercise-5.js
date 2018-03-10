// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
//
// console.log("Is this thing on?")

// let celsius = 25;
// console.log(`${ celsius }°C is ${(((celsius * 9)/5)+32)}°F`);
//
// let fahrenheit = 77;
// console.log(`${fahrenheit}°F is ${(((fahrenheit - 32)*5)/9)}°C`);


// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
//
// Convert it to celsius and output "NN°F is NN°C."

const celsiusToFahrenheit = function(celsius) {
  let fahrenheit = (((celsius * 9)/5)+32);
  console.log(`${ celsius }°C is ${ fahrenheit }°F`);
  return fahrenheit;
}

celsiusToFahrenheit(25);

const fahrenheitToCelsius = function (fahrenheit) {
  let celsius = (((fahrenheit - 32)*5)/9);
  console.log(`${ fahrenheit }°F is ${ celsius }°C`);
  return fahrenheit;
}

fahrenheitToCelsius(77);
