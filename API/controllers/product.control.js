const PRODUCT_MODEL = require("../models/product.model")

const createProduct = async (req, res) => { 
    const { image, price, quantity, category } = req.body
    try {
        const product = await PRODUCT_MODEL.create({
            image: image,
            price: price,
            quantity: quantity,
            category:category
           
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
    try{
        const product = await PRODUCT_MODEL.find ({name});
        res.status(200).json({
            success:true,
            data:product
        })
    }catch(error){
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })


    }
}

const deleteProduct = async (req, res) => {
    const { name } = req.body
    try{
        const product = await PRODUCT_MODEL.deleteOne ({name});
        res.status(200).json({
            success:true,
            data:product})
    }catch(error){
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
    deleteProduct
}