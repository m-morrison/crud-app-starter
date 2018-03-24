const express = require('express');
const router = express.Router();

// GET API listing
router.get('/', (req, res) => {
    res.send('congrats, your api works');
});

module.exports = router;