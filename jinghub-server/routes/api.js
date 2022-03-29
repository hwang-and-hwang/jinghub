const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    next();
})

router.get('/jing', (req) => {
    console.log(req);
});

module.exports = router;
