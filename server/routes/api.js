const express = require('express');
const router = express.Router();

//axios for making http request
const axios = require('axios');
//not using a real database
const API = 'https://jsonplaceholder.typicode.com';

// GET API listing
router.get('/', (req, res) => {
    res.send('congrats, your api works');
});

// Get all posts
router.get('/posts', (req, res) => {
    // Get todos from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(posts => {
            res.status(200).send(posts.data);
        })
        .catch(error => {
            res.status(500).send(error)
        })
});

//get by id
router.get('/posts/:id', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + req.params.id)
        .then(posts => {
            res.status(200).send(posts.data);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});


//save posts
router.post('/', (req, res) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', req.body)
    .then(response => response.json())
    .catch(error => {
        res.status(500).send(error);
    })
})





module.exports = router;