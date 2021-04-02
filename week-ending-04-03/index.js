// 8 Kyu: Write function bmi that calculates body mass index (bmi = weight / height2).

const bmiCalc = (weight, height) => {
    const bmi =  weight / (height**2)
    if(bmi <= 18.5){
        return "Underweight"
    } else if(bmi <= 25.0){
        return "Normal"
    } else if(bmi <= 30.0){
        return "Overweight"
    } else {
        return "Obese"
    }
}

// 8Kyu: Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// 8 Kyu: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(" ").trim()
};

// 8 Kyu: Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

const setAlarm = (employed, vacation) => {
    return employed === true && vacation === false ? true : false
}

// 8 Kyu: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumMix(x){
    x = x.map(item => parseInt(item))
    return x.reduce((acc, res) => {
       return acc + res
    }, 0)
}

// 8 Kyu: Implement a function which multiplies two numbers.
const multiply = (x, y) => {return x*y}

// 8 Kyu: Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array. E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. If the whole array is consecutive then return null. The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

// 8 Kyu: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let avg = (s1+s2+s3) / 3
  if(avg >= 90){
      return 'A'
  } else if(avg >= 80 && avg < 90){
      return 'B'
  } else if(avg >= 70 && avg < 80){
      return 'C'
  } else if(avg >= 60 && avg < 70){
      return 'D'
  } else {
      return 'F'
  }

}
