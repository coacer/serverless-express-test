const express = require('serverless-express/express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello Express Serverless');
});
 
module.exports = app
