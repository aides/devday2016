const express = require('express');
const router = express.Router();
const redis = require("redis");

var client = redis.createClient({
    host: process.env.DB_PORT_6379_TCP_ADDR || 'localhost',
});

client.set('catpetcount', 0, function(err, reply) {
    console.log('catpetcount set to 0');
});

router.get('/helloworld', function(req,res) {
    res.send('Hello World!');
});

router.post('/pet', function(req, res) {
    client.incr('catpetcount', function(err, reply) {
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