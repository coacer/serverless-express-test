const express = require('serverless-express/express');
const app = express();
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({});

app.get('/', (req, res) => {
  const params = {
    TableName: 'Post',
    Key: {
      id: 1
    }
  };
  dynamodb.get(params, (err, data) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }

    res.json(data);
  });
});
 
module.exports = app
