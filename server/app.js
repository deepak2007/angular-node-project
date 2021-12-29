const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');
const userRoutes = require('./routes/user.routes');
const addressRoutes = require('./routes/address.routes');
const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/demodb';

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Configuring View (Template) Engine
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/address', addressRoutes);

mongoose.connect(dbUrl)
    .then(() => { console.log('Mongoose Successfully connected') })
    .catch((error) => { console.log(error) });

app.listen(port, () => {
    console.log(`The Mongo DB server is running at port ${port}`);
});