const express = require('express');
const router = express();

//Request URL http://localhost:3000/
router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To Mongo Express Angular Node Project' })
});

module.exports = router;