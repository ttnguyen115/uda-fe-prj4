const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const mockAPIResponse = require('./mockAPI');

dotenv.config();

const app = express();

app.use(express.static("dist"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/api", async (req, res) => {
  try {
    const urlString = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${req.body.txt}`
    const response = await axios.post(urlString);
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.send(err)
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

