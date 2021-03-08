//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  let arr = x.split("");
  let newArr = arr.map((x) => (Number(x) >= 5 ? "1" : "0"));
  newArr = newArr.join("");
  return newArr;
}