function generateDietChart() {
  const goal = document.getElementById('goal').value;

  let dietChart;

  switch (goal) {
    case 'weight-loss':
      dietChart = generateWeightLossDietChart();
      break;
    case 'maintenance':
      dietChart = generateMaintenanceDietChart();
      break;
    case 'muscle-gain':
      dietChart = generateMuscleGainDietChart();
      break;
    default:
      alert('Please select a valid goal.');
      return;
  }

  document.getElementById('diet-chart').innerHTML = dietChart;
}

function generateWeightLossDietChart() {
  return `
    <h3>Weight Loss Diet Chart</h3>
    <p>Breakfast:</p>
    <ul>
      <li>Scrambled eggs with spinach</li>
      <li>Whole grain toast</li>
      <li>Berries</li>
    </ul>

    <p>Lunch:</p>
    <ul>
      <li>Grilled chicken breast</li>
      <li>Quinoa salad with veggies</li>
      <li>Greek yogurt</li>
    </ul>

    <p>Snack:</p>
    <ul>
      <li>Apple slices with almond butter</li>
    </ul>

    <p>Dinner:</p>
    <ul>
      <li>Baked salmon</li>
      <li>Steamed broccoli</li>
      <li>Brown rice</li>
    </ul>
  `;
}

function generateMaintenanceDietChart() {
  return `
    <h3>Maintenance Diet Chart</h3>
    <p>Breakfast:</p>
    <ul>
      <li>Oatmeal with banana slices</li>
      <li>Milk or plant-based milk</li>
      <li>Walnuts or almonds</li>
    </ul>

    <p>Lunch:</p>
    <ul>
      <li>Grilled turkey sandwich with whole grain bread</li>
      <li>Mixed green salad</li>
      <li>Low-fat yogurt</li>
    </ul>

    <p>Snack:</p>
    <ul>
      <li>Greek yogurt with honey</li>
      <li>Fruit (e.g., berries)</li>
    </ul>

    <p>Dinner:</p>
    <ul>
      <li>Stir-fried tofu with vegetables</li>
      <li>Quinoa or brown rice</li>
      <li>Steamed asparagus</li>
    </ul>
  `;
}

function generateMuscleGainDietChart() {
  return `
    <h3>Muscle Gain Diet Chart</h3>
    <p>Breakfast:</p>
    <ul>
      <li>Protein smoothie with whey protein, banana, and almond milk</li>
      <li>Peanut butter on whole grain toast</li>
    </ul>

    <p>Lunch:</p>
    <ul>
      <li>Grilled steak or chicken breast</li>
      <li>Sweet potato or quinoa</li>
      <li>Broccoli and carrots</li>
    </ul>

    <p>Snack:</p>
    <ul>
      <li>Greek yogurt with granola and berries</li>
    </ul>

    <p>Dinner:</p>
    <ul>
      <li>Baked cod or salmon</li>
      <li>Brown rice or couscous</li>
      <li>Avocado and mixed greens salad</li>
    </ul>
  `;
}