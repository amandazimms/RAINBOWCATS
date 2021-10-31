const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Routes
router.put('/addLike/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log("hello?");
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
            console.log('galleryItem.likes=', galleryItem.likes);
        }
    }
    res.sendStatus(200);
}); 
router.put('/removeLike/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log("hello?");
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes -= 1;
            console.log('galleryItem.likes=', galleryItem.likes);
        }
    }
    res.sendStatus(200);
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