// Require third-party modules
const express = require('express');
const request = require('request');
const fetch = require('node-fetch');


const port = process.env.PORT || 3000

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
app.get('/', function (req, res) {
			res.render('overview')
})
app.get('/offline', function (req, res) {
	res.render('offline')
})

			app.get('/:cato', function (req, res) {
				
				let cat = req.params.cato;
				console.log("catogorie is " + cat);

				fetch('https://swapi.co/api/' + req.params.cato)
					.then(res => {
						return res.json()
					})

					.then((items) => {
						const itemsWithId = items.results.map(item => {
							const id = item.url.split(req.params.cato + '/')[1]
							return {
								id: id,
								...item
							}
						})
						res.render(req.params.cato, {
							Data: itemsWithId,
						});
					})
			});

			app.get('/:cato/:id', function (req, res) {
				let cat = req.params.cato;
				let id = req.params.id;
				console.log("Je bekijkt " + id + " uit de catogorie " + cat);
				fetch("https://swapi.co/api/" + req.params.cato + "/" + req.params.id)
					.then(res => {
						return res.json()
					})

					.then((json) => {
						res.render('details', {
							details: json,
							link: req.params.cato,
						});
					})
			});



			// Actually set up the server
			app.listen(port, function () {
				console.log(`Application started on port: ${port}`);
			});


			// document.getElementById("people").addEventListener("click", navActive("people")); 
			// document.getElementById("planets").addEventListener("click", navActive("planets")); 

			// function navActive(x){
			// 	var element = document.getElementById(x);
			// 	element.classList.toggle("active");
			// }