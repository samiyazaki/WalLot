const newFormHandler = async (event) => {
    event.preventDefault();
  
   
    const amount = document.querySelector('#income-amount').value.trim();
  
    if (amount) {
      const response = await fetch(`/api/income`, {
        method: 'POST',
        body: JSON.stringify({ amount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/income');
      } else {
        alert('Failed to add income');
      }
    }
  };




document
.querySelector('.new-income-form')
.addEventListener('submit', newFormHandler);