const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ROUTE
router.get('/', (req, res) => {
    res.sendStatus(200); 
});

// POST ROUTEE
router.post('/', (req, res) => {

});

// DELETE ROUTE
router.delete('/:id', (req, res) => {

});

// PUT ROUTE
router.put('/:id', (req, res) => {

});

module.exports = router;