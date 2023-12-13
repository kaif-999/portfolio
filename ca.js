//function calculateCalories() {
//  const age = parseInt(document.getElementById('age').value);
//  const gender = document.getElementById('gender').value;
//  const weight = parseFloat(document.getElementById('weight').value);
//  const height = parseFloat(document.getElementById('height').value);
//  const activityLevel = document.getElementById('activity-level').value;
//
//  if (isNaN(age) || isNaN(weight) || isNaN(height)) {
//    alert('Please enter valid numeric values for age, weight, and height.');
//    return;
//  }
//
//  let bmr;
//
//  if (gender === 'male') {
//    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//  } else if (gender === 'female') {
//    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
//  } else {
//    alert('Please select a valid gender.');
//    return;
//  }
//
//  let calories;
//
//  switch (activityLevel) {
//    case 'sedentary':
//      calories = bmr * 1.2;
//      break;
//    case 'lightly-active':
//      calories = bmr * 1.375;
//      break;
//    case 'moderately-active':
//      calories = bmr * 1.55;
//      break;
//    case 'very-active':
//      calories = bmr * 1.725;
//      break;
//    default:
//      alert('Please select a valid activity level.');
//      return;
//  }
//
//  document.getElementById('result').innerHTML = `Your estimated daily calorie needs: ${calories.toFixed(2)} calories`;
//}

function calculateCalories() {
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = document.getElementById('activity-level').value;

  if (isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert('Please enter valid numeric values for age, weight, and height.');
    return;
  }

  let bmr;

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === 'female') {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    alert('Please select a valid gender.');
    return;
  }

  let calories;

  switch (activityLevel) {
    case 'sedentary':
      calories = bmr * 1.2;
      break;
    case 'lightly-active':
      calories = bmr * 1.375;
      break;
    case 'moderately-active':
      calories = bmr * 1.55;
      break;
    case 'very-active':
      calories = bmr * 1.725;
      break;
    default:
      alert('Please select a valid activity level.');
      return;
  }

  document.getElementById('result').innerHTML = `Your estimated daily calorie needs: ${calories.toFixed(2)} calories`;

  // Suggest Caloric Intake for Muscle Building, Fat Loss, Maintenance, and Lean Muscle Building
  const muscleBuildingCalories = calories * 1.1; // Suggesting a 10% surplus for muscle building
  const fatLossCalories = calories * 0.9; // Suggesting a 10% deficit for fat loss
  const maintenanceCalories = calories;
  const leanMuscleBuildingCalories = maintenanceCalories + (muscleBuildingCalories - maintenanceCalories) * 0.5; // Suggesting a 50% surplus for lean muscle building

  document.getElementById('muscle-building').innerHTML = `For Muscle Building: ${muscleBuildingCalories.toFixed(2)} calories`;
  document.getElementById('fat-loss').innerHTML = `For Fat Loss: ${fatLossCalories.toFixed(2)} calories`;
  document.getElementById('maintenance').innerHTML = `For Maintenance: ${maintenanceCalories.toFixed(2)} calories`;
  document.getElementById('lean-muscle-building').innerHTML = `For Lean Muscle Building: ${leanMuscleBuildingCalories.toFixed(2)} calories`;
}
