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

