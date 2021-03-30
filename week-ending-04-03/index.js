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