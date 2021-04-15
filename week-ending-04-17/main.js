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