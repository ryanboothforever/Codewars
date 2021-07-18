/* 8 Kyu: Write function that checks if a given string (case insensitive) is a palindrome.*/
// I am getting a string
// I am returning true/false boolean
// if the string is "Bob", I return true
// I need to make all letters the same case, check if they are the same both directions, and get my answer from there
function isPalindrome(x) {
  let newStr = x.toLowerCase();
  return [...newStr].reverse().join("") === newStr;
}
