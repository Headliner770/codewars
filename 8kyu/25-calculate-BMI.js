// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// ✔️ SOLUTION:
function bmi(weight, height) {
  const bmiResult = weight / height ** 2;
  if (bmiResult <= 18.5) return "Underweight";
  if (bmiResult <= 25.0) return "Normal";
  if (bmiResult <= 30.0) return "Overweight";
  if (bmiResult > 30.0) return "Obese";
}
console.log(bmi(80, 2));
