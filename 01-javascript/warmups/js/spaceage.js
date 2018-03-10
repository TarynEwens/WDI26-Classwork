// Space Age Warmup
// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
//
// There are 31557600 seconds in an Earth year.
//
// Bonus:
// Have the option of either returning the ages on all planets, or any of the above planets individually.

const earthSeconds = 31557600;
const earthDays = 365.25

let spacey = {
  let ratios = {
    "earth": 1,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune":164.79132,
  },
  findAge: function(seconds, planet) {
    conversionRate = ratios[planet];
    let age = seconds / earthSeconds / conversionRate;
    console.log(`You are ${ age } years old on ${ planet }.`);
  },
  showAllAges = function() {
    for (let [key, value] of Object.entries(ratios)) {
      console.log(findAge( key, ( 100000000)));
    }
  }
};

// findAge(1000000000, "earth", "mercury", "venus");
// findAge(1000000000, "mercury");
// findAge(1000000000, "venus");
// findAge(1000000000, "mars");
// findAge(1000000000, "jupiter");
// findAge(1000000000, "saturn");
// findAge(1000000000, "uranus");
// findAge(1000000000, "neptune");
//
// showAllAges();
