document.addEventListener("DOMContentLoaded", (event) => { 
    const loginButton = document.querySelector('[data-login]');

    loginButton.addEventListener("click", (event) => {
        const email = document.querySelector('[data-login-email]').value;
        const password = document.querySelector('[data-login-password]').value;
        const data = JSON.stringify({email, password});
        fetch('http://localhost:3000/auth', {headers: {'content-type': 'application/json'}, method: 'POST', body: data, credentials: 'include'})
               .then(res => location.replace('http://localhost:3000/dashboard'))
               .catch(e => console.log("Invalid username / password"));
    })
  });

