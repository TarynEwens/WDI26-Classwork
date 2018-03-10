// Write a function which takes two integer arguments, 'max' and 'factor', and iterates over every integer between 1 and 'max', testing whether the each integer is divisible by 'factor'. If it is divisible, it should add that integer to a result array. At the end of the loop the function should return the result array which contains all the integers up to 'max' which were found to be divisible by 'factor'. *

let result = [];

let f = function(max, factor) {
  for (var i = 1; i <= max; i++) {
    if ((i % factor) === 0) {
      result.push(i);
    }
  }
  console.log(result);
}


f(10, 2);
// // Nucleotide Count
// // DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
// //
// // Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
// //
// // Shortest intro to biochemistry EVAR:
// //
// // twigs are to birds nests as
// // nucleotides are to DNA and RNA as
// // amino acids are to proteins as
// // sugar is to starch as
// // oh crap lipids
// // I'm not going to talk about lipids because they're crazy complex.
// //
// // So back to nucleotides.
// //
//
// // There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
// //
// // There are no other nucleotides.
// //
// // Find how many of each nucleotides are in a string that you pass in to a function
// //
// // Make sure that you validate it has nucleotides!
//
// nucleotides = [ "A", "C", "G", "T", "U"];
// counter = {
//   "A": 0,
//   "C": 0,
//   "G": 0,
//   "T": 0,
//   "U": 0
// }
//
// howMany = function(input) {
//   let newString = input.toUpperCase(); //convert input to capital letters
//   console.log(newString);
//   let array = newString.split(""); //separate input string into an array using split
//   console.log(array);
//
//   for (let i = 0; i < array.length; i++) {
//     for (let i = 0; i < nucleotides.length; i++) {
//       if (array[i] === nucleotides[i]) {
//         console.log("match found");
//       }
//     }
//   }
// };
//
// //loop through each nucleotide letter, and then loop through input and if a match is found add + to number count for that letter
//
// howMany("Tacu");
