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

		res.render('overview',)

});

app.get('/people', function(req, res) {
	// Send a plain string using res.send();
	// res.send('Hello world');

	fetch('https://swapi.co/api/people')
	.then(res => {
		console.log(res.status)
		return res.json()
	})

	// .then(json => console.log(json));

	.then((json) => {
		res.render('detail', {
		  personData: json.results,
		}); 
	}) 
});


// Actually set up the server
app.listen(config.port, function() {
	console.log(`Application started on port: ${config.port}`);
});