const PRODUCT_MODEL = require("../models/product.model")
const getAllProducts = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await PRODUCT_MODEL.find();
      
      // Check if any products exist
      if (products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found",
        });
      }
  
      // Respond with all products
      res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        data: products,
      });
    } catch (error) {
      // Handle any errors that occur during the database query
      res.status(500).json({
        success: false,
        error: error.name,
        message: error.message,
      });
    }
  };
const createProduct = async (req, res) => {
    const { name, image, price, quantity, category } = req.body
    try {
        const product = await PRODUCT_MODEL.create({
            name: name,
            image: image,
            price: price,
            quantity: quantity,
            category: category

        })
        res.status(200).json({
            success: true,
            message: "product created",
            data: product
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }
}

const findProduct = async (req, res) => {
    const { name } = req.body
    try {
        const product = await PRODUCT_MODEL.find({ name });
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })


    }
}
const findAllProducts = async (req, res) => {
    const { category } = req.body
    try {
        const product = await PRODUCT_MODEL.find(category ? { category } : {});
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })


    }
}

const deleteProduct = async (req, res) => {
    const { name } = req.body
    try {
        const product = await PRODUCT_MODEL.deleteOne({ name });
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }

}



module.exports = {
    createProduct,
    findProduct,
    deleteProduct,
    getAllProducts
,
    findAllProducts,
    
}