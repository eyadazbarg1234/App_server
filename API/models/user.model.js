const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName : {
        type : String,
        required: true,
        maxLength: 14,
        minLength: 6,
        split:" "
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength:6,
        maxLength:14,
    },
    orderHistory:{
        type: Array,
        default: [],
        required: true
    }
})

const USER_MODEL = model("User", userSchema);
module.exports = USER_MODEL