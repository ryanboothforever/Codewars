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
