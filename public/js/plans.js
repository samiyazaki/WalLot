const sAmount = document.getElementById('#savings');
const gAmount = document.getElementById('#goal_amount');
const sDisplay = document.getElementById('#aSavings');
const yearDisplay = document.getElementById('years');

halfSAmount = sAmount / 2;
sDisplay.textContent = halfSAmount;

sRequired = gAmount / halfSAmount;
yearDisplay.textContent = sRequired;



