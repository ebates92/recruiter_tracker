document.addEventListener("DOMContentLoaded", (event) => { 
    const loginButton = document.querySelector('[data-login]');
    const googleSignup = document.querySelector('[data-signup-google]');
    const emailSignup = document.querySelector('[data-signup-email]');

    loginButton.addEventListener("click", (event) => {
        const email = document.querySelector('[data-login-email]').value;
        const password = document.querySelector('[data-login-password]').value;
        const data = JSON.stringify({email, password});

        fetch('http://localhost:3000/auth', {headers: {'content-Type': 'application/json'}, method: 'POST', body: data, credentials: 'include'})
               .then(res => location.replace('http://localhost:3000/dashboard'))
               .catch(e => console.log("Invalid username / password"));
    });

    googleSignup.addEventListener("click", (event) => {
        window.location.replace('http://localhost:3000/auth/google');
    });

    emailSignup.addEventListener("click", (event) => {
        const firstName = document.querySelector('[data-firstname]').value;
        const lastName = document.querySelector('[data-lastname]').value;
        const email = document.querySelector('[data-email]').value;
        const password = document.querySelector('[data-password]').value;
        const data = JSON.stringify({firstName, lastName, email, password});
        fetch('http://localhost:3000/signup', {headers: {'content-type': 'application/json'}, method: 'POST', body: data, credentials: 'include'})
               .then(res => location.replace('http://localhost:3000/dashboard'))
               .catch(e => console.log("Invalid username / password"));
    });
});


