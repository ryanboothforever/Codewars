/* 8 Kyu: You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique! Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!*/

function nextId(ids) {
  let x = 0;
  while (ids.includes(x)) x++;
  return x;
}

/* 8 Kyu: Create a function called shortcut to remove all the lowercase vowels in a given string.*/

function shortcut(string) {
  return string.replace(/[aioue]/g, "");
}

/* 8 Kyu: You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:  As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.*/

function reverse(string) {
  const arr = string.split(" ");
  const newArr = [];
  arr.forEach((element) => {
    newArr.unshift(element);
  });
  return newArr.join(" ").trim();
}

/* 8 Kyu: Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated*/

let Ghost = function () {
  colorList = ["white", "yellow", "purple", "red"];
  color = colorList[Math.floor(Math.random() * 4)];
  constructor(color);
  {
    this.color = color;
  }
};

/* 8 Kyu: Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"*/

function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

/* 8 Kyu: Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];*/

//websites.push("codewars");

/* 8 Kyu: You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].*/

function differenceInAges(ages) {
  ages = ages.sort((a, b) => a - b);
  return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]];
}
//A faster solution
function ageDiff(ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages);
  diff = max - min;

  return [min, max, diff];
}

/* 8 Kyu: If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";*/

function chromosomeCheck(sperm) {
  return sperm.search(/y/gi) > 0
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

/* 8 Kyu: Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.*/

let toBinary = (n) => +n.toString(2);

/* 8 Kyu: Add the value "codewars" to the array websites/Websites 1,000 times.*/

var websites = [];
let i = 0;
while (i < 1000) {
  websites.push("codewars");
  i++;
}
