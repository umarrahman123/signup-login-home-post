// Function to handle logout
function logout() {
    // Assuming you have some way to clear the authentication state or session
    // Example: clear localStorage or sessionStorage
    localStorage.removeItem('isLoggedIn'); // Remove the isLoggedIn flag from localStorage
  
    // Redirect user to the login page
    window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
  }
  
  // Attach click event listener to the logout button
  document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
  });
  