// Registration form submission
document.getElementById('alumniRegisterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('alumniName').value;
    const email = document.getElementById('alumniEmail').value;
    const password = document.getElementById('alumniPassword').value;

    // Create JSON payload
    const data = {
        name: name,
        email: email,
        password: password
    };

    // Send data as JSON using fetch
    fetch('http://localhost:8080/alumni/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Registration Success:', data);
        // Handle success (e.g., redirect or show a success message)
    })
    .catch((error) => {
        console.error('Registration Error:', error);
        // Handle error (e.g., show an error message)
    });
});

// Login form submission
document.getElementById('alumniLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather login data
    const email = document.getElementById('alumniLoginEmail').value;
    const password = document.getElementById('alumniLoginPassword').value;

    // Use fetch to send a GET request with the email and password in the path
    fetch(`http://localhost:8080/alumni/login/${email}/${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Login Success:', data);
        // Handle successful login (e.g., redirect or show a success message)
    })
    .catch((error) => {
        console.error('Login Error:', error);
        // Handle login error (e.g., show an error message)
    });
});