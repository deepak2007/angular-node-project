const express = require('express');
const router = express();
const Products = require('../models/product.model');

//Request URL http://localhost:3000/product
router.get('/', (req, res) => {
    Products.find((err, products) => {
        if (err) throw err;
        res.render('product/product', { products: products });
    })
});

router.get('/all', (req, res) => {
    Products.find((err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL http://localhost:3000/product/product-add
router.get('/product-add', (req, res) => {
    res.render('product/product-add');
});

//Request URL http://localhost:3000/product-update/61b6f77f2032617122abe42c
router.get("/product-update/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('product/product-update', { product: product });
    })
});

//Request URL http://localhost:3000/product/61b6f77f2032617122abe42c for product details page
router.get("/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('product/product-detail', { product: product });
    })
});

//Request URL http://localhost:3000/product/61b6f77f2032617122abe42c for product details page
router.get("/details/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL Post http://localhost:3000/product product listing page
router.post('/', (req, res) => {
    var product = new Products(req.body);
    Products.create(product, (err, product) => {
        if (err) throw err;
        Products.find((err, product) => {
            res.render
        })
        res.render('product/product-detail', { product: product });
    })
});

//Request URL Post http://localhost:3000/product/add for product add
router.post('/add', (req, res) => {
    var product = new Products(req.body);
    Products.create(product, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL Put http://localhost:3000/product
//we are using post in place of put method
router.post('/product-update/:id', (req, res) => {
    var product = new Products(req.body);
    Products.findByIdAndUpdate(req.params.id, product, (err, product) => {
        if (err) throw err;
        res.redirect("/products");
    })
});

//Request URL Put http://localhost:3000/product
router.put('/update/:id', (req, res) => {
    var product = new Products(req.body);
    Products.findByIdAndUpdate(req.params.id, product, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL Delete http://localhost:3000/product/61b6fc4cffa1e1568830c8bc
//Note Delete ==> Post
router.post('/product-delete/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) throw err;
        res.redirect("/products");
        //res.send(product);
    })
});

//Request URL Delete http://localhost:3000/product/61b6fc4cffa1e1568830c8bc
router.delete('/delete/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

module.exports = router;