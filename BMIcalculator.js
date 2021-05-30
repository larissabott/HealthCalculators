function bmiCalculator (weight, height) //uses metric system: weight in kilograms & height in meters
{
   var bmi = Math.round(weight / (height*height));

    if (bmi < 18.5) {
        return("Your BMI is " + bmi + ", so you are underweight.");
    }
    if (bmi > 18.6 && bmi <= 24.9) {
       return("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    if (bmi > 24.9 && bmi <= 29.9) {
       return("Your BMI is " + bmi + ", so you are overweight.");
    }
    if (bmi > 29.9 && bmi <= 34.9) {
       return("Your BMI is " + bmi + ", so you are obese.");
    }
    if (bmi > 34.9) {
       return("Your BMI is " + bmi + ", so you are extremely obese.");
    }
} bmiCalculator(weight, height);
