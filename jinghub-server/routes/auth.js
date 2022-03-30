const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(200);
    res.json({
        cookie: 'adsf1234'
    });
});
