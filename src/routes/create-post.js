import { createPostUrl } from './url.js';
import { fetchPost } from './api.js';

function createPost() {
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
    fetchPost(createPostUrl, postData).then(respData => {
        console.log(respData);
        if (respData) {
            document.getElementById('flash').innerHTML =
        '<span style="color:green;font-size:16px"> New Post Created Successfully!</span>';
        }
    });
}

document.getElementById('create-submit').addEventListener('click', createPost);
