/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/src'));
app.use('/edit-post/:id', express.static(__dirname + '/src')); 
app.use('/single-post/:id', express.static(__dirname + '/src')); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'posts.html'));
});

app.get('/single-post/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'single-post.html'));
});

app.get('/create-post', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'create-post.html'));
});

app.get('/edit-post/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'edit.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'register.html'));
});

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.html'));
});

app.listen(8000, () => {
    console.log('Backend server is running at port 8000!');
});

