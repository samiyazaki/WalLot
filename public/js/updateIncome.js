const updateFormHandler = async (event) => {
    event.preventDefault();
  

    const amount = document.querySelector('#update-amount').value.trim();
  
    if (amount) {
      const response = await fetch(`/api/income`, {
        method: 'PUT',
        body: JSON.stringify({ amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/income');
      } else {
        alert('Please enter numbers only');
      }
    }
  };
  
  
  
  document
  .querySelector('.update-income-form')
  .addEventListener('submit', updateFormHandler);