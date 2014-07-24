var express = require('express');
var xmlParser = require('./index');

var app = express();

app.use(xmlParser);

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  res.send(req.body);
});

app.listen(3000);
