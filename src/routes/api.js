import { getToken } from './utils.js';

let fetchPost = async (url, postData) => {
    let token = getToken();
    if (token) {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        };
        // eslint-disable-next-line no-undef

        return fetch(url, options)
            .then(resp => resp.json())
            .then(resp => {
                //  console.log(resp);
                return resp;
            });
    } else {
        return false;
    }
};

let fetchUpdate = async (url, postData) => {
    let token = getToken();
    if (token) {
        const options = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        };
        // eslint-disable-next-line no-undef

        return fetch(url, options)
            .then(resp => resp.json())
            .then(resp => {
                //  console.log(resp);
                return resp;
            });
    } else {
        return false;
    }
};

let fetchGet = async url => {
    let token = getToken();
    if (token) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
        // eslint-disable-next-line no-undef

        return fetch(url, options)
            .then(resp => resp.json())
            .then(resp => {
                //  console.log(resp);
                return resp;
            });
    } else {
        return false;
    }
};

export { fetchPost, fetchUpdate, fetchGet };
