const express = require('express');
const router = express();
const Products = require('../models/product.model');

//Request URL http://localhost:3000/product for product section
router.get('/', (req, res) => {
    Products.find((err, products) => {
        if (err) throw err;
        res.render('product/product', { products: products });
    })
});

//Request URL http://localhost:3000/product/add for all product
router.get('/all', (req, res) => {
    Products.find((err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL http://localhost:3000/product/product-add for render product add page
router.get('/product-add', (req, res) => {
    res.render('product/product-add');
});

//Request URL http://localhost:3000/product-update/id for render product update page
router.get("/product-update/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('product/product-update', { product: product });
    })
});

//Request URL http://localhost:3000/product/id for render product details page
router.get("/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.render('product/product-detail', { product: product });
    })
});

//Request URL http://localhost:3000/product/id for product details
router.get("/details/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL http://localhost:3000/product for render product detail page
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

//Request URL Post http://localhost:3000/product/add for add product
router.post('/add', (req, res) => {
    var product = new Products(req.body);
    Products.create(product, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL Put http://localhost:3000/product for product update page
//we are using post in place of put method
router.post('/product-update/:id', (req, res) => {
    var product = new Products(req.body);
    Products.findByIdAndUpdate(req.params.id, product, (err, product) => {
        if (err) throw err;
        res.redirect("/products");
    })
});

//Request URL http://localhost:3000/product for update product
router.put('/update/:id', (req, res) => {
    var product = new Products(req.body);
    Products.findByIdAndUpdate(req.params.id, product, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

//Request URL Delete http://localhost:3000/product/id for product delete page
//Note Delete ==> Post
router.post('/product-delete/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) throw err;
        res.redirect("/products");        
    })
});

//Request URL http://localhost:3000/product/id for delete product
router.delete('/delete/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
});

module.exports = router;