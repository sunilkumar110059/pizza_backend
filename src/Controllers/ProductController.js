
const ProductModel = require("../models/ProductModel");

class ProductController {

    // get products
    async getProduct(req, res) {
        try {
            const getdata = await ProductModel.find({})
            res.status(201).send(getdata);
        }
        catch (err) {
            res.status(400).send(err)
        }
    };

    // get single products
    async getSingleProduct(req, res) {
        try {
            const _id = req.params.id
            const getdata = await ProductModel.findById(_id)
            res.status(201).send(getdata)
        }
        catch (err) {
            res.status(400).send(err)
        }
    };

    // upldate product
    async updateProduct(req, res) {
        try {
            const postdata = await new ProductModel(req.body)
            const insertPost = await postdata.save();
            res.status(200).send(insertPost)
        }
        catch (err) {
            res.status(400).send(err)
        }
    };
}

module.exports = new ProductController();
