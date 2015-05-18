var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/details', function(request, response) {
  var GoogleSpreadsheet = require("google-spreadsheet");
  var contacts = new GoogleSpreadsheet(process.env.SPREADSHEET_KEY);

  contacts.setAuth(process.env.GOOGLE_EMAIL, process.env.GOOGLE_PASSWORD, function(err){
    contacts.addRow(1, request.body);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
