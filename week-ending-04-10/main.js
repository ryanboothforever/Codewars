// 8 Kyu: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

const solution = (a,b) => { return a.length < b.length ? a+b+a : b+a+b }

// 8 Kyu: Seats left on bus
function enough(cap, on, wait) {
  let seatsLeft = cap - on;
  if (seatsLeft > wait) {
    return 0;
  } else {
    return wait - seatsLeft;
  }
}

// 8 Kyu: Welcome message in any language listed.



function greet(language) {
    let welcomes = {
      english: "Welcome",
      czech: "Vitejte",
      danish: "Velkomst",
      dutch: "Welkom",
      estonian: "Tere tulemast",
      finnish: "Tervetuloa",
      flemish: "Welgekomen",
      french: "Bienvenue",
      german: "Willkommen",
      irish: "Failte",
      italian: "Benvenuto",
      latvian: "Gaidits",
      lithuanian: "Laukiamas",
      polish: "Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso",
    }
    if(welcomes.hasOwnProperty(language)){
        return welcomes[language]
    }    else {
        return welcomes.english
    }
}

// 8 Kyu: Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

function functionisDivideBy(num, a, b){
    return num%a === 0  && num%b === 0 ? true : false
}

// 7 Kyu: Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, "");
}

/* 8 Kyu: You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around! Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail). Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics */

function fixTheMeerkat(arr) {
  return arr.reverse()
}