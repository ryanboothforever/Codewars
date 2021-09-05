/* 8 Kyu: You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.*/

function isLockNessMonster(s) {
  if (s.match("tree fiddy") || s.match("3.50") || s.match("three fifty")) {
    return true;
  } else {
    return false;
  }
}

/* 8 Kyu: Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!*/

function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

/* 8 Kyu: misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3*/

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"

  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

/* 8 Kyu: Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.*/

const combineNames = (first, last) => {
  return `${first} ${last}`;
};

/* 8 Kyu: Time to test your basic knowledge in functions! Return the odds from a list:[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []*/

function odds(values) {
  return values.filter((el) => el % 2 !== 0);
}

/* 8 Kyu: Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.*/

function calculateAge(yearBorn, yearCount) {
  if (yearBorn < yearCount) {
    return yearCount - yearBorn === 1
      ? "You are 1 year old."
      : `You are ${yearCount - yearBorn} years old.`;
  } else if (yearBorn > yearCount) {
    return yearBorn - yearCount === 1
      ? "You will be born in 1 year."
      : `You will be born in ${yearBorn - yearCount} years.`;
  } else {
    return "You were born this very year!";
  }
}

/* 8 Kyu: Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.*/

function parseF(s) {
  if (Number(s) != parseFloat(s)) {
    return null;
  } else {
    return parseFloat(s);
  }
}

/* 8 Kyu: You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.*/

function calculator(a, b, sign) {
  const signs = ["/", "*", "+", "-"];
  if (isNaN(a) || isNaN(b)) {
    return "unknown value";
  }
  if (!signs.includes(sign)) {
    return "unknown value";
  } else {
    return eval(a + sign + b);
  }
}

/* 8 Kyu: if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"*/

function leo(oscar) {
  if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar > 88) {
    return "Leo got one already!";
  } else {
    return "When will you give Leo an Oscar?";
  }
}

/* 8 Kyu: Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0*/

function closeCompare(a, b, margin) {}
