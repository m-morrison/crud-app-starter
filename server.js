//Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//get API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set api routes
app.use('/api', api);

//catch all other routes and return the index file
app.getMaxListeners('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);


 // Create Http Server 
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));
