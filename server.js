
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongo = require("./config/mongo.js");

// Importing routes
const candidateRoute = require("./routes/candidates.js");

const app = express();

// Using cors
app.use(cors());

// Parsing request body as JSON format
app.use(express.json({limit: '50mb', extended: true}));

// Configuring bodyParser
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

(async () => {
    try {
        // Mongodb Connection
        await mongo.connect();
        // Routes
        app.use("/candidates", candidateRoute);
    } catch (error) {
        console.log(error);
    }
})();
app.listen(process.env.port || 8080, () => console.log("Listening on PORT 3001"));
