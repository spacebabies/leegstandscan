var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/details', function(request, response) {
  var Spreadsheet = require('google-spreadsheets-append');
  var spreadsheet = Spreadsheet({
      auth: {
          email: process.env.SERVICE_EMAIL,
          key: process.env.SERVICE_KEY
      },
      fileId: process.env.SPREADSHEET_KEY
  });

  yield spreadsheet.add(request.body);
  response.send(request.body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
