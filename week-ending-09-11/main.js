/* 8 Kyu: You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".*/

function shortenToDate(longDate) {
  return longDate.substr(0, longDate.indexOf(","));
}

/* 8 Kyu: Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.*/

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = snoopy.bark;

/* 8 Kyu: You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!*/

items = [];
items.push({ a: "b", c: "d" });
