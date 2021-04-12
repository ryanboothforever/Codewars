// 8 Kyu: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

const lovefunc = (f1, f2) => {
  return (f1 % 2 === 0 && f2 % 2 === 1) || (f1 % 2 === 1 && f2 % 2 === 0)
    ? true
    : false;
};

// 8 Kyu: Now you have to write a function that takes an argument and returns the square of it.

const square = (num) => {
  return num ** 2;
};


