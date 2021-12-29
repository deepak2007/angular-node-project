const express = require('express');
const router = express();
const Address = require('../models/address.model');

//Request URL http://localhost:3000/address for address details
router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To Address Section' })
});

//Request URL http://localhost:3000/address/all for all address
router.get('/all', (req, res) => {
    Address.find((err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL http://localhost:3000/address/details/id for address details
router.get("/details/:id", (req, res) => {
    Address.findById(req.params.id, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL http://localhost:3000/Address/add for add address
router.post('/add', (req, res) => {
    var address = new Address(req.body);
    Address.create(address, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL http://localhost:3000/address/update/id for update address
router.put('/update/:id', (req, res) => {
    var address = new Address(req.body);
    Address.findByIdAndUpdate(req.params.id, address, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

//Request URL http://localhost:3000/address/delete/id for delete address
router.delete('/delete/:id', (req, res) => {
    Address.findByIdAndDelete(req.params.id, (err, address) => {
        if (err) throw err;
        res.send(address);
    })
});

module.exports = router;