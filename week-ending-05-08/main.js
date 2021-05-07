/* 8 Kyu: For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */
function well(x) {
  let map = x.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  return map.good > 2
    ? "I smell a series!"
    : map.good == undefined
    ? "Fail!"
    : "Publish!";
}

/* 8 Kyu: Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1 */

function correct(string) {
  return string.replace(/0/gi, "O").replace(/1/gi, "I").replace(/5/gi, "S");
}

/* 8 Kyu: This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?*/
//removed "=" so it wouldn't compare
var a = "code";
var b = "wa.rs";
var name = a + b;

/* 8 Kyu: Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output) */

function sumStr(a, b) {
  let total = Number(a) + Number(b);
  return String(total);
}

/* 8 Kyu: Write a function that given a floor in the american system returns the floor in the european system. */

function getRealFloor(n) {
  if (n >= 13) {
    return n - 2;
  } else if (n <= 0) {
    return n;
  } else {
    return n - 1;
  }
}

/* 8 Kyu: Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity. */

const flip = (d, a) => {
  return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};
