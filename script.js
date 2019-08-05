var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/docs')); 

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));