/* 8 Kyu: In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger. For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones. */

function findDifference(a, b) {
  a = a.reduce((x, y) => {
    return x * y;
  }, 1);
  b = b.reduce((x, y) => {
    return x * y;
  }, 1);
  return Math.abs(a - b);
}

/* 8 Kyu: Your goal is to return multiplication table for number that is always an integer from 1 to 10. */

function multiTable(number) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    if (i !== 10) {
      arr.push(`${[i]} * ${number} = ${number * [i]}\n`);
    } else {
      arr.push(`${[i]} * ${number} = ${number * [i]}`);
    }
  }
  return arr.join("");
}

/* 8 Kyu: The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used). If the score < 0, return 0. */

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      score += 0;
    } else if (array1[i] === array2[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }
  return score;
}

/* 8 Kyu: Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array like this:If the number has an integer square root, take this, otherwise square the number.
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null.
The input array should not be modified! */

function squareOrSquareRoot(array) {
  let squared = array.map((item) => {
    if (Math.sqrt(item) % 1 === 0) {
      return Math.sqrt(item);
    } else {
      return item ** 2;
    }
  });
  return squared;
}
