/* global process */
const express = require('express');
const router = express.Router();
const redis = require('redis');

var client = redis.createClient({
    host: process.env.DB_PORT_6379_TCP_ADDR || 'localhost',
});

router.get('/helloworld', (req,res) => {
    res.send('Hello World!');
});

client.set('catpetcount', 0, (err, reply) => {
    console.log('catpetcount set to 0');
});

router.post('/pet', (req, res) => {
    client.incr('catpetcount', (err, reply) => {
        if (err) {
            console.error("Error", err);
        }
        else {
            console.log("Pet: " + reply);
            res.json(reply).send();
        };
    });
});

module.exports = router;