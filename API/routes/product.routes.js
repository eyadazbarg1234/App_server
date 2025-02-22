const express = require("express");
const { deleteProduct, findAllProducts, getAllProducts } = require("../controllers/product.control");
const { createProduct } = require("../controllers/product.control");
const productRoutes = express.Router();

productRoutes.post("/deleteProduct", deleteProduct);

productRoutes.post("/createProduct", createProduct)
productRoutes.post("/findAllProducts", findAllProducts)
productRoutes.get("/getAllProducts", getAllProducts)


module.exports = productRoutes