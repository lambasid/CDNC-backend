const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require('./models/Users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.post('/register', async (req, res) => {
    //Debugging Purposes
    console.log("Received data:", req.body);
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.join("the password is incorrect")
            }
        } else {
            res.json("No Record Exited")
        }
    })
})


app.listen(3001, () => {
    console.log("server is running")
})