const express = require('express');
const router = express();
const Address = require('../models/address.model');

router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To Address Section' })
});

//Request URL Post http://localhost:3000/address/all for all Address
router.get('/all', (req, res) => {
    Address.find((err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL Get http://localhost:3000/address/details/61b6fc4cffa1e1568830c8bc 
router.get("/details/:id", (req, res) => {
    Address.findById(req.params.id, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL address Add http://localhost:3000/Address/add 
router.post('/add', (req, res) => {
    var address = new Address(req.body);
    Address.create(address, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL address Update http://localhost:3000/address/update/61b6fc4cffa1e1568830c8bc
router.put('/update/:id', (req, res) => {
    var address = new Address(req.body);
    Address.findByIdAndUpdate(req.params.id, address, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL address Delete http://localhost:3000/address/delete/61b6fc4cffa1e1568830c8bc
router.delete('/delete/:id', (req, res) => {
    Address.findByIdAndDelete(req.params.id, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

module.exports = router;