const mongoose = require("mongoose")

const products = new mongoose.Schema({
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
const ProductSchema = new mongoose.model('ProductApi', products)
module.exports = ProductSchema;
