const USER_MODEL = require("../models/user.model")

const createUser = async (req, res) => {
    const { userName, email, phone, password } = req.body
    try {
        const user = await USER_MODEL.create({
            userName: userName,
            email: email,
            phone: phone,
            password: password
        })
        res.status(200).json({
            success: true,
            message: "user created",
            data: user
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

const deleteUser = async (req, res) => {
    const { phone } = req.body
    try {
        const users = await USER_MODEL.deleteOne({ phone });
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })


    }
}

const findUser = async (req, res) => {
    const { name } = req.body
    try {
        const users = await USER_MODEL.find({ name });
        res.status(200).json({
            success: true,
            data: users,

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })


    }
}

const LoginUser = async (req, res) => {
    const { phone, password } = req.body
    try {
        const user = await USER_MODEL.findOne({ phone, password });
        res.status(200).json({
            success: !!user,
            data: user,

        })
    }
    catch {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }


}

const updateUser = async (req, res) => {
    const { userName, email, phone, password } = req.body
    try {
        const user = await USER_MODEL.findOneAndUpdate({ phone }, {
            password: password
        }, { new: true })
        res.status(200).json({
            success: true,
            message: "user updatd",
            data: user
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
    findUser,
    createUser,
    deleteUser,
    LoginUser,
    updateUser
}
