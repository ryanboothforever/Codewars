// 8 Kyu:  Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
  let re = new RegExp(letter, "gi");
  let matching = str.match(re);
  return matching ? matching.length : 0;
}

/* 8 Kyu: Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise. Make a xor function. */

function xor(a, b) {
  return a !== b ? true : false;
}

/* 8 Kyu: While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below. The function receives one parameter health which will always be a whole number between -10 and 10.*/

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

/* 8 Kyu: In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times. Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position. */

function move(position, roll) {
  return position + roll * 2;
}

/* 8 Kyu: Return the Nth Even Number */

function nthEven(n) {
  let count = [];
  for (let i = 0; i <= n; i++) {
    if (n === 1) {
      return 0;
    } else if (i % 2 === 0) {
      count.push(i);
    }
  }
  return;
}
// Come back to this later

/* 8 Kyu: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers. Implement a function that checks if something is a palindrome.*/

function isPalindrome(line) {
  if (Number(line)) {
    let newArr = String(line)
      .split("")
      .reverse()
      .map((line) => {
        return line;
      });
    newArr = newArr.join("");
    return Number(newArr) === line ? true : false;
  } else {
    return line.split("").reverse().join("") === line ? true : false;
  }
}

/* 8 Kyu: Write a function which takes a number and returns the corresponding ASCII char for that value.*/

function getChar(c) {
  return String.fromCharCode(c);
}

/* 8 Kyu: Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.*/

function seatsInTheater(nCols, nRows, col, row) {
  let colTotal = nCols - (col - 1);
  let rowTotal = nRows - row;
  return colTotal * rowTotal;
}

/* 8 Kyu: Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str) {
  return str.slice(1, -1);
}

/* 8 Kyu: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.*/

function between(a, b) {
  let list = [];
  for (let i = a; i <= b; i++) {
    list.push(i);
  }
  return list;
}

/* 8 Kyu: This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.*/

function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

/* 8 Kyu: Find the errors in the code to get the celsius converter working properly.*/

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c <= 0) {
    return c + " is freezing temperature";
  } else {
    return c + " is above freezing temperature";
  }
}

function convertToCelsius(temperature) {
  var celsius = ((temperature - 32) * 5) / 9;
  return celsius;
}

/* 8 Kyu: Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.*/

function distinct(a) {
  return [...new Set(a)];
}

/* 8 Kyu: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).*/

function hello(name = "World") {
  if (name === "") {
    return "Hello, World!";
  } else {
    let person = name.toLowerCase();
    person = [...person].slice(0, 1).join("").toUpperCase() + person.slice(1);
    return `Hello, ${person}!`;
  }
}

/* 8 Kyu: Write a function that returns the total surface area and volume of a box as an array: [area, volume]*/

function getSize(width, height, depth) {
  const area =
    2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);
  const volume = width * height * depth;
  return [area, volume];
}

/* 8 Kyu; In this kata you will create a function that takes in a list and returns a list with the reverse order.*/

function reverseList(list) {
  return list.reverse();
}
