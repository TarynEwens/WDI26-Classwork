// The Age Calculator
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
//
// console.log("Is this thing on?")

let currentYear = 2018;
const birthYear = 1989;

const ageOne = currentYear - birthYear;
const ageTwo = ageOne -1;

console.log(`They are either ${ ageOne } or ${ ageTwo }`)
