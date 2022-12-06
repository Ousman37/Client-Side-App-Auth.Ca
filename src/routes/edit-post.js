import { getSinglePostUrl, updAndDelPostUrl } from './url.js.js';
import { fetchGet, fetchUpdate } from './api.js';

let url = window.location.href;
var id = url.split('/')[4];
function fillPost() {
    fetchGet(`${getSinglePostUrl}/${id}`).then(response => {
        console.log(response);

        if (response.errors) {
            document.getElementById(
                'flash'
            ).innerHTML = `<span style="color:tomato">${response.errors[0].message}</span>`;
        } else {
            document.getElementById('title').value = response.title;
            document.getElementById('body').value = response.body;
            document.getElementById('tags').value = response.tags[0];
            document.getElementById('media').value = response.media;
        }
    });
}
fillPost();

function editPost() {
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let tags = document.getElementById('tags').value;
    let media = document.getElementById('media').value;
    //Destructuring
    let postData = {
        title: `${title}`,
        body: `${body}`,
        tags: [`${tags}`],
        media: `${media}`,
    };
    fetchUpdate(`${updAndDelPostUrl}/${id}`, postData).then(respData => {
        console.log(respData);
        if (respData.errors) {
            document.getElementById(
                'flash'
            ).innerHTML = `<span style="color:tomato">${respData.errors[0].message}</span>`;
        } else {
            document.getElementById('flash').innerHTML =
        '<span style="color:green;font-size:16px"></span>Post Edited Successfully!</span>';
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';
            document.getElementById('tags').value = '';
            document.getElementById('media').value = '';
        }
    });
}

document.getElementById('edit-submit').addEventListener('click', editPost);
