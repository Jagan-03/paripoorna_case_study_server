const express = require("express");
const router = express.Router();

// Models
const Candidate = require("../models/candidate.js");

router.get("/", async (req, res) => {
  try {
      const data = await Candidate.find({}).exec();
      res.send(data);
  } catch (error) {
      console.log(error);
  }
});

router.post("/", async(req, res) => {
    try {
      const newCandidate = new Candidate({
        ...req.body
      })
      await newCandidate.save();
      res.send(newCandidate);
    } catch (error) {
      console.log(error);
    }
})

router.patch("/", async(req, res) => {
  try {
    const candidate = req.body;
    
    await Candidate.findByIdAndUpdate(candidate._id, candidate);
    res.send("Candidate Updated");
  } catch (error) {
    console.log(error);
  }
})

router.delete("/", async(req, res) => {
  try {
    const candidateID = req.body.candidateID;
    
    await Candidate.findByIdAndDelete(candidateID);
    res.send("Candidate Removed");
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;

