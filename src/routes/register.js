import { registerUrl } from './url.js';
import { fetchPost } from './api.js';

let registerPost = () => {
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let avatar = document.getElementById('avatar').value;
    let banner = document.getElementById('banner').value;
    //Destructuring
    let userBody = {
        name: `${username}`,
        email: `${email}`,
        password: `${password}`,
        avatar: `${avatar}`,
        banner: `${banner}`,
    };
    // eslint-disable-next-line no-unused-vars
    fetchPost(registerUrl, userBody).then((response) => {
        console.log(response);
        if (response.errors) {
            document.getElementById('flash').innerHTML = `<span style='color:red;'>${response.errors[0].message}</span>`;
        } else {
            document.getElementById('flash').innerHTML = '<span style=\'color:green;\'>You Have Successfully Registered.</span>';
             
        }
    });
};
document
    .getElementById('register-submit')
    .addEventListener('click', registerPost);
