const express = require("express");

const ProductRouter = new express.Router()
ProductRouter.use(express.json())

ProductRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const ProductSchema = require("./ProductSchema");

// read all data
ProductRouter.get('/product', async (req, res) => {
    try {
        const getdata = await ProductSchema.find({})
        res.status(201).send(getdata);
    }
    catch (err) {
        res.status(400).send(err)
    }
});

// read data by id
ProductRouter.get('/product/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await ProductSchema.findById(_id)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});


ProductRouter.post('/product', async (req, res) => {
    try {
        const postdata = await new ProductSchema(req.body)
        const insertPost = await postdata.save();
        res.status(200).send(insertPost)
    }
    catch (err) {
        res.status(400).send(err)
    }
});




module.exports = ProductRouter