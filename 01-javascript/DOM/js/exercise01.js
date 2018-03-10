// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

console.log("connected");

let bodyNode = document.body;
bodyNode.style.fontFamily = 'Arial, sans-serif';

let nicknameSpan = document.getElementById("nickname");
nicknameSpan.innerHTML = "Taz";

document.getElementById("favorites").innerHTML = "Dogs, Candy, Pizza";

let hometownSpan = document.getElementById("hometown");
hometownSpan.innerHTML = "Adelaide";


const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}

var newImg = document.createElement('img');
newImg.src = 'images/me.png';
newImg.style.width = '200px';
bodyNode.appendChild(newImg);
