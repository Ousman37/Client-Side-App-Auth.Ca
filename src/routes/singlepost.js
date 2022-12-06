import { getSinglePostUrl } from './url.js';
import { fetchGet} from './api.js';
let url = window.location.href;
var id = url.split('/')[4];
//POST DATA
// eslint-disable-next-line no-unused-vars
let postGet = async () => {
    fetchGet(`${getSinglePostUrl}/${id}`).then(data => {
        if (data.errors) {
            document.getElementById('flash').innerHTML = `<span style="color:tomato">${data.errors[0].message}</span>`;
        } else {
            document.getElementById('single-title').innerText = data.title;
            document.getElementById('single-img').src = data.media;
            document.getElementById('single-body').innerText = data.body; 
            
        }
   
    });
};

postGet();
