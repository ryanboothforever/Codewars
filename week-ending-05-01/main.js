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