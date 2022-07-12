const express = require("express");


const app = express();

const port =process.env.PORT || 8800
app.use(express.json());

// connect with config 
const connect = require("./config/db");

const productController = require("./controllers/product.controller");
app.use("/products", productController);



app.listen(port, async function(req,res){
    try{
connect()
console.log("listening port 8800");

    }
    catch(err){
console.log(err.message);
    }
})