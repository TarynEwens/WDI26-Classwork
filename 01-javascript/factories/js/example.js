// Factories /////////////////////////////////////////

// n; name, a: age, f: furColor
const catFactory = function(n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log(`meow, my name is: ${ this.name }`);
    },
    eat: function (food) {
      console.log(`Yum I love to eat ${ food }`);
    },
    bio: function () {
      console.log(`My name is ${ this.name }, I am ${ this.age } years old with ${ this.furColor } colored fur.`)
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
    // {name: 'Angel', age: 18, furColor: 'grey'},
    // {name: 'Evil', age: 14, furColor: 'red'},
    // {name: 'Meh', age: 12, furColro: 'white'}
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log(`The cat named ${ cuteCats[i].name } has ${ cuteCats[i].furColor } fur.`);
}

console.log("----------------");


// Prototypal Inheritence //////////////////////////////////
// you really don't need to understand this yet

//prototype: Cat
// Cooper is an instance of Cat

// Cat constructor
const Cat = function (n, a, f) {
  this.name = n;
  this.age = a;
  this.furColor = f;

  this.meow = function () {
    console.log(`Meow, my name is ${ this.name }.`);
  };
}

const cat1 = new Cat('Cooper', 2, 'tabby');
const cat2 = new Cat('Audrey', 2, 'tabby');

Cat.prototype.eat = function (food) {
  console.log(`Yum I love to eat ${ food }.`)
}

cat1.eat('hotdogs');
cat2.eat('bobby pins');

// to call function - const cooper = new Cat('Cooper', 2, 'tabby');

// something else I don't understand - Cat.prototype.eat = function (food) { console.log(`Yum I love to eat ${ food }!`); };
