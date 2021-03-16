//8 Kyu: Write a function which converts the input string to uppercase.
function makeUppercase(str){
    return str.toUpperCase();
}

//8 Kyu: Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!). (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

function sumArray(array) {
  if (array == null) {
    return 0;
  }
  if (array.length <= 2) {
    return 0;
  } else {
    array = array.sort((a, b) => a - b);
    array = array.slice(1, -1);
    let theSum = array.reduce((acc, res) => {
      return acc + res;
    });
    return theSum;
  }
}