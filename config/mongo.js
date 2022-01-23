const mongoose = require("mongoose");

// Mongodb Connection
const MONGO_URL =
  "mongodb+srv://jaganath:Michaelx7@cluster0.zy7jd.mongodb.net/pp_registration?retryWrites=true&w=majority";

const mongo = {
  async connect() {
    try {
      await mongoose.connect(MONGO_URL, { useNewUrlParser:true, useUnifiedTopology:true });
      console.log("Database connection established");
      console.log(`Connection to pp_registration successfull`);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = mongo;
