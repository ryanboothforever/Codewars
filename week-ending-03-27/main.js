// 8 Kyu: Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x*i)
  }
  return z;
}

/* 8 Kyu:  There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!*/

function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((acc, rec)=> {
    return acc+rec;
  }, 0)
  return avg/classPoints.length > yourPoints ? false : true;
}
