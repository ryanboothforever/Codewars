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
