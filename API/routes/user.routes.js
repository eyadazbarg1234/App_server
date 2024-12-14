const express = require("express");
const { createUser, findUser, deleteUser, LoginUser, updateUser } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/deleteUser",  deleteUser);

userRouter.post("/findUser", findUser);

userRouter.post("/createUser", createUser);

userRouter.post("/LoginUser", LoginUser );

userRouter.post("/updateUser",updateUser)


module.exports = userRouter

