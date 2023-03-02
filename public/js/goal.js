
const carHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Buy a Car'
    const goal_amount = document.querySelector('#car-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'POST',
        body: JSON.stringify({ goal, goal_amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/plans');
      } else {
        alert('Please enter numerical values only');
      }
    }
  };

  const houseHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Save for a House'
    const goal_amount = document.querySelector('#house-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'POST',
        body: JSON.stringify({ goal, goal_amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/plans');
      } else {
        alert('Please enter numerical values only');
      }
    }
  };

  const debtHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Pay Off Debt'
    const goal_amount = document.querySelector('#debt-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'POST',
        body: JSON.stringify({ goal, goal_amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/plans');
      } else {
        alert('Please enter numerical values only');
      }
    }
  };


document
.querySelector('#car-form')
.addEventListener('submit', carHandler);

document
.querySelector('#house-form')
.addEventListener('submit', houseHandler);

document
.querySelector('#debt-form')
.addEventListener('submit', debtHandler);