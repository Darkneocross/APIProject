var express = require('express');
var app = express();

// app.get('/', function(res, req) {
// 	res.send('Hello World!');
// });

app.listen(5001, function() {
	console.log('Example app listening on port 5001');
});

app.use(express.static('Public'));