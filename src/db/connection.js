const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/pizzacorner")
    .then(() => {
        console.log("Connection is Fullfill")
    }).catch((e) => {
        console.log("No Connection  ")
    })

