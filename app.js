const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./API/routes/routes");
const USER_MODEL = require("./API/models/user.model");

const app = express();
app.use(express.json());
// app.use(cors());

const mongooseURL =
  "mongodb+srv://azbargaeyad:eyad12345@cluster0.okpro.mongodb.net/"

mongoose.connect(mongooseURL);






mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});
app.get("/user", (req, res) => {
  res.status(200).json({
    name: 'eyad',
    lastName: 'zbarga'
  })
})
app.post("/whatsMyName", (req, res) => {

  const { name, lastName } = req.body
  if (!name && !lastName) {
    res.status(400).json({
      message: "please Enter your name and lastName"

    })
  }

  res.status(200).json({ message: "Hello" + name + lastName })
});


app.post("/rtet", (req, res) => {

  const { name, age } = req.body
  if (age < 18) {
    res.status(200).json({
      age: age,
      message: " is to young",
      user: name
    })
    return
  } else {
    // if (age >= 18) {
    res.status(200).json({
      message: name + "welcome"
    })
    // }
  }

});


app.post("/pass", (req, res) => {
  const { name, password } = req.body
  if (name === "belal" && password === "eyad") {
    res.status(200).json({
      message: "success",
    })
    return
  }
  res.status(400).json({
    message: "the name or the password not correct",
  })
}


)


app.post("/sum", (req, res) => {
  const { num1, num2 } = req.body

  res.status(200).json({
    result: num1 + num2
  })
})

// USER_MODEL.collection.dropIndex("password_1").then((v) => {
//   console.log(v);

// })
//   .catch((e) => {
//     console.log(e);

//   })

app.use("/", Routes);

module.exports = app;