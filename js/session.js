const sessionId = localStorage.getItem("sessionId");
// Function to check if the session is valid by making a request to the backend
function checkSession() {
  fetch('http://localhost:8080/student/checkSession', {
    method: 'GET',
    'Authorization': `Bearer ${sessionId}` // Ensure cookies are sent with the request
  })
  .then(response => {
    if ( localStorage.getItem("sessionId")!= null) {
      return response.text();
    } else {
      throw new Error('Session invalid');
    }
  })
  .then(data => {
    console.log('Session is valid:', data);
    // Proceed with loading the dashboard content
  })
  .catch((error) => {
    console.error('Session check failed:', error);
    window.location.href = 'login_std.html'; // Redirect to login if session is invalid
  });
}

// Check session validity when the page loads
window.onload = checkSession;