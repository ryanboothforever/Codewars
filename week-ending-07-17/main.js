/* 7 Kyu: Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.*/

function middleMe(N, X, Y) {
  if (N % 2 === 1) {
    return X;
  }
  let repeatedChar = Y.repeat(N);
  let repeatedArr = [...repeatedChar];
  let middle = N / 2;
  let addZ = repeatedArr.splice(middle, 0, "z");
  return repeatedArr.join("");
}
