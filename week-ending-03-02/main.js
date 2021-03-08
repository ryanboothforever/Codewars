/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.*/

function past(h, m, s){
  return s*1000 + m*60_000 + h*3_600_000
}

/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.*/

function monkeyCount(n) {
    const arr = []
    for(let i = 1; i<=n; i++){
        arr.push(i)
    }
    return arr
}

/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?". SQL: return results in a column named greeting. [Make sure you type the exact thing I wrote or the program may not execute properly] */

function greet(name){
 return `Hello, ${name} how are you doing today?`
}

/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.*/

function sum (numbers) {
    if(numbers == []){
        return 0
    }
     return numbers.reduce((acc,val)=>{
        return acc + val;
     }, 0)
};

/*A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

function hero(bullets, dragons){
    if(bullets >= dragons*2){
        return true
    } else{
        return false
    }
}

/**I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
   return arr1.reduce((acc,val)=>acc+val) + arr2.reduce((acc,val)=>acc+val);
}

/**It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust). */

function bonusTime(salary, bonus) {
    let lbs = "\u00A3"
    if(bonus ==true){
        salary=salary*10
        return lbs.concat(salary)
    }else{
        return lbs.concat(salary)
    }
}

//Better code
// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

/**Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings: */

const areYouPlayingBanjo = (nme) => (nme.startsWith("R")|| nme.startsWith("r") ? `${nme} plays banjo` : `${nme} does not play banjo`)

//Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0
function find_average(array) {
  return  array.length>=1 ? array.reduce((arr, cur)=> (arr+cur), 0) / array.length : 0;
}
