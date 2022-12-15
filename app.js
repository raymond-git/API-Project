const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fetch = require('node-fetch');
const { response } = require("express");




// For example, suppose you have a public directory that contains files like images, CSS, and HTML.
// You can use the express.static middleware to make it possible to access files from this folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});



app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//apikey: 0d19bd2c234606c01b940e65985a3561-us17
//List Id: 5b0c6ad6f2
