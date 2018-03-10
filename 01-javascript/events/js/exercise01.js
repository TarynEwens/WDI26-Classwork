// Exercises: Events
// Mad Libs
// Start with this webpage, which has several input elements and a button:
//
// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")




const makeMadLib = function() {
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;

  const story = `${ person } went to the store to buy ${ adjective } ${ noun }s.`;

  document.getElementById('story').innerHTML = story;
  };

const libButton = document.querySelector('#lib-button');
libButton.addEventListener('click', makeMadLib);
