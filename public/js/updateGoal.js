
const carUpdateHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Buy a Car'
    const goal_amount = document.querySelector('#car-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'PUT',
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

  const houseUpdateHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Save for a House'
    const goal_amount = document.querySelector('#house-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'PUT',
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

  const debtUpdateHandler = async (event) => {
    event.preventDefault();
  
    const goal = 'Pay Off Debt'
    const goal_amount = document.querySelector('#debt-amount').value.trim();
  
    if (goal && goal_amount) {
      const response = await fetch(`/api/goal`, {
        method: 'PUT',
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
.querySelector('#car-update')
.addEventListener('submit', carUpdateHandler);

document
.querySelector('#house-update')
.addEventListener('submit', houseUpdateHandler);

document
.querySelector('#debt-update')
.addEventListener('submit', debtUpdateHandler);