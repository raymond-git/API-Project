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
  res.sendFile(__dirname + "/dog.html");
});


let option = {
	method: "GET",
	headers: {
		'Content-Type': 'application/json'
	}
}

app.post("/", function (req, res) {
  const fetchDog = req.body.doggyType;
  fetch("https://dog.ceo/api/breeds/list/all", option)
    .then((response) => response.json())
    .then((response) => {
	 // Go through the array to see if the user response exist in the database. If it exist it will be true otherwise false	
      if (response.message.hasOwnProperty(fetchDog)) {
		//Convert the data array to a string
		const responseString = JSON.stringify(response.message[fetchDog]);
		console.log(responseString);
        res.write(responseString);
        res.send();
      } else {
        res.write(`Dog breen not found: ${fetchDog}`);
        res.send();
      }
    })
    .catch((err) => console.error(err));
});

	
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
