/* 8 Kyu: Inspired by the development team at Vooza, write the function that accepts the name of a programmer, and returns the number of lightsabers owned by that person. The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0. Note: your function should have a default parameter. */

function howManyLightsabersDoYouOwn(name = "nobody") {
    name = name.toLocaleLowerCase()
    return name === "zach" ? 18 : 0;
}

/* 8 Kyu: You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */

const areaOrPerimeter = function (l, w) {
  if (l===w){
      return l**2
  } else {
      return 2*(l+w)
  }
};

/* 8 Kyu: Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
    if(month <= 3){
        return 1
    } else  if(month > 3 && month <=6){
        return 2
    } else if(month >6 && month <= 9){
        return 3
    } else {
        return 4
    }
};

// smaller code const quarterOf = m => Math.ceil(m/3);

/* 8 Kyu: Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount. */

function divide(weight) {
  if(weight === 2){
      return false
  } else if(weight%2===0){
      return true
  } else {
     return false
  }
}

/* 8 Kyu: Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5. */

function converter(mpg) {
    let gallonToKilo = mpg * 1.609344;
    let kiloPerLiter = gallonToKilo / 4.54609188;
    let kiloFixed = kiloPerLiter.toFixed(2)
    let kiloString = kiloFixed.toString()
    if(kiloString.endsWith('0')){
        return Number(kiloPerLiter.toFixed(1))
    } else {
    return Number(kiloPerLiter.toFixed(2))
    }
}

/* 8 Kyu: The code provided is supposed replace all the dots . in the specified String str with dashes - */

var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}
