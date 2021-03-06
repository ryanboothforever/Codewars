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

/* 8 Kyu: Remove all exclamation marks from the end of sentence.*/

function remove(s) {
  let arr = s.split("");

  for (char of arr) {
    if (arr[arr.length - 1] === "!") {
      arr.pop();
    }
  }
  return arr.join("");
}

/* 8 Kyu: Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'*/

function usdcny(usd) {
  let cny = usd * 6.75;
  return `${cny.toFixed(2)} Chinese Yuan`;
}

/* 8 Kyu:  Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.*/

function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}

/* 8 Kyu: This function should return an object, but it's not doing what's intended. What's wrong?*/

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}

/* 7 Kyu: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n) {
  const arr = String(n).split("");
  return Number(arr.sort().reverse().join(""));
}
console.log(descendingOrder(0));

// Taking in a number
// returning the highest possible number
// 105 returns 510
// I want to take in a number, split it up, sort it so the highest number is first and the numbers are arranged in descending order, combine the numbers again and return it
