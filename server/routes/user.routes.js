const express = require('express');
const router = express();
const Users = require('../models/user.model');

//Request URL http://localhost:3000/users for users section
router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To User Section' })
});

//Request URL http://localhost:3000/users/all for all users
router.get('/all', (req, res) => {
    Users.find((err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL http://localhost:3000/users/details/id for user details
router.get("/details/:id", (req, res) => {
    Users.findById(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL http://localhost:3000/users/add for add user
router.post('/add', (req, res) => {
    var user = new Users(req.body);
    Users.create(user, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL http://localhost:3000/users/update/id for update user
router.put('/update/:id', (req, res) => {
    var user = new Users(req.body);
    Users.findByIdAndUpdate(req.params.id, user, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

//Request URL http://localhost:3000/users/delete/id for delete user
router.delete('/delete/:id', (req, res) => {
    Users.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
});

module.exports = router;