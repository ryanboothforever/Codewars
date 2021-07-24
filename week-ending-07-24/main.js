/* 8 Kyu: Write function that checks if a given string (case insensitive) is a palindrome.*/
// I am getting a string
// I am returning true/false boolean
// if the string is "Bob", I return true
// I need to make all letters the same case, check if they are the same both directions, and get my answer from there
function isPalindrome(x) {
  let newStr = x.toLowerCase();
  return [...newStr].reverse().join("") === newStr;
}

/* 6 Kyu: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/

function duplicateEncode(word) {
  let arr = word.split("");
  let occurances = {};
  for (let el of arr) {
    if (occurances[el.toLowerCase()]) {
      occurances[el.toLowerCase()]++;
    } else {
      occurances[el.toLowerCase()] = 1;
    }
  }
  let str;
  for (const letter in occurances) {
    if (occurances[letter] > 1) {
      console.log(occurances[letter]);
    } else {
      console.log(occurances[letter]);
    }
  }
  return str;
}

/* 8 Kyu: This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.*/

function derive(coefficient, exponent) {
  let total = String(coefficient * exponent);
  return `${total}x^${String(exponent - 1)}`;
}

/* 8 Kyu: Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:*/

function calculateTip(amount, rating) {
  let caseSense = rating.toLowerCase();
  if (caseSense === "excellent") {
    return Math.ceil(amount * 0.2);
  } else if (caseSense === "great") {
    return Math.ceil(amount * 0.15);
  } else if (caseSense === "good") {
    return Math.ceil(amount * 0.1);
  } else if (caseSense === "poor") {
    return Math.ceil(amount * 0.05);
  } else if (caseSense === "terrible") {
    return 0;
  } else {
    return "Rating not recognised";
  }
}

// Different solution

const TIPS = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

const calculateTips = (amount, rating) => {
  rating = rating.toLowerCase();

  return rating in TIPS
    ? Math.ceil(TIPS[rating] * amount)
    : "Rating not recognised";
};

/* 8 Kyu: Write a function that returns a string in which firstname is swapped with last name.*/

const nameShuffler = (str) => {
  const arr = str.split(" ");
  return `${arr[1]} ${arr[0]}`;
};

/* Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); */

const alphaByFinalChar = (x) => {
  let arr = x.split(" ").map((el) => el.toLowerCase());
  let newArr = arr.reduce((cur, acc) => {
    return cur.charAt(cur.length - 1) < acc.charAt(acc.length - 1) ? cur : acc;
  }, "\u0434");
  return newArr;
};
