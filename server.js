//link to connect
var connect = require('connect');

//link url module
var url = require('url');

// create new app using connect
var app = connect();

//create function to do math based on url
var result = function(req, res, next) {
	//do math
	var qs = url.parse(req.url, true).query;

	//get method and variables
	var method = qs.method;
	var x = qs.x;
	var y = qs.y;

if (method === 'add') {
	var total = parseFloat(x) + parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " + " + y + " = " + total);

	res.end();
}
if (method === 'subtract') {
	var total = parseFloat(x) - parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " - " + y + " = " + total);

	res.end();	
}
if (method === 'multiply') {
	var total = parseFloat(x) * parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " * " + y + " = " + total);

	res.end();		
}
if (method === 'divide') {
	var total = parseFloat(x) / parseFloat(y);

	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write(x + " / " + y + " = " + total);

	res.end();	
}
else {
	res.writeHead(200, {
		"Content-Type": "text-plain"
	});
	res.write("invalid query string... try -- http://localhost:3000/lab3?method=add&x=16&y=4");

	res.end();	
}
}
//route url to math function
app.use('/lab3', result);

app.listen(3000);
console.log ('connected and listening...');