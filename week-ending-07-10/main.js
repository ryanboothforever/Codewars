/* 8 Kyu: Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

function remove(s) {
  s = [...s];
  if (s[s.length - 1] === "!") {
    s.pop();
  }
  s = s.join("");
  return s;
}

/* 8 Kyu: Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.*/

function SubtractSum(n) {
  let fruits = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
    10: "pineapple",
    11: "cucumber",
    12: "pineapple",
    13: "cucumber",
    14: "orange",
    15: "grape",
    16: "orange",
    17: "grape",
    18: "apple",
    19: "grape",
    20: "cherry",
    21: "pear",
    22: "cherry",
    23: "pear",
    24: "kiwi",
    25: "banana",
    26: "kiwi",
    27: "apple",
    28: "melon",
    29: "banana",
    30: "melon",
    31: "pineapple",
    32: "melon",
    33: "pineapple",
    34: "cucumber",
    35: "orange",
    36: "apple",
    37: "orange",
    38: "grape",
    39: "orange",
    40: "grape",
    41: "cherry",
    42: "pear",
    43: "cherry",
    44: "pear",
    45: "apple",
    46: "pear",
    47: "kiwi",
    48: "banana",
    49: "kiwi",
    50: "banana",
    51: "melon",
    52: "pineapple",
    53: "melon",
    54: "apple",
    55: "cucumber",
    56: "pineapple",
    57: "cucumber",
    58: "orange",
    59: "cucumber",
    60: "orange",
    61: "grape",
    62: "cherry",
    63: "apple",
    64: "cherry",
    65: "pear",
    66: "cherry",
    67: "pear",
    68: "kiwi",
    69: "pear",
    70: "kiwi",
    71: "banana",
    72: "apple",
    73: "banana",
    74: "melon",
    75: "pineapple",
    76: "melon",
    77: "pineapple",
    78: "cucumber",
    79: "pineapple",
    80: "cucumber",
    81: "apple",
    82: "grape",
    83: "orange",
    84: "grape",
    85: "cherry",
    86: "grape",
    87: "cherry",
    88: "pear",
    89: "cherry",
    90: "apple",
    91: "kiwi",
    92: "banana",
    93: "kiwi",
    94: "banana",
    95: "melon",
    96: "banana",
    97: "melon",
    98: "pineapple",
    99: "apple",
    100: "pineapple",
  };
  while (n > 100) {
    let strNum = String(n);
    let arr = [...strNum];
    arr = arr.map((item) => Number(item));
    let numsAdded = arr.reduce((a, b) => {
      return a + b;
    }, 0);
  }
}

/* 8 Kyu: This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.*/

const solve = (x, y) => x / y;

/* 8 Kyu: Complete the function which converts a binary number (given as a string) to a decimal number.*/
function binToDec(bin) {
  return parseInt(bin, 2);
}

/* 8 Kyu: o help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.*/

function isDivisible(wallLength, pixelSize) {
  return wallLength % pixelSize === 0 ? true : false;
}

/* 8 Kyu: Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

function include(arr, item) {
  const match = arr.find((val) => val === item);
  return match === undefined ? false : true;
}

/* ? kyu: Compare the two arrays.  Return an array of how many times each element in the 2nd array appears in the first array.*/
function matchEachElementOfArrs(arr1, arr2) {
  return arr2.map((x) => arr1.filter((y) => y === x).length);
}

/* 8 Kyu: Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.*/

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

/* 8 Kyu: Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.*/

function sayHello(name, city, state) {
  let name1 = name.join(" ");
  return `Hello, ${name1}! Welcome to ${city}, ${state}!`;
}
