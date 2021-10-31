const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Routes
router.put('/addLike/:id', (req, res) => {
    const queryString = `UPDATE cats 
                SET likes = likes + 1
                WHERE id = '${req.params.id}';`;
    pool.query(queryString).then( (results) => {
        res.sendStatus(200);
    }).catch( (err) =>{
        console.log('error updating task in database:', err);
        res.sendStatus(500);

    })
}); 
router.put('/removeLike/:id', (req, res) => {
    const queryString = `UPDATE cats 
                SET likes = likes - 1
                WHERE id = '${req.params.id}';`;
    pool.query(queryString).then( (results) => {
        res.sendStatus(200);
    }).catch( (err) =>{
        console.log('error updating task in database:', err);
        res.sendStatus(500);

    })
}); // END PUT Routes


// GET Route
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM cats ORDER BY id`;

    pool.query(queryString).then( (results) => {
        res.send(results.rows);
    
      }).catch( (err) => {
        console.log('error getting tasks from database:', err);
        res.sendStatus(500);
      })
}); // END GET Route

module.exports = router;