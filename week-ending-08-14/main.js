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
