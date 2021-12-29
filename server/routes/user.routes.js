const express = require('express');
const router = express();
const Users = require('../models/user.model');

router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To User Section' })
});

//Request URL Post http://localhost:3000/users/all for all user
router.get('/all', (req, res) => {
    Users.find((err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL Get http://localhost:3000/users/details/61b6fc4cffa1e1568830c8bc 
router.get("/details/:id", (req, res) => {
    Users.findById(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL user Add http://localhost:3000/users/add 
router.post('/add', (req, res) => {
    var user = new Users(req.body);
    Users.create(user, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL user Update http://localhost:3000/users/update/61b6fc4cffa1e1568830c8bc
router.put('/update/:id', (req, res) => {
    var user = new Users(req.body);
    Users.findByIdAndUpdate(req.params.id, user, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL user Delete http://localhost:3000/users/delete/61b6fc4cffa1e1568830c8bc
router.delete('/delete/:id', (req, res) => {
    Users.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

module.exports = router;