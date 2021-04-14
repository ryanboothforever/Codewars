// 8 Kyu: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

const lovefunc = (f1, f2) => {
  return (f1 % 2 === 0 && f2 % 2 === 1) || (f1 % 2 === 1 && f2 % 2 === 0)
    ? true
    : false;
};

// 8 Kyu: Now you have to write a function that takes an argument and returns the square of it.

const square = (num) => {
  return num ** 2;
};

// 8 Kyu: You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(arr, n){
  if(n < arr.length){
    return arr[n]**n;
  } else {
    return -1
  }
}

// 8 Kyu: Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
  let newArr = arr.filter((item, i) => {
    if (item[i]===0){
      return item
    }
  else if(i%2===0){
     return item
   }
  })
  return newArr
}

// 8 Kyu: Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".  The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct. Upper or lower case letter does not matter -- "eNglisH" is also correct.  Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
  let english = "english"
  sentence = sentence.toLowerCase()
  return sentence.includes(english) ? true : false;
}

//Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence. If n == 0 return an empty sequence []
function first(arr, n=1) {
  let newArr = [];
  if(arr.length < n){
    n = arr.length
  }
  for (let i = 0; i < n; i++) {
     newArr.push(arr[i]);
  }
  if (n === 0){
    return [];
  } else {
    return newArr;
  }
}

// Much better solution
const first1 = (arr, n = 1) => arr.slice(0, n);

// 8 Kyu: Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him. Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :) If Alex gets 10 or more hoops, return the string "Great, now move on to tricks". If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}

/* 8 Kyu: Ask a small girl - "How old are you?". She always says strange things... Lets help her! For correct answer program should return int from 0 to 9. Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.*/

function getAge(inputString) {
  let arr = inputString.split(" ")
  let newArr = arr.filter(item => parseInt(item))
  let theNum = newArr.join("")
  theNum = +theNum
  return theNum
}

/* 8 Kyu: Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array. */

function take(arr, n){
  newArr= []
  if(arr.length===0){
    return newArr
  } if (arr.length < n) {
    n = arr.length
  } 
  for(let i = 0; i<n; i++){
    newArr.push(arr[i])
  }
  return newArr
}

/* 8 Kyu: Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = sonYearsOld*2
  let difference = dadYearsOld - double
  let posDiff = Math.abs(difference)
  if(difference >= 0){
    return difference
  } else {
    return posDiff
  }
}

/* 8 Kyu: You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.*/

function updateLight(current) {
  let colors = ["green", "yellow", "red"]
  for(let i=0; i<colors.length;i++){
    if (colors[i]===colors[colors.length-1]) {
      return colors[0];
    }
    if(current === colors[i]){
      return colors[i+1]
    }
  }
}

/* 8 Kyu: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive). */

function powersOfTwo(n) {
  const arr = []
  for(let i = 0; i<=n; i++){
    arr.push(2**[i])
  }
  return arr;
}

// 8 Kyu: Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {
  if(old<14){
    return "drink toddy"
  } else if(old<18 && old>=14){
    return "drink coke"
  } else if (old>=18 && old<21){
    return "drink beer"
  } else {
    return "drink whisky"
  }
};

/* 8 Kyu: The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.*/

function dutyFree(normPrice, discount, hol) {
  let priceForBottles;
  if(discount >= 10){
    priceForBottles = normPrice * ("." + discount)
  } else {
    priceForBottles = normPrice * (".0" + discount);
  }
  return Math.floor(hol/priceForBottles)
}

/* 8 Kyu: This is the first step to understanding FizzBuzz. Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value. Your expected output is an array of positive integers from 1 to n (inclusive). Your job is to write an algorithm that gets you from the input to the output.*/

function preFizz(n) {
  arr = []
  if(n.length === 0){
    return []
  } else {
  for(let i = 1; i<=n; i++){
    arr.push(i)
  }
}
return arr
}

console.log(preFizz("woof"));