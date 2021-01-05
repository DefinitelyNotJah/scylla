// Loading up dependancies
const express = require('express');

const helmet = require('helmet');

const cors = require('cors');

const rateLimit = require("express-rate-limit");

// Starting our app
const app = express()

// Configuration
const config = require('./config.json')

// Port
const port = process.env.PORT || 5000

// Rate Limiter (2 requests per second)
const limiter = rateLimit({
  windowMs: 10 * 1000, // 15 minutes
  max: parseInt(config.LIMITER) // limit each IP to 100 requests per windowMs
});

// Middlewares
app.use(helmet())
app.use(cors())

/*
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})
*/

// Bodyparser equivilant 
app.use(express.json())

// Loading our routes
require('./routes')(app);

// Error Handing for next()
app.use((error, req, res, next) => {
	res.status(500)
	res.send(error.message);
});

// Initializing the App
app.listen(port, (err) => {
	if(err)
		return console.log(`[ERROR] An error has occurred : ${err}`)
	console.log(`[INFO] Listening on port ${port}`)
})


