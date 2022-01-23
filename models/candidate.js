const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  jobType: String,
  dob: String,
  prefferedLocation: [],
  profileImg: String,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
