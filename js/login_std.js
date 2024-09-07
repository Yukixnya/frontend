        // Registration form submission
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create JSON payload
            const data = {
                name: name,
                email: email,
                password: password
            };

            // Send data as JSON using fetch
            fetch('http://127.0.0.1:8080/student/register', {
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
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather login data
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Create JSON payload
            const loginRequest = {
                email: email,
                password: password
            };

            // Use fetch to send a POST request
            fetch('http://127.0.0.1:8080/student/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Ensure cookies (session ID) are sent and received
                body: JSON.stringify(loginRequest)
            })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Login failed');
            })
            
            .then(data => {
            console.log('Login Success:', data);
            const sessionIdMatch = data.match(/sessionId: (\S+)/);
            if (sessionIdMatch && sessionIdMatch[1]) {
                const sessionId = sessionIdMatch[1];
                // console.log('Session ID:', sessionId);
                localStorage.setItem("sessionId", sessionId);
                window.location.href = 'std_dashb.html';
            } else {
                console.error('Session ID not found in response');
            }
            })
            .catch((error) => {
                console.error('Login Error:', error);
            });
        });