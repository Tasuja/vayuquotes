var express = require('express');
var app = express();
var fs= require('fs');
var xml=require('xml');
app.set('views', './view');
app.set('view engine','jade');

var read= require('readline-specific');
getData();
app.get('/', function (req, res) {
	getData();
	res.send('Hello World!');
});
app.get('/quote.xml', function (req, res) {
	getData();
	var xmldata=xml({Quote: [{title:title},{author:author}]}, {declaration:true});
    fs.writeFile('./view/quote.xml',xmldata,function(err){
        if (err) {
            console.log(err);
        }
        res.sendFile(__dirname + "/view/" + "quote.xml");
    });
});
app.get('/quote.html', function (req, res) {
	getData();
	res.render(__dirname+'/view/'+'quote',{Title:title, Author:author});
});
app.get('/quote.json', function (req, res) {
	getData();
	var jsondata = "{"+"\"title\":"+title.replace("\"","")+",\"author\":"+author+"}"
    fs.writeFile('./view/quote.json',jsondata,function(err){
        if (err) {
            console.log(err);
        }
        res.sendFile(__dirname + "/view/" + "quote.json");
    });
});
app.listen(process.env.PORT || 3000, function () {
	console.log('Example app listening on port 3000!');
});
var data=[];
var title="";
var author="";
function getData(){
	read.oneline('./quotes.csv', Math.floor((Math.random()*1001)+1),function(err,res){
		if (err) console.error(err)
		data=res.split(',');
		title=data.slice(0,data.length-1).join();
		author=data[data.length-1];
	});
}