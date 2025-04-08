// const express = require("express")
// const mongoose = require('mongoose')
// const cors = require("cors")
// const UserModel = require('./models/Users')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/user")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));


//   app.post('/register', async (req, res) => {
//     //Debugging Purposes
//     console.log("Received data:", req.body);
//     try {
//         const user = await UserModel.create(req.body);
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.post("/login", (req,res) => {
//     const {email, password} = req.body;
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             if(user.password === password) {
//                 res.json("Success")
//             } else {
//                 res.join("the password is incorrect")
//             }
//         } else {
//             res.json("No Record Exited")
//         }
//     })
// })


// app.listen(3001, () => {
//     console.log("server is running")
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./models/UserModel'); // From user DB
const MPModel = require('./models/MPModel'); // From DisabilityAdvocacy DB

const app = express();
app.use(express.json());
app.use(cors());

// Connect to "user" database for authentication
mongoose.connect("mongodb+srv://itssidlamba:1234@cdnc-backend.qmiuwmr.mongodb.net/?retryWrites=true&w=majority&appName=cdnc-backend/user")
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

app.get("/mps-all", async (req, res) => {
  try {
    const mps = await MPModel.find(); // Fetch all documents from the MPs collection
    return res.status(200).json(mps);
  } catch (error) {
    console.error("Error fetching MPs:", error);
    return res.status(500).json({ error: "An error occurred while fetching MPs" });
  }
});
app.get("/user-all", async (req, res) => {
  try {
    const mps = await UserModel.find(); // Fetch all documents from the MPs collection
    return res.status(200).json(mps);
  } catch (error) {
    console.error("Error fetching MPs:", error);
    return res.status(500).json({ error: "An error occurred while fetching MPs" });
  }
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
