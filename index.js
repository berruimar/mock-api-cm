const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const fs = require('fs');
const urlencodedParser = bodyParser.urlencoded({ extended: false, limit: '50mb' })
const RequestQ = require('express-request-queue');
const q = new RequestQ();

app.use(morgan('combined'));


const delay = require('delay');


(async function () {

	app.get('/', q.run(async (req, res) => {
		res.json({msg: "hola mundo"})
	}));

	app.post('/login', urlencodedParser, q.run(async (req, res) => {
		let tmpImgPath = "./tmp/" + Date.now() + "_image.png";
		if (req.headers.username === "asd" && req.headers.password === "asd") {
      res.status(200).json({message: "logged in!"};
    } else {
      res.status(400).json({message: "invalid credentials"});
    }
	}));

	app.listen(process.env.PORT || 8000, () => {
		console.log('Server listening!');
	});
})()
