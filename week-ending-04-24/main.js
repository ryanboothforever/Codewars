// 8 Kyu: Given a number n, return the number of positive odd numbers below n, EASY!

    function oddCount(n) {
        arr= []
    for(let i=1; i < n; i++){
        if(!(i%2===0)){
            arr.push(i)
        }
    }
    if (!n || n===0){
        return undefined
    } else {
    return arr.length
    }
    }

// 8  Kyu: There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}

/* 8 Kyu: I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?*/

    function swapValues(arr) {
        let last = arr.pop();
        arr.unshift(last)
        return arr
    }

/*Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.*/

  function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];    
    let filteredBirds = birds.filter(bird => !geese.includes(bird))
    return filteredBirds
  }

/* 8 Kyu: All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

function feast(beast, dish){
    let first = beast.charAt(0);
    let last = beast.charAt(beast.length-1)
    return first === dish.charAt(0) && last === dish.charAt(dish.length-1) ? true : false
}

/* 8 Kyu: Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max) */

function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i+=step){
         arr.push(i)
    }
    if(arr[arr.length-1] > max){
        return arr.slice(0, arr.length-2 )
    } else {
    return arr
    }
}

/* 8 Kyu: write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers. */

function stringy(size){
    let stringOfNums = "1"
    let one = "1"
    let zero = "0"
    for(let i = 1; i < size; i++){
        if(i%2 === 1){
            stringOfNums += zero
        } else {
            stringOfNums += one
        }
    }
    return stringOfNums
}

// 8 Kyu: Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

function apple(x) {
  return parseInt(x ** 2) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

/* 8 Kyu: Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.*/

function mouthSize(animal) {
    animal = animal.toLowerCase()
  return animal === "alligator" ? "small" : "wide"
}

/* 8 Kyu: Task
Your task is to return the correct string using the Template String Feature. 
Input: Two Strings, no validation is needed.
Output: You must output a string containing the two strings with the word ```' are '```
*/

var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`
};

/* 8 Kyu: You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array. */

function twoSort(s) {
    let sortedArr = s.sort()
    let starredWord = sortedArr[0];
    starredWord = starredWord.split("").join("***")
    return starredWord
}

// 8 Kyu: Fix this var a = 123.toString();

    var a = (123).toString();
