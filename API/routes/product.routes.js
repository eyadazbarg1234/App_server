const express = require("express");
const { deleteProduct } = require("../controllers/product.control");
const { createProduct } = require("../controllers/product.control");
const productRoutes = express.Router();

productRoutes.post("/deleteProduct",  deleteProduct);

productRoutes.post("/createProduct", createProduct)


module.exports = productRoutes