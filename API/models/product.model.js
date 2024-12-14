const { Schema, model } = require("mongoose");


const PRODUCT_SCHEMA = new Schema({
    name: {
        ttype: String,
        // required: true,
    },

    quantity: {
        type: Number,


    },
    image: {
        type: String,




    },
    price: {
        type: Number,
        // required: true,
    },
    category: {
        type: String
    }


})


const PRODUCT_MODEL = model("product", PRODUCT_SCHEMA);
module.exports = PRODUCT_MODEL