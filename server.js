/* Serves the site */

var express = require('express');
var app = express();

app.use('', express.static('HTML'));

/* Start the server */
console.log('Server started')
app.listen(3000);
