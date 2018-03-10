// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.



let anagram = {
  anagramList: ["enlists", "google", "inlets", "banana"],
  sorted: function(word) {
    return word.toUpperCase().split('').sort().join('')
  },
  findAnagram: function(word) {
    for (var i = 0; i < this.anagramList.length; i++) {
      if (this.sorted(word) === this.sorted(this.anagramList[i])) {
        console.log(this.anagramList[i] + " this is an anagram of " + word + ".");
        return this.anagramList[i]
      }
    }
    console.log('no anagram');
    return null;
  }

};

anagram.findAnagram("Listen");








// let wordArray = [];
// let anagramArray =[];
// let word = "Listen";
// let anagram = "inlets";
//
//   newWord = word.toLowerCase();
//   console.log(newWord);
//   newAnagram = anagram.toLowerCase();
//   console.log(newAnagram);
//
//   splitWord = newWord.split('');
//   wordArray.push(splitWord);
//   console.log(wordArray);
//
//   splitAnagram = newAnagram.split('');
//   anagramArray.push(splitAnagram);
//   console.log(anagramArray);
//
//   newWordArray = wordArray.sort();
//   console.log(newWordArray);
//   newAnagramArray = newAnagramArray.sort();
//   console.log(anagramArray);




// for loop that loops through each letter of the word and pushes it into an array

//for loop that loops through each letter of the anagram and pushes it into an array

//use array.sort to sort both arrays into alphabetical border

//use if statement to say if both arrays are equal then return anagram

//else if not equal, check the next anagram





//
// anagram(word, anagram1, anagram2, anagram3);
