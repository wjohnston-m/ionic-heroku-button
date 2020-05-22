var express = require('express'),
    app = express(),
    jsforce = require('jsforce');

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.use('/login', login);

function login() {
    console.log('logging in');
    var conn = new jsforce.Connection({
      loginUrl : 'https://test.salesforce.com'
    });
    conn.login('wjohnston@midlandira.com', 'Fr0zen34ZSmGGKJEMDRtd2Pz7cSJyAqf', function(err, res) {
      if (err) { return console.error(err); }
      conn.query('SELECT Id, Name FROM Account', function(err, res) {
        if (err) { return console.error(err); }
        console.log(res);
      });
    });
}