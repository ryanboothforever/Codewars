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
