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
console.log(multiTable(5));
