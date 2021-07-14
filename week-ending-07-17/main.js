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

/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example: // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" // --> "alpha beta gamma delta alpha beta gamma delta"*/

function removeDuplicates(str) {
  let arr = str.split(" ");
  let newArr = arr.filter((el, i, array) => el != array[i - 1]).join(" ");
  return newArr;
}

/* //Create a function that returns the capitilization of a name. No Arrays, No REGEX! //leon ~> Leon //bob ~> Bob //John ~> John*/

function firstCap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.*/

function truncate(str, maxlength) {
  let arr = str.split("");
  if (arr.length < maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…";
  }
}

const checkForImposterSyndrome = (x) =>
  x.includes("can't interview yet") || x.includes("not ready");

/* Make a function that takes in a string and returns that string camelCased */

function camelCase(s) {
  return s
    .split(" ")
    .map((el, i) => {
      if (i === 0) {
        return el[0].toLowerCase() + el.slice(1);
      } else {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join("");
}
