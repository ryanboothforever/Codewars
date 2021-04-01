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

console.log(smash([" hi", "there"]));