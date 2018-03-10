// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
//
// console.log("Is this thing on?")

// let currentAge = 28;
// const maxAge = 85;
// const numPerDay = 2;
//
// const yearsNeeded = maxAge - currentAge;
// const daysNeeded = yearsNeeded * 365.25;
// const snacksNeeded = daysNeeded * numPerDay;
// const youWillNeed = `You will need ${ snacksNeeded } snacks to last you until the ripe old age of ${ maxAge }`
// console.log(youWillNeed)

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (age, amountPerDay) {
  const maxAge = 85;
  const yearsNeeded = maxAge - age;
  const daysNeeded = yearsNeeded * 365.25; // including leap years.
  const snacksNeeded = Math.ceil(daysNeeded * amountPerDay);
  const youWillNeed = `You will need ${ snacksNeeded } snacks to last you until the ripe old age of ${ maxAge }`
  console.log(youWillNeed)
  return youWillNeed;
};

calculateSupply(11,20);
calculateSupply(28,4.12);
calculateSupply(56,1);
