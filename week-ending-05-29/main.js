/* 8 Kyu: create a function that will take a float and return the amount formatting in dollars and cents. */

function formatMoney(amount) {
  amount = String(amount);
  let dollar = "$";
  let cents = amount.substring(amount.indexOf(".") + 1);
  if (amount % 1 == 0) {
    return (amount = dollar.concat(amount.concat(".00")));
  } else if (cents.length < 2) {
    return (amount = dollar.concat(amount.concat("0")));
  } else {
    return dollar.concat(amount);
  }
}

// another way
//"$".concat(amount).toFixed(2);

/* 8 Kyu: Complete the function that receives as input a string, and produces outputs according to the following table... */

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
  }
}
console.log(getDrinkByProfession("Rapper"));
