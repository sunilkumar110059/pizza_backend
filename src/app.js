const express = require("express");
const app = express();
app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

require("../src/db/connection");


const ProductRouter = require('./router/ProductRouter')
app.use(ProductRouter)

const port = process.env.port || 8000
app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
})

