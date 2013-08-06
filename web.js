var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var myStr;

app.use(express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  myStr = fs.readFileSync('index.html', 'utf-8');	
  response.send(myStr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
