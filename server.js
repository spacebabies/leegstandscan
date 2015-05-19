var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/details', function(request, response) {
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect(process.env.MONGOLAB_URI, function(err, db) {
    if(err) throw err;
    db.collection('contacts').insert(request.body);
  });

  response.send(request.body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
