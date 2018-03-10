// Serge Says
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

console.log("connected");


const sergeSays = function (input) {

  if (input === "" || input === undefined) { //has to be the first if statement to work
    console.log("Fine. Be that way!");
  } else if (input === input.toUpperCase()) {
      if (input.includes("?")) {
        console.log("Stop shouting a question at me!");
      }
      else {
        console.log("Woah, chill out!");
    }
  } else if (input.includes("?")) { // could also use (input[input.length -1] === '?') OR input.endsWith('?');
    console.log("Sure.");
  } else {
    console.log("Whatever.");
  }


};


// (typeof myVar != 'undefined')

sergeSays("are you working?");
sergeSays("HOW ABOUT NOW");
sergeSays("HOW ABOUT NOW?");
sergeSays("");
sergeSays("anything else");
