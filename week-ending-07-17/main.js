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

/* 7 Kyu: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/

function getMiddle(s) {
  let arr = s.split("");
  if (arr.length === 1) {
    return s;
  } else if (arr.length % 2 !== 0) {
    return arr.join("").charAt(arr.length / 2);
  } else {
    return arr.join("").slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
}
