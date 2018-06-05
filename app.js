var express = require('express');
var app = express();
var read= require('readline-specific');
app.get('/', function (req, res) {
	res.send('Hello World!');
});
app.get('/quote.xml', function (req, res) {
	res.send('XML');
});
app.get('/quote.html', function (req, res) {
	res.send('HTML');
});
app.get('/quote.json', function (req, res) {
	res.send({'a':'b'});
});
app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening on port 3000!');
});
var data=[];
var title="";
var author="";
read.oneline('./quotes.csv', Math.floor((Math.random()*1001)+1),function(err,res){
	if (err) console.error(err)
	data=res.split(',');
	title=data[0].trim("\"");
	author=data[1];
	console.log('title: '+title)
});