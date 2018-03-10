console.log("Javascript is working!")

// What number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(`The great number of 1 and 2 is ${greaterNum(1, 2)}`);
console.log(`The great number of 15 and 1.4 is ${greaterNum(15, 1.4)}`);



// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(language) {
  if (language === "es") {
    return "Hola Mundo";
  } else if (language === "de") {
    return "Hallo Welt";
  } else return "Hello World";
};

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("anything"));

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score) {
  if (score >= 95) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 65) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else return "F";
};

console.log(assignGrade(10));

// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(noun, num) {
  let text = `${ num } ${ noun }`;
  if (num == 1) {
    return text;
  } else {
    return `${ text }s`;
  }

  // if ((noun === "cat") && (num > 1)){
  //     return `${ num } ${ noun }s`;
  //   } else if ((noun === "cat") && (num === 1)){
  //     return `${ num } ${ noun }`;
  //   };
  // if ((noun === "dog") && (num > 1)){
  //       return `${ num } ${ noun }s`;
  //     } else if ((noun === "dog") && (num === 1)){
  //       return `${ num } ${ noun }`;
  // };
  // if (noun === "sheep"){
  //     return `${ num } ${ noun }`;
  //   };
  // if (noun === "geese"){
  //     return `${ num } ${ noun }`;
  //   };

  };


  console.log(pluralize("cat", 1));
  console.log(pluralize("cat", 2));
  console.log(pluralize("dog", 1));
  console.log(pluralize("dog", 2));
  console.log(pluralize("sheep", 1));
  console.log(pluralize("sheep", 2));
  console.log(pluralize("geese", 1));
  console.log(pluralize("geese", 2));
