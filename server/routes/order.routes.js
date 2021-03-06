const express = require('express');
const router = express();
const Orders = require('../models/order.model');

//Request URL http://localhost:3000/orders for order section
router.get('/', (req, res) => {
    res.render('index', { "message": 'Welcome To Order Section' })
});

//Request URL http://localhost:3000/orders/all for all orders
router.get('/all', (req, res) => {
    Orders.find((err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL http://localhost:3000/orders/details/id for order details
router.get("/details/:id", (req, res) => {
    Orders.findById(req.params.id, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL http://localhost:3000/orders/add for add order
router.post('/add', (req, res) => {
    var order = new Orders(req.body);
    Orders.create(order, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL http://localhost:3000/orders/update/id for update order
router.put('/update/:id', (req, res) => {
    var order = new Orders(req.body);
    Orders.findByIdAndUpdate(req.params.id, order, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

//Request URL http://localhost:3000/orders/delete/id for delete order
router.delete('/delete/:id', (req, res) => {
    Orders.findByIdAndDelete(req.params.id, (err, order) => {
        if (err) throw err;
        res.send(order);
    })
});

module.exports = router;