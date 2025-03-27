const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/Users'); // From user DB
const MPModel = require('./models/MP'); // From DisabilityAdvocacy DB

const app = express();
app.use(express.json());
app.use(cors());

// Connect to "user" database for authentication
mongoose.connect("mongodb://localhost:27017/user")
  .then(() => console.log("Connected to user DB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ===== Auth Routes =====

app.post('/register', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No Record Existed");
      }
    });
});

// ===== MP Search Route =====

app.get('/mps', async (req, res) => {
  const province = req.query.province;

  try {
    let filter = {};
    if (province) {
      filter = { "Province / Territory": { $regex: new RegExp(province, 'i') } };
    }

    const mps = await MPModel.find(filter);
    res.json(mps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
