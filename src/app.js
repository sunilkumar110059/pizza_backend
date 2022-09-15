const express = require("express");
const app = express();

require("../src/db/connection");

const port = process.env.port || 8000

const ProductRouter = require('./module/product/ProductRouter')

app.use(ProductRouter)

app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
})

