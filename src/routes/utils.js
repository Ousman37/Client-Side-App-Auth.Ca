let getToken = () => {
    let token = '';
    if (localStorage.getItem('token')) {
        token = localStorage.getItem('token');
        return token;
    } else {
        return false;
    }
};
let redirect = () => {
    window.location = '/login';
};

export { getToken, redirect };
