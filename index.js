// Require third-party modules
const express = require('express');


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

require('./routes')(app);

// Actually set up the server
app.listen(port, function () {
	console.log(`Application started on port: ${port}` + ' :)' );
});