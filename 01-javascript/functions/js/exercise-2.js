// The Age Calculator
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
//
// console.log("Is this thing on?")

// let currentYear = 2018;
// const birthYear = 1989;
// const ageOne = currentYear - birthYear;
// const ageTwo = ageOne -1;
// console.log(`They are either ${ ageOne } or ${ ageTwo }`)


// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.


const calculateDogAge = function (puppyAge, conversionRate) {
  const dogYears = puppyAge * conversionRate;
  const info = (`Your doggie is ${ dogYears } years old in dog years!`);
  console.log(info);
  return info;
}

calculateDogAge(6, 7);
calculateDogAge(6, 12);
calculateDogAge(6, 2);
