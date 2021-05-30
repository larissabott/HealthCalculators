function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}
var bmi = bmiCalculator(weight, height);
consol.log(bmi); //weight in kilograms, height in meters
