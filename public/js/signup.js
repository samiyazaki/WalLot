const signupFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector('#inputuserName').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const email = document.querySelector('.signup-form').value.trim();
    if (username && password && email) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
