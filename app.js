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


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c77ac38ea7mshc3153da3be08b85p1fa043jsncb05780c8367',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics?country=all', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
	for(let i = 0; i < response.length;i++){
		if(response.length[i].contain("China")){
			console.log(response[i].country.cases);
		}
	}

	console.log("Test Commit");
	
// app.post("/", function (req, res) {
//   const firstName = req.body.fName;
//   const lastName = req.body.lName;
//   const email = req.body.email;

//   const client = require("@mailchimp/mailchimp_marketing");

//   client.setConfig({
//     apiKey: "0d19bd2c234606c01b940e65985a3561-us17",
//     server: "us17",
//   });

//   const run = async () => {
//     const response = await client.lists.addListMember(
//       "5b0c6ad6f2",
//       {
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName,
//         },
//       },
//       {
//         skipMergeValidation: false,
//       }
//     );

//     if (response.status === 200) {
//       res.sendFile(__dirname + "/success.html");
//     } else {
//       res.sendFile(__dirname + "/failure.html");
//     }
//     console.log(response);
//   };
//   run();
// });

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//apikey: 0d19bd2c234606c01b940e65985a3561-us17
//List Id: 5b0c6ad6f2
