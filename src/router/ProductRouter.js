const express = require("express");
const ProductRouter = new express.Router()
const ProductController = require('../Controllers/ProductController')


// ProductRouter.use(express.json())
// ProductRouter.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });



// get products
ProductRouter.get('/product', ProductController.getProduct);

// get single products
ProductRouter.get('/product/:id', ProductController.getSingleProduct);

// post product
ProductRouter.post('/product', ProductController.updateProduct);

module.exports = ProductRouter