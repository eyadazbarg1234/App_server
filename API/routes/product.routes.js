const express = require("express");
const { deleteProduct, findAllProducts } = require("../controllers/product.control");
const { createProduct } = require("../controllers/product.control");
const productRoutes = express.Router();

productRoutes.post("/deleteProduct", deleteProduct);

productRoutes.post("/createProduct", createProduct)
productRoutes.post("/findAllProducts", findAllProducts)


module.exports = productRoutes