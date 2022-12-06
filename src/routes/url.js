const baseUrl = 'https://api.noroff.dev/api/v1';
// eslint-disable-next-line no-unused-vars
const registerUrl = `${baseUrl}/social/auth/register`;
const loginUrl = `${baseUrl}/social/auth/login`;

const getAllPostsUrl = `${baseUrl}/social/posts`;
const getSinglePostUrl = `${baseUrl}/social/posts`; //id required after that /:id
const createPostUrl = `${baseUrl}/social/posts`;
const updAndDelPostUrl = `${baseUrl}/social/posts`; // id required after that /:id

export {
    registerUrl,
    loginUrl,
    getAllPostsUrl,
    getSinglePostUrl,
    createPostUrl,
    updAndDelPostUrl,
};
