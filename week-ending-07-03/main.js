/* 8 Kyu: You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique! Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!*/

function nextId(ids) {
  let x = 0;
  while (ids.includes(x)) x++;
  return x;
}

/* 8 Kyu: Create a function called shortcut to remove all the lowercase vowels in a given string.*/

function shortcut(string) {
  return string.replace(/[aioue]/g, "");
}

/* 8 Kyu: You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:  As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.*/

function reverse(string) {
  const arr = string.split(" ");
  const newArr = [];
  arr.forEach((element) => {
    newArr.unshift(element);
  });
  return newArr.join(" ").trim();
}

/* 8 Kyu: Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated*/

let Ghost = function () {
  colorList = ["white", "yellow", "purple", "red"];
  color = colorList[Math.floor(Math.random() * 4)];
  constructor(color);
  {
    this.color = color;
  }
};
