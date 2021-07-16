/* 7 Kyu: Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.*/

function middleMe(N, X, Y) {
  if (N % 2 === 1) {
    return X;
  }
  let repeatedChar = Y.repeat(N);
  let repeatedArr = [...repeatedChar];
  let middle = N / 2;
  let addZ = repeatedArr.splice(middle, 0, "z");
  return repeatedArr.join("");
}

/* 7 Kyu: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/

function getMiddle(s) {
  let arr = s.split("");
  if (arr.length === 1) {
    return s;
  } else if (arr.length % 2 !== 0) {
    return arr.join("").charAt(arr.length / 2);
  } else {
    return arr.join("").slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
}

/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example: // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" // --> "alpha beta gamma delta alpha beta gamma delta"*/

function removeDuplicates(str) {
  let arr = str.split(" ");
  let newArr = arr.filter((el, i, array) => el != array[i - 1]).join(" ");
  return newArr;
}

/* //Create a function that returns the capitilization of a name. No Arrays, No REGEX! //leon ~> Leon //bob ~> Bob //John ~> John*/

function firstCap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.*/

function truncate(str, maxlength) {
  let arr = str.split("");
  if (arr.length < maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…";
  }
}

const checkForImposterSyndrome = (x) =>
  x.includes("can't interview yet") || x.includes("not ready");

/* Make a function that takes in a string and returns that string camelCased */

function camelCase(s) {
  return s
    .split(" ")
    .map((el, i) => {
      if (i === 0) {
        return el[0].toLowerCase() + el.slice(1);
      } else {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join("");
}

/* 7 Kyu: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

function highAndLow(numbers) {
  if (numbers.length === 1) {
    return `${numbers.toString()} 0`;
  }
  let arrOfNums = numbers
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => b - a);
  return `${arrOfNums[0].toString()} ${arrOfNums[
    arrOfNums.length - 1
  ].toString()}`;
}

// Getting a string of numbers, both positive and negative
// There could be only one number
// I am returning the highest and lowest numbers of that string, with the highest number being first
// Though they are numbers, they are being returned as strings

// I want to take the string of numbers and make them into actual numbers
// Then, we should sort those numbers from high to low in value
// Finally, we should take the highest and lowest value, and return them as a string

/* 6 Kyu: Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

function stringTransformer(str) {
  // Your code here
}

// I am taking in a string, and that string can have multiple words in it.  There won't be anything but letters involved.

// I am returning a string, and that string is the string that was passed in, but in reverse order and with alternating letter casing

//

/* Filter array of strings alphabetically */

let names = ["ryan", "david", "jill"];
const alpha = (n) =>
  n.reduce((cur, item) => {
    return cur < item ? cur : item;
  }, "\u0434");

/* Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

// we are taking in a string
// we are returnining an object with key value pairs, the key being the letter and the value being the number of times that letter is used in the string
// so if we have a string like "bob", we would return { "b": 2, "o": 1 }
// I want to split this string up to every character has it's own index.  Then I want to go through each letter, and
// if that letter has not yet been seen, add it to an object with an initial value of 1.  If it has been seen, do that value ++

function charCounter(str) {
  let arr = [...str.trim()];
  let occurances = {};
  for (let letter of arr) {
    if (letter === "") {
      occurances = {};
    } else if (occurances[letter]) {
      occurances[letter]++;
    } else {
      occurances[letter] = 1;
    }
  }
  return occurances;
}
