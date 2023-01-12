import { loginUrl } from './url.js';
document.getElementById('login-submit').addEventListener('click', loginPost);
const loader = document.getElementById('loading');
function loginPost() {
    loader.classList.remove('display-none');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userBody = {
        email: `${email}`,
        password: `${password}`,
    };

    //POST /api/v1/social/auth/login
    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userBody),
    };

    // eslint-disable-next-line no-unused-vars
    const flashMessage = '';

    fetch(loginUrl, opts)
        .then(res => res.json())
        .then(resp => {
            loader.classList.add('display-none');

            if (resp.accessToken) {
                localStorage.setItem('token', `${resp.accessToken}`);
                window.location = '/';
            } else {
                document.getElementById('login-error').innerHTML =
          resp.errors[0].message;
            }
        });
}
