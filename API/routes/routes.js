// const productRoutes = require("./product.routes");
const productRoutes = require("./product.routes");
const userRouter = require("./user.routes");
// const productRoutes = require("./product.routes")

const Routes =[
    userRouter,
    productRoutes
]

module.exports = Routes 