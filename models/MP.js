const mongoose = require('mongoose');

// Create separate connection for MP DB
const mpConnection = mongoose.createConnection("mongodb://localhost:27017/DisabilityAdvocacy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MPSchema = new mongoose.Schema({
  "Honorific Title": String,
  "First Name": String,
  "Last Name": String,
  "Constituency": String,
  "Province / Territory": String,
  "Political Affiliation": String,
  "Start Date": String,
}, { collection: "MPContacts" });

const MPModel = mpConnection.model("MPContact", MPSchema);
module.exports = MPModel;
