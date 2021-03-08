//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  let arr = x.split("");
  let newArr = arr.map((x) => (Number(x) >= 5 ? "1" : "0"));
  newArr = newArr.join("");
  return newArr;
}

// 8 Kyu: Implement a function which convert the given boolean value into its string representation.

const booleanToString = (b) => String(b);

// 8 Kyu: Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  const arr =  [];
    for(let i = 1; i<= n; i++){
      arr.unshift(i)
}
return arr
};

// 8 Kyu: Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  let result = x.reduce((acc, cur)=>{
    return acc*cur;
  },1)
  return result
}

//8 Kyu: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

function check(a, x){
  return a.includes(x)
}

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.*/

function DNAtoRNA(dna) {
  for(let i = 0; i<=dna.length; i++){
     dna = dna.replace("T", "U");
  }
  return dna;  
}

//8 Kyu: The function is not returning the correct values. Can you figure out why?

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}

/*Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.*/
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

/* 8 Kyu: Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection. For example: ["3:1", "2:2", "0:1", ...] Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
let arr = ["3:1", "2:2", "0:1"]

function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
