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

// Get all todos
router.get('/todos', (req, res) => {
    // Get todos from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(todos => {
            res.status(200).send(todos.data);
        })
        .catch(error => {
            res.status(500).send(error)
        })
});

//get by id
router.get('/todos/:id', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/' + req.params.id)
    .then(todo => {
        res.status(200).send(todo.data);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});


//save todo
router.post('/', (req, res) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', req.body)
    .then(response => response.json())
    .catch(error => {
        res.status(500).send(error);
    })
})

//update todo
router.put('/')




module.exports = router;