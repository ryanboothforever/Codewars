/* 8 Kyu: Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.*/
function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  } else if (n.toString().split("").pop() !== "0") {
    return n;
  } else {
    let arr = n.toString().split("").reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr.splice(0, i);
        break;
      }
    }
    return Number(arr.reverse().join(""));
  }
}
/* Create a function.  Parameter is a word. Check to use if word is a palendrome.*/

function frontToBack(word) {
  let reversed = [...word].reverse().join("");
  return reversed === word;
}

/* 8 Kyu: Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.*/

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Clause" && password === "Ho Ho Ho!";
};

/* 8 Kyu: Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.*/

function finalGrade(exam, projects) {
  if (projects > 10 || exam >= 91) {
    return 100;
  } else if (exam > 90 && projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

/* 8 Kyu: We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun. You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something). All values will be positive integers or floats, or zero.*/

function plural(n) {
  return n !== 1;
}

/* 8 Kyu: Make a function */
function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}

/* 8 Kyu: Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel. */
function replace(s) {
  let regEx = /[aioue]/gi;
  let replaced = s.replace(regEx, "!");
  return replaced;
}

/* 8 Kyu: A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them. */
function main(verb, noun) {
  return verb + noun;
}

/* 8 Kyu: I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number. */

function addFive(num) {
  var total = num + 5;
  return total;
}
