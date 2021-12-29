const express = require('express');
const router = express();
const Orders = require('../models/order.model');

//Request URL Post http://localhost:3000/orders for home page
router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To Order Section' })
});

//Request URL Post http://localhost:3000/orders/all for all orders
router.get('/all', (req, res) => {
    Orders.find((err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL Get http://localhost:3000/orders/details/61b6fc4cffa1e1568830c8bc 
router.get("/details/:id", (req, res) => {
    Orders.findById(req.params.id, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL Order Add http://localhost:3000/orders/add 
router.post('/add', (req, res) => {
    var order = new Orders(req.body);
    Orders.create(order, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL Order Update http://localhost:3000/orders/update/61b6fc4cffa1e1568830c8bc
router.put('/update/:id', (req, res) => {
    var order = new Orders(req.body);
    Orders.findByIdAndUpdate(req.params.id, order, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL Order Delete http://localhost:3000/orders/delete/61b6fc4cffa1e1568830c8bc
router.delete('/delete/:id', (req, res) => {
    Orders.findByIdAndDelete(req.params.id, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

module.exports = router;