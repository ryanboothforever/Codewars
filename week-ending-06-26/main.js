/* 8 Kyu: Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.*/
function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  } else if (n.toString().split("").pop() !== "0") {
    return n;
  } else {
    let arr = n.toString().split("").reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr.splice(0, i);
        break;
      }
    }
    return Number(arr.reverse().join(""));
  }
}
