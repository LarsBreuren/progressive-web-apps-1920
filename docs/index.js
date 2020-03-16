// Require third-party modules
const express = require('express');
const request = require('request');
const fetch = require('node-fetch');

// Config object
const config = {
	port: 3000
}

// Create new express app in 'app'
const app = express();
// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static(__dirname + '/public'));

// Create a home route
app.get('/', function(req, res) {

	fetch('https://swapi.co/api/people')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('people', {
		  personData: json.results,
		}); 
	}) 
});

app.get('/people', function(req, res) {

	fetch('https://swapi.co/api/people')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('people', {
		  personData: json.results,
		}); 
	}) 
});

app.get('/vehicles', function(req, res) {

	fetch('https://swapi.co/api/vehicles')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('vehicles', {
		  vehicleData: json.results,
		}); 
	}) 
});

app.get('/planets', function(req, res) {

	fetch('https://swapi.co/api/planets')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('planets', {
		  planetsData: json.results,
		}); 
	}) 
});

app.get('/starships', function(req, res) {

	fetch('https://swapi.co/api/starships')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('starships', {
			starshipsData: json.results,
		}); 
	}) 
});

app.get('/luke', function(req, res) {

	fetch('https://swapi.co/api/people/1')
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('luke', {
			lukeData: json,
		}); 
	}) 
});

app.get('/https://swapi.co/api/:cato/:id', function(req, res) {
	fetch("https://swapi.co/api/" + req.params.cato + "/" + req.params.id)
	.then(res => {
		return res.json()
	})

	.then((json) => {
		res.render('details', {
			details: json,
		}); 
	}) 
});



// Actually set up the server
app.listen(config.port, function() {
	console.log(`Application started on port: ${config.port}`);
});


// document.getElementById("people").addEventListener("click", navActive("people")); 
// document.getElementById("planets").addEventListener("click", navActive("planets")); 

// function navActive(x){
// 	var element = document.getElementById(x);
// 	element.classList.toggle("active");
// }