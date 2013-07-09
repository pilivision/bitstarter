var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var myBuff = new Buffer(128); 
var myStr = fs.readFileSync('./index.html', 'utf-8');


app.get('/', function(request, response) {
  Response.send(myStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
