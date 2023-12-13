function calculateDiet() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activityLevel = document.getElementById('activity-level').value;
  const goal = document.getElementById('goal').value;

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert('Please enter valid numeric values for weight, height, and age.');
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

  let maintenanceCalories;

  switch (activityLevel) {
    case 'sedentary':
      maintenanceCalories = bmr * 1.2;
      break;
    case 'lightly-active':
      maintenanceCalories = bmr * 1.375;
      break;
    case 'moderately-active':
      maintenanceCalories = bmr * 1.55;
      break;
    case 'very-active':
      maintenanceCalories = bmr * 1.725;
      break;
    default:
      alert('Please select a valid activity level.');
      return;
  }

  let dietPlan;

  switch (goal) {
    case 'weight-loss':
      dietPlan = calculateWeightLossDiet(maintenanceCalories);
      break;
    case 'maintenance':
      dietPlan = calculateMaintenanceDiet(maintenanceCalories);
      break;
    case 'muscle-gain':
      dietPlan = calculateMuscleGainDiet(maintenanceCalories);
      break;
    default:
      alert('Please select a valid goal.');
      return;
  }

  document.getElementById('result').innerHTML = dietPlan;
}

function calculateWeightLossDiet(maintenanceCalories) {
  const calorieDeficit = 500; // 500 calories deficit for weight loss
  const dailyCalories = maintenanceCalories - calorieDeficit;
  const proteinPercentage = 0.3; // 30% of total calories from protein
  const fatPercentage = 0.25; // 25% of total calories from fat
  const carbPercentage = 1 - proteinPercentage - fatPercentage; // Remaining calories from carbohydrates

  const proteinGrams = (proteinPercentage * dailyCalories) / 4; // 4 calories per gram of protein
  const fatGrams = (fatPercentage * dailyCalories) / 9; // 9 calories per gram of fat
  const carbGrams = (carbPercentage * dailyCalories) / 4; // 4 calories per gram of carbohydrate

  return `
    <h3>Weight Loss Diet Plan</h3>
    <p>Daily Calories: ${dailyCalories.toFixed(2)}</p>
    <p>Protein: ${proteinGrams.toFixed(2)}g</p>
    <p>Fat: ${fatGrams.toFixed(2)}g</p>
    <p>Carbohydrates: ${carbGrams.toFixed(2)}g</p>
  `;
}

function calculateMaintenanceDiet(maintenanceCalories) {
  const proteinPercentage = 0.3; // 30% of total calories from protein
  const fatPercentage = 0.25; // 25% of total calories from fat
  const carbPercentage = 1 - proteinPercentage - fatPercentage; // Remaining calories from carbohydrates

  const proteinGrams = (proteinPercentage * maintenanceCalories) / 4; // 4 calories per gram of protein
  const fatGrams = (fatPercentage * maintenanceCalories) / 9; // 9 calories per gram of fat
  const carbGrams = (carbPercentage * maintenanceCalories) / 4; // 4 calories per gram of carbohydrate

  return `
    <h3>Maintenance Diet Plan</h3>
    <p>Daily Calories: ${maintenanceCalories.toFixed(2)}</p>
    <p>Protein: ${proteinGrams.toFixed(2)}g</p>
    <p>Fat: ${fatGrams.toFixed(2)}g</p>
    <p>Carbohydrates: ${carbGrams.toFixed(2)}g</p>
  `;
}

function calculateMuscleGainDiet(maintenanceCalories) {
  const calorieSurplus = 500; // 500 calories surplus for muscle gain
  const dailyCalories = maintenanceCalories + calorieSurplus;
  const proteinPercentage = 0.3; // 30% of total calories from protein
  const fatPercentage = 0.25; // 25% of total calories from fat
  const carbPercentage = 1 - proteinPercentage - fatPercentage; // Remaining calories from carbohydrates

  const proteinGrams = (proteinPercentage * dailyCalories) / 4; // 4 calories per gram of protein
  const fatGrams = (fatPercentage * dailyCalories) / 9; // 9 calories per gram of fat
  const carbGrams = (carbPercentage * dailyCalories) / 4; // 4 calories per gram of carbohydrate

  return `
    <h3>Muscle Gain Diet Plan</h3>
    <p>Daily Calories: ${dailyCalories.toFixed(2)}</p>
    <p>Protein: ${proteinGrams.toFixed(2)}g</p>
    <p>Fat: ${fatGrams.toFixed(2)}g</p>
    <p>Carbohydrates: ${carbGrams.toFixed(2)}g</p>
  `;
}
