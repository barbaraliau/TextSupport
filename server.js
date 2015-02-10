var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var twilio = require('twilio');

var app = express();
var port = 9070;
var firebaseUrl = new Firebase('https://barbara-textsupport.firebaseio.com/numbers');
var accountSid = 'AC57f1bcf84df6000c412684b5428c6784';
var authToken = '4639f17566c1c72f3cedb6db0d446984'; 
var client = require('twilio')(accountSid, authToken);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// app.post('/api/support/messages', function(req, res){
// 	client.messages.create({
// 	to: '+18083437636',
// 	from: '+18016589695',
// 	body: req.body.message,
// }), function(err, message){
// 	return message;
// 		};

app.get('/support/resources/:resource_name', function(req, res){
	var resource_name = req.params.resource_name;
	req.resources.mayViewFilesFrom(resource_name, function(yes){
		if(yes){
			res.sendfile('/docs/' + resource_name);
		} else {
			res.send(404, 'Not found');
		}
	})
})

//res.status(200).json(stuff);





// app.post('/api/send_text_message', function(req, res){
// 	request.post('http://'+accountSid+':'+authToken@api.twilio.com/)

// })


app.listen(port, function(){
	console.log('Listening on port: ' + port);
})
