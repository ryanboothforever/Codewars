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

