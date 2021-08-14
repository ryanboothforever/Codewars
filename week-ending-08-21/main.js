/* 8 Kyu: Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"*/

function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

/*Given a phrase, reverse the order of the characters of each word.

describe("Reverse Words", () => {
 it("Should reverse words", () => {
  assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
 });
});

No Reverse Method! Unless that is your brute force...*/

function reverseWordsInPlace(str) {
  const newArr = [];
  const arr = str.split(" ").forEach((w) => {
    let currentWord = "";
    for (let i = w.length - 1; i >= 0; i--) {
      currentWord += w[i];
    }
    newArr.push(currentWord);
  });
  return newArr.join(" ");
}

/* 8 Kyu: Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.*/
