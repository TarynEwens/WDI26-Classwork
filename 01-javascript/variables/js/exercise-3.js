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

let currentAge = 28;
const maxAge = 85;
const numPerDay = 2;

const yearsNeeded = maxAge - currentAge;
const daysNeeded = yearsNeeded * 365.25;
const snacksNeeded = daysNeeded * numPerDay;
const youWillNeed = `You will need ${ snacksNeeded } snacks to last you until the ripe old age of ${ maxAge }`
console.log(youWillNeed)
