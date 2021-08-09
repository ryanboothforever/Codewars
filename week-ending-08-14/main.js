/* 8 Kyu: Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."*/

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

/* 8 Kyu: Your task is simply to count the total number of lowercase letters in a string.*/

function lowercaseCount(str) {
  const regex = /[a-z]/g;
  let count = str.match(regex);
  return count === null ? 0 : count.length;
}

/* 8 Kyu: You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin === true) {
    sharkSpeed = sharkSpeed / 2;
  }
  if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}

/*8 Kyu: Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.*/

function isDigit(s) {
  return Number(s) ? true : false;
}

console.log(Number("5"));
