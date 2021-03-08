//Write a function called repeat_str which repeats the given string src exactly count times.

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat_str(count,str){
  return str.repeat(count);  
}

/*We need a function that can transform a number into a string.
What ways of achieving this do you know ?

    Examples :
    numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`*/

function numberToString(num){
   return num.toString()
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
   if(bool === true){
       return "Yes"
   } else if (bool === false){
       return "No"
   }
}

/*Given an array of integers your solution should find the smallest integer.
For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => (a - b))
        let smallest = args.shift()
        return smallest
    }
}

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    const arr = Array.from(x)
    let count = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            count.push(x[i])
        }
    }
    return count.join("")
}
