/* 8 Kyu: Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

function remove(s) {
  s = [...s];
  if (s[s.length - 1] === "!") {
    s.pop();
  }
  s = s.join("");
  return s;
}
