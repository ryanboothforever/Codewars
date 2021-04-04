// 8 Kyu: Write function bmi that calculates body mass index (bmi = weight / height2).

const bmiCalc = (weight, height) => {
    const bmi =  weight / (height**2)
    if(bmi <= 18.5){
        return "Underweight"
    } else if(bmi <= 25.0){
        return "Normal"
    } else if(bmi <= 30.0){
        return "Overweight"
    } else {
        return "Obese"
    }
}

// 8Kyu: Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// 8 Kyu: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(" ").trim()
};

// 8 Kyu: Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

const setAlarm = (employed, vacation) => {
    return employed === true && vacation === false ? true : false
}

// 8 Kyu: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumMix(x){
    x = x.map(item => parseInt(item))
    return x.reduce((acc, res) => {
       return acc + res
    }, 0)
}

// 8 Kyu: Implement a function which multiplies two numbers.
const multiply = (x, y) => {return x*y}

// 8 Kyu: Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array. E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. If the whole array is consecutive then return null. The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

// 8 Kyu: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let avg = (s1+s2+s3) / 3
  if(avg >= 90){
      return 'A'
  } else if(avg >= 80 && avg < 90){
      return 'B'
  } else if(avg >= 70 && avg < 80){
      return 'C'
  } else if(avg >= 60 && avg < 70){
      return 'D'
  } else {
      return 'F'
  }

}

// 5 Kyu: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// 8 Kyu: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num) {
    let count = "";
        for(let i = 1; i<= num; i++){
            count +=`${i} sheep...`
  }
  return count
}
// 8 Kyu: Turn a string into an array

function stringToArray(string) {
  return string.split(" ");
}

// 8 Kyu: The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(h) {
  return Math.floor(h * 27.778);
}

// 8 Kyu: Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message:

const greet = (personName, owner) => {
    return personName === owner ? 'Hello boss' : 'Hello guest'
}

// 8 Kyu: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().  In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}

// 8 Kyu: You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180-a-b;
}

/* 8 Kyu: Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues. */

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// 7 Kyu: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let regex = /[aioue]/gi;
  let found = str.match(regex);

  if (!found) {
    return 0;
  } else {
    return found.length;
  }
}

// 8 Kyu: Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// 8 Kyu: Rock, paper, scissors
const rps = (p1, p2) => {
    if(p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock" || p1 === "scissors" && p2 === "paper"){
        return "Player 1 won!"
    } else if(p2 === "rock" && p1 === "scissors" || p2 === "paper" && p1 === "rock" || p2 === "scissors" && p1 === "paper"){
        return "Player 2 won!"
    } else {
        return "Draw!"
    }
};