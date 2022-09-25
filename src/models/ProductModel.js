const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    pizzaname: {
        type: String,
        required: true,        
    },
    pizzaprice: {
        type: Number,
        required: true,        
    },

    description: {
        type: String,
        required: true,        
    },

})

// creating new collection
const ProductModel = new mongoose.model('ProductApi', productsSchema)
module.exports = ProductModel;
